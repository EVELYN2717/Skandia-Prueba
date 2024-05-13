import { SlicePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-menu',
  standalone: true,
  imports: [SlicePipe],
  templateUrl: './navigation-menu.component.html',
  styleUrl: './navigation-menu.component.scss'
})
export class NavigationMenuComponent implements OnInit {
  
  public iconsMenu = [
    'hoja1.svg',
    'Tool.svg',
    'star.svg',
    'money.svg',
    'talk2.svg'
  ];

  public nameMenu = [
    'Contratos',
    'Acciones',
    'Objetivos',
    'Herramientas',
    'Servicio al cliente'
  ];

  public showMenu : boolean = false;

  ngOnInit(): void {}

  public hiddenMenu(view: boolean) {
    this.showMenu = view;    
  }
}

