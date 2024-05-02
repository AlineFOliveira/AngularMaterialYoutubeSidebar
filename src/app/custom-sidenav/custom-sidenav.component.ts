import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';


export type MenuItem = {
  icon: string;
  label: string;
  route: any;
}

@Component({
  selector: 'app-custom-sidenav',
  standalone: true,
  imports: [MatListModule],
  templateUrl: './custom-sidenav.component.html',
  styleUrl: './custom-sidenav.component.scss'
})
export class CustomSidenavComponent {
  menuItems = signal<menuItem[]>([

  ])

}
