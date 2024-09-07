<?php
header('Content-Type: application/json');

// Database connection parameters
$servername = "localhost";
$username = "silpgram_seller_db";
$password = "yh3mpaxdz7GsaAemb5EJ";
$dbname = "silpgram_seller_db";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die(json_encode(array("message" => "Connection failed: " . $conn->connect_error)));
}

// SQL query to select all data from the Seller table
$sql = "SELECT seller_id, name, phone_number, product_ids, product_quantities, pending_order_ids, completed_order_ids, cancelled_order_ids, admin_auth_cancel_ids FROM seller";
$result = $conn->query($sql);

// Array to hold the data
$sellers = array();

if ($result && $result->num_rows > 0) {
    // Fetch all rows and add to the array
    while($row = $result->fetch_assoc()) {
        $sellers[] = $row;
    }
} else {
    // No records found or query error
    echo json_encode(array("message" => "No records found or query error: " . $conn->error));
    $conn->close();
    exit();
}

// Close the database connection
$conn->close();

// Output the data in JSON format
echo json_encode($sellers);
?>
