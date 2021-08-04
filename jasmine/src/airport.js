"use strict";

class Airport { 
  constructor(capacity = 20){
    this.capacity = capacity
    this.planes = []
  }

  land(plane) { 
    this.planes.push(plane)
    plane.isLanded = true;
  }

  takeOff(plane) { 
    let plane_id = this.planes.indexOf(plane);
    this.planes.splice(plane_id, 1)
  }

  isPlaneIn(plane){
    return plane.isLanded;
  }
}