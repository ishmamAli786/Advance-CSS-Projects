var mybutton=document.getElementById('myBtn');
// when the user scrolls down 20px form the top of the document,show the button
window.onscroll=function(){
    scrollFunction();
}

function  scrollFunction(){
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        mybutton.style.display = "block";
    }
    else{
        mybutton.style.display="none";
    }
}




// when the user click the button, scroll to the top of the document


function topFunction(){
    document.getElementById.scrollTop=0; /// for safari
    document.documentElement.scrollTop = 0; /// for firefox, chrome IE and opera
}