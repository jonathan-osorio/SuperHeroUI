import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SuperHeroesComponent } from './components/super-heroes/super-heroes.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'Heroes';

  
}
