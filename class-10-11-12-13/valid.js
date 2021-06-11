function validate(){
    
    var firstName = document.getElementById("fname").value;
    var regexPattern = /[a-z]/i
    var validFirstName = regexPattern.test(firstName);

    console.log("---------," + firstName);
    if(firstName.length <= 0){
      alert("Please enter first name")
//        firstName.focus();
      return false;
    }
    
    if(!validFirstName){
      alert("Enter a valid first name")
      return false;
    }
    
    var lastName = document.getElementById("lname").value;
    var validLastName = regexPattern.test(lastName);

    console.log("---------," + lastName);
    if(lastName.length <= 0){
      alert("Please enter last name")
      return false;
    }
    
    if(!validLastName){
      alert("Enter a valid last name")
      return false;
    }
    
    // email
    
    var email = document.getElementById("email").value;
    var regexPatternForEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    var validEmail = regexPatternForEmail.test(email);

    if(email.length <= 0){
      alert("Please enter email")
//        firstName.focus();
      return false;
    }
    
    if(!validEmail){
      alert("Enter a valid email")
      return false;
    }
    
    var country = document.getElementById("country").value;
    console.log(country)

    if( country === "Choose a country"){
      alert("Please enter country")
      return false;
    }
    
    alert("successfully registered")
    return false
//    document.form1.submit()
    
}