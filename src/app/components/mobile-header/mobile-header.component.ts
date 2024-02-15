import { Component } from '@angular/core';

@Component({
  selector: 'the-band-mobile-header',
  standalone: true,
  imports: [],
  templateUrl: './mobile-header.component.html',
  styleUrl: './mobile-header.component.scss',
})
export class MobileHeaderComponent {
  isShowMenu: boolean = false;

  toggleMenu() {
    this.isShowMenu = !this.isShowMenu;
  }
}
