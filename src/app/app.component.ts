import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hello-world';
  imgUrl="";
  url="";
  userName: String = "";

  ngOnInit(): void {
    this.title = "Hello from BridgeLabz";
    this.imgUrl = "../assets/BL_logo_square_jpg.jpg";
    this.url = "https://www.bridgelabz.com";
    this.userName = "Daxil";
  } 

  onClick($event: any) {
    console.log("Save button is clicked!", $event);
    window.open(this.url, "_blank");
  }
}
