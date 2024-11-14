<?php
// Dynamisch den Ursprung (Origin) basierend auf der Anfrage setzen
$allowedOrigin = $_SERVER['HTTP_ORIGIN'] ?? 'http://localhost:3000'; // Fallback auf 3000, falls keine Origin vorhanden ist

// CORS-Header aktivieren, mit dynamischer Origin
header("Access-Control-Allow-Origin: $allowedOrigin");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

// Beispiel-Daten für Kurse
$data = [
    [
        "id" => 1,
        "title" => "React Framework",
        "instructor" => "The Original Bitter",
        "lectures" => "3 Tage / Individuell",
        "price" => "€ 899 vorOrt / € 699 Online",
        "description" => [
            "Mauris tellus lorem, tempus sed nibh at, varius convallis mi",
            "Aenean tristique sodales enim, et consequat velit. Morbi sit amet lorem sapien"
        ],
        "icon" => "code",
        "category" => "programming",
        "isFavorite" => false
    ],
    [
        "id" => 2,
        "title" => "CSS3 Programming",
        "instructor" => "The Original Bitter",
        "lectures" => "48 lectures (280 Hours)",
        "price" => "$120 all course / $20 per month",
        "description" => [
            "Dieser Kurs führt dich von den Grundlagen bis zu fortgeschrittenen Techniken in CSS3, inklusive Animationen, Flexbox und Grid Layouts.",
            "Ideal für Entwickler, die ihre Frontend-Fähigkeiten auf das nächste Level bringen möchten."
        ],
        "icon" => "css3",
        "category" => "programming",
        "isFavorite" => true
    ],
    [
        "id" => 3,
        "title" => "Web-site Development Pro",
        "instructor" => "The Original Bitter",
        "lectures" => "48 lectures (280 Hours)",
        "price" => "€1200 vorOrt / €999 Online",
        "description" => [
            "Mauris tellus lorem, tempus sed nibh at, varius convallis mi",
            "Aenean tristique sodales enim, et consequat velit. Morbi sit amet lorem sapien"
        ],
        "icon" => "globe",
        "category" => "web-development",
        "isFavorite" => false
    ],
    [
        "id" => 4,
        "title" => "After Effects für Digitales Marketing",
        "instructor" => "The Original Bitter",
        "lectures" => "36 lectures (150 Hours)",
        "price" => "€ 799 vorOrt / € 599 Online",
        "description" => [
            "Vertiefe deine Fähigkeiten in Animation und Grafikdesign",
            "Lerne den Einsatz von After Effects speziell für digitales Marketing"
        ],
        "icon" => "video",
        "category" => "digital marketing",
        "isFavorite" => false
    ],
    [
        "id" => 5,
        "title" => "Adobe Premiere für Social Media",
        "instructor" => "The Original Bitter",
        "lectures" => "30 lectures (120 Hours)",
        "price" => "€ 699 vorOrt / € 499 Online",
        "description" => [
            "Erfahre, wie du Videos für Social Media ansprechend schneidest",
            "Arbeite mit Adobe Premiere für professionelle Social Media Inhalte"
        ],
        "icon" => "video",
        "category" => "social media",
        "isFavorite" => false
    ],
    [
        "id" => 6,
        "title" => "Cinema4D für Produkte und Werbung",
        "instructor" => "The Original Bitter",
        "lectures" => "40 lectures (180 Hours)",
        "price" => "€ 999 vorOrt / € 799 Online",
        "description" => [
            "Lerne Cinema4D für die Erstellung von Produkt- und Werbegrafiken",
            "Setze deine kreativen Ideen für Werbekampagnen in 3D um"
        ],
        "icon" => "3d",
        "category" => "product marketing",
        "isFavorite" => false
    ],
    [
        "id" => 7,
        "title" => "Cinema4D für Social Media",
        "instructor" => "The Original Bitter",
        "lectures" => "35 lectures (160 Hours)",
        "price" => "€ 799 vorOrt / € 599 Online",
        "description" => [
            "Erstelle dynamische 3D-Grafiken und Animationen für Social Media",
            "Nutze Cinema4D, um auffällige Inhalte für deine Social Media Kanäle zu produzieren"
        ],
        "icon" => "3d",
        "category" => "social media",
        "isFavorite" => false
    ],
    [
        "id" => 7,
        "title" => "Cinema4D für Social Media",
        "instructor" => "The Original Bitter",
        "lectures" => "35 lectures (160 Hours)",
        "price" => "€ 799 vorOrt / € 599 Online",
        "description" => [
            "Erstelle dynamische 3D-Grafiken und Animationen für Social Media",
            "Nutze Cinema4D, um auffällige Inhalte für deine Social Media Kanäle zu produzieren"
        ],
        "icon" => "3d",
        "category" => "social media",
        "isFavorite" => false
    ]
];

// JSON-Daten ausgeben
echo json_encode($data);
?>