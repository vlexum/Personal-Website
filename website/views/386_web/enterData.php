<!DOCTYPE html>
<html>
    <head>
        <title>Upload</title>
    </head>
    <body>
        <p>
        <?php

          include ('connect-sql.php');

          $Make = filter_input(INPUT_POST, 'make');
          $Model = filter_input(INPUT_POST, 'model');
          $Year = filter_input(INPUT_POST, 'year');
          $Mileage = filter_input(INPUT_POST, 'mileage');
          $Color = filter_input(INPUT_POST, 'color');
          $sql = "INSERT INTO ondemandcar.vehicle (make, model, carYear, mileage, color) VALUES ('$Make','$Model','$Year','$Mileage','$Color')";

          //Verify Connection
          if( $dbcon -> query($sql)){
            echo "New vehicle is inserted successfully";
          }
          else{
            echo "Error: ".$sql ."<br>". $dbcon->error;
          }

          //close connection
          $dbcon->close();
          ?> 

         <a href="/386_web/HomePage.html">
					<button>Back to homepage</button>
				</a>
        </p>
    </body>
</html>