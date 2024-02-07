function validateForm(){
    let yourName=document.getElementById("fullname").value;
    let yourEmail=document.getElementById("email").value;
    let yourBody=document.getElementById("emailContent").value;
    let nameRegrexp=/^[a-z ,.'-]+$/i;
    let emailRegrexp=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!nameRegrexp.test(yourName)){
        alert("Your name is invalid");
    }else if (!emailRegrexp.test(yourEmail)){
        alert("Your email is invalid");
    } else{
        alert("Thank you for your submission " + yourName);
        window.open('mailto:royraz2506@gmail.com?subject=New Mail from '+yourName+'&body='+yourBody);
    }
}