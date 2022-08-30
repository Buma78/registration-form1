function validate() {
    let firstNameInput = document.getElementById('first-name').value
    let lastNameInput = document.getElementById('last-name').value
    let emailInput = document.getElementById('email').value
    let phoneNumberInput = document.getElementById('phonenumber').value
    let batchNumInput = document.getElementById('batchnum').value
    let moduleNumInput = document.getElementById('modulenum').value
    let tncInput = document.getElementById('tnC').checked

    // console.log(firstNameInput,lastNameInput,emailInput,cityInput,stateInput,zipInput,tncInput)
      let error = false
    if(isNaN(firstNameInput) && firstNameInput.length>=3){
        document.getElementById('first-name-valid').style.display = 'block'
        document.getElementById('first-name-invalid').style.display = 'none'  
    }
      else{
        document.getElementById('first-name-invalid').style.display = 'block'
        document.getElementById('first-name-valid').style.display = 'none' 
        error = true
    }

    if(isNaN(lastNameInput) && lastNameInput.length >=3){
        document.getElementById('last-name-valid').style.display = 'block'
        document.getElementById('last-name-invalid').style.display = 'none'  
    }
      else{
        document.getElementById('last-name-invalid').style.display = 'block'
        document.getElementById('last-name-valid').style.display = 'none' 
        error = true
    }
    
    if(emailInput.length && emailInput.includes('@')&&emailInput.includes('.')&& emailInput.lastIndexOf('.')<=emailInput.length-3 && emailInput.indexOf("@")!=0){
        document.getElementById('email-valid').style.display = 'block'
        document.getElementById('email-invalid').style.display = 'none'  
    }
      else{
        document.getElementById('email-invalid').style.display = 'block'
        document.getElementById('email-valid').style.display = 'none' 
        error = true    
    }

    if(!isNaN(phoneNumberInput) && phoneNumberInput.length==10){
        document.getElementById('phonenumber-valid').style.display = 'block'
        document.getElementById('phonenumber-invalid').style.display = 'none'  
    }
      else{
        document.getElementById('phonenumber-invalid').style.display = 'block'
        document.getElementById('phonenumber-valid').style.display = 'none' 
        error = true
    }

    if(batchNumInput!=='none'){
        document.getElementById('batch-valid').style.display = 'block'
        document.getElementById('batch-invalid').style.display = 'none'  
    }
      else{
        document.getElementById('batch-invalid').style.display = 'block'
        document.getElementById('batch-valid').style.display = 'none' 
        error = true
    }

    if(moduleNumInput!=='none'){
        document.getElementById('module-valid').style.display = 'block'
        document.getElementById('module-invalid').style.display = 'none'  
    }
      else{
        document.getElementById('module-invalid').style.display = 'block'
        document.getElementById('module-valid').style.display = 'none' 
        error = true
    }

    if(tncInput){
        document.getElementById('tnc-invalid').style.display = 'none'
    }
    else{
        document.getElementById('tnc-invalid').style.display = 'block'
        error = true
    }
     
    if(!error){
        alert('your details have been submitted sucessfully!')

        document.getElementById('first-name').value=''
        document.getElementById('last-name').value=''
        document.getElementById('email').value=''
        document.getElementById('phonenumber').value=''
        document.getElementById('batchnum').value='none'
        document.getElementById('modulenum').value='none'
        document.getElementById('tnC').checked= false
        
        document.getElementById('first-name-valid').style.display = 'none' 
        document.getElementById('last-name-valid').style.display = 'none'
        document.getElementById('email-valid').style.display = 'none'  
        document.getElementById('phonenumber-valid').style.display = 'none' 
        document.getElementById('batch-valid').style.display = 'none'
        document.getElementById('module-valid').style.display = 'none'  
    }
    
    
}