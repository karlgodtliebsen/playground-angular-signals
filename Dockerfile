# Step 1: Build Angular App
FROM node:20-alpine3.20 AS builder
WORKDIR /app
RUN apk update && apk upgrade --available

# Debug: show current directory and files
RUN echo "📂 Current Directory (before COPY):" && pwd && echo "📄 Files:" && ls -l

# Try to copy files — assuming they exist in the build context
COPY package.json package-lock.json ./  
COPY nginx.conf ./                      

# Debug: show directory contents after COPY
RUN echo "✅ After COPY:" && ls -l

RUN npm ci

COPY . ./
RUN npm run build --configuration=production

# Step 2: Serve with NGINX
FROM nginx:stable-alpine

# Upgrade packages to fix vulnerabilities
RUN apk update && apk upgrade

#RUN echo " Built Angular files:" && ls -lh /app/dist/
RUN echo "nginx.conf COPY:" && ls -l

COPY --from=builder /app/dist/angular-signals-app /usr/share/nginx/html
COPY --from=builder /app/dist/angular-signals-app/browser /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

RUN echo "✔ NGINX CONF:" && cat /etc/nginx/conf.d/default.conf

EXPOSE 80
# Healthcheck for NGINX
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
    CMD wget --spider -q http://localhost:80/ || exit 1
