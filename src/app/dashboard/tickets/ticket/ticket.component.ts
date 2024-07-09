import { Component, input, output, signal } from '@angular/core';
import { Ticket } from '../ticket.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {

  data =input.required<Ticket>();
  complete=output();
  onToggleDetails=signal(true);

  onComplete() {
      this.complete.emit();
    }

    onToggleClick() {
      console.log(this.onToggleDetails());
      this.onToggleDetails.set(!this.onToggleDetails());
    }

}
