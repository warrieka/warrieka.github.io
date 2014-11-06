GIPOD
=====

![](images/geopuntGIPOD.png)  Dit is een tool om [GIPOD](http://www.agiv.be/gis/diensten/?catid=158) data te importeren. Via [Hinder op kaart](http://www.geopunt.be/hinder-in-kaart) of de [publieke webservice](http://gipod.api.agiv.be/) kan iedereen de GIPOD-data raadplegen. Deze tool gaat deze data ophalen via de publieke webservice voor gebruik in analyses en cartografie. 

Je kunt kiezen uit verschillende filter opties, selecteer een waarde uit de keuzelijst:

- eigenaar
- provincie
- stad (moet binnen de provincie liggen)
- type manifestatie (enkel bij manifestaties)
- startdatum (mininaal huidige datum)
- einddatum (altijd groter dan startdatum)
- beperken tot huidig kaart extend

Je kunt opslaan naar verschillende geografische formaten zoals shapefile, spatialite en KML (google earth) en naar CSV-bestanden, die je kan openen in excel of een andere spreadsheet.

![](images/geopunt4qgisGIPOD.gif "GIPOD data laden in QGIS")

####Wat is GIPOD

Het GIPOD biedt een centraal platform om informatie over wegenwerken, manifestaties en andere activiteiten op het openbare domein op voorhand in te geven en te beheren. Op die manier is de hinder vooraf gekend, kunnen werken op elkaar worden afgestemd en kan voor omleidingen worden gezorgd. Bedoeling is de overlast op de openbare weg tot een minimum te beperken.  GIPOD is een initiatief van de Vlaamse Overheid, in beheer in bij het Agentschap voor Geografische Informatie Vlaanderen (AGIV).
