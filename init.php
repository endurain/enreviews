

<?php

$url = 'https://jsonplaceholder.typicode.com/users'; // testing url
$data = file_get_contents($url); // put the contents of the file into a variable

// write json to test.js
file_put_contents('test.json', json_encode($data));

// for testing
// var_dump($decoded);





// additional resources
// https://mybusiness.googleapis.com/v4/accounts/{accountId}/locations/{locationId}/reviews
//
// GET https://mybusiness.googleapis.com/v4/{parent=accounts/*/locations/*}/reviews

?>
