


const btn = document.querySelector('button');
const div = document.getElementById('verb')
const divChecked = document.getElementById('result')


const verbs = ['spać', 'jeść', 'pić', 'mieć', 'robić', 'lubić', 'kochać', 'grać', 'chcieć', 'być', 'iść', 'kupować', 'móc', 'tęsknić'];

const subjectPronouns = ['Ja', 'Ty', 'On', 'Ona', 'Ono', 'Oni', 'My', 'Wy']
// Ja - 0 
// Ty - 1
// On, Ona, Ono - 2, 3, 4
// Oni - 5
// My - 6
// Wy - 7
const checkBtn = document.getElementById('check')

const verbsChanged = ['śpi', 'je', 'pije', 'ma', 'robi', 'lubi', 'kocha', 'gra', 'chce', 'jest', 'idzie', 'kupuje', 'może', 'tęskni']

const subjectEndings = ['ę', 'sz', '', '', '', 'ą', 'my', 'cie']

const firstPersonVerbs = ['śpię', 'jem', 'piję', 'mam', 'robię', 'lubię', 'kocham', 'gram', 'chcę', 'jestem', 'idę', 'kupuję', 'mogę', 'tęsknię']

const pluralVerbs = ['śpią', 'jedzą', 'piją', 'mają', 'robią', 'lubią', 'kochają', 'grają', 'chcą', 'są', 'idą', 'kupują', 'mogą', 'tęsknią']


// Math.random() * verbs.length

const verbGenerator = () => {
    const index1 = Math.floor(Math.random() * (verbs.length)) // Czasowniki
    const index2 = Math.floor(Math.random() * (subjectPronouns.length)) // Osoby
    div.textContent = `${subjectPronouns[index2]} (${verbs[index1]})`
    checkBtn.style.display = 'block';
    checkBtn.addEventListener(
        'click', () => {
            if (index2 == '0'){
                divChecked.textContent = `${subjectPronouns[index2]} ${firstPersonVerbs[index1]}`
            } else if (index2 == '5') {
                divChecked.textContent = `${subjectPronouns[index2]} ${pluralVerbs[index1]}`
            } else if (index2 == '1' && index1 == '9'){
                divChecked.textContent = `${subjectPronouns[index2]} ${verbsChanged[index1]}eś`
            } else if (index2 == '6' && index1 == '9'){
                divChecked.textContent = `${subjectPronouns[index2]} ${verbsChanged[index1]}eśmy`
            } else if (index2 == '7' && index1 == '9'){
                divChecked.textContent = `${subjectPronouns[index2]} ${verbsChanged[index1]}eście`
            } else {
                divChecked.textContent = `${subjectPronouns[index2]} ${verbsChanged[index1]}${subjectEndings[index2]}`
                }
        }
    )};


btn.addEventListener('click', verbGenerator)
