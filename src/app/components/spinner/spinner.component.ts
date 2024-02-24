import {
  PLATFORM_ID,
  OnChanges,
  Component,
  Input,
  Inject,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

import { MAX_Z_INDEX } from '../../core/constants';

const imports = [CommonModule];

@Component({
  selector: 'the-band-spinner',
  standalone: true,
  imports: imports,
  templateUrl: './spinner.component.html',
  styleUrl: './spinner.component.scss',
})
export class SpinnerComponent implements OnChanges {
  zIndex: number = MAX_Z_INDEX;

  @Input() hidden: boolean = true;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnChanges() {
    if (isPlatformBrowser(this.platformId)) {
      this.toggleDocumentScroll();
    }
  }

  toggleDocumentScroll() {
    if (this.hidden) {
      document.body.style.overflowY = 'auto';
    } else {
      document.body.style.overflowY = 'hidden';
    }
  }
}
