const portfolioWrap = document.querySelector('.portfolio-wrap');
const portfolioImage = document.querySelector('.img-fluid');

portfolioWrap.addEventListener('mousemove', (e) => {
  const rect = portfolioWrap.getBoundingClientRect();
  const x = e.clientX - rect.left; // Положение курсора по оси X относительно контейнера
  const y = e.clientY - rect.top;  // Положение курсора по оси Y относительно контейнера

  // Рассчитываем центральную точку для масштабирования в зависимости от положения курсора
  const moveX = ((x / rect.width) - 0.5) * 30;  // Коэффициент движения по оси X
  const moveY = ((y / rect.height) - 0.5) * 30; // Коэффициент движения по оси Y

  // Применяем трансформацию с увеличением и смещением изображения в зависимости от позиции курсора
  portfolioImage.style.transform = `scale(1.5) translate(${moveX}px, ${moveY}px)`;
});

portfolioWrap.addEventListener('mouseleave', () => {
  // Возвращаем изображение в исходное положение при уходе курсора
  portfolioImage.style.transform = 'scale(1) translate(0, 0)';
});
