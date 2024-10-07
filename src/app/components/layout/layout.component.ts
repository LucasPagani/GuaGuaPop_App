import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    RouterModule,
    HeaderComponent,
    FooterComponent,
    MatSidenavModule,
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

}
