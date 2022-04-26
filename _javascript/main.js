// Anketa
document.querySelector('#form__submit').addEventListener('click', function(e){

  // const url = 'https://script.google.com/macros/s/AKfycbwT0lI-n24QHIHzWp8Bxj7ZyseWheOx0r8xDKW9RMC8N11zj8MJ3hvuHuOeqdeGGCjaLQ/exec';
  const url = 'https://script.google.com/macros/s/AKfycbzQdd1d-7kj3rksQNPBXI6vNJRvfjdb8u_L6NMRURtgfB2nYywfjw4d4gc9A_RI1R3JMw/exec';
  

  e.preventDefault();

  if(document.getElementById('gdpr').checked &&
     document.getElementById('naziv_tvrtke').value !== '' &&
     document.getElementById('email').value !== '' &&
     document.getElementById('telefon').value !== '' &&
     document.getElementById('naziv_projekta').value !== '' &&
     document.getElementById('trajanje_projekta').value !== '' &&
     document.getElementById('opis_projekta').value !== '' &&
     document.getElementById('cilj_projekta').value !== '' &&
     document.getElementById('link_projekta').value !== '' &&

     (document.getElementById('siromastvo').checked ||
     document.getElementById('glad').checked ||
     document.getElementById('zdravlje').checked ||
     document.getElementById('obrazovanje').checked ||
     document.getElementById('ravnopravnost').checked ||
     document.getElementById('voda').checked ||
     document.getElementById('energija').checked ||
     document.getElementById('dostojanstvo').checked ||
     document.getElementById('inovacije').checked ||
     document.getElementById('nejednakost').checked ||
     document.getElementById('odrzivost').checked ||
     document.getElementById('potrosnja').checked ||
     document.getElementById('klima').checked ||
     document.getElementById('ispod_vode').checked ||
     document.getElementById('na_kopnu').checked ||
     document.getElementById('mir').checked ||
     document.getElementById('partnerstvo').checked )
  ) {

      // remove warnings
      // remove warn gdpr
      if (document.getElementById('gdpr').checked) {
        document.querySelector('#error-msg').classList.add('is-hidden');
        document.querySelector('.gdpr_checkmark').style.border = '1px solid #fcdb0e';
      }
      // remove warn naziv tvrtke
      if (document.getElementById('naziv_tvrtke').value !== '') {
        document.querySelector('#error-msg-naziv_tvrtke').classList.add('is-hidden');
        document.querySelector('#naziv_tvrtke').style.border = '1px solid #fcdb0e';
      }
      // remove warn naziv kontakt email
      if (document.getElementById('email').value !== '') {
        document.querySelector('#error-msg-email').classList.add('is-hidden');
        document.querySelector('#email').style.border = '1px solid #fcdb0e';
      }
      // remove warn naziv kontakt telefon
      if (document.getElementById('telefon').value !== '') {
        document.querySelector('#error-msg-telefon').classList.add('is-hidden');
        document.querySelector('#telefon').style.border = '1px solid #fcdb0e';
      }
      // remove warn naziv projekta
      if (document.getElementById('naziv_projekta').value !== '') {
        document.querySelector('#error-msg-naziv_projekta').classList.add('is-hidden');
        document.querySelector('#naziv_projekta').style.border = '1px solid #fcdb0e';
      }
      // remove warn trajanje projekta
      if (document.getElementById('trajanje_projekta').value !== '') {
        document.querySelector('#error-msg-trajanje_projekta').classList.add('is-hidden');
        document.querySelector('#trajanje_projekta').style.border = '1px solid #fcdb0e';
      }
      // remove warn opis projekta
      if (document.getElementById('opis_projekta').value !== '') {
        document.querySelector('#error-msg-opis_projekta').classList.add('is-hidden');
        document.querySelector('#opis_projekta').style.border = '1px solid #fcdb0e';
      }
      // remove warn cilj projekta
      if (document.getElementById('cilj_projekta').value !== '') {
        document.querySelector('#error-msg-cilj_projekta').classList.add('is-hidden');
        document.querySelector('#cilj_projekta').style.border = '1px solid #fcdb0e';
      }
      // remove warn link projekta
      if (document.getElementById('link_projekta').value !== '') {
        document.querySelector('#error-msg-link_projekta').classList.add('is-hidden');
        document.querySelector('#link_projekta').style.border = '1px solid #fcdb0e';
      }
      // remove warn kategorija
      if ((document.getElementById('siromastvo').checked ||
          document.getElementById('glad').checked ||
          document.getElementById('zdravlje').checked ||
          document.getElementById('obrazovanje').checked ||
          document.getElementById('ravnopravnost').checked ||
          document.getElementById('voda').checked ||
          document.getElementById('energija').checked ||
          document.getElementById('dostojanstvo').checked ||
          document.getElementById('inovacije').checked ||
          document.getElementById('nejednakost').checked ||
          document.getElementById('odrzivost').checked ||
          document.getElementById('potrosnja').checked ||
          document.getElementById('klima').checked ||
          document.getElementById('ispod_vode').checked ||
          document.getElementById('na_kopnu').checked ||
          document.getElementById('mir').checked ||
          document.getElementById('partnerstvo').checked )
      ) {
        document.querySelector('#error-msg-kategorije').classList.add('is-hidden');
        document.querySelector('.one-line-with-gap').style.border = 'initial';
        document.querySelector('.one-line-with-gap').style.padding = 'initial';
      }

      document.querySelector('#form__submit').classList.add('is-hidden');
      // document.querySelector('#error-msg').classList.add('is-hidden');
      document.querySelector('#loading-indicator').classList.remove('is-hidden');
      // document.querySelector('.gdpr_checkmark').style.border = '1px solid #fcdb0e';

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
    // warn gdpr
    if (!document.getElementById('gdpr').checked) {
      document.querySelector('#error-msg').classList.remove('is-hidden');
      document.querySelector('.gdpr_checkmark').style.border = '1px solid #ff0000';
    } else {
      document.querySelector('#error-msg').classList.add('is-hidden');
      document.querySelector('.gdpr_checkmark').style.border = '1px solid #fcdb0e';
    }
    // warn naziv tvrtke
    if (document.getElementById('naziv_tvrtke').value == '') {
      document.querySelector('#error-msg-naziv_tvrtke').classList.remove('is-hidden');
      document.querySelector('#naziv_tvrtke').style.border = '1px solid #ff0000';
    } else {
      document.querySelector('#error-msg-naziv_tvrtke').classList.add('is-hidden');
      document.querySelector('#naziv_tvrtke').style.border = '1px solid #fcdb0e';
    }
    // warn naziv kontakt email
    if (document.getElementById('email').value == '') {
      document.querySelector('#error-msg-email').classList.remove('is-hidden');
      document.querySelector('#email').style.border = '1px solid #ff0000';
    } else {
      document.querySelector('#error-msg-email').classList.add('is-hidden');
      document.querySelector('#email').style.border = '1px solid #fcdb0e';
    }
    // warn naziv kontakt telefon
    if (document.getElementById('telefon').value == '') {
      document.querySelector('#error-msg-telefon').classList.remove('is-hidden');
      document.querySelector('#telefon').style.border = '1px solid #ff0000';
    } else {
      document.querySelector('#error-msg-telefon').classList.add('is-hidden');
      document.querySelector('#telefon').style.border = '1px solid #fcdb0e';
    }
    // warn naziv projekta
    if (document.getElementById('naziv_projekta').value == '') {
      document.querySelector('#error-msg-naziv_projekta').classList.remove('is-hidden');
      document.querySelector('#naziv_projekta').style.border = '1px solid #ff0000';
    } else {
      document.querySelector('#error-msg-naziv_projekta').classList.add('is-hidden');
      document.querySelector('#naziv_projekta').style.border = '1px solid #fcdb0e';
    }
    // warn trajanje projekta
    if (document.getElementById('trajanje_projekta').value == '') {
      document.querySelector('#error-msg-trajanje_projekta').classList.remove('is-hidden');
      document.querySelector('#trajanje_projekta').style.border = '1px solid #ff0000';
    } else {
      document.querySelector('#error-msg-trajanje_projekta').classList.add('is-hidden');
      document.querySelector('#trajanje_projekta').style.border = '1px solid #fcdb0e';
    }
    // warn opis projekta
    if (document.getElementById('opis_projekta').value == '') {
      document.querySelector('#error-msg-opis_projekta').classList.remove('is-hidden');
      document.querySelector('#opis_projekta').style.border = '1px solid #ff0000';
    } else {
      document.querySelector('#error-msg-opis_projekta').classList.add('is-hidden');
      document.querySelector('#opis_projekta').style.border = '1px solid #fcdb0e';
    }
    // warn cilj projekta
    if (document.getElementById('cilj_projekta').value == '') {
      document.querySelector('#error-msg-cilj_projekta').classList.remove('is-hidden');
      document.querySelector('#cilj_projekta').style.border = '1px solid #ff0000';
    } else {
      document.querySelector('#error-msg-cilj_projekta').classList.add('is-hidden');
      document.querySelector('#cilj_projekta').style.border = '1px solid #fcdb0e';
    }
    // warn link projekta
    if (document.getElementById('link_projekta').value == '') {
      document.querySelector('#error-msg-link_projekta').classList.remove('is-hidden');
      document.querySelector('#link_projekta').style.border = '1px solid #ff0000';
    } else {
      document.querySelector('#error-msg-link_projekta').classList.add('is-hidden');
      document.querySelector('#link_projekta').style.border = '1px solid #fcdb0e';
    }
    // warn kategorija
    if (!(document.getElementById('siromastvo').checked ||
        document.getElementById('glad').checked ||
        document.getElementById('zdravlje').checked ||
        document.getElementById('obrazovanje').checked ||
        document.getElementById('ravnopravnost').checked ||
        document.getElementById('voda').checked ||
        document.getElementById('energija').checked ||
        document.getElementById('dostojanstvo').checked ||
        document.getElementById('inovacije').checked ||
        document.getElementById('nejednakost').checked ||
        document.getElementById('odrzivost').checked ||
        document.getElementById('potrosnja').checked ||
        document.getElementById('klima').checked ||
        document.getElementById('ispod_vode').checked ||
        document.getElementById('na_kopnu').checked ||
        document.getElementById('mir').checked ||
        document.getElementById('partnerstvo').checked )
    ) {
      document.querySelector('#error-msg-kategorije').classList.remove('is-hidden');
      document.querySelector('.one-line-with-gap').style.border = '1px solid #ff0000';
      document.querySelector('.one-line-with-gap').style.padding = '20px';
    } else {
      document.querySelector('#error-msg-kategorije').classList.add('is-hidden');
      document.querySelector('.one-line-with-gap').style.border = 'initial';
      document.querySelector('.one-line-with-gap').style.padding = 'initial';
    }

  }

});

