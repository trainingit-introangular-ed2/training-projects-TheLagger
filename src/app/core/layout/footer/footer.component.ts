import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../../projects/store.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public prueba$: any;

  constructor(private storeService: StoreService) {}

  ngOnInit() {
    this.prueba$ = this.storeService.select$();
  }
}
