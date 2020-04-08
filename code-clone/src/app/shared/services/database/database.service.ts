import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import {AngularFireDatabase} from 'angularfire2/database';
import { CloneFeedback } from 'src/app/shared/models/CloneFeedback';


//https://www.youtube.com/watch?v=onVp-8BYUSM


@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private db: AngularFireDatabase) {}

  getData() {
    return this.db.list('/data').valueChanges();
  }

  createDataPoint(cloneFeedback: CloneFeedback): CloneFeedback{
    let json = JSON.parse( JSON.stringify(cloneFeedback));
    console.log("JSONNNNN");
    console.log(json);
    let text;
    const itemsRef = this.db.list('data');
    const key = itemsRef.push({ cloneType: cloneFeedback.cloneType,
                    rating: cloneFeedback.rating,
                    textFeedback: cloneFeedback.textFeedback}).key;
    cloneFeedback.id=key;
    this.updateDataPoint(cloneFeedback);
    return cloneFeedback;
  }

  updateDataPoint(cloneFeedback: CloneFeedback){
    const itemsRef = this.db.list('data');
    itemsRef.update(cloneFeedback.id, { id: cloneFeedback.id});
  }

  deleteDataPoint(id){
    const itemsRef = this.db.list('data');
    itemsRef.remove(id);
  }

  deleteEverything() {
    const itemsRef = this.db.list('data');
    itemsRef.remove();
  }

}
