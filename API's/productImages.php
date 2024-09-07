<?php
<?php
$host = 'localhost';  
$dbname = 'silpgram_customer_db';  
$username = 'silpgram_customer_db';  
$password = 'suXJfcKM8p7rNtLZVmU6';

try {
    // Create a PDO instance to connect to the database
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    // Set PDO error mode to exception
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // SQL query to select all product images
    $sql = "SELECT * FROM productImages";
    $stmt = $pdo->prepare($sql);
    $stmt->execute();

    // Fetch all product images as an associative array
    $productImages = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // Set the response header to JSON
    header('Content-Type: application/json');

    // Return the data in JSON format
    echo json_encode($productImages);

} catch (PDOException $e) {
    // Return error message if the connection fails
    echo json_encode(['error' => $e->getMessage()]);
}
?>