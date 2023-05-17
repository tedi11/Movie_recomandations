var counter = 0;
window.onload = function() {
    setInterval(function() {
        counter++;
        if (counter === 20) {
            alert('If you need any help, contact us!');
        }
    }, 1000);

    setTimeout(function() { alert("We are happy that you enjoy our site!"); }, 40000); //dupa 40 de secunde

    document.getElementById("logo").addEventListener("click", function(event) {
        event.preventDefault()

    });
    var element = document.getElementById("logo");

    // Obține stilurile calculate pentru element
    var computedStyles = window.getComputedStyle(element);
    console.log("Stiluri calculate:");
    console.log(computedStyles);

    // Obține dimensiunile și poziția elementului în pagină
    var rect = element.getBoundingClientRect();
    console.log("Poziție și dimensiuni:");
    console.log(rect);
};



function validateForm() {
    var phoneNumberInput = document.getElementById("phone");
    var phoneNumberPattern = /^\d{10}$/; // Expresia regulată pentru un număr de telefon de 10 cifre

    if (!phoneNumberPattern.test(phoneNumberInput.value)) {
        alert("Numărul de telefon nu este valid!");
        return false;
    }
}

function func1(event) {
    alert("Adresa email 1");
    if (document.getElementById("check").checked) {
        event.stopPropagation();
    }
}

function func2() {
    alert("Lista Neordonata");
}