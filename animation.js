const profile = document.querySelector('.profile');

profile.addEventListener('mousemove', e => {
  const image = profile.querySelector('img');
  const width = profile.offsetWidth;
  const height = profile.offsetHeight;
  const xPos = (e.clientX / width - 0.5) * 20;
  const yPos = (e.clientY / height - 0.5) * 20;
  image.style.transform = `translate(${xPos}px, ${yPos}px)`;
});

profile.addEventListener('mouseleave', () => {
  const image = profile.querySelector('img');
  image.style.transform = 'translate(0, 0)';
});
