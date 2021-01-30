// const flags = [...document.querySelectorAll('section.flags img')];

const plFlags = [...document.querySelectorAll('.flags img.PL')]
const trFlags = [...document.querySelectorAll('.flags img.TR')]

const plFlag = document.querySelector('.PL')
const trFlag = document.querySelector('.TR')
const img = document.querySelector('img')
// const images = document.querySelectorAll
const texts = [...document.querySelectorAll('p')]
const sectionPicture = [...document.querySelectorAll('section.picture')];
const picturesBefore = [...document.querySelectorAll('.image')]
// const pictures = ['milk', 'coffee', 'wine'];





// const polishWord = () => {
//     console.log('Kliknięte w polską flagę');
// }
// const turkishWord = () => {
//     console.log('Kliknięte w turecką flagę')
// }


plFlags.forEach(function (plFlag, index) {
    let polishWords = ['Kot', 'Pies', 'Ptak', 'Kaczka', 'Kura', 'Ryba', 'Mysz', 'Królik', 'Świnia', 'Koń', 'Krowa', 'Owca', 'Niedźwiedź', 'Lew', 'Tygrys', 'Słoń', 'Żaba', 'Krab', 'Żółw', 'Pająk', 'Biedronka']
    const plFlagClick = () => {
        texts[index].textContent = polishWords[index];
        picturesBefore[index].remove();
        
        texts.forEach(function(text, index) { 
        text.addEventListener('click', function() {
            sectionPicture[index].append(picturesBefore[index])
            // sectionPicture[index].append(img.src = `TRPLPic/${pictures[index]}.jpg`)
        })
        })
    }

    plFlag.addEventListener('click', plFlagClick)
})

trFlags.forEach(function (trFlag, index) {
    let turkishWords = ['Kedi', 'Köpek', 'Kuş', 'Ördek', 'Tavuk', 'Balık', 'Fare', 'Tavşan', 'Domuz', 'At', 'İnek', 'Koyun', 'Ayi', 'Aslan', 'Kaplan', 'Fil', 'Kurbağa', 'Yengeç', 'Kaplumbağa', 'Örümcek', 'Uğur böceği']

    const trFlagClick = () => {
        texts[index].textContent = turkishWords[index];
        picturesBefore[index].remove();
        // image.remove();
        texts.forEach(function(text, index) { 
        text.addEventListener('click', function() {
            sectionPicture[index].append(picturesBefore[index])
            // sectionPicture[index].append(img.src = `TRPLPic/${pictures[index]}.jpg`)
        })
    })
    }

    trFlag.addEventListener('click', trFlagClick)
})



// plFlag.addEventListener('click', polishWord);
// trFlag.addEventListener('click', turkishWord);

// console.log(flags)

// flags.forEach((flag, index) => {
//     console.log(index + flag)
// })

