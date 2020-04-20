import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Utility {
  constructor() { }
  /**
   * It will help formatting URL from object
   * @param objParameters : object type
   */
  static constructObjectURL(objParameters){
    if(!objParameters || Object.keys(objParameters).length<=0){
      return "";
    }
    return Object.keys(objParameters).map((element)=> {
      return `${element}=${objParameters[element]}`
      }).join("&");
  }
}
