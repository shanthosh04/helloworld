document.getElementById('button').addEventListener('click', () => {
    fetch('/name')
        .then(response => response.json())
        .then(data => {
            document.getElementById('apiResponse').innerText = data.message;
        });
});

