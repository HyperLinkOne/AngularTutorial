import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {menueType} from "../../system/types/menue-types";
import data from '../../../assets/data/menue.json';

@Injectable({
  providedIn: 'root'
})
export class MenueLoaderService {
  private _menueData: menueType[] = [];

  protected menueDataChange: Subject<menueType[]> = new Subject<menueType[]>();

  public menueDataObserverable = this.menueDataChange.asObservable();

  constructor() {
    //
    this.menueDataChange.subscribe((newMenueData: menueType[]) => {
      this._menueData = newMenueData;
    });

    this.loadMenueDataFromJson();
  }

  protected loadMenueDataFromJson () {
    console.log(data);
    this.menueDataChange.next(data.data);
  }

  get menueData() {
    return this._menueData;
  }

  set menueData(data: menueType[]) {
    this.menueDataChange.next(data);
  }

}
