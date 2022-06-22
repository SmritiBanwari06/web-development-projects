function validate(){
    var username = document.getElementById('username').value
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value
    var cpassword = document.getElementById('cpassword').value

    // console.log(username + email)
    checkusername(username)
    checkemail(email)
    checkpassword(password)
    checkpasswordsmatch(password , cpassword)
}
function checkusername(username){
    if(username.length > 7){
        document.getElementById('username').classList.add('success')
        document.getElementById('username').classList.replace('error','success')
        document.getElementById('invalid username').innerHTML=''
    }
    else{
        document.getElementById('username').classList.add('error')
        document.getElementById('invalid username').innerText='username must be 8 letters long'
    }
}

function checkemail(email){
    if(email.length > 8 && email.includes('@gmail')){
        document.getElementById('email').classList.add('success')
        document.getElementById('email').classList.replace('error','success')
        document.getElementById('invalid email').innerHTML=''
    }
    else{
        document.getElementById('email').classList.add('error')
        document.getElementById('invalid email').innerText='email must include @gmail , 8 letters long'
    }
}

function checkpassword(password){
    if(password.length > 7 && password.includes('.')){
        document.getElementById('password').classList.add('success')
        document.getElementById('password').classList.replace('error','success')
        document.getElementById('invalid password').innerHTML=''
    }
    else{
        document.getElementById('password').classList.add('error')
        document.getElementById('invalid password').innerText='password must be 8 letters long and should include .'
    }
}
function checkpasswordsmatch(password,cpassword){
    if(password==cpassword && password!=''){
        document.getElementById('cpassword').classList.add('success')
        document.getElementById('cpassword').classList.replace('error','success')
        document.getElementById('invalid cpassword').innerHTML=''
    }
    else{
        document.getElementById('cpassword').classList.add('error')
        document.getElementById('invalid cpassword').innerText='password not matched .'
    }
}