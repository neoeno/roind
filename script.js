const form = document.querySelector('[data-form="initial"]');
const nameField = document.querySelector('[data-field="name"]');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let name = form.querySelector('#name').value;
  nameField.textContent = name;
  showPane('next-one');
  hidePane('initial');
});

function showPane(paneName) {
  let element = document.querySelector(`[data-pane="${paneName}"]`);
  element.classList.remove('hidden');
};

function hidePane(paneName) {
  let element = document.querySelector(`[data-pane="${paneName}"]`);
  element.classList.add('hidden');
};
