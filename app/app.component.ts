import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedFile = null;
  fileName: any;
  constructor(private httpClient: HttpClient) {

  }

  onFileChange(event) {
  	console.log(event);
  	this.selectedFile = event.target.files[0];
	this.fileName = event.target.files[0].name;
  }
  	
}

