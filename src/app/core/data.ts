import { Show, BandMember, ShowTickets, TicketDates } from './types';

export const SHOWS: Show[] = [
  {
    title: 'Los Angeles',
    description: 'We had the best time playing at Venice Beach!',
    image: '/assets/img/show-images/show-image-1.jpeg',
  },
  {
    title: 'New York',
    description: 'The atmosphere in New York is lorem ipsum.',
    image: '/assets/img/show-images/show-image-2.jpeg',
  },
  {
    title: 'Chicago',
    description: "Thank you, Chicago - A night we won't forget.",
    image: '/assets/img/show-images/show-image-3.jpeg',
  },
];

export const BAND_MEMBERS: BandMember[] = [
  {
    name: 'Tuomas Holopainen',
    avatar: '/assets/img/band-members/tuomas-holopainen.png',
  },
  {
    name: 'Emppu Vuorinen',
    avatar: '/assets/img/band-members/emppu-vuorinen.png',
  },
  {
    name: 'Troy Donockley',
    avatar: '/assets/img/band-members/troy-donockley.png',
  },
  {
    name: 'Floor Jansen',
    avatar: '/assets/img/band-members/floor-jansen.png',
  },
  {
    name: 'Kai Hahto',
    avatar: '/assets/img/band-members/kai-hahto.png',
  },
  {
    name: 'Jukka Koskinen',
    avatar: '/assets/img/band-members/jukka-koskinen.png',
  },
];

export const SHOW_TICKETS: ShowTickets[] = [
  {
    month: 'September',
    available: 0,
  },
  {
    month: 'October',
    available: 3,
  },
  {
    month: 'June',
    available: 0,
  },
  {
    month: 'July',
    available: 2,
  },
];

export const TICKET_DATES: TicketDates[] = [
  {
    place: 'New York',
    date: 'Fri 27 Nov 2016',
    description: 'Praesent tincidunt sed tellus ut rutrum sed vitae justo.',
    thumbnail: '/assets/img/tickets-date/new-york.jpeg',
  },
  {
    place: 'Paris',
    date: 'Sat 28 Nov 2016',
    description: 'Praesent tincidunt sed tellus ut rutrum sed vitae justo.',
    thumbnail: '/assets/img/tickets-date/paris.jpeg',
  },
  {
    place: 'Paris',
    date: 'Sat 28 Nov 2016',
    description: 'Praesent tincidunt sed tellus ut rutrum sed vitae justo.',
    thumbnail: '/assets/img/tickets-date/paris.jpeg',
  },
  {
    place: 'San Francisco',
    date: 'Sun 29 Nov 2016',
    description: 'Praesent tincidunt sed tellus ut rutrum sed vitae justo.',
    thumbnail: '/assets/img/tickets-date/san-francisco.jpeg',
  },
];
