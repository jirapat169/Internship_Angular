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

  constructor(private fb: FormBuilder, public _modal: ModalService) {
    this.formLogin = this.fb.group({
      username: ['', [Validators.required, Validators.pattern(/^[\w\.]+$/)]],
      password: ['', [Validators.required, Validators.pattern(/^[\w\.]+$/)]],
    });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {}

  public onLoginSubmit = (): void => {
    console.log(this.formLogin.value);
  };
}
