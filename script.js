document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("form");
    var numChars = document.getElementById("num-chars");
    var uppercaseOption = document.getElementById("uppercase-option");
    var lowercaseOption = document.getElementById("lowercase-option");
    var specCharsOption = document.getElementById("spec-chars-option");
    var numbersOption = document.getElementById("numbers-option");
    var textarea = document.getElementById("pwd-output");
    const submitButton = document.getElementById("submit");

    submitButton.addEventListener("click", handleFormSubmit);

    function randLower() {
        var lowerChars = "abcdefghijklmnopqrstuvwxyz";
        return lowerChars.charAt(Math.floor(Math.random() * lowerChars.length));
    }

    function randUpper() {
        var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        return upperChars.charAt(Math.floor(Math.random() * upperChars.length));
    }

    function randSpec() {
        // Quotes ' and " omitted
        var specChars = "~!@#$%^&*()_-+={[}]|\:;<,>.?/";
        return specChars.charAt(Math.floor(Math.random() * specChars.length));
    }

    function randNum() {
        // Quotes ' and " omitted
        var digits = "0123456789";
        return digits.charAt(Math.floor(Math.random() * digits.length));
    }

    function chooseOption2() {
        var options = "12";
        return options.charAt(Math.floor(Math.random() * options.length));
    }

    function chooseOption3() {
        var options = "123";
        return options.charAt(Math.floor(Math.random() * options.length));
    }

    function chooseOption4() {
        var options = "1234";
        return options.charAt(Math.floor(Math.random() * options.length));
    }

    function handleFormSubmit(event) {
        event.preventDefault(); // Prevent form submission (if you're using a form element)

        // Retrieve form inputs
        const numCharsVal = numChars.value;
        const uppercaseVal = uppercaseOption.checked;
        const lowercaseVal = lowercaseOption.checked;
        const specCharsVal = specCharsOption.checked;
        const numbersVal = numbersOption.checked;

        // Perform calculations or operations based on the inputs
        let output = "";
        for (let i = 0; i < numCharsVal; i++) {
            if (uppercaseVal && lowercaseVal && specCharsVal && numbersVal) {
                // All options are checked
                const option = chooseOption4();
                if (option == 1) {
                    output += randLower();
                }
                else if (option == 2) {
                    output += randUpper();
                }
                else if (option == 3) {
                    output += randSpec();
                }
                else if (option == 4) {
                    output += randNum();
                }
            } else if (uppercaseVal && lowercaseVal && specCharsVal) {
                // Uppercase, lowercase, and special characters are checked
                const option = chooseOption3();
                if (option == 1) {
                    output += randLower();
                }
                else if (option == 2) {
                    output += randUpper();
                }
                else if (option == 3) {
                    output += randSpec();
                }
            } else if (uppercaseVal && lowercaseVal && numbersVal) {
                // Uppercase, lowercase, and numbers are checked
                const option = chooseOption3();
                if (option == 1) {
                    output += randLower();
                }
                else if (option == 2) {
                    output += randUpper();
                }
                else if (option == 3) {
                    output += randNum();
                }
            } else if (lowercaseVal && specCharsVal && numbersVal) {
                // Lowercase, special characters, and numbers are checked
                const option = chooseOption3();
                if (option == 1) {
                    output += randLower();
                }
                else if (option == 2) {
                    output += randSpec();
                }
                else if (option == 3) {
                    output += randNum();
                }
            } else if (uppercaseVal && lowercaseVal) {
                // Uppercase and lowercase are checked
                const option = chooseOption2();
                if (option == 1) {
                    output += randLower();
                }
                else if (option == 2) {
                    output += randUpper();
                }
            } else if (uppercaseVal && specCharsVal) {
                // Uppercase and special characters are checked
                const option = chooseOption2();
                if (option == 1) {
                    output += randUpper();
                }
                else if (option == 2) {
                    output += randSpec();
                }
            } else if (uppercaseVal && numbersVal) {
                // Uppercase and numbers are checked
                const option = chooseOption2();
                if (option == 1) {
                    output += randNum();
                }
                else if (option == 2) {
                    output += randUpper();
                }
            } else if (lowercaseVal && specCharsVal) {
                // Lowercase and special characters are checked
                const option = chooseOption2();
                if (option == 1) {
                    output += randLower();
                }
                else if (option == 2) {
                    output += randSpec();
                }
            } else if (lowercaseVal && numbersVal) {
                // Lowercase and numbers are checked
                const option = chooseOption2();
                if (option == 1) {
                    output += randLower();
                }
                else if (option == 2) {
                    output += randNum();
                }
            } else if (specCharsVal && numbersVal) {
                // Special characters and numbers are checked
                const option = chooseOption2();
                if (option == 1) {
                    output += randSpec();
                }
                else if (option == 2) {
                    output += randNum();
                }
            } else if (uppercaseVal) {
                // Only uppercase is checked
                output += randUpper();
            } else if (lowercaseVal) {
                // Only lowercase is checked
                output += randLower();
            } else if (specCharsVal) {
                // Only special characters are checked
                output += randSpec();
            } else if (numbersVal) {
                // Only numbers are checked
                output += randNum();
            } else {
                // No options are checked
            }
            


        }

        // Display the output
        textarea.value = output;
    }
});
