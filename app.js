// Параллакс-свечение за курсором
const bg = document.querySelector('.background');

window.addEventListener('mousemove', (e) => {
  const x = (e.clientX / window.innerWidth) * 100;
  const y = (e.clientY / window.innerHeight) * 100;

  bg.style.setProperty('--mx', x + '%');
  bg.style.setProperty('--my', y + '%');
});

// Генерация точек по всей странице
function createDots() {
  const dotsContainer = document.querySelector('.dots-container');
  if (!dotsContainer) return;

  const dotCount = 50; // Количество точек
  const dots = [];

  for (let i = 0; i < dotCount; i++) {
    const dot = document.createElement('span');
    dot.className = 'dot';
    
    // Случайная позиция по всей странице
    dot.style.top = Math.random() * 100 + '%';
    dot.style.left = Math.random() * 100 + '%';
    
    // Случайная задержка анимации для разнообразия
    dot.style.animationDelay = Math.random() * 4 + 's';
    
    // Случайный размер для разнообразия (от 4px до 8px)
    const size = 4 + Math.random() * 4;
    dot.style.width = size + 'px';
    dot.style.height = size + 'px';
    
    // Случайная прозрачность
    dot.style.opacity = 0.3 + Math.random() * 0.4;
    
    dotsContainer.appendChild(dot);
    dots.push(dot);
  }

  return dots;
}

// Микро-параллакс для контента
const heroContainer = document.querySelector('.hero-section .container');
let dots = [];

// Создаем точки после загрузки страницы
document.addEventListener('DOMContentLoaded', () => {
  dots = createDots();
});

window.addEventListener('mousemove', (e) => {
  const nx = e.clientX / window.innerWidth - 0.5;
  const ny = e.clientY / window.innerHeight - 0.5;

  if (heroContainer) {
    heroContainer.style.transform = `translate(${nx * 10}px, ${ny * 10}px)`;
  }

  dots.forEach((dot, i) => {
    const factor = (i % 10 + 1) * 4;
    dot.style.transform = `translate(${nx * factor}px, ${ny * factor}px)`;
  });
});