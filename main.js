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
    let polishWords = ['Mleko', 'Kawa', 'Wino', 'Herbata', 'Sok', 'Piwo', 'Woda', 'Miód', 'Zupa', 'Jabłko', 'Banan', 'Pomarańcza', 'Truskawka', 'Winogrono', 'Gruszka', 'Arbuz', 'Cytryna', 'Brzoskwinia', 'Pomidor', 'Ogórek', 'Papryka', 'Cebula', 'Ziemniak', 'Marchewka', 'Burak', 'Kukurydza', 'Sałata']
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
    let turkishWords = ['Süt', 'Kahve', 'Şarap', 'Çay', 'Meyve suyu', 'Bira', 'Su', 'Bal', 'Çorba', 'Elma', 'Muz', 'Portakal', 'Çilek', 'Üzüm', 'Armut', 'Karpuz', 'Limon', 'Şeftali', 'Domates', 'Salatalık', 'Biber', 'Soğan', 'Patates', 'Havuç', 'Pancar kökü', 'Mısır', 'Marul']

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

