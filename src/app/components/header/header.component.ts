import {
  PLATFORM_ID,
  OnInit,
  Inject,
  HostListener,
  Component,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import { MobileHeaderComponent } from '../mobile-header/mobile-header.component';

import { SCREENS } from '../../core/enums';

const imports = [MobileHeaderComponent];

@Component({
  selector: 'the-band-header',
  standalone: true,
  imports: imports,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.isMobile();
  }

  isMobile(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      const screenWidth = window.innerWidth;
      return screenWidth <= SCREENS.MD;
    }

    return false;
  }
}
