//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyB0j_7taO45s2kb0HfEaezlYEmub6hKIqE",
      authDomain: "kwitter-89b86.firebaseapp.com",
      databaseURL: "https://kwitter-89b86-default-rtdb.firebaseio.com",
      projectId: "kwitter-89b86",
      storageBucket: "kwitter-89b86.appspot.com",
      messagingSenderId: "826339973473",
      appId: "1:826339973473:web:5f27bded27f8c3fd380d20"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

     user_name = localStorage.getItem("user_name");

     document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

     function addRoom()
     {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

            localStorage.setItem("room_name", room_name);

             window.location = "kwitter_page.html";
     }

     function getData()
      {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
          window.location = "kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
          window.location = "index.html";
}