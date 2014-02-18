/**
 * @author kay warrie
 */
var map	;
var curXY = [];
var googleDirUrl = "https://www.google.com/maps/dir/";
var overlays = {};
var baseMaps = {};

function init() {
    var bibTemplate = "<h3>{naam}</h3><strong>Adres:</strong> <br/> {straat} {huisnummer}<br/>{postcode} {district} ";
    var bibIcon = new L.MakiMarkers.icon({ icon: "library", color: "#E6E6E6", size: "m" });
    var culTemplate = "<h3>{naam}</h3><strong>Adres:</strong> <br/> {straat} {huisnummer}<br/>{postcode} {district} ";
    var culIcon = new L.MakiMarkers.icon({ icon: "theatre", color: "#FA58F4", size: "m" });
    var disTemplate = "<h3>{naam}</h3><strong>Adres:</strong> <br/> {straat} {huisnummer}<br/>{postcode} {district} ";
    var disIcon = new L.MakiMarkers.icon({ icon: "town-hall", color: "#F4FA58", size: "m" });
    var wcTemplate =  "<h3>{OMSCHRIJVING}</h3><strong>Type:</strong> {CATEGORIE}<br/> <strong>Voor:</strong> {DOELGROEP}<br/>" 
                      + "<strong>Luiertafel: </strong> {LUIERTAFEL} <br/><strong>Minder validen: </strong> {INTEGRAAL_TOEGANKELIJK} <br/>" 
                      + "<strong>Adres:</strong> <br/> {STRAAT} {HUISNUMMER}<br/>{POSTCODE} {DISTRICT} ";
    var wcIcon = new L.MakiMarkers.icon({ icon: "toilets", color: "#0040FF", size: "m" });
    var sportTemplate = "<h3>{naam}</h3><strong>Type:</strong> {subtype}  <br/> <strong>Adres:</strong> <br/> {straat} {huisnummer}<br/>{postcode} {district} ";
    var sportIcon = new L.MakiMarkers.icon({ icon: "pitch", color: "#FE9A2E", size: "m" });
    var parkTemplate = "<h3>{naam}</h3>"
                       + "<strong>Adres:</strong> <br/> {straat} <br/>{postcode} {gemeente}";

	map = L.map('map' , {
		attributionControl: true,
		zoomControl: true ,
		center: [51.26299, 4.373], zoom: 11
		});

/*basemaps*/
    var grb_grijs = L.tileLayer("http://grb.agiv.be/geodiensten/raadpleegdiensten/geocache/tms/1.0.0/grb_bsk_gr@GoogleMapsVL/{z}/{x}/{y}.png", {
        minZoom: 6,
        maxZoom: 20,
        tms: true
    });

    var grb = L.tileLayer("http://grb.agiv.be/geodiensten/raadpleegdiensten/geocache/tms/1.0.0/grb_bsk@GoogleMapsVL/{z}/{x}/{y}.png", {
        minZoom: 6,
        maxZoom: 20,
        tms: true
    });

    var osm = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {})
	
    var lufo  = L.tileLayer( "http://grb.agiv.be/geodiensten/raadpleegdiensten/geocache/tms/1.0.0/orthoklm@GoogleMapsVL/{z}/{x}/{y}.png" , {
		minZoom: 6,
		maxZoom: 20,
		tms: true
	});

    var antw = L.esri.tiledMapLayer("http://tiles.arcgis.com/tiles/inQ6vcoHiLEh0Ty2/arcgis/rest/services/basemap/MapServer", {
            opacity:  0.8,
            minZoom: 11,
            maxZoom: 19,
            bounds: [
                        [51.150574051317115, 4.2262017084086585],
                        [51.38000365439694, 4.490560228916116]
                    ]
            });

    grb_grijs.addTo(map);   // grb_grijs is default basemap
    antw.addTo(map);        // overlay

    baseMaps = {
            "GRB (kleur)": grb,
            "GRB (grijs)": grb_grijs,
	    "Open Street Map": osm,
	    "Luchtfoto": lufo,
	};

/*features*/
    var bib = makeCluster("http://services1.arcgis.com/inQ6vcoHiLEh0Ty2/arcgis/rest/services/Astad/FeatureServer/1", bibTemplate, bibIcon, 30)
    bib.addTo(map);
    overlays["bib"] = bib;

    var cul = makeCluster("http://services1.arcgis.com/inQ6vcoHiLEh0Ty2/arcgis/rest/services/Astad/FeatureServer/1", culTemplate, culIcon, 50)
    cul.addTo(map);
    overlays["cul"] = cul;

    var dis = makeCluster("http://services1.arcgis.com/inQ6vcoHiLEh0Ty2/arcgis/rest/services/Astad/FeatureServer/2", disTemplate, disIcon, 30)
    dis.addTo(map);
     overlays["dis"] = dis

    var wc = makeCluster("http://services1.arcgis.com/inQ6vcoHiLEh0Ty2/arcgis/rest/services/Astad/FeatureServer/3", wcTemplate, wcIcon, 50)
    wc.addTo(map);
    overlays["wc"] = wc

 /*   var sport = makeCluster( "http://services1.arcgis.com/inQ6vcoHiLEh0Ty2/arcgis/rest/services/Astad/FeatureServer/4",sportTemplate , sportIcon, 50)
    sport.addTo(map);
    overlays["sport"] = sport */

    var parkStyle = {    //see: http://leafletjs.com/reference.html#path-options
        smoothFactor: 2,
        color: "#9AFE2E",
        weight: 3,
        opacity: 0.65,
        dashArray: "3"
    };

    var park = L.esri.featureLayer("http://services1.arcgis.com/inQ6vcoHiLEh0Ty2/arcgis/rest/services/Astad/FeatureServer/5", {

        style: function (feature) {
            return parkStyle;
        },
        onEachFeature: function (feature, layer) {
            var center = polygonCentroid(feature.geometry)
            var routing= "<br/>  <a target='_blank'  href='" + googleDirUrl
            + curXY[1] + ", " + curXY[0] + "/" + center[1] + "," + center[0] + "'> routebeschrijving</a>"

            layer.bindPopup(L.Util.template(parkTemplate, feature.properties) + routing
            );
        }
    }).addTo(map);
    overlays["park"] = park

/*wigets*/
	 addlegende();
	 L.control.scale({ metric:true, imperial:false, position:'bottomright' } ).addTo(map);
	 L.control.layers(baseMaps, {"Antwerpen":antw}).addTo(map);
	 
        map.addControl( new L.Control.Search({
                        url: 'http://crab.agiv.be/geolocation/geolocation.svc/Location?c=5&q={s}',
                        jsonpParam: 'callback',                  //callback param
                        filterJSON: filterJSONCall,              //callback that remaps json
                        text: 'Straat (nummer), Gemeente',		 //placeholder value	
		        textCancel: 'Annuleren',		 //title in cancel button
		        textErr: 'Adres kon niet worden gevonden',	//error message
			zoom: 15,
                        minLength: 2,
                        position:'topright'
                    }) );
/*geolocation*/
	 map.on('locationfound', onLocationFound);
             map.locate();
	}
        
/*callback that remaps json*/
function filterJSONCall(rawjson) {	
                var LocationResult = rawjson.LocationResult;
                var formattedJson = {};
		var key = []; loc = [];
		for(var i in LocationResult )
		{
			key = LocationResult[i].FormattedAddress;	
			loc = L.latLng( LocationResult[i].Location.Lat_WGS84, LocationResult[i].Location.Lon_WGS84 );
			formattedJson[ key ]= loc;	//key,value format
		}
		return formattedJson;
	}

/*clustermarker*/
function makeCluster(url, template, icon, radius) {
	var color = "#E6E6E6"
    if (icon.options.color) {
        color = "#" + icon.options.color   //some icons don't have color
	}   
    var cluster = L.esri.clusteredFeatureLayer( url , {
        cluster: new L.MarkerClusterGroup({
            maxClusterRadius: radius,
            //disableClusteringAtZoom: 16,
            polygonOptions: {
                color: color
            },
            iconCreateFunction: function (markers) {
                return icon                            
            }
        }),

        createMarker: function (feature, latlng) {
            return L.marker(latlng, { icon: icon }); 
        },

        onEachMarker: function (feature, layer) {
            var yx = ""
            if (curXY.length == 2) {
                yx = curXY[1] + "," + curXY[0]
            }
            layer.bindPopup(L.Util.template(template, feature.properties)
            + "<br/>  <a <a target='_blank'  href='" + googleDirUrl
            + yx + "/" + feature.geometry.coordinates[1] + "," + feature.geometry.coordinates[0] + "'> routebeschrijving</a>");
        }
        })
    return cluster
}

/*helper function to find centroid of polygon*/
function polygonCentroid(poly) {
    var outerring = poly.coordinates[0];
    var xSum = 0;
    var ySum = 0;
    var averageXY;

    for (i = 0; i < outerring.length; ++i) {
        var x = outerring[i][0];
        var y = outerring[i][1];
        xSum += x;
        ySum += y;
    }
    averageXY = [xSum / outerring.length, ySum / outerring.length];
    return averageXY
    }

/*use geolocation*/
function onLocationFound(e) {
		if ( e.accuracy < 2500 ) {
	       var radius =   e.accuracy / 2 ;
	       var x = Math.round(  e.latlng.lng * 10000 )/10000;
	       var y = Math.round(e.latlng.lat * 10000) / 10000;
	       if ((typeof x == "number" & typeof y == "number") & (-180 < x < 180) & (-90 < y < 90)) {
	           curXY = [x, y];
	       }
	       var geojsonMarkerOptions = {
    	  		title: x + ", " + y,
			    opacity: 0.7
			}; 
	
	       L.marker(e.latlng, geojsonMarkerOptions ).addTo(map)
	        .bindPopup("<h3>Je huidige GPS positie</h3>"
            + "x: " + x + " , y: " + y + " "
	        + "<br/> Je bent binnen " + radius + " m van dit punt.");
		}
	}
	
