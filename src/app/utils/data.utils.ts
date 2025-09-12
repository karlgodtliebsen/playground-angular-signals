export class DateUtils {
  /** Returns the current date in YYYY-MM-DD format, time set to 00:00:00.000 UTC */
  static getCurrentStartOfDayString(): string {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return today.toISOString().split('T')[0];
  }

  /** Returns the current date in YYYY-MM-DD format, time set to 23:59:59.999 UTC */
  static getCurrentEndOfDayString(): string {
    const today = new Date();
    today.setHours(23, 59, 59, 999);
    return today.toISOString().split('T')[0];
  }

  /** Converts a date to YYYY-MM-DD format */
  static getDateString(date: Date): string {
    return date.toISOString().split('T')[0];
  }

  /** Converts a date to ISO 8601 string (UTC) */
  static getIsoString(date: Date): string {
    return date.toISOString();
  }

  static getStartOfTodayAsIsoString(): string {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d.toISOString();
  }

  static getEndOfTodayAsIsoString(): string {
    const d = new Date();
    d.setHours(24, 0, 0, 0);
    return d.toISOString();
  }
  static getStartOfToday(): Date {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  }

  static getEndOfToday(): Date {
    const d = new Date();
    d.setHours(24, 0, 0, 0);
    return d;
  }

  static getTodayPeriod(): Period {
    const d1 = new Date();
    d1.setHours(0, 0, 0, 0);
    const d2 = new Date();
    d2.setHours(24, 0, 0, 0);

    return new Period(d1, d2);
  }

  static getPeriod(from: Date, to: Date): Period {
    return new Period(from, to);
  }

  static getPeriodAsDay(from: Date, to: Date, span: number): Period {
    from.setHours(0, 0, 0, 0);
    to.setHours(span, 0, 0, 0);
    return new Period(from, to);
  }

  static getDatePeriod(from: Date, span: number): Period {
    from.setHours(0, 0, 0, 0);
    const to = new Date(from);
    to.setHours(span, 0, 0, 0);
    return new Period(from, to);
  }

  static getDatePeriodAsIsoStrings(from: Date, span: number): any {
    from.setHours(0, 0, 0, 0);
    const to = new Date(from);
    to.setHours(span, 0, 0, 0);
    return new Period(from, to).toIsoStrings();
  }

  static getTodayPeriodAsIsoStrings(): any {
    const d1 = new Date();
    d1.setHours(0, 0, 0, 0);
    const d2 = new Date();
    d2.setHours(24, 0, 0, 0);
    return new Period(d1, d2).toIsoStrings();
  }
}

export class Period {
  constructor(public from: Date, public to: Date) {}

  static fromDates(from: Date, to: Date): Period {
    return new Period(from, to);
  }

  static fromIsoStrings(startIso: string, endIso: string): Period {
    return new Period(new Date(startIso), new Date(endIso));
  }

  toIsoStrings(): { from: string; to: string } {
    return {
      from: this.from.toISOString(),
      to: this.to.toISOString(),
    };
  }
}
