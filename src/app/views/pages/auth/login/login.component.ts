import { Component, OnInit } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { SessionService } from 'src/app/core/services/session.service';
import { ToastService } from 'src/app/core/services/toast.service';
import { LoginForm } from 'src/app/core/shared/interfaces/forms/login-form.interface';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup<LoginForm>;

  constructor(
    private readonly fb: NonNullableFormBuilder,
    private readonly authService: AuthService,
    private sessionService: SessionService,
    private readonly toast: ToastService
  ) {}

  ngOnInit(): void {
    this.initLoginForm();
  }

  initLoginForm(): void {
    this.loginForm = this.fb.group({
      email: [
        '',
        [Validators.required, Validators.minLength(3), Validators.email],
      ],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  public get email() {
    return this.loginForm.get('email');
  }
  public get password() {
    return this.loginForm.get('password');
  }

  onSubmit() {
    this.authService.login(this.loginForm.value).subscribe({
      next: (res) => {
        this.sessionService.initLoggedInUser(res.token);
      },
      error: (error) => {
        this.toast._onApiError(error);
      },
      complete: () => {},
    });
  }
}
