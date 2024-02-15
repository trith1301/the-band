import { PLATFORM_ID, OnInit, Inject, Component } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';

import { HeaderComponent } from './components/header/header.component';

import { Show, BandMember, ShowTickets } from './core/types';
import { SHOWS, BAND_MEMBERS, SHOW_TICKETS } from './core/data';

const imports = [CommonModule, HeaderComponent];

@Component({
  selector: 'the-band-root',
  standalone: true,
  imports: imports,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  shows: Show[] = [];
  bandMembers: BandMember[] = [];
  showTickets: ShowTickets[] = [];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    this.shows = SHOWS;
    this.bandMembers = BAND_MEMBERS;
    this.showTickets = SHOW_TICKETS;

    if (isPlatformBrowser(this.platformId)) {
      this.mountCarousel('.shows-carousel');
    }
  }

  /** Only call when current platform is browser */
  mountCarousel(selector: string) {
    const swiper = new Swiper(selector, {
      rewind: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      modules: [Autoplay],
    });
  }
}
