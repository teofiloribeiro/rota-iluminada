import { AfterViewInit, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import * as L from 'leaflet';
import { PointsService } from './services/points.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  private map;
  private points = [];

  private initMap(): void {
    this.map = L.map('map', {
      center: [ -8.054912893912377, -34.88790323661564 ],
      zoom: 65
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
    //L.marker(sensors).addTo(this.map);

    sensors.forEach(element => {
      L.circle([element.lat, element.long], {
        color: '#cec800',
        opacity: 0.4,
        fillColor: '#cec800',
        fillOpacity: 1,
        radius: 3
     }).addTo(this.map)
      .bindPopup('<b>Luminosidade:</b> ' + this.luxToLabel(element.lux));
    });    
  } 

  constructor(private pointsService: PointsService) { 
    
  }

  luxToLabel(lux){
    console.log(lux)
    if(lux >= 0 && lux <= 0.3 ) return "Baixa";
    if(lux > 0.3 && lux < 0.6 ) return "Moderada";
    if(lux > 0.6) return "Alta";
  }
  
  async ngAfterViewInit() {
    //this.points = await this.pointsService.getPoints().toPromise();
    //console.log(this.points[0]);
    this.initMap();
  }
}

const sensors = [
  {
    lat : -8.054278974423708, 
    long: -34.88805632687761,
    lux: 0.1
  },
  {
    lat : -8.053963150417943, 
    long: -34.88868150829553,
    lux: 0.5
  },
  {
    lat : -8.053795763620169,
    long: -34.88944703682802,
    lux: 0.7
  },
  {
    lat : -8.053442040308454, 
    long: -34.889893595217565,
    lux: 0.3
  },
  {
    lat : -8.05294619561436,
    long: -34.890965335044754,
    lux: 0.7
  },
  {
    lat : -8.052693535683737,
    long:  -34.89194776324916,
    lux: 0.3
  },
  {
    lat : -8.052238688894525, 
    long: -34.89267414696838,
    lux: 0.9
  },

  {
    lat : -8.051890306024541, 
    long: -34.89371165869745,
    lux: 0.7
  },

  {
    lat : -8.05176077869669, 
    long: -34.89481683409146,
    lux: 0.2
  },

  {
    lat : -8.053320, 
    long: -34.887457, 
    lux: 0.5
  },

  {
    lat : -8.053194924841993,
    long: -34.88548537449767, 
    lux: 0.6
  },
  {
    lat : -8.055310, 
    long: -34.884639, 
    lux: 0.6
  },
  {     
    lat : -8.054601062163178, 
    long: -34.88748973803304,
    lux: 0.1
  },  
  {     
    lat : -8.054907894673025, 
    long: -34.88694743142206,
    lux: 0.1
  },
  {     
    lat : -8.055116540232994, 
    long: -34.88653217892864,
    lux: 0.1
  },
  {     
    lat : -8.0557762302576, 
    long: -34.886931936435786,
    lux: 0.5
  },
  {     
    lat : -8.055024488750403, 
    long: -34.88847209011591,
    lux: 0.5
  },
  {     
    lat : -8.05505516871808, 
    long:-34.88924062115948,
    lux: 0.1
  },
  {     
    lat: -8.055582924578212, 
    long: -34.88831714658302,
    lux: 0.1
  },
  {     
    lat: -8.056110677925789, 
    long:-34.88734409083748,
    lux: 0.1
  },
  {     
    lat: -8.056466601250413, 
    long:-34.886749101433715, 
    lux: 0.1
  },
  {     
    lat: -8.054648900665015, 
    long:-34.889711928237496,
    lux: 0.1
  },
  
]

