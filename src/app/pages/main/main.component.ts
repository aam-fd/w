import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { cards$ } from 'src/app/mock/data';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public cards$: Observable<ICard[]> = cards$;

  public categories = [
    {
      link: 'decor', 
      title: 'Декор',
    },
    {
      link: 'stuff', 
      title: 'Stuff',
    },
    {
      link: 'restaurant', 
      title: 'Ресторан',
    },
    {
      link: 'bride', 
      title: 'Невеста',
    },
    {
      link: 'groom', 
      title: 'Жених',
    },
    {
      link: 'rings', 
      title: 'Кольца',
    },
    {
      link: 'xDay', 
      title: 'Х-день',
    },
    {
      link: 'transport', 
      title: 'Транспорт',
    },
    {
      link: 'travel', 
      title: 'HoneyMoon',
    },
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
