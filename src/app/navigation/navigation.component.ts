import { Component, OnInit } from '@angular/core';
import { MenuItem, PrimeIcons } from 'primeng/api';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  items: MenuItem[];
  constructor() {}

  ngOnInit(): void {
    this.items = [
      { label: 'All WOOD', icon: 'pi pi-table', routerLink: 'all-wod' },
      { label: 'Log', icon: 'pi pi-chart-bar', routerLink: 'log' },
    ];
  }
}
