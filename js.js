   /* NAME:MINA ATEF
      SEC : 3   */
   function validateForm() {
    let p = document.getElementById("password").value;

     //let pf =document.getElementById("password").value.charAt(0);   
    let phone= document.getElementById("phone").value;

    if (p.charAt(0).toUpperCase()!= p.charAt(0) ){  
     	document.getElementById("pse").style.display="block";
		document.getElementById("pse").style.color="red";
		document.getElementById("pse").innerHTML="Must Srarts With Capital Letter";
                return false;}

    else if (p.length < 8) {
    	document.getElementById("pse").style.display="block";
		document.getElementById("pse").style.color="red";
		document.getElementById("pse").innerHTML="Must be at least 8 characters";
                return false;

    }
   

      else if (p.search(/[@#$%^&*]/i) < 0) {
      	document.getElementById("pse").style.display="block";
		document.getElementById("pse").style.color="red";
		document.getElementById("pse").innerHTML="Must contain @#$%^&*";
                return false;

    }

   else if (p.search(/[a-z]/i) < 0) {
   	document.getElementById("pse").style.display="block";
		document.getElementById("pse").style.color="red";
		document.getElementById("pse").innerHTML="Must contain small letter";
                return false;

    }

   else if (p.search(/[0-9]/) < 0) {
   	document.getElementById("pse").style.display="block";
		document.getElementById("pse").style.color="red";
		document.getElementById("pse").innerHTML="Must contain Numbers";
                return false;

    }
    else{document.getElementById("pse").style.display="none";
		}


	if(phone.length !=11 ){
		document.getElementById("pe").style.display="block";
		document.getElementById("pe").style.color="red";
		document.getElementById("pe").innerHTML="phone length=11";
		return false;
	}
	else if (phone.search(/^[0-9]+$/)<0 ){
		document.getElementById("pe").style.display="block";
		document.getElementById("pe").style.color="red";
		document.getElementById("pe").innerHTML="Must contain digits only";
		return false;

	}
	else if (phone.charAt(0)!="0" || phone.charAt(1)!="1"  ){
		document.getElementById("pe").style.display="block";
		document.getElementById("pe").style.color="red";
		document.getElementById("pe").innerHTML="Must stats with 01";
		return false;

	}else{document.getElementById("pe").style.display="none";

	}

    return true;
}

	
