// TODO(dylan): add nearby guest hotels and overflow Airbnbs once the guest list firms up.
export type Stay = {
  name: string;
  note: string;
  detail: string;
  url?: string;
};

export const accommodation: Stay[] = [
  {
    name: "The Venue",
    note: "Ceremony, reception, and immediate family",
    detail:
      "Our private finca outside Binissalem. The entire property is booked for the long weekend — family stays on-site, a private chef cooks for us, and the ceremony and reception both happen here.",
    url: "https://www.airbnb.ca/rooms/1558570980526721325",
  },
  {
    name: "Wedding Party House",
    note: "Groomsmen and bridesmaids",
    detail:
      "A separate house nearby for the wedding party — close enough to walk over for the rehearsal, far enough to actually sleep.",
    url: "https://www.airbnb.ca/rooms/888193767756667379",
  },
];
