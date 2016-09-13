$(document).ready(function () {
  console.log('DOM loaded');
  listPeanuts();
  $('#add-peanut').submit(function (event) {
    event.preventDefault();
    var data = $('#add-peanut').serialize();
    $('#add-peanut').trigger('reset');
    addPeanut(data);
  })
});
function listPeanuts () {
  $.ajax({
    url: 'http://localhost:3000/peanuts',
    type: 'GET'
  }).done(function (data) {
    console.log('success listing peanuts')
    $('main').empty()
    data.forEach(function (elem, index) {
      $('main').append('<div class="card"  id="' + index + '">' +
        '<div class="card-header">' + elem.name + '</div>' +
        '<div class="card-block">' + elem.cost + '</div>' +
        '</div>')
    })
  }).fail(function () {
    console.log('error listing peanuts')
  })
}

function addPeanut (peanutData) {
  $.ajax({
    url: 'http://localhost:3000/peanuts',
    type: 'POST',
    data: peanutData
  }).done(function (data) {
    console.log('success adding peanut')
    listPeanuts()
  }).fail(function () {
    console.log('error adding peanut')
  })
}
