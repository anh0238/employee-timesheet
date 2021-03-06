
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
    var start; 
    var rate = 0; 
    var monthsWorked = 0;
    var totalBilled = 0;
    var currentDate;

    currentDate = moment().format("DD/MM/YY");
  
    // Capture Button Click
    $("#add-user").on("click",(event) => { 
    
        event.preventDefault();

        // Grabbed values from text boxes
        name = $("#name-input").val().trim();
        role = $("#role-input").val().trim();
        start = $("#start-input").val();
        rate = $("#rate-input").val();
        monthsWorked =

        console.log(name);
        console.log(role);
        console.log(start);
        console.log(rate);

        //add inputs to the table
        var employeeArray = [name, role, start, rate];
        var tablerow = $("<tr>");

        employeeArray.forEach(function(element) {
            var tabledata = $("<td>");
            tabledata.text(element);
            tablerow.append(tabledata);
            $("#employeeInfo").append(tablerow);
        })


        // Code for handling the push
        database.ref().push({
            name,
            role,
            start,
            rate,
            dateAdded: firebase.database.ServerValue.TIMESTAMP
        });

    });

// Firebase watcher .on("child_added"
    database.ref().on("child_added",(snapshot) => {
        // storing the snapshot.val() in a variable for convenience
        var sv = snapshot.val();

        // Console.loging the last user's data
        console.log(sv.name);
        console.log(sv.role);
        console.log(sv.start);
        console.log(sv.rate);
        console.log(sv.comment);

        // Handle the errors
    },(errorObject) => {
        console.log("Errors handled: " + errorObject.code);
    });

    database.ref().orderByChild("dateAdded").limitToLast(1).on("child_added", function(snapshot) {
        
    })
