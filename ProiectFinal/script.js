window.onload = function() {
    var counter = 0;

    setInterval(function() {
        counter++;
        if (counter === 20) {
            alert('If you need any help, contact us!');
        }
    }, 1000);
};

var jsonUsers = [{
        "nume": "Popescu",
        "prenume": "Ion",
        "email": "ion.popescu@example.com"
    },
    {
        "nume": "Ionescu",
        "prenume": "Maria",
        "email": "maria.ionescu@example.com"
    },
    {
        "nume": "Georgescu",
        "prenume": "Andrei",
        "email": "andrei.georgescu@example.com"
    }
];

// Funcția pentru adăugarea utilizatorilor în tabel
function adaugaUtilizatoriInTabel(utilizatori) {
    var tbody = document.querySelector("#userTable tbody");

    utilizatori.forEach(function(utilizator) {
        var row = document.createElement("tr");
        row.innerHTML = "<td>" + utilizator.nume + "</td>" +
            "<td>" + utilizator.prenume + "</td>" +
            "<td>" + utilizator.email + "</td>";
        tbody.appendChild(row);
    });
}

// Adăugăm utilizatorii în tabel la încărcarea paginii
window.onload = function() {
    adaugaUtilizatoriInTabel(jsonUsers);
};

var genres = {
    "genres": [
        "Comedy",
        "Fantasy",
        "Crime",
        "Drama",
        "Music",
        "Adventure",
        "History",
        "Thriller",
        "Animation",
        "Family",
        "Mystery",
        "Biography",
        "Action",
        "Film-Noir",
        "Romance",
        "Sci-Fi",
        "War",
        "Western",
        "Horror",
        "Musical",
        "Sport"
    ]
};

for (var i = 0; i < genres.genres.length; i++) {
    //alert(genres.genres[i]);
}