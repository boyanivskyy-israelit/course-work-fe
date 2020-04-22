import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  catalog = [
    {
      name: 'Volkswagen B7',
      subMenu: ['2015', '2016', '2017', '2018', '2019', '2020'],
    },
  ];

  // navigationItems = ['Каталог', 'Авто з США', 'Послуги', 'Блог', 'Про нас', 'Контакти', 'FAQ'];
  navigationItems = [
    {
      name: 'Каталог',
      subMenu: [
        {
          name: 'Volkswagen B8',
          subMenu: ['2015', '2016', '2017', '2018', '2019', '2020'],
        },
      ],
    },
  ];

  constructor() {}

  ngOnInit() {}
}
