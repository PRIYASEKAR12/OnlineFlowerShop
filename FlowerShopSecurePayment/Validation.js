
function validateCardNumber() {
    var cardnum = document.getElementById("cardNumber").value;
    var regex = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
    var number = regex.test(cardnum);
    if (number) {
        document.getElementById("checkCardNumber").style.display = "none";
    }
    else {
        document.getElementById("checkCardNumber").style.display = "block"
    }
}
function validateCode() {
    var security = document.getElementById("securityCode").value;
    var regex = /^[0-9]{3}$/;
    var secureNumber = regex.test(security);
    if (secureNumber) {
        document.getElementById("checkCode").style.display = "none";
    }
    else {
        document.getElementById("checkCode").style.display = "block"
    }
}
function validateMonth() {
    var validMonth = document.getElementById("month").value;
    if (!validMonth==0) {
        document.getElementById("checkMonth").style.display = "none";
    }
    else {
        document.getElementById("checkMonth").style.display = "block"
    }
}

function validateYear() {
    var validYear = document.getElementById("year").value;
    if (!validYear==0) {
        document.getElementById("checkYear").style.display = "none";
    }
    else {
        document.getElementById("checkYear").style.display = "block"
    }
}
function validateName() {
    var userName = document.getElementById("name").value;
    var regex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    var name = regex.test(userName);
    if (name) {
        document.getElementById("checkName").style.display = "none";
    }
    else {
        document.getElementById("checkName").style.display = "block"
    }
}
function validateFirstAddress() {

    var address = document.getElementById("firstAddress").value;
    var regex = /^[a-zA-Z0-9]+(([',/. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    var validAddress = regex.test(address);
    if (validAddress) {
        document.getElementById("checkFirstAddress").style.display = "none";
    }
    else {
        document.getElementById("checkFirstAddress").style.display = "block"
    }
}
function validateSecondAddress() {

    var address = document.getElementById("secondAddress").value;
    var regex = /^[a-zA-Z0-9]+(([',/. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    var validAddress = regex.test(address);
    if (validAddress) {
        document.getElementById("checkSecondAddress").style.display = "none";
    }
    else {
        document.getElementById("checkSecondAddress").style.display = "block"
    }
    
}
function ValidateThirdAddress() {

    var address = document.getElementById("thirdAddress").value;
    var regex = /^[a-zA-Z0-9]+(([',/. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    var validAddress = regex.test(address);
    if (validAddress) {
        document.getElementById("checkThirdAddress").style.display = "none";
    }
    else {
        document.getElementById("checkThirdAddress").style.display = "block"
    }
}
function validateCountry() {
    var validCountry = document.getElementById("country").selectedIndex;
    if (!validCountry==0) {
        document.getElementById("checkCountry").style.display = "none";
    }
    else {
        document.getElementById("checkCountry").style.display = "block"
    }
}

function validateCity() {

    var city = document.getElementById("city").value;
    var regex = /^[a-zA-Z]+(([a-zA-Z ])?[a-zA-Z]*)*$/;
    var validCity = regex.test(city);
    if (validCity) {
        document.getElementById("checkCity").style.display = "none";
    }
    else {
        document.getElementById("checkCity").style.display = "block"
    }
}
function validateRegion() {

    var region = document.getElementById("region").value;
    var regex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    var validRegion = regex.test(region);
    if (validRegion) {
        document.getElementById("checkRegion").style.display = "none";
    }
    else {
        document.getElementById("checkRegion").style.display = "block"
    }
}

function validatePostCode() {

    var pin = document.getElementById("postCode").value;
    var regex = /^[0-9]{6}(?:-[0-9]{4})?$/;
    var validPin = regex.test(pin);
    if (validPin) {
        document.getElementById("checkPostCode").style.display = "none";
    }
    else {
        document.getElementById("checkPostCode").style.display = "block"
    }
}
function validateTelephone() {
    var phone = document.getElementById("telephone").value;
    var regex = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
    var validPhone = regex.test(phone);
    if (validPhone) {
        document.getElementById("checkTelephone").style.display = "none";
    }
    else {
        document.getElementById("checkTelephone").style.display = "block"
    }
    
}

function validateFax() {
    var fax = document.getElementById("fax").value;
  var regex = /^\+?[0-9]{6,}$/;
  var validFax = regex.test(fax);
    if (validFax) {
        document.getElementById("checkFax").style.display = "none";
    }
    else {
        document.getElementById("checkFax").style.display = "block"
    }
}


function validateEmail() {

    var mail = document.getElementById("emailAddress").value;
    var regex = /^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/;
    var validMail = regex.test(mail);
    if (validMail) {
        document.getElementById("checkEmail").style.display = "none"
    }
    else {
        document.getElementById("checkEmail").style.display = "block"
    }
}

function Submit() {
    var submitCard=document.getElementById("cardNumber").value.length;
    var submitCode=document.getElementById("securityCode").value.length;
    var submitName=document.getElementById("name").value.length;
    var submitAddress=document.getElementById("firstAddress").value.length;
    var submitCity=document.getElementById("city").value.length;
    var sumbitPost=document.getElementById("postCode").value.length;
    var submitEmail=document.getElementById("emailAddress").value.length;
    if(submitCard>0 && submitCode>0 && submitName>0 && submitAddress>0 && submitCity >0 && sumbitPost>0 && submitEmail >0){
        alert("payment is successful");
    }
    else{
    validateCardNumber();
    validateCode();
    validateName();
    validateYear();
    validateMonth();  
    validateFirstAddress();    
    validateCity(); 
    validateCountry();  
    validatePostCode();    
    validateEmail();
}
}