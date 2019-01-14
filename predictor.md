---
layout: page
title: GPA predictor
permalink: /predictor/
---
<head>
<meta name="keywords" content="broward gpa predictor, predictor, gpa predictor, cypress bay gpa predictor">
<link rel="stylesheet" href='/assets/main.css'>
<link rel="stylesheet" href="/assets/inputs.css">
<script type="text/javascript" src="/assets/predict.js"></script>

<title>Weighted GPA predictor</title>
</head>
<body>
<h4>Enter in your current GPA and Credits. You can find these in virtural counselor under graduation information.</h4>

<input placeholder = "CURRENT GPA" type="number" step = ".00001" name="psw" id = "currentg">
<input placeholder = "CURRENT CREDITS" type="number" step = ".00001" name="psw" id = "currentc">

<table id = "tabl">
	<tr>
		<th>Classes</th>
		<th>Buttons</th>
	</tr>
	
	<tr>
		<th>
			<div id = "introduction"> 
				<h4 id ="GPAS">Weighted GPA: </h4>
				<h4 id = "GPAS2">Unweighted GPA: </h4>
			</div>
		</th>
		<th>
			<button onclick="add_fields_predict()">Add class</button>
			<button onclick="removeInput_predict()">Remove class</button>
			<button onclick="calculatePredict()">Calculate</button>
		</th>
	</tr>
</table>



</body>
