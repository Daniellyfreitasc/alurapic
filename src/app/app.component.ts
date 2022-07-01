import { Component } from '@angular/core';
import { PhotoService } from './photos/photo/photo.service';


// provider: módulo com provider configurado


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 

  photos: any [] = [];
  //nome da variavel "http" e tipagem "HttpClient"
  constructor(photoService: PhotoService){
    photoService
    .listFromUser('flavio')
    .subscribe(photos => this.photos = photos);
    
  }
 
}
