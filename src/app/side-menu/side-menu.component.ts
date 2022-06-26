import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {
  
  idMenuActive:string = '';

  constructor() { }

  ngOnInit(): void {
  }

  toogleMenu($event: any, id_menu_Active: string){
    console.log("parent:\n",$event.target.parentNode);
    let html = $event.target.parentNode.nextSibling == null ? $event.target : $event.target.parentNode.nextSibling;

    if (this.idMenuActive == id_menu_Active ){
      this.idMenuActive = '';
    } else {
      this.idMenuActive = id_menu_Active;
    }
    

    let height = 0;
    


    if(html.clientHeight == "0"){
      height = html.scrollHeight;
    };

    Array.from( document.querySelectorAll( "th .sorting" ) ).forEach( function( ele ){
      ele.classList.remove( "active" );
    });
    
    html.style.height = `${height}px`;

    console.log("Parents parent sibling:\n", html.clientHeight, '\n',html, '\n',$event.target);
  }


  


}
