<?php
  $career_domain = $_POST['career_domain'];
  $skills = $_POST['skills'];
  $text = $_POST['text'];
if ($skills != "" )
{
    echo " Thank You !";
}
echo "career is ".$career_domain;

  // Connect to the database
  /*$conn = mysqli_connect('localhost', 'username', 'password', 'database');

  // Insert the form data into the database
  $sql = "INSERT INTO form_data (career_domain, skills, text) VALUES ('$career_domain', '$skills', '$text')";
  mysqli_query($conn, $sql);

  // Close the database connection
  mysqli_close($conn);*/
?>