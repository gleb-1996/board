function boardGeneration() {

  function addDivBoard() {
    var $parentElem = document.body;
    var $divBoard = document.createElement('div');
    $divBoard.setAttribute('id', 'board');
    $parentElem.appendChild($divBoard);
  }

  function addDivField() {
    var $parentElem = document.getElementById('board');
    var $divField = document.createElement('div');
    $divField.setAttribute('id', 'field');
    $parentElem.appendChild($divField);
  }

  function addNumbersAndLetters() {

    // Add element with id='numbers'
    var $parentElem = document.getElementById('field');
    var $divNumbers = document.createElement('div');
    $divNumbers.setAttribute('id', 'numbers');
    $parentElem.appendChild($divNumbers);

    // Add element with id='numbers-rotate'
    var $divNumbersRotate = document.createElement('div');
    $divNumbersRotate.setAttribute('id', 'numbers-rotate');
    $parentElem.appendChild($divNumbersRotate);

    // Add element with id='letters'
    var $divLetters = document.createElement('div');
    $divLetters.setAttribute('id', 'letters');
    $parentElem.appendChild($divLetters);

    // Add element with id='letters-rotate'
    var $divLettersRotate = document.createElement('div');
    $divLettersRotate.setAttribute('id', 'letters-rotate');
    $parentElem.appendChild($divLettersRotate);

    // Create arr letters
    var arrLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

    // Add childs elements with class='cell-number'
    for (var i = 1; i <= 8; i++) {
      var $divCellNumber = document.createElement('div');
      var $divCellNumberRotate = document.createElement('div');
      var $divCellLetters = document.createElement('div');
      var $divCellLettersRotate = document.createElement('div');
      $divCellNumber.classList.add('cell-number');
      $divCellNumberRotate.classList.add('cell-number');
      $divCellLetters.classList.add('cell-letter');
      $divCellLettersRotate.classList.add('cell-letter');

      $divNumbers.appendChild($divCellNumber);
      $divNumbersRotate.appendChild($divCellNumberRotate);
      $divLetters.appendChild($divCellLetters);
      $divLettersRotate.appendChild($divCellLettersRotate);
 
      var arrCellNumber = $divNumbers.getElementsByClassName('cell-number');
      var arrCellNumberRotate = $divNumbersRotate.getElementsByClassName('cell-number');
      var arrCellLetter = $divLetters.getElementsByClassName('cell-letter');
      var arrCellLetterRotate = $divLettersRotate.getElementsByClassName('cell-letter');
      for (var j = arrCellNumber.length - 1; j >= 0; j--) {
        var num = String(j + 1);
        arrCellNumber[j].textContent = num;
        arrCellNumberRotate[j].textContent = num;
        arrCellNumber[j].classList.add('rotate');

        arrCellLetter[j].textContent = arrLetters[j];
        arrCellLetterRotate[j].textContent = arrLetters[j];
      }
    }

    $divNumbers.classList.add('rotate');

  }

  function cellСreation() {

    for (var i = 1; i <= 8; i++) {
      var $divString = document.createElement('div');
      $divString.classList.add('string');
      var parent = document.getElementById('field');

      parent.appendChild($divString);
    }

    var arrString = parent.getElementsByClassName('string');
    for (var x = 0; x < arrString.length; x++) {
      for (var j = 0; j < arrString.length; j++) {
        var $divCell = document.createElement('div');
        $divCell.classList.add('cell');
        arrString[j].appendChild($divCell);
      }
    }

  }

  addDivBoard();
  addDivField();
  addNumbersAndLetters();
  cellСreation();

}

Window.onload = boardGeneration;

boardGeneration();