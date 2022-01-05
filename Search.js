//Haal de ingevoerde vlucht gegevens op.
function flightInfo(event) {
    let origin = document.getElementById('origin').value;
    let destination = document.getElementById('destination').value;
    let date = document.getElementById('date').value;
    let number = document.getElementById('number').value;

    findData(origin, destination, date)
}

//zoek de ingevoerde gegevens in data object.
function findData(origin, destination, date){
    for (let i = 0; i < data.length; i++) {
        if (origin === data[i].origin &&
            destination === data[i].destination &&
            date === data[i].departure
        ){
            showFoundFlights(data[i].origin, data[i].destination, data[i].departure)
        }
    }
}

//beeld de gevonden data af op pagina.
function showFoundFlights(origin, destination, departure){
    var tableRow = document.createElement('tr');
    var tdOrigin = document.createElement('td');
    var tdDestination = document.createElement('td');
    var tdDeparture = document.createElement('td');
    var textOrigin = document.createTextNode(origin);
    var textDestination = document.createTextNode(destination);
    var textDeparture = document.createTextNode(departure);

    tdOrigin.appendChild(textOrigin);
    tdDestination.appendChild(textDestination);
    tdDeparture.appendChild(textDeparture);
    tableRow.appendChild(tdOrigin);
    tableRow.appendChild(tdDestination);
    tableRow.appendChild(tdDeparture)
    document.getElementById('search-result').appendChild(tableRow);

    document.getElementById('search-result').style.display = 'block';

    //voeg eventlistener toe aan tds
    let tds = document.querySelectorAll('td');
    for (let i = 0; i < tds.length; i++) {
        tds[i].addEventListener('click', showForm)}
}

//Als er op een vlucht geklikt wordt ga je naar een formulier.
function showForm(event){
    document.getElementById("myForm").style.display = "block";
    let destination = event.target.firstChild.data;
    ajustFormHeader(destination)
}

function ajustFormHeader(destination){
    const ps = document.getElementsByTagName('p');
    ps[1].innerHTML = destination;
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

//Laat de ingevulde gegevens zien aan de gebruiker
function showTravelerInfo(event){
    let email = document.getElementById('email').value;
    let name = document.getElementById('name').value;
    let ps = document.getElementsByTagName('p');
    let destination = ps[1].innerHTML
    alert('De ingevulde gegevens zijn: '
        + '\nemail: '  + email
        + '\nnaam: ' + name
        + '\nbestemming: ' + destination)
}






