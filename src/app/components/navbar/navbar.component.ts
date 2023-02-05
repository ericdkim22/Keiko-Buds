import { Component } from '@angular/core';
import { MenuItem } from 'src/app/models/menu-item';
import {MatMenuModule} from '@angular/material/menu';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  objectKeys = Object.keys;
  dogServices: MenuItem[] = [
    {
      serviceName: "dog sergice 1",
      pageUrl: "url1"
    },
    {
      serviceName: "dpog service 2",
      pageUrl: "url2"
    },
    {
      serviceName: "dog service 3",
      pageUrl: "url3"
    }
  ];

  items = [
    {
      name: 'One'
    },
    {
      name: 'Two',
      children: [
        {
          name: 'TwoOne',
          children: [
            {
              name: 'TwoOneOne'
            }
          ]
        },
        {
          name: 'TwoTwo',
          children: [
            {
              name: 'TwoTwoOne'
            },
                        {
              name: 'TwoTwoTwo'
            }
          ]
        }
      ]
    },
    {
      name: 'Three'
    }
  ]
  
}


