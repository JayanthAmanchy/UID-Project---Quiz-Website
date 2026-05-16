function recieved(){
            let phone=document.forms["contact"]["num"].value
            let qury = document.forms['contact']['coments'].value
            let pattern = /^[0-9]{10}$/

            if (isNaN(phone) || phone=="" || !phone.match(pattern)){
                window.alert("Enter valid phone nummber")
                return false
            }
            if (qury.length<10){
                window.alert("Query cannot be less than 10 words")
                return false
            }
            document.getElementById("success").innerHTML="Your Query Has Been Submitted Successfully";
            document.getElementById("success").style.color="lightgreen";
            document.getElementById("success").style.fontWeight="bold";
            document.getElementById("success").style.marginTop="15px";
            return false;
        }