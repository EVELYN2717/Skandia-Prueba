import { SlicePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards-products-balance',
  standalone: true,
  imports: [SlicePipe],
  templateUrl: './cards-products-balance.component.html',
  styleUrl: './cards-products-balance.component.scss'
})
export class CardsProductsBalanceComponent implements OnInit {

  public iconCard =[
    'Icon awesome-medal.svg',
    'Trofeo.svg',
    'Handheart.svg'
  ];

  public colorBorder = [
    '#A4D071',
    '#A5D7E1',
    '#63AABC',
    '#FF9460'
  ]


  ngOnInit(): void {}

}
