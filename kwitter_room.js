var firebaseConfig = {
      apiKey: "AIzaSyAzCuebQHgICunSMBaW3hIr2FXRrT7mYbA",
      authDomain: "swatter-4dae9.firebaseapp.com",
      databaseURL: "https://swatter-4dae9-default-rtdb.firebaseio.com",
      projectId: "swatter-4dae9",
      storageBucket: "swatter-4dae9.appspot.com",
      messagingSenderId: "365153507323",
      appId: "1:365153507323:web:d0fd653d938a84d18d5d5e"
    };
    
    
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML= "Welcome " + user_name;

    function add_room() {
      roomname = document.getElementById("room_name").value;
      firebase.database().ref("/").child(roomname).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name", roomname);
      window.location="kwitter_page.html";
      }

      function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;

row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML+=row;

});
});
}
getData();
function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("roomname", name);
      window.location="kwitter_page.html";
}

function log_out() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("roomname");
      window.location="index.html";
}