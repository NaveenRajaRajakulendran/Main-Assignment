
function formprocess(){
    var name1=document.getElementById("name").value;
    var fathername1=document.getElementById("fathername").value;
    var email1=document.getElementById("Email").value;
    var DOB1=document.getElementById("dob").value;
    var mobileNo1=document.getElementById("mobile").value;
    var currentaddr1=document.getElementById("addr").value;
    var line1=document.getElementById("addressl2").value;
    var district1=document.getElementById("district").value;
    var zipcode1=document.getElementById("code").value;
    
    var regX=/^([a-zA-Z]{2,20})$/;
    var regX1=/^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,8})$/;
    var regX2=/^([0-9]{2})-([0-1][0-9])-([0-9]{4})$/;
    var regX3=/^[7-9]([0-9]{9})$/;
    
    
    if(name1==""){
        
        document.getElementById("labe1").innerHTML="First name is required";
        document.getElementById("labe1").style.visibility="visible";
        document.getElementById("name").style.borderColor="red";
        
        
    }
    else if(regX.test(name1)==false){
        document.getElementById("labe1").innerHTML="Enter a valid name";
        document.getElementById("labe1").style.visibility="visible";
        document.getElementById("name").style.borderColor="red";
        
        
        
    }
    
    
    if(fathername1==""){
        document.getElementById("labe2").innerHTML="Father name is required";
        document.getElementById("labe2").style.visibility="visible";
        document.getElementById("fathername").style.borderColor="red";
        
    }
    else if(regX.test(fathername1)==false){
        document.getElementById("labe2").innerHTML="Enter a valid name";
        document.getElementById("labe2").style.visibility="visible";
        document.getElementById("fathername").style.borderColor="red";
        
        
    }
    
    if(email1==""){
        document.getElementById("labe3").innerHTML="email address is required";
        document.getElementById("labe3").style.visibility="visible";
        document.getElementById("Email").style.borderColor="red";
       
    }
    else if(regX1.test(email1)==false){
        document.getElementById("labe3").innerHTML="Enter a valid email";
        document.getElementById("labe3").style.visibility="visible";
        document.getElementById("Email").style.borderColor="red";
        
    }
    if(DOB1==""){
        document.getElementById("labe4").innerHTML="Date of birth is required";
        document.getElementById("labe4").style.visibility="visible";
        document.getElementById("dob").style.borderColor="red";
        
    }
    else if(regX2.test(DOB1)==false){
        document.getElementById("labe4").innerHTML="Enter a valid date of birth";
        document.getElementById("labe4").style.visibility="visible";
        document.getElementById("dob").style.borderColor="red";
        
    }
    if(mobileNo1==""){
        document.getElementById("labe5").innerHTML="mobile number is required";
        document.getElementById("labe5").style.visibility="visible";
        document.getElementById("mobile").style.borderColor="red";
        return false;
    }
    else if(regX3.test(mobileNo1)==false){
        document.getElementById("labe5").innerHTML="Enter a valid mobile number";
        document.getElementById("labe5").style.visibility="visible";
        document.getElementById("mobile").style.borderColor="red";
        return false;
    }
    if(currentaddr1==""||line1==""||district1==""||zipcode1==""){
        document.getElementById("labe6").innerHTML="Enter all address properly";
        document.getElementById("labe6").style.visibility="visible";
        return false;
        
    }  
    else{
        return true;
    }
    
    
    
}

function checkedfunction(){
    var currentaddr1=document.getElementById("addr").value;
    var line1=document.getElementById("addressl2").value;
    var district1=document.getElementById("district").value;
    var zipcode1=document.getElementById("code").value;

    var currentaddrp=document.getElementById("addrp");
    var linep=document.getElementById("addressl2p");
    var districtp=document.getElementById("districtp");
    var zipcodep=document.getElementById("codep");
    var peraddr1=document.getElementById("check");
        if(peraddr1.checked==true){
            currentaddrp.value=currentaddr1;
            linep.value=line1;
            districtp.value=district1;
            zipcodep.value=zipcode1;
            return false;
            
    
        }
        else{
            currentaddrp.value="";
            linep.value="";
            districtp.value="";
            zipcodep.value="";
            return false;
            
        }
    
    }



