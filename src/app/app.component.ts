import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CardComponent} from "./components/card/card.component";
import {CardServiceService} from "./services/card-service.service";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  title = 'ProjectTwo';

  constructor(public cardService:CardServiceService ) { }

  removeFromCart(index: any) {
    this.cardService.removeCard(index);
  }
}
