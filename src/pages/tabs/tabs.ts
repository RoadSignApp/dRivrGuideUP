import { Component } from '@angular/core';
import { AboutPage } from '../about/about';
import { HomePage } from '../home/home';
import { MapPage } from '../map/map';
import { RSignsPage } from '../r-signs/r-signs';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = MapPage;
  tab4Root = RSignsPage;


  

  constructor() {

  }
}
