const barbieFacts = [
    "Barbie została stworzona przez Ruth Handler, współzałożycielkę firmy Mattel, w 1959 roku.",
    "Imię Barbie pochodzi od córki Ruth Handler, która nazywała się Barbara.",
    "Pierwsza lalka Barbie miała blond włosy i była ubrana w strój kąpielowy z białą kreską wzdłuż brzucha.",
    "Pierwszy chłopak Barbie, Ken, pojawił się na rynku w 1961 roku.",
    "Nazwa Ken pochodzi od imienia syna Ruth Handler, Kennetha.",
    "Barbie i Ken są razem od ponad 50 lat, ale nigdy nie pobrali się.",
    "Barbie miała już wiele różnych zawodów, takich jak astronautka, dentystka, inżynier, lekarka, nauczycielka i wielu innych.",
    "W 2019 roku Barbie zyskała własną piosenkę, którą nagrała zespołowa dziewczyna BTS.",
    "Barbie jest jednym z najbardziej rozpoznawalnych produktów na świecie.",
    "Lalka Barbie jest sprzedawana w ponad 150 krajach na całym świecie.",
    "Wiele osób twierdzi, że Barbie jest nieracjonalnie proporcjonowana, ze względu na bardzo wąską talię i duże piersi.",
    "W 1965 roku, Mattel wprowadził lalkę 'Miss Astronaut Barbie', która nosiła kombinezon kosmiczny.",
    "W 1984 roku, Barbie wystąpiła w filmie 'Barbie and the Rockers: Out of this World'.",
    "Barbie została wydana w ponad 1300 różnych wersjach.",
    "Barbie zawsze była modna i zmieniała swój styl wraz z trendami.",
    "W 1992 roku Mattel wydał lalkę 'Totally Hair Barbie', która miała bardzo długie włosy, sięgające do kostek.",
    "W 1997 roku Barbie została wydana w wersji Afro-amerykańskiej.",
    "W 2016 roku, Mattel wydał pierwszą lalkę Barbie, która nosiła hidżab.",
    "Barbie miała już wiele zwierząt domowych, takich jak konie, koty, psy, chomiki i wiele innych.",
    "W 2003 roku, Barbie została uhonorowana nagrodą 'Lifetime Achievement Award' na MTV Movie Awards.",
    "Barbie ma swoje miejsce w Muzeum Historii Naturalnej w Waszyngtonie.",
    "W 2016 roku, Barbie została wydana w wersji ciężarnej.",
    "W 2019 roku, Mattel wydał lalkę Barbie, która ma protezę nogi.",
    "Barbie zawsze była aktywna, a w 2010 roku została wydana w wersji 'I Can Be... Gymnastka'.",
    "W 1998 roku, Barbie została wydana w wersji 'Teacher Barbie', która nosiła okulary i miała zestaw materiałów edukacyjnych. ",
    "W 2018 roku, Barbie została wydana w wersji 'Sherpa Barbie', aby uczcić himalajskich przewodników.",
    "W 2019 roku, Barbie została wydana w wersji 'BMR1959', która miała bardziej nowoczesny wygląd i styl.",
    "Barbie została wydana w wersji 'My Scene Barbie', która była popularna w latach 2002-2008.",
    "W 2015 roku, Barbie zaczęła pojawiać się w książkach dla dzieci, aby zachęcać dziewczynki do czytania.",
    "Barbie miała swoją własną serię animowaną 'Barbie: Life in the Dreamhouse', która została wydana w 2012 roku.",
    "W 1995 roku, Mattel wprowadził lalkę 'Olympic Gymnast Barbie', która była inspirowana gimnastyczką Kerri Strug.",
    "W 2004 roku, Mattel wydał lalkę 'Alvin and the Chipmunks Barbie', która była ubrana w stylu znanym z filmu 'Alvin i wiewiórki'.",
    "Barbie została wydana w wersji 'Swan Lake Barbie', inspirowanej filmem animowanym z 1994 roku.",
    "W 2004 roku, Mattel wprowadził lalkę 'I Love Lucy Barbie', która była ubrana w strój znanego z popularnego serialu.",
    "Barbie jest uważana za jedną z najbardziej wartościowych marek na świecie.",
    "W 2019 roku, Barbie została uhonorowana nagrodą 'Game Changer' podczas gali 'The Toy of the Year Awards'.",
    "W 2019 roku, Barbie została wydana w wersji 'Judge Barbie', aby zachęcić dziewczynki do kariery prawniczej.",
    "Barbie była jednym z pierwszych produktów, które wprowadzono do sklepów internetowych.",
    "W 2016 roku, Mattel wprowadził lalkę 'Ghostbusters Barbie', która była ubrana w strój znanego z filmu 'Pogromcy duchów'.",
    "Barbie była przedmiotem kontrowersji z powodu krytyki dotyczącej wpływu, jaki może mieć na wizerunek ciała dziewczynki.",
    "Barbie była jednym z pierwszych produktów, które były reklamowane w telewizji.",
    "W 2017 roku, Mattel wprowadził lalkę 'Hello Barbie', która mogła odpowiadać na pytania za pomocą sztucznej inteligencji.",
    "Barbie miała już wiele różnych stylów fryzur, takich jak krótkie, długie, proste, kręcone i wiele innych.",
    "W 2019 roku, Barbie została wydana w wersji 'National Geographic Barbie', aby zachęcić dziewczynki do kariery naukowej.",
    "Barbie zawsze była aktywna i zdrowa, a w 2000 roku została wydana w wersji 'Olympic Skater Barbie'.",
    "W 2019 roku, Barbie została wydana w wersji 'David Bowie Barbie', która była inspirowana znanym muzykiem i jego stylami.",
    "Barbie zawsze była popularnym przedmiotem kolekcjonerskim, a niektóre lalki są warte setki lub nawet tysiące dolarów.",
    "Barbie była inspirowana niemiecką lalką o nazwie 'Bild Lilli', która była popularna w latach 50.",
    "W 2016 roku, Barbie została wydana w wersji 'President Barbie', aby zachęcić dziewczynki do kariery politycznej.",
    "W 2020 roku, Mattel wydał lalkę 'Barbie Color Reveal', która miała ukryte akcesoria i kolorowe włosy, które można odkryć za pomocą wody."
    ];

    const factsContainer = document.getElementById("factsContainer");
    const box = document.getElementById("box");
    const btnClose = document.getElementById("btnClose");
    const factsTitle = document.getElementById("facts-title");
    const factsText = document.getElementById("facts-text");

    function showCard () {
        setTimeout(() => {factsContainer.style.display = "flex"; box.style.animationName = "none"}, 4000);
        box.style.animationName = "box-shake-hov";  
    }

    function fillCard () {
        let ranNum = Math.round(Math.random() * 49);
        console.log(ranNum);
        factsTitle.innerHTML = `Ciekawostka #${(ranNum + 1)}`;
        factsText.innerHTML = barbieFacts[ranNum];
    }

    box.addEventListener("click", showCard);
    box.addEventListener("click", fillCard);
    btnClose.addEventListener("click", () => factsContainer.style.display = "none");
