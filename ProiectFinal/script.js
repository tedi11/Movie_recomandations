window.onload = function() {
    var counter = 0;

    setInterval(function() {
        counter++;
        if (counter === 20) {
            alert('If you need any help, contact us!');
        }
    }, 1000);
};