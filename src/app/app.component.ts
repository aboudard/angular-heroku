import { Component, OnInit } from '@angular/core';
import { UtilsService } from './shared/utils.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private utils: UtilsService) {}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  title = 'ngHeroku';

  getTruc(): void {
    this.utils.getAll(null);
  }

}
