---
layout: page
title: GPA calculator
permalink: /calculator/
---
<link rel="stylesheet" href="/assets/inputs.css">

<head>
<title>Cypress Bay Broward Highschool high school GPA calculator</title>
<meta name="keywords" content="highschool, High school, gpa, GPA, broward, Broward, Cypress bay, Cypress, Cypress bay highschool, cypress bay high school, cypress bay gpa calculator, gpa calculator, cypress gpa calculator, please give me traffic, gpa calculator cypress, broward gpa calculator, gpa calculator broward, gpa predictor, gpa predictor cypress">
</head>
<body>
<script type="text/javascript" src="/assets/script.js"></script>
<link rel="stylesheet" type="text/css" href="/assets/main.css" media = "screen,projection"/>
<h4>Use the buttons to add and remove classes.</h4>
<table id = "tabl">
	<tr>
		<th>Classes</th>
		<th>Buttons</th>
	</tr>
	
	<tr>
		<th>
			<div id = "introduction"> 
				<h4 id ="GPAS1">Unweighted GPA: </h4>
				<h4 id = "GPAS2">Weighted GPA: </h4>
			</div>
		</th>
		<th>
			<button onclick="add_fields()">Add class</button>
			<button onclick="removeInput()">Remove class</button>
			<button onclick="calculate()">Calculate</button>
		</th>
	</tr>
</table>
                                                       




<h1></h1>

<h2>Want to calculate it manually? </h2>
<h4><a href = "{{"/manual" | prepend: site.baseurl }}">This</a> might help you.</h4>

</body>



