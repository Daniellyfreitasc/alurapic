import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photos: any [] = [];
  
  
  //nome da variavel "http" e tipagem "HttpClient"
  constructor(
    private photoService: PhotoService,
    private activatedRoute: ActivatedRoute // indica a rota ativada no momento
    )
    { }
    
 ngOnInit(): void {

  const userName =  this.activatedRoute.snapshot.params['userName'];

  this.photoService
    .listFromUser(userName)
    .subscribe(photos => this.photos = photos);
    
 }

}
