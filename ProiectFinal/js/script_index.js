var counter = 0;

window.onload = function() {
    displayMovieDetails(counter % 30)

    setInterval(function() {
        counter++;
        if (counter === 20) {
            alert('If you need any help, contact us!');
        }
    }, 1000);

    setTimeout(function() {
        if (localStorage.clientiMultumiti) {
            localStorage.clientiMultumiti = Number(localStorage.clientiMultumiti) + 1;
        } else {
            localStorage.clientiMultumiti = 1;
        }
        alert(localStorage.clientiMultumiti)
        alert("We are happy that you enjoy our site!");
    }, 40000); //dupa 40 de secunde

    var button = document.getElementById('button');
    document.addEventListener('keydown', function(event) {
        if (event.keyCode === 32) {
            event.preventDefault();
            button.click();
            const randomColor = Math.floor(Math.random() * 16777215).toString(16);
            document.getElementById('button').style.color = "#" + randomColor;

        }
    });

    button.addEventListener('click', function() {
        console.log('Button clicked!');
    });


};


function displayMovieDetails(id) {

    //console.log(lista_filme);

    var movie = movies.movies[id];
    var titlu = document.getElementById("item1");
    var descriere = document.getElementById("item3");
    const img = document.querySelector("img");
    img.src = movie.posterUrl;
    titlu.textContent = movie.title;
    //poza.textContent = "Year: " + movie.year;
    descriere.textContent = "Description: " + movie.plot;
    let btn = document.createElement("button");
    btn.id = 'button';
    btn.innerHTML = "New Movie";
    btn.style.padding = "0"
    btn.style.margin = "0"
    btn.style.marginLeft = "3%";

    descriere.appendChild(btn);

    btn.addEventListener("click", function() {
        if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount) + 1;
        } else {
            localStorage.clickcount = 1;
        }
        displayMovieDetails(counter)
    })

}


//* 
var movies = {
    "movies": [{
            "id": 1,
            "title": "The Big Short",
            "year": "2015",
            "runtime": "130",
            "genres": ["Biography", "Comedy", "Drama"],
            "director": "Adam McKay",
            "actors": "Ryan Gosling, Rudy Eisenzopf, Casey Groves, Charlie Talbert",
            "plot": "Four denizens in the world of high-finance predict the credit and housing bubble collapse of the mid-2000s, and decide to take on the big banks for their greed and lack of foresight.",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BNDc4MThhN2EtZjMzNC00ZDJmLThiZTgtNThlY2UxZWMzNjdkXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg"
        },
        {
            "id": 2,
            "title": "The Cotton Club",
            "year": "1984",
            "runtime": "127",
            "genres": ["Crime", "Drama", "Music"],
            "director": "Francis Ford Coppola",
            "actors": "Richard Gere, Gregory Hines, Diane Lane, Lonette McKee",
            "plot": "The Cotton Club was a famous night club in Harlem. The story follows the people that visited the club, those that ran it, and is peppered with the Jazz music that made it so famous.",
            "posterUrl": "https://img.reelgood.com/content/movie/f552c1fd-0de2-4284-bc2f-a14fa86b93f5/poster-780.jpg"
        },
        {
            "id": 3,
            "title": "The Shawshank Redemption",
            "year": "1994",
            "runtime": "142",
            "genres": ["Crime", "Drama"],
            "director": "Frank Darabont",
            "actors": "Tim Robbins, Morgan Freeman, Bob Gunton, William Sadler",
            "plot": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
            "posterUrl": "https://cdn.shopify.com/s/files/1/1416/8662/products/shawshank_redemption_1994_netherlands_original_film_art_f_5000x.jpg?v=1572559870"
        },
        {
            "id": 4,
            "title": "Crocodile Dundee",
            "year": "1986",
            "runtime": "97",
            "genres": ["Adventure", "Comedy"],
            "director": "Peter Faiman",
            "actors": "Paul Hogan, Linda Kozlowski, John Meillon, David Gulpilil",
            "plot": "An American reporter goes to the Australian outback to meet an eccentric crocodile poacher and invites him to New York City.",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTg0MTU1MTg4NF5BMl5BanBnXkFtZTgwMDgzNzYxMTE@._V1_SX300.jpg"
        },
        {
            "id": 5,
            "title": "Valkyrie",
            "year": "2008",
            "runtime": "121",
            "genres": ["Drama", "History", "Thriller"],
            "director": "Bryan Singer",
            "actors": "Tom Cruise, Kenneth Branagh, Bill Nighy, Tom Wilkinson",
            "plot": "A dramatization of the 20 July assassination and political coup plot by desperate renegade German Army officers against Hitler during World War II.",
            "posterUrl": "https://movieposters2.com/images/1723414-b.jpg"
        },
        {
            "id": 6,
            "title": "Ratatouille",
            "year": "2007",
            "runtime": "111",
            "genres": ["Animation", "Comedy", "Family"],
            "director": "Brad Bird, Jan Pinkava",
            "actors": "Patton Oswalt, Ian Holm, Lou Romano, Brian Dennehy",
            "plot": "A rat who can cook makes an unusual alliance with a young kitchen worker at a famous restaurant.",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMzODU0NTkxMF5BMl5BanBnXkFtZTcwMjQ4MzMzMw@@._V1_SX300.jpg"
        },
        {
            "id": 7,
            "title": "City of God",
            "year": "2002",
            "runtime": "130",
            "genres": ["Crime", "Drama"],
            "director": "Fernando Meirelles, Kátia Lund",
            "actors": "Alexandre Rodrigues, Leandro Firmino, Phellipe Haagensen, Douglas Silva",
            "plot": "Two boys growing up in a violent neighborhood of Rio de Janeiro take different paths: one becomes a photographer, the other a drug dealer.",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA4ODQ3ODkzNV5BMl5BanBnXkFtZTYwOTc4NDI3._V1_SX300.jpg"
        },
        {
            "id": 8,
            "title": "Memento",
            "year": "2000",
            "runtime": "113",
            "genres": ["Mystery", "Thriller"],
            "director": "Christopher Nolan",
            "actors": "Guy Pearce, Carrie-Anne Moss, Joe Pantoliano, Mark Boone Junior",
            "plot": "A man juggles searching for his wife's murderer and keeping his short-term memory loss from being an obstacle.",
            "posterUrl": "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/c15059527ae4d9c832dbb365b418369e_7c2bb4af-8bcd-428c-8904-27ddc512a45c_480x.progressive.jpg?v=1573594896"
        },
        {
            "id": 9,
            "title": "The Intouchables",
            "year": "2011",
            "runtime": "112",
            "genres": ["Biography", "Comedy", "Drama"],
            "director": "Olivier Nakache, Eric Toledano",
            "actors": "François Cluzet, Omar Sy, Anne Le Ny, Audrey Fleurot",
            "plot": "After he becomes a quadriplegic from a paragliding accident, an aristocrat hires a young man from the projects to be his caregiver.",
            "posterUrl": "https://m.media-amazon.com/images/M/MV5BODY0MDM1MDE2OV5BMl5BanBnXkFtZTcwMzEyMjkyNw@@._V1_.jpg"
        },
        {
            "id": 10,
            "title": "Stardust",
            "year": "2007",
            "runtime": "127",
            "genres": ["Adventure", "Family", "Fantasy"],
            "director": "Matthew Vaughn",
            "actors": "Ian McKellen, Bimbo Hart, Alastair MacIntosh, David Kelly",
            "plot": "In a countryside town bordering on a magical land, a young man makes a promise to his beloved that he'll retrieve a fallen star by venturing into the magical realm.",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjkyMTE1OTYwNF5BMl5BanBnXkFtZTcwMDIxODYzMw@@._V1_SX300.jpg"
        },
        {
            "id": 11,
            "title": "Apocalypto",
            "year": "2006",
            "runtime": "139",
            "genres": ["Action", "Adventure", "Drama"],
            "director": "Mel Gibson",
            "actors": "Rudy Youngblood, Dalia Hernández, Jonathan Brewer, Morris Birdyellowhead",
            "plot": "As the Mayan kingdom faces its decline, the rulers insist the key to prosperity is to build more temples and offer human sacrifices. Jaguar Paw, a young man captured for sacrifice, flees to avoid his fate.",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BNTM1NjYyNTY5OV5BMl5BanBnXkFtZTcwMjgwNTMzMQ@@._V1_SX300.jpg"
        },
        {
            "id": 12,
            "title": "The Martian",
            "year": "2015",
            "runtime": "144",
            "genres": ["Adventure", "Drama", "Sci-Fi"],
            "director": "Ridley Scott",
            "actors": "Matt Damon, Jessica Chastain, Kristen Wiig, Jeff Daniels",
            "plot": "An astronaut becomes stranded on Mars after his team assume him dead, and must rely on his ingenuity to find a way to signal to Earth that he is alive.",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTc2MTQ3MDA1Nl5BMl5BanBnXkFtZTgwODA3OTI4NjE@._V1_SX300.jpg"
        },
        {
            "id": 13,
            "title": "No Country for Old Men",
            "year": "2007",
            "runtime": "122",
            "genres": ["Crime", "Drama", "Thriller"],
            "director": "Ethan Coen, Joel Coen",
            "actors": "Tommy Lee Jones, Javier Bardem, Josh Brolin, Woody Harrelson",
            "plot": "Violence and mayhem ensue after a hunter stumbles upon a drug deal gone wrong and more than two million dollars in cash near the Rio Grande.",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA5Njk3MjM4OV5BMl5BanBnXkFtZTcwMTc5MTE1MQ@@._V1_SX300.jpg"
        },
        {
            "id": 14,
            "title": "Planet 51",
            "year": "2009",
            "runtime": "91",
            "genres": ["Animation", "Adventure", "Comedy"],
            "director": "Jorge Blanco, Javier Abad, Marcos Martínez",
            "actors": "Jessica Biel, John Cleese, Gary Oldman, Dwayne Johnson",
            "plot": "An alien civilization is invaded by Astronaut Chuck Baker, who believes that the planet was uninhabited. Wanted by the military, Baker must get back to his ship before it goes into orbit without him.",
            "posterUrl": "https://flxt.tmsimg.com/assets/p177954_p_v8_ad.jpg"
        },
        {
            "id": 15,
            "title": "Looper",
            "year": "2012",
            "runtime": "119",
            "genres": ["Action", "Crime", "Drama"],
            "director": "Rian Johnson",
            "actors": "Joseph Gordon-Levitt, Bruce Willis, Emily Blunt, Paul Dano",
            "plot": "In 2074, when the mob wants to get rid of someone, the target is sent into the past, where a hired gun awaits - someone like Joe - who one day learns the mob wants to 'close the loop' by sending back Joe's future self for assassination.",
            "posterUrl": "https://i.pinimg.com/originals/81/3a/4e/813a4efa1a85b17c03eac3fb855979f4.jpg"
        },
        {
            "id": 16,
            "title": "Corpse Bride",
            "year": "2005",
            "runtime": "77",
            "genres": ["Animation", "Drama", "Family"],
            "director": "Tim Burton, Mike Johnson",
            "actors": "Johnny Depp, Helena Bonham Carter, Emily Watson, Tracey Ullman",
            "plot": "When a shy groom practices his wedding vows in the inadvertent presence of a deceased young woman, she rises from the grave assuming he has married her.",
            "posterUrl": "https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/1280x1280/products/82647/94606/Corpse-Bride-Final-Style-Double-sided-original-movie-poster-buy-now-at-starstills__22061.1599750835.jpg?c=2"
        },
        {
            "id": 17,
            "title": "The Third Man",
            "year": "1949",
            "runtime": "93",
            "genres": ["Film-Noir", "Mystery", "Thriller"],
            "director": "Carol Reed",
            "actors": "Joseph Cotten, Alida Valli, Orson Welles, Trevor Howard",
            "plot": "Pulp novelist Holly Martins travels to shadowy, postwar Vienna, only to find himself investigating the mysterious death of an old friend, Harry Lime.",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjMwNzMzMTQ0Ml5BMl5BanBnXkFtZTgwNjExMzUwNjE@._V1_SX300.jpg"
        },
        {
            "id": 18,
            "title": "The Beach",
            "year": "2000",
            "runtime": "119",
            "genres": ["Adventure", "Drama", "Romance"],
            "director": "Danny Boyle",
            "actors": "Leonardo DiCaprio, Daniel York, Patcharawan Patarakijjanon, Virginie Ledoyen",
            "plot": "Twenty-something Richard travels to Thailand and finds himself in possession of a strange map. Rumours state that it leads to a solitary beach paradise, a tropical bliss - excited and intrigued, he sets out to find it.",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BN2ViYTFiZmUtOTIxZi00YzIxLWEyMzUtYjQwZGNjMjNhY2IwXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg"
        },
        {
            "id": 19,
            "title": "Scarface",
            "year": "1983",
            "runtime": "170",
            "genres": ["Crime", "Drama"],
            "director": "Brian De Palma",
            "actors": "Al Pacino, Steven Bauer, Michelle Pfeiffer, Mary Elizabeth Mastrantonio",
            "plot": "In Miami in 1980, a determined Cuban immigrant takes over a drug cartel and succumbs to greed.",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjAzOTM4MzEwNl5BMl5BanBnXkFtZTgwMzU1OTc1MDE@._V1_SX300.jpg"
        },
        {
            "id": 20,
            "title": "Sid and Nancy",
            "year": "1986",
            "runtime": "112",
            "genres": ["Biography", "Drama", "Music"],
            "director": "Alex Cox",
            "actors": "Gary Oldman, Chloe Webb, David Hayman, Debby Bishop",
            "plot": "Morbid biographical story of Sid Vicious, bassist with British punk group the Sex Pistols, and his girlfriend Nancy Spungen. When the Sex Pistols break up after their fateful US tour, ...",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjExNjA5NzY4M15BMl5BanBnXkFtZTcwNjQ2NzI5NA@@._V1_SX300.jpg"
        },
        {
            "id": 21,
            "title": "Black Swan",
            "year": "2010",
            "runtime": "108",
            "genres": ["Drama", "Thriller"],
            "director": "Darren Aronofsky",
            "actors": "Natalie Portman, Mila Kunis, Vincent Cassel, Barbara Hershey",
            "plot": "A committed dancer wins the lead role in a production of Tchaikovsky's \"Swan Lake\" only to find herself struggling to maintain her sanity.",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BNzY2NzI4OTE5MF5BMl5BanBnXkFtZTcwMjMyNDY4Mw@@._V1_SX300.jpg"
        },
        {
            "id": 22,
            "title": "Inception",
            "year": "2010",
            "runtime": "148",
            "genres": ["Action", "Adventure", "Sci-Fi"],
            "director": "Christopher Nolan",
            "actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
            "plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg"
        },
        {
            "id": 23,
            "title": "The Deer Hunter",
            "year": "1978",
            "runtime": "183",
            "genres": ["Drama", "War"],
            "director": "Michael Cimino",
            "actors": "Robert De Niro, John Cazale, John Savage, Christopher Walken",
            "plot": "An in-depth examination of the ways in which the U.S. Vietnam War impacts and disrupts the lives of people in a small industrial town in Pennsylvania.",
            "posterUrl": "http://cdn.shopify.com/s/files/1/1057/4964/products/the-deer-hunter-vintage-movie-poster-original-1-sheet-27x41-3203_grande.jpg?v=1619845499"
        },
        {
            "id": 24,
            "title": "Chasing Amy",
            "year": "1997",
            "runtime": "113",
            "genres": ["Comedy", "Drama", "Romance"],
            "director": "Kevin Smith",
            "actors": "Ethan Suplee, Ben Affleck, Scott Mosier, Jason Lee",
            "plot": "Holden and Banky are comic book artists. Everything's going good for them until they meet Alyssa, also a comic book artist. Holden falls for her, but his hopes are crushed when he finds out she's gay.",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BZDM3MTg2MGUtZDM0MC00NzMwLWE5NjItOWFjNjA2M2I4YzgxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
        },
        {
            "id": 25,
            "title": "Django Unchained",
            "year": "2012",
            "runtime": "165",
            "genres": ["Drama", "Western"],
            "director": "Quentin Tarantino",
            "actors": "Jamie Foxx, Christoph Waltz, Leonardo DiCaprio, Kerry Washington",
            "plot": "With the help of a German bounty hunter, a freed slave sets out to rescue his wife from a brutal Mississippi plantation owner.",
            "posterUrl": "https://www.heyuguys.com/images/2012/10/Django-Unchained-International-Poster.jpg"
        },
        {
            "id": 26,
            "title": "The Silence of the Lambs",
            "year": "1991",
            "runtime": "118",
            "genres": ["Crime", "Drama", "Thriller"],
            "director": "Jonathan Demme",
            "actors": "Jodie Foster, Lawrence A. Bonney, Kasi Lemmons, Lawrence T. Wrentz",
            "plot": "A young F.B.I. cadet must confide in an incarcerated and manipulative killer to receive his help on catching another serial killer who skins his victims.",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ2NzkzMDI4OF5BMl5BanBnXkFtZTcwMDA0NzE1NA@@._V1_SX300.jpg"
        },
        {
            "id": 27,
            "title": "American Beauty",
            "year": "1999",
            "runtime": "122",
            "genres": ["Drama", "Romance"],
            "director": "Sam Mendes",
            "actors": "Kevin Spacey, Annette Bening, Thora Birch, Wes Bentley",
            "plot": "A sexually frustrated suburban father has a mid-life crisis after becoming infatuated with his daughter's best friend.",
            "posterUrl": "http://i.imgur.com/fXn63rt.jpg"
        },
        {
            "id": 28,
            "title": "Snatch",
            "year": "2000",
            "runtime": "102",
            "genres": ["Comedy", "Crime"],
            "director": "Guy Ritchie",
            "actors": "Benicio Del Toro, Dennis Farina, Vinnie Jones, Brad Pitt",
            "plot": "Unscrupulous boxing promoters, violent bookmakers, a Russian gangster, incompetent amateur robbers, and supposedly Jewish jewelers fight to track down a priceless stolen diamond.",
            "posterUrl": "https://fluffpot.files.wordpress.com/2014/04/snatch.jpg"
        },
        {
            "id": 29,
            "title": "Midnight Express",
            "year": "1978",
            "runtime": "121",
            "genres": ["Crime", "Drama", "Thriller"],
            "director": "Alan Parker",
            "actors": "Brad Davis, Irene Miracle, Bo Hopkins, Paolo Bonacelli",
            "plot": "Billy Hayes, an American college student, is caught smuggling drugs out of Turkey and thrown into prison.",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQyMDA5MzkyOF5BMl5BanBnXkFtZTgwOTYwNTcxMTE@._V1_SX300.jpg"
        },
        {
            "id": 30,
            "title": "Pulp Fiction",
            "year": "1994",
            "runtime": "154",
            "genres": ["Crime", "Drama"],
            "director": "Quentin Tarantino",
            "actors": "Tim Roth, Amanda Plummer, Laura Lovelace, John Travolta",
            "plot": "The lives of two mob hit men, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTkxMTA5OTAzMl5BMl5BanBnXkFtZTgwNjA5MDc3NjE@._V1_SX300.jpg"
        }
    ]
};