
// Get the different modals and btns
var modal = document.getElementById('regModal');
var btn = document.getElementById("regBtn");
var closeReg = document.getElementById("closeReg");
var regFinishedModal = document.getElementById('regFinishedModal');
var finishedBtn = document.getElementById('regFinishedBtn');
var closeFinished = document.getElementById("closeFinished");
var browseModal =  document.getElementById('browseModal');
var closeBrowse = document.getElementById('closeBrowse');
var infoModal = document.getElementById('infoModal');
var infoBtn = document.getElementById('infoBtn1');
var closeInfo = document.getElementById('closeInfo');
var msgFinishedModal = document.getElementById('msgSentModal');
var sendMsgBtn = document.getElementById('sendBtn');
var closeMsgSent = document.getElementById('closeMsgSent');
var emailValue = document.getElementById('email');


// When the user clicks the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
closeReg.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

finishedBtn.onclick = function() {
    regFinishedModal.style.display = "block";
    modal.style.display = "none";

}

closeFinished.onclick = function() {
    regFinishedModal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == regFinishedModal) {
        regFinishedModal.style.display = "none";
    }
}

searchBtn1.onclick = function(event) {
    browseModal.style.display = "block";
}

closeBrowse.onclick = function() {
    browseModal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == browseModal) {
        browseModal.style.display = "none";
    }
}

infoBtn.onclick = function(event) {
    infoModal.style.display = "block";
    browseModal.style.display = "none";
}

closeInfo.onclick = function() {
    browseModal.style.display = "block";
    infoModal.style.display = "none";

}

window.onclick = function(event) {
    if (event.target == infoModal) {
        infoModal.style.display = "none";
    }
}

sendMsgBtn.onclick = function() {
        msgFinishedModal.style.display = "block";
        infoModal.style.display = "none";
}


closeMsgSent.onclick = function() {
    msgFinishedModal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == regFinishedModal) {
        msgFinishedModal.style.display = "none";
    }
}

function checkForm(form){
    var inputs = form.getElementsByTagName('input');
    for(var i = 0; i < inputs.length; i++){
        if(inputs[i].hasAttribute("required")){
            if(inputs[i].value == ""){
                alert("Please fill in all fields.");
                return false;
            }
        }
    }
    return true;
}


