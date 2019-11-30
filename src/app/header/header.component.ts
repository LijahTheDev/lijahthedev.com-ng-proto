import { Component, OnInit, ElementRef, Input } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  private screenWidth: number;
  private _moveX = 0;
  private _moveY = 0;
  video: string;
  position: string;

  @Input() private _video: string;
  @Input() image: string;
  @Input() bgVideo: boolean;
  @Input() verticalNav: boolean;

  constructor(private _elementRef: ElementRef) {}

  ngOnInit() {
    this.videoByDeviceSize();
  }

  moveBg({ pageX, pageY }: MouseEvent): void {
    this._moveX = (pageX * 1) / 25;
    this._moveY = (pageY * 1) / 25;
    this.position = this._moveX + "px " + this._moveY + "px";
  }

  videoByDeviceSize() {
    let headerElement = this._elementRef.nativeElement.querySelector("header");
    this.screenWidth = headerElement.clientWidth;

    const sizedVideo =
      this.screenWidth <= 420
        ? `/assets/videos/${this._video}-small.mp4`
        : `/assets/videos/${this._video}.mp4`;

    console.log(sizedVideo);

    this.video = sizedVideo;
  }
}
