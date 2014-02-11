Geopunt4Qgis
============

![Geopunt for QGIS](images/logogeopunt4Q.png "Geopunt for QGIS")

Functions
--------

  * <a href="http://warrieka.github.io/#!geopuntAddress.md" ><img src="images/geopuntAddressSmall.png" /> search an  address</a> 
  * <a href="http://warrieka.github.io/#!geopuntReverse.md" ><img src="images/geopuntReverseSmall.png" /> click an address on the map</a>
  * <a href="http://warrieka.github.io/#!geopuntBatchgeocode.md" ><img src="images/geopuntBatchgeocodeSmall.png" />batch geocode CSV-files </a>
  * <a href="http://warrieka.github.io/#!geopuntPoi.md" ><img src="images/geopuntPoiSmall.png" />search for poi</a>
  * <a href="http://warrieka.github.io/index.html#!geopuntGIPOD.md" ><img src="images/geopuntGIPODsmall.png" /> GIPOD</a>

System requirements
-------------------

- QGIS 2.0 or above
- Python 2.7 (installed with qgis)
- Any OS capable of running QGIS with python plug-ins: ao. MS Windows, Mac OSX and Linux
- Requires internet connection, restrictive firewalls may block connection
 
Goals
-----

geopunt4Qgis - *"Geopunt for QGIS"* is a plugin for the [QGIS](http://www.qgis.org/) open source desktop GIS. 

The Flemish government Geographical Portal Geopunt offers several web-services that can be used freely by third party's, including other governments and citizens. 

The mapping services are based on the OGC open standard WMS or WMTS and can be added to to QGIS easily. These services can be found through the [metadacenter](https://metadata.geopunt.be/zoekdienst/apps/tabsearch/index.html).

But some services are not standardized because there is no widely used open standard. These public web-services are  composed with a REST-full API, this easier to use for programmers then OGC-services. But because they are not standardized, they can't be used directly by desktop software.

These include:

- **Geocoding** based on the Flemish [CRAB](http://www.agiv.be/gis/projecten/?catid=34) address-database
- **Location search** based on databases joined to the CRAB database, like the locations of the schools in Flanders.
- **Traffic obstruction information** from the [GIPOD](http://gipod.api.agiv.be/#!index.md) public works and manifestation database.

The goal of this project is to make these web-services available to QGIS-users, so they can be uses for creating print-maps and for doing research and analyses.

Use cases:
----------

- The services are accessed through a interactive dialog, opened when the user clicks a button or menu entry.
- The dialogs can be used and the data can be displayed at every supported Spatial Reference System, not just Belgian Lambert 1972 (epsg:31370) or wgs84.
- The user can enter a "text" search query and if available also add other search options like a geographical extent.
- The user gets a list of results for the query and he can select "zoom to selection" on this list, in order to evaluate if the selected variable is the wanted data.
- The user can select the correct search result from the dialog and add it to map.

What is Geopunt ?
--------------

[Geopunt](http://www.geopunt.be/) is the central gateway to government geographic information in Flanders. The portal focuses on a comprehensive data, services and application offerings to a broad and diverse audience. Citizens looking for a suitable land or the GIS-user or engineer who wishes to perform an environmental study. Socially relevant geographic data and services are brought together in an intelligent and user-friendly manner. 

All components (metadata catalog , download application, data and network services) are directly integrated. The geoportal is the Flemish node in a European spatial data infrastructure and meets the requirements of the [European INSPIRE directive](http://inspire-geoportal.ec.europa.eu/).

Geopunt is the website of the partnership for geographic information within the Flemish government, GDI Flanders (GDI = Spatial Data Infrastructures). The Flemish Agency for Geographical Information [(AGIV)](http://www.agiv.be/gis/) is responsible for organizing and maintaining geopunt.

About the author
----------------

My name is **Kay Warrie**. I am geospatial data analyst and developer from Belgium. 
My current employer is the research department of the city of Antwerp. 
Professionaly I work on webmapping with ESRI arcgis-server or Mapbox Tilemill. I also maintain INSPIRE-compliant metadata as a part of the flemish Geodata Infrastruce (GDI). But above all I do all kinds of GIS analyses on city data. Most analyses are related to adressing-geocoding, spatial relationships,  proximity analyses (routing, service area's etc.) for environmental impact studies, zoning or construction permits.

[Contact me](mailto:kaywarrie@gmail.com)

[More about me](http://warrieka.github.io/#!aboutMe.md)

#### Sources:

- *[http://www.geopunt.be](http://www.geopunt.be/over-geopunt)* 
- *[http://gditestbed.agiv.be/](http://gditestbed.agiv.be/)*
- *[https://www.agiv.be/](https://www.agiv.be/)*


To support me:
<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick">
<input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----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-----END PKCS7-----
">
<input type="image" src="https://www.paypalobjects.com/nl_NL/BE/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal, de veilige en complete manier van online betalen.">
<img alt="" border="0" src="https://www.paypalobjects.com/nl_NL/i/scr/pixel.gif" width="1" height="1">
</form>
