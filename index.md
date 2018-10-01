---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
---
<link rel="stylesheet" href="{{ "/assets/main.css, " | prepend: site.baseurl }}" >
<head>
<title>Cypress Bay Broward Highschool high school GPA calculator</title>
<meta name="keywords" content="highschool, High school, gpa, GPA, broward, Broward, Cypress bay, Cypress, Cypress bay highschool, cypress bay high school, cypress bay gpa calculator, gpa calculator, cypress gpa calculator, please give me traffic, gpa calculator cyprses, broward gpa calculator, gpa calculator broward">
</head>
<body>
<script type="text/javascript" src="/salaleguas/assets/script.js"></script>
<link rel="stylesheet" type="text/css" href="/assets/main.css" media = "screen,projection"/>
<div id = "introduction">


    
    
                <h3 id ="GPAS1">Unweighted GPA: </h3>
                <h3 id = "GPAS2">Weighted GPA: </h3>
            
            
                </div>
    <h2>Use the buttons to add and remove classes.</h2>
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
	<h3><a href = "{{"/manual" | prepend: site.baseurl }}">This</a> might help you.</h3>

	</body>
	


