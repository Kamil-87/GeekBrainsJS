'use strict';

/*
1. Создать функцию, генерирующую шахматную доску. При этом можно использовать любые html-теги по своему желанию.
    Доска должна быть разлинована соответствующим образом, т.е. чередовать черные и белые ячейки.
    Строки должны нумероваться числами от 1 до 8, столбцы – латинскими буквами A, B, C, D, E, F, G, H.
*/

const chessboard = {
    blackCellColor: '#000',
    arrNumber: ['', 1, 2, 3, 4, 5, 6, 7, 8,''],
    arrLetter: ['','A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',''],

    getChessBoard() {
    document.body.insertAdjacentHTML('afterbegin', `<table id="table"></table>`);
    const tableId = document.getElementById('table');

    for(let i = 0; i <10; i++) {
       const trElem = tableId.insertRow(i);

       for(let j = 0; j < 10; j++) {
           const cell = trElem.insertCell(j);
           if (i === 0) cell.innerText = this.arrLetter[j];
           if(j === 0) cell.innerText = this.arrNumber[i];

           if ( tableId.rows[0] && tableId.rows[9] && tableId.rows[i].cells[0] && tableId.rows[i].cells[9]) {
               let symbolCells = document.querySelectorAll('tr:first-child > td, tr > td:first-child, tr:last-child > td, tr > td:last-child');
               symbolCells.forEach( symbolCell =>  symbolCell.style = "background-color: #eee; border: none; text-align: center;");
           }
       }
   }
    let blackCells = document.querySelectorAll('tr:nth-child(n+2):nth-child(odd) > td:nth-child(even):nth-child(-n+8), tr:nth-child(even):nth-child(n+2):nth-child(-n+8) > td:nth-child(odd):nth-child(n+2)');
    blackCells.forEach( blackCell => blackCell.style.backgroundColor = this.blackCellColor);
   }

};

window.addEventListener('load', () => chessboard.getChessBoard() );


