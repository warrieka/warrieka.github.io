Kay Warrie
==========

![](images/Ethiopie_kay.jpg "Voor de bet giorgis in Ethiopië")

Over mij
--------

Ik ben geodata analist en programmeur, werkzaam als GIS-expert bij de Studiedienst van stad Antwerpen. 
Naast geohacking en kaartjes maken, houd ik van lezen, film kijken en reizen.

[Contacteer mij](mailto:kaywarrie@gmail.com)
 

Opensource Projecten
---------------------

### geopunt4Qgis

*"Geopunt voor QGIS"* is een plug-in voor de [QGIS](http://www.qgis.org/) open 
source desktop GIS,  die toelaat op om de publieke webservices onder noemer 
[geopunt](http://www.geopunt.be) van het agiv (Vlaamse overheid) te bevragen en 
de data op slagen om in verdere analyses te gebruiken. Ontwikkeld voor [het 
Agentschap voor Geografische Informatie Vlaanderen](https://www.agiv.be/)

- [Meer info](README_NL.md) 
- [Op GitHub](http://github.com/warrieka/geopunt4Qgis)
- [In de Quantum GIS Plug-in 
Repository](http://plugins.qgis.org/plugins/geopunt4Qgis/)

Meer info over geopunt vind je hier: 
[http://www.geopunt.be/over-geopunt](http://www.geopunt.be/over-geopunt)
<br/>

### Geoplus

Geoplus is een webapp tegen de opendata infrastructuur van stad Antwerpen. De stad Anwerpen biedt een groot deel van zijn data waaronder geodata als opendata aan. Externen kunnen via http://opendata.antwerpen.be deze gegevens downloaden. Voor gewone burgers die data willen raadplegen is het mogelijk dit te doen via google earth met een kml-file die ze kunnen downloaden of sinds kort via een preview Map. Programmeurs kunnen de JSON of XML formaten gebruiken.

Voor niet-programerdende technische eindgebruikers zoals landmeters, studiebureua's, cartografen, architecten, stedebouwkundigen, ... en ook voor Openstreetmap, GPS- en geocaching hobbyisten zijn deze formaten niet geschikt. Voor deze gebruikers probeert deze app een oplossing te bieden.

Met deze toepassing kan een niet-programmeur de data van de opendata-service downloaden in een courant geodata formaat, zodat ze die op hun eigen (desktop) toepassing gebruiken. Bijvoorbeeld geo/esri/shapefile json voor QGIS of Arcgis voor analyse en cartografie. Openstreetmappers kunnen de gewenste gegevens opladen via GPX, ook geocachers en andere gebruikers geavanceerde GPS-toestellen gebruiken GPX.

**Werking**

De toepassing gebruikt lijst alle GIS-lagen op de opendata app op in een dropdown. Dit gebeurd via een nodejs-app die http://opendata.antwerpen.be indexeerd, zodat we ook een beschrijving meekrijgen. De oplijsting op http://datasets.antwerpen.be/v4/gis.json bevat enkel de links en geen beschrijvingen of zelfs een gebruiksvriendelijke naam.

Als een gebruikers een gewenste laag gevonden heeft, wordt deze toegvoegd aan de kaart. Dit gebeurt voledig browserside via ajax-call in javascript. Het is dus steeds de laatste LIVE-data uit de opendata-API. Alle pagina's worden doorlopen via de volgende call op de volgdne url:

> http://datasets.antwerpen.be/v4/public/gis/ &lt;datasetnaam&gt; .json?page= &lt;paginaNr&gt;

De json wordt geparseerd en in een openlayers vectorlaag geladen.

De gebruiker kan de voledige laag bekijken en bevragen. Indien ze de laag geschikt vindt haar doelstelling, kan de gebruiker deze downloaden in een gewenst formaat en CRS. Op dit moment wordt geojson - gpx en esri json onsteund als output formaten in de browser.
Shapefile wordt ondersteund op basis van een externe service.

**Andere kaart elementen**

De basiskaart is de grijze GRB van AGIV en de Geocoder (zoeken op adres) is de geolocation-tool uit CRAB. (http://agiv.be)

[Naar de App](geoplus)
<br/>

### Kaart Stad Antwerpen

Een interactieve kaart van Antwerpen op basis van Agiv webservices: [grb](https://www.agiv.be/producten/grb/meer-over/aan-de-slag/grb-
raadpleegdiensten) voor de basiskaarten en [crab](https://www.agiv.be/producten/crab/meer-info-over-crab/gebruik-van-het-
crab/geolocation) voor zoeken op adres. En op data van Stad Antwerpen gehost op [arcgis](http://arcgis.com). Geprogrammeerd met de [leaflet](http://leafletjs.com/) mapping javascript API. Ontwikkeld als proof of 
concept voor [Stadsplan voor A-stad](https://beta.antwerpen.be/stadsmap).

[Naar de App](stadsplan)
<br/>

### open-data-geoviewer

De open-data-Geoviewer is een mobile site gemaakt als demo App voor de 
opendata-dag op 8 december 2012 in Antwerpen.

Wilt u weten waar het dichtstbijzijnde politiekantoor is of een hondenloopzones 
of een papiermand?
Met deze mobiele site (geoptimaliseerd voor smartphones) kunt u zeer eenvoudig 
een 20-tal verschillende soorten geografische data oproepen op een kaart 
(basiskaart open street map) of op een luchtfoto.
Met één klik krijgt u meer informatie (adres, foto, link) over het item.

[Naar de app](mobile)

Meer info: http://opendata.antwerpen.be/apps/open-data-geoviewer
<br/>

Professioneel
-------------

Ik werk deeltijds als Freelance GIS-consultant en in vast bij de studiedienst 
van stad Antwerpen, als geodata-analyst en occasioneel programmeur.
Freelance werk ik voornamelijk op open source GIS technologie zoals QGIS en 
Geoserver, voorlopig nog maar bij 1 klant: het Agentschap voor Geografische 
Informatie Vlaanderen (AGIV).
Bij stad Antwerpen werk ik op webmapping met ESRI arcgis-server. Ik beheer ook 
INSPIRE-compliant metadata in kader van GDI, Voor de rest doe ik vooral allerlei 
GIS analyses op data van het Stad. De meeste analyses zijn gerelateerd aan 
adressering-geocoding, ruimtelijke relaties,  nabijheids analyses (routing, 
service area's ed.) voor onder andere MER studies, ruimtelijke ordening or 
bouwvergunningen.
