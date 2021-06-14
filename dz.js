let arr = [];
let n = prompt('Какой размер массива вывести?');
while (isNaN(n) || n === '') n = prompt('Вы ввели не число! Какой размер массива вывести?');
while (n === null) n=0;
    for (let i = 1; i <= n; i++){
        arr.push(i);
    }
    foobar(n);
function foobar(n){
    let newArr = [];
    for (let i = 0; i < n; i++) {
        if (arr[i] % 3 == 0 && arr[i] % 5 == 0) newArr.push('FooBar');
        else if (arr[i] % 3 == 0 && arr[i] % 11 == 0) newArr.push('FooPlop');
        else if (arr[i] % 3 == 0 && arr[i] % 7 == 0) newArr.push('FooQuix');
        else if (arr[i] % 5 == 0 && arr[i] % 7 == 0) newArr.push('BarQuix');
        else if (arr[i] % 5 == 0 && arr[i] % 11 == 0) newArr.push('BarPlop');
        else if (arr[i] % 7 == 0 && arr[i] % 11 == 0) newArr.push('QuixPlop');
        else if (arr[i] % 5 == 0) newArr.push('Bar');
        else if (arr[i] % 3 == 0) newArr.push('Foo');
        else if (arr[i] % 7 == 0) newArr.push('Quix');
        else if (arr[i] % 11 == 0) newArr.push('Plop');
        else if (arr[i] % 2 == 0) newArr.push(arr[i].toString() + arr[i]);
        else newArr.push(arr[i]);
    }
    alert(`Array (${n})\n ${newArr}`);
    unfoo(newArr);
}

function unfoo(newArr){
    let res = 1n;
    for (let i = 0; i < newArr.length; i++) {
        if (typeof newArr[i] === 'number') res += BigInt(newArr[i]);
        if (typeof newArr[i] === 'string' && !isNaN(newArr[i])) res *= BigInt(newArr[i]);
        if (isNaN(newArr[i])) res -= BigInt(newArr[i].length);
    }   
    alert(res);
}