function add_fields_predict() {
    var objTo = document.getElementById('tabl')
    var divtest = objTo.insertRow(-1)
	var cell = divtest.insertCell(-1)
	var cell2 = divtest.insertCell(-1)
    

 //document.getElementById('wrapper').innerHTML += '<input class="names" placeholder="Course name" type="text" id = "textOne">';
   // document.getElementById('wrapper').innerHTML += '<select class = "grades" id = "textTwo"><option value = -1>--</option><option value = 4>A</option><option value = 3>B+</option><option value = 3>B</option><option value = 2>C+</option> <option value = 2>C</option><option value = 1>D+</option><option value = 1>D</option><option value = 0>F</option></select>';
   // document.getElementById('wrapper').innerHTML += '<input class="credits" placeholder="Credits" type="number" id = "textOne">';
 cell.innerHTML += '<span class = "added"><input class="names" placeholder="Course name" type="text" id = classID><select class = "grades" id = classID><option value = -1>--</option><option value = 4>A</option><option value = 3.5>B+</option><option value = 3>B</option><option value = 2.5>C+</option> <option value = 2>C</option><option value = 1.5>D+</option><option value = 1>D</option><option value = 0>F</option><input class = "credits" value = ".5"placeholder = "credits" type = "number" step = ".5"></span>'
 cell2.innerHTML = '<button onclick="removeInput_predict()">Remove</button>'

 objTo.appendChild(divtest);
}

function setup(){
    for(let x = 0; x < 7; x++)
        add_fields_predict();
}
function removeInput_predict()
{
	if(document.getElementById("tabl").rows.length > 2)
		document.getElementById("tabl").deleteRow(-1);
    
    
}
function calculatePredict()
{
    var credits = Number(document.getElementById("currentc").value);
    var totalGP = Number(document.getElementById("currentg").value) * credits;
    let classGrades = document.getElementsByClassName("grades");
    let classCredits = document.getElementsByClassName("credits");
    for(let x = 0; x < classGrades.length; x++)
    {
        let currentCredit = Number(classCredits[x].value);
        let currentGrade = Number(Math.floor(classGrades[x].value));
        totalGP += (currentCredit * currentGrade);
        credits += currentCredit;
    }
    document.getElementById("GPAS").innerHTML = '<h4 id ="GPAS">Unweighted GPA: ' + (totalGP / credits).toString() + '</h4>';

}