const button = document.getElementById("button");

button.addEventListener("click", function(){
    alert("You have chosen to email me. I looked forward to your message!")
})

var emailImage2 = document.getElementById('button');
if (emailImage2 && emailImage2.style) {
    emailImage2.style.width = '100px';
    emailImage2.style.height = '50px';
}