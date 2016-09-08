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
var places = {
    "type":"FeatureCollection",
    "crs":{
        "type":"name",
        "properties":{
            "name":"urn:ogc:def:crs:OGC:1.3:CRS84"
        }
    },
    "features":[
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"AYIPI",
                "Full_Name":"After School Youth in Policing Initiative",
                "FY":"FY201617",
                "Org_Name":"Midland Police Service",
                "Unit_Number":null,
                "Full_Address":"250 Second Street Midland ON L4R 4K6",
                "Latitude":44.749391,
                "Longitude":-79.888951,
                "Proj_Desc":"To promote youth participation in and exposure to the work environment through diverse, educational, and productive work assignments. This program also enhances the link between the police and the neighbourhoods we serve. This initiative gives young people an opportunity to develop job skills while fostering positive partnerships with the Toronto Police Service.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":null,
                "Targ_Pop":null,
                "Targ_Age":"15 to 18 years",
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":null,
                "Website":null,
                "Service_Type":"Police-Youth Relationships",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.888951,
                    44.7493911
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"CARA",
                "Full_Name":"Community Aboriginal Recreation Activation ",
                "FY":"FY201617",
                "Org_Name":"Alderville FN",
                "Unit_Number":null,
                "Full_Address":"11696 2nd Line Rd Alderville ON K0K 2X0",
                "Latitude":44.182356,
                "Longitude":-78.063255,
                "Proj_Desc":"A program built on past successes in addressing quality of life for First Nations youth using sport and recreation to encourage for social change",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":"Alderville",
                "Targ_Pop":"IY",
                "Targ_Age":null,
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":"Increased participation rates; Increased community partnerships\n",
                "Website":"http:\/\/www.aldervillefirstnation.ca\/",
                "Service_Type":null,
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -78.0632555,
                    44.1823565
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"CARA",
                "Full_Name":"Community Aboriginal Recreation Activation ",
                "FY":"FY201617",
                "Org_Name":"Aundeck Omni Kaning FN",
                "Unit_Number":null,
                "Full_Address":"R.R. #1 Comp. 21 Little Current ON P0P 1K0",
                "Latitude":45.980465,
                "Longitude":-81.927793,
                "Proj_Desc":"A program built on past successes in addressing quality of life for First Nations youth using sport and recreation to encourage for social change",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":"Aundeck Omni Kaning",
                "Targ_Pop":"IY",
                "Targ_Age":null,
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":"Increased participation rates; Increased community partnerships\n",
                "Website":"http:\/\/www.aundeckomnikaningfn.com\/",
                "Service_Type":null,
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -81.9277929,
                    45.9804652
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"CARA",
                "Full_Name":"Community Aboriginal Recreation Activation ",
                "FY":"FY201617",
                "Org_Name":"Curve Lake FN",
                "Unit_Number":null,
                "Full_Address":"22 Winookeedaa Road Curve Lake ON K0L 1R0",
                "Latitude":44.462444,
                "Longitude":-78.374866,
                "Proj_Desc":"A program built on past successes in addressing quality of life for First Nations youth using sport and recreation to encourage for social change",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":"Curve Lake",
                "Targ_Pop":"IY",
                "Targ_Age":null,
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":"Increased participation rates; Increased community partnerships\n",
                "Website":"http:\/\/www.curvelakefirstnation.ca\/",
                "Service_Type":null,
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -78.3748656,
                    44.4624441
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"CARA",
                "Full_Name":"Community Aboriginal Recreation Activation ",
                "FY":"FY201617",
                "Org_Name":"Long Lake #58 FN",
                "Unit_Number":null,
                "Full_Address":"209 Otter Street Long Lake #58 First Nation ON P0T 2A0",
                "Latitude":49.781503,
                "Longitude":-86.535007,
                "Proj_Desc":"A program built on past successes in addressing quality of life for First Nations youth using sport and recreation to encourage for social change",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":"Long Lake #58 First Nation",
                "Targ_Pop":"IY",
                "Targ_Age":null,
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":"Increased participation rates; Increased community partnerships\n",
                "Website":"http:\/\/www.longlake58fn.ca\/",
                "Service_Type":null,
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -86.5350069,
                    49.781503
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"CARA",
                "Full_Name":"Community Aboriginal Recreation Activation ",
                "FY":"FY201617",
                "Org_Name":"Mohawks of Bay of Quinte FN",
                "Unit_Number":null,
                "Full_Address":"24 Meadow Drive Tyendinaga Mohawk Territory K0K 1X0",
                "Latitude":44.186972,
                "Longitude":-77.141919,
                "Proj_Desc":"A program built on past successes in addressing quality of life for First Nations youth using sport and recreation to encourage for social change",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":"Tyendinaga Mohawk Territory",
                "Targ_Pop":"IY",
                "Targ_Age":null,
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":"Increased participation rates; Increased community partnerships\n",
                "Website":"http:\/\/www.mbq-tmt.org\/",
                "Service_Type":null,
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -77.1419191,
                    44.1869721
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"CARA",
                "Full_Name":"Community Aboriginal Recreation Activation ",
                "FY":"FY201617",
                "Org_Name":"Oneida of the Thames FN",
                "Unit_Number":null,
                "Full_Address":"2210 Elm Ave Southwold ON N0L 2G0",
                "Latitude":42.819021,
                "Longitude":-81.409403,
                "Proj_Desc":"A program built on past successes in addressing quality of life for First Nations youth using sport and recreation to encourage for social change",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":"Oneida of the Thames",
                "Targ_Pop":"IY",
                "Targ_Age":null,
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":"Increased participation rates; Increased community partnerships\n",
                "Website":"https:\/\/oneida.on.ca\/",
                "Service_Type":null,
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -81.4094032,
                    42.8190208
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"CARA",
                "Full_Name":"Community Aboriginal Recreation Activation ",
                "FY":"FY201617",
                "Org_Name":"Wasauksing FN",
                "Unit_Number":null,
                "Full_Address":"PO Box 250 Parry Sound ON P2A 2X4",
                "Latitude":45.345741,
                "Longitude":-80.034242,
                "Proj_Desc":"A program built on past successes in addressing quality of life for First Nations youth using sport and recreation to encourage for social change",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":"Wasauksing FN",
                "Targ_Pop":"IY",
                "Targ_Age":null,
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":"Increased participation rates; Increased community partnerships\n",
                "Website":"http:\/\/wasauksing.ca\/",
                "Service_Type":null,
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -80.0342424,
                    45.3457406
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"GPIP",
                "Full_Name":"Gang Prevention and Intervention Program",
                "FY":"FY201617",
                "Org_Name":"Midaynta Community Services",
                "Unit_Number":null,
                "Full_Address":"203 Old Yonge St North York ON M2P 1R3 ",
                "Latitude":43.748607,
                "Longitude":-79.402805,
                "Proj_Desc":"Support for youth who are gang-affiliated or at risk of affiliation to leave or avoid gangs and build pro-social skills through intensive one-on-one supports, with a focus on education, employment and training. These will be available in Ottawa, Windsor, Thunder Bay and the Greater Toronto Area (GTA).",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":"Toronto West",
                "Targ_Pop":"GIY, RY",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 years;",
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":"Changes in attitudes; Changes in risk\/protective factors",
                "Website":"http:\/\/midaynta.com\/",
                "Service_Type":null,
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.4028054,
                    43.7486075
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"GPIP",
                "Full_Name":"Gang Prevention and Intervention Program",
                "FY":"FY201617",
                "Org_Name":"Midaynta Community Services",
                "Unit_Number":"203",
                "Full_Address":"1992 Yonge Street Toronto ON M4S 1Z6 ",
                "Latitude":43.700159,
                "Longitude":-79.397390,
                "Proj_Desc":"Support for youth who are gang-affiliated or at risk of affiliation to leave or avoid gangs and build pro-social skills through intensive one-on-one supports, with a focus on education, employment and training. These will be available in Ottawa, Windsor, Thunder Bay and the Greater Toronto Area (GTA).",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":"Toronto West",
                "Targ_Pop":"N\/A",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 years;",
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":"Changes in attitudes; Changes in risk\/protective factors",
                "Website":"http:\/\/midaynta.com\/",
                "Service_Type":null,
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.3973898,
                    43.7001588
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"GPIP",
                "Full_Name":"Gang Prevention and Intervention ",
                "FY":"FY201617",
                "Org_Name":"Canadian Training Institute",
                "Unit_Number":"400",
                "Full_Address":"901 King St. West Toronto ON M5V 3H5 ",
                "Latitude":43.641859,
                "Longitude":-79.411256,
                "Proj_Desc":"Support for youth who are gang-affiliated or at risk of affiliation to leave or avoid gangs and build pro-social skills through intensive one-on-one supports, with a focus on education, employment and training. These will be available in Ottawa, Windsor, Thunder Bay and the Greater Toronto Area (GTA).",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":"Toronto East, Durham Region",
                "Targ_Pop":"GIY, YCL",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 years;",
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":"Changes in attitudes; Changes in risk\/protective factors",
                "Website":"http:\/\/www.canadiantraininginstitute.com\/",
                "Service_Type":null,
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.4112558,
                    43.641859
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"GPIP",
                "Full_Name":"Gang Prevention and Intervention Program",
                "FY":"FY201617",
                "Org_Name":"Brampton Multicultural Community Centre",
                "Unit_Number":"303",
                "Full_Address":"197 County Court Blvd. Brampton ON L6W 4P6 ",
                "Latitude":43.661669,
                "Longitude":-79.721349,
                "Proj_Desc":"Support for youth who are gang-affiliated or at risk of affiliation to leave or avoid gangs and build pro-social skills through intensive one-on-one supports, with a focus on education, employment and training. These will be available in Ottawa, Windsor, Thunder Bay and the Greater Toronto Area (GTA).",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":"Peel Region",
                "Targ_Pop":"GIY, RY, NY",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 years;",
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":"Changes in attitudes; Changes in risk\/protective factors",
                "Website":"http:\/\/www.bmccentre.com\/",
                "Service_Type":null,
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.7213493,
                    43.6616688
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"GPIP",
                "Full_Name":"Gang Prevention and Intervention Program",
                "FY":"FY201617",
                "Org_Name":"Brampton Multicultural Community Centre",
                "Unit_Number":"107",
                "Full_Address":"150 Central Park Drive Brampton ON L6T 2T9 ",
                "Latitude":43.718402,
                "Longitude":-79.719754,
                "Proj_Desc":"Support for youth who are gang-affiliated or at risk of affiliation to leave or avoid gangs and build pro-social skills through intensive one-on-one supports, with a focus on education, employment and training. These will be available in Ottawa, Windsor, Thunder Bay and the Greater Toronto Area (GTA).",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":"Peel Region",
                "Targ_Pop":"N\/A",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 years;",
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":"Changes in attitudes; Changes in risk\/protective factors",
                "Website":"http:\/\/www.bmccentre.com\/",
                "Service_Type":null,
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.7197544,
                    43.7184016
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"GPIP",
                "Full_Name":"Gang Prevention and Intervention Program",
                "FY":"FY201617",
                "Org_Name":"Brampton Multicultural Community Centre",
                "Unit_Number":"42",
                "Full_Address":"4120 Ridgeway Drive Mississauga ON L5L 5S9 ",
                "Latitude":43.529887,
                "Longitude":-79.717238,
                "Proj_Desc":"Support for youth who are gang-affiliated or at risk of affiliation to leave or avoid gangs and build pro-social skills through intensive one-on-one supports, with a focus on education, employment and training. These will be available in Ottawa, Windsor, Thunder Bay and the Greater Toronto Area (GTA).",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":"Peel Region",
                "Targ_Pop":"N\/A",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 years;",
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":"Changes in attitudes; Changes in risk\/protective factors",
                "Website":"http:\/\/www.bmccentre.com\/",
                "Service_Type":null,
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.7172379,
                    43.529887
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"GPIP",
                "Full_Name":"Gang Prevention and Intervention Program",
                "FY":"FY201617",
                "Org_Name":"360 Kids",
                "Unit_Number":"C",
                "Full_Address":"10415 Yonge St. Richmond Hill ON L4C 0Z3 ",
                "Latitude":43.881536,
                "Longitude":-79.438715,
                "Proj_Desc":"Support for youth who are gang-affiliated or at risk of affiliation to leave or avoid gangs and build pro-social skills through intensive one-on-one supports, with a focus on education, employment and training. These will be available in Ottawa, Windsor, Thunder Bay and the Greater Toronto Area (GTA).",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":"York Region",
                "Targ_Pop":"GIY, YCL",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 years;",
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":"Changes in attitudes; Changes in risk\/protective factors",
                "Website":"http:\/\/www.360kids.ca\/",
                "Service_Type":null,
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.4387149,
                    43.8815363
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"GPIP",
                "Full_Name":"Gang Prevention and Intervention Program",
                "FY":"FY201617",
                "Org_Name":"Kairos Youth Centre",
                "Unit_Number":null,
                "Full_Address":"231 Cameron Street Thunder Bay ON P7C 2H1 ",
                "Latitude":48.389421,
                "Longitude":-89.242974,
                "Proj_Desc":"Support for youth who are gang-affiliated or at risk of affiliation to leave or avoid gangs and build pro-social skills through intensive one-on-one supports, with a focus on education, employment and training. These will be available in Ottawa, Windsor, Thunder Bay and the Greater Toronto Area (GTA).",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":"Thunder Bay",
                "Targ_Pop":"GIY, YP, DY, NETY",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 years;",
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":"Changes in attitudes; Changes in risk\/protective factors",
                "Website":"http:\/\/www.kairoscrc.ca\/",
                "Service_Type":null,
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -89.242974,
                    48.389421
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"GPIP",
                "Full_Name":"Gang Prevention and Intervention Program",
                "FY":"FY201617",
                "Org_Name":"New Beginnings",
                "Unit_Number":null,
                "Full_Address":"1015 Highland Ave Windsor ON N9A 1R6 ",
                "Latitude":42.311081,
                "Longitude":-83.027271,
                "Proj_Desc":"Support for youth who are gang-affiliated or at risk of affiliation to leave or avoid gangs and build pro-social skills through intensive one-on-one supports, with a focus on education, employment and training. These will be available in Ottawa, Windsor, Thunder Bay and the Greater Toronto Area (GTA).",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":"Windsor",
                "Targ_Pop":"GIY",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 years;",
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":"Changes in attitudes; Changes in risk\/protective factors",
                "Website":"http:\/\/www.newbeginningsprogram.ca\/",
                "Service_Type":null,
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -83.0272714,
                    42.3110806
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"GPIP",
                "Full_Name":"Gang Prevention and Intervention Program",
                "FY":"FY201617",
                "Org_Name":"YouTurn Youth Support Services",
                "Unit_Number":"303",
                "Full_Address":"250 City Centre Avenue Ottawa ON K1R 6K7 ",
                "Latitude":45.408282,
                "Longitude":-75.718780,
                "Proj_Desc":"Support for youth who are gang-affiliated or at risk of affiliation to leave or avoid gangs and build pro-social skills through intensive one-on-one supports, with a focus on education, employment and training. These will be available in Ottawa, Windsor, Thunder Bay and the Greater Toronto Area (GTA).",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":"Ottawa",
                "Targ_Pop":"GIY, YM, DY, NETY",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 years;",
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":"Changes in attitudes; Changes in risk\/protective factors",
                "Website":"http:\/\/www.youturn.ca\/",
                "Service_Type":null,
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -75.71878,
                    45.4082825
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"NYS",
                "Full_Name":"Newcomer Youth Settlement",
                "FY":"FY201617",
                "Org_Name":"Arab Community Centre of Toronto",
                "Unit_Number":"Suite 209",
                "Full_Address":"555 Burnhamthorpe Road Etobicoke ON M9C 2Y3",
                "Latitude":43.644867,
                "Longitude":-79.567895,
                "Proj_Desc":"To help more newcomer youth to participate in culturally appropriate activities that support community engagement.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":null,
                "Targ_Pop":"NY, RY",
                "Targ_Age":null,
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":"Change in community participation \/ sense of belonging; Change in life skills and resiliency among vulnerable newcomer youth; Reduced inter-generational conflict and improved family dynamics",
                "Website":"http:\/\/www.arabcommunitycentre.com\/home\/",
                "Service_Type":null,
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.5678954,
                    43.6448669
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"NYS",
                "Full_Name":"Newcomer Youth Settlement",
                "FY":"FY201617",
                "Org_Name":"Centre for Immigrant and Community Services",
                "Unit_Number":null,
                "Full_Address":"2330 Midland Avenue Toronto ON M1S 5G5",
                "Latitude":43.778608,
                "Longitude":-79.275713,
                "Proj_Desc":"To help more newcomer youth to participate in culturally appropriate activities that support community engagement.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":null,
                "Targ_Pop":"NY, RY",
                "Targ_Age":null,
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":"Change in community participation \/ sense of belonging; Change in life skills and resiliency among vulnerable newcomer youth; Reduced inter-generational conflict and improved family dynamics",
                "Website":"http:\/\/www.cicscanada.com\/",
                "Service_Type":null,
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.275713,
                    43.7786083
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"NYS",
                "Full_Name":"Newcomer Youth Settlement",
                "FY":"FY201617",
                "Org_Name":"Centre francophone de Toronto",
                "Unit_Number":"Unit 303",
                "Full_Address":"555 Richmond Street West Toronto ON M5V 3B1",
                "Latitude":43.646365,
                "Longitude":-79.402312,
                "Proj_Desc":"To help more newcomer youth to participate in culturally appropriate activities that support community engagement.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":null,
                "Targ_Pop":"NY, FY",
                "Targ_Age":null,
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":"Change in community participation \/ sense of belonging; Change in life skills and resiliency among vulnerable newcomer youth; Reduced inter-generational conflict and improved family dynamics",
                "Website":"http:\/\/www.centrefranco.org\/en\/",
                "Service_Type":null,
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.4023122,
                    43.6463654
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"NYS",
                "Full_Name":"Newcomer Youth Settlement",
                "FY":"FY201617",
                "Org_Name":"Community Microskills Development  Centre",
                "Unit_Number":null,
                "Full_Address":"1 Vulcan Street Etobicoke ON M9W 1L3",
                "Latitude":43.705215,
                "Longitude":-79.577195,
                "Proj_Desc":"To help more newcomer youth to participate in culturally appropriate activities that support community engagement.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":null,
                "Targ_Pop":"NY",
                "Targ_Age":null,
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":"Change in community participation \/ sense of belonging; Change in life skills and resiliency among vulnerable newcomer youth; Reduced inter-generational conflict and improved family dynamics",
                "Website":"http:\/\/www.microskills.ca\/",
                "Service_Type":null,
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.5771947,
                    43.7052151
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"NYS",
                "Full_Name":"Newcomer Youth Settlement",
                "FY":"FY201617",
                "Org_Name":"For Youth Initiative",
                "Unit_Number":null,
                "Full_Address":"1652 Keele St York ON M6M 3W3 ",
                "Latitude":43.683872,
                "Longitude":-79.472927,
                "Proj_Desc":"To help more newcomer youth to participate in culturally appropriate activities that support community engagement.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":null,
                "Targ_Pop":"NY, RY",
                "Targ_Age":null,
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":"Change in community participation \/ sense of belonging; Change in life skills and resiliency among vulnerable newcomer youth; Reduced inter-generational conflict and improved family dynamics",
                "Website":"http:\/\/www.foryouth.ca\/",
                "Service_Type":null,
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.4729275,
                    43.6838724
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"NYS",
                "Full_Name":"Newcomer Youth Settlement",
                "FY":"FY201617",
                "Org_Name":"Malvern Family Resource Centre",
                "Unit_Number":null,
                "Full_Address":"90 Littles Rd Scarborough ON M1B 5E2 ",
                "Latitude":43.818325,
                "Longitude":-79.205331,
                "Proj_Desc":"To help more newcomer youth to participate in culturally appropriate activities that support community engagement.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":null,
                "Targ_Pop":"NY, RY",
                "Targ_Age":null,
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":"Change in community participation \/ sense of belonging; Change in life skills and resiliency among vulnerable newcomer youth; Reduced inter-generational conflict and improved family dynamics",
                "Website":"http:\/\/mfrc.org\/",
                "Service_Type":null,
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.2053314,
                    43.818325
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"NYS",
                "Full_Name":"Newcomer Youth Settlement",
                "FY":"FY201617",
                "Org_Name":"North York Community House",
                "Unit_Number":"Suite 226",
                "Full_Address":"700 Lawrence Ave W Toronto ON M6A 3B4",
                "Latitude":43.716657,
                "Longitude":-79.447258,
                "Proj_Desc":"To help more newcomer youth to participate in culturally appropriate activities that support community engagement.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":null,
                "Targ_Pop":"NY",
                "Targ_Age":null,
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":"Change in community participation \/ sense of belonging; Change in life skills and resiliency among vulnerable newcomer youth; Reduced inter-generational conflict and improved family dynamics",
                "Website":"http:\/\/www.nych.ca\/",
                "Service_Type":null,
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.4472576,
                    43.7166569
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"NYS",
                "Full_Name":"Newcomer Youth Settlement",
                "FY":"FY201617",
                "Org_Name":"Parya Trillium Foundation",
                "Unit_Number":null,
                "Full_Address":"344 John St Markham ON L3T 5W6",
                "Latitude":43.820497,
                "Longitude":-79.393046,
                "Proj_Desc":"To help more newcomer youth to participate in culturally appropriate activities that support community engagement.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":null,
                "Targ_Pop":"NY",
                "Targ_Age":null,
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":"Change in community participation \/ sense of belonging; Change in life skills and resiliency among vulnerable newcomer youth; Reduced inter-generational conflict and improved family dynamics",
                "Website":"http:\/\/www.parya.org\/index.php\/en\/",
                "Service_Type":null,
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.3930458,
                    43.8204969
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"NYS",
                "Full_Name":"Newcomer Youth Settlement",
                "FY":"FY201617",
                "Org_Name":"Sojourn House",
                "Unit_Number":null,
                "Full_Address":"101 Ontario Street Toronto ON M5A 2V2",
                "Latitude":43.654499,
                "Longitude":-79.366777,
                "Proj_Desc":"To help more newcomer youth to participate in culturally appropriate activities that support community engagement.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":null,
                "Targ_Pop":"NY",
                "Targ_Age":null,
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":"Change in community participation \/ sense of belonging; Change in life skills and resiliency among vulnerable newcomer youth; Reduced inter-generational conflict and improved family dynamics",
                "Website":"http:\/\/www.sojournhouse.org\/",
                "Service_Type":null,
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.366777,
                    43.6544994
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"NYS",
                "Full_Name":"Newcomer Youth Settlement",
                "FY":"FY201617",
                "Org_Name":"West Neighbourhood House",
                "Unit_Number":"Unit 103",
                "Full_Address":"1497 Queen Street W Toronto ON M6R 1A3",
                "Latitude":43.639646,
                "Longitude":-79.440421,
                "Proj_Desc":"To help more newcomer youth to participate in culturally appropriate activities that support community engagement.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":null,
                "Targ_Pop":"NY",
                "Targ_Age":null,
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":"Change in community participation \/ sense of belonging; Change in life skills and resiliency among vulnerable newcomer youth; Reduced inter-generational conflict and improved family dynamics",
                "Website":"http:\/\/www.westnh.org\/",
                "Service_Type":null,
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.4404206,
                    43.6396457
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"NYS",
                "Full_Name":"Newcomer Youth Settlement",
                "FY":"FY201617",
                "Org_Name":"WoodGreen Community Services",
                "Unit_Number":"100",
                "Full_Address":"815 Danforth Avenue Toronto ON M4J 1L2 ",
                "Latitude":43.679550,
                "Longitude":-79.340774,
                "Proj_Desc":"To help more newcomer youth to participate in culturally appropriate activities that support community engagement.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":null,
                "Targ_Pop":"NY, RY",
                "Targ_Age":null,
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":"Change in community participation \/ sense of belonging; Change in life skills and resiliency among vulnerable newcomer youth; Reduced inter-generational conflict and improved family dynamics",
                "Website":"http:\/\/www.woodgreen.org\/",
                "Service_Type":null,
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.3407742,
                    43.6795502
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"NYS",
                "Full_Name":"Newcomer Youth Settlement",
                "FY":"FY201617",
                "Org_Name":"Malton Neighbourhood Services",
                "Unit_Number":null,
                "Full_Address":"3540 Morning Star Drive Mississauga ON L4T 1Y2",
                "Latitude":43.723514,
                "Longitude":-79.638890,
                "Proj_Desc":"To help more newcomer youth to participate in culturally appropriate activities that support community engagement.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":null,
                "Targ_Pop":"NY, RY",
                "Targ_Age":null,
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":"Change in community participation \/ sense of belonging; Change in life skills and resiliency among vulnerable newcomer youth; Reduced inter-generational conflict and improved family dynamics",
                "Website":"https:\/\/www.google.ca\/#q=Malton+Neighbourhood+Services",
                "Service_Type":null,
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.6388904,
                    43.7235142
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"NYS",
                "Full_Name":"Newcomer Youth Settlement",
                "FY":"FY201617",
                "Org_Name":"YMCA of Hamilton Burlington Brantford",
                "Unit_Number":null,
                "Full_Address":"207 Parkside Drive Waterdown ON L8B 1B9",
                "Latitude":43.333622,
                "Longitude":-79.909190,
                "Proj_Desc":"To help more newcomer youth to participate in culturally appropriate activities that support community engagement.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":null,
                "Targ_Pop":"NY, RY",
                "Targ_Age":null,
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":"Change in community participation \/ sense of belonging; Change in life skills and resiliency among vulnerable newcomer youth; Reduced inter-generational conflict and improved family dynamics",
                "Website":"https:\/\/ymcahbb.ca\/Home",
                "Service_Type":null,
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.9091902,
                    43.3336225
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"NYS",
                "Full_Name":"Newcomer Youth Settlement",
                "FY":"FY201617",
                "Org_Name":"Ottawa Community Immigrant Services Organization",
                "Unit_Number":null,
                "Full_Address":"959 Wellington Street West Ottawa ON K1Y 2X5",
                "Latitude":45.406600,
                "Longitude":-75.722179,
                "Proj_Desc":"To help more newcomer youth to participate in culturally appropriate activities that support community engagement.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":null,
                "Targ_Pop":"NY, RY",
                "Targ_Age":null,
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":"Change in community participation \/ sense of belonging; Change in life skills and resiliency among vulnerable newcomer youth; Reduced inter-generational conflict and improved family dynamics",
                "Website":"http:\/\/ociso.org\/",
                "Service_Type":null,
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -75.7221795,
                    45.4066
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"RJCM",
                "Full_Name":"Restorative Justice and Conflict Mediation Program",
                "FY":"FY201617",
                "Org_Name":"Governing Council of the Salvation Army in Canada",
                "Unit_Number":null,
                "Full_Address":"2 Overlea Boulevard Toronto ON M4H 1P4 ",
                "Latitude":43.702441,
                "Longitude":-79.353684,
                "Proj_Desc":" A program for students to manage school conflict through peer mediation while strengthening pro-social skills.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":"Peel Region",
                "Targ_Pop":"HIY, YP",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 21 years;",
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":null,
                "Website":"http:\/\/www.salvationarmy.ca\/governing-council\/",
                "Service_Type":"Justice Focused Programming",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.3536841,
                    43.702441
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"RJCM",
                "Full_Name":"Restorative Justice and Conflict Mediation Program",
                "FY":"FY201617",
                "Org_Name":"St. Stephens Community House",
                "Unit_Number":null,
                "Full_Address":"260 Augusta Ave Toronto ON M5T 2L9 ",
                "Latitude":43.656480,
                "Longitude":-79.402996,
                "Proj_Desc":" A program for students to manage school conflict through peer mediation while strengthening pro-social skills.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":"Toronto",
                "Targ_Pop":"HIY, NETY, YCL",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 21 years;",
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":null,
                "Website":"http:\/\/www.sschto.ca\/",
                "Service_Type":"Justice Focused Programming",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.4029962,
                    43.6564796
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"RJCM",
                "Full_Name":"Restorative Justice and Conflict Mediation Program",
                "FY":"FY201617",
                "Org_Name":"Family Services York Region",
                "Unit_Number":"300",
                "Full_Address":"1091 Gorham St. Newmarket ON L3Y 8X7 ",
                "Latitude":44.057681,
                "Longitude":-79.429053,
                "Proj_Desc":" A program for students to manage school conflict through peer mediation while strengthening pro-social skills.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":"York Region",
                "Targ_Pop":"HIY, LGBY, YM",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 21 years;",
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":null,
                "Website":"http:\/\/www.fsyr.ca\/",
                "Service_Type":"Justice Focused Programming",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.429053,
                    44.057681
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"RJCM",
                "Full_Name":"Restorative Justice and Conflict Mediation Program",
                "FY":"FY201617",
                "Org_Name":"Family Services York Region",
                "Unit_Number":"203",
                "Full_Address":"4261 Highway 7 Unionville ON L3R 9W6 ",
                "Latitude":43.860070,
                "Longitude":-79.315062,
                "Proj_Desc":" A program for students to manage school conflict through peer mediation while strengthening pro-social skills.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":"York Region",
                "Targ_Pop":"N\/A",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 21 years;",
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":null,
                "Website":"http:\/\/www.fsyr.ca\/",
                "Service_Type":"Justice Focused Programming",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.3150622,
                    43.8600697
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"RJCM",
                "Full_Name":"Restorative Justice and Conflict Mediation Program",
                "FY":"FY201617",
                "Org_Name":"Family Services York Region",
                "Unit_Number":"18",
                "Full_Address":"10610 Bayview Ave. Richmond Hill ON L4C 3N8 ",
                "Latitude":43.890074,
                "Longitude":-79.419901,
                "Proj_Desc":" A program for students to manage school conflict through peer mediation while strengthening pro-social skills.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":"York Region",
                "Targ_Pop":"N\/A",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 21 years;",
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":null,
                "Website":"http:\/\/www.fsyr.ca\/",
                "Service_Type":"Justice Focused Programming",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.4199006,
                    43.8900736
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"RJCM",
                "Full_Name":"Restorative Justice and Conflict Mediation Program",
                "FY":"FY201617",
                "Org_Name":"John Howard Society of Thunder Bay and District",
                "Unit_Number":null,
                "Full_Address":"315 S. Syndicate Ave. Thunder Bay ON P7E 1E2 ",
                "Latitude":48.380207,
                "Longitude":-89.248068,
                "Proj_Desc":" A program for students to manage school conflict through peer mediation while strengthening pro-social skills.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":"Thunder Bay",
                "Targ_Pop":"HIY, YCL",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 21 years;",
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":null,
                "Website":"http:\/\/johnhoward.on.ca\/thunderbay\/",
                "Service_Type":"Justice Focused Programming",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -89.2480675,
                    48.3802068
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"RJCM",
                "Full_Name":"Restorative Justice and Conflict Mediation Program",
                "FY":"FY201617",
                "Org_Name":"Elizabeth Fry Society",
                "Unit_Number":null,
                "Full_Address":"204 Elm St Sudbury ON P3C 1V3 ",
                "Latitude":46.493300,
                "Longitude":-81.003327,
                "Proj_Desc":" A program for students to manage school conflict through peer mediation while strengthening pro-social skills.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":"Sudbury",
                "Targ_Pop":"HIY, YCL",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 21 years;",
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":null,
                "Website":"http:\/\/www.efrytoronto.org\/",
                "Service_Type":"Justice Focused Programming",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -81.0033274,
                    46.4933
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"RJCM",
                "Full_Name":"Restorative Justice and Conflict Mediation Program",
                "FY":"FY201617",
                "Org_Name":"John Howard Society of Hamilton, Burlington and Area",
                "Unit_Number":null,
                "Full_Address":"654 Barton St. East Hamilton ON L8L 3A2 ",
                "Latitude":43.256566,
                "Longitude":-79.837293,
                "Proj_Desc":" A program for students to manage school conflict through peer mediation while strengthening pro-social skills.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":"Brantford",
                "Targ_Pop":"HIY, YCL",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 21 years;",
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":null,
                "Website":"http:\/\/johnhoward.on.ca\/hamilton\/",
                "Service_Type":"Justice Focused Programming",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.8372932,
                    43.2565657
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"RJCM",
                "Full_Name":"Restorative Justice and Conflict Mediation Program",
                "FY":"FY201617",
                "Org_Name":"Youth Diversion Program",
                "Unit_Number":null,
                "Full_Address":"559 Bagot Street Kingston ON K7K 3E1 ",
                "Latitude":44.239236,
                "Longitude":-76.484602,
                "Proj_Desc":" A program for students to manage school conflict through peer mediation while strengthening pro-social skills.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":"Kingston",
                "Targ_Pop":"HIY, YM, NETY, YP, YCL",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 21 years;",
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":null,
                "Website":"http:\/\/www.youthdiversion.org\/",
                "Service_Type":"Justice Focused Programming",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -76.4846016,
                    44.2392356
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"RJCM",
                "Full_Name":"Restorative Justice and Conflict Mediation Program",
                "FY":"FY201617",
                "Org_Name":"John Howard Society of Peterborough",
                "Unit_Number":null,
                "Full_Address":"305 Stewart Street Peterborough ON K9J 3N2 ",
                "Latitude":44.302690,
                "Longitude":-78.325793,
                "Proj_Desc":" A program for students to manage school conflict through peer mediation while strengthening pro-social skills.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":"Peterborough",
                "Targ_Pop":"HIY, YCL",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 21 years;",
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":null,
                "Website":"http:\/\/johnhoward.on.ca\/peterborough\/",
                "Service_Type":"Justice Focused Programming",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -78.325793,
                    44.30269
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"SAYIPI",
                "Full_Name":"Summer and After School Youth in Policing Initiative",
                "FY":"FY201617",
                "Org_Name":"Toronto Police Service",
                "Unit_Number":null,
                "Full_Address":"40 College Street Toronto ON M5G 2J3",
                "Latitude":43.661198,
                "Longitude":-79.385265,
                "Proj_Desc":"To promote youth participation in and exposure to the work environment through diverse, educational, and productive work assignments. This program also enhances the link between the police and the neighbourhoods we serve. This initiative gives young people an opportunity to develop job skills while fostering positive partnerships with the Toronto Police Service.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":null,
                "Targ_Pop":null,
                "Targ_Age":"15 to 18 years",
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":null,
                "Website":null,
                "Service_Type":"Police-Youth Relationships",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.3852652,
                    43.661198
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"SAYIPI",
                "Full_Name":"Summer and After School Youth in Policing Initiative",
                "FY":"FY201617",
                "Org_Name":"York Regional Police Service",
                "Unit_Number":null,
                "Full_Address":"47 Don Hillock Drive Aurora ON L4G 0S7",
                "Latitude":44.008111,
                "Longitude":-79.415134,
                "Proj_Desc":"To promote youth participation in and exposure to the work environment through diverse, educational, and productive work assignments. This program also enhances the link between the police and the neighbourhoods we serve. This initiative gives young people an opportunity to develop job skills while fostering positive partnerships with the Toronto Police Service.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":null,
                "Targ_Pop":null,
                "Targ_Age":"15 to 18 years",
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":null,
                "Website":null,
                "Service_Type":"Police-Youth Relationships",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.4151342,
                    44.0081108
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"SAYIPI",
                "Full_Name":"Summer and After School Youth in Policing Initiative",
                "FY":"FY201617",
                "Org_Name":"Durham Regional Police",
                "Unit_Number":null,
                "Full_Address":"605 Rossland Rd. E Whitby ON L1N 0B8",
                "Latitude":43.898524,
                "Longitude":-78.940504,
                "Proj_Desc":"To promote youth participation in and exposure to the work environment through diverse, educational, and productive work assignments. This program also enhances the link between the police and the neighbourhoods we serve. This initiative gives young people an opportunity to develop job skills while fostering positive partnerships with the Toronto Police Service.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":null,
                "Targ_Pop":null,
                "Targ_Age":"15 to 18 years",
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":null,
                "Website":null,
                "Service_Type":"Police-Youth Relationships",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -78.9405039,
                    43.8985236
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"SAYIPI",
                "Full_Name":"Summer and After School Youth in Policing Initiative",
                "FY":"FY201617",
                "Org_Name":"OPP Central Region - Nottawasaga Detachment",
                "Unit_Number":null,
                "Full_Address":"29 Main St W Beeton ON L0G 1A0",
                "Latitude":44.078658,
                "Longitude":-79.785850,
                "Proj_Desc":"To promote youth participation in and exposure to the work environment through diverse, educational, and productive work assignments. This program also enhances the link between the police and the neighbourhoods we serve. This initiative gives young people an opportunity to develop job skills while fostering positive partnerships with the Toronto Police Service.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":null,
                "Targ_Pop":null,
                "Targ_Age":"15 to 18 years",
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":null,
                "Website":null,
                "Service_Type":"Police-Youth Relationships",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.7858498,
                    44.0786578
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"SAYIPI",
                "Full_Name":"Summer and After School Youth in Policing Initiative",
                "FY":"FY201617",
                "Org_Name":"Walpole Island Police Service",
                "Unit_Number":null,
                "Full_Address":"651 Tecumseh Rd Wallaceburg ON N8A 4K9",
                "Latitude":42.590947,
                "Longitude":-82.486361,
                "Proj_Desc":"To promote youth participation in and exposure to the work environment through diverse, educational, and productive work assignments. This program also enhances the link between the police and the neighbourhoods we serve. This initiative gives young people an opportunity to develop job skills while fostering positive partnerships with the Toronto Police Service.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":null,
                "Targ_Pop":null,
                "Targ_Age":"15 to 18 years",
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":null,
                "Website":null,
                "Service_Type":"Police-Youth Relationships",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -82.4863614,
                    42.5909466
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"SAYIPI",
                "Full_Name":"Summer and After School Youth in Policing Initiative",
                "FY":"FY201617",
                "Org_Name":"Owen Sound Police Service",
                "Unit_Number":null,
                "Full_Address":"922 2nd Avenue West Owen Sound ON N4K 4M7",
                "Latitude":44.565946,
                "Longitude":-80.945944,
                "Proj_Desc":"To promote youth participation in and exposure to the work environment through diverse, educational, and productive work assignments. This program also enhances the link between the police and the neighbourhoods we serve. This initiative gives young people an opportunity to develop job skills while fostering positive partnerships with the Toronto Police Service.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":null,
                "Targ_Pop":null,
                "Targ_Age":"15 to 18 years",
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":null,
                "Website":null,
                "Service_Type":"Police-Youth Relationships",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -80.945944,
                    44.5659459
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"SAYIPI",
                "Full_Name":"Summer and After School Youth in Policing Initiative",
                "FY":"FY201617",
                "Org_Name":"Six Nation Police Service",
                "Unit_Number":null,
                "Full_Address":"2112 4th Line Ohsweken ON N0A 1M0",
                "Latitude":43.061868,
                "Longitude":-80.099031,
                "Proj_Desc":"To promote youth participation in and exposure to the work environment through diverse, educational, and productive work assignments. This program also enhances the link between the police and the neighbourhoods we serve. This initiative gives young people an opportunity to develop job skills while fostering positive partnerships with the Toronto Police Service.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":null,
                "Targ_Pop":null,
                "Targ_Age":"15 to 18 years",
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":null,
                "Website":null,
                "Service_Type":"Police-Youth Relationships",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -80.0990306,
                    43.0618682
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"SAYIPI",
                "Full_Name":"Summer and After School Youth in Policing Initiative",
                "FY":"FY201617",
                "Org_Name":"Belleville Police",
                "Unit_Number":null,
                "Full_Address":"93 Dundas St East Belleville ON K8N 1C2",
                "Latitude":44.161698,
                "Longitude":-77.377446,
                "Proj_Desc":"To promote youth participation in and exposure to the work environment through diverse, educational, and productive work assignments. This program also enhances the link between the police and the neighbourhoods we serve. This initiative gives young people an opportunity to develop job skills while fostering positive partnerships with the Toronto Police Service.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":null,
                "Targ_Pop":null,
                "Targ_Age":"15 to 18 years",
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":null,
                "Website":null,
                "Service_Type":"Police-Youth Relationships",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -77.3774464,
                    44.1616978
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"SAYIPI",
                "Full_Name":"Summer and After School Youth in Policing Initiative",
                "FY":"FY201617",
                "Org_Name":"Brockville Police",
                "Unit_Number":null,
                "Full_Address":"2269 Parkedale Ave Brockville ON K6V 3G9",
                "Latitude":44.607103,
                "Longitude":-75.694209,
                "Proj_Desc":"To promote youth participation in and exposure to the work environment through diverse, educational, and productive work assignments. This program also enhances the link between the police and the neighbourhoods we serve. This initiative gives young people an opportunity to develop job skills while fostering positive partnerships with the Toronto Police Service.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":null,
                "Targ_Pop":null,
                "Targ_Age":"15 to 18 years",
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":null,
                "Website":null,
                "Service_Type":"Police-Youth Relationships",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -75.694209,
                    44.607103
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"SAYIPI",
                "Full_Name":"Summer and After School Youth in Policing Initiative",
                "FY":"FY201617",
                "Org_Name":"Cobourg Police",
                "Unit_Number":null,
                "Full_Address":"107 King Street West Cobourg ON K9A 2M4",
                "Latitude":43.959067,
                "Longitude":-78.170115,
                "Proj_Desc":"To promote youth participation in and exposure to the work environment through diverse, educational, and productive work assignments. This program also enhances the link between the police and the neighbourhoods we serve. This initiative gives young people an opportunity to develop job skills while fostering positive partnerships with the Toronto Police Service.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":null,
                "Targ_Pop":null,
                "Targ_Age":"15 to 18 years",
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":null,
                "Website":null,
                "Service_Type":"Police-Youth Relationships",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -78.170115,
                    43.959067
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"SAYIPI",
                "Full_Name":"Summer and After School Youth in Policing Initiative",
                "FY":"FY201617",
                "Org_Name":"Ottawa Police Service",
                "Unit_Number":null,
                "Full_Address":"474 Elgin Street Ottawa ON K2P 2E6",
                "Latitude":45.412567,
                "Longitude":-75.686148,
                "Proj_Desc":"To promote youth participation in and exposure to the work environment through diverse, educational, and productive work assignments. This program also enhances the link between the police and the neighbourhoods we serve. This initiative gives young people an opportunity to develop job skills while fostering positive partnerships with the Toronto Police Service.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":null,
                "Targ_Pop":null,
                "Targ_Age":"15 to 18 years",
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":null,
                "Website":null,
                "Service_Type":"Police-Youth Relationships",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -75.6861481,
                    45.4125674
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"SNAP",
                "Full_Name":"Stop Now and Plan ",
                "FY":"FY201617",
                "Org_Name":"Kinark Child and Family Services York",
                "Unit_Number":"200",
                "Full_Address":"500 Hood Road Markham  ON L3R 9Z3 ",
                "Latitude":43.832311,
                "Longitude":-79.330144,
                "Proj_Desc":"SNAP, which stands for Stop Now And Plan, is an evidence-based behavioural model that provides a framework for teaching children struggling with behaviour issues, and their parents, effective emotional regulation, self-control and problem-solving skills.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":"York Region",
                "Targ_Pop":"YP, FY, IY",
                "Targ_Age":"6 to 12 years",
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":"Percentage change in children engaging in community supports or recreational opportunities; Clinical effect-change in children's conduct \/ behaviour on the Child Behaviour Checklist",
                "Website":"https:\/\/www.kinark.on.ca\/",
                "Service_Type":"Conflict Resolution\/Anger Management Program",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.3301438,
                    43.8323113
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"SNAP",
                "Full_Name":"Stop Now and Plan ",
                "FY":"FY201617",
                "Org_Name":"Kinark Child and Family Services York",
                "Unit_Number":"101A",
                "Full_Address":"24 Orchard Heights Blvd Aurora  ON L4G 6T5 ",
                "Latitude":44.009365,
                "Longitude":-79.472995,
                "Proj_Desc":"SNAP, which stands for Stop Now And Plan, is an evidence-based behavioural model that provides a framework for teaching children struggling with behaviour issues, and their parents, effective emotional regulation, self-control and problem-solving skills.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":"York Region",
                "Targ_Pop":"YP, FY, IY",
                "Targ_Age":"6 to 12 years",
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":"Percentage change in children engaging in community supports or recreational opportunities; Clinical effect-change in children's conduct \/ behaviour on the Child Behaviour Checklist",
                "Website":"https:\/\/www.kinark.on.ca\/",
                "Service_Type":"Conflict Resolution\/Anger Management Program",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.4729948,
                    44.0093649
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"SNAP",
                "Full_Name":"Stop Now and Plan ",
                "FY":"FY201617",
                "Org_Name":"Kinark Child and Family Services York",
                "Unit_Number":null,
                "Full_Address":"184 Simcoe Street Keswick  ON L4P 2H7 ",
                "Latitude":44.242264,
                "Longitude":-79.472529,
                "Proj_Desc":"SNAP, which stands for Stop Now And Plan, is an evidence-based behavioural model that provides a framework for teaching children struggling with behaviour issues, and their parents, effective emotional regulation, self-control and problem-solving skills.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":"York Region",
                "Targ_Pop":"YP, FY, IY",
                "Targ_Age":"6 to 12 years",
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":"Percentage change in children engaging in community supports or recreational opportunities; Clinical effect-change in children's conduct \/ behaviour on the Child Behaviour Checklist",
                "Website":"https:\/\/www.kinark.on.ca\/",
                "Service_Type":"Conflict Resolution\/Anger Management Program",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.4725291,
                    44.2422645
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"SNAP",
                "Full_Name":"Stop Now and Plan ",
                "FY":"FY201617",
                "Org_Name":"Kinark Child and Family Services York",
                "Unit_Number":"9A",
                "Full_Address":"8551 Weston Road Vaughan ON L4L 9R4 ",
                "Latitude":43.809497,
                "Longitude":-79.551101,
                "Proj_Desc":"SNAP, which stands for Stop Now And Plan, is an evidence-based behavioural model that provides a framework for teaching children struggling with behaviour issues, and their parents, effective emotional regulation, self-control and problem-solving skills.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":"York Region",
                "Targ_Pop":"YP, FY, IY",
                "Targ_Age":"6 to 12 years",
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":"Percentage change in children engaging in community supports or recreational opportunities; Clinical effect-change in children's conduct \/ behaviour on the Child Behaviour Checklist",
                "Website":"https:\/\/www.kinark.on.ca\/",
                "Service_Type":"Conflict Resolution\/Anger Management Program",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.5511007,
                    43.8094965
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"SNAP",
                "Full_Name":"Stop Now and Plan ",
                "FY":"FY201617",
                "Org_Name":"Child Development Institute",
                "Unit_Number":null,
                "Full_Address":"197 Euclid Ave. Toronto ON M6J 2J8 ",
                "Latitude":43.651138,
                "Longitude":-79.409315,
                "Proj_Desc":"SNAP, which stands for Stop Now And Plan, is an evidence-based behavioural model that provides a framework for teaching children struggling with behaviour issues, and their parents, effective emotional regulation, self-control and problem-solving skills.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":"Toronto East",
                "Targ_Pop":"YP",
                "Targ_Age":"6 to 12 years",
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":"Percentage change in children engaging in community supports or recreational opportunities; Clinical effect-change in children's conduct \/ behaviour on the Child Behaviour Checklist",
                "Website":"http:\/\/www.childdevelop.ca\/",
                "Service_Type":"Conflict Resolution\/Anger Management Program",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.4093153,
                    43.6511382
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"SNAP",
                "Full_Name":"Stop Now and Plan ",
                "FY":"FY201617",
                "Org_Name":"Dilico Anishinabek Family Care",
                "Unit_Number":null,
                "Full_Address":"200 Anemki Place Fort William First Nation ON P7J 1L6 ",
                "Latitude":48.353876,
                "Longitude":-89.262433,
                "Proj_Desc":"SNAP, which stands for Stop Now And Plan, is an evidence-based behavioural model that provides a framework for teaching children struggling with behaviour issues, and their parents, effective emotional regulation, self-control and problem-solving skills.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":"Thunder Bay, Fort William First Nation",
                "Targ_Pop":"IY , Section 23 Classrooms, Children On Reserve",
                "Targ_Age":"6 to 12 years",
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":"Percentage change in children engaging in community supports or recreational opportunities; Clinical effect-change in children's conduct \/ behaviour on the Child Behaviour Checklist",
                "Website":"http:\/\/www.dilico.com\/",
                "Service_Type":"Conflict Resolution\/Anger Management Program",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -89.2624327,
                    48.3538764
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"SNAP",
                "Full_Name":"Stop Now and Plan ",
                "FY":"FY201617",
                "Org_Name":"Child and Family Centre Sudbury",
                "Unit_Number":"100",
                "Full_Address":"62 Frood Rd Sudbury ON P3C 4Z3 ",
                "Latitude":46.494645,
                "Longitude":-80.998545,
                "Proj_Desc":"SNAP, which stands for Stop Now And Plan, is an evidence-based behavioural model that provides a framework for teaching children struggling with behaviour issues, and their parents, effective emotional regulation, self-control and problem-solving skills.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":"Sudbury",
                "Targ_Pop":"YP, IY ,Children On Reserve, Urban Indigenous Children",
                "Targ_Age":"6 to 12 years",
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":"Percentage change in children engaging in community supports or recreational opportunities; Clinical effect-change in children's conduct \/ behaviour on the Child Behaviour Checklist",
                "Website":"http:\/\/childandfamilycentre.on.ca\/?lang=en",
                "Service_Type":"Conflict Resolution\/Anger Management Program",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -80.9985449,
                    46.4946455
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"SNAP",
                "Full_Name":"Stop Now and Plan ",
                "FY":"FY201617",
                "Org_Name":"Six Nations Social Services",
                "Unit_Number":null,
                "Full_Address":"15 Sunrise Court Ohsweken ON N0A 1M0 ",
                "Latitude":43.070805,
                "Longitude":-80.114624,
                "Proj_Desc":"SNAP, which stands for Stop Now And Plan, is an evidence-based behavioural model that provides a framework for teaching children struggling with behaviour issues, and their parents, effective emotional regulation, self-control and problem-solving skills.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":"Six Nations of the Grand River First Nation, Brantford, Brant County",
                "Targ_Pop":"IY",
                "Targ_Age":"6 to 12 years",
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":"Percentage change in children engaging in community supports or recreational opportunities; Clinical effect-change in children's conduct \/ behaviour on the Child Behaviour Checklist",
                "Website":"http:\/\/www.sixnations.ca\/SocServDept.htm",
                "Service_Type":"Conflict Resolution\/Anger Management Program",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -80.1146243,
                    43.0708055
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"SNAP",
                "Full_Name":"Stop Now and Plan ",
                "FY":"FY201617",
                "Org_Name":"Pathways for Children and Youth Kingston",
                "Unit_Number":"215",
                "Full_Address":"1201 Division Street Kingston ON K7K 6X4 ",
                "Latitude":44.265710,
                "Longitude":-76.496658,
                "Proj_Desc":"SNAP, which stands for Stop Now And Plan, is an evidence-based behavioural model that provides a framework for teaching children struggling with behaviour issues, and their parents, effective emotional regulation, self-control and problem-solving skills.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":"Kingston",
                "Targ_Pop":"YP",
                "Targ_Age":"6 to 12 years",
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":"Percentage change in children engaging in community supports or recreational opportunities; Clinical effect-change in children's conduct \/ behaviour on the Child Behaviour Checklist",
                "Website":"http:\/\/www.pathwayschildrenyouth.org\/",
                "Service_Type":"Conflict Resolution\/Anger Management Program",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -76.4966581,
                    44.2657105
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"SNAP",
                "Full_Name":"Stop Now and Plan ",
                "FY":"FY201617",
                "Org_Name":"Kinark Child and Family Services Peterborough",
                "Unit_Number":"275",
                "Full_Address":"380 Armour Road Peterborough ON K9H 7L7 ",
                "Latitude":44.307124,
                "Longitude":-78.304205,
                "Proj_Desc":"SNAP, which stands for Stop Now And Plan, is an evidence-based behavioural model that provides a framework for teaching children struggling with behaviour issues, and their parents, effective emotional regulation, self-control and problem-solving skills.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":"Peterborough, Curve Lake First Nation, Havelock, Norwood",
                "Targ_Pop":"YRR, IY",
                "Targ_Age":"6 to 12 years",
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":"Percentage change in children engaging in community supports or recreational opportunities; Clinical effect-change in children's conduct \/ behaviour on the Child Behaviour Checklist",
                "Website":"https:\/\/www.kinark.on.ca\/",
                "Service_Type":"Conflict Resolution\/Anger Management Program",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -78.3042051,
                    44.3071236
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"SYIPI",
                "Full_Name":"Summer Youth in Policing Initiative",
                "FY":"FY201617",
                "Org_Name":"Peel Regional Police",
                "Unit_Number":null,
                "Full_Address":"7750 Hurontario Street Brampton ON L6V 3W6",
                "Latitude":43.739767,
                "Longitude":-79.831798,
                "Proj_Desc":"To promote youth participation in and exposure to the work environment through diverse, educational, and productive work assignments. This program also enhances the link between the police and the neighbourhoods we serve. This initiative gives young people an opportunity to develop job skills while fostering positive partnerships with the Toronto Police Service.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":null,
                "Targ_Pop":null,
                "Targ_Age":"15 to 18 years",
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":null,
                "Website":null,
                "Service_Type":"Police-Youth Relationships",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.8317979,
                    43.7397668
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"SYIPI",
                "Full_Name":"Summer Youth in Policing Initiative",
                "FY":"FY201617",
                "Org_Name":"OPP Central Region HQ - Caledon",
                "Unit_Number":null,
                "Full_Address":"6211 Old Church Rd Caledon East ON L0N 1E0",
                "Latitude":43.874663,
                "Longitude":-79.861736,
                "Proj_Desc":"To promote youth participation in and exposure to the work environment through diverse, educational, and productive work assignments. This program also enhances the link between the police and the neighbourhoods we serve. This initiative gives young people an opportunity to develop job skills while fostering positive partnerships with the Toronto Police Service.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":null,
                "Targ_Pop":null,
                "Targ_Age":"15 to 18 years",
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":null,
                "Website":null,
                "Service_Type":"Police-Youth Relationships",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.8617356,
                    43.8746629
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"SYIPI",
                "Full_Name":"Summer Youth in Policing Initiative",
                "FY":"FY201617",
                "Org_Name":"Anishinabek Police Service - Pic River",
                "Unit_Number":null,
                "Full_Address":"20 Pic River Road Heron Bay ON P0T 1R0",
                "Latitude":48.629349,
                "Longitude":-86.268650,
                "Proj_Desc":"To promote youth participation in and exposure to the work environment through diverse, educational, and productive work assignments. This program also enhances the link between the police and the neighbourhoods we serve. This initiative gives young people an opportunity to develop job skills while fostering positive partnerships with the Toronto Police Service.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":null,
                "Targ_Pop":null,
                "Targ_Age":"15 to 18 years",
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":null,
                "Website":null,
                "Service_Type":"Police-Youth Relationships",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -86.2686503,
                    48.629349
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"SYIPI",
                "Full_Name":"Summer Youth in Policing Initiative",
                "FY":"FY201617",
                "Org_Name":"Sudbury Police Service",
                "Unit_Number":null,
                "Full_Address":"190 Brady Street Sudbury ON P3E 1C7",
                "Latitude":46.489816,
                "Longitude":-80.991433,
                "Proj_Desc":"To promote youth participation in and exposure to the work environment through diverse, educational, and productive work assignments. This program also enhances the link between the police and the neighbourhoods we serve. This initiative gives young people an opportunity to develop job skills while fostering positive partnerships with the Toronto Police Service.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":null,
                "Targ_Pop":null,
                "Targ_Age":"15 to 18 years",
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":null,
                "Website":null,
                "Service_Type":"Police-Youth Relationships",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -80.9914332,
                    46.4898159
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"SYIPI",
                "Full_Name":"Summer Youth in Policing Initiative",
                "FY":"FY201617",
                "Org_Name":"Anishinabek Police Service - Sagamok",
                "Unit_Number":null,
                "Full_Address":"Box 548 Massey ON P0P 1P0",
                "Latitude":46.211751,
                "Longitude":-82.071986,
                "Proj_Desc":"To promote youth participation in and exposure to the work environment through diverse, educational, and productive work assignments. This program also enhances the link between the police and the neighbourhoods we serve. This initiative gives young people an opportunity to develop job skills while fostering positive partnerships with the Toronto Police Service.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":null,
                "Targ_Pop":null,
                "Targ_Age":"15 to 18 years",
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":null,
                "Website":null,
                "Service_Type":"Police-Youth Relationships",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -82.0719859,
                    46.211751
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"SYIPI",
                "Full_Name":"Summer Youth in Policing Initiative",
                "FY":"FY201617",
                "Org_Name":"NW Region OPP - Kenora Detachment",
                "Unit_Number":null,
                "Full_Address":"350 Hwy 17A Kenora ON P9N 3X7",
                "Latitude":49.767490,
                "Longitude":-94.512026,
                "Proj_Desc":"To promote youth participation in and exposure to the work environment through diverse, educational, and productive work assignments. This program also enhances the link between the police and the neighbourhoods we serve. This initiative gives young people an opportunity to develop job skills while fostering positive partnerships with the Toronto Police Service.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":null,
                "Targ_Pop":null,
                "Targ_Age":"15 to 18 years",
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":null,
                "Website":null,
                "Service_Type":"Police-Youth Relationships",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -94.5120263,
                    49.7674896
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"SYIPI",
                "Full_Name":"Summer Youth in Policing Initiative",
                "FY":"FY201617",
                "Org_Name":"NW Region OPP - Pikangikum Detachment",
                "Unit_Number":null,
                "Full_Address":"Box 323 Pikangikum ON P0V 2L0",
                "Latitude":51.804240,
                "Longitude":-93.992708,
                "Proj_Desc":"To promote youth participation in and exposure to the work environment through diverse, educational, and productive work assignments. This program also enhances the link between the police and the neighbourhoods we serve. This initiative gives young people an opportunity to develop job skills while fostering positive partnerships with the Toronto Police Service.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":null,
                "Targ_Pop":null,
                "Targ_Age":"15 to 18 years",
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":null,
                "Website":null,
                "Service_Type":"Police-Youth Relationships",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -93.9927079,
                    51.80424
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"SYIPI",
                "Full_Name":"Summer Youth in Policing Initiative",
                "FY":"FY201617",
                "Org_Name":"NW Region OPP - Sioux Lookout Detachment",
                "Unit_Number":null,
                "Full_Address":"62 Queen St Sioux Lookout ON P8T 1A1",
                "Latitude":50.100122,
                "Longitude":-91.916425,
                "Proj_Desc":"To promote youth participation in and exposure to the work environment through diverse, educational, and productive work assignments. This program also enhances the link between the police and the neighbourhoods we serve. This initiative gives young people an opportunity to develop job skills while fostering positive partnerships with the Toronto Police Service.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":null,
                "Targ_Pop":null,
                "Targ_Age":"15 to 18 years",
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":null,
                "Website":null,
                "Service_Type":"Police-Youth Relationships",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -91.9164249,
                    50.1001225
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"SYIPI",
                "Full_Name":"Summer Youth in Policing Initiative",
                "FY":"FY201617",
                "Org_Name":"Treaty Three Police Services",
                "Unit_Number":null,
                "Full_Address":"22 Homestake Road Kenora ON P9N 3X7",
                "Latitude":49.777344,
                "Longitude":-94.432259,
                "Proj_Desc":"To promote youth participation in and exposure to the work environment through diverse, educational, and productive work assignments. This program also enhances the link between the police and the neighbourhoods we serve. This initiative gives young people an opportunity to develop job skills while fostering positive partnerships with the Toronto Police Service.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":null,
                "Targ_Pop":null,
                "Targ_Age":"15 to 18 years",
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":null,
                "Website":null,
                "Service_Type":"Police-Youth Relationships",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -94.4322587,
                    49.7773437
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"SYIPI",
                "Full_Name":"Summer Youth in Policing Initiative",
                "FY":"FY201617",
                "Org_Name":"NW Region OPP - Weagamow Lake",
                "Unit_Number":null,
                "Full_Address":"Weagamow Lake GD Weagamow Lake ON P0V 2Y0",
                "Latitude":52.950000,
                "Longitude":-91.333333,
                "Proj_Desc":"To promote youth participation in and exposure to the work environment through diverse, educational, and productive work assignments. This program also enhances the link between the police and the neighbourhoods we serve. This initiative gives young people an opportunity to develop job skills while fostering positive partnerships with the Toronto Police Service.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":null,
                "Targ_Pop":null,
                "Targ_Age":"15 to 18 years",
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":null,
                "Website":null,
                "Service_Type":"Police-Youth Relationships",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -91.3333329,
                    52.95
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"SYIPI",
                "Full_Name":"Summer Youth in Policing Initiative",
                "FY":"FY201617",
                "Org_Name":"NW Region OPP - Big Trout Lake",
                "Unit_Number":null,
                "Full_Address":"Big Trout Lake Big Trout Lake ON P0V 1G0",
                "Latitude":53.818763,
                "Longitude":-89.835093,
                "Proj_Desc":"To promote youth participation in and exposure to the work environment through diverse, educational, and productive work assignments. This program also enhances the link between the police and the neighbourhoods we serve. This initiative gives young people an opportunity to develop job skills while fostering positive partnerships with the Toronto Police Service.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":null,
                "Targ_Pop":null,
                "Targ_Age":"15 to 18 years",
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":null,
                "Website":null,
                "Service_Type":"Police-Youth Relationships",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -89.8350929,
                    53.818763
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"SYIPI",
                "Full_Name":"Summer Youth in Policing Initiative",
                "FY":"FY201617",
                "Org_Name":"NW Region OPP - Fort Frances",
                "Unit_Number":null,
                "Full_Address":"320 Portage Ave Fort Frances ON P9A 3P6",
                "Latitude":48.608085,
                "Longitude":-93.395422,
                "Proj_Desc":"To promote youth participation in and exposure to the work environment through diverse, educational, and productive work assignments. This program also enhances the link between the police and the neighbourhoods we serve. This initiative gives young people an opportunity to develop job skills while fostering positive partnerships with the Toronto Police Service.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":null,
                "Targ_Pop":null,
                "Targ_Age":"15 to 18 years",
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":null,
                "Website":null,
                "Service_Type":"Police-Youth Relationships",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -93.395422,
                    48.608085
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"SYIPI",
                "Full_Name":"Summer Youth in Policing Initiative",
                "FY":"FY201617",
                "Org_Name":"Timmins Police Service",
                "Unit_Number":null,
                "Full_Address":"185 Spruce Street South Timmins ON P4N 2M7",
                "Latitude":48.472446,
                "Longitude":-81.327421,
                "Proj_Desc":"To promote youth participation in and exposure to the work environment through diverse, educational, and productive work assignments. This program also enhances the link between the police and the neighbourhoods we serve. This initiative gives young people an opportunity to develop job skills while fostering positive partnerships with the Toronto Police Service.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":null,
                "Targ_Pop":null,
                "Targ_Age":"15 to 18 years",
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":null,
                "Website":null,
                "Service_Type":"Police-Youth Relationships",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -81.3274211,
                    48.4724461
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"SYIPI",
                "Full_Name":"Summer Youth in Policing Initiative",
                "FY":"FY201617",
                "Org_Name":"Anishinabek Police Service - Dokis",
                "Unit_Number":null,
                "Full_Address":"469 Couchie Memorial Drive North Bay ON P1B 8G5",
                "Latitude":46.329543,
                "Longitude":-79.521600,
                "Proj_Desc":"To promote youth participation in and exposure to the work environment through diverse, educational, and productive work assignments. This program also enhances the link between the police and the neighbourhoods we serve. This initiative gives young people an opportunity to develop job skills while fostering positive partnerships with the Toronto Police Service.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":null,
                "Targ_Pop":null,
                "Targ_Age":"15 to 18 years",
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":null,
                "Website":null,
                "Service_Type":"Police-Youth Relationships",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.5216001,
                    46.3295425
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"SYIPI",
                "Full_Name":"Summer Youth in Policing Initiative",
                "FY":"FY201617",
                "Org_Name":"North Bay Police Service",
                "Unit_Number":null,
                "Full_Address":"135 Princess Street West North Bay ON P1B 6C2",
                "Latitude":46.315176,
                "Longitude":-79.452635,
                "Proj_Desc":"To promote youth participation in and exposure to the work environment through diverse, educational, and productive work assignments. This program also enhances the link between the police and the neighbourhoods we serve. This initiative gives young people an opportunity to develop job skills while fostering positive partnerships with the Toronto Police Service.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":null,
                "Targ_Pop":null,
                "Targ_Age":"15 to 18 years",
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":null,
                "Website":null,
                "Service_Type":"Police-Youth Relationships",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.452635,
                    46.315176
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"SYIPI",
                "Full_Name":"Summer Youth in Policing Initiative",
                "FY":"FY201617",
                "Org_Name":"Anishinabek Police Service - Nipissing",
                "Unit_Number":null,
                "Full_Address":"469 Couchie Memorial Drive North Bay ON P1B 8G5",
                "Latitude":46.329543,
                "Longitude":-79.521600,
                "Proj_Desc":"To promote youth participation in and exposure to the work environment through diverse, educational, and productive work assignments. This program also enhances the link between the police and the neighbourhoods we serve. This initiative gives young people an opportunity to develop job skills while fostering positive partnerships with the Toronto Police Service.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":null,
                "Targ_Pop":null,
                "Targ_Age":"15 to 18 years",
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":null,
                "Website":null,
                "Service_Type":"Police-Youth Relationships",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.5216001,
                    46.3295425
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"SYIPI",
                "Full_Name":"Summer Youth in Policing Initiative",
                "FY":"FY201617",
                "Org_Name":"OPP Central Region HQ - Bracebridge",
                "Unit_Number":null,
                "Full_Address":"690 Cedar Lane Bracebridge ON P1L 1W9",
                "Latitude":45.037293,
                "Longitude":-79.300704,
                "Proj_Desc":"To promote youth participation in and exposure to the work environment through diverse, educational, and productive work assignments. This program also enhances the link between the police and the neighbourhoods we serve. This initiative gives young people an opportunity to develop job skills while fostering positive partnerships with the Toronto Police Service.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":null,
                "Targ_Pop":null,
                "Targ_Age":"15 to 18 years",
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":null,
                "Website":null,
                "Service_Type":"Police-Youth Relationships",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.3007037,
                    45.0372925
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"SYIPI",
                "Full_Name":"Summer Youth in Policing Initiative",
                "FY":"FY201617",
                "Org_Name":"Anishinabek Christian Islands",
                "Unit_Number":null,
                "Full_Address":"Cedar Point Post Office Christian Island ON L0K 1C0",
                "Latitude":44.808511,
                "Longitude":-80.114563,
                "Proj_Desc":"To promote youth participation in and exposure to the work environment through diverse, educational, and productive work assignments. This program also enhances the link between the police and the neighbourhoods we serve. This initiative gives young people an opportunity to develop job skills while fostering positive partnerships with the Toronto Police Service.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":null,
                "Targ_Pop":null,
                "Targ_Age":"15 to 18 years",
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":null,
                "Website":null,
                "Service_Type":"Police-Youth Relationships",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -80.1145629,
                    44.808511
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"SYIPI",
                "Full_Name":"Summer Youth in Policing Initiative",
                "FY":"FY201617",
                "Org_Name":"Rama Police Services",
                "Unit_Number":null,
                "Full_Address":"7450 Williams Road Rama ON L3V 6H6",
                "Latitude":44.649512,
                "Longitude":-79.352808,
                "Proj_Desc":"To promote youth participation in and exposure to the work environment through diverse, educational, and productive work assignments. This program also enhances the link between the police and the neighbourhoods we serve. This initiative gives young people an opportunity to develop job skills while fostering positive partnerships with the Toronto Police Service.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":null,
                "Targ_Pop":null,
                "Targ_Age":"15 to 18 years",
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":null,
                "Website":null,
                "Service_Type":"Police-Youth Relationships",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.3528082,
                    44.6495119
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"SYIPI",
                "Full_Name":"Summer Youth in Policing Initiative",
                "FY":"FY201617",
                "Org_Name":"OPP Central Region - Barrie Detachment",
                "Unit_Number":null,
                "Full_Address":"20 Rose St Barrie ON L4M 2T2",
                "Latitude":44.401035,
                "Longitude":-79.695573,
                "Proj_Desc":"To promote youth participation in and exposure to the work environment through diverse, educational, and productive work assignments. This program also enhances the link between the police and the neighbourhoods we serve. This initiative gives young people an opportunity to develop job skills while fostering positive partnerships with the Toronto Police Service.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":null,
                "Targ_Pop":null,
                "Targ_Age":"15 to 18 years",
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":null,
                "Website":null,
                "Service_Type":"Police-Youth Relationships",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.695573,
                    44.401035
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"SYIPI",
                "Full_Name":"Summer Youth in Policing Initiative",
                "FY":"FY201617",
                "Org_Name":"OPP Central Region - Collingwood Detachment",
                "Unit_Number":null,
                "Full_Address":"201 Ontario St Collingwood ON L9Y 4M4",
                "Latitude":44.500883,
                "Longitude":-80.211418,
                "Proj_Desc":"To promote youth participation in and exposure to the work environment through diverse, educational, and productive work assignments. This program also enhances the link between the police and the neighbourhoods we serve. This initiative gives young people an opportunity to develop job skills while fostering positive partnerships with the Toronto Police Service.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":null,
                "Targ_Pop":null,
                "Targ_Age":"15 to 18 years",
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":null,
                "Website":null,
                "Service_Type":"Police-Youth Relationships",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -80.2114178,
                    44.5008826
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"SYIPI",
                "Full_Name":"Summer Youth in Policing Initiative",
                "FY":"FY201617",
                "Org_Name":"OPP Central Region  Huronia West Detachment",
                "Unit_Number":null,
                "Full_Address":"1000 River Rd W Wasaga Beach ON L9Z 1A2",
                "Latitude":44.518955,
                "Longitude":-80.017305,
                "Proj_Desc":"To promote youth participation in and exposure to the work environment through diverse, educational, and productive work assignments. This program also enhances the link between the police and the neighbourhoods we serve. This initiative gives young people an opportunity to develop job skills while fostering positive partnerships with the Toronto Police Service.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":null,
                "Targ_Pop":null,
                "Targ_Age":"15 to 18 years",
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":null,
                "Website":null,
                "Service_Type":"Police-Youth Relationships",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -80.0173054,
                    44.5189548
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"SYIPI",
                "Full_Name":"Summer Youth in Policing Initiative",
                "FY":"FY201617",
                "Org_Name":"Halton Regional Police",
                "Unit_Number":null,
                "Full_Address":"1151 Bronte Road Oakville ON L6M 3L1",
                "Latitude":43.415319,
                "Longitude":-79.743284,
                "Proj_Desc":"To promote youth participation in and exposure to the work environment through diverse, educational, and productive work assignments. This program also enhances the link between the police and the neighbourhoods we serve. This initiative gives young people an opportunity to develop job skills while fostering positive partnerships with the Toronto Police Service.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":null,
                "Targ_Pop":null,
                "Targ_Age":"15 to 18 years",
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":null,
                "Website":null,
                "Service_Type":"Police-Youth Relationships",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.7432837,
                    43.4153192
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"SYIPI",
                "Full_Name":"Summer Youth in Policing Initiative",
                "FY":"FY201617",
                "Org_Name":"Guelph Police Service",
                "Unit_Number":null,
                "Full_Address":"15 Wyndham St. South Guelph ON N1H 4C6",
                "Latitude":43.542929,
                "Longitude":-80.246314,
                "Proj_Desc":"To promote youth participation in and exposure to the work environment through diverse, educational, and productive work assignments. This program also enhances the link between the police and the neighbourhoods we serve. This initiative gives young people an opportunity to develop job skills while fostering positive partnerships with the Toronto Police Service.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":null,
                "Targ_Pop":null,
                "Targ_Age":"15 to 18 years",
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":null,
                "Website":null,
                "Service_Type":"Police-Youth Relationships",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -80.2463137,
                    43.5429293
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"SYIPI",
                "Full_Name":"Summer Youth in Policing Initiative",
                "FY":"FY201617",
                "Org_Name":"London Police Services",
                "Unit_Number":null,
                "Full_Address":"601 Dundas Street London ON N6B 1X1",
                "Latitude":42.988152,
                "Longitude":-81.232129,
                "Proj_Desc":"To promote youth participation in and exposure to the work environment through diverse, educational, and productive work assignments. This program also enhances the link between the police and the neighbourhoods we serve. This initiative gives young people an opportunity to develop job skills while fostering positive partnerships with the Toronto Police Service.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":null,
                "Targ_Pop":null,
                "Targ_Age":"15 to 18 years",
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":null,
                "Website":null,
                "Service_Type":"Police-Youth Relationships",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -81.2321285,
                    42.9881516
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"SYIPI",
                "Full_Name":"Summer Youth in Policing Initiative",
                "FY":"FY201617",
                "Org_Name":"Windsor Police Service",
                "Unit_Number":null,
                "Full_Address":"150 Goyeau Street Windsor ON N9A 6J5",
                "Latitude":42.318280,
                "Longitude":-83.037325,
                "Proj_Desc":"To promote youth participation in and exposure to the work environment through diverse, educational, and productive work assignments. This program also enhances the link between the police and the neighbourhoods we serve. This initiative gives young people an opportunity to develop job skills while fostering positive partnerships with the Toronto Police Service.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":null,
                "Targ_Pop":null,
                "Targ_Age":"15 to 18 years",
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":null,
                "Website":null,
                "Service_Type":"Police-Youth Relationships",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -83.0373255,
                    42.3182801
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"SYIPI",
                "Full_Name":"Summer Youth in Policing Initiative",
                "FY":"FY201617",
                "Org_Name":"Amherstburg Police Service",
                "Unit_Number":null,
                "Full_Address":"532 Sandwich St S Amherstburg ON N9V 3R2",
                "Latitude":42.092228,
                "Longitude":-83.108154,
                "Proj_Desc":"To promote youth participation in and exposure to the work environment through diverse, educational, and productive work assignments. This program also enhances the link between the police and the neighbourhoods we serve. This initiative gives young people an opportunity to develop job skills while fostering positive partnerships with the Toronto Police Service.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":null,
                "Targ_Pop":null,
                "Targ_Age":"15 to 18 years",
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":null,
                "Website":null,
                "Service_Type":"Police-Youth Relationships",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -83.108154,
                    42.092228
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"SYIPI",
                "Full_Name":"Summer Youth in Policing Initiative",
                "FY":"FY201617",
                "Org_Name":"Brantford Police Service",
                "Unit_Number":null,
                "Full_Address":"344 Elgin Street Brantford ON N3S 7P5",
                "Latitude":43.151199,
                "Longitude":-80.236699,
                "Proj_Desc":"To promote youth participation in and exposure to the work environment through diverse, educational, and productive work assignments. This program also enhances the link between the police and the neighbourhoods we serve. This initiative gives young people an opportunity to develop job skills while fostering positive partnerships with the Toronto Police Service.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":null,
                "Targ_Pop":null,
                "Targ_Age":"15 to 18 years",
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":null,
                "Website":null,
                "Service_Type":"Police-Youth Relationships",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -80.236699,
                    43.1511986
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"SYIPI",
                "Full_Name":"Summer Youth in Policing Initiative",
                "FY":"FY201617",
                "Org_Name":"Hamilton Police Services",
                "Unit_Number":null,
                "Full_Address":"155 King William St. Hamilton ON l8r 1a7",
                "Latitude":43.256142,
                "Longitude":-79.862580,
                "Proj_Desc":"To promote youth participation in and exposure to the work environment through diverse, educational, and productive work assignments. This program also enhances the link between the police and the neighbourhoods we serve. This initiative gives young people an opportunity to develop job skills while fostering positive partnerships with the Toronto Police Service.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":null,
                "Targ_Pop":null,
                "Targ_Age":"15 to 18 years",
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":null,
                "Website":null,
                "Service_Type":"Police-Youth Relationships",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.8625804,
                    43.2561421
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"SYIPI",
                "Full_Name":"Summer Youth in Policing Initiative",
                "FY":"FY201617",
                "Org_Name":"Anishinabek - Kettle and Stony Point Police Services",
                "Unit_Number":null,
                "Full_Address":"RR #2, Box 795 Forest ON N0N 1J0",
                "Latitude":43.093452,
                "Longitude":-82.002563,
                "Proj_Desc":"To promote youth participation in and exposure to the work environment through diverse, educational, and productive work assignments. This program also enhances the link between the police and the neighbourhoods we serve. This initiative gives young people an opportunity to develop job skills while fostering positive partnerships with the Toronto Police Service.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":null,
                "Targ_Pop":null,
                "Targ_Age":"15 to 18 years",
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":null,
                "Website":null,
                "Service_Type":"Police-Youth Relationships",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -82.0025626,
                    43.093452
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"SYIPI",
                "Full_Name":"Summer Youth in Policing Initiative",
                "FY":"FY201617",
                "Org_Name":"Niagara Police Service",
                "Unit_Number":null,
                "Full_Address":"68 Church Street St. Catharines ON L2R 3C6",
                "Latitude":43.160799,
                "Longitude":-79.245471,
                "Proj_Desc":"To promote youth participation in and exposure to the work environment through diverse, educational, and productive work assignments. This program also enhances the link between the police and the neighbourhoods we serve. This initiative gives young people an opportunity to develop job skills while fostering positive partnerships with the Toronto Police Service.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":null,
                "Targ_Pop":null,
                "Targ_Age":"15 to 18 years",
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":null,
                "Website":null,
                "Service_Type":"Police-Youth Relationships",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.2454714,
                    43.1607987
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"SYIPI",
                "Full_Name":"Summer Youth in Policing Initiative",
                "FY":"FY201617",
                "Org_Name":"LaSalle Police Services",
                "Unit_Number":null,
                "Full_Address":"1880 Normandy St. LaSalle ON N9H 1P8",
                "Latitude":42.244761,
                "Longitude":-83.058594,
                "Proj_Desc":"To promote youth participation in and exposure to the work environment through diverse, educational, and productive work assignments. This program also enhances the link between the police and the neighbourhoods we serve. This initiative gives young people an opportunity to develop job skills while fostering positive partnerships with the Toronto Police Service.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":null,
                "Targ_Pop":null,
                "Targ_Age":"15 to 18 years",
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":null,
                "Website":null,
                "Service_Type":"Police-Youth Relationships",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -83.0585936,
                    42.2447609
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"SYIPI",
                "Full_Name":"Summer Youth in Policing Initiative",
                "FY":"FY201617",
                "Org_Name":"Woodstock Police Services",
                "Unit_Number":null,
                "Full_Address":"615 Dundas St. Woodstock ON N4S 1E1",
                "Latitude":43.131214,
                "Longitude":-80.750962,
                "Proj_Desc":"To promote youth participation in and exposure to the work environment through diverse, educational, and productive work assignments. This program also enhances the link between the police and the neighbourhoods we serve. This initiative gives young people an opportunity to develop job skills while fostering positive partnerships with the Toronto Police Service.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":null,
                "Targ_Pop":null,
                "Targ_Age":"15 to 18 years",
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":null,
                "Website":null,
                "Service_Type":"Police-Youth Relationships",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -80.750962,
                    43.131214
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"SYIPI",
                "Full_Name":"Summer Youth in Policing Initiative",
                "FY":"FY201617",
                "Org_Name":"St. Thomas Police Services",
                "Unit_Number":null,
                "Full_Address":"30 St. Catharine Street St. Thomas ON N5P 2V8",
                "Latitude":42.780024,
                "Longitude":-81.191641,
                "Proj_Desc":"To promote youth participation in and exposure to the work environment through diverse, educational, and productive work assignments. This program also enhances the link between the police and the neighbourhoods we serve. This initiative gives young people an opportunity to develop job skills while fostering positive partnerships with the Toronto Police Service.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":null,
                "Targ_Pop":null,
                "Targ_Age":"15 to 18 years",
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":null,
                "Website":null,
                "Service_Type":"Police-Youth Relationships",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -81.1916407,
                    42.7800237
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"SYIPI",
                "Full_Name":"Summer Youth in Policing Initiative",
                "FY":"FY201617",
                "Org_Name":"Kingston Police Services",
                "Unit_Number":null,
                "Full_Address":"705 Division St Kingston ON K7K 4C2",
                "Latitude":44.251283,
                "Longitude":-76.495575,
                "Proj_Desc":"To promote youth participation in and exposure to the work environment through diverse, educational, and productive work assignments. This program also enhances the link between the police and the neighbourhoods we serve. This initiative gives young people an opportunity to develop job skills while fostering positive partnerships with the Toronto Police Service.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":null,
                "Targ_Pop":null,
                "Targ_Age":"15 to 18 years",
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":null,
                "Website":null,
                "Service_Type":"Police-Youth Relationships",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -76.495575,
                    44.2512834
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"SYIPI",
                "Full_Name":"Summer Youth in Policing Initiative",
                "FY":"FY201617",
                "Org_Name":"Peterborough Police Services",
                "Unit_Number":null,
                "Full_Address":"500 Water St Peterborough ON K9J 7Y4",
                "Latitude":44.304681,
                "Longitude":-78.318818,
                "Proj_Desc":"To promote youth participation in and exposure to the work environment through diverse, educational, and productive work assignments. This program also enhances the link between the police and the neighbourhoods we serve. This initiative gives young people an opportunity to develop job skills while fostering positive partnerships with the Toronto Police Service.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":null,
                "Targ_Pop":null,
                "Targ_Age":"15 to 18 years",
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":null,
                "Website":null,
                "Service_Type":"Police-Youth Relationships",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -78.3188183,
                    44.3046811
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"SYIPI",
                "Full_Name":"Summer Youth in Policing Initiative",
                "FY":"FY201617",
                "Org_Name":"Ganonoque Police Services",
                "Unit_Number":null,
                "Full_Address":"340 Herbert St Ganonoque ON K7G 1R1",
                "Latitude":44.337403,
                "Longitude":-76.159194,
                "Proj_Desc":"To promote youth participation in and exposure to the work environment through diverse, educational, and productive work assignments. This program also enhances the link between the police and the neighbourhoods we serve. This initiative gives young people an opportunity to develop job skills while fostering positive partnerships with the Toronto Police Service.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":null,
                "Targ_Pop":null,
                "Targ_Age":"15 to 18 years",
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":null,
                "Website":null,
                "Service_Type":"Police-Youth Relationships",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -76.159194,
                    44.337403
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"SYIPI",
                "Full_Name":"Summer Youth in Policing Initiative",
                "FY":"FY201617",
                "Org_Name":"Prescott Police Services",
                "Unit_Number":null,
                "Full_Address":"200 Development Drive Prescott ON K0E 1T0",
                "Latitude":44.724180,
                "Longitude":-75.529085,
                "Proj_Desc":"To promote youth participation in and exposure to the work environment through diverse, educational, and productive work assignments. This program also enhances the link between the police and the neighbourhoods we serve. This initiative gives young people an opportunity to develop job skills while fostering positive partnerships with the Toronto Police Service.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":null,
                "Targ_Pop":null,
                "Targ_Age":"15 to 18 years",
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":null,
                "Website":null,
                "Service_Type":"Police-Youth Relationships",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -75.5290851,
                    44.72418
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"SYIPI",
                "Full_Name":"Summer Youth in Policing Initiative",
                "FY":"FY201617",
                "Org_Name":"OPP Central Region HQ - Northumberland",
                "Unit_Number":null,
                "Full_Address":"95 Dundas St E Brighton ON K0K 1H0",
                "Latitude":44.044724,
                "Longitude":-77.729279,
                "Proj_Desc":"To promote youth participation in and exposure to the work environment through diverse, educational, and productive work assignments. This program also enhances the link between the police and the neighbourhoods we serve. This initiative gives young people an opportunity to develop job skills while fostering positive partnerships with the Toronto Police Service.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":null,
                "Targ_Pop":null,
                "Targ_Age":"15 to 18 years",
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":null,
                "Website":null,
                "Service_Type":"Police-Youth Relationships",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -77.7292791,
                    44.0447243
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"UWCN",
                "Full_Name":"United Way Career Navigator Program",
                "FY":"FY201617",
                "Org_Name":"United Way Toronto & York Region",
                "Unit_Number":"12th Floor",
                "Full_Address":"26 Wellington Street East Toronto ON M5E 1S2",
                "Latitude":43.648333,
                "Longitude":-79.375811,
                "Proj_Desc":"United Way Toronto & York Region created Career Navigator specifically for young people who have the hardest time to find workthose facing multiple barriers including, but not limited to, poverty, discrimination, settlement issues, family breakdown, and low educational attainment.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":null,
                "Targ_Pop":"NETY",
                "Targ_Age":null,
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":null,
                "Website":"http:\/\/www.unitedwaytyr.com\/career-navigator",
                "Service_Type":null,
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.3758108,
                    43.6483334
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YCI ",
                "Full_Name":"Youth Collective Impact ",
                "FY":"FY201516",
                "Org_Name":"Cyber Self-Defence Network",
                "Unit_Number":null,
                "Full_Address":"260 Augusta Ave. Toronto, Ontario M5T 2L9",
                "Latitude":43.656480,
                "Longitude":-79.402996,
                "Proj_Desc":"Reduce the number of incidences of harm reported associated with online sexual violence by girls aged 10-24. The Cyber Self-Defence Research Project is a peer-led, citywide needs-assessment on sexual cyber-violence experienced by girls and young women. ",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":"Toronto",
                "Targ_Pop":"girls",
                "Targ_Age":"10 to 24",
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":null,
                "Website":"http:\/\/www.sschto.ca\/Youth\/Cyber-Self-Defence",
                "Service_Type":null,
                "Targ_Pop_Spe":"St. Stephens Community House",
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.4029962,
                    43.6564796
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YCI ",
                "Full_Name":"Youth Collective Impact ",
                "FY":"FY201516",
                "Org_Name":"London Child and Youth Network ",
                "Unit_Number":null,
                "Full_Address":"300 Dufferin Ave, London, ON N6B 1Z2",
                "Latitude":42.988098,
                "Longitude":-81.246087,
                "Proj_Desc":"By 2020, increase the number of youth that graduate from high school by 5%. ",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":"London",
                "Targ_Pop":null,
                "Targ_Age":null,
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":null,
                "Website":"http:\/\/londoncyn.ca\/",
                "Service_Type":null,
                "Targ_Pop_Spe":"City of London",
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -81.2460867,
                    42.9880983
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YCI ",
                "Full_Name":"Youth Collective Impact ",
                "FY":"FY201516",
                "Org_Name":"Lanark Consortium ",
                "Unit_Number":null,
                "Full_Address":"15 Bates Dr, Carleton Place, ON K7C 4J8",
                "Latitude":45.153055,
                "Longitude":-76.149413,
                "Proj_Desc":"Provide every young person in need with long-term housing and support services within 10 days.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":"Perth and Lanark County",
                "Targ_Pop":null,
                "Targ_Age":null,
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":null,
                "Website":null,
                "Service_Type":null,
                "Targ_Pop_Spe":"United Way of Lanark County",
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -76.149413,
                    45.1530549
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YCI ",
                "Full_Name":"Youth Collective Impact ",
                "FY":"FY201516",
                "Org_Name":"Family Reconnect",
                "Unit_Number":null,
                "Full_Address":"196 Brock St.Peterborough, ON K9H 2P4",
                "Latitude":44.307182,
                "Longitude":-78.321938,
                "Proj_Desc":"By 2021, reduce youth homelessness by 25%.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":"Peterborough",
                "Targ_Pop":null,
                "Targ_Age":null,
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":null,
                "Website":"http:\/\/www.evas.ca\/what-we-do\/family-reconnect\/",
                "Service_Type":null,
                "Targ_Pop_Spe":"YES Shelter Peterborough",
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -78.3219375,
                    44.3071823
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YCI ",
                "Full_Name":"Youth Collective Impact ",
                "FY":"FY201516",
                "Org_Name":"Vital Signs Prince Edward County",
                "Unit_Number":null,
                "Full_Address":"Suite 103, 280 Main Street, Picton, Ontario",
                "Latitude":44.008409,
                "Longitude":-77.139658,
                "Proj_Desc":"Improve the graduation rate. ",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":"Prince Edward County",
                "Targ_Pop":null,
                "Targ_Age":null,
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":null,
                "Website":"http:\/\/www.countycommunityfoundation.ca\/vital-sign-s14.php",
                "Service_Type":null,
                "Targ_Pop_Spe":"Prince Edward County Community Foundation",
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -77.139658,
                    44.0084088
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YCI ",
                "Full_Name":"Youth Collective Impact ",
                "FY":"FY201516",
                "Org_Name":"Collective Impact For Toronto Youth",
                "Unit_Number":null,
                "Full_Address":"23 Isabella St, Toronto, ON M4Y 1M7",
                "Latitude":43.667672,
                "Longitude":-79.384180,
                "Proj_Desc":"By 2025, bring high school graduation rates of racialized youth to 85%.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":"Toronto",
                "Targ_Pop":null,
                "Targ_Age":null,
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":null,
                "Website":"http:\/\/www.studentscommission.ca\/city\/",
                "Service_Type":null,
                "Targ_Pop_Spe":"The Students Commission of Canada",
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.38418,
                    43.6676724
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YCI ",
                "Full_Name":"Youth Collective Impact ",
                "FY":"FY201516",
                "Org_Name":"Prevent and End Youth Homelessness",
                "Unit_Number":null,
                "Full_Address":"417 Bagot St, Kingston, ON K7K 3C1",
                "Latitude":44.235472,
                "Longitude":-76.483641,
                "Proj_Desc":"By 2020, 80% of youth who enter the homelessness system maintain their housing, or are housed within 30 days.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":"Kingston, Frontenac, lennox and Addington",
                "Targ_Pop":null,
                "Targ_Age":null,
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":null,
                "Website":"http:\/\/www.unitedwaykfla.ca\/programs\/youth-homelessness\/",
                "Service_Type":null,
                "Targ_Pop_Spe":"United Way of  KFL&A",
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -76.4836409,
                    44.2354718
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YCI ",
                "Full_Name":"Youth Collective Impact ",
                "FY":"FY201516",
                "Org_Name":"Ottawa Child and Youth Initiative",
                "Unit_Number":null,
                "Full_Address":"415 Smyth Rd, Ottawa, ON K1H 8M8",
                "Latitude":45.399024,
                "Longitude":-75.652796,
                "Proj_Desc":"Improve student success of vulnerable youth though a 5% improvement in grade 6 students, in priority schools, who are at or above the provincial standard in reading, writing and math.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":"Ottawa",
                "Targ_Pop":null,
                "Targ_Age":null,
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":null,
                "Website":"http:\/\/www.growingupgreat.ca\/",
                "Service_Type":null,
                "Targ_Pop_Spe":"Childrens Hospital of Eastern Ontario Foundation",
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -75.652796,
                    45.3990242
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YCI ",
                "Full_Name":"Youth Collective Impact ",
                "FY":"FY201516",
                "Org_Name":"Partnering for Success in Youth Employment",
                "Unit_Number":null,
                "Full_Address":"790 Bronson Av, Ottawa, ON K1S 4G4",
                "Latitude":45.400042,
                "Longitude":-75.699265,
                "Proj_Desc":"Increase participation in the labour market and other employment outcomes of youth 15-24 years old by 10% over five years in priority neighbourhoods.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":"Ottawa",
                "Targ_Pop":null,
                "Targ_Age":"15 to 24",
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":null,
                "Website":"https:\/\/www.spcottawa.on.ca\/ced\/partnering-success-youth-employment",
                "Service_Type":null,
                "Targ_Pop_Spe":"Ottawa Social Planning Council",
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -75.699265,
                    45.4000415
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YJFW",
                "Full_Name":"Youth Justice Family Worker",
                "FY":"FY201617",
                "Org_Name":"St. Leonard's Community Services Inc.",
                "Unit_Number":null,
                "Full_Address":"133 Elgin St Brantford ON N3T 5P9",
                "Latitude":43.149153,
                "Longitude":-80.253719,
                "Proj_Desc":"The program provides support to the families of youth in conflict with the law or at high risk for contact, age 12-17.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":null,
                "Targ_Pop":"YM, HL, YCL, NETY",
                "Targ_Age":null,
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":"Changes in attitudes; Changes in risk\/protective factors",
                "Website":"https:\/\/www.st-leonards.com\/",
                "Service_Type":null,
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -80.2537193,
                    43.1491531
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YJFW",
                "Full_Name":"Youth Justice Family Worker",
                "FY":"FY201617",
                "Org_Name":"Kairos Community Resource Centre",
                "Unit_Number":null,
                "Full_Address":"231 Cameron Street Thunder Bay ON P7C 2H1 ",
                "Latitude":48.389421,
                "Longitude":-89.242974,
                "Proj_Desc":"The program provides support to the families of youth in conflict with the law or at high risk for contact, age 12-17.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":null,
                "Targ_Pop":"GIY, YP, DY, NETY",
                "Targ_Age":null,
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":"Changes in attitudes; Changes in risk\/protective factors",
                "Website":"http:\/\/www.kairoscrc.ca\/",
                "Service_Type":null,
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -89.242974,
                    48.389421
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YJFW",
                "Full_Name":"Youth Justice Family Worker",
                "FY":"FY201617",
                "Org_Name":"Northern Youth Services Inc.",
                "Unit_Number":null,
                "Full_Address":"3200 Bancroft Drive Sudbury ON P3B 1V3",
                "Latitude":46.485536,
                "Longitude":-80.893998,
                "Proj_Desc":"The program provides support to the families of youth in conflict with the law or at high risk for contact, age 12-17.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":null,
                "Targ_Pop":"YCL",
                "Targ_Age":null,
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":"Changes in attitudes; Changes in risk\/protective factors",
                "Website":"http:\/\/www.youthjusticeontario.ca\/members\/northern-youth-services\/",
                "Service_Type":null,
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -80.893998,
                    46.4855362
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YJFW",
                "Full_Name":"Youth Justice Family Worker",
                "FY":"FY201617",
                "Org_Name":"St. Lawrence Youth Association",
                "Unit_Number":null,
                "Full_Address":"817 Division Street Kingston ON K7K 4C2",
                "Latitude":44.254046,
                "Longitude":-76.496300,
                "Proj_Desc":"The program provides support to the families of youth in conflict with the law or at high risk for contact, age 12-17.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":null,
                "Targ_Pop":"YILC, YCL, YM",
                "Targ_Age":null,
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":"Changes in attitudes; Changes in risk\/protective factors",
                "Website":"http:\/\/www.slya.ca\/",
                "Service_Type":null,
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -76.4963004,
                    44.2540462
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YJFW",
                "Full_Name":"Youth Justice Family Worker",
                "FY":"FY201617",
                "Org_Name":"Peterborough Youth Services",
                "Unit_Number":null,
                "Full_Address":"459 Reid St Peterborough ON K9H 4G7 ",
                "Latitude":44.307601,
                "Longitude":-78.328359,
                "Proj_Desc":"The program provides support to the families of youth in conflict with the law or at high risk for contact, age 12-17.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":null,
                "Targ_Pop":"YCL, YM",
                "Targ_Age":null,
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":"Changes in attitudes; Changes in risk\/protective factors",
                "Website":"http:\/\/www.pysonline.ca\/",
                "Service_Type":null,
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -78.3283593,
                    44.307601
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YJFW",
                "Full_Name":"Youth Justice Family Worker",
                "FY":"FY201617",
                "Org_Name":"Central Toronto Youth Services",
                "Unit_Number":"Suite 300",
                "Full_Address":"65 Wellesley Street East Toronto ON M4Y 1G7",
                "Latitude":43.665363,
                "Longitude":-79.381168,
                "Proj_Desc":"The program provides support to the families of youth in conflict with the law or at high risk for contact, age 12-17.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":null,
                "Targ_Pop":"YM, YCL, LGBY",
                "Targ_Age":null,
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":"Changes in attitudes; Changes in risk\/protective factors",
                "Website":"http:\/\/www.ctys.org\/",
                "Service_Type":null,
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.3811682,
                    43.6653631
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YJFW",
                "Full_Name":"Youth Justice Family Worker",
                "FY":"FY201617",
                "Org_Name":"Durham Family Court Clinic",
                "Unit_Number":null,
                "Full_Address":"44 Richmond St W Oshawa ON L1G 1C7 ",
                "Latitude":43.899554,
                "Longitude":-78.865356,
                "Proj_Desc":"The program provides support to the families of youth in conflict with the law or at high risk for contact, age 12-17.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":null,
                "Targ_Pop":"YCL, YP, YM",
                "Targ_Age":null,
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":"Changes in attitudes; Changes in risk\/protective factors",
                "Website":"http:\/\/www.dfcc.org\/",
                "Service_Type":null,
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -78.865356,
                    43.899554
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YMP",
                "Full_Name":"Youth Mentorship Program",
                "FY":"FY201617",
                "Org_Name":"Canadian Centre for Victims of Torture ",
                "Unit_Number":null,
                "Full_Address":" 192 Jarvis St Toronto ON M5B 2B7 ",
                "Latitude":43.656456,
                "Longitude":-79.374672,
                "Proj_Desc":"A  program that will support locally developed mentoring activities for high-risk youth. Mentorship initiatives will focus on at least one of three outcome areas: employment and entrepreneurship; educational achievement; and civic engagement and leadership.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":"Greater Toronto Area",
                "Targ_Pop":"NY",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":"Number of mentees who have someone they are comfortable talking with about their problems (at start and end of match); Presence of risk \/ protective (resiliency) factors (at start and end of match)",
                "Website":"http:\/\/ccvt.org\/",
                "Service_Type":"Mentorship",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.3746724,
                    43.6564561
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YMP",
                "Full_Name":"Youth Mentorship Program",
                "FY":"FY201617",
                "Org_Name":"Canadian Centre for Victims of Torture ",
                "Unit_Number":"310",
                "Full_Address":" 2401 Eglinton Ave East Toronto ON M1K 2N8 ",
                "Latitude":43.731538,
                "Longitude":-79.268334,
                "Proj_Desc":"A  program that will support locally developed mentoring activities for high-risk youth. Mentorship initiatives will focus on at least one of three outcome areas: employment and entrepreneurship; educational achievement; and civic engagement and leadership.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":"Greater Toronto Area",
                "Targ_Pop":"NY",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":"Number of mentees who have someone they are comfortable talking with about their problems (at start and end of match); Presence of risk \/ protective (resiliency) factors (at start and end of match)",
                "Website":"http:\/\/ccvt.org\/",
                "Service_Type":"Mentorship",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.2683344,
                    43.7315381
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YMP",
                "Full_Name":"Youth Mentorship Program",
                "FY":"FY201617",
                "Org_Name":"Canadian Centre for Victims of Torture ",
                "Unit_Number":null,
                "Full_Address":" 1527 Victoria Park Avenue Toronto ON M1L 2T3 ",
                "Latitude":43.726338,
                "Longitude":-79.302190,
                "Proj_Desc":"A  program that will support locally developed mentoring activities for high-risk youth. Mentorship initiatives will focus on at least one of three outcome areas: employment and entrepreneurship; educational achievement; and civic engagement and leadership.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":"Greater Toronto Area",
                "Targ_Pop":"NY",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":"Number of mentees who have someone they are comfortable talking with about their problems (at start and end of match); Presence of risk \/ protective (resiliency) factors (at start and end of match)",
                "Website":"http:\/\/ccvt.org\/",
                "Service_Type":"Mentorship",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.3021905,
                    43.7263381
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YMP",
                "Full_Name":"Youth Mentorship Program",
                "FY":"FY201617",
                "Org_Name":"F.E.A.T. for Children and Incarcerated Parents",
                "Unit_Number":null,
                "Full_Address":" 432 Horner Avenue Etobicoke ON M8W 2B3 ",
                "Latitude":43.603247,
                "Longitude":-79.538506,
                "Proj_Desc":"A  program that will support locally developed mentoring activities for high-risk youth. Mentorship initiatives will focus on at least one of three outcome areas: employment and entrepreneurship; educational achievement; and civic engagement and leadership.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":"North Etobicoke, South Etobicoke, Scarborough, Malton",
                "Targ_Pop":"YCL",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":"Number of mentees who have someone they are comfortable talking with about their problems (at start and end of match); Presence of risk \/ protective (resiliency) factors (at start and end of match)",
                "Website":"http:\/\/featforchildren.org\/",
                "Service_Type":"Mentorship",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.5385058,
                    43.6032468
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YMP",
                "Full_Name":"Youth Mentorship ",
                "FY":"FY201617",
                "Org_Name":"Yorktown Child and Family Centre",
                "Unit_Number":"300",
                "Full_Address":" 2010 Eglinton Ave W York ON M6E 2K3 ",
                "Latitude":43.694823,
                "Longitude":-79.455529,
                "Proj_Desc":"A  program that will support locally developed mentoring activities for high-risk youth. Mentorship initiatives will focus on at least one of three outcome areas: employment and entrepreneurship; educational achievement; and civic engagement and leadership.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":"Toronto West",
                "Targ_Pop":"NY, YP",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":"Number of mentees who have someone they are comfortable talking with about their problems (at start and end of match); Presence of risk \/ protective (resiliency) factors (at start and end of match)",
                "Website":"http:\/\/www.yorktownfamilyservices.com\/",
                "Service_Type":"Mentorship",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.4555291,
                    43.6948227
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YMP",
                "Full_Name":"Youth Mentorship Program",
                "FY":"FY201617",
                "Org_Name":"The Dam ",
                "Unit_Number":"109",
                "Full_Address":" 6850 Millcreek Drive Mississauga ON L5N 4J9 ",
                "Latitude":43.595082,
                "Longitude":-79.754552,
                "Proj_Desc":"A  program that will support locally developed mentoring activities for high-risk youth. Mentorship initiatives will focus on at least one of three outcome areas: employment and entrepreneurship; educational achievement; and civic engagement and leadership.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":"Mississauga",
                "Targ_Pop":"NY, RY",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":"Number of mentees who have someone they are comfortable talking with about their problems (at start and end of match); Presence of risk \/ protective (resiliency) factors (at start and end of match)",
                "Website":"http:\/\/www.thedam.org\/",
                "Service_Type":"Mentorship",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.7545524,
                    43.5950822
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YMP",
                "Full_Name":"Youth Mentorship Program",
                "FY":"FY201617",
                "Org_Name":"Thunder Bay Multicultural Association ",
                "Unit_Number":null,
                "Full_Address":" 17 N. Court Street Thunder Bay ON P7A 4T4 ",
                "Latitude":48.436135,
                "Longitude":-89.221230,
                "Proj_Desc":"A  program that will support locally developed mentoring activities for high-risk youth. Mentorship initiatives will focus on at least one of three outcome areas: employment and entrepreneurship; educational achievement; and civic engagement and leadership.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":"Thunder Bay",
                "Targ_Pop":"NY, IY",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":"Number of mentees who have someone they are comfortable talking with about their problems (at start and end of match); Presence of risk \/ protective (resiliency) factors (at start and end of match)",
                "Website":"http:\/\/www.thunderbay.org\/",
                "Service_Type":"Mentorship",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -89.22123,
                    48.436135
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YMP",
                "Full_Name":"Youth Mentorship Program",
                "FY":"FY201617",
                "Org_Name":"Shkagamik-Kwe Health Centre",
                "Unit_Number":null,
                "Full_Address":" 161 Applegrove St Sudbury ON P3C 1N2 ",
                "Latitude":46.491728,
                "Longitude":-81.001893,
                "Proj_Desc":"A  program that will support locally developed mentoring activities for high-risk youth. Mentorship initiatives will focus on at least one of three outcome areas: employment and entrepreneurship; educational achievement; and civic engagement and leadership.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":"Sudbury, Wahnapitae First Nation, Henvey Inlet First Nation, Magnetewan First Nation",
                "Targ_Pop":"LGBY, IY",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":"Number of mentees who have someone they are comfortable talking with about their problems (at start and end of match); Presence of risk \/ protective (resiliency) factors (at start and end of match)",
                "Website":"http:\/\/www.skhc.ca\/",
                "Service_Type":"Mentorship",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -81.0018929,
                    46.4917277
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YMP",
                "Full_Name":"Youth Mentorship Program",
                "FY":"FY201617",
                "Org_Name":"Boys and Girls Club of Brantford",
                "Unit_Number":null,
                "Full_Address":" 2 Edge Street Brantford ON N3T 6H1 ",
                "Latitude":43.120581,
                "Longitude":-80.272023,
                "Proj_Desc":"A  program that will support locally developed mentoring activities for high-risk youth. Mentorship initiatives will focus on at least one of three outcome areas: employment and entrepreneurship; educational achievement; and civic engagement and leadership.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":"Brantford, Six Nations of the Grand River First Nation",
                "Targ_Pop":"IY, YCL, NY, YP, YM",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":"Number of mentees who have someone they are comfortable talking with about their problems (at start and end of match); Presence of risk \/ protective (resiliency) factors (at start and end of match)",
                "Website":"http:\/\/www.bgcbrant.ca\/",
                "Service_Type":"Mentorship",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -80.272023,
                    43.1205811
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YMP",
                "Full_Name":"Youth Mentorship Program",
                "FY":"FY201617",
                "Org_Name":"Kingston Employment and Youth Services",
                "Unit_Number":null,
                "Full_Address":" 182 Sydenham Street Kingston ON K7K 3M2 ",
                "Latitude":44.232714,
                "Longitude":-76.487413,
                "Proj_Desc":"A  program that will support locally developed mentoring activities for high-risk youth. Mentorship initiatives will focus on at least one of three outcome areas: employment and entrepreneurship; educational achievement; and civic engagement and leadership.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":"Kingston",
                "Targ_Pop":"NETY",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":"Number of mentees who have someone they are comfortable talking with about their problems (at start and end of match); Presence of risk \/ protective (resiliency) factors (at start and end of match)",
                "Website":"http:\/\/keys.ca\/",
                "Service_Type":"Mentorship",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -76.4874129,
                    44.2327141
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YMP",
                "Full_Name":"Youth Mentorship Program",
                "FY":"FY201617",
                "Org_Name":"John Howard Society of Peterborough",
                "Unit_Number":null,
                "Full_Address":" 305 Stewart Street Peterborough ON K9J 3N2 ",
                "Latitude":44.302690,
                "Longitude":-78.325793,
                "Proj_Desc":"A  program that will support locally developed mentoring activities for high-risk youth. Mentorship initiatives will focus on at least one of three outcome areas: employment and entrepreneurship; educational achievement; and civic engagement and leadership.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":"Peterborough",
                "Targ_Pop":"YCL",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":"Number of mentees who have someone they are comfortable talking with about their problems (at start and end of match); Presence of risk \/ protective (resiliency) factors (at start and end of match)",
                "Website":null,
                "Service_Type":"Mentorship",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -78.325793,
                    44.30269
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YOF",
                "Full_Name":"Youth Opportunities Fund ",
                "FY":"FY201314",
                "Org_Name":"ArtReach Toronto c\/o Tides Canada Initiatives",
                "Unit_Number":null,
                "Full_Address":"409 Richmond St W Toronto ON M5V 1X3 ",
                "Latitude":43.647766,
                "Longitude":-79.395437,
                "Proj_Desc":"$292,000 over 18 months to facilitate capacity building and develop evaluation tools for emerging young leaders and grassroots groups, who are either applying for funding or implementing initiatives through the Grassroots Innovation Stream of the Youth Opportunities Fund. Funds will support the hiring of a Project Coordinator and program delivery costs",
                "Funding_Amount":292000,
                "Timeline":18,
                "Targ_Comm":"Toronto ",
                "Targ_Pop":"IY, RY, NY, LGBY, YDIS, YCL, YILC, YP, DY",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years; 12 to 29 years for youth with special needs or disabilities",
                "Num_Youth_Served":"N\/A",
                "Grant_Outcome_SteppingUp":"Youth are engaged in their communities",
                "Website":"http:\/\/tidescanada.org\/about-us\/tides-top-10\/artreach-toronto\/",
                "Service_Type":"Youth are engaged in their communities",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.3954372,
                    43.6477657
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YOF",
                "Full_Name":"Youth Opportunities Fund ",
                "FY":"FY201314",
                "Org_Name":"Oshawa Community Health Centre",
                "Unit_Number":null,
                "Full_Address":"115 Grassmere Ave. Oshawa ON L1H 3X7 ",
                "Latitude":43.869277,
                "Longitude":-78.844787,
                "Proj_Desc":"$971,700 over four years to strengthen programming and mental health supports for Aboriginal youth living in and around Durham Region. Funding will support youth as they work collaboratively to create programs which will improve cultural knowledge, self-identity and mental health. Funding will also support participation in networking and volunteer opportunities.",
                "Funding_Amount":971700,
                "Timeline":48,
                "Targ_Comm":"Durham, Haliburton, Kawartha & Pine Ridge",
                "Targ_Pop":"IY",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years",
                "Num_Youth_Served":"2000",
                "Grant_Outcome_SteppingUp":"Youth form and maintain healthy, close relationships; Youth are engaged in their communities; Youth know about and easily navigate resources and opportunities in their communities",
                "Website":"http:\/\/www.ochc.ca\/",
                "Service_Type":"Youth form and maintain healthy, close relationships; Youth are engaged in their communities; Youth know about and easily navigate resources and opportunities in their communities",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -78.8447872,
                    43.8692774
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YOF",
                "Full_Name":"Youth Opportunities Fund ",
                "FY":"FY201314",
                "Org_Name":"Reach Out Centre for Kids (ROCK)",
                "Unit_Number":null,
                "Full_Address":"471 Pearl Street, Burlington ON L7R 4M4 ",
                "Latitude":43.328461,
                "Longitude":-79.796311,
                "Proj_Desc":"$853,200 over four years to establish a dedicated program centre for LGBTTQ youth and their families in Halton Region to access support, and foster positive youth development. This work will include establishing a youth advisory group.",
                "Funding_Amount":853200,
                "Timeline":48,
                "Targ_Comm":"Halton-Peel",
                "Targ_Pop":"IY, RY, NY, LGBY, YDIS, YCL, YILC, YP, DY",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years; 12 to 29 years for youth with special needs or disabilities",
                "Num_Youth_Served":"565",
                "Grant_Outcome_SteppingUp":"Youth are engaged in their communities; Youth know about and easily navigate resources and opportunities in their communities",
                "Website":"http:\/\/rockonline.ca\/",
                "Service_Type":"Youth are engaged in their communities; Youth know about and easily navigate resources and opportunities in their communities",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.7963113,
                    43.3284609
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YOF",
                "Full_Name":"Youth Opportunities Fund ",
                "FY":"FY201314",
                "Org_Name":"WoodGreen Community Services",
                "Unit_Number":"100",
                "Full_Address":"815 Danforth Avenue Toronto ON M4J 1L2 ",
                "Latitude":43.679550,
                "Longitude":-79.340774,
                "Proj_Desc":"$953,600 over four years to provide support, mentorship and opportunities for youth in the adult correctional system to earn their high school diploma. The Look at My Life Project will provide one-on-one tutoring, support and information sessions for youth in custody. Youth enrolled in the program will also receive post-release supports in accessing employment, post-secondary education and housing.",
                "Funding_Amount":953600,
                "Timeline":48,
                "Targ_Comm":"Toronto ",
                "Targ_Pop":"RY, NY, YP, DY",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years",
                "Num_Youth_Served":"215",
                "Grant_Outcome_SteppingUp":"Youth form and maintain healthy, close relationships; Youth have at least one consistent, caring person in their lives; Youth are engaged in their communities",
                "Website":"http:\/\/www.woodgreen.org\/",
                "Service_Type":"Youth form and maintain healthy, close relationships; Youth have at least one consistent, caring person in their lives; Youth are engaged in their communities",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.3407742,
                    43.6795502
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YOF",
                "Full_Name":"Youth Opportunities Fund ",
                "FY":"FY201314",
                "Org_Name":"Amadeusz - The Look at My Life Project c\/o Albion Neighbourhood Services",
                "Unit_Number":"10",
                "Full_Address":"86 Guided Court Toronto ON M9V 4K6 ",
                "Latitude":43.754173,
                "Longitude":-79.609707,
                "Proj_Desc":"$225,000 over three years to provide support, mentorship and opportunities for young people in the adult correctional system to earn their high school diploma. The Look at My Life Project (TLMLP) will provide one-on-one tutoring, support and information sessions for youth in custody. Youth enrolled in the program will also receive post-release supports in accessing employment, post-secondary education and housing.",
                "Funding_Amount":225000,
                "Timeline":36,
                "Targ_Comm":"Toronto ",
                "Targ_Pop":"RY, NY, LGBY, YDIS",
                "Targ_Age":"15 to 19 years; 20 to 25 years",
                "Num_Youth_Served":"300",
                "Grant_Outcome_SteppingUp":"Youth have at least one consistent, caring person in their lives; Youth know about and easily navigate resources and opportunities in their communities",
                "Website":"http:\/\/amadeusz.ca\/",
                "Service_Type":"Youth have at least one consistent, caring person in their lives; Youth know about and easily navigate resources and opportunities in their communities",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.609707,
                    43.7541729
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YOF",
                "Full_Name":"Youth Opportunities Fund ",
                "FY":"FY201314",
                "Org_Name":"Eritrean Youth Collective c\/o For Youth Initiative",
                "Unit_Number":null,
                "Full_Address":"703 Bloor st West Toronto ON M6G 1L5 ",
                "Latitude":43.663635,
                "Longitude":-79.417558,
                "Proj_Desc":"$365,700 over five years to develop a leadership and mentorship program for Eritrean youth in Toronto. Young leaders will plan, lead and promote action within their social networks and the broader Eritrean community.",
                "Funding_Amount":365700,
                "Timeline":60,
                "Targ_Comm":"Toronto ",
                "Targ_Pop":"RY, NY, YP, DY",
                "Targ_Age":"15 to 19 years; 20 to 25 years; 12 to 29 years for youth with special needs or disabilities",
                "Num_Youth_Served":"60",
                "Grant_Outcome_SteppingUp":"Youth are engaged in their community",
                "Website":"http:\/\/eritreanyouthcollective.com\/",
                "Service_Type":"Youth are engaged in their community",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.4175585,
                    43.6636345
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YOF",
                "Full_Name":"Youth Opportunities Fund ",
                "FY":"FY201314",
                "Org_Name":"Remembered Voices",
                "Unit_Number":null,
                "Full_Address":" Toronto ON  ",
                "Latitude":43.653226,
                "Longitude":-79.383184,
                "Proj_Desc":"$225,000 over three years to develop a weekly program for Aboriginal 2-Spirit, LGBT*Q and Asexual youth who are homeless or at risk for homelessness in Toronto. Designed, organized and run by Aboriginal youth, the weekly sessions will provide youth with a safe space and an opportunity to explore and access traditional languages, histories, art, land and cultural healing practices.",
                "Funding_Amount":225000,
                "Timeline":36,
                "Targ_Comm":"Toronto ",
                "Targ_Pop":"IY, RY, NY, LGBY, YDIS, YCL, YILC, YP, DY",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years; 12 to 29 years for youth with special needs or disabilities",
                "Num_Youth_Served":"130",
                "Grant_Outcome_SteppingUp":"Youth Form and Maintain health close relationships; Youth are engaged in their community",
                "Website":"https:\/\/www.facebook.com\/1755319548021851\/photos\/a.1755321321355007.1073741825.1755319548021851\/1755321328021673\/?type=3&source=11",
                "Service_Type":"Youth Form and Maintain health close relationships; Youth are engaged in their community",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.3831843,
                    43.653226
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YOF",
                "Full_Name":"Youth Opportunities Fund ",
                "FY":"FY201314",
                "Org_Name":"The Forgiveness Project c\/o For Youth Initiative",
                "Unit_Number":null,
                "Full_Address":"1652 Keele St. Toronto ON M6M 3W3 ",
                "Latitude":43.683872,
                "Longitude":-79.472927,
                "Proj_Desc":"$370,000 over five years to engage youth aged 15-29 from Toronto in activities around forgiveness and restoration. Participants will gain access to monthly discussion-based workshops that will assist youth in understanding and reflecting on the concept of forgiveness.",
                "Funding_Amount":370000,
                "Timeline":60,
                "Targ_Comm":"Toronto ",
                "Targ_Pop":"IY, RY, NY, LGBY, YDIS, YCL, YILC, YP, DY",
                "Targ_Age":"15 to 19 years; 20 to 25 years; 12 to 29 years for youth with special needs or disabilities",
                "Num_Youth_Served":"5000",
                "Grant_Outcome_SteppingUp":"Youth Form and maintain healthy close relationships; Youth are engaged in their community",
                "Website":"http:\/\/ckc.torontofoundation.ca\/org\/youth-initiative-fyi",
                "Service_Type":"Youth Form and maintain healthy close relationships; Youth are engaged in their community",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.4729275,
                    43.6838724
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YOF",
                "Full_Name":"Youth Opportunities Fund ",
                "FY":"FY201314",
                "Org_Name":"Young and Potential Fathers c\/o YMCA GTA",
                "Unit_Number":"18",
                "Full_Address":"1901 Weston Rd Toronto ON M9N 3P5 ",
                "Latitude":43.700692,
                "Longitude":-79.515675,
                "Proj_Desc":"$375,000 over five years to develop a network of community-based organizations and to recruit and train youth in the design of program initiatives that provide support to young racialized fathers.",
                "Funding_Amount":375000,
                "Timeline":60,
                "Targ_Comm":"Toronto ",
                "Targ_Pop":"RY, NY, YDIS, YCL, YILC, YP, DY",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years; 12 to 29 years for youth with special needs or disabilities",
                "Num_Youth_Served":"5000",
                "Grant_Outcome_SteppingUp":"Youth are engaged in their community; Youth have families and caregivers to help them thirve",
                "Website":"http:\/\/youngpfathers.org\/",
                "Service_Type":"Youth are engaged in their community; Youth have families and caregivers to help them thirve",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.515675,
                    43.700692
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YOF",
                "Full_Name":"Youth Opportunities Fund ",
                "FY":"FY201314",
                "Org_Name":"3rd Street Foundation c\/o Access Alliance Multicultural Health and Community Services",
                "Unit_Number":"500",
                "Full_Address":"340 College St Toronto ON M5T 3A9 ",
                "Latitude":43.657563,
                "Longitude":-79.403436,
                "Proj_Desc":"$25,000 over one year to mentor and train up to thirty-five youth in Jane and Finch area in an afterschool program focusing on leadership skills such as goal management training, cognitive behaviour intervention and negotiation.",
                "Funding_Amount":25000,
                "Timeline":12,
                "Targ_Comm":"Toronto ",
                "Targ_Pop":"IY, RY, NY, LGBY, YDIS, YCL, YILC, YP, DY",
                "Targ_Age":"15 to 19 years; 20 to 25 years",
                "Num_Youth_Served":"35",
                "Grant_Outcome_SteppingUp":"Youth have one consistant caring person in their lives",
                "Website":"http:\/\/accessalliance.ca\/",
                "Service_Type":"Youth have one consistant caring person in their lives",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.4034356,
                    43.657563
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YOF",
                "Full_Name":"Youth Opportunities Fund ",
                "FY":"FY201314",
                "Org_Name":"Afghan Mentorship Program c\/o Herizon House",
                "Unit_Number":null,
                "Full_Address":"15 Harwood st s Ajax ON L1S 7H2 ",
                "Latitude":43.859445,
                "Longitude":-79.024564,
                "Proj_Desc":"$6,000 over one year to initiate a mentorship program with twenty Afghani youth in Durham. Mentorship activities will include a homework club and guest speaker sessions.",
                "Funding_Amount":6000,
                "Timeline":12,
                "Targ_Comm":"Durham, Haliburton, Kawartha & Pine Ridge",
                "Targ_Pop":"RY, NY, YCL, YP, DY",
                "Targ_Age":"12 to 14 years; 15 to 19 years",
                "Num_Youth_Served":"20",
                "Grant_Outcome_SteppingUp":"Youth Form and Maintain health close relationships",
                "Website":"http:\/\/www.amptheyouth.org\/",
                "Service_Type":"Youth Form and Maintain health close relationships",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.0245637,
                    43.8594452
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YOF",
                "Full_Name":"Youth Opportunities Fund ",
                "FY":"FY201314",
                "Org_Name":"Asha Bengali Girls Society c\/o Access Alliance Multicultural Health and Community Services",
                "Unit_Number":null,
                "Full_Address":"3079 Danforth ave Scarborough ON M1L 1A8 ",
                "Latitude":43.691329,
                "Longitude":-79.287796,
                "Proj_Desc":"$17,300 for one year to fund Ashas Empowerment Project. This program will serve Bengali-Canadian young women and girls. Located in East York, this program will support weekly workshops on topics like self-expression and media literacy, and help participants learn new skills like sports or arts projects.",
                "Funding_Amount":17300,
                "Timeline":12,
                "Targ_Comm":"Toronto ",
                "Targ_Pop":"RY, NY, YP",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years",
                "Num_Youth_Served":"60",
                "Grant_Outcome_SteppingUp":"Youth Form and Maintain health close relationships",
                "Website":"https:\/\/www.facebook.com\/AshaB.G.S\/photos\/pb.147949872056458.-2207520000.1467815907.\/371506229700820\/?type=3",
                "Service_Type":"Youth Form and Maintain health close relationships",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.287796,
                    43.6913289
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YOF",
                "Full_Name":"Youth Opportunities Fund ",
                "FY":"FY201314",
                "Org_Name":"Building it to Suit Youth (BITSY) c\/o Youth Action Network",
                "Unit_Number":null,
                "Full_Address":"1489 Dupont St Toronto ON M6P 3S2 ",
                "Latitude":43.665813,
                "Longitude":-79.450357,
                "Proj_Desc":"$25,000 over one year to build a safe space for marginalized youth at the Don Montgomery Community Recreation Centre in Toronto. A Youth Cabinet will be created to respond to youth needs and advocate on behalf of youth in the community and build programs for the space.",
                "Funding_Amount":25000,
                "Timeline":12,
                "Targ_Comm":"Toronto ",
                "Targ_Pop":"RY, NY, LGBY, YCL, YP, DY",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years",
                "Num_Youth_Served":"100",
                "Grant_Outcome_SteppingUp":"Youth are engaged in their community; Youth know about, and can easily access resources and opportunities in their commmunity",
                "Website":"http:\/\/www.youthactionnetwork.org\/",
                "Service_Type":"Youth are engaged in their community; Youth know about, and can easily access resources and opportunities in their commmunity",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.4503572,
                    43.6658127
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YOF",
                "Full_Name":"Youth Opportunities Fund ",
                "FY":"FY201314",
                "Org_Name":"Sisters of the Soil c\/o Canadian Roots Exchange",
                "Unit_Number":null,
                "Full_Address":"246 Bloor St W Toronto ON M5S 1V4 ",
                "Latitude":43.668292,
                "Longitude":-79.397801,
                "Proj_Desc":"$25,000 over one year to build solidarity between young women aged 12-18 in the indigenous and African Canadian communities in Toronto. They will participate in workshops with a theme of reconciliation, womens empowerment and strengthening relations between these two communities.",
                "Funding_Amount":25000,
                "Timeline":12,
                "Targ_Comm":"Toronto ",
                "Targ_Pop":"IY, RY, YP",
                "Targ_Age":"12 to 14 years; 15 to 19 years",
                "Num_Youth_Served":"10",
                "Grant_Outcome_SteppingUp":"Youth are engaged in their community",
                "Website":"http:\/\/canadianroots.ca\/sisters-of-the-soil-check-out-their-facebook-page\/",
                "Service_Type":"Youth are engaged in their community",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.3978013,
                    43.6682916
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YOF",
                "Full_Name":"Youth Opportunities Fund ",
                "FY":"FY201314",
                "Org_Name":"Gibson Youth Success Initiatives c\/o Toronto Chinese Community Church",
                "Unit_Number":null,
                "Full_Address":"100 Acadia Ave Markham ON L3R 5A2 ",
                "Latitude":43.821740,
                "Longitude":-79.328713,
                "Proj_Desc":"$25,000 over one year to provide academic support through a tutoring program for low-income, new immigrant and\/or racialized youth in York Region. The program will also help young people to develop the necessary experience and leadership skills to become tutors to other youth.",
                "Funding_Amount":25000,
                "Timeline":12,
                "Targ_Comm":"Simcoe-York",
                "Targ_Pop":"RY, NY, YP",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years",
                "Num_Youth_Served":"140",
                "Grant_Outcome_SteppingUp":"Youth have at least one caring consistent person in their lives",
                "Website":"http:\/\/www.tccc.ca\/wordpress\/",
                "Service_Type":"Youth have at least one caring consistent person in their lives",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.3287134,
                    43.8217403
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YOF",
                "Full_Name":"Youth Opportunities Fund ",
                "FY":"FY201314",
                "Org_Name":"KeepRockinYou c\/o Art Starts",
                "Unit_Number":"2",
                "Full_Address":"805 Dovercourt Rd Toronto ON M6H 2X4 ",
                "Latitude":43.662778,
                "Longitude":-79.429509,
                "Proj_Desc":"$24,700 over one year to engage ten girls aged 12-25 in weekly breakdancing workshops and sharing circles. These workshops will teach the fundamentals in breakdancing, connecting these to teamwork, overcoming challenges and fears, and thinking outside the box.",
                "Funding_Amount":24700,
                "Timeline":12,
                "Targ_Comm":"Toronto ",
                "Targ_Pop":"IY, RY, NY, LGBY, YCL, YILC, YP, DY",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years",
                "Num_Youth_Served":"10",
                "Grant_Outcome_SteppingUp":"Youth are engaged in their community",
                "Website":"http:\/\/www.keeprockinyou.com\/",
                "Service_Type":"Youth are engaged in their community",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.4295093,
                    43.6627784
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YOF",
                "Full_Name":"Youth Opportunities Fund ",
                "FY":"FY201314",
                "Org_Name":"Krafty Queers c\/o SKETCH",
                "Unit_Number":null,
                "Full_Address":"180 Shaw Toronto ON M6J 2W5 ",
                "Latitude":43.646861,
                "Longitude":-79.417598,
                "Proj_Desc":"$25,000 over one year to provide a safe space for queer and trans-gendered youth in Toronto and Peel to socialize and create art with the help of program facilitators. Funding will allow this program to be free of charge, therefore decreasing barriers to participation.",
                "Funding_Amount":25000,
                "Timeline":12,
                "Targ_Comm":"Toronto ",
                "Targ_Pop":"IY, RY, NY, LGBY, YCL, YILC, YP, DY",
                "Targ_Age":"15 to 19 years; 20 to 25 years; 12 to 29 years for youth with special needs or disabilities",
                "Num_Youth_Served":"174",
                "Grant_Outcome_SteppingUp":"Youth are engaged in their community",
                "Website":"http:\/\/sketch.ca\/sketch-q1-2015-report\/",
                "Service_Type":"Youth are engaged in their community",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.4175984,
                    43.646861
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YOF",
                "Full_Name":"Youth Opportunities Fund ",
                "FY":"FY201314",
                "Org_Name":"Out of the Box c\/o Youth Action Network",
                "Unit_Number":null,
                "Full_Address":"1489 Dupont St Toronto ON M6P 3S2 ",
                "Latitude":43.665813,
                "Longitude":-79.450357,
                "Proj_Desc":"$25,000 over one year to engage youth aged 15-25 in the Victoria Park and Eglinton areas of Scarborough in building trade skills. This is an intensive summer program designed to build social and support networks, gain skills training, enhance employment opportunities, while working within an anti-racist framework to explore systems barriers.",
                "Funding_Amount":25000,
                "Timeline":12,
                "Targ_Comm":"Toronto; Durham, Haliburton, Kawartha & Pine Ridge",
                "Targ_Pop":"RY, NY, YCL, YP, DY",
                "Targ_Age":"15 to 19 years; 20 to 25 years",
                "Num_Youth_Served":"15",
                "Grant_Outcome_SteppingUp":"Youth know about, and can easily access resources and opportunities in their commmunity",
                "Website":"http:\/\/www.youthactionnetwork.org\/",
                "Service_Type":"Youth know about, and can easily access resources and opportunities in their commmunity",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.4503572,
                    43.6658127
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YOF",
                "Full_Name":"Youth Opportunities Fund ",
                "FY":"FY201314",
                "Org_Name":"PROSE c\/o Centre for Community Learning & Development",
                "Unit_Number":null,
                "Full_Address":"110 Eglinton AveW Toronto ON M4R 1A3 ",
                "Latitude":43.706190,
                "Longitude":-79.401826,
                "Proj_Desc":"$20,800 over one year to provide youth in Regent Park with weekly workshops. The workshops will be an opportunity for young people to learn about conflict resolution, self-care, sexual health and safety.",
                "Funding_Amount":20800,
                "Timeline":12,
                "Targ_Comm":"Toronto",
                "Targ_Pop":"RY, NY, YCL, YP, DY",
                "Targ_Age":"15 to 19 years",
                "Num_Youth_Served":"20",
                "Grant_Outcome_SteppingUp":"Youth form and maintain healthy and close relationships",
                "Website":"http:\/\/www.tccld.org\/programs\/td-centre-for-learning\/",
                "Service_Type":"Youth form and maintain healthy and close relationships",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.4018258,
                    43.7061904
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YOF",
                "Full_Name":"Youth Opportunities Fund ",
                "FY":"FY201314",
                "Org_Name":"Regional Youth Roundtable c\/o ACCESS Charity",
                "Unit_Number":null,
                "Full_Address":" Peel ON  ",
                "Latitude":43.676640,
                "Longitude":-79.784842,
                "Proj_Desc":"$25,000 over one year to assemble a Regional Youth Roundtable for 17 youth-led organizations in Peel region. This roundtable will coordinate efforts in the youth sector in this region.",
                "Funding_Amount":25000,
                "Timeline":12,
                "Targ_Comm":"Halton-Peel",
                "Targ_Pop":"IY, RY, NY, LGBY, YDIS",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years; 12 to 29 years for youth with special needs or disabilities",
                "Num_Youth_Served":"80",
                "Grant_Outcome_SteppingUp":"Youth are engaged in their community",
                "Website":"http:\/\/youthroundtable.ca\/",
                "Service_Type":"Youth are engaged in their community",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.7848422,
                    43.6766398
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YOF",
                "Full_Name":"Youth Opportunities Fund ",
                "FY":"FY201314",
                "Org_Name":"Silver Linings 2013 c\/o Community Living York South",
                "Unit_Number":null,
                "Full_Address":"101 Edward Avenue Richmond Hill ON L4C 5E5 ",
                "Latitude":43.894877,
                "Longitude":-79.427790,
                "Proj_Desc":"$25,000 over one year to fund a pre-employment training program in Richmond Hill for youth with special needs. With the help of their parents, participants will receive the necessary training to operate a tuck shop inside a seniors residence.",
                "Funding_Amount":25000,
                "Timeline":12,
                "Targ_Comm":"Simcoe-York",
                "Targ_Pop":"YDIS",
                "Targ_Age":"12 to 29 years for youth with special needs or disabilities",
                "Num_Youth_Served":"8",
                "Grant_Outcome_SteppingUp":"Youth maintain healthy close relationships",
                "Website":"http:\/\/www.communitylivingyorksouth.ca\/",
                "Service_Type":"Youth maintain healthy close relationships",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.42779,
                    43.8948773
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YOF",
                "Full_Name":"Youth Opportunities Fund ",
                "FY":"FY201314",
                "Org_Name":"Voices of LGBT South Asian Youth c\/o Planned Parenthood Toronto",
                "Unit_Number":null,
                "Full_Address":"36 Prince Arthur Ave Toronto ON M5R 1A9 ",
                "Latitude":43.669499,
                "Longitude":-79.397444,
                "Proj_Desc":"$25,000 over one year to build an online community for South Asian LGBTQQ youth in the Greater Toronto Area. The project will support the work of a community researcher, web designer, web developer and outreach\/engagement coordinator.",
                "Funding_Amount":25000,
                "Timeline":12,
                "Targ_Comm":"Toronto",
                "Targ_Pop":"RY, NY, LGBY, YCL, YP, DY",
                "Targ_Age":"15 to 19 years; 20 to 25 years; 12 to 29 years for youth with special needs or disabilities",
                "Num_Youth_Served":"800",
                "Grant_Outcome_SteppingUp":"Youth are engaged in their community; Youth maintain healthy close relationships",
                "Website":"http:\/\/www.ppt.on.ca\/",
                "Service_Type":"Youth are engaged in their community; Youth maintain healthy close relationships",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.397444,
                    43.6694985
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YOF",
                "Full_Name":"Youth Opportunities Fund ",
                "FY":"FY201314",
                "Org_Name":"Words of Wisdom (WOW) c\/o WoodGreen Community Services",
                "Unit_Number":"100",
                "Full_Address":"815 Danforth Avenue Toronto ON M4J 1L2 ",
                "Latitude":43.679550,
                "Longitude":-79.340774,
                "Proj_Desc":"$25,000 over one to create an empowerment program for young women in Regent Park, St. Jamestown and Moss Park in Toronto. The program will include a book club, guest speakers and workshop sessions related to the formation of identity.",
                "Funding_Amount":25000,
                "Timeline":12,
                "Targ_Comm":"Toronto",
                "Targ_Pop":"IY, RY, NY, LGBY, YDIS, YCL, YILC, YP, DY",
                "Targ_Age":"15 to 19 years",
                "Num_Youth_Served":"28",
                "Grant_Outcome_SteppingUp":"Youth are engaged in their community; Youth know about, and can easily access resources and opportunities in their commmunity",
                "Website":"http:\/\/www.woodgreen.org\/Home.aspx",
                "Service_Type":"Youth are engaged in their community; Youth know about, and can easily access resources and opportunities in their commmunity",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.3407742,
                    43.6795502
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YOF",
                "Full_Name":"Youth Opportunities Fund ",
                "FY":"FY201415",
                "Org_Name":"For Youth Initiative",
                "Unit_Number":null,
                "Full_Address":"1652 Keele Street Toronto ON M6M 3W3 ",
                "Latitude":43.683872,
                "Longitude":-79.472927,
                "Proj_Desc":"$275,000 over 18 months to deliver capacity-building supports and services to applicants and grant recipients of the OTF Youth Opportunities Fund. These will include mentorship, one-on-one coaching sessions and workshops, networking opportunities and facilitation supports. Funds will be used for staffing and program expenses.",
                "Funding_Amount":275000,
                "Timeline":18,
                "Targ_Comm":"Toronto",
                "Targ_Pop":"IY, RY, NY, LGBY, YDIS, YCL, YILC, YP, DY",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years; 12 to 29 years for youth with special needs or disabilities",
                "Num_Youth_Served":"N\/A",
                "Grant_Outcome_SteppingUp":"Youth are engaged in their community",
                "Website":"http:\/\/ckc.torontofoundation.ca\/org\/youth-initiative-fyi",
                "Service_Type":"Youth are engaged in their community",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.4729275,
                    43.6838724
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YOF",
                "Full_Name":"Youth Opportunities Fund ",
                "FY":"FY201415",
                "Org_Name":"The Students Commission of Canada",
                "Unit_Number":null,
                "Full_Address":"23 Isabella Street Toronto ON M4Y 1M7 ",
                "Latitude":43.667672,
                "Longitude":-79.384180,
                "Proj_Desc":"$25,000 over 18 months to undertake evaluation of the Youth Opportunities Fund (YOF) on behalf of OTF. Funds will be used to help YOF grantees build and implement an evaluation framework for their initiatives. Through group learning sessions and individual coaching, YOF grantees will build their skills, leadership and collaborative spirit around concepts of shared learning so that they can better respond to community issues identified through the evaluation process.",
                "Funding_Amount":25000,
                "Timeline":18,
                "Targ_Comm":"Toronto",
                "Targ_Pop":"IY, RY, NY, LGBY, YDIS, YCL, YILC, YP, DY",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years; 12 to 29 years for youth with special needs or disabilities",
                "Num_Youth_Served":"N\/A",
                "Grant_Outcome_SteppingUp":"Youth are engaged in their community",
                "Website":"http:\/\/www.tgmag.ca\/aorg\/index_e.php",
                "Service_Type":"Youth are engaged in their community",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.38418,
                    43.6676724
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YOF",
                "Full_Name":"Youth Opportunities Fund ",
                "FY":"FY201415",
                "Org_Name":"Community Living York South",
                "Unit_Number":null,
                "Full_Address":"101 Edward Avenue Richmond Hill ON L4C 5E5 ",
                "Latitude":43.894877,
                "Longitude":-79.427790,
                "Proj_Desc":"$335,100 over 36 months to deliver the A.C.T 4 Youth model in York Region. This project will ensure youth aged 20-29 with intellectual disabilities have the support they need for a smooth transition into the community after completing Post-secondary education. Youth with intellectual disabilities will access services that promote independence and employment during this transition period. The A.C.T 4 Youth initiative will work together with existing community programs, grassroots initiatives and local networks for a comprehensive approach.",
                "Funding_Amount":335100,
                "Timeline":36,
                "Targ_Comm":"York-Simcoe",
                "Targ_Pop":"YDIS, YP",
                "Targ_Age":"12 to 29 years for youth with special needs or disabilities",
                "Num_Youth_Served":"75",
                "Grant_Outcome_SteppingUp":"Youth Know about & Easily Navigate Resources & Opportunities in their Communities",
                "Website":"http:\/\/www.communitylivingyorksouth.ca\/",
                "Service_Type":"Youth Know about & Easily Navigate Resources & Opportunities in their Communities",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.42779,
                    43.8948773
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YOF",
                "Full_Name":"Youth Opportunities Fund ",
                "FY":"FY201415",
                "Org_Name":"CEREFRAC",
                "Unit_Number":"4",
                "Full_Address":"7171 Torbram Road Mississauga ON L4T 3W4 ",
                "Latitude":43.697860,
                "Longitude":-79.657545,
                "Proj_Desc":"$140,000 over 24 months to develop a peer mentorship program that will train French-speaking racialized youth as mentors for other newcomer youth who are facing similar challenges. Funding will support the development of a network of youth leaders in Peel Region, and will provide local service agencies with new ways of engaging with racialized and\/or newcomer Francophone youth.",
                "Funding_Amount":140000,
                "Timeline":24,
                "Targ_Comm":"Halton-Peel",
                "Targ_Pop":"RY, NY, YDIS, YCL, YILC, YP, DY",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years; 12 to 29 years for youth with special needs or disabilities; Parents or gaurdians of young people",
                "Num_Youth_Served":"40",
                "Grant_Outcome_SteppingUp":"Youth are enaged in their community; Youth Form and Maintain Healthy Close Relationships",
                "Website":"http:\/\/www.cerefrac.ca\/",
                "Service_Type":"Youth are enaged in their community; Youth Form and Maintain Healthy Close Relationships",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.6575453,
                    43.6978601
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YOF",
                "Full_Name":"Youth Opportunities Fund ",
                "FY":"FY201415",
                "Org_Name":"East Scarborough Storefront c\/o Tides Canada Initiatives",
                "Unit_Number":null,
                "Full_Address":"4040 Lawrence Ave E. Scarborough ON M1E 2R2 ",
                "Latitude":43.765940,
                "Longitude":-79.198945,
                "Proj_Desc":"$670,000 over 36 months to engage youth and adult allies in building and sustaining an eco-system of youth programs and services in the Kingston Galloway and Orton Park community. Funding will be used to hire two young people to coordinate the project and lead outreach, complete a network map, and deliver four youth-led demonstration projects with four of the partnering organizations.",
                "Funding_Amount":670000,
                "Timeline":36,
                "Targ_Comm":"Toronto",
                "Targ_Pop":"IY, RY, NY, LGBY, YDIS, YP",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years; 12 to 29 years for youth with special needs or disabilities",
                "Num_Youth_Served":"1000",
                "Grant_Outcome_SteppingUp":"Youth are engaged in their communities; Youth know about and easily navigate resources and opportunities in their communities",
                "Website":"http:\/\/www.thestorefront.org\/",
                "Service_Type":"Youth are engaged in their communities; Youth know about and easily navigate resources and opportunities in their communities",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.198945,
                    43.7659396
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YOF",
                "Full_Name":"Youth Opportunities Fund ",
                "FY":"FY201415",
                "Org_Name":"Planned Parenthood Toronto",
                "Unit_Number":"B",
                "Full_Address":"36 Prince Arthur Avenue Toronto ON M5R 1A9 ",
                "Latitude":43.669499,
                "Longitude":-79.397444,
                "Proj_Desc":"$849,100 over 48 months to enhance access to LGBTQ support services and to engage youth in strengthening the LGBTQ youth-sector in Toronto. Funding will support a comprehensive needs assessment, testing of new services to better meet needs, and new youth-led projects guided by a Youth Advisory Committee. Funds will also be used to launch a mobile service guide to improve service navigation. This investment will also be used to create safer communities for LGBTQ youth by launching a new social marketing campaign that will challenge homophobia, biphobia and transphobia.",
                "Funding_Amount":849100,
                "Timeline":48,
                "Targ_Comm":"Toronto",
                "Targ_Pop":"LGBY, DY",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years",
                "Num_Youth_Served":"12000",
                "Grant_Outcome_SteppingUp":"Youth Are Engaged in their Communities; Youth Know about & Easily Navigate Resources & Opportunities in their Communities",
                "Website":"http:\/\/www.ppt.on.ca\/",
                "Service_Type":"Youth Are Engaged in their Communities; Youth Know about & Easily Navigate Resources & Opportunities in their Communities",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.397444,
                    43.6694985
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YOF",
                "Full_Name":"Youth Opportunities Fund ",
                "FY":"FY201415",
                "Org_Name":"Bad Subject c\/o Leave Out Violence (LOVE) Ontario",
                "Unit_Number":"436",
                "Full_Address":"7171 Yonge St. Thornhill ON L3T 0C8 ",
                "Latitude":43.802780,
                "Longitude":-79.419521,
                "Proj_Desc":"$100,700 over 24 monthsto equip young people to build healthy, strong and trusting relationships through critical conversations on consent, sexual assault and rape culture. Bad Subject will use a workshop series and an on-line forum to engage young people in building a culture of consent in schools and communities. Funds will be used to hire a part-time project coordinator, to build an on-line platform and to engage youth as workshop facilitators.",
                "Funding_Amount":100700,
                "Timeline":24,
                "Targ_Comm":"Toronto",
                "Targ_Pop":"IY, RY, NY, LGBY, YDIS",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years; 12 to 29 years for youth with special needs or disabilities; Parents or gaurdians of young people",
                "Num_Youth_Served":"3840",
                "Grant_Outcome_SteppingUp":"Youth are enaged in their community; Youth Form and Maintain Healthy Close Relationships",
                "Website":"http:\/\/ontario.leaveoutviolence.org\/about-love-ontario\/",
                "Service_Type":"Youth are enaged in their community; Youth Form and Maintain Healthy Close Relationships",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.419521,
                    43.8027798
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YOF",
                "Full_Name":"Youth Opportunities Fund ",
                "FY":"FY201415",
                "Org_Name":"Driven Accelerator Group c\/o Access Alliance Multicultural Health and Community Services",
                "Unit_Number":"2",
                "Full_Address":"20 Camden Street Toronto ON M5V 1V1 ",
                "Latitude":43.647348,
                "Longitude":-79.396991,
                "Proj_Desc":"$140,000 over 24 months to deliver an initiative called TechSpark that will address the challenges racialized and newcomer youth face, by using innovative technology based programming. The TechSpark program will aim to remove existing barriers to employment by providing youth with access to professional mentors, and the skills needed to obtain and maintain high demand jobs in the technology sector.",
                "Funding_Amount":140000,
                "Timeline":24,
                "Targ_Comm":"Toronto",
                "Targ_Pop":"RY, NY, YP, DY",
                "Targ_Age":"15 to 19 years; 20 to 25 years",
                "Num_Youth_Served":"30",
                "Grant_Outcome_SteppingUp":"Youth maintain healthy close relationshps; Youth have at least one constant caring person",
                "Website":"http:\/\/accessalliance.ca\/wp-content\/uploads\/2015\/03\/AccessAlliance-AnnualReport-2013-2014-LowRes.pdf",
                "Service_Type":"Youth maintain healthy close relationshps; Youth have at least one constant caring person",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.3969908,
                    43.647348
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YOF",
                "Full_Name":"Youth Opportunities Fund ",
                "FY":"FY201415",
                "Org_Name":"Durham Region Writing Rainbow c\/o The AIDS Committee of Durham Region",
                "Unit_Number":null,
                "Full_Address":"900 Krosno Blvd. Pickering ON L1W 1H4 ",
                "Latitude":43.828022,
                "Longitude":-79.079289,
                "Proj_Desc":"$32,000 over 12 months to create a safe community space for LGBTTQ youth through a free weekly drop-in writing group. Funding will be used to provide an honorarium to three youth leaders, for youth outreach in Ajax-Pickering and to rent a consistent space for the weekly sessions.",
                "Funding_Amount":32000,
                "Timeline":12,
                "Targ_Comm":"Durham, Haliburton, Kawartha & Pine Ridge",
                "Targ_Pop":"LGBY, YCL, YILC, YP, DY",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years",
                "Num_Youth_Served":"20",
                "Grant_Outcome_SteppingUp":"Youth Form and Maintain Healthy Close relationships",
                "Website":"http:\/\/www.aidsdurham.com\/",
                "Service_Type":"Youth Form and Maintain Healthy Close relationships",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.0792893,
                    43.8280216
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YOF",
                "Full_Name":"Youth Opportunities Fund ",
                "FY":"FY201415",
                "Org_Name":"Lifted by Purpose c\/o SKETCH",
                "Unit_Number":"214",
                "Full_Address":"1244 York Mills Rd. Toronto ON M3A 1Y7 ",
                "Latitude":43.760433,
                "Longitude":-79.328928,
                "Proj_Desc":"$70,800 over 24 months to deliver two cycles of a twelve-week music-based stress management course for 20 young people. This program will focus on youth who have experiences with the justice system and who are living in low-income situations in priority neighbourhoods in Toronto. Through the weekly sessions, young people will improve their mental health as they learn to identify triggers and building cope skills with the help of music. Funds will be used to hire youth leaders, to engage peer mentors, to deliver the weekly music sessions and to produce a final video trailer.",
                "Funding_Amount":70800,
                "Timeline":24,
                "Targ_Comm":"Toronto",
                "Targ_Pop":"RY, YDIS, YCL, YP",
                "Targ_Age":"15 to 19 years; 20 to 25 years",
                "Num_Youth_Served":"20",
                "Grant_Outcome_SteppingUp":"Youth Form & Maintain Healthy, Close Relationships; Youth Know about & Easily Navigate Resources & Opportunities in their Communities",
                "Website":"http:\/\/fpyn.ca\/sites\/default\/files\/Final%20info%20package.pdf",
                "Service_Type":"Youth Form & Maintain Healthy, Close Relationships; Youth Know about & Easily Navigate Resources & Opportunities in their Communities",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.3289276,
                    43.7604325
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YOF",
                "Full_Name":"Youth Opportunities Fund ",
                "FY":"FY201415",
                "Org_Name":"North BurLINKton Community Group c\/o Community Development Halton",
                "Unit_Number":null,
                "Full_Address":"860 Harrington Court Burlington ON L7N 3N4 ",
                "Latitude":43.357750,
                "Longitude":-79.787687,
                "Proj_Desc":"$181,700 over 36 months to create two to three neighbourhood spaces where young people can meet, make new friends, experience a sense of belonging, and gain leadership skills. High school aged youth in North Burlington will secure and animate these spaces with the support of adult allies. Funds will be used to support youth-led activities within the new neighbourhood spaces.",
                "Funding_Amount":181700,
                "Timeline":36,
                "Targ_Comm":"Halton-Peel",
                "Targ_Pop":"IY, RY, NY, LGBY, YDIS, YCL, YP, DY",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years; 12 to 29 years for youth with special needs or disabilities",
                "Num_Youth_Served":"700",
                "Grant_Outcome_SteppingUp":"Youth build and maintain healthy, close relationships; Youth are engaged in their communities",
                "Website":"http:\/\/northburlinkton.cdhalton.ca\/",
                "Service_Type":"Youth build and maintain healthy, close relationships; Youth are engaged in their communities",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.7876872,
                    43.3577501
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YOF",
                "Full_Name":"Youth Opportunities Fund ",
                "FY":"FY201415",
                "Org_Name":"Success Beyond Limits",
                "Unit_Number":null,
                "Full_Address":"755 Oakdale Road Toronto ON M3N 1P3 ",
                "Latitude":43.755877,
                "Longitude":-79.524202,
                "Proj_Desc":"$210,000 over 36 months to work collaboratively with community partners, including the Toronto District School Board, to bring social, recreational and academic supports to middle-school youth in order reduce the achievement gap and connect young people to opportunities and experiences that will foster new skills, new relationships and expanded horizons. Funding will be used to hire one youth coordinator, to recruit and train 20 youth mentors, and to deliver mentorship and educational supports in a school setting in the Jane Finch neighbourhood in Toronto.",
                "Funding_Amount":210000,
                "Timeline":36,
                "Targ_Comm":"Toronto",
                "Targ_Pop":"RY, YCL, YP, DY",
                "Targ_Age":"12 to 14 years; 15 to 19 years",
                "Num_Youth_Served":"360",
                "Grant_Outcome_SteppingUp":"Youth form and maintain healthy, close relationships; Youth know about and easily navigate resources in their communities",
                "Website":"http:\/\/www.successbl.com\/",
                "Service_Type":"Youth form and maintain healthy, close relationships; Youth know about and easily navigate resources in their communities",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.524202,
                    43.7558774
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YOF",
                "Full_Name":"Youth Opportunities Fund ",
                "FY":"FY201415",
                "Org_Name":"S.W.A.G. Youth Mentorship Program c\/o African Community Services of Peel",
                "Unit_Number":"2101",
                "Full_Address":"145 Hillcrest Avenue Mississauga ON L5B 3Z1 ",
                "Latitude":43.580220,
                "Longitude":-79.623996,
                "Proj_Desc":"$100,300 over 24 months to deliver a program that develops the skills and capacity of racialized youth through mentorship, training, education, and positive relationships. S.W.A.G.(Success with Age and Guidance) is comprised of a group of young men under 30 years old all from the Region of Peel. Funds will support two 13-week mentorship sessions a year for youth aged 12 to 21 in the Peel Region.",
                "Funding_Amount":100300,
                "Timeline":24,
                "Targ_Comm":"Halton-Peel",
                "Targ_Pop":"RY, YCL, YP, DY",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years",
                "Num_Youth_Served":"100",
                "Grant_Outcome_SteppingUp":"Youth are engaged in their communities",
                "Website":"http:\/\/www.africancommunityservices.com\/",
                "Service_Type":"Youth are engaged in their communities",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.6239959,
                    43.5802204
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YOF",
                "Full_Name":"Youth Opportunities Fund ",
                "FY":"FY201415",
                "Org_Name":"The Power to Be International c\/o Pueblito Canada",
                "Unit_Number":"14b",
                "Full_Address":"1822 Whites Road Pickering ON L1V 0B1 ",
                "Latitude":43.831458,
                "Longitude":-79.121750,
                "Proj_Desc":"$71,900 over 24 months to pilot a mentorship and leadership program that focuses on girls empowerment through critical engagement with information communication technology (ICT), social media and community building in virtual and physical settings. Funds will be used to hire one youth program coordinator, to deliver weekly engagement sessions, and to build a virtual platform for digital youth engagement.",
                "Funding_Amount":71900,
                "Timeline":24,
                "Targ_Comm":"Durham, Haliburton, Kawartha & Pine Ridge",
                "Targ_Pop":"RY, NY, YDIS, YP",
                "Targ_Age":"12 to 14 years; 15 to 19 years",
                "Num_Youth_Served":"720",
                "Grant_Outcome_SteppingUp":"Youth form and maintain healthy, close relationships; Youth are engaged in their communities",
                "Website":"http:\/\/www.casapueblito.org\/",
                "Service_Type":"Youth form and maintain healthy, close relationships; Youth are engaged in their communities",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.1217496,
                    43.8314581
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YOF",
                "Full_Name":"Youth Opportunities Fund ",
                "FY":"FY201415",
                "Org_Name":"F.E.A.T. for Children c\/o Franklin Horner Community Centre",
                "Unit_Number":null,
                "Full_Address":"432 Horner Ave. Toronto ON M8W 2B2 ",
                "Latitude":43.603619,
                "Longitude":-79.538434,
                "Proj_Desc":"$129,900 over 36 months to deliver a peer mentorship project that will provide positive role models to at-risk youth in high three risk communities. Each week, youth will have the opportunity to participate in a variety of sports, engage in the arts, and collaboratively prepare nutritious meals with mentors. The program will provide year-long supportive programming once a week for youth 12 20 years old who are affected by parental imprisonment.",
                "Funding_Amount":129900,
                "Timeline":36,
                "Targ_Comm":"Toronto",
                "Targ_Pop":"IY, RY, YCL, YILC, YP, DY",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years",
                "Num_Youth_Served":"375",
                "Grant_Outcome_SteppingUp":"Youth have at lease one consistent, caring person in their lives; Youth are engaged in their communities",
                "Website":"http:\/\/featforchildren.org\/cms\/news.php",
                "Service_Type":"Youth have at lease one consistent, caring person in their lives; Youth are engaged in their communities",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.5384343,
                    43.6036187
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YOF",
                "Full_Name":"Youth Opportunities Fund ",
                "FY":"FY201415",
                "Org_Name":"IMPACT n Communities c\/o Operation Springboard",
                "Unit_Number":null,
                "Full_Address":"4301 Kingston Rd Scarborough ON M1E 2M9 ",
                "Latitude":43.762432,
                "Longitude":-79.193150,
                "Proj_Desc":"$300,000 over 36 months to deliver the Violence Intervention (VIA) Ambassadors Project in four communities in East Scarborough. Youth in the program will receive capacity building and training in life and pro-social skills, violence prevention and intervention. During the final year of this project, VIAs will be part of a Scarborough Wide Youth Council that will be dedicated to leadership, violence intervention and community safety.",
                "Funding_Amount":300000,
                "Timeline":36,
                "Targ_Comm":"Toronto",
                "Targ_Pop":"RY, NY, LGBY, YCL, YILC, YP, DY",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years; 12 to 29 years for youth with special needs or disabilities; Parents or gaurdians of young people",
                "Num_Youth_Served":"1500",
                "Grant_Outcome_SteppingUp":"Youth build and maintain healthy, close relationships; Youth are engaged in their communities",
                "Website":"https:\/\/www.facebook.com\/ImpactNCommunities\/",
                "Service_Type":"Youth build and maintain healthy, close relationships; Youth are engaged in their communities",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.1931498,
                    43.762432
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YOF",
                "Full_Name":"Youth Opportunities Fund ",
                "FY":"FY201415",
                "Org_Name":"Naadmaagit Ki Group c\/o For Youth Initiative",
                "Unit_Number":null,
                "Full_Address":"56 Pauline Avenue Toronto ON M6H 3M8 ",
                "Latitude":43.661170,
                "Longitude":-79.438589,
                "Proj_Desc":"$263,600 over 48 months to connect urban Aboriginal youth with Elders, their peers and adult mentors while engaging them in land-based and cultural learning in Toronto. Through these new relationships, young people will deepen their understanding of indigenous knowledge and will learn to apply indigenous knowledge to a range of activities. Youth will be supported to lead nature tours, cultural ceremonies, and increase indigenous presence on urban lands through restoration and planting. Funds will be used to pay honorariums to youth mentors and Elders, and to train youth in horticulture.",
                "Funding_Amount":263600,
                "Timeline":48,
                "Targ_Comm":"Toronto",
                "Targ_Pop":"IY, RY, NY, LGBY, YDIS, YCL, YILC, YP, DY",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years; 12 to 29 years for youth with special needs or disabilities",
                "Num_Youth_Served":"200",
                "Grant_Outcome_SteppingUp":"Youth are engaged in their communities; Youth form and maintain healthy, close relationships",
                "Website":"https:\/\/naadmaagitki.wordpress.com\/about\/",
                "Service_Type":"Youth are engaged in their communities; Youth form and maintain healthy, close relationships",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.4385886,
                    43.6611701
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YOF",
                "Full_Name":"Youth Opportunities Fund ",
                "FY":"FY201415",
                "Org_Name":"Persevere Until Success Happens (P.U.S.H.) c\/o Unison Health and Community Services",
                "Unit_Number":null,
                "Full_Address":"700 Lawrence Ave W Toronto ON M6A 3B4 ",
                "Latitude":43.716657,
                "Longitude":-79.447258,
                "Proj_Desc":"$171,100 over 36 months to deliver the Push Elite program, to engage youth from the Lawrence Heights community in a life skills, leadership and fundamental basketball skills training program. The program will support youth who face barriers with academics, social skills and other life issues by providing opportunities to participate in sports, attend life skills workshops and access academic supports.",
                "Funding_Amount":171100,
                "Timeline":36,
                "Targ_Comm":"Toronto",
                "Targ_Pop":"RY, NY, YDIS, LGBY, YCL, YILC, YP, DY",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years; 12 to 29 years for youth with special needs or disabilities",
                "Num_Youth_Served":"100",
                "Grant_Outcome_SteppingUp":"Youth are engaged in their communities; Youth know about and easily navigate resources in their communities",
                "Website":"http:\/\/www.otf.ca\/persevere-until-success-happens-push-co-unison-health-and-community-services",
                "Service_Type":"Youth are engaged in their communities; Youth know about and easily navigate resources in their communities",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.4472576,
                    43.7166569
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YOF",
                "Full_Name":"Youth Opportunities Fund ",
                "FY":"FY201415",
                "Org_Name":"Steeles LAmoreaux Youth Empowerment (S.L.Y.E.) c\/o Youthlink",
                "Unit_Number":"410",
                "Full_Address":"3850 Finch Ave East Toronto ON M1T 3T6 ",
                "Latitude":43.800646,
                "Longitude":-79.300592,
                "Proj_Desc":"$300,000 over 36 months to deliver a project called The Roadshow which aims to engage youth between the ages of 12-25 by connecting them to the broad spectrum of supports available in their local communities. The Roadshow will be held in schools, as well as private and residential spaces, where collaboratives of cross-sector organizations will promote and guide youth through the supports that meet their variety of needs. The project will target both youth in school as well as youth who are disengaged and out of school.",
                "Funding_Amount":300000,
                "Timeline":36,
                "Targ_Comm":"Toronto",
                "Targ_Pop":"RY, NY, YDIS, LGBY, YCL, YP, DY",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years; 12 to 29 years for youth with special needs or disabilities; Parents or gaurdians of young people",
                "Num_Youth_Served":"16000",
                "Grant_Outcome_SteppingUp":"Youth know about and easily navigate resources in their communities",
                "Website":"http:\/\/www.slyenetwork.com\/",
                "Service_Type":"Youth know about and easily navigate resources in their communities",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.3005922,
                    43.8006462
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YOF",
                "Full_Name":"Youth Opportunities Fund ",
                "FY":"FY201415",
                "Org_Name":"The Next Edition c\/o Youth Action Network",
                "Unit_Number":null,
                "Full_Address":"26 Houston Cres. Toronto ON M2J 3H8 ",
                "Latitude":43.785219,
                "Longitude":-79.347069,
                "Proj_Desc":"$150,800 over 24 months to engage youth 14 to 25 in Toronto to cultivate their artistic voice and skills through music. Participating young people will learn to produce and promote socially-conscious music through live performances and digital media.",
                "Funding_Amount":150800,
                "Timeline":24,
                "Targ_Comm":"Toronto",
                "Targ_Pop":"IY, RY, NY, LGBY, YCL, YILC, YP, DY",
                "Targ_Age":"15 to 19 years; 20 to 25 years",
                "Num_Youth_Served":"600",
                "Grant_Outcome_SteppingUp":"Youth are engaged in their communities; Youth form and maintain healthy, close relationships",
                "Website":"http:\/\/www.youthactionnetwork.org\/",
                "Service_Type":"Youth are engaged in their communities; Youth form and maintain healthy, close relationships",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.3470688,
                    43.7852195
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YOF",
                "Full_Name":"Youth Opportunities Fund ",
                "FY":"FY201516",
                "Org_Name":"Black Women in Motion c\/o For Youth Initiative",
                "Unit_Number":"301",
                "Full_Address":"659 Northcliffe Blvd Toronto ON M6E 5B3 ",
                "Latitude":43.695592,
                "Longitude":-79.447296,
                "Proj_Desc":"$70,000 over 12 months to host This Means WAAR, a conference for racialized youth living in low-income situations, who are in care or leaving care, in order to bring together young residents of Torontos Weston Pellam Park neighbourhood to talk about rape culture. Funds will be used for staff salaries, events and the conference program delivery.",
                "Funding_Amount":70000,
                "Timeline":12,
                "Targ_Comm":"Toronto",
                "Targ_Pop":"RY, YP",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years",
                "Num_Youth_Served":"75",
                "Grant_Outcome_SteppingUp":"Youth Are Engaged in their Communities",
                "Website":"http:\/\/www.foryouth.ca\/bwim416",
                "Service_Type":"Youth Are Engaged in their Communities",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.4472957,
                    43.6955923
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YOF",
                "Full_Name":"Youth Opportunities Fund ",
                "FY":"FY201516",
                "Org_Name":"CANVAS Arts Action Program c\/o Youth Assisting Youth",
                "Unit_Number":null,
                "Full_Address":"222 Montrose Aveneue Toronto ON M6G 3G7 ",
                "Latitude":43.656255,
                "Longitude":-79.418850,
                "Proj_Desc":"$140,000 over 24 months to run the nine-week Celebrate! Body Positive Improv Program in schools and communities across the Greater Toronto Area. Youth will be equipped with creative tools to combat negative body image, gender-based violence, homophobia and transphobia. Funds will be used for staff and programming costs.",
                "Funding_Amount":140000,
                "Timeline":24,
                "Targ_Comm":"Toronto, Halton-Peel, Simcoe-York",
                "Targ_Pop":"LGBY, YDIS, YP, YILC",
                "Targ_Age":"12 to 14 years; 15 to 19 years",
                "Num_Youth_Served":"120",
                "Grant_Outcome_SteppingUp":"Youth Form & Maintain Healthy, Close Relationships; Youth Are Engaged in their Communities",
                "Website":"http:\/\/www.canvasprograms.ca\/",
                "Service_Type":"Youth Form & Maintain Healthy, Close Relationships; Youth Are Engaged in their Communities",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.41885,
                    43.6562549
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YOF",
                "Full_Name":"Youth Opportunities Fund ",
                "FY":"FY201516",
                "Org_Name":"Cipher c\/o ACCESS",
                "Unit_Number":null,
                "Full_Address":"4 Alfred Keuhne Blvd Brampton ON L6T 4N3 ",
                "Latitude":43.696937,
                "Longitude":-79.692643,
                "Proj_Desc":"$33,600 over 12 months to deliver workshops and a conference for racialized youth living in low-income situations in Peel Region and introduce them to computer coding and software design. Funds will be used for honorariums. program software, space and conference organizing.",
                "Funding_Amount":33600,
                "Timeline":12,
                "Targ_Comm":"Halton-Peel",
                "Targ_Pop":"RY, YP",
                "Targ_Age":"15 to 19 years",
                "Num_Youth_Served":"1000",
                "Grant_Outcome_SteppingUp":"Youth Are Engaged in their Communities",
                "Website":"http:\/\/projectcipher.io\/",
                "Service_Type":"Youth Are Engaged in their Communities",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.6926433,
                    43.6969369
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YOF",
                "Full_Name":"Youth Opportunities Fund ",
                "FY":"FY201516",
                "Org_Name":"Legalswipe c\/o Ontario Justice Education Network",
                "Unit_Number":null,
                "Full_Address":"10 Dundas Street East Toronto ON M5B 2G9 ",
                "Latitude":43.656729,
                "Longitude":-79.380718,
                "Proj_Desc":"$137,200 over 24 months to offer legal education workshops and further develop a software application that is designed to help Aboriginal, racialized and newcomer youth and youth living in rural and remote communities learn about their legal rights during interactions with law enforcement. Funds will be used for staffing and workshop supplies.",
                "Funding_Amount":137200,
                "Timeline":24,
                "Targ_Comm":"Toronto",
                "Targ_Pop":"IY, RY, YRR, DY, YCL, YP",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years",
                "Num_Youth_Served":"160",
                "Grant_Outcome_SteppingUp":"Youth Are Engaged in their Communities",
                "Website":"http:\/\/www.legalswipe.com\/",
                "Service_Type":"Youth Are Engaged in their Communities",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.3807182,
                    43.6567287
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YOF",
                "Full_Name":"Youth Opportunities Fund ",
                "FY":"FY201516",
                "Org_Name":"Next Gen Men c\/o 360kids Support Services",
                "Unit_Number":null,
                "Full_Address":"10415 Yonge St. Richmond Hill ON L4C 0Z3 ",
                "Latitude":43.881536,
                "Longitude":-79.438715,
                "Proj_Desc":"$210,000 over 36 months to deliver after-school programs to develop social identity, self-awareness and healthy masculinity for boys ages 12 to 14 years in York Region and equip them to interact positively with peers, adults and the community. Funds will be used for staff salaries, programming and promotional materials.",
                "Funding_Amount":210000,
                "Timeline":36,
                "Targ_Comm":"Simcoe-York",
                "Targ_Pop":"IY, RY, NY, YRR",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years; 12 to 29 years for youth with special needs or disabilities; Parents or gaurdians of young people",
                "Num_Youth_Served":"450",
                "Grant_Outcome_SteppingUp":"Youth Form & Maintain Healthy, Close Relationships",
                "Website":"http:\/\/nextgenmen.ca\/",
                "Service_Type":"Youth Form & Maintain Healthy, Close Relationships",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.4387149,
                    43.8815363
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YOF",
                "Full_Name":"Youth Opportunities Fund ",
                "FY":"FY201516",
                "Org_Name":"Parkour Toronto c\/o For Youth Initiative",
                "Unit_Number":"803",
                "Full_Address":"25 The Esplanade Toronto ON M5E 1W5 ",
                "Latitude":43.646164,
                "Longitude":-79.375037,
                "Proj_Desc":"$19,500 over 12 months to deliver Parkour classes, free outdoor meet-ups and monthly events for Aboriginal, racialized, newcomer, Francophone and LGBTTQ youth. This initiative will help them develop a healthier lifestyle and gain confidence and independence through a physical activity they enjoy. Funds will be used for staffing and travel expenses.",
                "Funding_Amount":19500,
                "Timeline":12,
                "Targ_Comm":"Toronto",
                "Targ_Pop":"IY, RY, NY, LGBY, FY, DY, YCL, YP",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years",
                "Num_Youth_Served":"255",
                "Grant_Outcome_SteppingUp":"Youth Are Engaged in their Communities",
                "Website":"http:\/\/fpyn.ca\/sites\/default\/files\/events\/parkour.pdf",
                "Service_Type":"Youth Are Engaged in their Communities",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.3750374,
                    43.6461637
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YOF",
                "Full_Name":"Youth Opportunities Fund ",
                "FY":"FY201516",
                "Org_Name":"Power to Girls Foundation c\/o SKETCH Working Arts for Street-involved and Homeless Youth",
                "Unit_Number":"502",
                "Full_Address":"100 Dundas Street East Mississauga ON L5A 1W5 ",
                "Latitude":43.581551,
                "Longitude":-79.612122,
                "Proj_Desc":"$185,000 over 36 months to run Growing Independent Resilient Ladies (GIRL) a program for racialized female youth from lower income neighbourhoods in order to foster positive life decisions and build self-esteem through media literacy, access to resources, mentorship, and improved mother-daughter relationships. Funds will be used for staff salaries, workshops and program expenses.",
                "Funding_Amount":185000,
                "Timeline":36,
                "Targ_Comm":"Toronto, Halton-Peel, Simcoe-York",
                "Targ_Pop":"RY, YP",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years; 12 to 29 years for youth with special needs or disabilities; Parents or gaurdians of young people",
                "Num_Youth_Served":"120",
                "Grant_Outcome_SteppingUp":"Youth Form & Maintain Healthy, Close Relationships; Youth Have Families & Caregivers to help them Thrive",
                "Website":"http:\/\/www.powertogirls.com\/",
                "Service_Type":"Youth Form & Maintain Healthy, Close Relationships; Youth Have Families & Caregivers to help them Thrive",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.6121223,
                    43.5815514
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YOF",
                "Full_Name":"Youth Opportunities Fund ",
                "FY":"FY201516",
                "Org_Name":"RISE Edutainment c\/o VIBE Arts",
                "Unit_Number":null,
                "Full_Address":"8 Bobcat Terrance Scarborough ON M1B 6G5 ",
                "Latitude":43.807611,
                "Longitude":-79.183019,
                "Proj_Desc":"$70,000 over 12 months to create community gatherings for racialized youth in Scarborough and Toronto to address key social issues important to them (such as poverty, gang-violence or racism) in both artistic and non-artistic ways, with fellow youth and adult mentors. Funds will be used for staff salaries and the delivery of programming, conferences, and events.",
                "Funding_Amount":70000,
                "Timeline":12,
                "Targ_Comm":"Toronto",
                "Targ_Pop":"RY, YP, DY, YCL",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years",
                "Num_Youth_Served":"6000",
                "Grant_Outcome_SteppingUp":"Youth are Engaged in their Communities; Youth Form & Maintain Healthy, Close Relationships",
                "Website":"http:\/\/riseedutainment.com\/",
                "Service_Type":"Youth are Engaged in their Communities; Youth Form & Maintain Healthy, Close Relationships",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.1830194,
                    43.8076108
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YOF",
                "Full_Name":"Youth Opportunities Fund ",
                "FY":"FY201516",
                "Org_Name":"T-Miut c\/o Tungasuvvingat Inuit",
                "Unit_Number":"2415",
                "Full_Address":"77 Howard Street Toronto ON M4X 1J9 ",
                "Latitude":43.670840,
                "Longitude":-79.372709,
                "Proj_Desc":"$210,000 over 36 months to create a space for Inuit youth in Toronto to meet, gather, and learn about the Inuk identity. T-Miut will develop a language curriculum, teach traditional skills such as beading games, sewing, singing, and drumming, and provide cultural teachings. Funds will be used to hire project coordinators, rent space, conduct outreach, and deliver programming.",
                "Funding_Amount":210000,
                "Timeline":36,
                "Targ_Comm":"Toronto",
                "Targ_Pop":"IY",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years; 12 to 29 years for youth with special needs or disabilities",
                "Num_Youth_Served":"100",
                "Grant_Outcome_SteppingUp":"Youth Form & Maintain Healthy, Close Relationships; Youth Are Engaged in their Communities",
                "Website":"https:\/\/www.facebook.com\/media\/set\/?set=a.1114512501902578.1073741830.764979956855836&type=3",
                "Service_Type":"Youth Form & Maintain Healthy, Close Relationships; Youth Are Engaged in their Communities",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.3727095,
                    43.6708405
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YOF",
                "Full_Name":"Youth Opportunities Fund ",
                "FY":"FY201516",
                "Org_Name":"World Changers Society c\/o Rapport Youth Services",
                "Unit_Number":null,
                "Full_Address":"82 Stevenson Road Etobicoke ON M9V 2B5 ",
                "Latitude":43.743055,
                "Longitude":-79.589989,
                "Proj_Desc":"$140,000 over 24 months to provide mentorship and life skills training for youth coming out of care to support their transition to independence. Funds will be used for staffing, equipment and resources to hold regular sessions between mentors (youth once in care now independent) and youth still in care in the Greater Toronto Area.",
                "Funding_Amount":140000,
                "Timeline":24,
                "Targ_Comm":"Halton-Peel",
                "Targ_Pop":"RY, NY",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years; 12 to 29 years for youth with special needs or disabilities",
                "Num_Youth_Served":"24",
                "Grant_Outcome_SteppingUp":"Youth Have at Least One Consistent, Caring Person in their Lives",
                "Website":"https:\/\/www.facebook.com\/World-Changer-Society-769029203145591\/",
                "Service_Type":"Youth Have at Least One Consistent, Caring Person in their Lives",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.5899886,
                    43.7430549
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YOF",
                "Full_Name":"Youth Opportunities Fund ",
                "FY":"FY201516",
                "Org_Name":"BrAIDS for AIDS c\/o Youth Action Network",
                "Unit_Number":"2104",
                "Full_Address":"55 George Appleton Way Toronto ON M3M 0A2 ",
                "Latitude":43.725130,
                "Longitude":-79.481611,
                "Proj_Desc":"$92,000 over 36 months to deliver one-to-one sexual health education, counseling and referral sessions with young males in detention at the Roy McMurtry Youth Centre in Brampton. The information will be delivered through culturally-relevant mediums and community sexual health resources. Funds will be used for program staffing, transportation and supplies.",
                "Funding_Amount":92000,
                "Timeline":36,
                "Targ_Comm":"Halton-Peel",
                "Targ_Pop":"IY, RY, NY, LGBY, YDIS",
                "Targ_Age":"12 to 14 years; 15 to 19 years",
                "Num_Youth_Served":"1000",
                "Grant_Outcome_SteppingUp":"Youth Form & Maintain Healthy, Close Relationships; Youth Are Engaged in their Communities",
                "Website":"http:\/\/www.braidsforaids.com\/about\/",
                "Service_Type":"Youth Form & Maintain Healthy, Close Relationships; Youth Are Engaged in their Communities",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.4816114,
                    43.7251304
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YOF",
                "Full_Name":"Youth Opportunities Fund ",
                "FY":"FY201516",
                "Org_Name":"LAB B c\/o Youth Action Network",
                "Unit_Number":"104",
                "Full_Address":"60 Queen Street Brampton ON L6V 1A9 ",
                "Latitude":43.687610,
                "Longitude":-79.758394,
                "Proj_Desc":"$300,000 over 36 months to create a Creative Economy Co-op program for racialized and newcomer youth in Peel Region. They will mentor youth who seek entrepreneurial skills and support them to reach workable milestones. Funds will support staffing and program costs.",
                "Funding_Amount":300000,
                "Timeline":36,
                "Targ_Comm":"Halton-Peel",
                "Targ_Pop":"RY, NY, LGBY, YDIS",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years",
                "Num_Youth_Served":"900",
                "Grant_Outcome_SteppingUp":"Youth Form & Maintain Healthy, Close Relationships; Youth Have at Least One Consistent, Caring Person in their Lives",
                "Website":"http:\/\/www.lab-b.ca\/",
                "Service_Type":"Youth Form & Maintain Healthy, Close Relationships; Youth Have at Least One Consistent, Caring Person in their Lives",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.7583938,
                    43.6876104
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YOF",
                "Full_Name":"Youth Opportunities Fund ",
                "FY":"FY201516",
                "Org_Name":"Native Youth Sexual Health Network c\/o Ontario Federation of Indigenous Friendship Centres",
                "Unit_Number":null,
                "Full_Address":"219 Front Street East Toronto ON M5A 1E8 ",
                "Latitude":43.650761,
                "Longitude":-79.365766,
                "Proj_Desc":"$400,000 over 48 months to work with Aboriginal youth across Ontario to mentor young leaders and create sustainable resources that can improve personal and community health and wellness. The Network will hold a youth summit and a Circle of Support, expand its Media as Arts Justice programming, and provide capacity and guidance to Indigenous youth living in remote, low-income areas throughout Ontario. Funds will support salaries and programming, and the planning and staging of the Youth Summit, gatherings and conferences.",
                "Funding_Amount":400000,
                "Timeline":48,
                "Targ_Comm":"Ontario",
                "Targ_Pop":"IY, YRR, LGBY",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years",
                "Num_Youth_Served":"300",
                "Grant_Outcome_SteppingUp":"Youth Form & Maintain Healthy, Close Relationships; Youth Are Engaged in their Communities; Youth Know about & Easily Navigate Resources & Opportunities in their Communities",
                "Website":"http:\/\/www.nativeyouthsexualhealth.com\/",
                "Service_Type":"Youth Form & Maintain Healthy, Close Relationships; Youth Are Engaged in their Communities; Youth Know about & Easily Navigate Resources & Opportunities in their Communities",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.3657659,
                    43.6507612
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YOF",
                "Full_Name":"Youth Opportunities Fund ",
                "FY":"FY201516",
                "Org_Name":"REX Pride c\/o Leave Out Violence Everywhere (LOVE)",
                "Unit_Number":null,
                "Full_Address":"21 Panorama Court Toronto ON M9W 3W7 ",
                "Latitude":43.715187,
                "Longitude":-79.553671,
                "Proj_Desc":"$387,000 over 48 months to coordinate a local support network for LGBTTQ youth and provide support and services to youth and youth-serving agencies in the Toronto neighbourhood of Rexdale. Funds will be used for project staffing, programming and marketing materials.",
                "Funding_Amount":387000,
                "Timeline":48,
                "Targ_Comm":"Toronto",
                "Targ_Pop":"LGBY, YP, DY, YCL",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years",
                "Num_Youth_Served":"20000",
                "Grant_Outcome_SteppingUp":"Youth Form & Maintain Healthy, Close Relationships; Youth Are Engaged in their Communities; Youth Know about & Easily Navigate Resources & Opportunities in their Communities",
                "Website":"https:\/\/www.facebook.com\/rexpride",
                "Service_Type":"Youth Form & Maintain Healthy, Close Relationships; Youth Are Engaged in their Communities; Youth Know about & Easily Navigate Resources & Opportunities in their Communities",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.5536706,
                    43.7151868
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YOF",
                "Full_Name":"Youth Opportunities Fund ",
                "FY":"FY201516",
                "Org_Name":"S.E.E.D.S. c\/o Thornecliffe Neighbourhood Office (TNO)",
                "Unit_Number":null,
                "Full_Address":"804 Huntingwood Drive Toronto ON M1T 2L6 ",
                "Latitude":43.792816,
                "Longitude":-79.297402,
                "Proj_Desc":"$107,700 over 36 months to deliver an after-school program, using a peer-learning model, for middle school youth in Torontos neighbourhood improvement areas. Local post-secondary students will provide supports, helping the youth to form and maintain healthy, close relationships. Funds will be used for program delivery and staffing costs.",
                "Funding_Amount":107700,
                "Timeline":36,
                "Targ_Comm":"Toronto",
                "Targ_Pop":"IY, RY, NY, LGBY, YDIS",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years; 12 to 29 years for youth with special needs or disabilities",
                "Num_Youth_Served":"2500",
                "Grant_Outcome_SteppingUp":"Youth Form & Maintain Healthy, Close Relationships; Youth Are Engaged in their Communities",
                "Website":"http:\/\/www.thorncliffe.org\/",
                "Service_Type":"Youth Form & Maintain Healthy, Close Relationships; Youth Are Engaged in their Communities",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.2974021,
                    43.7928159
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YOF",
                "Full_Name":"Youth Opportunities Fund ",
                "FY":"FY201516",
                "Org_Name":"Silver Linings Family CircleTuck Shop c\/o Community Living York South",
                "Unit_Number":null,
                "Full_Address":"170 Red Maple Road Richmond Hill ON L4B 4T8 ",
                "Latitude":43.844730,
                "Longitude":-79.425052,
                "Proj_Desc":"$100,500 over 36 month to work with a professional job coach to enhance the skills of youth with developmental disabilities in York Region in order to increase their self-confidence and their employable skills. Funds will be used for staff salaries and honorariums for youth.",
                "Funding_Amount":100500,
                "Timeline":36,
                "Targ_Comm":"Simcoe-York",
                "Targ_Pop":"RY, NY, YDIS",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years; 12 to 29 years for youth with special needs or disabilities",
                "Num_Youth_Served":"16",
                "Grant_Outcome_SteppingUp":"Youth Form & Maintain Healthy, Close Relationships; Youth Are Engaged in their Communities",
                "Website":"https:\/\/silverliningstuckshop.wordpress.com\/",
                "Service_Type":"Youth Form & Maintain Healthy, Close Relationships; Youth Are Engaged in their Communities",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.4250519,
                    43.8447297
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YOF",
                "Full_Name":"Youth Opportunities Fund ",
                "FY":"FY201516",
                "Org_Name":"SoundCheck c\/o The HopeWorks Connection",
                "Unit_Number":null,
                "Full_Address":"1844 Weston Rd Toronto ON M9N 1V9 ",
                "Latitude":43.699807,
                "Longitude":-79.515357,
                "Proj_Desc":"$137,500 over 36 months to implement a music instruction and mentorship program for 15 to 24 years old racialized youth in the Weston Road Mt. Dennis area of Toronto to build healthy relationships and develop leadership, teamwork and self-confidence. Funds will be used for staff salaries, musician mentors and resources.",
                "Funding_Amount":137500,
                "Timeline":36,
                "Targ_Comm":"Toronto",
                "Targ_Pop":"RY, NY, YDIS, YP, DY",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years; 12 to 29 years for youth with special needs or disabilities; Parents or gaurdians of young people",
                "Num_Youth_Served":"40",
                "Grant_Outcome_SteppingUp":"Youth Form & Maintain Healthy, Close Relationships",
                "Website":"http:\/\/www.westonweb.ca\/musical-opportunity-for-weston-youth\/",
                "Service_Type":"Youth Form & Maintain Healthy, Close Relationships",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.5153566,
                    43.6998069
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YOF",
                "Full_Name":"Youth Opportunities Fund ",
                "FY":"FY201516",
                "Org_Name":"Sunset Service c\/o S SKETCH Working Arts for Street-involved and Homeless Youth",
                "Unit_Number":null,
                "Full_Address":"519 Church St Toronto ON M4Y 2C9 ",
                "Latitude":43.666531,
                "Longitude":-79.380970,
                "Proj_Desc":"$180,800 over 36 months to deliver monthly and weekly activities as well as develop and maintain an online social-spiritual space for LGBTTQ youth in the Greater Toronto Area. Funds will be used for programming and outreach, to hire a Multidisciplinary Spiritual Arts Programmer, Coordinator, and a Youth Peer Facilitator, all of whom will be youth who reflect the audiences engaged at their events.",
                "Funding_Amount":108800,
                "Timeline":36,
                "Targ_Comm":"Toronto, Halton-Peel, Durham, Haliburton, Kawartha, Pine Ridge",
                "Targ_Pop":"RY, NY, LGBY",
                "Targ_Age":"15 to 19 years; 20 to 25 years",
                "Num_Youth_Served":"5948",
                "Grant_Outcome_SteppingUp":"Youth Form & Maintain Healthy, Close Relationships",
                "Website":"https:\/\/sunsetservice.wordpress.com\/",
                "Service_Type":"Youth Form & Maintain Healthy, Close Relationships",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.3809699,
                    43.6665315
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YOF",
                "Full_Name":"Youth Opportunities Fund ",
                "FY":"FY201516",
                "Org_Name":"Trust 15 c\/o YMCA of Greater Toronto",
                "Unit_Number":"2415",
                "Full_Address":"77 Howard Street Toronto ON M4X 1J9 ",
                "Latitude":43.670840,
                "Longitude":-79.372709,
                "Proj_Desc":"$300,000 over 36 months to provide leadership and mentorship opportunities for racialized and newcomer youth in the Toronto neighbourhood of Rexdale by offering workshops for their Men of Distinction and Ladies on the Rise programs. Funds will be used for staff salaries, workshops and educational excursions.",
                "Funding_Amount":300000,
                "Timeline":36,
                "Targ_Comm":"Toronto",
                "Targ_Pop":"RY, NY, YDIS, YP, DY",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years",
                "Num_Youth_Served":"400",
                "Grant_Outcome_SteppingUp":"Youth Are Engaged in their Communities",
                "Website":"http:\/\/www.trust15.com\/",
                "Service_Type":"Youth Are Engaged in their Communities",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.3727095,
                    43.6708405
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YOF",
                "Full_Name":"Youth Opportunities Fund ",
                "FY":"FY201516",
                "Org_Name":"Dixie Bloor Neighbourhood Drop-In Centre",
                "Unit_Number":"103",
                "Full_Address":"3650 Dixie Road Mississauga ON L4Y 3V9 ",
                "Latitude":43.621285,
                "Longitude":-79.603031,
                "Proj_Desc":"$785,400 over 60 months will be used by the Healthy City Stewardship Centre collaborative to make it easier for youth from marginalized backgrounds including racialized, newcomer, LGBTTQ, youth with disabilities or special needs to navigate and access employment resources in Peel. Funds will be used to hire a Youth Coordinator to oversee the project, develop and implement a strategy and deliver communications materials.",
                "Funding_Amount":785400,
                "Timeline":60,
                "Targ_Comm":"Halton-Peel",
                "Targ_Pop":"RY, NY, YDIS, DY, YP",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years; 12 to 29 years for youth with special needs or disabilities",
                "Num_Youth_Served":"200",
                "Grant_Outcome_SteppingUp":"Youth Know about & Easily Navigate Resources & Opportunities in their Communities; Youth Are Engaged in their Communities",
                "Website":"http:\/\/www.dixiebloor.ca\/",
                "Service_Type":"Youth Know about & Easily Navigate Resources & Opportunities in their Communities; Youth Are Engaged in their Communities",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.603031,
                    43.6212852
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YOF",
                "Full_Name":"Youth Opportunities Fund ",
                "FY":"FY201516",
                "Org_Name":"Peacebuilders International",
                "Unit_Number":"300",
                "Full_Address":"585 Dundas St E Toronto ON M5A 2B7 ",
                "Latitude":43.659874,
                "Longitude":-79.362252,
                "Proj_Desc":"$507,300 over 36 months to build a pre-charge diversion process to serve Toronto area youth. The collaborative will do this work with support from partners in policing services and school boards. Funds will be used for staffing, strategy design, community engagement and coordination of the initiative.",
                "Funding_Amount":507300,
                "Timeline":36,
                "Targ_Comm":"Toronto",
                "Targ_Pop":"RY, NY, LGBY, FY, YDIS, DY, YCL, YP, YILC",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years",
                "Num_Youth_Served":"100",
                "Grant_Outcome_SteppingUp":"Youth Are Engaged in their Communities",
                "Website":"http:\/\/peacebuilders.ca\/",
                "Service_Type":"Youth Are Engaged in their Communities",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.3622525,
                    43.6598736
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YOF",
                "Full_Name":"Youth Opportunities Fund ",
                "FY":"FY201516",
                "Org_Name":"Atikameksheng Organics c\/o Atikameksheng Anishinawbek",
                "Unit_Number":null,
                "Full_Address":"634 Gabode Drive Naughton ON P0M 2M0 ",
                "Latitude":46.397025,
                "Longitude":-81.174032,
                "Proj_Desc":"$210,000 over 36 months to engage young people to design and maintain a greenhouse in Atikameksheng Anishinabek community. Funds will be used for garden supplies, youth engagement, and staffing.",
                "Funding_Amount":210000,
                "Timeline":36,
                "Targ_Comm":"Algoma, Cochrane, Manitoulin, Sudbury",
                "Targ_Pop":"IY, YRR",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years; 12 to 29 years for youth with special needs or disabilities",
                "Num_Youth_Served":"150",
                "Grant_Outcome_SteppingUp":"Youth Know about & Easily Navigate Resources & Opportunities in their Communities; Youth Are Engaged in their Communities;",
                "Website":"http:\/\/www.atikamekshenganishnawbek.ca\/",
                "Service_Type":"Youth Know about & Easily Navigate Resources & Opportunities in their Communities; Youth Are Engaged in their Communities;",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -81.1740325,
                    46.3970251
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YOF",
                "Full_Name":"Youth Opportunities Fund ",
                "FY":"FY201516",
                "Org_Name":"Fort Albany First Nation Youth Council c\/o Fort Albany First Nation",
                "Unit_Number":null,
                "Full_Address":null,
                "Latitude":52.207800,
                "Longitude":-81.684500,
                "Proj_Desc":"$210,000 over 36 months to provide empowerment workshops, life skills training, camp retreats, and overall support for youth in Fort Albany First Nation. This initiative aims to increase the self-esteem and confidence of young people in the community. Funds will be used for staffing, training, and workshops.",
                "Funding_Amount":210000,
                "Timeline":36,
                "Targ_Comm":"Algoma, Cochrane, Manitoulin, Sudbury",
                "Targ_Pop":"IY, YRR",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years; 12 to 29 years for youth with special needs or disabilities",
                "Num_Youth_Served":"242",
                "Grant_Outcome_SteppingUp":"Youth Are Engaged in their Communities",
                "Website":"https:\/\/www.facebook.com\/Fort-Albany-First-Nation-Youth-Council-624719891003444\/",
                "Service_Type":"Youth Are Engaged in their Communities",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -81.6845,
                    52.2078
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YOF",
                "Full_Name":"Youth Opportunities Fund ",
                "FY":"FY201516",
                "Org_Name":"Iakwashatste Youth Fitness c\/o The Aboriginal Sport and Wellness Council of Ontario",
                "Unit_Number":"7",
                "Full_Address":"167 International Rd Akwesasne ON K6H 5R7 ",
                "Latitude":45.005112,
                "Longitude":-74.741777,
                "Proj_Desc":"$70,000 over 12 months to provide access to professional sports and fitness training to athletically inclined youth in remote and underserved First Nations community in Akwesasne. Traditional healers and teachers will train youth to fight depression and anxiety by traditional means, with a focus on the mind, body and spirit. Funds will be used for staff and program delivery.",
                "Funding_Amount":70000,
                "Timeline":12,
                "Targ_Comm":"Champlain",
                "Targ_Pop":"IY, RY, LGBY, DY, YCL, YP",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years; Parents or gaurdians of young people",
                "Num_Youth_Served":"150",
                "Grant_Outcome_SteppingUp":"Youth Know about & Easily Navigate Resources & Opportunities in their Communities; Youth Are Engaged in their Communities;",
                "Website":"https:\/\/www.facebook.com\/Iakwashatste-Youth-Fitness-1598579123786928\/",
                "Service_Type":"Youth Know about & Easily Navigate Resources & Opportunities in their Communities; Youth Are Engaged in their Communities;",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -74.7417775,
                    45.0051124
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YOF",
                "Full_Name":"Youth Opportunities Fund ",
                "FY":"FY201516",
                "Org_Name":"MoCreebec Eeyoud Youth Council c\/o MoCreebec Eeyoud",
                "Unit_Number":"Box 4",
                "Full_Address":"63 Hospital Drive Moose Factory ON P0L 1W0 ",
                "Latitude":51.249965,
                "Longitude":-80.616264,
                "Proj_Desc":"$140,000 over 24 months to formally implement a youth council in the community of MoCreebec First Nation and create opportunities for youth to be engaged in meaningful ways. Funds will be used to support the engagement of youth, elders and community leaders.",
                "Funding_Amount":140000,
                "Timeline":12,
                "Targ_Comm":"Algoma, Cochrane, Manitoulin, Sudbury",
                "Targ_Pop":"IY, NY",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years; 12 to 29 years for youth with special needs or disabilities",
                "Num_Youth_Served":"550",
                "Grant_Outcome_SteppingUp":"Youth Know about & Easily Navigate Resources & Opportunities in their Communities; Youth Are Engaged in their Communities; Youth Have Families & Caregivers to help them Thrive",
                "Website":"http:\/\/mocreebec.com\/departments\/youth\/",
                "Service_Type":"Youth Know about & Easily Navigate Resources & Opportunities in their Communities; Youth Are Engaged in their Communities; Youth Have Families & Caregivers to help them Thrive",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -80.6162642,
                    51.2499651
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YOF",
                "Full_Name":"Youth Opportunities Fund ",
                "FY":"FY201516",
                "Org_Name":"Regaining Cultural Identity c\/o Sachigo Lake First Nation",
                "Unit_Number":"Box 20",
                "Full_Address":"30 Airport Rd Sachigo Lake ON P0V 2P0 ",
                "Latitude":53.874096,
                "Longitude":-92.170359,
                "Proj_Desc":"$210,000 over 36 months to engage youth in Sachigo Lake First Nation through social supports and mentorship. Funds will be used for staffing, equipment and supplies.",
                "Funding_Amount":210000,
                "Timeline":36,
                "Targ_Comm":"Northwestern",
                "Targ_Pop":"IY, NY, LGBY, YDIS",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years; 12 to 29 years for youth with special needs or disabilities",
                "Num_Youth_Served":"300",
                "Grant_Outcome_SteppingUp":"Youth Are Engaged in their Communities",
                "Website":"http:\/\/www.otf.ca\/regaining-cultural-identity-co-sachigo-lake-healing-center",
                "Service_Type":"Youth Are Engaged in their Communities",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -92.1703589,
                    53.874096
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YOF",
                "Full_Name":"Youth Opportunities Fund ",
                "FY":"FY201516",
                "Org_Name":"Sacred Water Circle c\/o Green Communities Canada",
                "Unit_Number":null,
                "Full_Address":"416 Chambers St Peterborough ON K9H 3V1 ",
                "Latitude":44.306382,
                "Longitude":-78.320593,
                "Proj_Desc":"$70,000 over 12 months to support local water experts and Indigenous elders and youth, to deepen their understanding of traditional knowledge and current, local and national issues related to water in Haliburton, Kawartha, Pine Ridge and Peterborough. Funds will be used for staff and youth salaries, space rental, training programs, and community gatherings.",
                "Funding_Amount":70000,
                "Timeline":12,
                "Targ_Comm":"Durham, Haliburton, Kawartha & Pine Ridge",
                "Targ_Pop":"IY, YRR, DY, YCL, YP",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years; 12 to 29 years for youth with special needs or disabilities",
                "Num_Youth_Served":"60",
                "Grant_Outcome_SteppingUp":"Youth Are Engaged in their Communities",
                "Website":"https:\/\/www.sacredwater.ca\/",
                "Service_Type":"Youth Are Engaged in their Communities",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -78.3205928,
                    44.3063822
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YOF",
                "Full_Name":"Youth Opportunities Fund ",
                "FY":"FY201516",
                "Org_Name":"NGen c\/o Boys and Girls Club of Hamilton",
                "Unit_Number":null,
                "Full_Address":"24 Main Street West Hamilton ON L0R 1J0 ",
                "Latitude":43.333925,
                "Longitude":-79.893599,
                "Proj_Desc":"$400,000 over 48 months to provide mentorship opportunities for youth in Hamilton and ensure they have access to safe spaces, can connect with other youth, and become active members in their communities. Funds will be used for youth salaries, program delivery and outreach.",
                "Funding_Amount":400000,
                "Timeline":48,
                "Targ_Comm":"Hamilton",
                "Targ_Pop":"IY, NY, RY, LGBY, YDIS, DY, YCL, YP",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years",
                "Num_Youth_Served":"1600",
                "Grant_Outcome_SteppingUp":"Youth Are Engaged in their Communities",
                "Website":"http:\/\/www.kboysandgirlsclub.com\/ngen-youth-centre.html",
                "Service_Type":"Youth Are Engaged in their Communities",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.8935991,
                    43.3339248
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YOF",
                "Full_Name":"Youth Opportunities Fund ",
                "FY":"FY201516",
                "Org_Name":"Ohero:kon \"Under the Husk\" c\/o Onake Corporation",
                "Unit_Number":null,
                "Full_Address":"236 Cooks Mill Crescent Akwesasne Mohawk Territory Ottawa ON K1V 2N1 ",
                "Latitude":45.324316,
                "Longitude":-75.664534,
                "Proj_Desc":"$400,000 over 48 months to expand its rites of passage initiative for Haudenosaunee youth facing barriers in order to provide more year-round support, skill-building, and community connecting in Akwesasne, and will share the initiative with other Haudenosaunee communities across Ontario. Funds will be used for project staffing, mentoring, travel and meeting costs, and project supplies including a shared garden.",
                "Funding_Amount":400000,
                "Timeline":48,
                "Targ_Comm":"Champlain",
                "Targ_Pop":"IY, YRR",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years; 12 to 29 years for youth with special needs or disabilities; Parents or gaurdians of young people",
                "Num_Youth_Served":"500",
                "Grant_Outcome_SteppingUp":"Youth Form & Maintain Healthy, Close Relationships; Youth Are Engaged in their Communities",
                "Website":"http:\/\/www.otf.ca\/oherokon-under-husk-co-onake-corporation",
                "Service_Type":"Youth Form & Maintain Healthy, Close Relationships; Youth Are Engaged in their Communities",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -75.6645339,
                    45.324316
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YOF",
                "Full_Name":"Youth Opportunities Fund ",
                "FY":"FY201516",
                "Org_Name":"Six Nation Polytechnic",
                "Unit_Number":"Box 700",
                "Full_Address":"2160 Fourth Line Ohsweken ON N0A 1M0 ",
                "Latitude":43.061513,
                "Longitude":-80.099278,
                "Proj_Desc":"$900,000 over 48 months to systematize opportunities for Indigenous education and learning for First Nations youth by launching youth ambassador models for First Nations youth aged 13 to 24 to foster cultural resilience, cultural identity, and self-confidence. Funds will be used for staffing, curriculum development and delivery as well as ambassadors training and mobilization.",
                "Funding_Amount":900000,
                "Timeline":48,
                "Targ_Comm":"Grand River",
                "Targ_Pop":"IY, RY, YRR, DY, YCL, YP, YILC",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years; 12 to 29 years for youth with special needs or disabilities; Parents or gaurdians of young people",
                "Num_Youth_Served":"100",
                "Grant_Outcome_SteppingUp":"Youth Form & Maintain Healthy, Close Relationships; Youth Are Engaged in their Communities; Youth Know about & Easily Navigate Resources & Opportunities in their Communities",
                "Website":"http:\/\/www.snpolytechnic.com\/",
                "Service_Type":"Youth Form & Maintain Healthy, Close Relationships; Youth Are Engaged in their Communities; Youth Know about & Easily Navigate Resources & Opportunities in their Communities",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -80.099278,
                    43.0615128
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YOF",
                "Full_Name":"Youth Opportunities Fund ",
                "FY":"FY201516",
                "Org_Name":"The Students Commission of Canada",
                "Unit_Number":null,
                "Full_Address":"23 Isabella St \n Toronto ON M4Y 1M7 ",
                "Latitude":43.667672,
                "Longitude":-79.384180,
                "Proj_Desc":"$700,000 over 48 months to engage youth, supported by adult allies, to research and identify needs of youth facing barriers in the Kingston, Frontenac, Lennox and Addington communities. The collaborative wants to: decrease barriers to youth development; increase relevancy and participation of youth programs and services; and increase positive outcomes for youth. Funds will be used for salaries of staff and youth leaders, convenings and activity supplies.",
                "Funding_Amount":700000,
                "Timeline":48,
                "Targ_Comm":"Quinte, Kingston, Rideau",
                "Targ_Pop":"IY, NY, RY, LGBY, YDIS, DY, YCL, YP",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years",
                "Num_Youth_Served":"24450",
                "Grant_Outcome_SteppingUp":"Youth Know about & Easily Navigate Resources & Opportunities in their Communities; Youth Are Engaged in their Communities",
                "Website":"http:\/\/www.tgmag.ca\/aorg\/index_e.php",
                "Service_Type":"Youth Know about & Easily Navigate Resources & Opportunities in their Communities; Youth Are Engaged in their Communities",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.38418,
                    43.6676724
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YouthREX",
                "Full_Name":"Youth Resesarch and Evaluation Exchange ",
                "FY":"FY201516",
                "Org_Name":"Lakehead University",
                "Unit_Number":null,
                "Full_Address":"955 Oliver Rd, Thunder Bay, ON P7B 5E1",
                "Latitude":48.423576,
                "Longitude":-89.261620,
                "Proj_Desc":"The Youth Research & Evaluation eXchange (YouthREX), in partnership with York University, provides knowledge mobilization and capacity building services to youth-led organizations across Ontario. It also provides customized evaluation supports to grassroots organizations and initiatives.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":null,
                "Targ_Pop":"GIY, RY, NY, IY, YDIS, YILC, LGBY, FY, YRR, YP, YCL, HL, HIY, YM, NETY, DY",
                "Targ_Age":null,
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":null,
                "Website":"http:\/\/youthrex.com\/northwestern-hub\/",
                "Service_Type":"knowledge mobilization,capacity building and evaluation leadership",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -89.2616196,
                    48.4235761
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YouthREX",
                "Full_Name":"Youth Resesarch and Evaluation Exchange ",
                "FY":"FY201517",
                "Org_Name":"Carleton University",
                "Unit_Number":null,
                "Full_Address":"1125 Colonel By Dr, Ottawa, ON K1S 5B6",
                "Latitude":45.385661,
                "Longitude":-75.696531,
                "Proj_Desc":"The Youth Research & Evaluation eXchange (YouthREX), in partnership with York University, provides knowledge mobilization and capacity building services to youth-led organizations across Ontario. It also provides customized evaluation supports to grassroots organizations and initiative",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":null,
                "Targ_Pop":"GIY, RY, NY, IY, YDIS, YILC, LGBY, FY, YRR, YP, YCL, HL, HIY, YM, NETY, DY",
                "Targ_Age":null,
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":null,
                "Website":"http:\/\/youthrex.com\/eastern-hub\/",
                "Service_Type":"knowledge mobilization,capacity building and evaluation leadership",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -75.6965314,
                    45.3856607
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YouthREX",
                "Full_Name":"Youth Resesarch and Evaluation Exchange ",
                "FY":"FY201518",
                "Org_Name":"King's University College",
                "Unit_Number":null,
                "Full_Address":"266 Epworth Ave, London, ON N6A 2M3",
                "Latitude":43.012472,
                "Longitude":-81.257116,
                "Proj_Desc":"The Youth Research & Evaluation eXchange (YouthREX), in partnership with York University, provides knowledge mobilization and capacity building services to youth-led organizations across Ontario. It also provides customized evaluation supports to grassroots organizations and initiative",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":null,
                "Targ_Pop":"GIY, RY, NY, IY, YDIS, YILC, LGBY, FY, YRR, YP, YCL, HL, HIY, YM, NETY, DY",
                "Targ_Age":null,
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":null,
                "Website":"http:\/\/youthrex.com\/southwestern-hub\/",
                "Service_Type":"knowledge mobilization,capacity building and evaluation leadership",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -81.2571159,
                    43.0124722
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YouthREX",
                "Full_Name":"Youth Resesarch and Evaluation Exchange ",
                "FY":"FY201519",
                "Org_Name":"Laurentian University",
                "Unit_Number":null,
                "Full_Address":"935 Ramsey Lake Rd, Sudbury, ON P3E 2C6",
                "Latitude":46.469776,
                "Longitude":-80.997127,
                "Proj_Desc":"The Youth Research & Evaluation eXchange (YouthREX), in partnership with York University, provides knowledge mobilization and capacity building services to youth-led organizations across Ontario. It also provides customized evaluation supports to grassroots organizations and initiative",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":null,
                "Targ_Pop":"GIY, RY, NY, IY, YDIS, YILC, LGBY, FY, YRR, YP, YCL, HL, HIY, YM, NETY, DY",
                "Targ_Age":null,
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":null,
                "Website":"http:\/\/youthrex.com\/northeastern-hub\/",
                "Service_Type":"knowledge mobilization,capacity building and evaluation leadership",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -80.997127,
                    46.4697763
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YouthREX",
                "Full_Name":"Youth Resesarch and Evaluation Exchange ",
                "FY":"FY201520",
                "Org_Name":"York University",
                "Unit_Number":null,
                "Full_Address":"4700 Keele St, Toronto, ON M3J 1P3",
                "Latitude":43.774135,
                "Longitude":-79.503608,
                "Proj_Desc":"The Youth Research & Evaluation eXchange (YouthREX), in partnership with York University, provides knowledge mobilization and capacity building services to youth-led organizations across Ontario. It also provides customized evaluation supports to grassroots organizations and initiative",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":null,
                "Targ_Pop":"GIY, RY, NY, IY, YDIS, YILC, LGBY, FY, YRR, YP, YCL, HL, HIY, YM, NETY, DY",
                "Targ_Age":null,
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":null,
                "Website":"http:\/\/youthrex.com\/central-hub\/",
                "Service_Type":"knowledge mobilization,capacity building and evaluation leadership",
                "Targ_Pop_Spe":null,
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.5036081,
                    43.7741348
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YOW",
                "Full_Name":"Youth Outreach Worker",
                "FY":"FY201617",
                "Org_Name":"Barbara Black Centre for Youth Resources (The Youth Centre)",
                "Unit_Number":null,
                "Full_Address":"360 Bayly St W Ajax ON L1S 1P1 ",
                "Latitude":43.841827,
                "Longitude":-79.032314,
                "Proj_Desc":"The Youth Outreach Worker Program is a comprehensive multi-agency outreach initiative for marginalized youth in underserved neighbourhoods, and special populations in East Toronto. The Youth Outreach Worker (YOW) engages youth ages 12-21 years old and their families, helps them better navigate and connect with services and supports in their communities.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":"Ajax, Pickering, Whitby",
                "Targ_Pop":null,
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Num_Youth_Served":"202",
                "Grant_Outcome_SteppingUp":null,
                "Website":"http:\/\/theyouthcentre.ca\/",
                "Service_Type":"Service Navigation",
                "Targ_Pop_Spe":"General",
                "Hours":"MWF 8:30am-5pm; TTH 8:30am-8pm",
                "Phone_Number":"905-428-1212"
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.0323141,
                    43.8418274
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YOW",
                "Full_Name":"Youth Outreach Worker",
                "FY":"FY201617",
                "Org_Name":"African Canadian Legal Clinic",
                "Unit_Number":null,
                "Full_Address":"7755 Hurontario St Suite 310A Brampton ON L6W 4T1 ",
                "Latitude":43.661257,
                "Longitude":-79.725999,
                "Proj_Desc":"The Youth Outreach Worker Program is a comprehensive multi-agency outreach initiative for marginalized youth in underserved neighbourhoods, and special populations in East Toronto. The Youth Outreach Worker (YOW) engages youth ages 12-21 years old and their families, helps them better navigate and connect with services and supports in their communities.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":"Queen \/ Kennedy",
                "Targ_Pop":"RY",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Num_Youth_Served":"84",
                "Grant_Outcome_SteppingUp":null,
                "Website":"www.aclc.net",
                "Service_Type":"Service Navigation",
                "Targ_Pop_Spe":"African Canadian",
                "Hours":null,
                "Phone_Number":"(416) 214-4747"
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.7259989,
                    43.6612566
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YOW",
                "Full_Name":"Youth Outreach Worker",
                "FY":"FY201617",
                "Org_Name":"Fernie House",
                "Unit_Number":null,
                "Full_Address":"8500 McLaughlin Road Brampton ON L6Y 0N6 ",
                "Latitude":43.662566,
                "Longitude":-79.752277,
                "Proj_Desc":"The Youth Outreach Worker Program is a comprehensive multi-agency outreach initiative for marginalized youth in underserved neighbourhoods, and special populations in East Toronto. The Youth Outreach Worker (YOW) engages youth ages 12-21 years old and their families, helps them better navigate and connect with services and supports in their communities.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":null,
                "Targ_Pop":"YCL, YM",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Num_Youth_Served":"31",
                "Grant_Outcome_SteppingUp":null,
                "Website":"www.fernieyouth.ca",
                "Service_Type":"Service Navigation",
                "Targ_Pop_Spe":"Youth Justice",
                "Hours":null,
                "Phone_Number":"(416) 284-3711"
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.7522771,
                    43.6625656
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YOW",
                "Full_Name":"Youth Outreach Worker",
                "FY":"FY201617",
                "Org_Name":"Rexdale Community Health Centre",
                "Unit_Number":null,
                "Full_Address":"8 Taber Rd Etobicoke ON M9W 3A4 ",
                "Latitude":43.719407,
                "Longitude":-79.570533,
                "Proj_Desc":"The Youth Outreach Worker Program is a comprehensive multi-agency outreach initiative for marginalized youth in underserved neighbourhoods, and special populations in East Toronto. The Youth Outreach Worker (YOW) engages youth ages 12-21 years old and their families, helps them better navigate and connect with services and supports in their communities.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":"Weston-Mt Dennis",
                "Targ_Pop":"RY",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":null,
                "Website":"http:\/\/www.rexdalechc.com\/",
                "Service_Type":"Service Navigation",
                "Targ_Pop_Spe":"General",
                "Hours":"M-F 9-5, Sat 9-2",
                "Phone_Number":"416-744-0066"
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.5705334,
                    43.7194071
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YOW",
                "Full_Name":"Youth Outreach Worker",
                "FY":"FY201617",
                "Org_Name":"YMCA Rexdale Youth Resource Centre",
                "Unit_Number":null,
                "Full_Address":"1530 Albion Rd Etobicoke ON M9V 1B4 ",
                "Latitude":43.741685,
                "Longitude":-79.584488,
                "Proj_Desc":"The Youth Outreach Worker Program is a comprehensive multi-agency outreach initiative for marginalized youth in underserved neighbourhoods, and special populations in East Toronto. The Youth Outreach Worker (YOW) engages youth ages 12-21 years old and their families, helps them better navigate and connect with services and supports in their communities.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":null,
                "Targ_Pop":"RY, NY",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":null,
                "Website":"www.rexdaleyouth.org",
                "Service_Type":"Service Navigation",
                "Targ_Pop_Spe":"Somali",
                "Hours":"Monday 8:30am-4:30pm; Tuesday 8:30am-4:30pm; Wednesday 8:30am-4:30pm; Thursday 8:30am-4:30pm; Friday 8:30am-4:30pm; Saturday 8:30-4:00pm; Sunday 8:30-4:00pm",
                "Phone_Number":"(416) 741-8714"
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.5844877,
                    43.7416852
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YOW",
                "Full_Name":"Youth Outreach Worker",
                "FY":"FY201617",
                "Org_Name":"Wesley Urban Ministries Inc.",
                "Unit_Number":null,
                "Full_Address":"52 Catharine Street North Hamilton ON L8R 1J1 ",
                "Latitude":43.257075,
                "Longitude":-79.864468,
                "Proj_Desc":"The Youth Outreach Worker Program is a comprehensive multi-agency outreach initiative for marginalized youth in underserved neighbourhoods, and special populations in East Toronto. The Youth Outreach Worker (YOW) engages youth ages 12-21 years old and their families, helps them better navigate and connect with services and supports in their communities.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":null,
                "Targ_Pop":"NY, HL, RY",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Num_Youth_Served":"947",
                "Grant_Outcome_SteppingUp":null,
                "Website":"http:\/\/www.wesleyurbanministries.com\/",
                "Service_Type":"Service Navigation",
                "Targ_Pop_Spe":"General, Clinical",
                "Hours":"Mon-Fri 8:30am-4:30pm",
                "Phone_Number":"905 528 5629"
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.8644681,
                    43.2570752
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YOW",
                "Full_Name":"Youth Outreach Worker",
                "FY":"FY201617",
                "Org_Name":"Hamilton Regional Indian Centre",
                "Unit_Number":null,
                "Full_Address":"34 Ottawa St N Hamilton ON L8H 3Y7 ",
                "Latitude":43.243377,
                "Longitude":-79.819236,
                "Proj_Desc":"The Youth Outreach Worker Program is a comprehensive multi-agency outreach initiative for marginalized youth in underserved neighbourhoods, and special populations in East Toronto. The Youth Outreach Worker (YOW) engages youth ages 12-21 years old and their families, helps them better navigate and connect with services and supports in their communities.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":null,
                "Targ_Pop":"IY",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":null,
                "Website":"www.hric.ca",
                "Service_Type":"Service Navigation",
                "Targ_Pop_Spe":"Indigenous",
                "Hours":"Mon-Fri 9am-5pm; Jul-Aug 8:30am-4:30pm",
                "Phone_Number":"905-548-9593"
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.8192363,
                    43.243377
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YOW",
                "Full_Name":"Youth Outreach Worker",
                "FY":"FY201617",
                "Org_Name":"Living Rock Ministries",
                "Unit_Number":null,
                "Full_Address":"30 Wilson St Hamilton ON L8R 1C5 ",
                "Latitude":43.258883,
                "Longitude":-79.866790,
                "Proj_Desc":"The Youth Outreach Worker Program is a comprehensive multi-agency outreach initiative for marginalized youth in underserved neighbourhoods, and special populations in East Toronto. The Youth Outreach Worker (YOW) engages youth ages 12-21 years old and their families, helps them better navigate and connect with services and supports in their communities.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":null,
                "Targ_Pop":"YP, YM, HL",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":null,
                "Website":"www.livingrock.ca",
                "Service_Type":"Service Navigation",
                "Targ_Pop_Spe":"General",
                "Hours":"Mon-Fri 9am-4:30pm; Sat and Sun close",
                "Phone_Number":"905-528-7625"
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.8667898,
                    43.2588827
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YOW",
                "Full_Name":"Youth Outreach Worker",
                "FY":"FY201617",
                "Org_Name":"Pathways for Children and Youth",
                "Unit_Number":"100",
                "Full_Address":"31 Hyperion Court Kingston ON K7K 7G3 ",
                "Latitude":44.258733,
                "Longitude":-76.508631,
                "Proj_Desc":"The Youth Outreach Worker Program is a comprehensive multi-agency outreach initiative for marginalized youth in underserved neighbourhoods, and special populations in East Toronto. The Youth Outreach Worker (YOW) engages youth ages 12-21 years old and their families, helps them better navigate and connect with services and supports in their communities.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":null,
                "Targ_Pop":"YP",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":null,
                "Website":"http:\/\/www.pathwayschildrenyouth.org\/",
                "Service_Type":"Service Navigation",
                "Targ_Pop_Spe":"Clinical",
                "Hours":"Walk in Clinic: Tue 12nn-8pm, with the last appointment at 7pm",
                "Phone_Number":"613-546-8535"
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -76.5086308,
                    44.2587325
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YOW",
                "Full_Name":"Youth Outreach Worker",
                "FY":"FY201617",
                "Org_Name":"Youth Diversion Kingston",
                "Unit_Number":null,
                "Full_Address":"559 Bagot St Kingston ON K7K 3E1 ",
                "Latitude":44.239236,
                "Longitude":-76.484602,
                "Proj_Desc":"The Youth Outreach Worker Program is a comprehensive multi-agency outreach initiative for marginalized youth in underserved neighbourhoods, and special populations in East Toronto. The Youth Outreach Worker (YOW) engages youth ages 12-21 years old and their families, helps them better navigate and connect with services and supports in their communities.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":null,
                "Targ_Pop":"YM, NETY, YP, YCL",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":null,
                "Website":"http:\/\/www.youthdiversion.org\/",
                "Service_Type":"Service Navigation",
                "Targ_Pop_Spe":"General",
                "Hours":null,
                "Phone_Number":"613-548-4535"
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -76.4846016,
                    44.2392356
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YOW",
                "Full_Name":"Youth Outreach Worker",
                "FY":"FY201617",
                "Org_Name":"London Inter-community Health Centre",
                "Unit_Number":null,
                "Full_Address":"659 Dundas St London ON N5W 2Y8 ",
                "Latitude":42.989144,
                "Longitude":-81.229600,
                "Proj_Desc":"The Youth Outreach Worker Program is a comprehensive multi-agency outreach initiative for marginalized youth in underserved neighbourhoods, and special populations in East Toronto. The Youth Outreach Worker (YOW) engages youth ages 12-21 years old and their families, helps them better navigate and connect with services and supports in their communities.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":null,
                "Targ_Pop":"YP, YCL, HL, YM, NETY, LGBY",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Num_Youth_Served":"399",
                "Grant_Outcome_SteppingUp":null,
                "Website":"lihc.on.ca",
                "Service_Type":"Service Navigation",
                "Targ_Pop_Spe":"General",
                "Hours":"Mon 9am-5pm; TW 9am-9pm TH 10:30am-5pm",
                "Phone_Number":"519-659-6399; 519-660-0879"
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -81.2296001,
                    42.9891441
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YOW",
                "Full_Name":"Youth Outreach Worker",
                "FY":"FY201617",
                "Org_Name":"YMCA of Greater Toronto",
                "Unit_Number":null,
                "Full_Address":"151 City Centre Dr. Suite 800 Mississauga ON L5B 1M7 ",
                "Latitude":43.590686,
                "Longitude":-79.639856,
                "Proj_Desc":"The Youth Outreach Worker Program is a comprehensive multi-agency outreach initiative for marginalized youth in underserved neighbourhoods, and special populations in East Toronto. The Youth Outreach Worker (YOW) engages youth ages 12-21 years old and their families, helps them better navigate and connect with services and supports in their communities.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":"Colter, Cooksville, Main Street, Queen \/ Steeles\n",
                "Targ_Pop":"RY, NY, YP, NETY, HL, YM",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Num_Youth_Served":"142",
                "Grant_Outcome_SteppingUp":null,
                "Website":"ymcagta.org",
                "Service_Type":"Service Navigation",
                "Targ_Pop_Spe":"General",
                "Hours":"Mon-Fri 9:00am-8:00pm",
                "Phone_Number":"(416) 928-9622; 1-800-223-8024"
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.6398559,
                    43.590686
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YOW",
                "Full_Name":"Youth Outreach Worker",
                "FY":"FY201617",
                "Org_Name":"Malton Neighbourhood Services",
                "Unit_Number":null,
                "Full_Address":"3540 Morning Star Mississauga ON L4T 1Y2 ",
                "Latitude":43.723514,
                "Longitude":-79.638890,
                "Proj_Desc":"The Youth Outreach Worker Program is a comprehensive multi-agency outreach initiative for marginalized youth in underserved neighbourhoods, and special populations in East Toronto. The Youth Outreach Worker (YOW) engages youth ages 12-21 years old and their families, helps them better navigate and connect with services and supports in their communities.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":"Malton",
                "Targ_Pop":"RY",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Num_Youth_Served":"142",
                "Grant_Outcome_SteppingUp":null,
                "Website":"www.mnsinfo.org",
                "Service_Type":"Service Navigation",
                "Targ_Pop_Spe":"General, Clinical",
                "Hours":"Mon-Thur 9:00am-8:00pm, Fri 9am-4:30pm",
                "Phone_Number":"(905) 677-6270"
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.6388904,
                    43.7235142
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YOW",
                "Full_Name":"Youth Outreach Worker",
                "FY":"FY201617",
                "Org_Name":"Flemingdon Neighbourhood Services",
                "Unit_Number":null,
                "Full_Address":"10 Gateway Blvd North York ON M3C 3A1 ",
                "Latitude":43.709775,
                "Longitude":-79.332685,
                "Proj_Desc":"The Youth Outreach Worker Program is a comprehensive multi-agency outreach initiative for marginalized youth in underserved neighbourhoods, and special populations in East Toronto. The Youth Outreach Worker (YOW) engages youth ages 12-21 years old and their families, helps them better navigate and connect with services and supports in their communities.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":null,
                "Targ_Pop":"NY",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":null,
                "Website":"http:\/\/www.thorncliffe.org",
                "Service_Type":"Service Navigation",
                "Targ_Pop_Spe":"Roma",
                "Hours":"Monday 9AM5PM;Tuesday 9AM5PM;Wednesday 9AM5PM;Thursday 9AM5PM;Friday 9AM5PM;Saturday Closed; Sunday Closed",
                "Phone_Number":"416-467-0126 "
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.3326853,
                    43.7097748
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YOW",
                "Full_Name":"Youth Outreach Worker",
                "FY":"FY201617",
                "Org_Name":"Jamaican Canadian Association",
                "Unit_Number":null,
                "Full_Address":"995 Arrow Rd North York ON M9M 2Z5 ",
                "Latitude":43.749726,
                "Longitude":-79.532330,
                "Proj_Desc":"The Youth Outreach Worker Program is a comprehensive multi-agency outreach initiative for marginalized youth in underserved neighbourhoods, and special populations in East Toronto. The Youth Outreach Worker (YOW) engages youth ages 12-21 years old and their families, helps them better navigate and connect with services and supports in their communities.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":"Flemingdon Park, Victoria Village, Jane and Finch, Lawrence Heights, Westminister Branson\n",
                "Targ_Pop":"RY",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":null,
                "Website":"http:\/\/www.jcaontario.org\/",
                "Service_Type":"Service Navigation",
                "Targ_Pop_Spe":"General",
                "Hours":"Monday 8:30AM-6PM;Tuesday 8:30AM-6PM; Monday 8:30AM-6PM; Monday 8:30AM-6PM; M-Sat, closed Sun",
                "Phone_Number":"(416) 746-5772"
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.5323302,
                    43.7497256
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YOW",
                "Full_Name":"Youth Outreach Worker",
                "FY":"FY201617",
                "Org_Name":"Jane-Finch Community & Family Centre",
                "Unit_Number":null,
                "Full_Address":"4400 Jane St North York ON M3N 2K4 ",
                "Latitude":43.765211,
                "Longitude":-79.520121,
                "Proj_Desc":"The Youth Outreach Worker Program is a comprehensive multi-agency outreach initiative for marginalized youth in underserved neighbourhoods, and special populations in East Toronto. The Youth Outreach Worker (YOW) engages youth ages 12-21 years old and their families, helps them better navigate and connect with services and supports in their communities.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":"Jane Avenue \/ Finch Avenue",
                "Targ_Pop":"RY, LGBY, YM",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":null,
                "Website":"http:\/\/www.janefinchcentre.org\/content\/youth-and-focus",
                "Service_Type":"Service Navigation",
                "Targ_Pop_Spe":"General",
                "Hours":null,
                "Phone_Number":"(416) 663-2733 ext. 290"
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.5201212,
                    43.7652107
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YOW",
                "Full_Name":"Youth Outreach Worker",
                "FY":"FY201617",
                "Org_Name":"Midaynta",
                "Unit_Number":null,
                "Full_Address":"203 Old Yonge St North York ON M2P 1R3 ",
                "Latitude":43.748607,
                "Longitude":-79.402805,
                "Proj_Desc":"The Youth Outreach Worker Program is a comprehensive multi-agency outreach initiative for marginalized youth in underserved neighbourhoods, and special populations in East Toronto. The Youth Outreach Worker (YOW) engages youth ages 12-21 years old and their families, helps them better navigate and connect with services and supports in their communities.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":"Lawrence Heights",
                "Targ_Pop":"RY, NY",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":null,
                "Website":"http:\/\/midaynta.com\/",
                "Service_Type":"Service Navigation",
                "Targ_Pop_Spe":"Somali",
                "Hours":"Sat Sun closed, Wed 9:00-8, M\/T\/T\/F 9:00-4:15",
                "Phone_Number":"16 544-1992"
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.4028054,
                    43.7486075
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YOW",
                "Full_Name":"Youth Outreach Worker",
                "FY":"FY201617",
                "Org_Name":"Promoting Economic Action and Community Health (PEACH)",
                "Unit_Number":null,
                "Full_Address":"127 Eddystone Ave North York ON M3N 1H6 ",
                "Latitude":43.748337,
                "Longitude":-79.519250,
                "Proj_Desc":"The Youth Outreach Worker Program is a comprehensive multi-agency outreach initiative for marginalized youth in underserved neighbourhoods, and special populations in East Toronto. The Youth Outreach Worker (YOW) engages youth ages 12-21 years old and their families, helps them better navigate and connect with services and supports in their communities.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":"Jane Avenue \/ Finch Avenue",
                "Targ_Pop":"YM",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":null,
                "Website":"http:\/\/www.peachyouth.org\/",
                "Service_Type":"Service Navigation",
                "Targ_Pop_Spe":"General",
                "Hours":"Sat Sun closed, 9-4 M-F",
                "Phone_Number":"(416) 740-9593"
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.5192497,
                    43.7483365
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YOW",
                "Full_Name":"Youth Outreach Worker",
                "FY":"FY201617",
                "Org_Name":"Jane St. Hub \/ Yorktown",
                "Unit_Number":null,
                "Full_Address":"1541 Jane S North York ON M9N 2R3 ",
                "Latitude":43.698656,
                "Longitude":-79.502008,
                "Proj_Desc":"The Youth Outreach Worker Program is a comprehensive multi-agency outreach initiative for marginalized youth in underserved neighbourhoods, and special populations in East Toronto. The Youth Outreach Worker (YOW) engages youth ages 12-21 years old and their families, helps them better navigate and connect with services and supports in their communities.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":null,
                "Targ_Pop":"RY, NY",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":null,
                "Website":"http:\/\/unisonhcs.org\/community-services\/jane-street-hub\/",
                "Service_Type":"Service Navigation",
                "Targ_Pop_Spe":"General",
                "Hours":null,
                "Phone_Number":"(416) 645-7575"
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.5020083,
                    43.6986556
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YOW",
                "Full_Name":"Youth Outreach Worker",
                "FY":"FY201617",
                "Org_Name":"Boys & Girls Club of Durham Region",
                "Unit_Number":null,
                "Full_Address":"433 Eulalie Ave, Oshawa ON L1H 2C6 ",
                "Latitude":43.896196,
                "Longitude":-78.845706,
                "Proj_Desc":"The Youth Outreach Worker Program is a comprehensive multi-agency outreach initiative for marginalized youth in underserved neighbourhoods, and special populations in East Toronto. The Youth Outreach Worker (YOW) engages youth ages 12-21 years old and their families, helps them better navigate and connect with services and supports in their communities.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":"Clarington, Oshawa Durham, Whitby",
                "Targ_Pop":"YCL, YM",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Num_Youth_Served":"367",
                "Grant_Outcome_SteppingUp":null,
                "Website":"www.bgcdurham.com",
                "Service_Type":"Service Navigation",
                "Targ_Pop_Spe":"General",
                "Hours":"Monday 8:30am-4:30pm; Tuesday 8:30am-4:30pm; Wednesday 8:30am-4:30pm; Thursday 8:30am-4:30pm; Friday 8:30am-4:30pm; Saturday 8:30-4:00pm; Sunday closed",
                "Phone_Number":"(905) 728-5121"
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -78.8457062,
                    43.8961958
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YOW",
                "Full_Name":"Youth Outreach Worker",
                "FY":"FY201617",
                "Org_Name":"Boys & Girls Club of Durham Region",
                "Unit_Number":null,
                "Full_Address":"150 Beatrice St E Oshawa ON L1G 7T6 ",
                "Latitude":43.929813,
                "Longitude":-78.869785,
                "Proj_Desc":"The Youth Outreach Worker Program is a comprehensive multi-agency outreach initiative for marginalized youth in underserved neighbourhoods, and special populations in East Toronto. The Youth Outreach Worker (YOW) engages youth ages 12-21 years old and their families, helps them better navigate and connect with services and supports in their communities.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":"Clarington, Oshawa Durham, Whitby",
                "Targ_Pop":"N\/A",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Num_Youth_Served":"N\/A",
                "Grant_Outcome_SteppingUp":null,
                "Website":"www.bgcdurham.com",
                "Service_Type":"Service Navigation",
                "Targ_Pop_Spe":"General",
                "Hours":"Monday 8:30am-4:30pm; Tuesday 8:30am-4:30pm; Wednesday 8:30am-4:30pm; Thursday 8:30am-4:30pm; Friday 8:30am-4:30pm; Saturday 8:30-4:00pm; Sunday closed",
                "Phone_Number":"(905) 436-3311"
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -78.8697846,
                    43.9298126
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YOW",
                "Full_Name":"Youth Outreach Worker",
                "FY":"FY201617",
                "Org_Name":"Durham Family Court Clinic",
                "Unit_Number":null,
                "Full_Address":"44 Richmond St W Oshawa ON L1G 1C7 ",
                "Latitude":43.899554,
                "Longitude":-78.865356,
                "Proj_Desc":"The Youth Outreach Worker Program is a comprehensive multi-agency outreach initiative for marginalized youth in underserved neighbourhoods, and special populations in East Toronto. The Youth Outreach Worker (YOW) engages youth ages 12-21 years old and their families, helps them better navigate and connect with services and supports in their communities.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":"Pickering, Ajax, Whitby, Oshawa, Clarington",
                "Targ_Pop":"YCL, YP, YM",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":null,
                "Website":"http:\/\/www.dfcc.org\/",
                "Service_Type":"Service Navigation",
                "Targ_Pop_Spe":"Clinical ",
                "Hours":"Mon-Fri 8:30-4:30pm",
                "Phone_Number":"905-436-6754"
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -78.865356,
                    43.899554
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YOW",
                "Full_Name":"Youth Outreach Worker",
                "FY":"FY201617",
                "Org_Name":"Boys & Girls Club of Ottawa",
                "Unit_Number":null,
                "Full_Address":"430 McArthur Ave Ottawa ON K1K 1G5 ",
                "Latitude":45.432283,
                "Longitude":-75.646551,
                "Proj_Desc":"The Youth Outreach Worker Program is a comprehensive multi-agency outreach initiative for marginalized youth in underserved neighbourhoods, and special populations in East Toronto. The Youth Outreach Worker (YOW) engages youth ages 12-21 years old and their families, helps them better navigate and connect with services and supports in their communities.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":null,
                "Targ_Pop":"RY, NY",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Num_Youth_Served":"565",
                "Grant_Outcome_SteppingUp":null,
                "Website":"www.bgcottawa.org",
                "Service_Type":"Service Navigation",
                "Targ_Pop_Spe":"General, Somali",
                "Hours":"Mon-Fri 3pm-9pm",
                "Phone_Number":"(613) 7468517"
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -75.6465509,
                    45.4322835
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YOW",
                "Full_Name":"Youth Outreach Worker",
                "FY":"FY201617",
                "Org_Name":"Peterborough Youth Services",
                "Unit_Number":null,
                "Full_Address":"459 Reid St Peterborough ON K9H 4G7 ",
                "Latitude":44.307601,
                "Longitude":-78.328359,
                "Proj_Desc":"The Youth Outreach Worker Program is a comprehensive multi-agency outreach initiative for marginalized youth in underserved neighbourhoods, and special populations in East Toronto. The Youth Outreach Worker (YOW) engages youth ages 12-21 years old and their families, helps them better navigate and connect with services and supports in their communities.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":null,
                "Targ_Pop":"YCL, YM",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":null,
                "Website":"http:\/\/www.peterboroughyouthservices.ca\/index.htm",
                "Service_Type":"Service Navigation",
                "Targ_Pop_Spe":"Clinical",
                "Hours":null,
                "Phone_Number":"705-743-1681"
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -78.3283593,
                    44.307601
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YOW",
                "Full_Name":"Youth Outreach Worker",
                "FY":"FY201617",
                "Org_Name":"YES Shelter for Youth and Families",
                "Unit_Number":null,
                "Full_Address":"196 Brock St Peterborough ON K9H 2P4 ",
                "Latitude":44.307182,
                "Longitude":-78.321938,
                "Proj_Desc":"The Youth Outreach Worker Program is a comprehensive multi-agency outreach initiative for marginalized youth in underserved neighbourhoods, and special populations in East Toronto. The Youth Outreach Worker (YOW) engages youth ages 12-21 years old and their families, helps them better navigate and connect with services and supports in their communities.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":null,
                "Targ_Pop":"HL, NETY",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":null,
                "Website":"http:\/\/yesshelter.ca\/",
                "Service_Type":"Service Navigation",
                "Targ_Pop_Spe":"General",
                "Hours":"Open 24 hrs",
                "Phone_Number":"705-748-3851"
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -78.3219375,
                    44.3071823
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YOW",
                "Full_Name":"Youth Outreach Worker",
                "FY":"FY201617",
                "Org_Name":"360 Kids Support Services (Formerly Pathways)",
                "Unit_Number":"C",
                "Full_Address":"10415 Yonge St Richmond Hill ON L4C 0Z3 ",
                "Latitude":43.881536,
                "Longitude":-79.438715,
                "Proj_Desc":"The Youth Outreach Worker Program is a comprehensive multi-agency outreach initiative for marginalized youth in underserved neighbourhoods, and special populations in East Toronto. The Youth Outreach Worker (YOW) engages youth ages 12-21 years old and their families, helps them better navigate and connect with services and supports in their communities.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":"Aurora, Newmarket, Markham-Stouffville, Richmond Hill, Vaughn",
                "Targ_Pop":"YCL",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Num_Youth_Served":"401",
                "Grant_Outcome_SteppingUp":null,
                "Website":"360kids.ca",
                "Service_Type":"Service Navigation",
                "Targ_Pop_Spe":"General, Clinical",
                "Hours":"Mon-Fri 9am-10pm; Sat-Sun 9am-8pm",
                "Phone_Number":"905-884-3070"
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.4387149,
                    43.8815363
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YOW",
                "Full_Name":"Youth Outreach Worker",
                "FY":"FY201617",
                "Org_Name":"East Metro Youth Services",
                "Unit_Number":null,
                "Full_Address":"1200 Markham Rd Scarborough ON M1H 3C3 ",
                "Latitude":43.776473,
                "Longitude":-79.231860,
                "Proj_Desc":"The Youth Outreach Worker Program is a comprehensive multi-agency outreach initiative for marginalized youth in underserved neighbourhoods, and special populations in East Toronto. The Youth Outreach Worker (YOW) engages youth ages 12-21 years old and their families, helps them better navigate and connect with services and supports in their communities.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":"Toronto East",
                "Targ_Pop":"RY, NY",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":null,
                "Website":"http:\/\/emys.on.ca",
                "Service_Type":"Service Navigation",
                "Targ_Pop_Spe":"Social Media, Afghan, General, Clinical",
                "Hours":"Monday 9AM5PM;Tuesday 9AM5PM;Wednesday 2PM8PM;Thursday 2PM8PM;Friday 9AM5PM;Saturday 2PM8PM; Sunday Closed",
                "Phone_Number":" (416) 438-3697"
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.2318602,
                    43.7764728
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YOW",
                "Full_Name":"Youth Outreach Worker",
                "FY":"FY201617",
                "Org_Name":"Agincourt Community Services",
                "Unit_Number":"100",
                "Full_Address":"4155 Sheppard Ave E Scarborough ON M1S 1T4 ",
                "Latitude":43.784559,
                "Longitude":-79.280908,
                "Proj_Desc":"The Youth Outreach Worker Program is a comprehensive multi-agency outreach initiative for marginalized youth in underserved neighbourhoods, and special populations in East Toronto. The Youth Outreach Worker (YOW) engages youth ages 12-21 years old and their families, helps them better navigate and connect with services and supports in their communities.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":"Steeles Avenue \/ L`Amoureaux",
                "Targ_Pop":"RY, NY",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":null,
                "Website":"http:\/\/www.agincourtcommunityservices.com",
                "Service_Type":"Service Navigation",
                "Targ_Pop_Spe":"General",
                "Hours":"Monday 10AM4PM;Tuesday 10AM4PM;Wednesday 10AM4PM;Thursday 10AM4PM;Friday 10AM4PM;Saturday Closed; Sunday Closed",
                "Phone_Number":"(416) 321-6912"
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.2809082,
                    43.7845592
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YOW",
                "Full_Name":"Youth Outreach Worker",
                "FY":"FY201617",
                "Org_Name":"Boys & Girls Club of East Scarborough",
                "Unit_Number":null,
                "Full_Address":"100 Galloway Rd Scarborough ON M1E 1W7 ",
                "Latitude":43.757457,
                "Longitude":-79.193363,
                "Proj_Desc":"The Youth Outreach Worker Program is a comprehensive multi-agency outreach initiative for marginalized youth in underserved neighbourhoods, and special populations in East Toronto. The Youth Outreach Worker (YOW) engages youth ages 12-21 years old and their families, helps them better navigate and connect with services and supports in their communities.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":"Danzig Street, Galloway Road \/ Kingston Road\n",
                "Targ_Pop":"RY, NY",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":null,
                "Website":"http:\/\/www.esbgc.org",
                "Service_Type":"Service Navigation",
                "Targ_Pop_Spe":"General",
                "Hours":null,
                "Phone_Number":"(416) 281-0262"
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.193363,
                    43.7574569
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YOW",
                "Full_Name":"Youth Outreach Worker",
                "FY":"FY201617",
                "Org_Name":"Hong Fook Mental Health Association",
                "Unit_Number":null,
                "Full_Address":"3320 Midland Ave Scarborough ON M1V 5E6 ",
                "Latitude":43.807025,
                "Longitude":-79.288798,
                "Proj_Desc":"The Youth Outreach Worker Program is a comprehensive multi-agency outreach initiative for marginalized youth in underserved neighbourhoods, and special populations in East Toronto. The Youth Outreach Worker (YOW) engages youth ages 12-21 years old and their families, helps them better navigate and connect with services and supports in their communities.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":"North York, Downtown Toronto, Scarborough",
                "Targ_Pop":"RY, NY",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":null,
                "Website":"http:\/\/www.hongfook.ca\/index.php\/contact-us",
                "Service_Type":"Service Navigation",
                "Targ_Pop_Spe":"Chinese",
                "Hours":null,
                "Phone_Number":"(416) 493-4242"
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.2887975,
                    43.8070253
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YOW",
                "Full_Name":"Youth Outreach Worker",
                "FY":"FY201617",
                "Org_Name":"Malvern Family Resource Centre",
                "Unit_Number":null,
                "Full_Address":"90 Littles Rd Scarborough ON M1B 5E2 ",
                "Latitude":43.818325,
                "Longitude":-79.205331,
                "Proj_Desc":"The Youth Outreach Worker Program is a comprehensive multi-agency outreach initiative for marginalized youth in underserved neighbourhoods, and special populations in East Toronto. The Youth Outreach Worker (YOW) engages youth ages 12-21 years old and their families, helps them better navigate and connect with services and supports in their communities.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":"Malvern",
                "Targ_Pop":"RY, NY",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":null,
                "Website":"http:\/\/mfrc.org\/contact-us",
                "Service_Type":"Service Navigation",
                "Targ_Pop_Spe":"General",
                "Hours":"Monday 8AM5PM;Tuesday 8AM5PM;Wednesday 8AM5PM;Thursday 8AM5PM;Friday 8AM5PM;Saturday Closed; Sunday Closed",
                "Phone_Number":"(416) 284-4184"
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.2053314,
                    43.818325
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YOW",
                "Full_Name":"Youth Outreach Worker",
                "FY":"FY201617",
                "Org_Name":"Scarborough Centre for Healthy Communities",
                "Unit_Number":null,
                "Full_Address":"100 Lawrence Ave E Scarborough ON M1E 2S1 ",
                "Latitude":43.767587,
                "Longitude":-79.190330,
                "Proj_Desc":"The Youth Outreach Worker Program is a comprehensive multi-agency outreach initiative for marginalized youth in underserved neighbourhoods, and special populations in East Toronto. The Youth Outreach Worker (YOW) engages youth ages 12-21 years old and their families, helps them better navigate and connect with services and supports in their communities.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":"Scarborough",
                "Targ_Pop":"NY, RY",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":null,
                "Website":"https:\/\/www.schcontario.ca",
                "Service_Type":"Service Navigation",
                "Targ_Pop_Spe":"Tamil",
                "Hours":null,
                "Phone_Number":"(416) 847-4150"
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.1903301,
                    43.7675871
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YOW",
                "Full_Name":"Youth Outreach Worker",
                "FY":"FY201617",
                "Org_Name":"Taibu Community Health Centre",
                "Unit_Number":"1",
                "Full_Address":"27 Tapscott Rd Scarborough ON M1B 4Y7 ",
                "Latitude":43.806064,
                "Longitude":-79.220675,
                "Proj_Desc":"The Youth Outreach Worker Program is a comprehensive multi-agency outreach initiative for marginalized youth in underserved neighbourhoods, and special populations in East Toronto. The Youth Outreach Worker (YOW) engages youth ages 12-21 years old and their families, helps them better navigate and connect with services and supports in their communities.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":"Malvern",
                "Targ_Pop":"RY",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":null,
                "Website":"http:\/\/taibuchc.ca\/?lang=en",
                "Service_Type":"Service Navigation",
                "Targ_Pop_Spe":"African Canadian",
                "Hours":"Monday 9AM5PM;Tuesday 9AM8PM;Wednesday 9AM5PM;Thursday 9AM8PM;Friday 9AM5PM;Saturday Closed; Sunday Closed",
                "Phone_Number":"(416) 644-3536"
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.2206749,
                    43.8060645
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YOW",
                "Full_Name":"Youth Outreach Worker",
                "FY":"FY201617",
                "Org_Name":"Youthlink",
                "Unit_Number":null,
                "Full_Address":"747 Warden Av Scarborough ON M1L 4A8 ",
                "Latitude":43.717716,
                "Longitude":-79.283212,
                "Proj_Desc":"The Youth Outreach Worker Program is a comprehensive multi-agency outreach initiative for marginalized youth in underserved neighbourhoods, and special populations in East Toronto. The Youth Outreach Worker (YOW) engages youth ages 12-21 years old and their families, helps them better navigate and connect with services and supports in their communities.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":"Eglinton Avenue East, Kennedy Park, Scarborough Village",
                "Targ_Pop":"YM, RY, YP, HL, LGBY",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":null,
                "Website":"http:\/\/youthlink.ca",
                "Service_Type":"Service Navigation",
                "Targ_Pop_Spe":"General",
                "Hours":null,
                "Phone_Number":" (416) 967-1773"
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.2832121,
                    43.717716
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YOW",
                "Full_Name":"Youth Outreach Worker",
                "FY":"FY201617",
                "Org_Name":"Griffin Centre",
                "Unit_Number":null,
                "Full_Address":"1126 Finch Ave W Scarborough ON M3J 3J6 ",
                "Latitude":43.793973,
                "Longitude":-79.337604,
                "Proj_Desc":"The Youth Outreach Worker Program is a comprehensive multi-agency outreach initiative for marginalized youth in underserved neighbourhoods, and special populations in East Toronto. The Youth Outreach Worker (YOW) engages youth ages 12-21 years old and their families, helps them better navigate and connect with services and supports in their communities.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":"Westminister Branson",
                "Targ_Pop":"LGBY, YM",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":null,
                "Website":"http:\/\/www.griffin-centre.org\/",
                "Service_Type":"Service Navigation",
                "Targ_Pop_Spe":"LGBTQ, Concurrent disorder",
                "Hours":"M-T 8:30-8, F 8:30-5",
                "Phone_Number":"(416) 222-1153"
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.3376044,
                    43.7939732
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YOW",
                "Full_Name":"Youth Outreach Worker",
                "FY":"FY201617",
                "Org_Name":"Action for Neighbourhood Change",
                "Unit_Number":null,
                "Full_Address":"3079 Danforth Avenue Scarborough ON M1L 1A9 ",
                "Latitude":43.691176,
                "Longitude":-79.287300,
                "Proj_Desc":"The Youth Outreach Worker Program is a comprehensive multi-agency outreach initiative for marginalized youth in underserved neighbourhoods, and special populations in East Toronto. The Youth Outreach Worker (YOW) engages youth ages 12-21 years old and their families, helps them better navigate and connect with services and supports in their communities.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":null,
                "Targ_Pop":"RY, NY, HL, NETY, YP",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":null,
                "Website":null,
                "Service_Type":"Service Navigation",
                "Targ_Pop_Spe":"General",
                "Hours":null,
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.2873004,
                    43.6911758
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YOW",
                "Full_Name":"Youth Outreach Worker",
                "FY":"FY201617",
                "Org_Name":"Sudbury Action Centre for Youth",
                "Unit_Number":null,
                "Full_Address":"95 Pine St Sudbury ON P3C 1W9 ",
                "Latitude":46.493777,
                "Longitude":-80.999788,
                "Proj_Desc":"The Youth Outreach Worker Program is a comprehensive multi-agency outreach initiative for marginalized youth in underserved neighbourhoods, and special populations in East Toronto. The Youth Outreach Worker (YOW) engages youth ages 12-21 years old and their families, helps them better navigate and connect with services and supports in their communities.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":null,
                "Targ_Pop":"YM, NETY, HL, LGBY",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":null,
                "Website":"http:\/\/www.canpages.ca\/website\/business\/36320?website=http%3A%2F%2Fwww.sacy.ca",
                "Service_Type":"Service Navigation",
                "Targ_Pop_Spe":"General, Clinical",
                "Hours":null,
                "Phone_Number":"705-673-4396"
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -80.999788,
                    46.4937765
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YOW",
                "Full_Name":"Youth Outreach Worker",
                "FY":"FY201617",
                "Org_Name":"The Salvation Army Youth Shelter",
                "Unit_Number":null,
                "Full_Address":"20898 Dalton Rd Sutton ON L0E 1R0 ",
                "Latitude":44.311385,
                "Longitude":-79.365877,
                "Proj_Desc":"The Youth Outreach Worker Program is a comprehensive multi-agency outreach initiative for marginalized youth in underserved neighbourhoods, and special populations in East Toronto. The Youth Outreach Worker (YOW) engages youth ages 12-21 years old and their families, helps them better navigate and connect with services and supports in their communities.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":"Georgina",
                "Targ_Pop":"HL",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Num_Youth_Served":"175",
                "Grant_Outcome_SteppingUp":null,
                "Website":"http:\/\/www.suttonyouthshelter.ca\/",
                "Service_Type":"Service Navigation",
                "Targ_Pop_Spe":"General",
                "Hours":"Mon-Sun 24 hrs",
                "Phone_Number":"905-722-9076"
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.365877,
                    44.3113848
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YOW",
                "Full_Name":"Youth Outreach Worker",
                "FY":"FY201617",
                "Org_Name":"Dilico Anishinabek Family Care",
                "Unit_Number":null,
                "Full_Address":"200 Anemki Pl Thunder Bay ON P7J 1H9 ",
                "Latitude":48.353876,
                "Longitude":-89.262433,
                "Proj_Desc":"The Youth Outreach Worker Program is a comprehensive multi-agency outreach initiative for marginalized youth in underserved neighbourhoods, and special populations in East Toronto. The Youth Outreach Worker (YOW) engages youth ages 12-21 years old and their families, helps them better navigate and connect with services and supports in their communities.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":null,
                "Targ_Pop":"IY",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Num_Youth_Served":"180",
                "Grant_Outcome_SteppingUp":null,
                "Website":"www.dilico.com",
                "Service_Type":"Service Navigation",
                "Targ_Pop_Spe":"General, Indigenous",
                "Hours":null,
                "Phone_Number":"(807) 623-8511; 1-855-623-8511"
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -89.2624327,
                    48.3538764
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YOW",
                "Full_Name":"Youth Outreach Worker",
                "FY":"FY201617",
                "Org_Name":"Dilico \/ Franklin Dennis Cromarty High School",
                "Unit_Number":null,
                "Full_Address":"315 North Edward Street Thunder Bay ON P7C 4P3 ",
                "Latitude":48.389260,
                "Longitude":-89.279138,
                "Proj_Desc":"The Youth Outreach Worker Program is a comprehensive multi-agency outreach initiative for marginalized youth in underserved neighbourhoods, and special populations in East Toronto. The Youth Outreach Worker (YOW) engages youth ages 12-21 years old and their families, helps them better navigate and connect with services and supports in their communities.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":null,
                "Targ_Pop":"IY",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Num_Youth_Served":"147",
                "Grant_Outcome_SteppingUp":null,
                "Website":"www.nnec.on.ca",
                "Service_Type":"Service Navigation",
                "Targ_Pop_Spe":"General, Indigenous",
                "Hours":"Mon-Fri 8:30am-4:30pm",
                "Phone_Number":"(807) 623-8914"
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -89.279138,
                    48.38926
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YOW",
                "Full_Name":"Youth Outreach Worker",
                "FY":"FY201617",
                "Org_Name":"Thunder Bay Counselling Centre",
                "Unit_Number":null,
                "Full_Address":"544 Winnipeg Ave Thunder Bay ON P7B 3S7 ",
                "Latitude":48.417925,
                "Longitude":-89.240836,
                "Proj_Desc":"The Youth Outreach Worker Program is a comprehensive multi-agency outreach initiative for marginalized youth in underserved neighbourhoods, and special populations in East Toronto. The Youth Outreach Worker (YOW) engages youth ages 12-21 years old and their families, helps them better navigate and connect with services and supports in their communities.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":null,
                "Targ_Pop":"YM, HL, NETY",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":null,
                "Website":"www.tbaycounselling.com",
                "Service_Type":"Service Navigation",
                "Targ_Pop_Spe":"Clinical ",
                "Hours":"Mon, Thur, Fri: 8:30am-4:30pm,  Tue, Wed: 8:30am-8:00pm",
                "Phone_Number":"(807) 684-1880"
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -89.2408359,
                    48.4179246
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YOW",
                "Full_Name":"Youth Outreach Worker",
                "FY":"FY201617",
                "Org_Name":"Anishnawbe Health Toronto",
                "Unit_Number":null,
                "Full_Address":"179 Gerrard St E Toronto ON M5A 2E5 ",
                "Latitude":43.660725,
                "Longitude":-79.373183,
                "Proj_Desc":"The Youth Outreach Worker Program is a comprehensive multi-agency outreach initiative for marginalized youth in underserved neighbourhoods, and special populations in East Toronto. The Youth Outreach Worker (YOW) engages youth ages 12-21 years old and their families, helps them better navigate and connect with services and supports in their communities.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":"Bathurst Avenue \/ St Clair Avenue, Gerrard Street \/Church Street, Moss Park",
                "Targ_Pop":"IY",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":null,
                "Website":"http:\/\/www.aht.ca\/about",
                "Service_Type":"Service Navigation",
                "Targ_Pop_Spe":"Indigenous",
                "Hours":"Monday 9AM5PM;Tuesday 9AM5PM;Wednesday 9AM5PM;Thursday 9AM5PM;Friday 9AM5PM;Saturday Closed; Sunday Closed",
                "Phone_Number":"416-360-0486 "
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.3731829,
                    43.660725
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YOW",
                "Full_Name":"Youth Outreach Worker",
                "FY":"FY201617",
                "Org_Name":"Anishnawbe Health Toronto",
                "Unit_Number":null,
                "Full_Address":"225 Queen E Toronto ON M5A 1S4 ",
                "Latitude":43.654337,
                "Longitude":-79.369830,
                "Proj_Desc":"The Youth Outreach Worker Program is a comprehensive multi-agency outreach initiative for marginalized youth in underserved neighbourhoods, and special populations in East Toronto. The Youth Outreach Worker (YOW) engages youth ages 12-21 years old and their families, helps them better navigate and connect with services and supports in their communities.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":null,
                "Targ_Pop":"N\/A",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":null,
                "Website":"http:\/\/www.aht.ca\/contact-aht\/queen-street-east",
                "Service_Type":"Service Navigation",
                "Targ_Pop_Spe":"Indigenous",
                "Hours":"Monday 9AM8PM;Tuesday 9AM5PM;Wednesday 9AM8PM;Thursday 9AM5PM;Friday 9AM5PM;Saturday Closed; Sunday Closed",
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.3698301,
                    43.6543371
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YOW",
                "Full_Name":"Youth Outreach Worker",
                "FY":"FY201617",
                "Org_Name":"Anishnawbe Health Toronto",
                "Unit_Number":null,
                "Full_Address":"22 Vaughan Rd Toronto ON M6G 2N1 ",
                "Latitude":43.681745,
                "Longitude":-79.418324,
                "Proj_Desc":"The Youth Outreach Worker Program is a comprehensive multi-agency outreach initiative for marginalized youth in underserved neighbourhoods, and special populations in East Toronto. The Youth Outreach Worker (YOW) engages youth ages 12-21 years old and their families, helps them better navigate and connect with services and supports in their communities.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":null,
                "Targ_Pop":"N\/A",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":null,
                "Website":"http:\/\/www.aht.ca\/contact-aht\/vaughan-road",
                "Service_Type":"Service Navigation",
                "Targ_Pop_Spe":"Indigenous",
                "Hours":"Monday 9AM5PM;Tuesday 9AM5PM;Wednesday 9AM5PM;Thursday 9AM5PM;Friday 9AM5PM;Saturday Closed; Sunday Closed",
                "Phone_Number":"416-657-0379"
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.4183242,
                    43.6817454
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YOW",
                "Full_Name":"Youth Outreach Worker",
                "FY":"FY201617",
                "Org_Name":"Delisle Youth Services",
                "Unit_Number":"255",
                "Full_Address":"40 Orchard View Blvd Toronto ON M4R 1B9 ",
                "Latitude":43.708178,
                "Longitude":-79.399706,
                "Proj_Desc":"The Youth Outreach Worker Program is a comprehensive multi-agency outreach initiative for marginalized youth in underserved neighbourhoods, and special populations in East Toronto. The Youth Outreach Worker (YOW) engages youth ages 12-21 years old and their families, helps them better navigate and connect with services and supports in their communities.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":null,
                "Targ_Pop":"LGBY",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":null,
                "Website":"http:\/\/www.delisleyouth.org",
                "Service_Type":"Service Navigation",
                "Targ_Pop_Spe":"LGBTQ",
                "Hours":null,
                "Phone_Number":"(416) 482-0081 "
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.3997058,
                    43.7081781
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YOW",
                "Full_Name":"Youth Outreach Worker",
                "FY":"FY201617",
                "Org_Name":"Native Child and Family Services Toronto",
                "Unit_Number":null,
                "Full_Address":"456 Yonge St Toronto ON M4Y 1W9 ",
                "Latitude":43.661880,
                "Longitude":-79.383616,
                "Proj_Desc":"The Youth Outreach Worker Program is a comprehensive multi-agency outreach initiative for marginalized youth in underserved neighbourhoods, and special populations in East Toronto. The Youth Outreach Worker (YOW) engages youth ages 12-21 years old and their families, helps them better navigate and connect with services and supports in their communities.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":null,
                "Targ_Pop":"IY",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":null,
                "Website":"http:\/\/www.nativechild.org",
                "Service_Type":"Service Navigation",
                "Targ_Pop_Spe":"Indigenous",
                "Hours":"Monday 9AM5PM;Tuesday 9AM5PM;Wednesday 9AM5PM;Thursday 9AM5PM;Friday 9AM5PM;Saturday Closed; Sunday Closed",
                "Phone_Number":"416.969.8510"
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.383616,
                    43.6618799
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YOW",
                "Full_Name":"Youth Outreach Worker",
                "FY":"FY201617",
                "Org_Name":"Native Child and Family Services Toronto",
                "Unit_Number":null,
                "Full_Address":"935 Dundas St E Toronto ON M4M 1R4 ",
                "Latitude":43.662086,
                "Longitude":-79.348690,
                "Proj_Desc":"The Youth Outreach Worker Program is a comprehensive multi-agency outreach initiative for marginalized youth in underserved neighbourhoods, and special populations in East Toronto. The Youth Outreach Worker (YOW) engages youth ages 12-21 years old and their families, helps them better navigate and connect with services and supports in their communities.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":null,
                "Targ_Pop":"N\/A",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":null,
                "Website":"http:\/\/www.nativechild.org",
                "Service_Type":"Service Navigation",
                "Targ_Pop_Spe":"Indigenous",
                "Hours":"Monday 9AM5PM;Tuesday 9AM5PM;Wednesday 9AM5PM;Thursday 9AM5PM;Friday 9AM5PM;Saturday Closed; Sunday Closed",
                "Phone_Number":"416.969.8510"
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.3486896,
                    43.6620863
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YOW",
                "Full_Name":"Youth Outreach Worker",
                "FY":"FY201617",
                "Org_Name":"Native Child and Family Services Toronto",
                "Unit_Number":null,
                "Full_Address":"179 Dowling Ave Toronto ON M6K 3B2 ",
                "Latitude":43.639281,
                "Longitude":-79.439286,
                "Proj_Desc":"The Youth Outreach Worker Program is a comprehensive multi-agency outreach initiative for marginalized youth in underserved neighbourhoods, and special populations in East Toronto. The Youth Outreach Worker (YOW) engages youth ages 12-21 years old and their families, helps them better navigate and connect with services and supports in their communities.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":null,
                "Targ_Pop":"N\/A",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":null,
                "Website":"http:\/\/www.nativechild.org",
                "Service_Type":"Service Navigation",
                "Targ_Pop_Spe":"Indigenous",
                "Hours":"Monday 9AM5PM;Tuesday 9AM5PM;Wednesday 9AM5PM;Thursday 9AM5PM;Friday 9AM5PM;Saturday Closed; Sunday Closed",
                "Phone_Number":"416.969.8510"
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.439286,
                    43.6392812
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YOW",
                "Full_Name":"Youth Outreach Worker",
                "FY":"FY201617",
                "Org_Name":"Neighbourhood Link",
                "Unit_Number":null,
                "Full_Address":"2802 Danforth Ave Toronto ON M4C 1N2 ",
                "Latitude":43.689588,
                "Longitude":-79.296121,
                "Proj_Desc":"The Youth Outreach Worker Program is a comprehensive multi-agency outreach initiative for marginalized youth in underserved neighbourhoods, and special populations in East Toronto. The Youth Outreach Worker (YOW) engages youth ages 12-21 years old and their families, helps them better navigate and connect with services and supports in their communities.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":"Crescent Town",
                "Targ_Pop":"RY, NY",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":null,
                "Website":"http:\/\/www.neighbourhoodlink.org",
                "Service_Type":"Service Navigation",
                "Targ_Pop_Spe":"General",
                "Hours":"Monday 9AM4:30PM;Tuesday 9AM4:30PM;Wednesday 9AM4:30PM;Thursday 9AM4:30PM;Friday 9AM4:30PM;Saturday Closed; Sunday Closed",
                "Phone_Number":null
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.2961207,
                    43.6895877
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YOW",
                "Full_Name":"Youth Outreach Worker",
                "FY":"FY201617",
                "Org_Name":"Rosalie Hall",
                "Unit_Number":null,
                "Full_Address":"3020 Lawrence Ave Toronto ON M1P 2T7 ",
                "Latitude":43.755244,
                "Longitude":-79.248704,
                "Proj_Desc":"The Youth Outreach Worker Program is a comprehensive multi-agency outreach initiative for marginalized youth in underserved neighbourhoods, and special populations in East Toronto. The Youth Outreach Worker (YOW) engages youth ages 12-21 years old and their families, helps them better navigate and connect with services and supports in their communities.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":"Dorset Park",
                "Targ_Pop":null,
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":null,
                "Website":"http:\/\/www.rosaliehall.com",
                "Service_Type":"Service Navigation",
                "Targ_Pop_Spe":"General",
                "Hours":"Monday 8:30AM4:30PM;Tuesday 8:30AM4:30;Wednesday 8:30AM4:30;Thursday 8:30AM4:30;Friday 8:30AM4:30;Saturday Closed; Sunday Closed",
                "Phone_Number":" (416) 438-6880"
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.2487037,
                    43.7552436
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YOW",
                "Full_Name":"Youth Outreach Worker",
                "FY":"FY201617",
                "Org_Name":"Black Action Defence Committee",
                "Unit_Number":null,
                "Full_Address":"944 St Clair Ave W Toronto ON M6C 1C8 ",
                "Latitude":43.679807,
                "Longitude":-79.435414,
                "Proj_Desc":"The Youth Outreach Worker Program is a comprehensive multi-agency outreach initiative for marginalized youth in underserved neighbourhoods, and special populations in East Toronto. The Youth Outreach Worker (YOW) engages youth ages 12-21 years old and their families, helps them better navigate and connect with services and supports in their communities.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":"Lawrence Heights",
                "Targ_Pop":"RY",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":null,
                "Website":"http:\/\/blackactiondefence.weebly.com\/",
                "Service_Type":"Service Navigation",
                "Targ_Pop_Spe":"General",
                "Hours":null,
                "Phone_Number":"(416) 656-2232"
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.4354143,
                    43.679807
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YOW",
                "Full_Name":"Youth Outreach Worker",
                "FY":"FY201617",
                "Org_Name":"Hincks-Dellcrest Centre",
                "Unit_Number":null,
                "Full_Address":"440 Jarvis St Toronto ON M3J 3J6 ",
                "Latitude":43.767069,
                "Longitude":-79.475837,
                "Proj_Desc":"The Youth Outreach Worker Program is a comprehensive multi-agency outreach initiative for marginalized youth in underserved neighbourhoods, and special populations in East Toronto. The Youth Outreach Worker (YOW) engages youth ages 12-21 years old and their families, helps them better navigate and connect with services and supports in their communities.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":"Flemingdon Park, Victoria Village",
                "Targ_Pop":null,
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":null,
                "Website":"https:\/\/www.hincksdellcrest.org\/",
                "Service_Type":"Service Navigation",
                "Targ_Pop_Spe":"General",
                "Hours":null,
                "Phone_Number":"(416) 924-1164"
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.4758375,
                    43.7670686
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YOW",
                "Full_Name":"Youth Outreach Worker",
                "FY":"FY201617",
                "Org_Name":"Roma Community Centre",
                "Unit_Number":null,
                "Full_Address":"2340 Dundas St W, Toronto ON M6P 4A9 ",
                "Latitude":43.656982,
                "Longitude":-79.452426,
                "Proj_Desc":"The Youth Outreach Worker Program is a comprehensive multi-agency outreach initiative for marginalized youth in underserved neighbourhoods, and special populations in East Toronto. The Youth Outreach Worker (YOW) engages youth ages 12-21 years old and their families, helps them better navigate and connect with services and supports in their communities.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":null,
                "Targ_Pop":"NY",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":null,
                "Website":"http:\/\/www.romatoronto.org\/",
                "Service_Type":"Service Navigation",
                "Targ_Pop_Spe":"Roma",
                "Hours":"F 10-5",
                "Phone_Number":"(416) 546-2524"
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.4524255,
                    43.6569819
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YOW",
                "Full_Name":"Youth Outreach Worker",
                "FY":"FY201617",
                "Org_Name":"Somali Youth Association of Toronto",
                "Unit_Number":null,
                "Full_Address":"208 Duncanwoods Dr Toronto ON M9L 2E6 ",
                "Latitude":43.754855,
                "Longitude":-79.568107,
                "Proj_Desc":"The Youth Outreach Worker Program is a comprehensive multi-agency outreach initiative for marginalized youth in underserved neighbourhoods, and special populations in East Toronto. The Youth Outreach Worker (YOW) engages youth ages 12-21 years old and their families, helps them better navigate and connect with services and supports in their communities.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":null,
                "Targ_Pop":"RY, NY, HL, NETY, YP",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":null,
                "Website":"http:\/\/www.soyat.ca\/",
                "Service_Type":"Service Navigation",
                "Targ_Pop_Spe":"Somali",
                "Hours":null,
                "Phone_Number":"4162476333"
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.5681066,
                    43.7548554
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YOW",
                "Full_Name":"Youth Outreach Worker",
                "FY":"FY201617",
                "Org_Name":"St. Alban's Boys and Girls Club",
                "Unit_Number":null,
                "Full_Address":"843 Palmerston Avenue Toronto ON M6G 2R8 ",
                "Latitude":43.671419,
                "Longitude":-79.415683,
                "Proj_Desc":"The Youth Outreach Worker Program is a comprehensive multi-agency outreach initiative for marginalized youth in underserved neighbourhoods, and special populations in East Toronto. The Youth Outreach Worker (YOW) engages youth ages 12-21 years old and their families, helps them better navigate and connect with services and supports in their communities.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":null,
                "Targ_Pop":"RY, NY",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":null,
                "Website":"http:\/\/www.stalbansclub.ca\/",
                "Service_Type":"Service Navigation",
                "Targ_Pop_Spe":"General",
                "Hours":"Sat Sun 9-5, M-F 8:30-7",
                "Phone_Number":"(416) 534-8461"
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.4156825,
                    43.6714186
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YOW",
                "Full_Name":"Youth Outreach Worker",
                "FY":"FY201617",
                "Org_Name":"The Learning Enrichment Foundation",
                "Unit_Number":null,
                "Full_Address":"116 Industry S Toronto ON M6M 4L8 ",
                "Latitude":43.693118,
                "Longitude":-79.492205,
                "Proj_Desc":"The Youth Outreach Worker Program is a comprehensive multi-agency outreach initiative for marginalized youth in underserved neighbourhoods, and special populations in East Toronto. The Youth Outreach Worker (YOW) engages youth ages 12-21 years old and their families, helps them better navigate and connect with services and supports in their communities.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":null,
                "Targ_Pop":"RY, NY, NETY",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":null,
                "Website":"http:\/\/lefca.org\/about_us\/index.shtml",
                "Service_Type":"Service Navigation",
                "Targ_Pop_Spe":"General",
                "Hours":"Sat Sun 8:30am-12:30pm M-F: 8am to 5pm, after hours at Weston Rd",
                "Phone_Number":"416-769-9912"
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.4922052,
                    43.6931179
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YOW",
                "Full_Name":"Youth Outreach Worker",
                "FY":"FY201617",
                "Org_Name":"The Learning Enrichment Foundation",
                "Unit_Number":null,
                "Full_Address":"1267 Weston Rd Toronto ON M6M 4R2 ",
                "Latitude":43.688847,
                "Longitude":-79.494330,
                "Proj_Desc":"The Youth Outreach Worker Program is a comprehensive multi-agency outreach initiative for marginalized youth in underserved neighbourhoods, and special populations in East Toronto. The Youth Outreach Worker (YOW) engages youth ages 12-21 years old and their families, helps them better navigate and connect with services and supports in their communities.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":null,
                "Targ_Pop":"N\/A",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":null,
                "Website":"http:\/\/lefca.org\/contact_us\/index.shtml",
                "Service_Type":"Service Navigation",
                "Targ_Pop_Spe":"General",
                "Hours":"Monday to Friday: 12pm to 8pm - (Starting July 1st)",
                "Phone_Number":"416-244-8982"
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.4943304,
                    43.6888469
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YOW",
                "Full_Name":"Youth Outreach Worker",
                "FY":"FY201617",
                "Org_Name":"The Learning Enrichment Foundation",
                "Unit_Number":null,
                "Full_Address":"55 Emmet Ave Toronto ON M6M 5A7 ",
                "Latitude":43.688594,
                "Longitude":-79.503389,
                "Proj_Desc":"The Youth Outreach Worker Program is a comprehensive multi-agency outreach initiative for marginalized youth in underserved neighbourhoods, and special populations in East Toronto. The Youth Outreach Worker (YOW) engages youth ages 12-21 years old and their families, helps them better navigate and connect with services and supports in their communities.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":null,
                "Targ_Pop":"N\/A",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":null,
                "Website":"http:\/\/lefca.org\/contact_us\/index.shtml",
                "Service_Type":"Service Navigation",
                "Targ_Pop_Spe":"General",
                "Hours":"Monday to Thursday: 12pm (noon) to 5pm",
                "Phone_Number":"416-572-0086"
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.5033895,
                    43.6885937
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YOW",
                "Full_Name":"Youth Outreach Worker",
                "FY":"FY201617",
                "Org_Name":"Toronto Community Housing Corporation",
                "Unit_Number":null,
                "Full_Address":"220 Oak St Toronto ON M5A 2E1 ",
                "Latitude":43.663109,
                "Longitude":-79.357848,
                "Proj_Desc":"The Youth Outreach Worker Program is a comprehensive multi-agency outreach initiative for marginalized youth in underserved neighbourhoods, and special populations in East Toronto. The Youth Outreach Worker (YOW) engages youth ages 12-21 years old and their families, helps them better navigate and connect with services and supports in their communities.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":null,
                "Targ_Pop":"RY, NY, YP",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":null,
                "Website":"https:\/\/www.torontohousing.ca\/residents\/community-services\/Pages\/youth-services.aspx",
                "Service_Type":"Service Navigation",
                "Targ_Pop_Spe":"General",
                "Hours":null,
                "Phone_Number":"416-981-5500"
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.3578483,
                    43.6631088
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YOW",
                "Full_Name":"Youth Outreach Worker",
                "FY":"FY201617",
                "Org_Name":"Good Shepherd Ministries",
                "Unit_Number":null,
                "Full_Address":"412 Queen St E Toronto ON M5A 1T3 ",
                "Latitude":43.656151,
                "Longitude":-79.362522,
                "Proj_Desc":"The Youth Outreach Worker Program is a comprehensive multi-agency outreach initiative for marginalized youth in underserved neighbourhoods, and special populations in East Toronto. The Youth Outreach Worker (YOW) engages youth ages 12-21 years old and their families, helps them better navigate and connect with services and supports in their communities.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":null,
                "Targ_Pop":"HL",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":null,
                "Website":"www.goodshepherd.ca",
                "Service_Type":"Service Navigation",
                "Targ_Pop_Spe":"General",
                "Hours":"Mon-Sun 12:00pm-1:00am",
                "Phone_Number":"(416) 869-3619"
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.3625224,
                    43.6561511
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YOW",
                "Full_Name":"Youth Outreach Worker",
                "FY":"FY201617",
                "Org_Name":"New Beginnings",
                "Unit_Number":null,
                "Full_Address":"1015 Highland Ave Windsor ON N9A 1R6 ",
                "Latitude":42.311081,
                "Longitude":-83.027271,
                "Proj_Desc":"The Youth Outreach Worker Program is a comprehensive multi-agency outreach initiative for marginalized youth in underserved neighbourhoods, and special populations in East Toronto. The Youth Outreach Worker (YOW) engages youth ages 12-21 years old and their families, helps them better navigate and connect with services and supports in their communities.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":null,
                "Targ_Pop":"GIY",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Num_Youth_Served":"600",
                "Grant_Outcome_SteppingUp":null,
                "Website":"http:\/\/www.newbeginningswindsor.com\/",
                "Service_Type":"Service Navigation",
                "Targ_Pop_Spe":"General",
                "Hours":"Open 24 hrs",
                "Phone_Number":"519-971-0973"
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -83.0272714,
                    42.3110806
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YOW",
                "Full_Name":"Youth Outreach Worker",
                "FY":"FY201617",
                "Org_Name":"New Beginnings",
                "Unit_Number":null,
                "Full_Address":"1049 Janette Ave Windsor ON N9A 5A4 ",
                "Latitude":42.305778,
                "Longitude":-83.039677,
                "Proj_Desc":"The Youth Outreach Worker Program is a comprehensive multi-agency outreach initiative for marginalized youth in underserved neighbourhoods, and special populations in East Toronto. The Youth Outreach Worker (YOW) engages youth ages 12-21 years old and their families, helps them better navigate and connect with services and supports in their communities.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":null,
                "Targ_Pop":"N\/A",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Num_Youth_Served":"N\/A",
                "Grant_Outcome_SteppingUp":null,
                "Website":"http:\/\/www.newbeginningswindsor.com\/",
                "Service_Type":"Service Navigation",
                "Targ_Pop_Spe":"General",
                "Hours":"Open 24 hrs",
                "Phone_Number":"519-254-2363"
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -83.0396772,
                    42.3057784
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YOW",
                "Full_Name":"Youth Outreach Worker",
                "FY":"FY201617",
                "Org_Name":"Yorktown Child and Family Centre",
                "Unit_Number":null,
                "Full_Address":"2010 Eglinton Ave W York ON M6E 2K3 ",
                "Latitude":43.694823,
                "Longitude":-79.455529,
                "Proj_Desc":"The Youth Outreach Worker Program is a comprehensive multi-agency outreach initiative for marginalized youth in underserved neighbourhoods, and special populations in East Toronto. The Youth Outreach Worker (YOW) engages youth ages 12-21 years old and their families, helps them better navigate and connect with services and supports in their communities.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":"Jamestown-Mt Olive-Silverstone, Jane Avenue \/ Finch Avenue",
                "Targ_Pop":"NY, YP",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":null,
                "Website":"http:\/\/www.yorktownfamilyservices.com\/",
                "Service_Type":"Service Navigation",
                "Targ_Pop_Spe":"General",
                "Hours":null,
                "Phone_Number":"(416) 394-2424"
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.4555291,
                    43.6948227
                ]
            }
        },
        {
            "type":"Feature",
            "properties":{
                "FundProgram":"YOW",
                "Full_Name":"Youth Outreach Worker",
                "FY":"FY201617",
                "Org_Name":"For Youth Initiative",
                "Unit_Number":null,
                "Full_Address":"1652 Keele St York ON M6M 3W3 ",
                "Latitude":43.683872,
                "Longitude":-79.472927,
                "Proj_Desc":"The Youth Outreach Worker Program is a comprehensive multi-agency outreach initiative for marginalized youth in underserved neighbourhoods, and special populations in East Toronto. The Youth Outreach Worker (YOW) engages youth ages 12-21 years old and their families, helps them better navigate and connect with services and supports in their communities.",
                "Funding_Amount":null,
                "Timeline":null,
                "Targ_Comm":"Weston-Mt Dennis",
                "Targ_Pop":"RY, NY",
                "Targ_Age":"12 to 14 years; 15 to 19 years; 20 to 25 years;",
                "Num_Youth_Served":null,
                "Grant_Outcome_SteppingUp":null,
                "Website":"http:\/\/www.foryouth.ca\/",
                "Service_Type":"Service Navigation",
                "Targ_Pop_Spe":"General",
                "Hours":"Sat Sun closed, M-F 9-5",
                "Phone_Number":"(416) 653-3311"
            },
            "geometry":{
                "type":"Point",
                "coordinates":[
                    -79.4729275,
                    43.6838724
                ]
            }
        }
    ]
} ;
/*
var bounds = [
    [-57 ,41], // Southwest coordinates
    [-117, 59.]];  // Northeast coordinates

*/
var map = new mapboxgl.Map( {
    container: 'map', // container id
    style: 'mapbox://styles/alexaca79/cisgjw1ll002c2wo81b99btl8', //stylesheet location
    center: [ -79.38, 43.6532 ], // starting position
    zoom: 14 /*, // starting zoom
    maxBounds: bounds*/
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
        "id": "terrain-data",
        "type": "line",
        "source": "cma",
        "source-layer": "contour",
        "paint": {
            'line-color': "#004658"

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
                        'stops': [[7, 7], [12, 5]]
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
                            ['YCI','#EB1F2D'],
                            ['CARA','#FD347A']




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

                var popup = new mapboxgl.Popup(

                )
                    .setLngLat(feature.geometry.coordinates)
                    .setHTML('<h3>' + "Funding Program: " + feature.properties.Full_Name + " Program"+ '</h3>' +
                        '<p>' + '<b>Organization Name: </b>' + feature.properties.Org_Name  +'<br>'+
                         '<b>Address: </b>' + feature.properties.Full_Address +'<br>'+
                         '<b>Website: </b>'+ '<a target="_blank" href='+feature.properties.Website+'>' +  feature.properties.Website + '</a>' +'<br>'+
                         '<b>Target Community: </b>' + feature.properties.Targ_Comm +'<br>'+
                         '<b>Funding Year: </b>' + feature.properties.FY +'<br>'+
                         '<b>Program Description: </b>' + feature.properties.Proj_Desc +'<br>'+
                         '<b>Target Population: </b>' + feature.properties.Targ_Pop +'<br>'+ '</p>'





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


