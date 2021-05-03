function validate(){
    
    var firstName = document.getElementById("fname").value;
    var regexPatt = /[^a-z]/i
    var validFirstName = regexPatt.test(firstName);

    console.log(firstName);
    if(!firstName){
      alert("Please enter first name")
      return false;
    }
    
    if(validFirstName){
      alert("Enter a valid first name")
      return false;
    }
    
    var lastName = document.getElementById("lname").value;
    var regexPatt = /[^a-z]/i
    var validFirstName = regexPatt.test(lastName);

    lastName = regexPatt.test(lastName);

    console.log(lastName);
    if(!lastName){
      alert("Please enter last name")
      return false;
    }
    
    if(lastName){
      alert("Enter a valid last name")
      return false;
    }
    alert("successfully registered")
    document.form1.submit()
    
}