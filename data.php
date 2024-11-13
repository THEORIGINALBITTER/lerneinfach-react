<?php
// CORS-Header aktivieren, damit Anfragen von deinem lokalen Host erlaubt sind
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

// Beispiel-Daten
$data = [
    ["id" => 1, "title" => "Web Development", "description" => "Learn to build websites"],
    ["id" => 2, "title" => "Data Science", "description" => "Analyze and interpret complex data"],
    ["id" => 3, "title" => "Graphic Design", "description" => "Create stunning graphics and visuals"]
];

// JSON-Daten ausgeben
echo json_encode($data);