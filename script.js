// 🌟 QUANTIDADE DE BOLINHAS NO FUNDO
const numDots = 180; // ajuste conforme quiser
const fundoDots = document.querySelector('.fundo-dots');

for (let i = 0; i < numDots; i++) {
  const dot = document.createElement('div');
  dot.classList.add('dot');

  // Posição aleatória na tela
  dot.style.top = `${Math.random() * 100}%`;
  dot.style.left = `${Math.random() * 100}%`;

  // Tamanho aleatório entre 2px e 4px
  const size = Math.random() * 2 + 2;
  dot.style.width = `${size}px`;
  dot.style.height = `${size}px`;

  // Opacidade aleatória para leveza visual
  dot.style.opacity = `${Math.random() * 0.4 + 0.3}`;

  fundoDots.appendChild(dot); // adiciona no container específico
}

// 🌻 GIRASSÓIS TRANSPARENTES NO FUNDO
const numSunflowers = 5;
const fundoGirassol = document.querySelector('.fundo-girassol');

for (let i = 0; i < numSunflowers; i++) {
  const sunflower = document.createElement('div');
  sunflower.classList.add('sunflower');

  // Posição aleatória na tela
  sunflower.style.top = `${Math.random() * 100}%`;
  sunflower.style.left = `${Math.random() * 100}%`;

  // Rotação e escala aleatória para parecer natural
  sunflower.style.transform = `rotate(${Math.random() * 360}deg) scale(${8 + Math.random() * 0.5})`;

  fundoGirassol.appendChild(sunflower); // adiciona no container acima dos dots
}

// ✨ FRASE MOTIVACIONAL OU VERSÍCULO DO DIA
const frases = [
  // 📖 Versículos bíblicos
  "Tudo posso naquele que me fortalece. — Filipenses 4:13",
  "O Senhor é o meu pastor, nada me faltará. — Salmos 23:1",
  "Entrega o teu caminho ao Senhor; confia nele, e ele tudo fará. — Salmos 37:5",
  "Não temas, porque eu sou contigo. — Isaías 41:10",
  "Alegrai-vos na esperança, sede pacientes na tribulação, perseverai na oração. — Romanos 12:12",

  // 💬 Frases motivacionais
  "Você é mais forte do que imagina e capaz de mais do que pensa!",
  "Cada pequena vitória é uma grande conquista. Continue!",
  "Não importa o quão devagar você vá, desde que não pare.",
  "Seu esforço de hoje é o sucesso de amanhã.",
  "Acredite no seu potencial, você é capaz de grandes coisas!"
];

// Escolhe uma frase aleatória e coloca no parágrafo com ID "frase-dia"
const fraseAleatoria = frases[Math.floor(Math.random() * frases.length)];
document.getElementById("frase-dia").textContent = fraseAleatoria;

// 🌗 BOTÃO DE MODO ESCURO/CLARO
const botaoModo = document.getElementById('modo-toggle');

botaoModo.addEventListener('click', () => {
  document.body.classList.toggle('modo-escuro');

  // Muda o ícone do botão (sol/lua)
  if (document.body.classList.contains('modo-escuro')) {
    botaoModo.textContent = '☀️';
  } else {
    botaoModo.textContent = '🌙';
  }
});
