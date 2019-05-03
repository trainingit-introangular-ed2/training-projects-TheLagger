import { Component, OnInit } from '@angular/core';
import { faHome, faList } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = '¡Bienvenido a la aplicación de práctica de Angular!';
  public homeIcon = faHome;
  public listIcon = faList;

  constructor() {}

  ngOnInit() {}
}
