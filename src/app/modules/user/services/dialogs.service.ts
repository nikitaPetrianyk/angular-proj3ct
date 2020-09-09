import { Injectable } from '@angular/core';
import { UserDialogs, AllUsersDialogs } from '../models/models';
import { HttpClient } from '@angular/common/http';
import { DB_URL } from 'src/app/constants';
import { Observable } from 'rxjs';
import { map, delay } from 'rxjs/operators';
import { Dialogs } from '../models/dialogs.class';

@Injectable({ providedIn: 'root' })
export class DialogsService extends Dialogs {
  constructor(private http: HttpClient) {
    super();
  }

  public getDialogsByUserId(userId: string): Observable<UserDialogs> {
    return this.http.get<AllUsersDialogs>(`${DB_URL}/dialogs.json`).pipe(
      delay(500),
      map((dialogs: AllUsersDialogs) => {
        return dialogs.messages.find(userDialogs => {
          return userDialogs.id === userId;
        });
      })
    );
  }
}
