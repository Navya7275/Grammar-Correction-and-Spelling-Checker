document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const textInput = document.querySelector('#text');
    const fileInput = document.querySelector('#file');
    const errorMessage = document.querySelector('#error-message');
    const interactiveImages = document.querySelectorAll('.interactive-image');

    // Automatically clear form inputs when the page loads
    form.reset();

    // Validate file input on form submission
    form.addEventListener('submit', function (event) {
        const filePath = fileInput.value;
        const allowedExtensions = /(\.pdf|\.pptx)$/i;

        // File validation
        if (filePath && !allowedExtensions.exec(filePath)) {
            errorMessage.textContent = 'Please upload a valid .pdf or .pptx file.';
            errorMessage.style.display = 'block';
            fileInput.value = ''; // Clear the file input
            event.preventDefault();
            return;
        }

        errorMessage.style.display = 'none'; // Clear error if everything is valid
    });

    // Clear error message when the file input changes
    fileInput.addEventListener('change', function () {
        errorMessage.style.display = 'none';
    });

    // Interactive image hover effect
    interactiveImages.forEach(image => {
        image.addEventListener('mouseover', () => {
            image.style.transform = 'scale(1.2)';
        });
        image.addEventListener('mouseout', () => {
            image.style.transform = 'scale(1)';
        });
    });

    // Add a reset button functionality to clear inputs
    const resetButton = document.querySelector('.secondary-btn');
    if (resetButton) {
        resetButton.addEventListener('click', function () {
            textInput.value = ''; // Clear the text area
            fileInput.value = ''; // Clear the file input
            errorMessage.style.display = 'none'; // Hide error messages
        });
    }
});
