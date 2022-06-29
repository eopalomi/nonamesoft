
import { Component, OnInit } from '@angular/core';

type MenuNav = {
  idNavMenu: number,
  nameSubNavMenu: string,
  typeNavMenu: string,
  icoNavMenu: string,
  subNavmenu?: {
    idSubNavMenu: number,
    nameSubNavMenu: string,
    icoSubNavMenu: string
  }[]
};

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  idMenuActive : number = 0;

  navMenu: MenuNav[] = [
    {
      idNavMenu: 1,
      nameSubNavMenu: 'Inicio 2',
      typeNavMenu: 'UN',
      icoNavMenu: 'fa-solid fa-house'
    },
    {
      idNavMenu: 2,
      nameSubNavMenu: 'Opciones',
      typeNavMenu: 'LI',
      icoNavMenu: 'fa-solid fa-house',
      subNavmenu: [
        { idSubNavMenu: 1, nameSubNavMenu: 'Opcion 10', icoSubNavMenu: 'fa-solid fa-house' },
        { idSubNavMenu: 2, nameSubNavMenu: 'Opcion 20', icoSubNavMenu: 'fa-solid fa-house' },
        { idSubNavMenu: 3, nameSubNavMenu: 'Opcion 30', icoSubNavMenu: 'fa-solid fa-chart-line' },
        { idSubNavMenu: 4, nameSubNavMenu: 'Opcion 40', icoSubNavMenu: 'fa-solid fa-house' }
      ]!
    },
    {
      idNavMenu: 3,
      nameSubNavMenu: 'Dashboard Ventas',
      typeNavMenu: 'UN',
      icoNavMenu: 'fa-solid fa-chart-line'
    },
    {
      idNavMenu: 4,
      nameSubNavMenu: 'Reportes',
      typeNavMenu: 'LI',
      icoNavMenu: 'fa-solid fa-house',
      subNavmenu: [
        { idSubNavMenu: 5, nameSubNavMenu: 'Opcion 100', icoSubNavMenu: 'fa-solid fa-house' },
        { idSubNavMenu: 6, nameSubNavMenu: 'Opcion 200', icoSubNavMenu: 'fa-solid fa-house' },
        { idSubNavMenu: 7, nameSubNavMenu: 'Opcion 300', icoSubNavMenu: 'fa-solid fa-house' },
        { idSubNavMenu: 8, nameSubNavMenu: 'Opcion 400', icoSubNavMenu: 'fa-solid fa-house' }
      ]!
    },
    {
      idNavMenu: 5,
      nameSubNavMenu: 'Registrar Menu',
      typeNavMenu: 'UN',
      icoNavMenu: 'fa-solid fa-house'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  toogleMenu($event: any, id_menu_Active: number) {
    console.log("parent:\n", $event.target.parentNode);

    if (this.idMenuActive == id_menu_Active) {
      this.idMenuActive = -99;
    } else {
      this.idMenuActive = id_menu_Active;
    };
    
    let html = $event.target.parentNode.nextSibling == null ? $event.target : $event.target.parentNode.nextSibling;
    
    let height = 0;

    if (html.clientHeight == "0") {
      height = html.scrollHeight;
    };

    Array.from(document.querySelectorAll("th .sorting")).forEach(function (ele) {
      ele.classList.remove("active");
    });
    
    html.style.height = `${height}px`;

    console.log("Parents parent sibling:\n", html.clientHeight, '\n', html, '\n', $event.target);
  }





}
