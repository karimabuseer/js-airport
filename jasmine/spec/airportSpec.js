describe ("airport", function() { 

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
  });

  it ('should init with capacity of 20 and empty planes array', function() {
    expect(airport.planes).toEqual([]);
    expect(airport.capacity).toEqual(20);
  });

  it ('landing should add a plane to the list of planes', function() { 
    airport.land(plane);
    expect(airport.planes).toEqual([plane]);
  });

  it ('taking a plane off should remove it from list of planes', function() { 
    airport.land(plane);
    plane1 = new Plane();
    airport.land(plane1);
    airport.takeOff(plane);
    expect(airport.planes).toEqual([plane1]);
  });

  it ('can check if a particular plane object is in the airport', function() { 
    airport.land(plane);
    expect(airport.isPlaneIn(plane)).toEqual(true);
  });

});