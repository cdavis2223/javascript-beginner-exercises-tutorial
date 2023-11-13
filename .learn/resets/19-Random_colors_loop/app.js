function getColor(colorNumber = 0) {
	//make sure the parameter is a number and not a string by converting the value to int:
	colorNumber = parseInt(colorNumber);
	switch (colorNumber) {
		case 1: return "red";

		case 2: return "yellow";

		case 3: return "blue";

		case 4: return "green";

		case 5: return "orange";

		case 6: return "purple";

		default: return "black";

	}
}

function getAllStudentColors() {
	for (let i = 0; i < 10; i++) {
		let color = getColor(Math.floor(Math.random() * 6) + 1)
		console.log(color);
	}
	
}

//call the function below with the number of students in the class and print on the console
getAllStudentColors();

