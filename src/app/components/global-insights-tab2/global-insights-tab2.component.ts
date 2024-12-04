import { Component } from '@angular/core';

@Component({
  selector: 'app-global-insights-tab2',
  templateUrl: './global-insights-tab2.component.html',
  styleUrl: './global-insights-tab2.component.css'
})
export class GlobalInsightsTab2Component {

  showList1: boolean = true;
  showList2: boolean = true;
  showList3: boolean = true;
  showList4: boolean = true;
  showList5: boolean = true;

  constructor(){
    this.showList1 = false;
    this.showList2 = false;
    this.showList3 = false;
    this.showList4 = false;
    this.showList5 = false;
  }



}
