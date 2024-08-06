import { inject, Injectable } from '@angular/core';
import { collection, collectionData, Firestore, query, where } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { News } from '../models/news.model';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private  Firestore = inject(Firestore)

  getNewsHighlights(){
    const data = collection(this.Firestore,'news')
    const queryData = query(data, where('component', 'array-contains', 'highlights'))
    return collectionData(queryData) as Observable<News[]>
  }
}
