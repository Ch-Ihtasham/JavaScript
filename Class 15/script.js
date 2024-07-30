function getLocation(callback) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => callback(position.coords.latitude, position.coords.longitude),
        error => console.error('Error getting location:', error)
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }
  
  getLocation((lat, lon) => {
    console.log('Latitude:', lat);
    console.log('Longitude:', lon);
  });
  //  to get current latitude and longitude