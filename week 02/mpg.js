<!DOCTYPE html>
<!--Makayla Steinmetz 1/24/2019-->
<html lang="en">
<head>
    <meta charset="UTF-8">	
    <title>Calculate Miles Per Gallon</title>
    <script>
        var miles = prompt("Enter miles driven");
        miles = parseFloat(miles);
        var gallons = prompt("Enter gallons of gas used");
        gallons = parseFloat(gallons);
        var mpg = miles/gallons;
        mpg = parseInt(mpg);
		document.write("<h1>The Miles Per Gallon Application</h1>");
		document.write("Miles driven = " + miles + "<br>" +
				    "Gallons of gas = " + gallons + "<br><br>" +
					"Miles per gallon = " + mpg + "<br><br>")
    </script>
</head>
<body>
    <main>
        <p>Thanks for using the Miles Per Gallon application</p>
    </main>
</body>
</html>
