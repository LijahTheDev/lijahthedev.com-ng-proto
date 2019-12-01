import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"]
})
export class ContactComponent implements OnInit {
  socialBoxes: SocialBox[] = [
    {
      title: "GitHub",
      icon: "/assets/svgs/github-brands.svg",
      color: "grey",
      link: "https://github.com/LijahTheDev"
    },
    {
      title: "LinkedIn",
      icon: "/assets/svgs/linkedin-brands.svg",
      color: "blue",
      link: "https://www.linkedin.com/in/lijahthedev"
    }
  ];

  constructor() {}

  ngOnInit() {}
}

interface SocialBox {
  title: string;
  icon: string;
  color: string;
  link: string;
}
