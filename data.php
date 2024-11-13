<?php
// CORS-Header aktivieren
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

// Beispiel-Daten für Kurse
$data = [
    [
        "id" => 1,
        "title" => "Computer Programming Basic",
        "instructor" => "Adrian Dawson",
        "lectures" => "48 lectures (280 Hours)",
        "price" => "1200,00 Euro",
        "description" => [
            "Mauris tellus lorem, tempus sed nibh at, varius convallis mi",
            "Aenean tristique sodales enim, et consequat velit. Morbi sit amet lorem sapien"
        ],
        "icon" => "code",
        "category" => "programming"
    ],
    [
        "id" => 2,
        "title" => "Computer CSS3 Programming",
        "instructor" => "Adrian Dawson",
        "lectures" => "48 lectures (280 Hours)",
        "price" => "$120 all course / $20 per month",
        "description" => [
            "Mauris tellus lorem, tempus sed nibh at, varius convallis mi",
            "Aenean tristique sodales enim, et consequat velit. Morbi sit amet lorem sapien"
        ],
        "icon" => "css3",
        "category" => "programming"
    ],
    [
        "id" => 3,
        "title" => "Web-site Development Pro",
        "instructor" => "Adrian Dawson",
        "lectures" => "48 lectures (280 Hours)",
        "price" => "$120 all course / $20 per month",
        "description" => [
            "Mauris tellus lorem, tempus sed nibh at, varius convallis mi",
            "Aenean tristique sodales enim, et consequat velit. Morbi sit amet lorem sapien"
        ],
        "icon" => "globe",
        "category" => "web-development"
    ]
];

// JSON-Daten ausgeben
echo json_encode($data);
?>