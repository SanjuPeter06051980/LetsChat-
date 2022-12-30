function addUser(){
    user_name= document.getElementById("usernam3").value;
    localStorage.setItem("usersname", user_name);
    window.location ="choice.html";
}