import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'map-viewer',
  templateUrl: './map-viewer.component.html',
  styleUrls: ['./map-viewer.component.scss']
})
export class MapViewerComponent implements OnInit {


  center!: google.maps.LatLngLiteral;
  markers: any[] = [];
  zoom!: number;

  constructor() { }

  ngOnInit(): void {
    this.center  = {
      lat: 14.758094,
      lng: -17.468834
  };
  this.zoom = 12
  this.addMarker();
  }

  @Input() coord: any;


    addMarker() {
      this.markers.push({
        position: {
          lat: this.center.lat,
          lng: this.center.lng,
        },
        label: {
          color: '#0D87A5',
          text: 'Coup2pouce',
        },
        title: 'Coup2pouce',
        options: { animation: google.maps.Animation.BOUNCE },
      });
    }

}
