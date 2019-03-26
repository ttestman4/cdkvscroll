import { Component } from '@angular/core';

@Component({
  selector: 'spa-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'spa';

  items = Array.from({ length: 10000 }).map((_, i) =>
    ({
      msg1: `Msg1 #${i}`,
      msg2: `Msg2 #${i}`,
      id: i
    }));
}
