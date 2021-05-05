function validate(){
    
    var firstName = document.getElementById("fname").value;
    var regexPattern = /[^a-z]/i
    var validFirstName = regexPattern.test(firstName);

    console.log("---------," + firstName);
    if(firstName.length <= 0){
      alert("Please enter first name")
//        firstName.focus();
      return false;
    }
    
    if(validFirstName){
      alert("Enter a valid first name")
      return false;
    }
    
    var lastName = document.getElementById("lname").value;
    var regexPatt = /[^a-z]/i
    var validLastName = regexPatt.test(lastName);

    console.log(lastName);
    if(lastName.length <= 0){
      alert("Please enter last name")
      return false;
    }
    
    if(validLastName){
      alert("Enter a valid last name")
      return false;
    }
    
    var country = document.getElementById("country").value;
    console.log(country)

    if( country === "Choose a country"){
      alert("Please enter last name")
      return false;
    }
    
    if(validLastName){
      alert("Enter a valid last name")
      return false;
    }
    alert("successfully registered")
    return false
//    document.form1.submit()
    
}