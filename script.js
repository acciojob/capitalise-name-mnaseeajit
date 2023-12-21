//your JS code here. If required.

            var inputField = document.getElementById('fname');

            // Add event listener to input field
            inputField.addEventListener('blur', function () {
                // Convert the content to uppercase
                inputField.value = inputField.value.toUpperCase();
            });
      