const d = document;

/* *** Check color password */
d.addEventListener('DOMContentLoaded', function () {
  const passwordContent = d.querySelector(".form__input--password");
  const eyeIcon = d.querySelector(".form__eye");

  eyeIcon.addEventListener('click', function () {
    if (passwordContent.type === 'password') {
      passwordContent.type = 'text';
      eyeIcon.classList.remove('bx-show');
      eyeIcon.classList.add('bx-hide');
    } else {
      passwordContent.type = 'password';
      eyeIcon.classList.remove('bx-hide');
      eyeIcon.classList.add('bx-show');
    }
  });
});

/* *** Requirements password */
const passwordInput = document.getElementById('password');
const requirements = {
  length: false,
  uppercase: false,
  lowercase: false,
  number: false,
  special: false,
};


passwordInput.addEventListener('input', function () {
  const password = passwordInput.value;

  // Validar longitud
  requirements.length = password.length >= 8;
  d.getElementById('length').style.color = requirements.length ? '#011F5B' : '#9A0909';

  // Validar mayúsculas
  requirements.uppercase = /[A-Z]/.test(password);
  d.getElementById('uppercase').style.color = requirements.uppercase ? '#011F5B' : '#9A0909';

  // Validar minúsculas
  requirements.lowercase = /[a-z]/.test(password);
  d.getElementById('lowercase').style.color = requirements.lowercase ? '#011F5B' : '#9A0909';

  // Validar números
  requirements.number = /[0-9]/.test(password);
  d.getElementById('number').style.color = requirements.number ? '#011F5B' : '#9A0909';

  // Validar caracteres especiales
  requirements.special = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  d.getElementById('special').style.color = requirements.special ? '#011F5B' : '#9A0909';
});

function allRequirementsMet() {
  return Object.values(requirements).every(req => req === true);
}

const form = d.querySelector('form'); // Asegúrate de que este selector coincida con tu formulario

form.addEventListener('submit', function (e) {
  if (!allRequirementsMet()) {
    e.preventDefault(); // Impide el envío del formulario
    alert('Por favor, asegúrate de cumplir todos los requisitos de la contraseña antes de enviar el formulario.');
  }
});

const submitButton = d.querySelector('button[type="submit"]'); // Ajusta este selector si es necesario

passwordInput.addEventListener('input', function () {
  // ... (código de validación anterior) ...

  // Habilitar/deshabilitar el botón de envío
  submitButton.disabled = !allRequirementsMet();
});

