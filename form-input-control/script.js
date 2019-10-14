/*
    Author: Samet Koyuncu
    Coded: 15.9.2019
*/
var basarili = document.querySelector('#basarili');
var hata = document.querySelector('#hata');

var ul = document.querySelector('ul');

var errorList = [
  "<li>Lütfen adınızı giriniz</li>", //emptyFormIndex 0
  "<li>Lütfen şehir seçiniz</li>", //emptyFormIndex 1
  "<li>Lütfen en az 20 kelimelik bir hakkımda yazısı yazınız.</li>", //emptyFormIndex 2
  "<li>Lütfen eposta giriniz</li>", //emptyFormIndex 3
  "<li>Lütfen parola giriniz</li>", ////emptyFormIndex 4
  "<li>Lütfen eposta adresinizi düzgün giriniz.</li>", //emptyFormIndex 5
  "<li>Parolanız en az 7 karakter içermelidir.</li>" //emptyFormIndex 6
];


document.querySelector('#btnKaydet').onclick = function () {
  var showErrorList = "";

  var form = [];
  var emptyFormIndex = [];
  var index;
  form[0] = document.querySelector('#adsoyad').value;
  form[1] = document.querySelector('#sehir').value;
  form[2] = document.querySelector('#hakkinda').value;
  form[3] = document.querySelector('#eposta').value;
  form[4] = document.querySelector('#parola').value;

  //search for empty input area
  for (var item = 0; item < 5; item++) {
    if (form[item] == '') {
      // console.log("empty index: "+item);
      emptyFormIndex.push(item);
    } else if (item == 2) { //less than 20 words show error message
      var wordCount = form[item].split(' ');
      if (form[item] != '' && wordCount.length < 20) {
        emptyFormIndex.push(item);
      }
    } else if (item == 3) { //less than 20 words show error message
      if(form[item] != ''){
        var check = ValidateEmail(form[item]);
        if(check == false){
          emptyFormIndex.push(item + 2);
        }     
      }
    } else if (item == 4) { //less than 7 character show error message
      if (form[item] != '' && form[item].length < 7) {
        emptyFormIndex.push(item + 2);
      }
    } else {
      // console.log(form[item]);
    }
  }

  if (emptyFormIndex.length == 0) {
    basarili.classList.remove('d-none');
    hata.classList.add('d-none');
  } else {
    basarili.classList.add('d-none');
    hata.classList.remove('d-none');

    //show error list
    emptyFormIndex.forEach(function (item) {
      console.log("hata mesajı: " + errorList[item]);
      showErrorList += errorList[item];
    });

    //add error message in alert-danger area
    ul.innerHTML = showErrorList;
  }

  //copied by https://www.w3resource.com/javascript/form/email-validation.php
  function ValidateEmail(inputText) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (inputText.match(mailformat)) {
      return true;
    }
    else {
      return false;
    }
  }

};

