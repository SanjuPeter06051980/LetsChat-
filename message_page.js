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

 user_name= localStorage.getItem("usersname");
 room_name= localStorage.getItem("room_name");

 function send()
{
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
             name:user_name,
      message:msg,
      likes:0
      });
      document.getElementById("msg").value="";
      }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;

nam = message_data['name'];
message = message_data['message'];
like = message_data['likes'];
name_with_tag= "<h4>"+nam+"<img class='user_tick' src='tick.png'></h4>";
message_with_tag="<h4 class='message_h4'>"+message+"</h4>";
like_buton="<button class='btn-btn-warning' id="+firebase_message_id+" value="+like+" onclick = 'updateLike(this.id)'>";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like:"+like+"</span></button><hr>";
row= name_with_tag + message_with_tag + like_buton + span_with_tag;
document.getElementById("output").innerHTML+=row;

      } });  }); }
getData();

function updateLike(message_id){
      button_id= message_id;
      likes= document.getElementById(button_id).value;
      updated_likes= Number(likes) + 1;

      firebase.database().ref(room_name).child(message_id).update({
            likes: updated_likes
      });
}
function Logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location ="index.html";
}