import { Component, OnInit } from '@angular/core';

import { TrackingService } from './tracking.service'

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html'
})
export class TrackingComponent implements OnInit {


  slectedTrackingNumber = {};

  trackingNumbers = [];
  insertMessage = {};
  deleteMessage = {};
  archiveMessage = {};

  constructor(private trackShipment: TrackingService) { }

  ngOnInit() {
    this.loadAll()
  }
  loadAll(): void {
    this.trackingNumbers = this.trackShipment.getTrackingNumber()
  }
  add(shipmentID) {
    this.insertMessage = this.trackShipment.addTrackingNumber(shipmentID);
  }
  delete(docIDNum, trackingNumber) {
    this.deleteMessage = this.trackShipment.deleteTrackingNumber(docIDNum, trackingNumber);
  }
  archive(trackingNumber) {
    this.archiveMessage = this.trackShipment.archiveTrackingNumber(trackingNumber);
  }

}
