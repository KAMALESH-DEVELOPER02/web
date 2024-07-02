function changeColor() {
    var button = document.getElementById('color');
    var currentColor = button.style.backgroundColor;
    if (currentColor === 'rgb(0, 123, 255)') { 
        button.style.backgroundColor = '#28a745'; 
    } else {
        button.style.backgroundColor = '#007bff';
    }
}
