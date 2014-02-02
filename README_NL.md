Geopunt4Qgis
============

![Geopunt voor QGIS](images/logogeopunt4Q.png "Geopunt voor QGIS")
 
Functies
--------

  * <a href="http://warrieka.github.io/index.html#!geopuntAddress.md" ><img src="images/geopuntAddressSmall.png" /> Zoek een Adres</a> 
  * <a href="http://warrieka.github.io/index.html#!geopuntReverse.md" ><img src="images/geopuntReverseSmall.png" /> Prik een Adres op kaart</a>
  * <a href="http://warrieka.github.io/index.html#!geopuntBatchgeocode.md" ><img src="images/geopuntBatchgeocodeSmall.png" /> CSV-adresbestanden geocoderen</a>
  * <a href="http://warrieka.github.io/index.html#!geopuntPoi.md" ><img src="images/geopuntPoiSmall.png" /> Zoek een Plaats - interesse punt</a>
  * <a href="index.html#!geopuntGIPOD.md" ><img src="images/geopuntGIPODsmall.png" /> GIPOD</a>
 
Systeem vereisten
-----------------

- QGIS 2.0 of hoger
- Python 2.7 (wordt geïnstalleerd met qgis)
- Elk besturingssysteem dat QGIS met python plug-ins ondersteund: ea. MS Windows, Mac OSX en Linux
- Vereist internet connectie, restrictieve firewalls kunnen mogelijk de connectie blokkeren

Doelstelling
-----------

geopunt4Qgis - *"Geopunt voor QGIS"* is een plugin voor de [QGIS](http://www.qgis.org/) open source desktop GIS. 

Het Vlaamse Geoportaal Geopunt bied een aantal geografische diensten (web-services) aan die mogen gebruikt worden door derden zoals andere overheden en bedrijven.

De kaartdiensten zijn gebaseerd op de OGC open standaard WMS of WMTS en kunnen gemakkelijk worden toegevoegd aan desktop GIS. GIS-gebruikers kunnen deze diensten ontdekken via het [metadacenter](https://metadata.geopunt.be/zoekdienst/apps/tabsearch/index.html).

Sommige diensten aangeboden door geopunt zijn niet gebaseerd op een open standaard omdat het gaat om diensten die geen  open standaard hebben. Deze publieke webdiensten zijn opgesteld volgens een REST-volle API, die eenvoudiger in gebruik is voor programmeurs dan OGC-diensten. Maar omdat ze niet gestandaardiseerd zijn kunnen ze niet zomaar binnen getrokken worden in desktop software.

Het gaat onder andere over:

- **Geocoding** gebaseerd op de officiële [CRAB](http://www.agiv.be/gis/projecten/?catid=34) adressen-databank
- **Locaties zoeken** door koppeling van adressen aan de crab-databank, bijvoorbeeld de scholendatabank van de Vlaamse overheid. (documentatie  nog niet beschikbaar)
- **Innames van openbaar domein** van het Generiek Informatieplatform Openbaar Domein (GIPOD)  [GIPOD](hhttp://gipod.api.agiv.be/#!index.md), de officiële databank met manifestaties, wegenwerken en andere obstructies op het openbaar domein.

Het van dit project om deze informatie te ontsluiten naar desktop QGIS-gebruikers, voor gebruik in papieren kaarten en voor het doen van analyse en onderzoek.

Use cases
----------

- De diensten zijn toegankelijk via een interactieve dialoog, geopend wanneer de gebruiker op een knop of menu-item klikt.
- De dialogen kunnen worden gebruikt en de gegevens kunnen worden weergegeven op elke ondersteund Spatial Reference System, niet alleen het Belgische Lambert 1972 (EPSG: 31370) of WGS84.
- De gebruiker kan een "tekst" zoekopdracht in voeren en indien beschikbaar, ook andere zoekopties toevoegen zoals een geografisch gebied.
- De gebruiker krijgt een lijst met resultaten voor de zoekopdracht en kan zoomen op een ​selectie van deze lijst, om te kunnen beoordelen of de variabele de gewenste data is.
- De gebruiker kan het juiste zoekresultaat selecteren in het dialoogvenster en toevoegen in kaart.

Wat is Geopunt ?
--------------

[Geopunt](http://www.geopunt.be/) is de centrale toegangspoort tot geografische overheidsinformatie, en het uithangbord van het samenwerkingsverband voor geografische informatie in Vlaanderen (GDI-Vlaanderen). Het portaal richt zich met een uitgebreid data-, diensten- en toepassingenaanbod naar een breed en divers publiek. Van burgers op zoek naar een geschikte bouwgrond tot de GIS-coördinator of het studiebureau die een milieu-studie wensen uit te voeren. Het geoportaal maakt laagdrempelig gebruik van geografische informatie door zowel overheidsinstanties, burgers, organisaties als bedrijven mogelijk. Maatschappelijk relevante geografische gegevens en diensten worden op een slimme en gebruiksvriendelijke wijze bijeengebracht.   

Alle componenten (metadata-cataloog, downloadapplicatie, e-commerce-applicatie, data en netwerkdiensten) worden rechtstreeks en geïntegreerd aangeboden. Het geoportaal vormt het Vlaams knooppunt in een Europese geografische data-infrastructuur en voldoet aan de vereisten van de [European INSPIRE richtlijn](http://inspire-geoportal.ec.europa.eu/).

Geopunt is de website van het samenwerkingsverband voor geografische informatie binnen de Vlaamse overheid, GDI-Vlaanderen (GDI = Geografische Data Infrastructuur). In de rol van geografische dienstenintegrator en als uitvoerend orgaan van het samenwerkingsverband GDI-Vlaanderen staat het Agentschap voor Geografische Informatie Vlaanderen (AGIV) in voor de realisatie en het onderhoud van Geopunt. 

Over de auteur
-------------

Ik ben geodata analyst en occasioneel programmeur, werkzaam bij de Studiedienst van stad Antwerpen. 
Naast geohacking en kaartjes maken, houd ik van lezen, film kijken en reizen.

Professioneel werk ik op webmapping met ESRI arcgis-server of Mapbox Tilemill. Ik beheer ook mee de centrale geodatabases van het stad en INSPIRE-compliant metadata in kader van GDI, Voor de rest doe ik vooral allerlei GIS analyses op data van het Stad. De meeste analyses zijn gerelateerd aan adressering-geocoding, ruimtelijke relaties, nabijheids analyses (routing, service area's ed.) voor onder andere MER studies, ruimtelijke ordening of bouwvergunningen.

[Contact mij](mailto:kaywarrie@gmail.com)

[Meer over mij](http://warrieka.github.io/#!aboutMe.md)

#### Bronnen:

- *[http://www.geopunt.be](http://www.geopunt.be/over-geopunt)* 
- *[http://gditestbed.agiv.be/](http://gditestbed.agiv.be/)*
- *[https://www.agiv.be/](https://www.agiv.be/)*
