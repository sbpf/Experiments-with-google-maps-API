/*-----------------------------------------------------------------------------------
//GOOGLE MAPS API--------------------------------------------------------------------
//---------------------------------------------------------------------------------*/
function initMap(){    
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 37.3879876, lng: -122.0913282},
        zoom: 13
    });

    //Create an empty single info window, which can hold data
    //when any of the markers is clicked.
    infoWindow = new google.maps.InfoWindow({
        content: ""
    });  
}

//This function creates the marker
function createMarker(markerData){ 
    markerPosition = {lat: markerData.lat , lng: markerData.lng};
    var marker = new google.maps.Marker({
        position: markerPosition,
        map: map,
        title: markerData.name
    });      

    //Add a listener event to markers for animating when clicked          
    marker.addListener('click',function(){
        setCurrentLocation(markerData.name);
        highlightMarker(self.currentSelectedLocation); 
    });  
    return marker; 
}

//Display relevant markers based on the selected menu option -Ex.Restaurants
function displayRelevantListings(typeOfListing){
    infoWindow.close();
   
    locationList.forEach(function(markerItem){        
       if(typeOfListing == markerItem.locationType || typeOfListing =='All'){        
            markerItem.marker.setVisible(true);

            //If the location is not available in the listing, push it
            var index = self.listings.indexOf(markerItem.name);
            if(index == -1){
                self.listings.push(markerItem.name);
            }                                     
       }
       else{
            markerItem.marker.setVisible(false);

            //This location should not be displayed as it doesn't belong to the selected listing category
            //Hence remove it from the listings
            var index = self.listings.indexOf(markerItem.name);           
            if (index > -1) {
                self.listings.splice(index, 1);
            }
       }
    });
}

function highlightMarker(selectedLocation){
    //animate marker
    selectedLocation.marker.setAnimation(google.maps.Animation.BOUNCE);
    setTimeout(function () { selectedLocation.marker.setAnimation(null);}, 1400);

    //populate info window
    infoWindow.setContent(selectedLocation.name);
    infoWindow.open(map,selectedLocation.marker);
}

function setCurrentLocation(name){
    var index = locationList.findIndex(x => x.name==name);
    self.currentSelectedLocation = locationList[index];
}
