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
import { SpinnerComponent } from './components/spinner/spinner.component';

import { NotificationService } from './services/notification/notification.service';

import { Show, BandMember, ShowTickets, TicketDates } from './core/types';
import { NOTIFICATION_TYPES } from './core/enums';
import { MAX_Z_INDEX } from './core/constants';
import { SHOWS, BAND_MEMBERS, SHOW_TICKETS, TICKET_DATES } from './core/data';

const imports = [
  // Modules
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  // Components
  HeaderComponent,
  FooterComponent,
  SpinnerComponent,
];

@Component({
  selector: 'the-band-root',
  standalone: true,
  imports: imports,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  zIndex: number = 0;
  loading: boolean = false;
  shows: Show[] = [];
  bandMembers: BandMember[] = [];
  showTickets: ShowTickets[] = [];
  ticketDates: TicketDates[] = [];

  contactForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', [Validators.required]),
  });
  ticketBookerModalForm = new FormGroup({
    quantity: new FormControl(null, [
      Validators.required,
      Validators.min(1),
      Validators.max(15),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  @ViewChild('modal', { static: true }) modal!: ElementRef;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private notificationService: NotificationService
  ) {}

  ngOnInit() {
    this.notificationService.setup({ color: 'red' });

    this.zIndex = MAX_Z_INDEX - 1;
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

  submitContactForm() {
    if (this.contactForm.valid) {
      this.loading = true;
      setTimeout(() => {
        this.notificationService.push(
          NOTIFICATION_TYPES.SUCCESS,
          'Successfully submitted!'
        );
        this.contactForm.reset();
        this.loading = false;
      }, 2000);
    } else if (isPlatformBrowser(this.platformId)) {
      for (let control in this.contactForm.controls) {
        if (this.contactForm.get(control)?.invalid) {
          document.getElementById(`contact-${control}`)?.focus();
          this.notificationService.push(
            NOTIFICATION_TYPES.ERROR,
            `Please fill out the focused field!`
          );
          break;
        }
      }
    }
  }

  /** Only call when current platform is browser */
  toggleModal() {
    const modal = this.modal.nativeElement;
    const display = modal.style.display;

    if (display === 'none' || display === '') {
      modal.style.display = 'block';
      document.body.style.overflowY = 'hidden';
    } else {
      modal.style.display = 'none';
      document.body.style.overflowY = 'auto';
    }
  }

  submitTicketBooker() {
    if (this.ticketBookerModalForm.valid) {
      this.loading = true;
      setTimeout(() => {
        this.notificationService.push(
          NOTIFICATION_TYPES.SUCCESS,
          'Successfully submitted!'
        );
        this.ticketBookerModalForm.reset();
        this.toggleModal();
        this.loading = false;
      }, 2000);
    } else if (isPlatformBrowser(this.platformId)) {
      for (let control in this.ticketBookerModalForm.controls) {
        if (this.ticketBookerModalForm.get(control)?.invalid) {
          document.getElementById(`${control}`)?.focus();
          this.notificationService.push(
            NOTIFICATION_TYPES.ERROR,
            `Please fill out the focused field!`
          );
          break;
        }
      }
    }
  }
}
