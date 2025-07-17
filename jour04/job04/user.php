 <?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "utilisateurs";

// Create connection
$db = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($db->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
$query = "select * from utilisateurs";
$result = $db->query($query);
$json = mysqli_fetch_all ($result, MYSQLI_ASSOC);
echo json_encode($json);
$db->close();
?>