<?php

// Connexion à la base de données
$hostname = "localhost";
$username = "root";
$password = "";
$dbname = "utilisateurs";

// Créer connexion
$pdo = new PDO('mysql:host=localhost;dbname=utilisateurs', 'root', '');
// Récupération des utilisateurs dans la base de données
$query = $pdo->query('SELECT * FROM utilisateurs');
$utilisateurs = $query->fetchAll(PDO::FETCH_ASSOC);
// Affichage du résultat en JSON
echo json_encode($utilisateurs);
?>