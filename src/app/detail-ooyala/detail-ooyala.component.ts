import { Component, OnInit } from '@angular/core';
import { AllInfoVideoOoyala } from '../models/all-info-video-ooyala';




@Component({
  selector: 'app-detail-ooyala',
  templateUrl: './detail-ooyala.component.html',
  styleUrls: ['./detail-ooyala.component.css']
})
export class DetailOoyalaComponent implements OnInit {
  detalle: any;
  constructor() { }

  ngOnInit() {

    this.detalle = new AllInfoVideoOoyala();
  }


  async setDetailInfo(detalle: AllInfoVideoOoyala) {
    this.detalle = detalle;
  }

}
