
import { Component, ElementRef, OnInit, QueryList, Renderer2, ViewChildren } from '@angular/core';

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
  @ViewChildren('selectSubNavMenu') selectSubNavMenu !: QueryList<ElementRef>;
  idMenuActive?: number;
  idSubmenuActive?: number;
  idMenusOpened: number[] = [];

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
      icoNavMenu: 'fa-regular fa-circle-check',
      subNavmenu: [
        { idSubNavMenu: 1, nameSubNavMenu: 'Aplicar Pagos Masivo', icoSubNavMenu: 'fa-solid fa-house' },
        { idSubNavMenu: 2, nameSubNavMenu: 'Reporte Liquidacion', icoSubNavMenu: 'fa-solid fa-house' },
        { idSubNavMenu: 3, nameSubNavMenu: 'Pagos No Tradicionales', icoSubNavMenu: 'fa-solid fa-chart-line' },
        { idSubNavMenu: 4, nameSubNavMenu: 'Reporte Niubiz - Tunki', icoSubNavMenu: 'fa-solid fa-house' }
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
      icoNavMenu: 'fa-regular fa-file-lines',
      subNavmenu: [
        { idSubNavMenu: 5, nameSubNavMenu: 'Simulador de Cronogramas Pagos', icoSubNavMenu: 'fa-solid fa-house' },
        { idSubNavMenu: 6, nameSubNavMenu: 'Opcion 200', icoSubNavMenu: 'fa-solid fa-house' },
        { idSubNavMenu: 7, nameSubNavMenu: 'Opcion 300', icoSubNavMenu: 'fa-solid fa-house' },
        { idSubNavMenu: 8, nameSubNavMenu: 'Opcion 400', icoSubNavMenu: 'fa-solid fa-house' },
        { idSubNavMenu: 9, nameSubNavMenu: 'Opcion 500', icoSubNavMenu: 'fa-solid fa-house' },
        { idSubNavMenu: 10, nameSubNavMenu: 'Opcion 600', icoSubNavMenu: 'fa-solid fa-house' }
      ]!
    },
    {
      idNavMenu: 5,
      nameSubNavMenu: 'Registrar Menu',
      typeNavMenu: 'UN',
      icoNavMenu: 'fa-regular fa-bell'
    },
    {
      idNavMenu: 6,
      nameSubNavMenu: 'Nuevo Clientes',
      typeNavMenu: 'LI',
      icoNavMenu: 'fa-regular fa-envelope',
      subNavmenu: [
        { idSubNavMenu: 11, nameSubNavMenu: 'Simulador de Cronogramas Pagos', icoSubNavMenu: 'fa-solid fa-house' },
        { idSubNavMenu: 12, nameSubNavMenu: 'Opcion 200', icoSubNavMenu: 'fa-solid fa-house' },
        { idSubNavMenu: 13, nameSubNavMenu: 'Opcion 300', icoSubNavMenu: 'fa-solid fa-house' },
        { idSubNavMenu: 14, nameSubNavMenu: 'Opcion 400', icoSubNavMenu: 'fa-solid fa-house' },
        { idSubNavMenu: 15, nameSubNavMenu: 'Opcion 500', icoSubNavMenu: 'fa-solid fa-house' },
        { idSubNavMenu: 16, nameSubNavMenu: 'Opcion 600', icoSubNavMenu: 'fa-solid fa-house' }
      ]!
    }
  ];

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  toogleMenu(id_menu_Active: number) {
    let allSubMenu = this.selectSubNavMenu.toArray(); //Capturamos todos los Submenus
    
    // Recorremos todos los SubMenus
    allSubMenu.forEach((rs: ElementRef) => {
      let idMenu    = parseFloat(rs.nativeElement.id);      // ID del Menu
      let heightMax = rs.nativeElement.scrollHeight + 'px'; // Alto Minimo para mostrar el HTML

      if (idMenu == id_menu_Active) {
        if (this.idMenusOpened.includes(idMenu)) { // Existe ID Menu Abierto
          this.idMenusOpened = this.idMenusOpened.filter(x => x != idMenu); // Removemos ID Menu
          this.renderer.setStyle(rs.nativeElement, 'height', '0px'); // Ocultamos Menu
        } else {
          this.idMenusOpened.push(idMenu); // Añadimos ID Menu
          this.renderer.setStyle(rs.nativeElement, 'height', heightMax); // Mostramos Menu
        }
      } else {
        this.renderer.setStyle(rs.nativeElement, 'height', '0px'); // Ocultamos Menu
        this.idMenusOpened = this.idMenusOpened.filter(x => x != idMenu); // Removemos ID Menu
      }
    });

    //console.log("MENUS ABIERTOS:",  this.idMenusOpened)
  }

  menuActive(id_menu_active: number){
    this.idMenuActive = id_menu_active; // Asignamos el ID como Activo
    this.toogleMenu(id_menu_active);
  };

  subMenuActive(id_submenu_active: number){
    this.idSubmenuActive = id_submenu_active; // Asignamos el ID como Activo
  };


}
