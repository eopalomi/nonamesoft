import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  toogleMenu: boolean = false;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
  }

  openCloseSideMenu(){
    this.toogleMenu = !this.toogleMenu;

    if (this.toogleMenu){
      this.renderer.addClass(this.document.body,'body_move');
      this.renderer.addClass(this.document.getElementById('menu_side'),'menu__side_move');
      this.renderer.setStyle(this.document.getElementById('header'), 'width', '100%');
    } else {
      this.renderer.removeClass(this.document.body,'body_move');
      this.renderer.removeClass(this.document.getElementById('menu_side'),'menu__side_move');
      this.renderer.setStyle(this.document.getElementById('header'), 'width', 'calc(100% - 240px)');
      
    }

    console.log("art")
  }

}
