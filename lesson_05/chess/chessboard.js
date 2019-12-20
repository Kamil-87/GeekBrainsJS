'use strict';

/*
1. Создать функцию, генерирующую шахматную доску. При этом можно использовать любые html-теги по своему желанию.
    Доска должна быть разлинована соответствующим образом, т.е. чередовать черные и белые ячейки.
    Строки должны нумероваться числами от 1 до 8, столбцы – латинскими буквами A, B, C, D, E, F, G, H.
*/

const chessboard = {
    blackCellColor: '#000',
    arrNumber: ['', 1, 2, 3, 4, 5, 6, 7, 8, ''],
    arrLetter: ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', ''],
    table: {},

    createChessBoard() {
        this.createTable();
        this.createCells();
        this.initColors();
    },

    createTable() {
        const tableId = 'table';
        document.body.insertAdjacentHTML('afterbegin', `<table id=${tableId}></table>`);
        this.table = document.getElementById(tableId);
    },

    createCells() {
        for (let i = 0; i < this.arrNumber.length; i++) {
            const trElem = this.table.insertRow(i);

            for (let j = 0; j < this.arrLetter.length; j++) {
                const cell = trElem.insertCell(j);
                if (i === 0) cell.innerText = this.arrLetter[j];
                if (j === 0) cell.innerText = this.arrNumber[i];
            }
        }
    },

    initColors() {
        // black cells
        this.table.querySelectorAll('tr:nth-child(n+2):nth-child(odd) > td:nth-child(even):nth-child(-n+8), ' +
            'tr:nth-child(even):nth-child(n+2):nth-child(-n+8) > td:nth-child(odd):nth-child(n+2)')
            .forEach(blackCell => blackCell.style.backgroundColor = this.blackCellColor);

        // borders
        this.table.querySelectorAll('tr:first-child > td, tr > td:first-child, tr:last-child > td, tr > td:last-child')
            .forEach(symbolCell => symbolCell.style = "background-color: #eee; border: none; text-align: center;");
    }

};

window.addEventListener('load', () => chessboard.createChessBoard());


