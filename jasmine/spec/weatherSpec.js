describe ("weather", function() { 
  it ('checks if weather is stormy', function() {
    let weather = new Weather();
    spyOn(weather,'_weatherGenerator').and.returnValue('sunny')
    expect(weather.isStormy()).toEqual(false);
  });
});