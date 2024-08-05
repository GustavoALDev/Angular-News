import { inject, Injectable } from '@angular/core';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { News } from '../models/news.model';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private  Firestore = inject(Firestore)

  getNews(){
    const data = collection(this.Firestore,'news')
    return collectionData(data) as Observable<News[]>
  }
}
