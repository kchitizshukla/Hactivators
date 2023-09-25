function initMap(){

    // Map option

    var options = {
        center: {lat: 28.737324 , lng: 77.090981 },
        zoom: 12
    }

    //New Map
    map = new google.maps.Map(document.getElementById("map"),options)

    //listen for click on map location

    google.maps.event.addListener(map, "click", (event) => {
        //add Marker
        addMarker({location:event.latLng});
    })

    var mapElement = document.getElementById("map");
    var armyIcon = mapElement.getAttribute("data-army-icon");
    var crpfIcon = mapElement.getAttribute("data-crpf-icon");
    var ambulanceIcon = mapElement.getAttribute("data-ambulance-icon");
    var policeIcon = mapElement.getAttribute("data-police-icon");



    //Marker
/*
    const marker = new google.maps.Marker({
    position:{lat: 28.737324, lng:77.090981},
    map:map,
    icon:"https://img.icons8.com/nolan/2x/marker.png"
    });
    //InfoWindow
    const detailWindow = new google.maps.InfoWindow({
        content: `<h2>Murcia City</h2>`
    });
    marker.addListener("mouseover", () =>{
        detailWindow.open(map, marker);
    })
    */

    //Add Markers to Array

    let MarkerArray = [ 
        {location:{lat:  28.7377, lng: 77.0075}, imageIcon: armyIcon, content: `<h4>INDIAN ARMY </h4>`},

        {location:{lat: 28.70781, lng: 77.15295},imageIcon: crpfIcon, content: `<h4> CRPF </h4>`},

        {location:{lat: 28.6820, lng: 77.0676},imageIcon: ambulanceIcon,content: `<h4>AMBULANCE</h4>` },
		
	    {location:{lat: 28.6910, lng: 77.1765},imageIcon: ambulanceIcon,content: `<h4>AMBULANCE</h4>` },
		
	    {location:{lat: 28.6510, lng: 77.2863},imageIcon: policeIcon,content: `<h4>POLICE UNIT 1</h4>` },
		
        {location:{lat: 28.6417, lng: 77.1225},imageIcon:  policeIcon,content: `<h4>POLICE UNIT 2</h4>` }
    ]

    // loop through marker
    for (let i = 0; i < MarkerArray.length; i++){
        addMarker(MarkerArray[i]);
    }

    // Add Marker

    function addMarker(property){
        const marker = new google.maps.Marker({
            position:property.location,
            map:map,
            //icon: property.imageIcon
            });
            // Check for custom Icon
            if(property.imageIcon){
                // set image icon
                marker.setIcon(property.imageIcon)
            }
            if(property.content){
                const detailWindow = new google.maps.InfoWindow({
                content: property.content
            });

            marker.addListener("mouseover", () =>{
                detailWindow.open(map, marker);
            })
        }
    }
}
