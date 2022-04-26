// Anketa
document.querySelector('#form__submit').addEventListener('click', function(e){

  // const url = 'https://script.google.com/macros/s/AKfycbwT0lI-n24QHIHzWp8Bxj7ZyseWheOx0r8xDKW9RMC8N11zj8MJ3hvuHuOeqdeGGCjaLQ/exec';
  const url = 'https://script.google.com/macros/s/AKfycbzQdd1d-7kj3rksQNPBXI6vNJRvfjdb8u_L6NMRURtgfB2nYywfjw4d4gc9A_RI1R3JMw/exec';
  

  e.preventDefault();

  if(document.getElementById('gdpr').checked) {

      document.querySelector('#form__submit').classList.add('is-hidden');
      document.querySelector('#error-msg').classList.add('is-hidden');
      document.querySelector('#loading-indicator').classList.remove('is-hidden');
      document.querySelector('.gdpr_checkmark').style.border = '1px solid #fcdb0e';

      // console.log($('form#formZutiOkvir').serializeJSON());

      fetch(url,{
        method: 'POST',
        mode: 'no-cors',
        cache: 'no-cache',
        headers: {
        'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: $('form#formZutiOkvir').serializeJSON()
      })
        .then(document.querySelector('#loading-indicator').classList.add('is-hidden'))
        .then(document.querySelector('#response-msg').classList.remove('is-hidden'));
        
  } else {
    document.querySelector('#error-msg').classList.remove('is-hidden');
    document.querySelector('.gdpr_checkmark').style.border = '1px solid #ff0000';
  }

});

