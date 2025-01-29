<?php
$host = 'localhost';  
$dbname = 'silpgram_customer_db';  
$username = 'silpgram_customer_db';  
$password = 'suXJfcKM8p7rNtLZVmU6'; 
try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $sql = "SELECT * FROM wishlist";
    $stmt = $pdo->prepare($sql);
    $stmt->execute();

    $wishlistItems = $stmt->fetchAll(PDO::FETCH_ASSOC);

    header('Content-Type: application/json');

    echo json_encode($wishlistItems);

} catch (PDOException $e) {
    echo json_encode(['error' => $e->getMessage()]);
}
?>
