export class AngularService {
    private rows: Number[];
    private columns: Number[];
    private cell: Number[][];
    private rgba1: Number[][];
    private rgba2: Number[][];
    private rgba3: Number[][];
    private isTimerOn: boolean;

    constructor() {
        this.isTimerOn = false;
    }

    getRandomNumber(val) {
        return Math.floor((Math.random() * val) + 0);
    }

    populateArray(num) {
        let obj = [];
        for (var i = 0; i < num; i++) {
            obj.push(i);
        }
        return obj;
    }

    populateCell(array, row, col, val) {
        for (let i = 0; i < col; i++) {
            for (let j = 0; j < row; j++) {
                array[i][j] = val;
            }
        }
        return array;
    }

    create2DArray(rows) {
        let arr = [];
        for (let i = 0; i < rows; i++) {
            arr[i] = [];
        }
        return arr;
    }

    getCell() {
        return this.cell;
    }

    getRgba1() {
        return this.rgba1;
    }

    getRgba2() {
        return this.rgba2;
    }

    getRgba3() {
        return this.rgba3;
    }

    setIsTimerOn(bool) {
        this.isTimerOn = bool;
    }

    getIsTimerOn() {
        return this.isTimerOn;
    }
}