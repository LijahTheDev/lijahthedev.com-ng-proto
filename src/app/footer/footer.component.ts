import { Component, OnInit } from "@angular/core";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { DialogMenuComponent } from "./dialog-menu/dialog-menu.component";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"]
})
export class FooterComponent implements OnInit {
  constructor(public matDialog: MatDialog) {}

  ngOnInit() {}

  openDialog(): void {
    const dialogConfig = new MatDialogConfig();
    this.matDialog.open(DialogMenuComponent, {
      height: "400px",
      width: "600px"
    });
  }
}
