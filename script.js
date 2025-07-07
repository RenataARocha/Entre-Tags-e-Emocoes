// ---------------------- BOLINHAS DE FUNDO ----------------------
const numDots = 180;
const fundoDots = document.querySelector('.fundo-dots');

for (let i = 0; i < numDots; i++) {
  const dot = document.createElement('div');
  dot.classList.add('dot');

  dot.style.top = `${Math.random() * 100}%`;
  dot.style.left = `${Math.random() * 100}%`;

  const size = Math.random() * 2 + 2;
  dot.style.width = `${size}px`;
  dot.style.height = `${size}px`;

  dot.style.opacity = `${Math.random() * 0.4 + 0.3}`;
  fundoDots.appendChild(dot);
}

// ---------------------- GIRASSÓIS DE FUNDO ----------------------
const numSunflowers = 6;
const fundoGirassol = document.querySelector('.fundo-girassol');

for (let i = 0; i < numSunflowers; i++) {
  const sunflower = document.createElement('div');
  sunflower.classList.add('sunflower');

  const top = Math.random() * 80;
  const left = Math.random() * 90;
  sunflower.style.top = `${top}%`;
  sunflower.style.left = `${left}%`;

  const scale = 1.5 + Math.random() * 0.7;
  const rotate = Math.random() * 360;
  sunflower.style.transform = `rotate(${rotate}deg) scale(${scale})`;

  fundoGirassol.appendChild(sunflower);
}

// ---------------------- FRASE MOTIVACIONAL/VERSÍCULO ----------------------
const frases = [
  "Tudo posso naquele que me fortalece. — Filipenses 4:13",
  "O Senhor é o meu pastor, nada me faltará. — Salmos 23:1",
  "Entrega o teu caminho ao Senhor; confia nele, e ele tudo fará. — Salmos 37:5",
  "Não temas, porque eu sou contigo. — Isaías 41:10",
  "Alegrai-vos na esperança, sede pacientes na tribulação, perseverai na oração. — Romanos 12:12",
  "Você é mais forte do que imagina e capaz de mais do que pensa!",
  "Cada pequena vitória é uma grande conquista. Continue!",
  "Não importa o quão devagar você vá, desde que não pare.",
  "Seu esforço de hoje é o sucesso de amanhã.",
  "Acredite no seu potencial, você é capaz de grandes coisas!"
];

const fraseAleatoria = frases[Math.floor(Math.random() * frases.length)];
document.getElementById("frase-dia").textContent = fraseAleatoria;

// ---------------------- BOTÃO MODO ESCURO/CLARO ----------------------
const botaoModo = document.getElementById('modo-toggle');

botaoModo.addEventListener('click', () => {
  document.body.classList.toggle('modo-escuro');

  botaoModo.textContent = document.body.classList.contains('modo-escuro') ? '☀️' : '🌙';
});
