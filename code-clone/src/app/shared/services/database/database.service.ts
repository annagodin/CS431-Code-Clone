import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import {AngularFireDatabase} from 'angularfire2/database';
import { CloneFeedback } from 'src/app/shared/models/CloneFeedback';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private db: AngularFireDatabase) {}

  getData() {
    return this.db.list('/data').valueChanges();
  }

  createDataPoint(cloneFeedback: CloneFeedback): CloneFeedback{
    const itemsRef = this.db.list('data');
    const key = itemsRef.push({ cloneType: cloneFeedback.getCloneType(),
                    rating: cloneFeedback.getRating(),
                    textFeedback: cloneFeedback.getTextFeedback()}).key;
    cloneFeedback.id=key;
    this.updateDataPoint(cloneFeedback);
    return cloneFeedback;
  }

  updateDataPoint(cloneFeedback: CloneFeedback){
    const itemsRef = this.db.list('data');
    itemsRef.update(cloneFeedback.id, { id: cloneFeedback.id});
  }

  deleteDataPoint(cloneFeedback: CloneFeedback){
    const itemsRef = this.db.list('data');
    itemsRef.remove(cloneFeedback.id);
  }

}
