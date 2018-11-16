---
layout: page
title: GPA calculator
permalink: /calculator/
---
<link rel="stylesheet" href='{{ "/assets/main.css" | prepend: site.baseurl }}' >
<head>
<title>Cypress Bay Broward Highschool high school GPA calculator</title>
<meta name="keywords" content="highschool, High school, gpa, GPA, broward, Broward, Cypress bay, Cypress, Cypress bay highschool, cypress bay high school, cypress bay gpa calculator, gpa calculator, cypress gpa calculator, please give me traffic, gpa calculator cypress, broward gpa calculator, gpa calculator broward, gpa predictor, gpa predictor cypress">
</head>
<body>
<script type="text/javascript" src="/salaleguas/assets/script.js"></script>
<link rel="stylesheet" type="text/css" href="/assets/main.css" media = "screen,projection"/>
<div id = "introduction"> 
<h4 id ="GPAS1">Unweighted GPA: </h4>
<h4 id = "GPAS2">Weighted GPA: </h4>
</div>
<h4>Use the buttons to add and remove classes.</h4>
<input type = "button" onclick="add_fields()" value = "Add class"/>
<input type = "button" onclick="removeInput()" value = "Remove class"/>

<table>
    <tr>
            <table>
                    <tr id = "demo">
                    <!-- <input class="currentWeightedGpa" placeholder="Weighted gpa(optional)" type="number" step = ".5" id = "currentWeightedGpa">
                        <input class="currentUnweightedGpa" placeholder="Unweighted gpa(optional)" type="number" step = ".5" id = "currentUnweightedGpa">
                        <input class="currentCredits" placeholder="Current Credits(optional)" type="text" step = ".5" id = "currentCredits">
                    -->
                    </tr>
                </table>
        <td>
                                                        
        </td>
        <div id = "wrapper">

        </div>

    </tr>
</table>

<input type = "button" onclick="calculate()" value = "Calculate"/>


<h1></h1>

<h2>Want to calculate it manually? </h2>
<h4><a href = "{{"/manual" | prepend: site.baseurl }}">This</a> might help you.</h4>

</body>



