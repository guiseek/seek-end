import { Credentials } from '@seek-end/core/entities';
import { Component, OnInit } from '@angular/core';

declare global {
  interface DocumentEventMap {
    'seek-front-end': CustomEvent<string>;
  }
  interface ElementEventMap {
    login: CustomEvent<Credentials>;
  }
}

type Events = Record<string, (keyof ElementEventMap)[]>;

const events: Events = {
  'remote-login-entry': ['login'],
};

@Component({
  selector: 'host-main-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'main';

  ngOnInit() {
    document.addEventListener('seek-front-end', (event) => {
      this.listenEvents(event.detail, events[event.detail]);
    });
  }

  listenEvents(selector: string, list: (keyof ElementEventMap)[]) {
    const seekEnd = document.querySelector(selector);
    if (seekEnd) {
      list.forEach((e) => seekEnd.addEventListener(e, console.log));
    }
  }
}
