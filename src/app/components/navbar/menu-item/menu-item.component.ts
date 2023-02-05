import { Component, OnInit, ViewChild, Input } from "@angular/core";
import { MatMenu, MatMenuModule } from "@angular/material/menu";


@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})

export class MenuItemComponent {
  @ViewChild("menu", {static: true}) menu: MatMenu
  @Input() items: {name: string, children: string[]}[];

  constructor() {}

  ngOnInit() {}
}
