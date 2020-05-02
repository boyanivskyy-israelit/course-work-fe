import { Component, OnInit } from '@angular/core';
import { NavItem } from '../../models/navigation-item';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  catalogSubItems: NavItem[] = [
    {
      displayName: 'Volkswagen B7',
      route: '/catalog/b7',
      disabled: true,
    },
    {
      displayName: 'Volkswagen B8',
      route: '/catalog/b7',
      disabled: true,
    },
    {
      displayName: 'Volkswagen Jetta',
      route: '/catalog/jetta',
      disabled: true,
    },
  ];

  constructor() {}

  ngOnInit() {}

  scrollToFooter() {
    window.scrollTo({
      behavior: 'smooth',
      top: window.innerHeight,
    });
  }
}
