import { Component, OnInit } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: "app-dialog-menu",
  templateUrl: "./dialog-menu.component.html",
  styleUrls: ["./dialog-menu.component.scss"]
})
export class DialogMenuComponent implements OnInit {
  navLinks: NavLinks[] = [
    { title: "Home", route: "/" },
    { title: "Work", route: "/work" },
    { title: "About", route: "/about" },
    { title: "Contact", route: "/contact" }
  ];

  constructor(public dialogRef: MatDialogRef<DialogMenuComponent>) {}

  ngOnInit() {}

  close(): void {
    this.dialogRef.close();
  }
}

interface NavLinks {
  title: string;
  route: string;
}
