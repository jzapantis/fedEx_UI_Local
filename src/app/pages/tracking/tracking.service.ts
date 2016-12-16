import { Injectable, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import 'rxjs/add/operator/share';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Injectable()
export class TrackingService {

  private initTrackingNumber = [];
  private trackingResponse = {};
  private insertMessage = {};
  private deleteMessage = {};

  private body = {};

  private FedExUrl: string;
  private headers: Headers;

  constructor(private _http: Http) {
    this.FedExUrl = 'http://localhost:6007/';
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
  }

  ///////////////////////////////
  ngOnInit() {
    this.loadAll();
  }

  loadAll() {
    this._http.get(this.FedExUrl + "getTrackingNumbers", { headers: this.headers })
      .map(response => response.json())
      .subscribe(data => { // data can be any name
        console.log(data);
        this.initTrackingNumber = data;
      }, error => console.log('Could not load the existing tracking numbers.'));
  }

  getTrackingNumber() {
    this.loadAll();
    return this.initTrackingNumber; // Whatever is being returned must match the structure of status[]
  }
  //////////////////////////////
  add(addedTrackingNumbers) {

    let body = { trackingNumbers: addedTrackingNumbers };

    console.log("The Tracking Number being added: ", body);

    this._http.post(this.FedExUrl + "addUI", body, { headers: this.headers })
      .map(response => response.json())
      .subscribe(res => { // status can be any name
        this.insertMessage = JSON.stringify(res);
      }, error => {
        console.log('Could not add this tracking number.');
        console.log(error);
      });
  }

  addTrackingNumber(addedTrackingNumbers) {
    this.add(addedTrackingNumbers);
    return this.insertMessage;
  }
  ////////////////////////////
  delete(docIDNum, trackingNumber) {

    let body = {
      deleteDoc: docIDNum,
      trackingNumber: trackingNumber
    };

    console.log("The Tracking Number being deleted: ", trackingNumber);
    this._http.post(this.FedExUrl + "delete", body, { headers: this.headers })
      .map(response => response.json())
      .subscribe(
      res => { // status can be any name
        this.deleteMessage = JSON.stringify(res);
      }, error => {
        console.log('Could not add this tracking number.');
        console.log(error);
      },
      () => {
        console.log("Complete!")
      });
  }

  deleteTrackingNumber(docIDNum, trackingNumber) {
    this.delete(docIDNum, trackingNumber);
    return this.deleteMessage;
  }

}
