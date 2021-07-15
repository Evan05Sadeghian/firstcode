const userInput = document.getElementById("userNameInput");
const submitBtn = document.getElementById("submit");
​
var key = "2ffe659d";
​
submitBtn.addEventListener("click", function (event) {
	event.preventDefault();
​
	var Film = userInput.value;
​
	if (!Film) {
		return;
	}
​
	fetch(`http://www.omdbapi.com/?apikey=${key}&t=${Film}`)
		.then(function (response) {
			return response.json();
		})
		.then(function (data) {
			console.log("data", data);
​
			if (data.Error === "Film NOT Found!") {
				console.log("Please Try Agian");
			}
		})
		.catch(function (error) {
			console.log("Catch Error", error);
		});
});