import { Inject, Component, OnInit, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Credentials } from '@seek-end/core/entities';
import { APP_DATA } from '../app.provider';

class LoginForm extends FormGroup {
  constructor(readonly element: HTMLElement) {
    super({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }

  submit() {
    this.element.dispatchEvent(
      new CustomEvent<Credentials>('login', {
        detail: this.value
      })
    )
  }
}

@Component({
  selector: 'remote-login-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss'],
})
export class RemoteEntryComponent implements OnInit {
  form: LoginForm

  constructor(
    @Inject(APP_DATA) readonly data: Record<string, string>,
    readonly elRef: ElementRef<HTMLElement>
  ) {
    console.log(data);
    
    this.form = new LoginForm(elRef.nativeElement);
  }

  ngOnInit() {
    document.dispatchEvent(
      new CustomEvent('seek-front-end', {
        detail: 'remote-login-entry'
      })
    )
  }
}
