function run(N, M) {
    console.log(`N`, N);
    console.log(`M`, M);

    //заполняем массив N*M нулями
    const boardArr = new Array(N)

    for (let i = 0; i < N; i++) {
        boardArr[i] = new Array(M).fill(0)
    }
    //делаем изначальные пути пешки, до вертикали ставим 1
    for (let i = 1; i < N; i++) {
        boardArr[N - 1 - i][0] = 1
    }
    //делаем изначальные пути пешки, до горизонтали ставим 1
    for (let i = 1; i < M; i++) {
        boardArr[N - 1][i] = 1
    }
    boardArr[N - 2][1] = 1    //частный случай что пушка может ходить по диагонали
    for (let y = N - 2; y >= 0; y--) {//как в первом таске просто здесь не квадрат
        for (let x = 1; x < M; x++) {
            boardArr[y][x] += boardArr[y + 1][x] + boardArr[y][x - 1] + boardArr[y + 1][x - 1]
        }
    }
    // console.log(`boardArr`, boardArr);
    console.log(`Answer: `, boardArr[0][M - 1]);
}

const n = 5;
const m = 6;
run(n, m);