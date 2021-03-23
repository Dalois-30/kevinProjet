let map;
            function initMap() {
                map = new google.maps.Map(document.getElementById('map'), {
                    center: {lat: 50.8503396, lng: 4.3517103},
                    zoom: 16,
                });

                /* marker pour restaurants vue sur google*/
                addMarker({lat:50.8506475,lng: 4.3469449});
                addMarker({lat:50.8489563,lng:4.3471041});
                addMarker({lat:50.84993410000001,lng:4.3562806});

                /* fonction marker*/
                function addMarker(coords){
                    const marker = new google.maps.Marker({
                        position:coords,
                        map:map,
                    });
                }
            }


