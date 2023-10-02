import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Message } from 'src/app/models/message';
import { GenericMessageService } from 'src/app/services/generic-message.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [MessageService]
})
export class HeaderComponent implements OnInit {

  constructor(
    private router: Router,
    private genericMessageService: GenericMessageService,
    private messageService: MessageService) { }

  ngOnInit(): void {
    this.genericMessageService.messageEvent.subscribe(message => {
      if (message)
        this.showMessaggeToast(message);
    });
  }

  redirectToHome():void{
    this.router.navigate(['productos']).then();
  }

  private showMessaggeToast(message: Message): void{
    this.messageService.add({
            severity: message.severity,
            summary: message.summary,
            detail: message.detail
    });
  }

}
