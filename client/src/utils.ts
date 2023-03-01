import dayjs, { Dayjs } from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
dayjs.extend(timezone);
dayjs.extend(utc);

export const getCurrentTimeZone = (): string => {
  return dayjs.tz.guess();
};

export const getLocalDateTime = (dateTime: Dayjs | null): string => {
  return dateTime?.local().format() ?? "";
};

export const convertToUTCTime = (date: string): string => {
  return dayjs(date).toISOString() ?? "";
};

export const convertToLocalTime = (date: string): string => {
  return dayjs(date).local().format();
};

export const getReadableLocalTime = (dateTime: Dayjs | null): string => {
  return dayjs(dateTime)
    .local()
    .format("MMM/DD/YYYY - HH:mm [GMT]Z")
    .toString();
};
