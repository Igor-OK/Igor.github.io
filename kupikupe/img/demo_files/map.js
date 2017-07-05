//<![CDATA[
var rjmap = null;
var rjcmap = null;
var rjcenter = new GLatLng(53.76170183021049, -3.834228515625);

function rjload() {

	if (GBrowserIsCompatible()) {
		rjmap = new GMap2(document.getElementById('rjmap'));
		rjmap.setUIToDefault();
		rjmap.setMapType(G_NORMAL_MAP);
		rjmap.setCenter(rjcenter, 6);
	}

    var myIcon = new GIcon();
    myIcon.image = '../img/markers/image.png'/*tpa=img/markers/image.png*/;
    myIcon.shadow = '../img/markers/shadow.png'/*tpa=img/markers/shadow.png*/;
    myIcon.iconSize = new GSize(55,50);
    myIcon.shadowSize = new GSize(80,50);
    myIcon.iconAnchor = new GPoint(28,50);
    myIcon.infoWindowAnchor = new GPoint(28,0);
    myIcon.printImage = '../img/markers/printImage.gif'/*tpa=img/markers/printImage.gif*/;
    myIcon.mozPrintImage = '../img/markers/mozPrintImage.gif'/*tpa=img/markers/mozPrintImage.gif*/;
    myIcon.printShadow = '../img/markers/printShadow.gif'/*tpa=img/markers/printShadow.gif*/;
    myIcon.transparent = '../img/markers/transparent.png'/*tpa=img/markers/transparent.png*/;
    myIcon.imageMap = [52,0,53,1,54,2,54,3,54,4,54,5,54,6,54,7,54,8,54,9,54,10,54,11,54,12,54,13,54,14,54,15,54,16,54,17,54,18,54,19,54,20,54,21,54,22,54,23,54,24,53,25,52,26,32,27,32,28,32,29,32,30,31,31,31,32,31,33,31,34,30,35,30,36,30,37,30,38,29,39,29,40,29,41,29,42,29,43,28,44,28,45,28,46,28,47,27,48,27,49,27,49,27,48,26,47,26,46,26,45,26,44,25,43,25,42,25,41,25,40,24,39,24,38,24,37,24,36,24,35,23,34,23,33,23,32,23,31,22,30,22,29,22,28,22,27,2,26,1,25,0,24,0,23,0,22,0,21,0,20,0,19,0,18,0,17,0,16,0,15,0,14,0,13,0,12,0,11,0,10,0,9,0,8,0,7,0,6,0,5,0,4,0,3,0,2,1,1,2,0];

    var markerOptions = {
        icon:myIcon, 
        draggable: false};

    //Dungannon
    var dungannon = new GMarker(new GLatLng(54.495542598096435, -6.7397260665893555),markerOptions );

    GEvent.addListener(dungannon, "click", function () {
            dungannon.openInfoWindowHtml("<p>" + $("p:contains('173 Killyman Road')").html() + "</p>");
    });

    GEvent.addListener(dungannon, "dragstart", function() {
            map.closeInfoWindow();
    });
    rjmap.addOverlay(dungannon);
    
    //Belfast
    belfast = new GMarker(new GLatLng(54.578006850242815, -5.95958948135376),markerOptions );

    GEvent.addListener(belfast, "click", function () {
            belfast.openInfoWindowHtml("<p>" + $("p:contains('Unit 6 Shane Retail Park')").html() + "</p>");
    });

    GEvent.addListener(belfast, "dragstart", function() {
            map.closeInfoWindow();
    });    
    rjmap.addOverlay(belfast);
    
    //Newtownabbey
    newtownabbey = new GMarker(new GLatLng(54.65474378260719, -5.919785499572754),markerOptions );

    GEvent.addListener(newtownabbey, "click", function () {
            newtownabbey.openInfoWindowHtml("<p>" + $("p:contains('The Abbey Centre')").html() + "</p>");

    });

    GEvent.addListener(newtownabbey, "dragstart", function() {
            map.closeInfoWindow();
    });    
    rjmap.addOverlay(newtownabbey);

    //Coleraine
    coleraine = new GMarker(new GLatLng(55.1192873976371, -6.674494743347168),markerOptions );

    GEvent.addListener(coleraine, "click", function () {
            coleraine.openInfoWindowHtml("<p>" + $("p:contains('Unit 12 Riverside Regional Centre')").html() + "</p>");
    });

    GEvent.addListener(coleraine, "dragstart", function() {
            map.closeInfoWindow();
    });    
    rjmap.addOverlay(coleraine);
    
    //Bangor
    bangor = new GMarker(new GLatLng(54.6522238029308, -5.682528018951416),markerOptions );

    GEvent.addListener(bangor, "click", function () {
            bangor.openInfoWindowHtml("<p>" + $("p:contains('Clandeboye Road')").html() + "</p>");
    });

    GEvent.addListener(bangor, "dragstart", function() {
            map.closeInfoWindow();
    });    
    rjmap.addOverlay(bangor);
    
     //Portadown
    portadown = new GMarker(new GLatLng(54.42277524181938, -6.440541744232178),markerOptions );

    GEvent.addListener(portadown, "click", function () {
            portadown.openInfoWindowHtml("<p>" + $("p:contains('42, Meadow Lane')").html() + "</p>");

    });

    GEvent.addListener(portadown, "dragstart", function() {
            map.closeInfoWindow();
    });    
    rjmap.addOverlay(portadown);
    
    
    //Wednesbury
    wednesbury = new GMarker(new GLatLng(52.55225861397973, -2.033543586730957),markerOptions );

    GEvent.addListener(wednesbury, "click", function () {
            wednesbury.openInfoWindowHtml("<p>" + $("p:contains('Javelin Park')").html() + "</p>");
    });

    GEvent.addListener(wednesbury, "dragstart", function() {
            map.closeInfoWindow();
    });
    rjmap.addOverlay(wednesbury);
    
    //Solihull
    solihull = new GMarker(new GLatLng(52.3994338934158, -1.8185806274414062),markerOptions );

    GEvent.addListener(solihull, "click", function () {
            solihull.openInfoWindowHtml("<p>" + $("p:contains('Solihull Gate Retail Park')").html() + "</p>");
    });

    GEvent.addListener(solihull, "dragstart", function() {
            map.closeInfoWindow();
    });    
    rjmap.addOverlay(solihull);
    
    //Stoke
    stoke = new GMarker(new GLatLng(53.029239046569835, -2.1879959106445312),markerOptions );

    GEvent.addListener(stoke, "click", function () {
            stoke.openInfoWindowHtml("<p>" + $("p:contains('Octagon Retail Park')").html() + "</p>");
    });

    GEvent.addListener(stoke, "dragstart", function() {
            map.closeInfoWindow();
    });    
    rjmap.addOverlay(stoke);

    //Erdington
    erdington = new GMarker(new GLatLng(52.517748597997326, -1.8048477172851562),markerOptions );

    GEvent.addListener(erdington, "click", function () {
            erdington.openInfoWindowHtml("<p>" + $("p:contains('Ravenside Retail Park')").html() + "</p>");
    });

    GEvent.addListener(erdington, "dragstart", function() {
            map.closeInfoWindow();
    });    
    rjmap.addOverlay(erdington);
    
    //Coventry
    coventry = new GMarker(new GLatLng(52.430164288700944, -1.4876174926757812),markerOptions );

    GEvent.addListener(coventry, "click", function () {
            coventry.openInfoWindowHtml("<p>" + $("p:contains('Gallagher Retail Park')").html() + "</p>");
    });

    GEvent.addListener(coventry, "dragstart", function() {
            map.closeInfoWindow();
    });    
    rjmap.addOverlay(coventry);
    
     //Bolton
    bolton = new GMarker(new GLatLng(53.58365260717617, -2.5347304344177246),markerOptions );

    GEvent.addListener(bolton, "click", function () {
            bolton.openInfoWindowHtml("<p>" + $("p:contains('Middlebrook Retail')").html() + "</p>");
    });

    GEvent.addListener(bolton, "dragstart", function() {
            map.closeInfoWindow();
    });    
    rjmap.addOverlay(bolton);
    
    rjmap.disableScrollWheelZoom();
}
//]]>