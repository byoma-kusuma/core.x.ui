import { replace } from "lodash";
import numeral from "numeral";
import { format, formatDistanceToNow } from "date-fns";

export function fCurrency(number: unknown) {
  return numeral(number).format(Number.isInteger(number) ? "$0,0" : "$0,0.00");
}

export function fPercent(number: number) {
  return numeral(number / 100).format("0.0%");
}

export function fNumber(number: unknown) {
  return numeral(number).format();
}

export function fShortenNumber(number: unknown) {
  return replace(numeral(number).format("0.00a"), ".00", "");
}

export function fData(number: unknown) {
  return numeral(number).format("0.0 b");
}

export function completeTrim(s: string) {
  return s.replace(/ +/g, " ");
}

export function fDate(date: Date) {
  return format(new Date(date), "dd MMMM yyyy");
}

export function fDateTime(date: Date) {
  return format(new Date(date), "dd MMM yyyy HH:mm");
}

export function fDateTimeSuffix(date: Date) {
  return format(new Date(date), "dd/MM/yyyy hh:mm p");
}

export function fToNow(date: Date) {
  return formatDistanceToNow(new Date(date), {
    addSuffix: true
  });
}

export function orNull(v: unknown) {
  return v || null;
}
