import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Photo } from './photo';


const API = 'http://localhost:3000';


//NullInjectorError: No provider for PhotoService! 
@Injectable({ providedIn: 'root'})


export class PhotoService{

    constructor(private http: HttpClient) {}

    listFromUser(userName: any){
        
        return this.http
        .get<Photo[]>(API + '/' + userName + '/photos');
    }
    listFromUserPaginated(userName: string, page: number) {
        const params = new HttpParams()
            .append('page', page.toString());

        return this.http
            .get<Photo[]>(API + '/' + userName + '/photos', { params });       
    }    
}