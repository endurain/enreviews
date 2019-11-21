

<?php
// have this file run as a cron job ask kinsta, and we specify interval
$url = 'https://jsonplaceholder.typicode.com/users'; // testing url
$data = file_get_contents($url); // put the contents of the file into a variable


file_put_contents('test.json', json_encode($data)); // write json to test.js



////////////////////////////////////
//References:                     //
////////////////////////////////////
//  google dev console link
//    https://console.developers.google.com/apis/dashboard?project=mesmerizing-app-254620&authuser=0
//    https://developers.google.com/my-business/reference/rest/v4/accounts.locations.reviews#Review
////////////////////////////////////
//Google Review methods and misc  //
////////////////////////////////////
//  REST Resource: accounts.locations.reviews
//  https://mybusiness.googleapis.com/v4/accounts/{accountId}/locations/{locationId}/reviews
//  GET https://mybusiness.googleapis.com/v4/{parent=accounts/*/locations/*}/reviews
//
//  Wit place id: ChIJ16Vfxe6FbIcRkiRFEnBISyo
//  Potential Wit Location Id: 	375414794340
//  name for zac sanders app: accounts/103480418076650782716
//
//  for testing:
//    var_dump($decoded);
?>
