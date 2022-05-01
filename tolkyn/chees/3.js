function run(N) {
    console.log(`N`, N);
    const boardArr = new Array(2 * N)
    //заполняем массив 2*N*2*N нулями

    for (let i = 0; i < 2 * N; i++) {
        boardArr[i] = new Array(2 * N).fill(0)
    }
    console.log(`boardArr`, boardArr);
    //делаем изначальные пути пешки, до вертикали и горизонтали. ставим 1
    for (let i = 1; i < 2 * N; i++) {
        boardArr[2 * N - 1][i] = 1
        boardArr[2 * N - 1 - i][0] = 1
    }

    //царапаем поле N*N в правом нижнем углу доски

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            boardArr[2 * N - 1 - i][N + j] = -1
        }
    }

    console.log(`boardArr`, boardArr);
    //после царапанья
    // boardArr[
    //     [1, 0, 0, 0, 0, 0],
    //     [1, 0, 0, 0, 0, 0],
    //     [1, 0, 0, 0, 0, 0],
    //     [1, 0, 0, -1, -1, -1],
    //     [1, 0, 0, -1, -1, -1],
    //     [0, 1, 1, -1, -1, -1]
    // ]

    for (let y = 2 * N - 2; y >= 0; y--) {
        for (let x = 1; x < 2 * N; x++) {
            if (boardArr[y][x] == -1)//если текущее поле в "поцарапанном" секторе, то пропускаем его и идем дальше
                continue
            boardArr[y][x] += boardArr[y][x - 1] + ((boardArr[y + 1][x] == -1) ? 0 : boardArr[y + 1][x])//не берем поцарапанные поле в расчет
        }
    }
    console.log(`boardArr`, boardArr);
    console.log(`Answer: `, boardArr[0][2 * N - 1]);
}

const n = 3;
run(n);