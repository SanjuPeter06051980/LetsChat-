var firebaseConfig = {
    apiKey: "AIzaSyA6HkAImcVPeCTpmQtILuDJiMPAuLeAH8U",
    authDomain: "letschat-7f39a.firebaseapp.com",
    databaseURL: "https://letschat-7f39a-default-rtdb.firebaseio.com",
    projectId: "letschat-7f39a",
    storageBucket: "letschat-7f39a.appspot.com",
    messagingSenderId: "973932406353",
    appId: "1:973932406353:web:32b29ff97e2acd35693a70",
  };
  
 firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("usersname");
 document.getElementById("usernamee").innerHTML = "Welcome " + user_name + "!";

 function addRoom(){
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"
  });
 localStorage.setItem("room_name", room_name);
 window.location = "message_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  Room_names = childKey;
  row = "<div class='room_name' id ="+Room_names+" onclick ='redirectToRoomName(this.id)'> #" + Room_names + "</div><hr>";
  document.getElementById("output").innerHTML +=row;
 });});}
getData();

function redirectToRoomName(){
 localStorage.setItem("room_name", name);
 window.location ="message_page.html";
}
function Logout(){
 localStorage.removeItem("user_name");
 localStorage.removeItem("room_name");
 window.location ="index.html";
}