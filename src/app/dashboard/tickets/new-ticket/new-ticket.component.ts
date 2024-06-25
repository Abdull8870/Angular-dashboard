import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {ButtonComponent} from "../../../shared/button/button.component";
import {ControlComponent} from "../../../shared/control/control.component";

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [
    ButtonComponent,
    ControlComponent,
    FormsModule
  ],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent {

  @ViewChild('forms') form?:ElementRef<HTMLFormElement>;
  
  onFormsSubmit(title: string,text:string) {
  console.log("title = "+title+" Request = "+text);
  this.form?.nativeElement.reset();
  // this.form?.nativeElement.get
 }

}
