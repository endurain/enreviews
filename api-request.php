<?php

function api_request() {

  // get vars from ACF

// if( get_field('wit_ga_reviews_clientid','option') ):
// $clientid = get_field('wit_ga_reviews_clientid','option')
// endif;

  $curl = curl_init();

  curl_setopt_array($curl, array(
    CURLOPT_URL => "https://mybusiness.googleapis.com/v4/accounts/103480418076650782716/locations/3113233004733532043/reviews",
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => "",
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 30,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => "GET",
    CURLOPT_HTTPHEADER => array(
      "Accept: */*",
      "Accept-Encoding: gzip, deflate",
      "Authorization: Bearer ya29.Il-1BwRQAx5CUPy-gcZO8_2OxSYUHZVSemgngrSzN-cEGUdE7O2JgItnSOhlCik7Atici3DLgM5kTFaTnQnXyT5LvMAVF2BPGgpxsUIhYMMs9BY2aJuLaZo4ocn2E_TJIw",
      "Cache-Control: no-cache",
      "Connection: keep-alive",
      "Host: mybusiness.googleapis.com",
      "Postman-Token: c2627a28-0b5b-4f5c-9f19-e6801963c887,cf349a20-9a1e-40b5-a5ed-ea03f62d1c50",
      "User-Agent: PostmanRuntime/7.20.1",
      "cache-control: no-cache"
    ),
  ));

  $response = curl_exec($curl);
  $err = curl_error($curl);

  curl_close($curl);

  if ($err) {
    echo "cURL Error #:" . $err;
  } else {
    return $response;
  }
  // echo $response;
}
// api_request();
