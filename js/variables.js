'use strict';

const MAIN_TABLE = document.getElementById('main_table');
const ORIGINAL_MUTANT_DATA = covertCSVToArray(mutantDataCSV);
const COLUMN_CONTENT_TYPES = [];

let currentFilterValue = '';
let currentSortingValue = '';
let currentMutantNumberP1 = 0;
let currentMutantNumberP2 = 0;
let currentMutantNumberP3 = 0;
let currentMutantNumberP4 = 0;

const setCurrentFilterValue = (filterValue) => currentFilterValue = filterValue;
const setCurrentSortingValue = (sortingValue) => currentSortingValue = sortingValue;
const setCurrentMutantNumberP1 = (mutantNumberP1) => currentMutantNumberP1 = mutantNumberP1;
const setCurrentMutantNumberP2 = (mutantNumberP2) => currentMutantNumberP2 = mutantNumberP2;
const setCurrentMutantNumberP3 = (mutantNumberP3) => currentMutantNumberP3 = mutantNumberP3;
const setCurrentMutantNumberP4 = (mutantNumberP4) => currentMutantNumberP4 = mutantNumberP4;

const getCurrentFilterValue = () => currentFilterValue;
const getCurrentSortingValue = () => currentSortingValue;
const getCurrentMutantNumberP1 = () => currentMutantNumberP1;
const getCurrentMutantNumberP2 = () => currentMutantNumberP2;
const getCurrentMutantNumberP3 = () => currentMutantNumberP3;
const getCurrentMutantNumberP4 = () => currentMutantNumberP4;

const getOriginalMutantData = () => ORIGINAL_MUTANT_DATA.map(a => a);