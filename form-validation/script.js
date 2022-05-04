let username = document.getElementById('username');
let password = document.getElementById('password');

let form = document.getElementById('form');

form.addEventListener('submit', function (e) {

    e.preventDefault();
    checkInputs();
    
});

function checkInputs() {

    let submitFlag = true;

    //==== USERNAME CHECK
    if(username.value == ''){
        setErrorMsg(username, "username is empty");
        submitFlag = false;
    }
    else if(username.value.length < 3){
        setErrorMsg(username, "require min 3 character");
        submitFlag = false;
    } 
    else{
        setSuccessMsg(username, "");
        submitFlag = true;
    }
    
    //===== PASSWORD CHECK
    if(password.value == ""){
        setErrorMsg(password, "password is empty");
        submitFlag = false;
    }
    else if(password.value.length < 8){
        setErrorMsg(password, "minimum length should be 8");
        submitFlag = false;
    } 
    else{
        setSuccessMsg(password, "");
        submitFlag = true;
    }

    //==== SUBMIT FLAG
    if(submitFlag){
        let msg = document.getElementById('alert');
        console.log(msg.innerText)
        msg.style.cssText = "display:block; ";
    }

    //==== SUCCESS/ERROR MSG FUNCTIONS
    function setErrorMsg(input, message){
        let ele = input.nextElementSibling;
        ele.innerText = message;
        input.className = 'input-error';
    }
    function setSuccessMsg(input, message){
        let ele = input.nextElementSibling;
        ele.innerText = message;
        input.className = 'input-success';        
    }

}