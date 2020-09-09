import { Component, OnInit } from '@angular/core';
import { DialogsService } from '../../services/dialogs.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-chat-info',
  templateUrl: './chat-info.component.html',
  styleUrls: ['./chat-info.component.scss']
})
export class ChatInfoComponent implements OnInit {
  public selectedDialogId$: Subject<string> = new Subject<string>();

  constructor(private dialogsService: DialogsService) {}

  ngOnInit(): void {
    this.selectedDialogId$ = this.dialogsService.selectedDialogId$;
  }
}
