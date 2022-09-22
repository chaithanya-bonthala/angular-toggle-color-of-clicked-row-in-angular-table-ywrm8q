import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular";

  rowClicked: any;

  filteredApiDataFiles = [
    { name: "Name 1", surname: "Surname 1" },
    { name: "Name 1", surname: "Surname 1" },
    { name: "Name 1", surname: "Surname 1" },
    { name: "Name 1", surname: "Surname 1" },
    { name: "Name 1", surname: "Surname 1" },
    { name: "Name 1", surname: "Surname 1" }
  ];

  changeTableRowColor(idx: any) {
    if (this.rowClicked === idx) this.rowClicked = -1;
    else this.rowClicked = idx;
  }
}
