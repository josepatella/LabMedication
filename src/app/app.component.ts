import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Medicine';

  abrir: boolean = false;

barraLateral() {
  this.abrir = !this.abrir;
}
}

