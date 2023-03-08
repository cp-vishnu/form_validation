
var selectedItems = []
function validate() {
 
  var name = document.getElementById('name')
  var email = document.getElementById('email')
  var phone = document.getElementById('number')
  var password = document.getElementById('password')
  var gender_male = document.getElementById("male")
  var gender_female = document.getElementById("female")


  var name_error = document.getElementById('name-error')
  var email_error = document.getElementById("email-error")
  var number_error = document.getElementById('number-error')
  var password_error = document.getElementById("password-error")
  var gender_error = document.getElementById('gender-error')
  var skill = document.getElementsByName('check_list')
  var course = document.getElementById('course')
  var skill_error = document.getElementById('skill-error')
  var course_error = document.getElementById('course-error')

  var regex = /^[a-zA-Z ]{2,30}$/;
  var pattern = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
  var pass = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;


  if (name.value == "") {

    // name.style.border = "3px solid red"
    name.classList.remove('border-success')
    name.classList.add('border-danger')
    name_error.innerHTML = "please fill name"
    name_error.style.color = "red"
    return false
  } else {

    if (name.value.match(regex) == null) {
      // name.style.border = "1px solid red"
      name.classList.remove('border-success')
      name.classList.add('border-danger')
      name_error.innerHTML = "name should be in format"
      name_error.style.color = "red"
      return false
    } 
    
      // name.style.border = ""
    name_error.innerHTML = ""
    name.classList.remove('border-danger')
    name.classList.add('border-success')
      // return false
    
    

  }
  if (email.value == "") {
    email.classList.remove('border-success')
    email.classList.add('border-danger')
    email_error.innerHTML = "please fill your email"
    email_error.style.color = "red"
    return false
  } else {

    if (email.value.match(pattern) == null) {
      email.classList.remove('border-success')
      email.classList.add('border-danger')
      email_error.innerHTML = "email should be in format"
      email_error.style.color = "red"
      return false
    } email_error.innerHTML = ""
    email.classList.remove('border-danger')
    email.classList.add('border-success')
  }
  

  if (password.value == "") {
    password_error.innerHTML = "please enter your password"
    password_error.style.color = "red"
    return false
  } else {

    if (password.value.length >= 8 && password.value.length <= 12) {
      password_error.innerHTML = ""
      // return false
    }
    else{
      password_error.innerHTML = "password should in between 8 to 12"
      password_error.style.color = "red"
      return false
    }
   
    
   

  }

  
  if (phone.value == "") {
    phone.classList.remove('border-success')
    phone.classList.add('border-danger')
    number_error.innerHTML = "please enter your phone number"
    number_error.style.color = "red"
    return false
  } else {
    if (phone.value.length == 10) {

      number_error.innerHTML = ""
      phone.classList.remove('border-danger')
      phone.classList.add('border-success')
      // return false
    }else{
      console.log(phone.value.length)
      phone.classList.remove('border-success')
      phone.classList.add('border-danger')
      number_error.innerHTML = 'number should be 10'
      number_error.style.color = "red"
      
    }
    

  }

 if (gender_male.checked == false && gender_female.checked == false) {
    gender_error.innerHTML = "please provide a input"
    gender_error.style.color = "red"

    return false
  } else{
   gender_error.innerHTML = ""
  //  return false
  }
   
  
  for (i = 0; i < skill.length; i++) {
    
    if (skill[i].checked) {
      selectedItems.push(skill[i].value);
        }

      }

  if (selectedItems.length == 0)
  {
    skill_error.innerHTML ='please select '
    skill_error.style.color ='red'
    return false

  }
  if (selectedItems.length < 2)
  {
    skill_error.innerHTML = 'please select atleast two option'
    skill_error.style.color = 'red'
    return false
  }
  else{
    skill_error.innerHTML = ""
  }
  
  console.log(course.value)
  if (course.value =='select course'){
    course_error.innerHTML = 'please select course'
    course_error.style.color = 'red'
    return false
  }
  course_error.innerHTML =''

  while (selectedItems.length > 0) {
    selectedItems.pop();
  }
  // console.log()
  
}