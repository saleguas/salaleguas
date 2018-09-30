
var classID = 0;
/*function add()
{
    let numOne = document.getElementById('currentGpa').value;
    numOne *= 2;
    document.write(numOne);
}*/
var room = 1;
function add_fields() {
    classID++;
    room++;
    var objTo = document.getElementById('wrapper')
    var divtest = document.createElement("div");
    

 //document.getElementById('wrapper').innerHTML += '<input class="names" placeholder="Course name" type="text" id = "textOne">';
   // document.getElementById('wrapper').innerHTML += '<select class = "grades" id = "textTwo"><option value = -1>--</option><option value = 4>A</option><option value = 3>B+</option><option value = 3>B</option><option value = 2>C+</option> <option value = 2>C</option><option value = 1>D+</option><option value = 1>D</option><option value = 0>F</option></select>';
   // document.getElementById('wrapper').innerHTML += '<input class="credits" placeholder="Credits" type="number" id = "textOne">';
    divtest.innerHTML = '<span class = "added" ><input class="names" placeholder="Course name" type="text" id = classID><select class = "grades" id = classID><option value = -1>--</option><option value = 4>A</option><option value = 3.5>B+</option><option value = 3>B</option><option value = 2.5>C+</option> <option value = 2>C</option><option value = 1.5>D+</option><option value = 1>D</option><option value = 0>F</option></select><select class = "classType" id = "classType"><option value = -1>--</option><option value = 2>AICE</option><option value = 2>AP</option><option value = 1>Honors</option><option value = 0>Regular</option></select><input class="credits" placeholder="Credits" type="number" step = ".5" id = classID></span>'
    objTo.appendChild(divtest);
    

}
function calculate(){
    var theWeighted = calculateWeighted();
    var theUnWeighted = calculateUnweighted();
    document.getElementById('GPAS1').innerHTML =  '<h4 id ="GPAS1">Unweighted GPA:' + theUnWeighted + ' </h4>';
    document.getElementById('GPAS2').innerHTML =  '<h4 id ="GPAS1">Weighted GPA:' + theWeighted + ' </h4>';

}
function calculateWeighted(){
    let total = 0;
    let creditsTotal = 0;

    let classGrades = document.getElementsByClassName("grades");

    let classCredits = document.getElementsByClassName("credits");

    let classType = document.getElementsByClassName("classType");
    for(let x = 0; x < classGrades.length; x++)
    {
        let currentCredit = Number(classCredits[x].value)
        let currentGrade = Number(classGrades[x].value) + Number(classType[x].value);
        total += (currentCredit * currentGrade);
        creditsTotal += currentCredit;
    }
    return (total / creditsTotal);


}
function calculateUnweighted(){
    let total = 0;
    let creditsTotal = 0;
    let classGrades = document.getElementsByClassName("grades");
    let classCredits = document.getElementsByClassName("credits");
    for(let x = 0; x < classGrades.length; x++)
    {
        let currentCredit = Number(classCredits[x].value);
        let currentGrade = Number(Math.floor(classGrades[x].value));
        total += (currentCredit * currentGrade);
        creditsTotal += currentCredit;
    }
    return (total / creditsTotal);

}



function removeInput()
{
    var items = document.getElementsByClassName("added");
    var len = items.length - 1;
        items[len].parentNode.removeChild(items[len]);
    
}