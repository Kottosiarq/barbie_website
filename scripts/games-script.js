const gameVideo = document.getElementById("gameVideo");
const gameTitle = document.getElementById("gameTitle");
const btnRight = document.getElementById("btnRight");
const btnLeft = document.getElementById("btnLeft");
const textContainer = document.getElementById("textContainer");
const yearContainer = document.getElementById("yearContainer");

let numPage = 0;

const titleTable = [
    "Barbie Horse Adventures: Mystery Ride",
    "Barbie Horse Adventure: Ratuj Dzikie Konie",
    "Detective Barbie in The Mystery of the Carnival Caper",
    "Barbie Riding Club",
    "Barbie Horse Adventures: Riding Camp"
];
const linksTable = [
    "https://www.youtube.com/embed/UIDFHClPA9c",
    "https://www.youtube.com/embed/XQ0Z0Zofce0",
    "https://www.youtube.com/embed/gyhBFMIwBps",
    "https://www.youtube.com/embed/l8zOwzcF-4I",
    "https://www.youtube.com/embed/mEOSBZ4XW9w"
];
const descTable = [
    "Jest to gra, w której gracze wcielają się w postać Barbie i wyruszają na tajemniczą jazdę konną. Barbie odkrywa dziwny artefakt i postanawia odkryć jego tajemnice, co prowadzi ją do różnych lokacji, w tym do zaginionego miasta. W trakcie gry, gracze muszą pokonać różne przeszkody, zbierać przedmioty i rozwiązywać zagadki, aby odkryć prawdziwe znaczenie artefaktu.",
    "W tej grze o Barbie, główna bohaterka zostaje wezwana do pomocy w ratowaniu dzikich koni przed złymi ludźmi, którzy chcą je schwytać. Gracze muszą pomóc Barbie odnaleźć zaginione konie, przeprowadzić je przez trudny teren i ochronić je przed niebezpieczeństwami. W trakcie gry, Barbie zdobywa nowe umiejętności jeździeckie i przyjaźni się z dzikimi zwierzętami, co pomaga jej w walce ze złymi ludźmi.",
    "Detective Barbie in The Mystery of the Carnival Caper to gra, w której Barbie zostaje prywatnym detektywem i musi rozwiązać zagadkę kradzieży cennych klejnotów podczas karnawału. Gracze muszą pomóc Barbie zbierać wskazówki, przesłuchiwać podejrzanych i rozwiązywać różne łamigłówki, aby dotrzeć do sprawcy. Gra zawiera różne lokacje i postacie, co sprawia, że ​​rozwiązanie zagadki jest bardziej interesujące.",
    "Tutaj Barbie zostaje instruktorem jeździeckim i pomaga dzieciom nauczyć się jeździć konno. Gracze muszą pomagać Barbie organizować zajęcia, wybierać odpowiednie konie i nauczać dzieci różnych umiejętności jeździeckich. Gra oferuje różne mini-gry i wyzwania, które pomagają w zdobywaniu punktów doświadczenia.",
    "W ostatniej grze nasza Barbie zostaje zaproszona na obóz jeździecki i musi przejść przez różne wyzwania, aby zdobyć nagrodę dla najlepszego jeźdźca. Gracze muszą pomagać Barbie w ćwiczeniach jeździeckich, dbać o swojego konia i odkrywać tajemnice obozu. Gra oferuje również mini-gry i wyzwania, które pomagają w rozwijaniu umiejętności jeździeckich."
];
const yearsTable = [
    "2003 rok - Vivendi Universal Games",
    "2005 rok - Vivendi Universal Games",
    "1998 rok - Mattel Interactive",
    "1998 rok - Mattel Interactive",
    "2008 rok - Activision Publishing, Inc."
  ];
  

function goRight () {

    if (numPage !== 4) {
        numPage++
    } else {
        numPage = 0;
    }

    gameTitle.innerHTML = titleTable[numPage]; 
    gameVideo.setAttribute('src', linksTable[numPage]);
    textContainer.innerHTML = `<h4>Fabuła:</h4>${descTable[numPage]}`;
    yearContainer.innerHTML = `<h4>Data wydania:</h4>${yearsTable[numPage]}`;
}

function goLeft () {

    if (numPage !== 0) {
        numPage--
    } else {
        numPage = 4;
    }

    gameTitle.innerHTML = titleTable[numPage]; 
    gameVideo.setAttribute('src', linksTable[numPage]);
    textContainer.innerHTML = descTable[numPage];
}

btnRight.addEventListener("click", goRight);
btnLeft.addEventListener("click", goLeft);