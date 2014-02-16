/**
 * @author kay warrie
 */
function addlegende (argument) {
    var legend = L.control({position: 'bottomleft'});

    legend.onAdd = function (map) {

        var div = L.DomUtil.create('div', 'info legend');

        var innerHTML = '<form>';
        innerHTML += '<div style=" max-height:40px; overflow:hidden" > <input checked=true type="checkbox" value="bib"  onchange=legendChecked(value)> '
        + '<img src="https://api.tiles.mapbox.com/v3/marker/pin-m-library+E6E6E6.png"   style="float:left;"/> Bibliotheek </div>';
        innerHTML += '<div style=" max-height:40px; overflow:hidden" ><input checked=true type="checkbox" value="cul"  onchange=legendChecked(value)>' 
        + '<img src="https://api.tiles.mapbox.com/v3/marker/pin-m-theatre+FA58F4.png"   style="float:left;"/> Cultuur </div>';
        innerHTML += '<div style=" max-height:40px; overflow:hidden" > <input checked=true type="checkbox" value="dis"  onchange=legendChecked(value)>'
        + '<img src="https://api.tiles.mapbox.com/v3/marker/pin-m-town-hall+F4FA58.png" style="float:left;"/>Districtshuis </div>';
        innerHTML += '<div style=" max-height:40px; overflow:hidden" ><input checked=true type="checkbox" value="wc"  onchange=legendChecked(value)>'
        + '<img src="https://api.tiles.mapbox.com/v3/marker/pin-m-toilets+0040FF.png"   style="float:left;"/>Openbaar Sanitair </div>';
        innerHTML += '<div style=" max-height:40px; overflow:hidden" ><input checked=true type="checkbox" value="sport"  onchange=legendChecked(value)>' 
        + '<img src="https://api.tiles.mapbox.com/v3/marker/pin-m-pitch+FE9A2E.png" style="float:left;"/> Sport </div>';
        innerHTML += '<div style="max-height:40px; overflow:hidden">'+
        '<input checked=true type="checkbox" value="park"  onchange=legendChecked(value) >'
        + '<span style="float:left; color:#9AFE2E; border-style:solid; border-color:#9AFE2E;background-color:#9AFE2E; background-color:rgba(154,254,46,.6)"> ___ </span> Parken </div>'
        innerHTML += '</form>'
        div.innerHTML = innerHTML;

        return div;
    };

	legend.addTo(map);
}

function legendChecked(val) {
    var layer = overlays[val];
    if ( map.hasLayer(layer) ) map.removeLayer(layer)
    else if (map.hasLayer(layer) == false) map.addLayer( layer , false)
}
