let password = "helloImNate7";
function Numbers(password){
    return /\d/.test(password);
}

function Letter(password){
    return /[a-zA-Z]/.test(password)
}

function Space(password){
    return /\s/.test(password)
}

if(password.length >=10 - 1 && (Numbers(password) == true) && (Letter(password) == true) && password.length <= 20 - 1 && (Space(password) == false)) {
    console.log("Success")
}
else {
    console.log("failure")}
//if(Numbers(password) == true ){
    //console.log("hi")
//}
//No nore than 20 characters
//No spaces
