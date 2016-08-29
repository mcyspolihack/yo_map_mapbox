/*Da Popup splashpage*/
jQuery(document).ready(function(){
    jQuery('#popup-container a.close').click(function(){
        jQuery('#popup-container').fadeOut();
        jQuery('#active-popup').fadeOut();
    });

    var visits = jQuery.cookie('visits') || 0;
    visits++;

    jQuery.cookie('visits', visits, { expires: 1, path: '/' });

    console.debug(jQuery.cookie('visits'));

    if ( jQuery.cookie('visits') > 100 ) {
        jQuery('#active-popup').hide();
        jQuery('#popup-container').hide();
    } else {
        var pageHeight = jQuery(document).height();
        jQuery('<div id="active-popup"></div>').insertBefore('body');
        jQuery('#active-popup').css("height", pageHeight);
        jQuery('#popup-container').show();
    }

    if (jQuery.cookie('noShowWelcome')) { jQuery('#popup-container').hide(); jQuery('#active-popup').hide(); }
});

jQuery(document).mouseup(function(e){
    var container = jQuery('#popup-container');

    if( !container.is(e.target)&& container.has(e.target).length === 0)
    {
        container.fadeOut();
        jQuery('#active-popup').fadeOut();
    }

});


/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "20%";
    document.getElementById("main").style.marginLeft = "20%";
    document.getElementById("map").style.width = "80%";

}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("map").style.width = "100%";

}

mapboxgl.accessToken = 'pk.eyJ1IjoiYWxleGFjYTc5IiwiYSI6ImNpbzYyZGVlNzAyNjd2d2x6dHY1MnR6MjgifQ.anutU5yQ38NCFEMAM4Ubdw';

var filterGroup = document.getElementById( 'filter-group' );
var places ;
$.getJSON("https://raw.githubusercontent.com/mcyspolihack/yo_map_mapbox/NewData/data/convertcsv1alpha.geojson", function(json){places=json});

var bounds = [
    [-56.280342 ,40.920051], // Southwest coordinates
    [-116.308490, 58.711688]];  // Northeast coordinates



var map = new mapboxgl.Map( {
    container: 'map', // container id
    style: 'mapbox://styles/alexaca79/cisgjw1ll002c2wo81b99btl8', //stylesheet location
    center: [ -79.38, 43.6532 ], // starting position
    zoom: 14 , // starting zoom
    maxBounds: bounds
} );

var layers = [
    [150, '#f28cb1'],
    [40, '#f1f075'],
    [0, '#51bbd6']
];



map.on( 'load', function() {
    map.addSource( "places", {
        "type": "geojson",
        "data": "data/convertcsv1alpha.geojson"

        ,
        cluster: false,
        clusterMaxZoom: 14, // Max zoom to cluster points on
        clusterRadius: 50 // Radius of each cluster when clustering points (defaults to 50)
    } );

    map.addSource("cma", {
        "type":"geojson",
        "data":"data/CMA_Ontario.geojson"

    });


    map.addLayer({
        "id":"cma1",
        "type": "fill",
        "source":"cma",
        "paint": {
            'fill-color': "#ffffff",
            'fill-opacity': 0.2,
            'fill-outline-color': '#00919E'
        }});

        map.addLayer({
        "id": "terrain-data",
        "type": "line",
        "source": "cma",
        "source-layer": "contour",
        "paint": {
            'line-color': "#004658",



        }



    });



    places.features.forEach( function( feature ) {
        var symbol = feature.properties[ 'FundProgram' ];
        var layerID = 'poi-' + symbol;

        if ( !map.getLayer( layerID ) ) {

            map.addLayer({
                "id": layerID,
                "type": "circle",
                "source": "places",
                "layout": {
                    'visibility': 'visible'
                },
                "paint": {
                    'circle-radius': {
                        'base': 5,
                        'stops': [[7, 3], [12, 5]]
                    },
                    "circle-color": {
                        property: 'FundProgram',
                        type: 'categorical',
                        stops:[
                            ['YOF', '#4bacc6'],
                            ['GPIP', '#4F81BD'],
                            ['YMP', '#9BBB59'],
                            ['RJCM', '#8064A2'],
                            ['SAYIPI', '#F79646'],
                            ['SYIPI', '#F79646'],
                            ['AYIPI', '#F79646'],
                            ['SNAP', '#95B3D7'],
                            ['YOW', '#4BACC6'],
                            ['NYS', '#93CDDD'],
                            ['UWCN', '#D99694'],
                            ['YJFW', '#C3D69B'],
                            ['YouthREX', '#E96646'],
                            ['YCI','#EB1F2D']




                        ]}},
                "filter": ["==", "FundProgram", symbol]

            });

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
                "id": layerID + "cluster-count",
                "type": "symbol",
                "source": "places",
                "layout": {
                    "text-field": "{point_count}",
                    "text-font": [
                        "DIN Offc Pro Medium",
                        "Arial Unicode MS Bold"

                    ],
                    "text-size": 12,
                    'visibility': 'visible'

                }

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
                    .setHTML('<h3>' + "Funding Program: " + feature.properties.Full_Name + " Program"+ '</h3>' +
                        '<li>' + '<b>Organization Name: </b>' + feature.properties.Org_Name + '</li>' +
                        '<li>' + '<b>Target Community: </b>' + feature.properties.Targ_Comm + '</li>' +
                        '<li>' + '<b>Funding Year: </b>' + feature.properties.FY + '</li>' +
                        '<li>' + '<b>Program Description: </b>' + feature.properties.Proj_Desc + '</li>'



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
    map.addControl(new mapboxgl.Navigation());


});


