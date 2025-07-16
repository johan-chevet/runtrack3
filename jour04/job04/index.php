 <?php
// $servername = "localhost";
// $username = "root";
// $password = "";
// $dbname = "utilisateurs";

// // Create connection
// $db = new mysqli($servername, $username, $password, $dbname);

// // Check connection
// if ($db->connect_error) {
//   die("Connection failed: " . $conn->connect_error);
// }
// echo "Connected successfully <br>";
// $query = "select * from utilisateurs";
// $result = $db->query($query);
// if ($result->num_rows) {
//   while($row = mysqli_fetch_assoc($result)) {
//     $jsonFormat = json_encode($row);
//     echo $jsonFormat;
//   }
// }
// $db->close();
?> 

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script type="text/javascript" src="./script.js"></script>
    <title>Jour04</title>
  </head>
  <body>
    <table>
      <tr>
        <th>ID</th>
        <th>NOM</th>
        <th>PRENOM</th>
        <th>EMAIL</th>
      </tr>
    </table>
  </body>
  </html>