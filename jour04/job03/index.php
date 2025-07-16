<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./style.css">
    <script type="text/javascript" src="./script.js"></script>
    <title>Jour04</title>
  </head>
  <body>
    <form>
      <label for="id">Id:</label>
      <input id="id" type="text">
      <label for="name">Name:</label>
      <input id="name" type="text">
      <label for="type">Type:</label>
      <select id="type">
        <option value="" selected>Choose here</option>
      </select>
      <input type="button" id="filter" name="filter" value="filter" onclick="filterPokemon()">
    </form>
    <!-- <div class="pokemon-list"></div> -->
  </body>
  </html>