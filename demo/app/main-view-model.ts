////// <reference path="./node_modules/nativescript-liquid-loader" />

import {Observable} from 'data/observable';
import * as frame from "ui/frame";
import { LiquidLoader } from "nativescript-liquid-loader";

export class HelloWorldModel extends Observable {

  constructor() {
    super();
  }


  public pourFinished() {
    alert('Pour Finished Event');
  }


  public startThePour() {
    let loader = <LiquidLoader>frame.topmost().currentPage.getViewById('liquidLoader');
    console.log('LOADER: ' + loader);
    loader.startPour();
  }

}