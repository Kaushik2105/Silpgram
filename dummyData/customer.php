<?php
header('Content-Type: application/json');

// Database connection parameters
$servername = "localhost";
$username = "silpgram_customer_db";
$password = "suXJfcKM8p7rNtLZVmU6";
$dbname = "silpgram_customer_db";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// SQL query to select all data from the Customer table
$sql = "SELECT customer_id, name, address1, address2, address3, cart_product_ids, wishlist_product_ids, order_product_ids, order_statuses, product_image FROM Customer";
$result = $conn->query($sql);

// Array to hold the data
$customers = array();

if ($result->num_rows > 0) {
    // Fetch all rows and add to the array
    while($row = $result->fetch_assoc()) {
        $customers[] = $row;
    }
} else {
    echo json_encode(array("message" => "No records found."));
    exit();
}

// Close the database connection
$conn->close();

// Output the data in JSON format
echo json_encode($customers);
?>
