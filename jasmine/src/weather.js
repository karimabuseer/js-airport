class Weather {
  get_random(list) {
    return list[Math.floor((Math.random()*list.length))];
  }
 _weatherGenerator() {
    return this.get_random(['stormy', 'sunny', 'sunny', 'cloudy', 'windy']);
  };
  
  isStormy() {
    if (this._weatherGenerator() === 'stormy') { 
      return true;
    } else { 
      return false; } 
    }
} 