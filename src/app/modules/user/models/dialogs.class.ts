import { Observable, Subject } from 'rxjs';
import { UserDialogs } from './models';

export abstract class Dialogs {
  public searchingProcessInfo$: Subject<string> = new Subject<string>();
  public selectedDialogId$: Subject<string> = new Subject<string>();

  public abstract getDialogsByUserId(userId: string): Observable<UserDialogs>;
}
