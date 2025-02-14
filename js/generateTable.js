'use strict';

// const root = document.getElementById('root');
const main_table = document.getElementById('main_table');

let mutantDataCSV =
  `Produkt,Startjahr,Endjahr,Tierart,Anzahl Tiere,Erfolgsquote,Erfolgreiche Mutierungen,Kommentar
SIM1,1999,2001,Rhesusaffe,50,8%,4, [Kommentar]
SIM2,2001,2002,Rhesusaffe,80,17%,14, [Kommentar]
SIM3,2001,2006,Rhesusaffe,200,26%,52,Einführung Kaninchen
SIM4,2006,2011,Rhesusaffe,100,12%,12, [Kommentar]
SIM5,2012,2017,Rhesusaffe,400,40%,160,Einführung Katzen
SIM6,2018,2023,Rhesusaffe,300,81%,243, [Kommentar]
SIM7,2024,2027,Rhesusaffe,200,87%,174, [Kommentar]
CUN1,2002,2002,Kaninchen,120,5%,6, [Kommentar]
CUN2,2003,2004,Kaninchen,50,6%,3, [Kommentar]
CUN3,2004,2008,Kaninchen,400,10%,40, [Kommentar]
CUN4,2008,2013,Kaninchen,1200,23%,276,Erfolgreiche Kommerzialisierung
CUN5,2012,2014,Kaninchen,100,22%,22, [Kommentar]
CUN6,2015,2020,Kaninchen,400,64%,256, [Kommentar]
CUN7,2021,2026,Kaninchen,400,63%,252, [Kommentar]
CUN8,2027,2027,Kaninchen,40,64%,26, [Kommentar]
FEL1,2016,2016,Katze,100,4%,4, [Kommentar]
FEL2,2016,2017,Katze,150,9%,14, [Kommentar]
FEL3,2017,2022,Katze,400,30%,120,Pause
FEL4,2018,2022,Katze,300,57%,171,Linus
FEL5,2023,2027,Katze,500,53%,265, [Kommentar]
FEL6,2025,2027,Katze,100,54%,54,LinusII
CAN1,2017,2017,Hund,100,2%,2, [Kommentar]
CAN2,2017,2017,Hund,100,10%,10, [Kommentar]
CAN3,2017,2019,Hund,300,28%,84,Bellé
CAN4,2018,2023,Hund,520,54%,281, [Kommentar]
CAN5,2023,2027,Hund,300,53%,159, [Kommentar]`;

const covertCSVToArray = (csv) => {
  let objectArray = csv.split('\n').map(csvLine => csvLine.split(','));
  return objectArray;

}

const fillTableWithInput = (inputArray, table) => {
  const TABLE_ROW_COUNT = inputArray[0].length; // Tabellenzeilen berechnen => 8
  const TABLE_COLUMN_COUNT = inputArray.length; // Tabellenspalten berechnen => 27
  console.log('TABLE_ROW_COUNT:', TABLE_ROW_COUNT);
  console.log('TABLE_COLUMN_COUNT:', TABLE_COLUMN_COUNT);

  const BOOTSTRAP_TABLE_SIZE = 12
  const COLUMN_SIZE = Math.floor(Number(BOOTSTRAP_TABLE_SIZE / TABLE_ROW_COUNT)); // Spaltengröße berechnen => 1


  for (let i = 0; i < TABLE_COLUMN_COUNT; i++) { // Reihe befüllen

    table.innerHTML += `<div class="row"></div>`;

    for (let j = 0; j < TABLE_ROW_COUNT; j++) { // Spalte befüllen

      table.querySelector(`.row:nth-child(${i + 1})`).innerHTML += `<div class="col-${j === (TABLE_ROW_COUNT - 1) ?
        (BOOTSTRAP_TABLE_SIZE - j) // Die letzte Spalte füllt den Restplatz aus
        : COLUMN_SIZE
        } border">${inputArray[i][j]}</div>`;

    }

  }

  // Tabellenüberschriften erstellen
  table.querySelector(`.row:first-child`).classList.add('my-table-head');
  // Tabelle einfärben
  colorizeTable(table);

}

const colorizeTable = (table) => {
  table.querySelectorAll(`.row:nth-child(2n)`).forEach(row => row.classList.add('my-tabel-color-1'));
  table.querySelectorAll(`.row:nth-child(2n+1)`).forEach(row => row.classList.add('my-tabel-color-2'));
  table.querySelector(`.my-table-head`).classList.add('bg-secondary', 'bg-gradient', 'text-white');
}

fillTableWithInput(covertCSVToArray(mutantDataCSV), main_table);

