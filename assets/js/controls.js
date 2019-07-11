// For the toggle button. It switches between the set of buttons and
// inputs
function toggleVisibility(id1, id2){
    if(document.getElementById(id1).style.display == "none"){
        [id1, id2] = [id2, id1]
    }

    var a = document.getElementById(id1);
    var b = document.getElementById(id2);
    a.style.display = "none";
    b.style.display = "block";
}


// Start Class Calculation

// Variables
var classID = 0;
var dock = document.getElementById("classDock");
// End variables

function createNameField()
{
    let nameField = document.createElement("input");
    nameField.setAttribute("type", "text");
    nameField.setAttribute("placeholder","Name");
    nameField.setAttribute("class", "form-control");
    return nameField;
}

function createGradeField(){
    let gradeField = document.createElement("select");
    gradeField.setAttribute("style","width: 100%")
    gradeField.setAttribute("class","grades selectpicker");
    gradeField.setAttribute("oninput", 'update("unweightedInput","unweightedOutput");update("weightedInput","weightedOutput");');
    let gradeOptions = [];
    for(var i = 0; i < 9; i++)
    {
        let tempElem = document.createElement("option");
        gradeOptions.push(tempElem);
    }

    gradeOptions[0].innerHTML="--"
    gradeOptions[0].setAttribute("value", 0);
    gradeOptions[1].innerHTML="A"
    gradeOptions[1].setAttribute("value", 4);
    gradeOptions[2].innerHTML="B+"
    gradeOptions[2].setAttribute("value", 3.5);
    gradeOptions[3].innerHTML="B"
    gradeOptions[3].setAttribute("value", 3);
    gradeOptions[4].innerHTML="C+"
    gradeOptions[4].setAttribute("value", 2.5);
    gradeOptions[5].innerHTML="C"
    gradeOptions[5].setAttribute("value", 2);
    gradeOptions[6].innerHTML="D+"
    gradeOptions[6].setAttribute("value", 1.5);
    gradeOptions[7].innerHTML="D"
    gradeOptions[7].setAttribute("value", 1);
    gradeOptions[8].innerHTML="F"
    gradeOptions[8].setAttribute("value", 0);

    for(var i=0; i < 9; i++){
        gradeField.appendChild(gradeOptions[i])
    }
    return gradeField;
}

function createClassField(){
    let classField = document.createElement("select");
    classField.setAttribute("class","classType");
    classField.setAttribute("style","width: 100%")
    classField.setAttribute("oninput", 'update("unweightedInput","unweightedOutput");update("weightedInput","weightedOutput");');
    let gradeOptions = [];
    for(var i = 0; i < 6; i++)
    {
        let tempElem = document.createElement("option");
        gradeOptions.push(tempElem);
    }

    gradeOptions[0].innerHTML="--"
    gradeOptions[0].setAttribute("value", 0);
    gradeOptions[1].innerHTML="AICE"
    gradeOptions[1].setAttribute("value", 2);
    gradeOptions[2].innerHTML="AP"
    gradeOptions[2].setAttribute("value", 2);
    gradeOptions[3].innerHTML="BC/Dual enrollment"
    gradeOptions[3].setAttribute("value", 2);
    gradeOptions[4].innerHTML="Honors"
    gradeOptions[4].setAttribute("value", 1);
    gradeOptions[5].innerHTML="Regular"
    gradeOptions[5].setAttribute("value", 0);


    for(var i=0; i < 6; i++){
        classField.appendChild(gradeOptions[i])
    }
    return classField;
}

function createCreditsField(){
    let creditsField = document.createElement("input");
    creditsField.setAttribute("placeholder","Credits");
    creditsField.setAttribute("type","number");
    creditsField.setAttribute("value", .5)
    creditsField.setAttribute("step", .5)
    creditsField.setAttribute("class", "credits")
    creditsField.setAttribute("style", "width: 100%")
    creditsField.setAttribute("oninput", 'update("unweightedInput","unweightedOutput");update("weightedInput","weightedOutput");');

    return creditsField;
}

function createCloseIcon(){
    let closeIcon = document.createElement("button");
    closeIcon.setAttribute("type", "button");
    closeIcon.setAttribute("class", "close")
    closeIcon.setAttribute("aria-label", "Close")

    let insideMatter = document.createElement("span");
    insideMatter.setAttribute("aria-hidden","true");
    insideMatter.innerHTML="&times;"
    closeIcon.appendChild(insideMatter);
    return closeIcon;
}

function createClass(){
    let outline = document.createElement("div");
    outline.setAttribute("class", "row gradeRow")
    let fields = []
    for(let i = 0; i < 5; i++)
    {
        let tempElem = document.createElement("div");
        fields.push(tempElem);
    }
    fields[0].appendChild(createNameField());
    fields[1].appendChild(createGradeField());
    fields[2].appendChild(createClassField());
    fields[3].appendChild(createCreditsField());
    fields[4].appendChild(createCloseIcon());
    fields[0].setAttribute("class","col-3")
    fields[1].setAttribute("class", "col-3")
    fields[2].setAttribute("class", "col-3")
    fields[3].setAttribute("class", "col-2")
    fields[4].setAttribute("class", "col-1 center-block")

    for(let i = 0; i < 5; i++)
    {
        outline.appendChild(fields[i]);
    }


    return outline;
}
function addClass()
{
    let newClass = createClass();
    newClass.setAttribute("id", classID);
    newClass.childNodes[4].setAttribute("onclick", "removeClass(" + classID + ")");

    classID++;
    dock.appendChild(newClass);
    update("unweightedInput","unweightedOutput");
    update("weightedInput","weightedOutput");

}

function removeClass(tempID=0)
{
    if(tempID != 0)
    {
        let elem = document.getElementById(tempID);
        elem.parentNode.removeChild(elem);
    }
    else
    {
        dock.removeChild(dock.lastChild);
    }
    update("unweightedInput","unweightedOutput");
    update("weightedInput","weightedOutput");

}

function update(input, output){
    let totalCredits = Number(document.getElementById("creditsInput").value);
    let totalInput = Number(document.getElementById(input).value) * totalCredits;
    let totalOutput = document.getElementById(output);

    let classArr = document.getElementsByClassName("gradeRow");
    
    for(let i=0; i < classArr.length; i++)
    {
        let currentClass = classArr[i];
        let currentCredit = Number(currentClass.getElementsByClassName("credits")[0].value);
        let currentGrade = Number(currentClass.getElementsByClassName("grades")[0].value);
        let currentType = 0;
        if(input === "weightedInput" && currentGrade >= 2)
        {
            currentType = Number(currentClass.getElementsByClassName("classType")[0].value);
        }
        if(currentGrade > 0)
        {
            totalInput += (currentGrade + currentType) * currentCredit;
        }
        totalCredits += currentCredit;
        console.log(classArr[i].id);

    }
    console.log(classID);

    totalOutput.innerHTML=(totalInput/totalCredits).toFixed(4);

}
