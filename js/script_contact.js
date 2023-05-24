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

    var computedStyles = window.getComputedStyle(element); /// stilurile calculate 
    console.log("Stiluri calculate:");
    console.log(computedStyles);

    var rect = element.getBoundingClientRect(); /// dimensiunile și pozitia
    console.log("Poziție și dimensiuni:");
    console.log(rect);
};

function handleCheckboxChange(event) {
    if (event.target.checked) {
        alert("Checkbox is checked!");
    }
    if (!event.currentTarget.checked) {
        alert("Checkbox is unchecked!");
    }
}
document.addEventListener("DOMContentLoaded", function() {
    // Add a change event listener to the checkbox
    var checkbox = document.querySelector("#mycheck");
    checkbox.addEventListener("change", handleCheckboxChange);
});

document.addEventListener("DOMContentLoaded", function() {
    const list = document.getElementsByTagName("UL")[0];
    list.getElementsByClassName("link1")[0].textContent = "tc@redactie.com";
    let p = document.createElement("li");
    p.innerHTML = "tx@revista.com";

    list.appendChild(p);
    p.addEventListener(("click"), function(event) {
        event.target.remove();
        list.style.transition = "color 5s";
        list.style.color = "red";
    })
});

function validateForm() {
    var phoneNumberInput = document.getElementById("phone");
    var phoneNumberPattern = /^\d{10}$/; // expresia regulata pentru un numar de telefon de 10 cifre

    if (!phoneNumberPattern.test(phoneNumberInput.value)) {
        alert("Numărul de telefon nu este valid!");
        return false;
    }
}

function func1(event) {
    alert("Adresa email 1");
    if (document.getElementById("mycheck").checked) {
        event.stopPropagation();
    }
}

function func2() {
    alert("Lista Neordonata");
}