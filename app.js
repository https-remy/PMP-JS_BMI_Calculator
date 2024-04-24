// IMC = weight in kg / height² in m

const BMIData = [
  { name: "Maigreur", color: "midnightblue", range: [0, 18.5] },
  { name: "Bonne santé", color: "green", range: [18.5, 25] },
  { name: "Surpoids", color: "lightcoral", range: [25, 30] },
  { name: "Obésité modérée", color: "orange", range: [30, 35] },
  { name: "Obésité sévère", color: "crimson", range: [35, 40] },
  { name: "Obésité morbide", color: "purple", range: 40 },
];

const form = document.querySelector("form");
const inputs = document.querySelectorAll("input");
const displayBMI = document.querySelector(".bmi-value");
const result = document.querySelector(".result");

form.addEventListener("submit", handleForm);

function handleForm(event) {
	event.preventDefault();

	calculateBMI();
}

function calculateBMI() {
	const height = inputs[0].value;
	const weight = inputs[1].value;

	if (!height || !weight || height <= 0 || weight <= 0) {
		handleError();
		return;
	}

	const BMI = (weight / Math.pow(height / 100, 2)).toFixed(1);

	showResult(BMI);
}

function handleError() {
	displayBMI.textContent = "Wops !";
	displayBMI.style.color = "crimson";
	result.textContent = "Put correct values.";
}

function showResult(BMI) {
	const rank = BMIData.find((data) => {
		if (BMI >= data.range[0] && BMI < data.range[1])
			return data;
	});

	switch (rank.name) {
		case "Maigreur":
            result.style.color = rank.color;
            break;
        case "Bonne santé":
            result.style.color = rank.color;
            break;
        case "Surpoids":
            result.style.color = rank.color;
            break;
        case "Obésité modérée":
            result.style.color = rank.color;
            break;
        case "Obésité sévère":
            result.style.color = rank.color;
            break;
        case "Obésité morbide":
            result.style.color = rank.color;
            break;
	}


	result.textContent = rank.name;
	displayBMI.textContent = BMI;
}