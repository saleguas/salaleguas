---
layout: page
title: Unweighted GPA predictor
permalink: /unweightedbrowardpredictor/
---
<head>
<meta name="keywords" content="broward gpa predictor, predictor, gpa predictor, cypress bay gpa predictor">
<script type="text/javascript" src="/assets/predict.js"></script>
<link rel="stylesheet" href='/assets/main.css'>
<link rel="stylesheet" href="/assets/inputs.css">
<title>Unweighted GPA predictor</title>
</head>
<body>
<h4>Unweighted only. Should work for Broward.</h4>

<input placeholder = "CURRENT GPA" type="number" step = ".00001" name="psw" id = "currentg">
<input placeholder = "CURRENT CREDITS" type="number" step = ".00001" name="psw" id = "currentc">
<div id = "newClasses">

<input type = "button" onclick="add_fields_predict()" value = "Add class"/>
<input type = "button" onclick="removeInput_predict()" value = "Remove class"/>
<script>setup();</script>
</div>

<input type = "button" onclick="calculatePredict()" value = "Predict"/>

<h1 id ="GPAS"></h1>

</body>