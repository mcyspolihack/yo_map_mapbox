mapboxgl.accessToken = 'pk.eyJ1IjoiYWxleGFjYTc5IiwiYSI6ImNpbzYyZGVlNzAyNjd2d2x6dHY1MnR6MjgifQ.anutU5yQ38NCFEMAM4Ubdw';

var filterGroup = document.getElementById( 'filter-group' );
// var placesmeow = "data/convertcsv.geojson";
var places = $.getJSON( 'https://raw.githubusercontent.com/mcyspolihack/yo_map_mapbox/master/data/convertcsv.geojson' )
var map = new mapboxgl.Map( {
  container: 'map', // container id
  style: 'mapbox://styles/mapbox/light-v8', //stylesheet location
  center: [ -79.38, 43.6532 ], // starting position
  zoom: 14 // starting zoom
} );

map.on( 'load', function() {
  map.addSource( "places", {
    "type": "geojson",
    "data": "data/convertcsv.geojson"

  } );

  places.responseJSON.features.forEach( function( feature ) {
    var symbol = feature.properties[ 'FundProgram' ];
    var layerID = 'poi-' + symbol;

    if ( !map.getLayer( layerID ) ) {

      map.addLayer( {
        "id": "layerID",
        "type": "symbol",
        "source": "places",
        "layout": {
          "icon-image": "circle-11",
          'visibility': 'visible'
        },
        "filter": [ "==", "FundProgram", symbol ]

      } );

    }

    // Add checkbox and label elements for the layer.
    var input = document.createElement( 'input' );
    input.type = 'checkbox';
    input.id = layerID;
    input.checked = true;
    filterGroup.appendChild( input );

    var label = document.createElement( 'label' );
    label.setAttribute( 'for', layerID );
    label.textContent = symbol;
    filterGroup.appendChild( label );
  } );

  // When the checkbox changes, update the visibility of the layer.
  input.addEventListener( 'change', function( e ) {
    map.setLayoutProperty( layerID, 'visibility',
      e.target.checked ? 'visible' : 'none' );
  } );

  map.on( 'click', function( e ) {
    var features = map.queryRenderedFeatures( e.point, {
      layers: [ 'Yolocations' ]
    } );
    var feature = features[ 0 ];

    var popup = new mapboxgl.Popup( {
        anchor: 'top'
      } )
      .setLngLat( feature.geometry.coordinates )
      .setHTML( '<h3>' + "Funding Program: " + feature.properties.FundProgram + '</h3>' +
        '<li>' + '<b>Organization name </b>' + feature.properties.Org_Name + '</li>' +
        '<li>' + '<b>City Served </b>' + feature.properties.City + '</li>' +
        '<li>' + '<b>Funding Year </b>' + feature.properties.FY + '</li>'
      )
      .addTo( map )

  } );

  map.on( 'mousemove', function( e ) {
    var features = map.queryRenderedFeatures( e.point, {
      layers: [ 'locations', 'Yo-locations' ]
    } );
    map.getCanvas().style.cursor = ( features.length ) ? 'pointer' : '';

  } );

  map.addControl( new mapboxgl.Geocoder() );

} );
