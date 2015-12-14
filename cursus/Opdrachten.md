
Oefeningen
====

Het web onder de moterkap: GET - POST 
----

### GET

	import urllib2
	response = urllib2.urlopen(
	'http://inspirepub.waterinfo.be/arcgis/rest/services')
	print response.read()

**Opdracht:** Heel via python de html op van een website naar keuze op en schrijf de inhoud weg naar een text-file en open die terug in de browser.

### GET met parameters

	import urllib2, urllib
	url = 'http://inspirepub.waterinfo.be/arcgis/rest/services/Rivierbekkens/MapServer/0/query'
	params = {'where':"1=1", 'outFields':'*'}
	dataEncoded = urllib.urlencode(params)
	response = urllib2.urlopen(url + dataEncoded)
	print response.read()

**Opdracht:** Haal alleen gegevens op voor het ijzerbekken via GET, 

### POST

	import urllib2, urllib
	url = 'http://loc.api.geopunt.be/geolocation/Location'
	params = {'q':"q=molenstraat 15",'c':5}
	dataEncoded = urllib.urlencode(params)
	response = urllib2.urlopen(url , dataEncoded)
	print response.read()
	
**Opdracht:** Haal alleen gegevens op  voor het ijzerbekken via POST via dezelfde url als in de vorige opdracht.

### Headers

    import urllib2, urllib
    url= 'http://ws.agiv.be/capakey/api/v0/municipality/'
    headers = {'content-type': 'application/json'}
    req = urllib2.Request(url, headers= headers)
    response = urllib2.urlopen(req)
    print response.read()

**Opdracht:**  Haal voor dezelfde url de data op met geometrie, als json en nogmaal als xml. Meer info: http://ws.agiv.be/capakey/api/v0/ 

De structuur van een URL 
----

**Opdracht:** ontleed: http://metadata.antwerpen.be:8080/geoportal/catalog/publication/downloadMetadata.jsp?uuid={4A56262F-089B-4001-8E94-184C739099A8}&option=view

De talen van het web: de html-javascript-css combo , xml en json
----
###HTML - CSS - javascript 

**Opdracht:** Open http://warrieka.github.io/geoplus/index.html en bepaal wat de header en body van de html is. Bepaal welke character-encoding gebruikt wordt en wat de script files en css files zijn.

### Structuur XML

**Opdracht:** Open de onderstaande link en geef alle gebruikte namespace en bijhorende prefix aan.
Vindt de attributen van /csw:Capabilities/ows:ServiceProvider/ows:ProviderSite en zoek de kinderen van /csw:Capabilities/ows:ServiceProvider/ows:ServiceContact op.
http://geoservices.informatievlaanderen.be/zoekdienst/srv/dut/csw?SERVICE=CSW&VERSION=2.0.2&REQUEST=GetCapabilities

### Structuur JSON

**Opdracht:** Geef alle objecten eerste niveau van: http://poi.api.geopunt.be/v1/core .
Geef de waarde van pois[0].labels[0].term.

Werken met Webservices
----

### REST
http://inspirepub.waterinfo.be/arcgis/rest/services/Rivierbekkens/MapServer?f=json

### OGC
http://inspirepub.waterinfo.be/arcgis/services/Rivierbekkens/MapServer/WMSServer?request=GetCapabilities&service=WMS

### SOAP
http://inspirepub.waterinfo.be/arcgis/services/Rivierbekkens/MapServer?wsdl

**Opdracht:** Probeer bovenstaande url's uit en geef de types van ondersteunde operaties en duid aan waar je die vond.

Bronnen
----
http://www.voidspace.org.uk/python/articles/urllib2.shtml
https://docs.python.org/2/howto/urllib2.html