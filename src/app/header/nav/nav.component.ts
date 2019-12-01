import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.scss"]
})
export class NavComponent implements OnInit {
  navLinks: NavLinks[] = [
    { title: "Work", route: "/work" },
    { title: "About", route: "/about" },
    { title: "Contact", route: "/contact" }
  ];

  @Input() vertical: boolean;

  constructor() {}

  ngOnInit() {
    console.log(this.vertical);
  }
}

interface NavLinks {
  title: string;
  route: string;
}
