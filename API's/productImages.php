<?php
<?php
$host = 'localhost';  
$dbname = 'silpgram_customer_db';  
$username = 'silpgram_customer_db';  
$password = 'suXJfcKM8p7rNtLZVmU6';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $sql = "SELECT * FROM productImages";
    $stmt = $pdo->prepare($sql);
    $stmt->execute();

    $productImages = $stmt->fetchAll(PDO::FETCH_ASSOC);

    header('Content-Type: application/json');

    // Return the data in JSON format
    echo json_encode($productImages);

} catch (PDOException $e) {
    // Return error message if the connection fails
    echo json_encode(['error' => $e->getMessage()]);
}
?>
