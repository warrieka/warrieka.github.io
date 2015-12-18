
Het web bevragen in python
====

Inhoud
----
   - Data via url opvragen via python
	   - Text-data 
	   - Binaire data
   - JSON 
   - XML
	   - Eenvoudige XML data uitlezen
	   - XML met namespaces
   - fouten afhandelen
   - Basic Authentication en werken achter een proxy
   - Oauth

Data via url opvragen via python
----

### Text-data
	import urllib, urllib2
	qry = """node
	           [amenity=drinking_water]
	           (51.09,4.03,51.40,4.80);
	         out;"""
	url = 'http://overpass-api.de/api/interpreter'
	resp = urllib2.urlopen(url, qry)
	print resp.read()

### Binaire data
		
	import urllib, urllib2
	outfile = r'C:\Users\k.warrie\Downloads\wms.png'
	wms='http://geoservices.informatievlaanderen.be/raadpleegdiensten/Administratieve_Eenheden/wms'
	data = {}
	data['Layers']="RefgemGrens"
	data['Styles']="default"
	data['Service']="WMS"
	data['Request']="GetMap"
	data['Version']="1.3.0"
	data['Format']="image/png"
	data['WIDTH']= 1000
	data['HEIGHT']= 1000
	data['CRS']="EPSG:3857"
	data['BBOX']="456088,6601115,542920,6696356"
	qry = urllib.urlencode(data)
	
	resp = urllib2.urlopen(wms +"?"+ qry)
	
	with open(outfile, 'wb') as fl:
	  while True:
	     chunk = resp.read(16384)
	     if not chunk: break
	     fl.write(chunk)

### JSON
	import urllib, urllib2, json 
	url = 'http://inspirepub.waterinfo.be/arcgis/rest/services/Rivierbekkens/MapServer/0/query?where=1%3D1&outFields=*&f=json'
	resp = urllib2.urlopen(url)
	jsResp = json.load( resp )   #python dict
	print jsResp["fields"][0]["name"]

### XML
	Er zijn meerder XML-libraries beschikbaar in python. Elementree is de meest gebruikte omdat die werkt op de meest pythonische manier. Er is ook dom en sax in de standaard biblitheek. Dom is gestandaardiseerde xlm biblitheek, die vergelijkbaar is met de XML-bliotheek in javascript. Sax is en library geoptimaliseerd om zeer grote XML-bestanden te lezen (2 gb+). 
	

#### Eenvoudige XML
	import urllib, urllib2
	import xml.etree.cElementTree as ET
	url = "http://plugins.qgis.org/plugins/plugins.xml?qgis=2.0"
	response = urllib2.urlopen(url)
	result = ET.parse(response)
	root= result.getroot()

	#Tag-name
	print root.tag

	#vind meerdere specifieke elementen
	pyqgis_plugins = root.findall("pyqgis_plugin")

	geopunt4Qgis = [n for n in pyqgis_plugins if n.attrib["name"] == "geopunt4Qgis"]

	if len(geopunt4Qgis):
		version = geopunt4Qgis[0].find("version")
		if version is not None: print version.text

#### Namespaces
	import urllib, urllib2
	import xml.etree.cElementTree as ET

	ns = { "csw": "http://www.opengis.net/cat/csw/2.0.2",
		"inspire_ds": "http://inspire.ec.europa.eu/schemas/inspire_ds/1.0",
		"inspire_common": "http://inspire.ec.europa.eu/schemas/common/1.0",
		"gml": "http://www.opengis.net/gml",
		"gmd": "http://www.isotc211.org/2005/gmd",
		"ows": "http://www.opengis.net/ows",
		"ogc": "http://www.opengis.net/ogc",
		"xlink": "http://www.w3.org/1999/xlink", 
		"xsi": "http://www.w3.org/2001/XMLSchema-instance" }

	url = "http://nationaalgeoregister.nl/geonetwork/srv/dut/csw?request=GetCapabilities&service=CSW" 
	response = urllib2.urlopen(url)
	result = ET.parse(response)
	root= result.getroot()

	Spatial_Filters = root.findall("ogc:Filter_Capabilities/ogc:Spatial_Capabilities" , ns)
	if len(Spatial_Filters):
		Spatial_Filter= Spatial_Filters[0] 
		#eerste child van Spatial_Filter
		GeometryOperands = Spatial_Filter[0]
		for GeometryOperand in GeometryOperands:
			print GeometryOperand.text

### fouten afhandelen
Foutcodes: http://www.w3schools.com/tags/ref_httpmessages.asp

	import urllib2, sys
	try: 
		urllib2.urlopen('http://poi.api.geopunt.be/geen_correct_path')
	except urllib2.HTTPError as e:
		print 'Foutcode '+ str(e.code)
		print e.read()
	except urllib2.URLError as e:
		print e.reason
	except:
		print sys.exc_info()
		
	URLError is erft van HTTPError, dus altijd na HTTPError. Of alternatief:	
		
from urllib2 import Request, urlopen, URLError
try:
	resp = urlopen('http://loc.api.geopunt.be/geen_correct_path')
except URLError, e:
	if hasattr(e, 'code'):
		print 'The server couldn\'t fulfill the request.'
		print 'Error code: '+ str(e.code)
		print 'Server message:' + e.read()
	elif hasattr(e, 'reason'):
		print 'We failed to reach a server.'
		print 'Reason: ', e.reason
else:	
	print resp.read()
			
### Basic Authentication en werken achter een proxy
proxy emulatie: http://www.telerik.com/fiddler
rules > Require proxy authentication

	import urllib2, sys
	host = '127.0.0.1'
	port = '8888'
	user = '1'
	password = '1'

	proxyUrl = "http://"
	proxyUrl += user + ':' + password + '@'
	proxyUrl += host + ':' + port
	print proxyUrl
	proxy = urllib2.ProxyHandler({'http': proxyUrl })
	auth = urllib2.HTTPBasicAuthHandler()
	opener = urllib2.build_opener(proxy, auth, urllib2.HTTPHandler)

	print opener.open('http://poi.api.geopunt.be/').read()

Basic authentication: username + password. Tegenwoordig minder gebruikt.

	import urllib2
	# create a password manager
	password_mgr = urllib2.HTTPPasswordMgrWithDefaultRealm()

	# Add the username and password.
	top_level_url = "http://example.com/foo/"
	password_mgr.add_password(None, top_level_url, "username", "password")

	handler = urllib2.HTTPBasicAuthHandler(password_mgr)

	# create "opener" (OpenerDirector instance)
	opener = urllib2.build_opener(handler)

	# use the opener to fetch a URL
	opener.open(a_url)

	# Install the opener.
	# Now all calls to urllib2.urlopen use our opener.
	urllib2.install_opener(opener)
	
### Oauth
https://techrangers.cdl.ucf.edu/oauth-python-tutorial.php

Via bijkomende library:
https://github.com/idan/oauthlib
docs: https://oauthlib.readthedocs.org/en/latest/

Voorbeeld: https://developers.arcgis.com/authentication/accessing-arcgis-online-services/#using-rest

	from urllib2 import Request, urlopen
	import json
	def get_token():
		params = {
			'client_id': "YOUR_APPLICATIONS_CLIENT_ID",
			'client_secret': "YOUR_APPLICATIONS_CLIENT_SECRET",
			'grant_type': "client_credentials"
		}
		dataEncoded = urllib.urlencode(params)
		
		resp = urlopen('https://www.arcgis.com/sharing/oauth2/token', dataEncoded)
	    response  = json.load(resp)
		
		token = response["access_token"]
		return token

	token = get_token()
	
	params = {
     'f': 'json',
	 'token': token
	 'where': '1=1'
	}
	url = 'http://services.arcgis.com/1KSVSmnHT2Lw9ea6/ArcGIS/rest/services/Astad_20150409/FeatureServer'
	dataEncoded = urllib.urlencode(params)
	resp = urlopen(url, dataEncoded)
	print resp.read()
	
Bronnen
----
http://www.voidspace.org.uk/python/articles/urllib2.shtml
https://docs.python.org/2/library/json.html
https://docs.python.org/2/library/xml.etree.elementtree.html
https://docs.python.org/2/library/urllib2.html