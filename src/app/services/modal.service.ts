import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private Modal: HTMLElement | null = null;

  constructor() {}

  public open = (id: string) => {
    this.Modal = window.document.getElementById(id);
    this.Modal?.classList.remove('is-active');
    this.Modal?.classList.add('is-active');
  };

  public close = (id: string) => {
    this.Modal = window.document.getElementById(id);
    this.Modal?.classList.remove('is-active');
  };
}
