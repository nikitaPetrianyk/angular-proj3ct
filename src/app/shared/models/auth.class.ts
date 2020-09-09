import { Observable, BehaviorSubject, Subject, throwError } from 'rxjs';
import { FbAuthResponse, User, ErrorMessage } from './models';
import { HttpErrorResponse } from '@angular/common/http';

export abstract class Auth {
  protected readonly returnSecureToken = true;

  public localId$: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public errorMessage$: Subject<string> = new Subject<string>();

  protected saveAuthToken(authToken: string): void {
    localStorage.setItem('authToken', authToken);
  }

  protected handleFbError(fbError: HttpErrorResponse): Observable<string> {
    const message: ErrorMessage = fbError.error.error.message;
    switch (message) {
      case 'EMAIL_NOT_FOUND': {
        this.errorMessage$.next('Email not found, try again');
        break;
      }
      case 'INVALID_EMAIL': {
        this.errorMessage$.next('Entered email is invalid');
        break;
      }
      case 'INVALID_PASSWORD': {
        this.errorMessage$.next('Entered password is invalid');
        break;
      }
    }
    return throwError(fbError);
  }

  public logOut(): void {
    localStorage.clear();
  }

  public isAccessAllowed(): boolean {
    return !!localStorage.getItem('authToken');
  }

  public abstract login(loginPayload: User): Observable<FbAuthResponse>;
  public abstract createUser(signUpPayload: User): Observable<FbAuthResponse>;
}
