

const image = document.getElementById('clickCookie')
const phrases = [
  "Acredite em si mesmo e nada será impossível.",
  "Tudo o que você precisa está dentro de você.",
  "Não se preocupe com o fracasso, ele é apenas uma oportunidade para recomeçar.",
  "O sucesso virá para aqueles que são pacientes e perseverantes.",
  "A vida é uma aventura, aproveite cada momento dela.",
  "Seja a mudança que você deseja ver no mundo.",
  "O caminho para o sucesso é feito de pequenas vitórias diárias.",
  "Seja grato pelo que você tem e mais virá em seu caminho.",
  "Não espere por oportunidades, crie-as.",
  "A felicidade é uma escolha, escolha ser feliz hoje.",
]
const frame1 = document.querySelector('.frame1')
const frame2 = document.querySelector('.frame2')
const btnTry = document.querySelector('#btnOne')
const btnReset = document.querySelector('#btnTwo')


function clickCookie() {
  frame1.classList.toggle('hide')
  frame2.classList.toggle('hide')
  
  document.querySelector('.frame2 p').innerText = frRandom ()
}


function frRandom () {
const numRandom = Math.floor(Math.random() * phrases.length)
return phrases[numRandom]

}


btnOne.addEventListener('click', clickCookie)

btnTwo.addEventListener('click', function() {
  frame1.classList. toggle('hide')
  frame2.classList.toggle('hide')
})













