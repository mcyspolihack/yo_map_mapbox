mapboxgl.accessToken = 'pk.eyJ1IjoiYWxleGFjYTc5IiwiYSI6ImNpbzYyZGVlNzAyNjd2d2x6dHY1MnR6MjgifQ.anutU5yQ38NCFEMAM4Ubdw';

var filterGroup = document.getElementById( 'filter-group' );
var places ;
     $.getJSON("https://raw.githubusercontent.com/mcyspolihack/yo_map_mapbox/master/data/convertcsv.geojson", function(json){places=json});
var map = new mapboxgl.Map( {
  container: 'map', // container id
  style: 'mapbox://styles/mapbox/light-v8', //stylesheet location
  center: [ -79.38, 43.6532 ], // starting position
  zoom: 14 // starting zoom
} );

map.on( 'load', function() {
  map.addSource( "places", {
      "type": "geojson",
      "data": "data/convertcsv.geojson",
      "tolerance": 0.00000001,
      cluster: true,
      clusterMaxZoom: 14, // Max zoom to cluster points on
      clusterRadius: 50 // Radius of each cluster when clustering points (defaults to 50)
  } );

    places.features.forEach( function( feature ) {
    var symbol = feature.properties[ 'FundProgram' ];
    var layerID = 'poi-' + symbol;

    if ( !map.getLayer( layerID ) ) {

      map.addLayer({
        "id": layerID,
        "type": "symbol",
        "source": "places",
        "layout": {
          "icon-image": "circle-11",
          'visibility': 'visible'
        },
        "filter": ["==", "FundProgram", symbol]
      });




      // Add checkbox and label elements for the layer.
      var input = document.createElement('input');
      input.type = 'checkbox';
      input.id = layerID;
      input.checked = true;
      filterGroup.appendChild(input);
      // When the checkbox changes, update the visibility of the layer.


      var label = document.createElement('label');
      label.setAttribute('for', layerID);
      label.textContent = symbol;
      filterGroup.appendChild(label);

      input.addEventListener('change', function (e) {
        map.setLayoutProperty(layerID, 'visibility',
            e.target.checked ? 'visible' : 'none');

      });

        var layers = [
            [150, '#f28cb1'],
            [20, '#f1f075'],
            [0, '#51bbd6']
        ];

        layers.forEach(function (layer, i) {
            map.addLayer({
                "id": layerID + i,
                "type": "circle",
                "source": "places",
                "paint": {
                    "circle-color": layer[1],
                    "circle-radius": 18
                },
                "filter": i === 0 ?
                    [">=", "point_count", layer[0]] :
                    ["all",
                        [">=", "point_count", layer[0]],
                        ["<", "point_count", layers[i - 1][0]]]
            });
        });

        // Add a layer for the clusters' count labels
        map.addLayer({
            "id": "cluster-count",
            "type": "symbol",
            "source": "places",
            "layout": {
                "text-field": "{point_count}",
                "text-font": [
                    "DIN Offc Pro Medium",
                    "Arial Unicode MS Bold"
                ],
                "text-size": 12
            }
        });


      map.on('click', function (e) {
        var features = map.queryRenderedFeatures(e.point, {
          layers: [layerID]
        });
        var feature = features[0];

          if (!features.length) {
              return;

          }

        var popup = new mapboxgl.Popup({
          anchor: 'top'
        })
            .setLngLat(feature.geometry.coordinates)
            .setHTML('<h3>' + "Funding Program: " + feature.properties.FundProgram + '</h3>' +
                '<li>' + '<b>Organization name </b>' + feature.properties.Org_Name + '</li>' +
                '<li>' + '<b>City Served </b>' + feature.properties.City + '</li>' +
                '<li>' + '<b>Funding Year </b>' + feature.properties.FY + '</li>'
            )
            .addTo(map);
      });


      map.on('mousemove', function (e) {
        var features = map.queryRenderedFeatures(e.point, {
          layers: [layerID]
        });
          if (!features.length) {
              return;
          }
        map.getCanvas().style.cursor = ( features.length ) ? 'pointer' : '';

      });


    }

    });
    map.addControl(new mapboxgl.Geocoder());

});


