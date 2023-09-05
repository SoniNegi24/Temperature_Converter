function convertTemperature() {
    // Get the input temperature and units
    const temperatureInput = document.getElementById("temperature");
    const temperature = parseFloat(temperatureInput.value);
    const fromUnit = document.getElementById("fromUnit").value;
    const toUnit = document.getElementById("toUnit").value;

    // Check if the input is a valid number
    if (!isNaN(temperature)) {
        let result;

        // Perform the conversion
        if (fromUnit === "celsius" && toUnit === "fahrenheit") {
            result = (temperature * 9/5) + 32; // Celsius to Fahrenheit
        } else if (fromUnit === "fahrenheit" && toUnit === "celsius") {
            result = (temperature - 32) * (5/9); // Fahrenheit to Celsius
        } else if (fromUnit === "celsius" && toUnit === "kelvin") {
            result = temperature + 273.15; // Celsius to Kelvin
        } else if (fromUnit === "kelvin" && toUnit === "celsius") {
            result = temperature - 273.15; // Kelvin to Celsius
        } else if (fromUnit === "fahrenheit" && toUnit === "kelvin") {
            result = (temperature - 32) * (5/9) + 273.15; // Fahrenheit to Kelvin
        } else if (fromUnit === "kelvin" && toUnit === "fahrenheit") {
            result = (temperature - 273.15) * 9/5 + 32; // Kelvin to Fahrenheit
        } else {
            result = temperature; // Same unit, no conversion needed
        }

        // Display the result
        const resultInput = document.getElementById("result");
        resultInput.value = result.toFixed(2);
    } else {
        alert("Please enter a valid number for the temperature.");
    }
}