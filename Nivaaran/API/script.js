function initMap(){

    // Map option

    var options = {
        center: {lat: 28.737324 , lng: 77.090981 },
        zoom: 10
    }

    //New Map
    map = new google.maps.Map(document.getElementById("map"),options)

    //listen for click on map location

    google.maps.event.addListener(map, "click", (event) => {
        //add Marker
        addMarker({location:event.latLng});
    })



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

    let MarkerArray = [ {location:{lat:  28.737324, lng: 77.090981}, 
        imageIcon: "https://img.icons8.com/nolan/2x/marker.png", 
        content: `<h2>INDIAN ARMY </h2>`},

        {location:{lat: 28.70781, lng: 77.15295},imageIcon: "https://img.icons8.com/nolan/2x/marker.png", content: `<h2> CIVIL DEFENCE </h2>`},

        {location:{lat: 28.699774, lng: 77.138596},imageIcon: "https://img.icons8.com/nolan/2x/marker.png",content: `<h2>AIR FORCE</h2>` },
		
		{location:{lat: 28.699100, lng: 77.138900},imageIcon: "https://img.icons8.com/nolan/2x/marker.png",content: `<h2>AMBULANCE</h2>` },
		
		{location:{lat: 28.699900, lng: 77.138400},imageIcon: "https://img.icons8.com/nolan/2x/marker.png",content: `<h2>DELHI POLICE UNIT 1</h2>` },
		
        {location:{lat: 28.699000, lng: 77.138700},imageIcon: "https://img.icons8.com/nolan/2x/marker.png",content: `<h2>DELHI POLICE UNIT 2</h2>` }
			    
		
		
		
		



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
