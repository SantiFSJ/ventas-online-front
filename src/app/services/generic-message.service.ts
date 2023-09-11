import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';
import { Message } from '../models/message';


@Injectable({
  providedIn: 'root'
})

export class GenericMessageService {
    messageEvent = new BehaviorSubject<Message>(null);

}