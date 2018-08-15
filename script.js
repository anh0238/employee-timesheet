
// Initialize Firebase
    var config = {
    apiKey: "AIzaSyBQ-dRn63fTEudI6eIhQdNo5rrBW2uQdLI",
    authDomain: "employeedbm.firebaseapp.com",
    databaseURL: "https://employeedbm.firebaseio.com",
    projectId: "employeedbm",
    storageBucket: "",
    messagingSenderId: "1064254030692"
  };
  firebase.initializeApp(config);

// Create a variable to reference the database.
var database = firebase.database();

// Initial Values
var name = "";
var role = "";
var start = "";
var rate = "";
var comment = "";

// Capture Button Click
$("#add-user").on("click", function (event) {
    event.preventDefault();

    // Grabbed values from text boxes
    name = $("#name-input").val().trim();
    role = $("#role-input").val().trim();
    start = $("#start-input").val().trim();
    rate = $("#Monthly-input").val().trim();
    comment = $("#comment-input").val().trim();

    // Code for handling the push
    database.ref().push({
        name: name,
        role: role,
        start: start,
        rate: rate,
        comment: comment,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
    });

});

// Firebase watcher .on("child_added"
database.ref().on("child_added", function (snapshot) {
    // storing the snapshot.val() in a variable for convenience
    var sv = snapshot.val();

    // Console.loging the last user's data
    console.log(sv.name);
    console.log(sv.role);
    console.log(sv.start);
    console.log(sv.rate);
    console.log(sv.comment);

    // Change the HTML to reflect
    $("#name-display").text(sv.name);
    $("#role-display").text(sv.role);
    $("#start-display").text(sv.start);
    $("#Monthly-display").text(sv.rate); 
    $("#comment-display").text(sv.comment);

    // Handle the errors
}, function (errorObject) {
    console.log("Errors handled: " + errorObject.code);
});
