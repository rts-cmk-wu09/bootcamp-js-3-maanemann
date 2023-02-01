const citater = [
    "&quot;Det er klogt at tænke&quot;<br>&nbsp;&nbsp;&mdash; Hans",
    "&quot;Ingen har nogensinde været mere utilfreds end forholdsvist meget&quot;<br>&nbsp;&nbsp;&mdash; Hans",
    "&quot;Undskyld, hvad sagde du?&quot;<br>&nbsp;&nbsp;&mdash; Hans",
    "&quot;JavaScript er et sprog som ingen taler&quot;<br>&nbsp;&nbsp;&mdash; Hans",
    "&quot;Hjemmesider er ret fede&quot;<br>&nbsp;&nbsp;&mdash; Hans",
    "&quot;Jeg kunne godt spise en bolle med smør&quot;<br>&nbsp;&nbsp;&mdash; Hans",
    "&quot;Hvis man tænker over at man tænker, så har man altid noget at tænke over (det var faktisk et okay citat)&quot;<br>&nbsp;&nbsp;&mdash; Hans",
    "&quot;Kom indenfor, det er koldt derude&quot;<br>&nbsp;&nbsp;&mdash; Hans",
    "&quot;Der er langt mellem himmel og jord, hvis man ikke er virkelig, virkelig, virkelig høj&quot;<br>&nbsp;&nbsp;&mdash; Hans",
    "&quot;Samfundet ind i systemet, systemet ned i lommen, tak&quot;<br>&nbsp;&nbsp;&mdash; Hans",
];

const randomCitat = Math.floor(Math.random() * citater.length);

document.querySelector("#citat").innerHTML = citater[randomCitat];