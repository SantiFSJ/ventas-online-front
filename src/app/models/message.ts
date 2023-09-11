import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
  })
export class Message {
    severity: string;
    summary: string;
    detail: string;

    constructor(severity: string, summary: string, detail: string){
      this.severity = severity;
      this.summary = summary;
      this.detail = detail;
  }
}
   

