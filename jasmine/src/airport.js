"use strict";

class Airport { 
  constructor(capacity = 20){
    this.capacity = capacity
    this.planes = []
    this.weather = new Weather();
  }
 

  land(plane) { 
    this.capacityCheck()
    this.planes.push(plane)
    plane.isLanded = true;
  }

  takeOff(plane) {
    this.stormyCheck() 
    let plane_id = this.planes.indexOf(plane);
    this.planes.splice(plane_id, 1)
  }

  isPlaneIn(plane){
    return plane.isLanded;
  }

  capacityCheck() {
    if (this.planes.length >= this.capacity){
      throw 'Cannot land, airport full!'
    }
  }

  stormyCheck() { 
    if (this.weather.isStormy()){
      throw 'Too stormy to land/takeoff'
    }
  }
 
  
}