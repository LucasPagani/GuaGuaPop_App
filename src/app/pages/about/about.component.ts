import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    MatSlideToggleModule
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
