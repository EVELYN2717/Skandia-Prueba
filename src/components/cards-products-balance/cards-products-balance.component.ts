import { SlicePipe } from '@angular/common';
import { AfterViewInit, Component, OnInit, inject } from '@angular/core';
import { CardsProductsBalanceService } from '../../services/cards-products-balance.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-cards-products-balance',
  standalone: true,
  imports: [SlicePipe, HttpClientModule],
  providers: [CardsProductsBalanceService],
  templateUrl: './cards-products-balance.component.html',
  styleUrl: './cards-products-balance.component.scss',
})
export class CardsProductsBalanceComponent implements OnInit,  AfterViewInit {

  
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
  ];

  public listCard: any;
  public direction: string = '';
  public statusLeftButton = 'unused';
  public statusRightButton = 'used';
  
  constructor(public cardsProductService: CardsProductsBalanceService) { }

  ngOnInit(): void {
    
  }

  leftCards() {
    document.getElementById("0-card")!.style.display = "block";
    document.getElementById("1-card")!.style.display = "block";
    document.getElementById("2-card")!.style.display = "block";
    document.getElementById("3-card")!.style.display = "none";
    document.getElementById("4-card")!.style.display = "none";

    this.statusLeftButton = 'unused';
    this.statusRightButton = 'used';
  }

  rightCards() {
    document.getElementById("0-card")!.style.display = "none";
    document.getElementById("1-card")!.style.display = "none";
    document.getElementById("2-card")!.style.display = "block";
    document.getElementById("3-card")!.style.display = "block";
    document.getElementById("4-card")!.style.display = "block";
    this.statusLeftButton = 'used';
    this.statusRightButton = 'unused';
  }

  ngAfterViewInit() {
    this.getProducts();
  }


  async getProducts() {
    await this.cardsProductService.getCardProducts().then( (response) => {
      this.listCard = response;
      document.getElementById("3-card")!.style.display = "none";
      document.getElementById("4-card")!.style.display = "none";
    });
    
  }
  

}
