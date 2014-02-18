/**
 * @author kay warrie
 */

mylegend = L.Control.extend({
    options: {
		position: 'topleft'
	},
    
    onAdd:  function (map) {
        var div = L.DomUtil.create('div', 'info legend');
	
	var innerHTML = '<div style="min-width:100px;" id="legendToggleInfo" onclick="toggle()" ><h4>Legende</h4>'
	+ '<span style="position:absolute; right:5px;  top:2px;" >sluiten</span></div>';
        innerHTML += '<form id="legendForm" style="display:block; height:270px; overflow:auto ;overflow-y:auto; overflow-x:visible">';
        innerHTML += '<div style=" max-height:40px; overflow:hidden" > <input checked=true type="checkbox" value="bib"  onchange=legendChecked(value)> '
        + '<img src="https://api.tiles.mapbox.com/v3/marker/pin-m-library+E6E6E6.png"   style="float:left;"/> Bibliotheek </div>';
        innerHTML += '<div style=" max-height:40px; overflow:hidden" ><input checked=true type="checkbox" value="cul"  onchange=legendChecked(value)>' 
        + '<img src="https://api.tiles.mapbox.com/v3/marker/pin-m-theatre+FA58F4.png"   style="float:left;"/> Cultuur </div>';
        innerHTML += '<div style=" max-height:40px; overflow:hidden" > <input checked=true type="checkbox" value="dis"  onchange=legendChecked(value)>'
        + '<img src="https://api.tiles.mapbox.com/v3/marker/pin-m-town-hall+FF0000.png" style="float:left;"/> Stadsloket </div>';
        innerHTML += '<div style=" max-height:40px; overflow:hidden" ><input checked=true type="checkbox" value="wc"  onchange=legendChecked(value)>'
        + '<img src="https://api.tiles.mapbox.com/v3/marker/pin-m-toilets+0040FF.png"   style="float:left;"/> Openbaar Sanitair </div>';
        innerHTML += '<div style=" max-height:40px; overflow:hidden" ><input checked=true type="checkbox" value="school"  onchange=legendChecked(value)>' 
        + '<img src="https://api.tiles.mapbox.com/v3/marker/pin-m-school+F7FE2E.png" style="float:left;"/> School </div>';
        
	innerHTML += '<div style="height:35px; overflow:hidden">'+
        '<input checked=true type="checkbox" value="sport"  onchange=legendChecked(value) >'
        + '<span style="float:left; color:#FE9A2E; border-style:solid; '
	+'border-color:#FE9A2E;background-color:#FE9A2E; background-color:rgba(254,154,46,.6)"> ___ </span> Sportterreinen </div>'
	innerHTML += '<div style="height:35px; overflow:hidden">'+
        '<input checked=true type="checkbox" value="park"  onchange=legendChecked(value) >'
        + '<span style="float:left; color:#9AFE2E; border-style:solid; '
	+ 'border-color:#9AFE2E;background-color:#9AFE2E; background-color:rgba(154,254,46,.6)"> ___ </span> Parken </div>'
        innerHTML += '</form>'
        div.innerHTML = innerHTML;

        return div;
    } 
})

function addlegende (map) {
    var legend = new mylegend({position: 'bottomleft'});
    map.addControl(legend)
}

function legendChecked(val) {
    var layer = overlays[val];
    if ( map.hasLayer(layer) ) map.removeLayer(layer)
    else if (map.hasLayer(layer) == false) map.addLayer( layer , false)
}


function toggle() {
	var elem = document.getElementById("legendForm");
	var text = document.getElementById("legendToggleInfo");
	if( elem.style.display == "block" ) {
    		elem.style.display = "none";
		text.innerHTML = '<h4>Legende</h4> <span style="position:absolute; top:2px; right:5px;" >open</span>';
  	}
	else {
		elem.style.display = "block";
		text.innerHTML = '<h4>Legende</h4> <span style="position:absolute; top:2px; right:5px; " >sluiten</span>';
	}
} 