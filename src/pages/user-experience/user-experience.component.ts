import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CardGoalsComponent } from '../../components/card-goals/card-goals.component';
import { NavigationMenuComponent } from '../../components/navigation-menu/navigation-menu.component';
import { CardsProductsBalanceComponent } from '../../components/cards-products-balance/cards-products-balance.component';

@Component({
  selector: 'app-user-experience',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    CardGoalsComponent,
    NavigationMenuComponent,
    CardsProductsBalanceComponent
  ],
  templateUrl: './user-experience.component.html',
  styleUrl: './user-experience.component.scss'
})
export class UserExperienceComponent {


}
