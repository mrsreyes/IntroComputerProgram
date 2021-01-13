<!DOCTYPE html>
<!--Makayla Steinmetz 1/26/2019-->
<html lang="en">
<head>
    <meta charset="UTF-8">	
    <title>Calculate Area and Perimeter</title>
    <script>
        var length = prompt("Enter length");
        length = parseFloat(length);
        var width = prompt("Enter width");
        width = parseFloat(width);
        var area = length * width;
		var perimeter = (2 * length) + (2 * width);
    </script>
</head>
<body>
    <main>
	<script>
		document.write("<h1>The Area and Perimeter App</h1>" +
			"Length = " + length + "<br>" +
			"Width = " + width + "<br><br>" +
			"Area = " + area + "<br>" + 
			"Perimeter = " + perimeter + "<br><br>")
	</script>
        <p>Thanks for using Area and Perimeter application!</p>
    </main>
</body>
</html>
