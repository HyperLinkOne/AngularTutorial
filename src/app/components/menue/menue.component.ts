import { Component } from '@angular/core';
import {MenueLoaderService} from "../../services/menue/menue-loader.service";
import {menueType} from "../../system/types/menue-types";

@Component({
  selector: 'app-menue',
  templateUrl: './menue.component.html',
  styleUrls: ['./menue.component.scss']
})
export class MenueComponent {

  public menueData: menueType[] = [];
  constructor(menueLoaderService: MenueLoaderService){
    menueLoaderService.menueDataObserverable.subscribe( (updatedData) => {
      console.log('updatedData', updatedData);
      this.menueData = updatedData;
    });

    this.menueData = menueLoaderService.menueData;
  }

  public goto(entryPoint: string) {
    //console.log('entryPoint', entryPoint);
    alert(entryPoint);

  }
}
