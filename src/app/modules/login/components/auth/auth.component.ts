import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { User } from 'src/app/shared/models/models';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  public form: FormGroup;
  public isSubmitted: boolean = false;
  public errorMessage$: Subject<string>;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.initAuthForm();
    this.errorMessage$ = this.authService.errorMessage$;
  }

  private initAuthForm(): void {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6)
      ])
    });
  }

  public submit(): void {
    this.isSubmitted = true;
    const loginPayload: User = this.form.value;
    this.authService.login(loginPayload).subscribe(
      () => {
        this.isSubmitted = false;
        this.router.navigate(['/user']);
      },
      () => {
        this.isSubmitted = false;
      }
    );
  }
}
