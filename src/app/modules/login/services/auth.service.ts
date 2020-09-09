import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { FbAuthResponse, User } from 'src/app/shared/models/models';
import { HttpClient } from '@angular/common/http';
import { AUTH_SIGNIN, AUTH_SIGNUP, API_KEY } from 'src/app/constants';
import { tap, catchError } from 'rxjs/operators';
import { Auth } from 'src/app/shared/models/auth.class';

@Injectable({ providedIn: 'root' })
export class AuthService extends Auth {
  constructor(private http: HttpClient) {
    super();
  }

  public createUser(signUpPayload: User): Observable<FbAuthResponse> {
    return this.http.post<FbAuthResponse>(
      `${AUTH_SIGNUP}${API_KEY}`,
      JSON.stringify({
        ...signUpPayload,
        returnSecureToken: this.returnSecureToken
      })
    );
  }

  public login(loginPayload: User): Observable<FbAuthResponse> {
    return this.http
      .post<FbAuthResponse>(
        `${AUTH_SIGNIN}${API_KEY}`,
        JSON.stringify({
          ...loginPayload,
          returnSecureToken: this.returnSecureToken
        })
      )
      .pipe(
        tap((response: FbAuthResponse) => {
          this.saveAuthToken(response.idToken);
          this.localId$.next(`${response.localId}`);
        }),
        catchError(this.handleFbError.bind(this))
      );
  }
}
