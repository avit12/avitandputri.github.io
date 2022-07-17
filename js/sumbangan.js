function changeAtiveTab(event, tabID) {
  let element = event.target;
  while (element.nodeName !== 'A') {
    element = element.parentNode;
  }
  ulElement = element.parentNode.parentNode;
  aElements = ulElement.querySelectorAll('li > a');
  tabContents = document.getElementById('tabs-id').querySelectorAll('.tab-content > div');
  for (let i = 0; i < aElements.length; i++) {
    aElements[i].classList.remove('text-white');
    aElements[i].classList.remove('bg-pink-600');
    aElements[i].classList.add('text-white');
    aElements[i].classList.add('bg-white');
    tabContents[i].classList.add('hidden');
    tabContents[i].classList.remove('block');
  }
  element.classList.remove('text-white');
  element.classList.remove('bg-white');
  element.classList.add('text-white');
  element.classList.add('bg-coklat');
  document.getElementById(tabID).classList.remove('hidden');
  document.getElementById(tabID).classList.add('block');
}

// SALIN

// ANIMASI SALIN
// BANK JATIM
$(document).ready(function () {
  $('#tombol').click(function () {
    $('#tombol').addClass('onclic', 250, validate);
  });

  function validate() {
    setTimeout(function () {
      $('#tombol').removeClass('onclic');
      $('#tombol').addClass('validate', 450, callback);
    }, 2250);
  }
  function callback() {
    setTimeout(function () {
      $('#tombol').removeClass('validate');
    }, 1250);
  }
});

// BANK BRI
$(document).ready(function () {
  $('#tombol-bri').click(function () {
    $('#tombol-bri').addClass('onclic-bri', 250, validate);
  });

  function validate() {
    setTimeout(function () {
      $('#tombol-bri').removeClass('onclic-bri');
      $('#tombol-bri').addClass('validate-bri', 450, callback);
    }, 2250);
  }
  function callback() {
    setTimeout(function () {
      $('#tombol-bri').removeClass('validate-bri');
    }, 1250);
  }
});

// GOPAY
$(document).ready(function () {
  $('#tombol-gopay').click(function () {
    $('#tombol-gopay').addClass('onclic-gopay', 250, validate);
  });

  function validate() {
    setTimeout(function () {
      $('#tombol-gopay').removeClass('onclic-gopay');
      $('#tombol-gopay').addClass('validate-gopay', 450, callback);
    }, 2250);
  }
  function callback() {
    setTimeout(function () {
      $('#tombol-gopay').removeClass('validate-gopay');
    }, 1250);
  }
});

// SHOPPE
$(document).ready(function () {
  $('#tombol-shoppe').click(function () {
    $('#tombol-shoppe').addClass('onclic-shoppe', 250, validate);
  });

  function validate() {
    setTimeout(function () {
      $('#tombol-shoppe').removeClass('onclic-shoppe');
      $('#tombol-shoppe').addClass('validate-shoppe', 450, callback);
    }, 2250);
  }
  function callback() {
    setTimeout(function () {
      $('#tombol-shoppe').removeClass('validate-shoppe');
    }, 1250);
  }
});

// $(function() {
//   $( "#tombol" ).click(function() {
//     $( "#tombol" ).addClass( "onclic", 250, validate);
//   });

//   function validate() {
//     setTimeout(function() {
//       $( "#tombol" ).removeClass( "onclic" );
//       $( "#tombol" ).addClass( "validate", 450, callback );
//     }, 2250 );
//   }
//     function callback() {
//       setTimeout(function() {
//         $( "#tombol" ).removeClass( "validate" );
//       }, 1250 );
//     }
//   });
