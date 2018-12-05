import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';

  onNavigate(feature: string): void {
    this.loadedFeature = feature; 
    console.log(feature);
  }

  ngOnInit() {
    
  }

}
