'use strict';

const REGEO_URL              = 'http://restapi.amap.com/v3/geocode/regeo?key=d169ff232ccab96b8fa19e7e25303844&';
const GEO_URL                = 'http://restapi.amap.com/v3/geocode/geo?key=d169ff232ccab96b8fa19e7e25303844&';
const WALKING_DIRECTION_URL  = 'http://restapi.amap.com/v3/direction/walking?key=d169ff232ccab96b8fa19e7e25303844&';
const TRANSIT_DIRECTION_URL  = 'http://restapi.amap.com/v3/direction/transit/integrated?key=d169ff232ccab96b8fa19e7e25303844&';
const DRIVEING_DIRECTION_URL = 'http://restapi.amap.com/v3/direction/driving?key=d169ff232ccab96b8fa19e7e25303844&';
const geolocation            = navigator.geolocation;
 

const AmapAPI = {

	getAddress (pos){
        
        const coords = pos.coords;
	    const lnglat = [coords.longitude,coords.latitude];
	    const URL    = REGEO_URL + 'location='+lnglat.join(',');

	    return fetch(URL);
    },


    getDirectionByType( type , start, dest ) {
        const URL = DRIVEING_DIRECTION_URL + 'origin=116.481028,39.989643&destination=116.465302,40.004717';
        return fetch(URL);

    }
};



module.exports =  AmapAPI;

