console.log('Pobierz dane programisty');
let dataUrl = 'https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php'

$('#get-data').on('click', function () {
    $("<div id='dane-programisty'>").appendTo('body');

    $.getJSON(dataUrl, function (dane) {
        $('<p>').text(dane.imie).appendTo('#dane-programisty');
        $('<p>').text(dane.nazwisko).appendTo('#dane-programisty');
        $('<p>').text(dane.zawod).appendTo('#dane-programisty');
        $('<p>').text(dane.firma).appendTo('#dane-programisty');
        console.log(dataUrl);
    });
})
