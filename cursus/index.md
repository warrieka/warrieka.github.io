
Basiskennis webtechnologie
========================

Inhoud
--------
   - Het web onder de moterkap: GET - POST 
   - De structuur van een URL 
   - De talen van het web: de html-javascript-css combo , xml en json
	   - HTML - CSS - javascript  
	   - Structuur XML
	   - Structuur JSON
   - Werken met Webservices
	   - REST
	   - OGC
	   - SOAP

Het web onder de motorkap: GET - POST 
------------------------------------------------
### Overzicht

Het internet of wereld wijde web is een aarde omspannend netwerk van computers. Eigen elk netwerk zijn, een aantal protocollen, afspraken die toelaten dat alle verschillende deelnemers informatie kunnen uitwisselen. 
Het *Hyper Text Transfer Protocol*, HTTP is belangrijkste protocol van het wereldwijde web. Dit protocol oorspronkelijk enkel bedoelt om tekst in *hyper text markup language* (html) formaat te versturen, is de manier geworden om allerlei gegevens tussen client en server uit te wisselen. 
Niet alleen meer tekst gestructureerd met html die kan worden weergegeven in een webbrowser, maar ook bestanden en data. Data wordt typisch gestructureerd in text-formaten zoals xml of json.
Naast HTTP bestaan er nog andere protocollen zoals het File Transfer Protocol, FTP om bestanden uit te wisselen en het Short Messaging Transfer Protocol, SMTP ook wel gekend als email.

### GET en POST

Het http protocol heeft eigenlijk maar 2 type van commando's om data op te vragen tussen client en server: GET en POST:

- GET: bestaat url, een adres van de data, die die je opvraagt en wat bijhorende headers, die metadata over de verzender bevatten, zoals de gebruikte browser, taal en eventueel ook een gebruikersnaam en paswoord. GET is wat je doet als je een webpagina opvraagt, door de url in te typen in de adres
- POST: net als geen GET-request bestaat een POST request uit een url met wat bijkomende headers met metadata. Daarnaast wordt er echter ook data meegestuurd, die op de server zal worden uitgelezen. POST requests in de browser doe je traditioneel door een formulier in te vullen en dan op een *submit*-knop te drukken. 

De response van een GET of  POST bevat ook steeds een reeks headers met metadata die meer zeggen over wat voor type data de repsonse is.
Een bijzonder header is de status. Dit is een numerieke code die je verteld of je request correct kon worden afgehandeld. Is de code tussen 200 en 299, dan betekend dat alles correct is verlopen. Alle  codes tussen 400 en 599 wijzen op een fout. [lijst met status codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes)

De structuur van een URL 
------------------------------
Een Uniform Resource Locator (afgekort URL) is een adres, een verwijzing naar informatiebron op een server. Elke server op het internet heeft zijn eigen IP adres, omdat die niet makkelijk te onthouden is wordt hiermee een domeinnaam geassocieerd. 
Een URL van een internet resource heeft altijd de volgende vorm:

	http://loc.geopunt.be/geolocation/location?q=hever&c=15
	<protocol>://[subdomein].<domein>.<TLD>[:port]/[pad]?[query]

- **Protocol:** http of https bij beveiligde verbinding, kan ook ander protocol zijn zoals ftp.
- **Subdomein:** een optionele verdere indeling van een domein, typisch wordt www gebruikt in websites, maar dit is niet verplicht.
- **Domein:** Een naam die makkelijker te onthouden is dan een IP adres. Een domein samen met een TLD komt overeen met een IP-adres.
- **TLD, top-leveldomein:** een code, meestal 2 of 3 letters die verwijst naar een land of categorie van organisatie.
- **port** de poort waarnaar de server luistert, dit meestak 80 voor http en mag worden weggelaten indien dit het geval is.
- **Path:** dit verwees oorspronkelijk steeds naar de locatie van een bestand op de server, maar bij sommige web-frameworks wordt dit gebruikt als parameter en komt het niet meer overeen met een bestands locatie.
- **Query:** een reeks key-value pairs in de volgende vorm: key1=value1&key2=value2&... Deze kan gebruikt worden om een selectie op de data te doen.

De talen van het web: de html-javascript-css combo , xml en json
------------------------------
### HTML - CSS - javascript

#### Historiek

Een moderne webpagina bestaat eigenlijk altijd uit 3 delen HTML voor de structuur en initiële data,  CSS voor de lay-out en javascript voor de logica.  

HTML werd oorspronkelijk ontwikkeld om de teksten over het internet door de sturen met een basis layout zoals hoofding, vet, etc... 
 
Naar verloop van tijd bleek het steeds toevoegen van allerlei stijl opties tag-niveau veel overbodige herhaling inhield en code onleesbaar maakt. Daarom werd CSS ontwikkeld. In css declareer je een specifieke groep van tags via selector expressie en hierachter tussen {} plaats je de layout die je hierop wilt toepassen. 

De ccs-code kan worden toevoegt aan een html via een &lt;style &gt; tag. Grotere css-bestanden kunnen via een  &lt;link &gt; tag verwijzen naar een externe file.

    <style>
        .highlight {  background-color: yellow; }
    </style>

Javascript is de enige programmeertaal die je in een webbrowser kan uitvoeren. Oorspronkelijk bedoeld voor eenvoudige taken zoals lay-out effecten en formulier validatie.
Javascript is niet helemaal hetzelfde als java, dat is een serverside programmeertaal.
Tegenwoordig is javascript een volwaardige programmeertaal, die gebruikt wordt voor allerlei complexe applicaties in de webbrowser te ontwikkelen, zoals webmapping, tekenprogramma's en kantoor-software. 

Javascript wordt toegevoegd aan HTML via de &lt;script &gt; tag.  Je kunt de code rechtstreeks tussen de tags zetten. of je kunt met een *src=* attribuut verwijzen naar een url of relatief path extern bestand met javascript code.

    <script src="/src/jquery.min.js"></script>

### Structuur XML

#### Historiek XML

Met komst van javascript is men op zoek gegaan naar manieren om data in de browser te verversen zonder de pagina volledig opnieuw te moeten laden. 

Zo kon men vroeger geen kaart applicaties maken met een popup als op de kaart klikt, tenzij je alle mogelijke resultaten ergens in je HTML opsloeg, wat voor veel toepassingen met grote datasets niet mogelijk was. Een toepassing maken waarbij je een kaart kon versleep en met de muis en terwijl nieuwe kaartlagen ophaalt was al helemaal uitgesloten. 

Hiervoor werd aan javascript een XmlHttpRequest (xhr) object toevoegd. Hiermee kan je een file opvragen via een URL en dan hiermee bepaalde zaken bepaalde zaken in je html wijzigen via javascript.  De file die wordt opgevraagd was oorspronkelijk meestal in XML-formaat, al wordt tegenwoordig meer json gebruikt dan XML. 

#### XML en HTML

XML zelf is een formaat met gelijkaardige structuur als HTML. Beide vinden hun oorsprong in de *Standard Generalized Markup Language (smgl)*. In beide talen staat de ML voor Markup Language. Een Markup Language is een taal om extra informatie over een text te embedden in die text. 
XML staat voor *eXtensible Markup Language* en HTML voor *HyperText Markup Language*, vermits HTML bedoeld is om via HTTP te worden weergegeven, HTML is een presentatie-taal. 
De *eXtensible* in XML wijst op het feit dat XML geen vaste 'tags' en attributen zoals HTML.  Je kan zelf je eigen tags kiezen in functie van je data. Het is een systeem onafhankelijk opslag formaat. 
XML wordt niet alleen over het web gebruikt, maar ook bijvoorbeeld als uitwisselingsformaat tussen systemen (zoals GML voor Geodata) of als bestandsformaat bij desktop toepassing, zo is een QGIS project file .qgs een xml-file.

#### XML tags

XML is een Hiërarisch data formaat, dit wil zeggen dat niet alle data elementen gelijk zijn, zoals in een tabulair formaat (shapefile, tabel in database).  
Er is normaal gezien altijd 1 root-element, met hieronder 1 of meerdere kind-elementen, die op zich weer kind-elementen kunnen bevatten en zo voort. 
Naast kind-elementen kan een element ook een text-element bevatten. Dit vaak het laatste element, maar kan intern weer getagde waarden bevatten, zoals bij html. Dit wordt echter afgeraden voor de meeste toepassingen. 
XML-bestanden beginnen vaak met een declaratie, die de eigenschappen van de file bevat, zoals de versie en de gebruikte tekenset van de tekst. 
Meestal ziet die er in landen met westers script zo uit:

    <?xml version="1.0" encoding="UTF-8"?>

Dit zegt dat versie 1.0 van Xml gebruikt wordt en de encoding van karakters in de tekenset UTF-8.  

Onder declaratie begint de echte XML-data.

Elk element in XML begint met een tag en eindig met een tag. Een begintag is een kenmerkende tekstwaarde geplaatst tussen &lt; en &gt;.  Een eindtag is dezelfde waarde tussen &lt;/ en  &gt;.  

	<tag> ... </tag>

Indien eenzelfde tag herhaalt wordt in een bestand, moet de inhoud van hetzelfde type zijn. Een tag kan ook leeg zijn, in dat geval mag je de eindtag weglaten, maar moet de tag eindigen met  /&gt;.  Een lege tag heeft meestal nog wel attribuut waarden, anders is ze vrij zinloos. 

	<geeneindtag />

#### XML attributen

Aan elke XML tag kunnen attributen gekoppeld worden.  Dit zijn eigenschappen in de vorm van sleutel-waarde paren. De sleutel is een tekenreeks zonder spatie, de waarde een string. Deze worden toegevoegd aan de begintag in de vorm: **sleutel="waarde"**. Meerdere attributen worden gescheiden door een spatie. 

	<tag attribuut1="een waarde" 
		 attribuut2="een andere waarde">...</tag>
	 
#### Commentaar in XML

In XML wordt commentaar tussen &lt;!-- --/&gt; geplaatst. Alles hiertussen wordt genegeerd bij het uitlezen van een XML.

	<!--Commentaar: opmerking, blabla -->

#### XML schema

Je kunt een vaste vorm voor een XML definiëren door middel van een schema. Hierin wordt opgenomen welke tags en attributen mogen of moeten voorkomen en op welk niveua.
Et zijn eigenlijk een 2 manieren waarin XML schema bepaald worden. Historisch werd *Document Type Definition (DTD)* gebruikt. Dit zijn bestanden met extensie .dtd in de volgende vorm: 

	<!ELEMENT root-element(child1, child2, child2)>
	<!ELEMENT child1 (#PCDATA)>
	<!ELEMENT child2 EMPTY>
	<!ATTLIST child2 attribute CDATA>
	<!ELEMENT child3 (#CDATA)>
	<!ATTLIST child3 id CDATA #REQUIRED>

Elk element in DTD heeft een type van interne content zoals een lijst van kind-Elementen, vrije XML (#PCDATA) of tekst (#CDATA). Attributen worden per element vastgelegd. Men kan een verwijzing naar een DTD toevoegen aan de Declaratie van het XML bestand een  doctype.

	<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
	"http://www.w3.org/TR/html4/strict.dtd">

[Meer info](http://www.w3schools.com/xml/xml_dtd_intro.asp)

Tegenwoordig worden XML Schema definitie (XSD) gebruikt. Dit is een methode om XML te definiëren met een XML-bestand. Deze heeft als voordeel dat je meerdere schema's per bestand kunt opnemen. 

	<?xml version="1.0"?>
	<xs:schema 
	xmlns:xs="http://www.w3.org/2001/XMLSchema">
	
	<xs:element name="parent">
	  <xs:complexType>
	    <xs:sequence>
	      <xs:element name="child1" type="xs:string">
		      <xs:complexContent>
			        <xs:attribute name="id" 
				        type="xs:positiveInteger"/>
			  </xs:complexContent>
		  </xs:element>
	      <xs:element name="child2" type="xs:date"/>
	    </xs:sequence>
	  </xs:complexType>
	</xs:element>
	
	</xs:schema>

#### XML namespace

Eigen aan werken met xsd is de mogelijkheid om XML namespaces (xmlns) te declareren. Een namespace in een bijzonder attribuut van een element in de vorm **xmlns:prefix="url"**.  
De prefix is een voorvoegsel waarmee je aanduid of een bepaald element uit een bepaalde namespace komt. Er kan ook een default namespace opgegeven worden, dat is de namespace voor alle elementen zonder prefix.  De prefix zelf is eigenlijk vrij te kiezen, maar typisch worden een vaste 2 of drieletterige afkorting gebruikt. 
Een namespace kan worden gedeclareerd in elk element in een XML en geld dan vanaf dat element, maar wordt meestal op de het root-element gedeclareerd.  

	<wfs:FeatureCollection 
	xsi:schemaLocation="http://services.ovam.be/geoserver/schemas/wfs/1.0.0/WFS-basic.xsd" 
	xmlns:OVAM="http://www.ovam.be" 
	xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">

Ook kan er een **xsi:schemaLocation="URL"** worden opgeven die verwijst naar de xsd van de XML voor validatie.

### Structuur JSON
#### Historiek JSON
De JavaScript Object Notatie (JSON) is een eenvoudig alternatief voor XML om gestructureerde gegevens in tekst-formaat aan te bieden. 
Historisch werd enkel XML gebruikt om gegevens uit te wisselen in webapplicaties. XML kan strikt worden gedefinieerd en software en programmeertaal onafhankelijk, maar dat maakt van XML echter ook een complex en verboos formaat . 
XML parsen en omzetten naar javascript objecten, is vaak moeilijk om te programmeren en een zwaar proces om uit voeren in de browser. Daarom gingen programmeurs al snel gegevens op de server omzetten naar Javascript objecten. 
Hieruit is het JSON-formaat intstaan. Dit is een beperkte subset van javascript, zonder logica of functies, enkel bedoeld voor data uitwisseling.

#### Datatypes in JSON
Er zijn eigenlijk 3 datatypes in json, waaruit alle andere types worden samenstelt.
**Tekst en Cijfers**: De laagste datatypes zijn cijfers of tekst. Tekst staat tussen dubbele of enkele aanhalingstekens : " " of ' ', net als in python. 
**Objecten**:  Javascript objecten zijn eigenlijk gewoon sleutel-waarde paren tussen verzamelingstekens: { } . De sleutel moet altijd een tekst zijn, de waarde kan tekst, een cijfer, een array of een ander object zijn. Dit komt overeen met een python dict. 
**Array**:  Arrays zijn een verzameling van objecten, tekst of cijfers. Dit komt overeen een python list. 

Json structuren worden vaak ook gestandaardiseerd, schema worden hiervoor niet in gebruikt. In de wordt het gewoon aan de ontwikkelaar overgelaten om de correcte structuur aan te maken. Een bekende JSON standaard is [GEOJSON](http://geojson.org/geojson-spec.html): 

	{ "type": "FeatureCollection",
	  "features": [
		{ "type": "Feature",
		  "geometry": {
		    "type": "Point",
		    "coordinates": [125.6, 10.1]
		  },
		  "properties": {
		    "name": "Dinagat Islands"
		  }
		},
		... 
	    ]
	}

### Werken met Webservices

Webservices zijn eigenlijk gewoon webpagina's die XML of JSON terug geven in plaats van HTML.  Parameters kan opgeven via url-parameters of door ze te posten.

#### REST

Representational state transfer (REST) is een eenvoudige manier om een complex webservice te structureren. 
Aan de hand van de logische structuur van je data kan je de verschllende requests indelen via url-paden. Parameter kunnen als ze niet te groot zijn via GET worden opgegeven, maar mogen ook via POST. Die hoeven niet in een of andere complexe XML worden opgegeven.

Voorbeeld aan de hand van arcgis server:
http://inspirepub.waterinfo.be/arcgis/rest/services  

#### OGC

Het Open Geospatial Consortium (OGC) bepaald allerlei webstandaarden voor Geografische services, zoals WMS, WMTS, CSW, WFS en WCS. 
Dit type van service volgt steeds eenzelfde vorm. 
Je haalt eerste de GetCapabilities file op, die vertelt wat de service kan en welke lagen erin zitten. Je vraagt op samen met parameters voor type van service en versie nummer. 

	http://services.ovam.be/geoserver/ows?service=wms&version=1.3.0&request=GetCapabilities

Het response formaat is altijd in XML, met strakke schema's, ook de GetCapabilities file. 

#### SOAP

Het Simple Object Access Protocol ([SOAP](http://www.w3.org/TR/soap12/)), is protocol om met strikt gedefinieerde SOAP-messages informatie uit te wisselen. Dit een zeer complex en verboos XML-formaat (met een schema). Initieel moet de applicatie een WSDL uitlezen waarin alle datatypes en mogelijke bevragingen gedefinieerd zijn. Op basis van deze schema's kan men dan een correcte request samen stellen als XML, die je kan dan  posten.

Het is echter nog steeds zeer populair in als data integriteit zeer belangrijk is, zoals de beheersdiensten van AGIV.

----
Bronnen
---------
https://developer.mozilla.org/en-US/Learn/Getting_started_with_the_web
https://en.wikibooks.org/wiki/HyperText_Markup_Language
https://en.wikibooks.org/wiki/Cascading_Style_Sheets
https://en.wikibooks.org/wiki/XML_-_Managing_Data_Exchange
http://www.w3schools.com/xml/xml_dtd_intro.asp 