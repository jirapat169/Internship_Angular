import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  public formLogin: FormGroup;
  public formForgotpasswotd: FormGroup;

  constructor(private fb: FormBuilder, public _modal: ModalService) {
    this.formLogin = this.fb.group({
      username: ['', [Validators.required, Validators.pattern(/^[\w\.]+$/)]],
      password: ['', [Validators.required, Validators.pattern(/^[\w\.]+$/)]],
    });

    this.formForgotpasswotd = this.fb.group({
      username: [''],
      firstname: [''],
      lastname: [''],
      personal_id: [''],
      phone: [''],
    });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {}

  public onLoginSubmit = (): void => {
    console.log(this.formLogin.value);
  };

  public onForgotpassword = (): void => {
    console.log(this.formForgotpasswotd.value);
  };
}
