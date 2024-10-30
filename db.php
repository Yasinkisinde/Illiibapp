<?php
// Database credentials
$servername = "localhost";  // Usually "localhost"
$username = "root";         // Database username
$password = "";             // Database password
$dbname = "your_database";  // Your database name

// Create a connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>