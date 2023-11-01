

const jmeno = prompt ("Křestní jméno").toLowerCase().trim()
const prijmeni = prompt ("|Příjmení").toLowerCase().trim()
const jmenoOrez = jmeno.slice(0,3)
const prijmeniOrez = prijmeni.slice(0,5)


document.body.innerHTML = `
<p>${prijmeniOrez}${jmenoOrez}@fit.cvut.cz</p>
`


