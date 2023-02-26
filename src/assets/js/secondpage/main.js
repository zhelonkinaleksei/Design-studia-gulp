import { burger } from '../firstpage/burger';
import { breefInfo } from './breefinfo';
import { clicking } from './click';
import { countWords } from './countwords';
import { dropdown } from './dropdown';
import { filePreview } from './filepreview';
import { alertButton } from '../firstpage/alert';
import { sizeInput } from './sizeInput';
import { particleJS } from '../firstpage/particle';
import { Formspree } from './formspree';


//  Formspree();
//===========form=====================

form.onsubmit = async function(e) {
    e.preventDefault();
    let form = document.querySelector('.breef__form'),
    formInputs = document.querySelectorAll('.js-input'),
    formTextarea = document.querySelectorAll('.js-textarea'),
    inputEmail = document.querySelector('.js-input-email'),
    inputPhone = document.querySelector('.js-input-phone');
   
    function validateEmail(email) {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    function validatePhone(phone) {
        let re = /^[0-9\s]*$/;
        return re.test(String(phone));
    }
  
    let emailVal = inputEmail.value;
    let phoneVal = inputPhone.value;
    let emptyInputs = Array.from(formInputs).filter(input => input.value === '');
    let emptyTextarea = Array.from(formTextarea).filter(textarea => textarea.value === '');
  
    formInputs.forEach(function(input) {
      if (input.value === '') {
        input.classList.add('error');
      } else {
        input.classList.remove('error');
      }
    });
  
    formTextarea.forEach(function(textarea) {
      if (textarea.value === '') {
        textarea.classList.add('error');
      } else {
        textarea.classList.remove('error');
      }
    });
  
    if (!validatePhone(phoneVal)) {
      alert('Недопустимый телефон');
      inputPhone.classList.add('error');
      return false;
    } else {
      inputPhone.classList.remove('error');
    }
  
    if (emptyInputs.length !== 0) {
      alert('Заполните все поля');
      return false;
    }
  
    if (emptyTextarea.length !== 0) {
      alert('Заполните все поля');
      return false;
    }
  
    if (!validateEmail(emailVal)) {
      alert('Недопустимый Email');
      inputEmail.classList.add('error');
      return false;
    } else {
      inputEmail.classList.remove('error');
    };
    
    let status = document.querySelector(".my-form-status");
    let data = new FormData(e.target);
    fetch(e.target.action, {
      method: form.method,
      body: data,
      headers: {
          'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        alert("Форма успешно отправлена, мы скоро с вами свяжемся, спасибо!")
        status.innerHTML = "Thanks for your submission!";
        form.onsubmit = async function(e){}
        form.reset()
        
      } else {
        response.json().then(data => {
          if (Object.hasOwn(data, 'errors')) {
            status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
          } else {
            alert("Что-то пошло не так!")
          }
        })
      }
    }).catch(error => {
      alert("Что-то пошло не так!")
    });
    
  }

  let fileInput = document.getElementById('breefattach');
  fileInput.addEventListener('change', fileValidation);
  function fileValidation() {
  
    let filePath = fileInput.value;
  
    // Allowing file type
    let allowedExtensions =
  /(\.jpg|\.txt|\.pdf|\.word|\.png)$/i;
     
    if (!allowedExtensions.exec(filePath)) {
        alert('Недопустимый тип файла');
        fileInput.value = '';
        return false;
    }
   
  };

//   xhr.open('POST', 'formsend.php', true);
//   xhr.send(formData);

//   form.reset();
//   alert('Ваша форма отправлена, мы скоро с вами свяжемся, спасибо!');
// };

// let fileInput = document.getElementById('breefattach');
// fileInput.addEventListener('change', fileValidation);

// function fileValidation() {

//   let filePath = fileInput.value;

//   // Allowing file type
//   let allowedExtensions =
//     /(\.jpg|\.txt|\.pdf|\.word|\.png)$/i;

//   if (!allowedExtensions.exec(filePath)) {
//     alert('Недопустимый тип файла');
//     fileInput.value = '';
//     return false;
//   }
// };



//==============end form===========



//вызов бургера иодалки и алерта
burger();
//показ breefinfo
breefInfo();
//файл превью
filePreview();
//dropdown
dropdown();
//счетчик слов
countWords();
//click
clicking();
//alert
alertButton();

sizeInput();


//фон
particleJS();