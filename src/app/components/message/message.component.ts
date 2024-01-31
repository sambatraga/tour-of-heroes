import { Component } from '@angular/core';
import { MessageService } from '../../services/message-service/message.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './message.component.html',
  styleUrl: './message.component.css'
})
export class MessageComponent {

  constructor(public messageService: MessageService) { }

}
