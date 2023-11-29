import randomPassword from './geraSenha';

const Password = document.querySelector('.senha');
const qtdCaracteres = document.querySelector('.qtdCaracteres');
const uppercaseCheck = document.querySelector('.uppercaseCheck');
const lowercaseCheck = document.querySelector('.lowercaseCheck');
const NumberCheck = document.querySelector('.NumberCheck');
const symbolCheck = document.querySelector('.symbolCheck');
const buttonSenha = document.querySelector('.button-senha');


export default () => {
  buttonSenha.addEventListener('click', () => {

    Password.innerHTML = gera();

  });
};

function gera() {
  const senha = randomPassword(qtdCaracteres.value, uppercaseCheck.checked, lowercaseCheck.checked, NumberCheck.checked, symbolCheck.checked);
  return senha || "Nada selecionado";
}