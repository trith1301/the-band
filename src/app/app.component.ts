import {
  PLATFORM_ID,
  OnInit,
  ViewChild,
  ElementRef,
  Inject,
  Component,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  FormsModule,
  ReactiveFormsModule,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { Show, BandMember, ShowTickets, TicketDates } from './core/types';
import { SHOWS, BAND_MEMBERS, SHOW_TICKETS, TICKET_DATES } from './core/data';

const imports = [
  // Modules
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  // Components
  HeaderComponent,
  FooterComponent,
];

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
  ticketDates: TicketDates[] = [];

  ticketBookerModalForm = new FormGroup({
    quantity: new FormControl(null, [
      Validators.required,
      Validators.min(1),
      Validators.max(15),
    ]),
    email: new FormControl(''),
  });

  @ViewChild('modal', { static: true }) modal!: ElementRef;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    this.shows = SHOWS;
    this.bandMembers = BAND_MEMBERS;
    this.showTickets = SHOW_TICKETS;
    this.ticketDates = TICKET_DATES;

    if (isPlatformBrowser(this.platformId)) {
      this.mountCarousel('.shows-carousel');

      window.addEventListener('click', (event) => {
        if (event.target == this.modal.nativeElement) {
          this.toggleModal();
        }
      });
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

  /** Only call when current platform is browser */
  toggleModal() {
    const modal = this.modal.nativeElement;
    const display = modal.style.display;

    if (display === 'none' || display === '') {
      modal.style.display = 'block';
    } else {
      modal.style.display = 'none';
    }
  }

  submitTicketBooker() {
    console.log(this.ticketBookerModalForm.get('quantity')?.valid);
  }
}
