const dotenv = require('dotenv');
dotenv.config();
var Amadeus = require('amadeus');

// const BASE_URL = 'test.api.amadeus.com';
// var amadeus = new Amadeus({
//   clientId: process.env.AMADEUS_CLIENT_ID,
//   clientSecret: process.env.AMADEUS_CLIENT_SECRET
// });

var amadeus = new Amadeus();

teste()
async function teste() {
  resp = await amadeus.shopping.flightOffersSearch.get({
      originLocationCode: 'VCP',
      destinationLocationCode: 'FLL',
      departureDate: '2022-11-01',
      returnDate: '2022-11-21',
      currencyCode: 'BRL',
      includedAirlineCodes: 'AD',
      adults: '2'
  });
  dados = resp.data
  console.log(JSON.stringify(dados))
  // for(var i=0;i<dados.length;i++) {
  //   console.log(dados[i].itineraries)
  //   console.log(dados[i].pricingOptions)
  //   console.log(dados[i].travelerPricings)
  // }

}
// amadeus.shopping.flightOffersSearch.get({
//     originLocationCode: 'VCP',
//     destinationLocationCode: 'FLL',
//     departureDate: '2022-11-01',
//     returnDate: '2022-11-21',
//     currencyCode: 'BRL',
//     includedAirlineCodes: 'AD',
//     adults: '2'
// }).then(function(response){
//   console.log(response.data);
// }).catch(function(responseError){
//   console.log(responseError.code);
// });

//process.env.AMADEUS_CLIENT_ID
//process.env.AMADEUS_CLIENT_SECRET
