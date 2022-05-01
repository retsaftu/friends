function run(N, meteor) {
    console.log(`N`, N);
    const boardArr = new Array(N)
    //заполняем массив
    for (let i = 0; i < N; i++) {
        boardArr[i] = new Array(N).fill(0)
    }
    //изначальные возможные ваши
    boardArr[1][0] = 1
    boardArr[0][1] = 1

    //раставляем метеориты
    for (let i = 0; i < meteor.length; i++) {
        boardArr[meteor[i][0]][meteor[i][1]] = -1
    }
    //заполняем поля по осям с прибавлением парсека
    for (let i = 2; i < N; i++) {
        boardArr[0][i] += boardArr[0][i - 1] > 0 ? boardArr[0][i - 1] + 1 : 0
        boardArr[i][0] += boardArr[i - 1][0] > 0 ? boardArr[i - 1][0] + 1 : 0
    }
    console.log(`boardArr`, boardArr);
    // boardArr[
    //     [0, 1, 2, 3, 4],
    //     [1, 0, 0, 0, 0],
    //     [2, 0, 0, 0, -1],
    //     [3, 0, -1, 0, 0],
    //     [4, 0, 0, -1, 0]
    // ]

    for (let y = 1; y < N; y++) {
        for (let x = 1; x < N; x++) {
            if (boardArr[y][x] == -1)//если попали на метеорит не идем дальше
                continue
            if (boardArr[y - 1][x] > 0 && boardArr[y][x - 1] > 0)//если следующие поля не метеориты то продолжаем
                boardArr[y][x] = Math.min(boardArr[y - 1][x], boardArr[y][x - 1]) + 1//берем миниальное значение из вариантов. либо вправо либо вниз
            else if (boardArr[y - 1][x] > 0)//если метеорит справа
                boardArr[y][x] = boardArr[y - 1][x] + 1
            else if (boardArr[y][x - 1] > 0)//если метеорит снизу
                boardArr[y][x] = boardArr[y][x - 1] + 1
        }
    }
    console.log(`boardArr`, boardArr);
    console.log(`Answer: `, boardArr[N - 1][N - 1]);
}

const n = 5;
const m = 6;
//координаты метеоритов
const meteor = [
    [4, 3],
    [3, 2],
    [2, 4],
]
run(n, meteor);