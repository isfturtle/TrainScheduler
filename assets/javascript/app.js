database=firebase.database();

database.ref().on("value", function(snapshot){
	console.log(snapshot.val());
});

$("#submitTrain").on("click", function(){
	var name = $("#trainName").val().trim();
	var destination = $("#destination").val().trim();
	var firstTime = $("#firstTrainTime").val().trim();
	var frequency = $("#frequency").val().trim();
	database.ref().push({
		name: name,
		destination: destination,
		firstTime: firstTime,
		frequency: frequency
	});
	return false;
});

var query = firebase.database().ref("users").orderByKey();
query.once("value")
  .then(function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      var key = childSnapshot.key;
      var childData = childSnapshot.val();
      console.log(childData);
      $("#trainTableBody").append("<tr><td>"+childData.name+"</td><td>"+destination+"</td><td>"+"Next Train"+"</td><td>"+"Minutes"+"</td></tr>");
  });
});