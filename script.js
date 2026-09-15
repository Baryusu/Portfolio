const filterButtons = document.querySelectorAll('.filter-button');
const projectCards = document.querySelectorAll('.project-card');
const toolChips = document.querySelectorAll('.tool-chip');
const toolOutput = document.querySelector('.tool-output');
const copyButton = document.querySelector('.copy-email');
const toast = document.querySelector('.toast-message');
const cursorOrb = document.querySelector('.cursor-orb');

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    filterButtons.forEach((item) => item.classList.remove('is-active'));
    button.classList.add('is-active');
    const filter = button.dataset.filter;
    projectCards.forEach((card) => {
      const shouldShow = filter === 'all' || card.dataset.category === filter;
      card.classList.toggle('is-hidden', !shouldShow);
    });
  });
});

toolChips.forEach((chip) => {
  chip.addEventListener('mouseenter', () => {
    const tool = chip.dataset.tool;
    const messages = {
      Unity: 'Unity says: ship the weird prototype.',
      Godot: 'Godot says: open source, open portals.',
      Aseprite: 'Aseprite says: pixel art, made simple.',
      Google: 'Google says: search for the truth.',
      Canva: 'Canva says: design for everyone.',
      Git: 'Git says: commit early, commit often.'
    };
    toolOutput.textContent = messages[tool];
  });
});

document.querySelector('.toolbox').addEventListener('mouseleave', () => {
  toolOutput.textContent = 'hover a tool. it may have opinions.';
});

copyButton.addEventListener('click', async () => {
  const email = copyButton.dataset.email;
  try {
    await navigator.clipboard.writeText(email);
    toast.classList.add('is-visible');
    window.setTimeout(() => toast.classList.remove('is-visible'), 2200);
  } catch {
    window.location.href = `mailto:${email}`;
  }
});

document.addEventListener('mousemove', (event) => {
  cursorOrb.style.left = `${event.clientX}px`;
  cursorOrb.style.top = `${event.clientY}px`;
});

document.querySelectorAll('a, button').forEach((interactive) => {
  interactive.addEventListener('mouseenter', () => {
    cursorOrb.style.width = '32px';
    cursorOrb.style.height = '32px';
  });
  interactive.addEventListener('mouseleave', () => {
    cursorOrb.style.width = '18px';
    cursorOrb.style.height = '18px';
  });
});
