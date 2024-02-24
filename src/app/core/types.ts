import { NOTIFICATION_TYPES } from './enums';

export type Show = {
  title: string | null;
  description: string | null;
  image: string | null;
};

export type BandMember = {
  name: string | null;
  avatar: string | null;
};

export type ShowTickets = {
  month: string | null;
  available: number;
};

export type TicketDates = {
  place: string | null;
  date: string | null;
  description: string | null;
  thumbnail: string | null;
};
