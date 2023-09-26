// Vejledning
// Disse 5 opgaver er til at træne string sammensætning i javaScript med string+string metoden.



// Sammensætning af navn:
// Opret to variabler, fornavn og efternavn, og tildel dem dine fornavn og efternavn. Lav en ny variabel, fuldtNavn, der indeholder hele dit navn ved at sammensætte fornavn og efternavn. Udskriv fuldtNavn til konsollen.
let fornavn = "Tanja";
let efternavn = "Hedemann";
let fuldenavn = fornavn + " " + efternavn;
console.log(fuldenavn);

// Velkomstbesked:
// Lav en variabel, brugernavn, og tildel den værdien af dit valgte brugernavn. Opret en velkomstbesked, der siger "Velkommen, [brugernavn]!" ved at sammensætte strengen "Velkommen, " og brugernavn. Udskriv velkomstbeskeden til konsollen.
let brugernavn = "Mrs. T";

let velkomstbesked = "velkommen " + brugernavn;
console.log(velkomstbesked);


// Bynavn og Postnummer:
// Opret to variabler, by og postnummer, og tildel dem værdierne af din by og dit postnummer. Brug string + string metoden til at sammensætte dem og gem resultatet i en ny variabel kaldet adresse. Udskriv adresse til konsollen.

let by = "Hjallerup";
let postnummer = "9320";

let adresse = by + " " + postnummer;
console.log(adresse);

// Ferieplanlægning:
// Lav en variabel, ferieDestination, og tildel den værdien af dit ønskede feriemål. Opret en anden variabel, feriePlan, der indeholder en besked, der siger: "Jeg planlægger at tage til [ferieDestination] i næste uge." Brug string + string metoden til at sammensætte beskeden og udskriv den til konsollen.

let ferieDestination = "Maldiverne";
let feriePlan = "Jeg planlægger at tage til" + " " + ferieDestination;
console.log(feriePlan);

// Produktnavn og Pris:
// Opret to variabler, produktNavn og produktPris, og tildel dem værdierne af et produkt og dets pris. Lav en besked, der siger: "Det valgte produkt er [produktNavn], og det koster [produktPris] dollars." Brug string + string metoden til at sammensætte beskeden og udskriv den til konsollen.

let produktNavn = "pc";
let produktPris = "4000";

let message = "Det valgte produkt er " + produktNavn + ", " + "og det koster " + produktPris + " dollars";
console.log(message);