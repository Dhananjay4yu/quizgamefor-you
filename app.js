const questions =[
    {
        'que': 'Who is the main character in anime One Peice?',
        'a': 'Roronoa Zoro',
        'b': 'Monkey D Luffy',
        'c': 'Nami',
        'd': 'Kaido',
        'correct': 'b'
    },

    {
        'que': 'Which one is the emperor of sea in One Peice',
        'a': 'Shanks',
        'b': 'Zoro',
        'c': 'Chopper',
        'd': 'none of these',
        'correct': 'a'
    },

    {
        'que': 'Which character have eaten Human no mi fruit',
        'a': 'nami',
        'b': 'luffy',
        'c': 'reyleigh',
        'd': 'Tony Tony Chopper',
        'correct': 'd'
    },
    {
        'que': 'The main villan of demon slayer is ',
        'a': 'Tokito',
        'b': 'Muzan',
        'c': 'Tanjiro',
        'd': 'Zenitsu',
        'correct': 'b'
    },
    {
        'que': 'which character in demon slayer do thunder breathing',
        'a': 'Zenitsu',
        'b': 'Tokito',
        'c': 'Muzan',
        'd': 'tanjiro',
        'correct': 'a'
    },
]


let index = 0;
let total = questions.length;
let right = 0,
    wrong = 0;
const quebox = document.getElementById("quebox")
const optionInputs = document.querySelectorAll('.options')
const loadQuestion = ()=>{
    reset();
    if(index == total){
        return endquiz();
    }
    const data = questions[index]
    console.log(data)
    quebox.innerText = `${index + 1}) ${data.que}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
}

const submitquiz = () => {
    const data = questions[index]
    const ans = getanswer()
    if(ans == data.correct) {
        right++;
    }else{
        wrong++;
    }
    index++;
    loadQuestion();
        return;
}

const getanswer = () =>{
    optionInputs.forEach(
        (input)=>{
        if (input.checked){
            answer= input.value;
        }
    }
    )
    return answer;
}

const reset = () =>{
    optionInputs.forEach(
        (input)=>{
            input.checked = false;
        }
    )
}

const endquiz = () => {
    document.getElementById("box").innerHTML = `
    <div style = "text-align:center">
    <h3>Thankyou for playing the quiz </h3>
    <h2> ${right}/ ${total} are correct </h2>
    </div>
    `
}


loadQuestion();