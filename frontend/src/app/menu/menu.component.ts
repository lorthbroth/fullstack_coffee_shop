import {Component, OnInit} from '@angular/core';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit {
  menuItems: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getMenu().subscribe(data => {
      this.menuItems = data;
    });
  }

}
