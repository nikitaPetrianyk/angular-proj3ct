import { Pipe, PipeTransform } from '@angular/core';
import { Dialog } from '../models/models';
import { DialogsService } from '../services/dialogs.service';

@Pipe({
  name: 'searchDialogs'
})
export class SearchPipe implements PipeTransform {
  constructor(private dialogsService: DialogsService) {}
  transform(dialogs: Dialog[], searchingStr = ''): Dialog[] {
    if (!searchingStr.trim()) {
      this.dialogsService.searchingProcessInfo$.next();
      return dialogs;
    } else {
      const filteredDialogs = dialogs.filter(dialog => {
        return dialog.sender.toLocaleLowerCase().includes(searchingStr);
      });

      if (filteredDialogs.length) {
        this.dialogsService.searchingProcessInfo$.next();
        return filteredDialogs;
      } else {
        this.dialogsService.searchingProcessInfo$.next('Dialogs not found...');
      }
    }
  }
}
