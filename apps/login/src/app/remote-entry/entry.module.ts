import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { APP_DATA } from '../app.provider'
import { RemoteEntryComponent } from './entry.component';

@NgModule({
  declarations: [RemoteEntryComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: RemoteEntryComponent,
      },
    ]),
  ],
  providers: [
    {
      provide: APP_DATA,
      useValue: { remote: 'login-entry' }
    }
  ],
})
export class RemoteEntryModule {}
