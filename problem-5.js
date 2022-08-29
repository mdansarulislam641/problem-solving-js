const numbers = [2, 3, 4, 5, 6];
const multicalculation = (array) => {
    let sum = 0;
    let avg;
    array.forEach(number => {
        const squre = number ** 2;
        // console.log(squre);
        sum = sum + squre;
        avg = sum / array.length;

    });
    console.log(avg)
}

multicalculation(numbers);