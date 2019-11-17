

<?php

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
//  for testing:
//    var_dump($decoded);
?>
