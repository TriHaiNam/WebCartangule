import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardServiceService } from "../../services/card-service.service";

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  constructor(public cardService: CardServiceService) { }

  @Input() Name: string = 'Tên';
  @Input() Mess: string = 'Mô Tả Ngắn';
  @Input() id: string = 'id';
  @Input() Pride: number = 0;
  @Input() InStock: number = 0;
  quantity: number = 1;

  addToCard(value: any) {
    this.cardService.addToCard(value);
    console.log(`Button clicked with value: ${value}`);
  }
}
