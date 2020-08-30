document.getElementById("next").addEventListener("click", personCompany);
document.getElementById("answer").addEventListener("keyup", function (event){
    if (event.key === 'Enter') {
        document.getElementById("next").click;
    }
});

function personCompany(){
    document.getElementById("next").removeEventListener("click", personCompany);
    if (document.getElementById("answer").value == "Person" || document.getElementById("answer").value == "person"){
        document.getElementById("question").innerHTML = "Do you know the person who sent this email?";
        document.getElementById("answer").placeholder = "Yes or No";
        document.getElementById("next").addEventListener("click", knowPerson);
    }
    else if (document.getElementById("answer").value == "Company" || document.getElementById("answer").value == "company"){
        document.getElementById("question").innerHTML = "Do you work for this company?";
        document.getElementById("answer").placeholder = "Yes or No";
        document.getElementById("next").addEventListener("click", yourCompany);
    }
    document.getElementById("answer").value = "";
}
//Stuff for the person section
function knowPerson(){
    document.getElementById("next").removeEventListener("click", knowPerson);
    if (document.getElementById("answer").value == "Yes" || document.getElementById("answer").value == "yes"){
        document.getElementById("question").innerHTML = "Are you certain this email is from this person? Maybe contact them through another means of communication if possible to ask.";
        document.getElementById("next").addEventListener("click", doubleCheck);
    }
    else if (document.getElementById("answer").value == "No" || document.getElementById("answer").value == "no"){
        document.getElementById("question").innerHTML = "Is this email regarding something you were expecting an email about?";
        document.getElementById("next").addEventListener("click", expectingEmail);
    }
    document.getElementById("answer").value = "";
}

function doubleCheck(){
    document.getElementById("next").removeEventListener("click", doubleCheck);
    if (document.getElementById("answer").value == "Yes" || document.getElementById("answer").value == "yes"){
        window.location.href = "resultN.html";
    }
    else if (document.getElementById("answer").value == "No" || document.getElementById("answer").value == "no"){
        window.location.href = "resultS.html";
    }
}


function expectingEmail(){
    document.getElementById("next").removeEventListener("click", expectingEmail);
    if (document.getElementById("answer").value == "Yes" || document.getElementById("answer").value == "yes"){
        window.location.href = "resultN.html";
    }
    else if (document.getElementById("answer").value == "No" || document.getElementById("answer").value == "no"){
        window.location.href = "resultS.html";
    }
}

//stuff for the company section
var CheckEmail = "";
var trustedExtensions = ["facebook.com", "google.com", "microsoft.com", "instagram.com", "twitter.com", "apple.com"]
function yourCompany() {
    document.getElementById("next").removeEventListener("click", yourCompany);
    if (document.getElementById("answer").value == "Yes" || document.getElementById("answer").value == "yes"){
        document.getElementById("question").innerHTML = "What is the extension of your work email address? (The part after the '@')";
        document.getElementById("answer").placeholder = "Enter work email extension";
        document.getElementById("next").addEventListener("click", getWorkEmail);
    }
    else if (document.getElementById("answer").value == "No" || document.getElementById("answer").value == "no"){
        document.getElementById("question").innerHTML = "Please enter the extension of the sender's email address (The part after the '@')";
        document.getElementById("answer").placeholder = "Enter sender's email extension";
        document.getElementById("next").addEventListener("click", checkExtension);
    }
    document.getElementById("answer").value = "";
}

function getWorkEmail() {
    document.getElementById("next").removeEventListener("click", getWorkEmail);
    CheckEmail = document.getElementById("answer").value;
    document.getElementById("question").innerHTML = "Please enter the extension of the sender's email address (The part after the '@')";
    document.getElementById("answer").placeholder = "Enter sender's email extenion";
    document.getElementById("next").addEventListener("click", checkExtension);
    document.getElementById("answer").value = "";
}

function checkExtension() {
    document.getElementById("next").removeEventListener("click", checkExtension);
    var senderEmail = document.getElementById("answer").value;
    var match = false;
    if (CheckEmail != ""){
        if (CheckEmail == senderEmail){
            match = true;
        }
    }
    else{
        for (i = 0; i < trustedExtensions.length; ++i){
            if (trustedExtensions[i] == senderEmail){
                match = true;
            }
        }
    }
    if (match == true){
        window.location.href = "resultN.html";
    }
    else if (match == false){
        window.location.href = "resultS.html";
    }
}

