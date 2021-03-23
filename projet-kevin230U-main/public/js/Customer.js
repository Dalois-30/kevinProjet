let geocoder;
let map;
const form = document.getElementById('localizationForm');
const addressInput = document.getElementById('addressInput');

function codeAddress(address) {
  geocoder.geocode({ address: address }, function (results, status) {
    if (status == 'OK') {
      const location = results[0].geometry.location;

      const marker = new google.maps.Marker({
        position: location,
        map: map,
        title: results[0].formatted_address,
      });
      map.setCenter(location);
      map.setZoom(17);
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}

function initMap() {
  const mapDiv = document.getElementById('map');
  map = new google.maps.Map(mapDiv, {
    center: { lat: 50.80358094898162, lng: 4.32758324093389 },
    zoom: 10,
  });

  geocoder = new google.maps.Geocoder();
  form.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    const addressText = addressInput.value;
    codeAddress(addressText);
  });
}
