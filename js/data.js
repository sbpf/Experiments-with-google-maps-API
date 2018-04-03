//Global Variables - These will be used throughout all the files in this app
var map;
var locationList = [];
var infoWindow;
var currentSelectedLocation;


var markersData=[
    {
        name:"Himalayan Kitchen",
        lat: 37.3771358,
        lng: -122.0648056,
        address:"2020 W El Camino Real, Mountain View, CA 94040",
        type:"Restaurants"
    },
    {
        name:"Crepevine",
        lat:37.3925003,
        lng:-122.0821538,
        type:"Restaurants"
    },
    {
        name:"Don Giovanni",
        lat:37.3771345,
        lng:-122.0801265,
        type:"Restaurants"
    },
    {
        name:"Sakoon",
        lat:37.3916753,
        lng:-122.0822343,
        type:"Restaurants"
    },
    {
        name:"ViVe Sol",
        lat:37.3857416,
        lng:-122.0895084,
        type:"Restaurants"
    },
    {
        name:"Red Rock Coffee",
        lat:37.3915434,
        lng:-122.0763616,
        type:"Coffee Shops"
    },
    {
        name:"Peet's Coffee and Tea",
        lat:37.3818816,
        lng:-122.1145506,
        type:"Coffee Shops"
    },
    {
        name:"Dana Street Roasting Company",
        lat:37.3924124,
        lng:-122.1490581,
        type:"Coffee Shops"

    },    
    {
        name:"Clocktower Coffee Roasting Company",
        lat:37.3971487,
        lng:-122.1316325,
        type:"Coffee Shops"
    },
    {
        name:"Starbucks",
        lat:37.411462,
        lng:-122.1643868,
        type:"Coffee Shops"
    },
    {
        name:"Mountain View Station",
        lat:37.3945523,
        lng:-122.0782263,
        type:"Transit Stations"
    },
    {
        name:"Cuesta Park",
        lat:37.3945264,
        lng:-122.1110572,
        type:"Parks"
    },
    {
        name:"Sylvan Park",
        lat:37.3945161,
        lng:-122.1110573,
        type:"Parks"
    },
    {
        name:"Pioneer Memorial Park",
        lat:37.3945161,
        lng:-122.1110573,
        type:"Parks"
    },
    {
        name:"Transform Fitness Studio",
        lat:37.3945058,
        lng:-122.1110573,
        type:"Fitness Centres"
    },
    {
        name:"Mountain View Public Library",
        lat:37.3944955,
        lng:-122.1110574,
        type:"Libraries"
    }
];

var Location = function(markerData){
    this.name = markerData.name;
    this.marker = createMarker(markerData);
    this.locationType = markerData.type;
    this.placeId = "";//Need to implement with place API
    this.address = "";//Need to implement by fetching full formatted address using placeID
    this.rating = "";//Use Yelp to get rating
}