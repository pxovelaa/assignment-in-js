// <-------- კალკულატორი -------#### //

/*
    აქ უნდა შევქმნათ კალკულატორი იუზერისთვის,
    თავიდან იუზერს, prompt-ით უნდა ჩააწერინოთ ხუთი რიცხვი(და იფებით უნდა დაჩეკოთ ნამდვილად ჩაწერა თუ არა რიცხვი)
    მაგ ხუთი რიცხვის შემდეგ უნდა ჩააწერინოთ რა არითმეტიკული მოქმედება გააკეთოს ჩვენმა კალკულატორმა,
    (აქ შეუძლია ჩაწეროს მარტო '-','+','*' თუ სხვა რამეს ჩაწერს ახლიდან ამოუგდეთ სანამ არ ჩაწერს ამ სამიდან ერთ-ერთს)
    ამ პრომპტებიდან ხუთი მიღებული რიცხვი უნდა ჩასეტოთ მასივში და ერთ ცვლადში უნდა გქონდეთ რა არითმეტიკული მოქმედება უნდა ჩავატაროთ(რაც იუზერი აარჩევს).
    შემდეგ უნდა შექმნათ ფუნქცია რმელიც მიიღებს 2 პარამეტრს პირვილი იქნება მასივი და მეორე არითმეტიკული მოქმედება, და მაგ ფუნქციამ არითმეტიკული მნიშვნელობის მიხედვით უნდა
    გააკეთოს გამოთვლა თუ '+' არის უნდა ყველა მასივის ელემენტი მიამატოს ერთმანეთს(მაგ. 1 + 2 + 3 + 4 + 5) თუ "*" გაამრავლოს (მაგ. 1 * 2 * 3 * 4 * 5)
*/

////// =>> კოდი დაწერეთ აქ



let sum = 0;
let numbers = +prompt('გთხოვთ ჩაწეროთ 5 რიცხვი');
let aritmetic = prompt('ჩაწერეთ რა მოქმედება შეასრულოს კალკულატორმა ? + , - ან *!!!');
let numbersArr = [];

function splitNum(numbers) {
    return String(numbers).split("").map(Number);
}

numbersArr = splitNum(numbers);


function aritmeticAction(numbers, numbersArr, aritmetic) {
    while (isNaN(numbers) == true || numbersArr.length != 5) {
        alert('თქვენ აუცილებლად უნდა ჩაწეროთ 5 რიცხვი');
        numbers = +prompt('გთხოვთ აუცილებლად ჩაწეროთ 5 რიცხვი');
        numbersArr = splitNum(numbers);
    }
    while (aritmetic != '+' && aritmetic != '-' && aritmetic != '*') {
        alert('თქვენ აუცილებლად უნდა ჩაწეროთ სწორი არითმეტიკული მოქმედება + - ან * ');
        aritmetic = prompt('ჩაწერეთ რა მოქმედება შეასრულოს კალკულატორმა ?მხოლოდ  + , - ან *!!!');
    }
    if (isNaN(numbers) == false && numbersArr.length == 5) {
        if (aritmetic == '+') {
            for (let i = 0; i < numbersArr.length; i++) {
                sum += numbersArr[i];
            }
        } else if (aritmetic == '*') {
            sum = 1;
            for (let i = 0; i < numbersArr.length; i++) {
                sum *= numbersArr[i];
            }
        } else if (aritmetic == '-') {
            for (let i = 0; i < numbersArr.length; i++) {
                sum -= numbersArr[i];
            }
        }

    }
    return sum;
}

let action = aritmeticAction(numbers, numbersArr, aritmetic);
document.getElementById('result').innerHTML = `თქვენ მიერ არჩეუილი რიცხვების არითმეტიკული მოქმედება =  ${action}-ს`;
document.getElementById('result').style.textAlign = 'center';




//////



// <-------- თანაკვეთა -------#### //

/*
    თქვენი დავალებაა შექმნათ ფუნცქცია რომელიც აბრუნებს ახალ მასივს, მასივი კი შედგება ამ ორი მასივის თანაკვეთისგან (რომელსაც ორივე შეიცავს)
    შექმენით ორი მასივი და გამოიყენეთ იგივე ფუნქცია რომ იპოვოთ ამ ორი მასივის თანანაკვეთა
*/

const Arr1 = [1, 23, 3, 34, 54, 6];
const Arr2 = [23, 3, 123, 34, 43, 4, 41];

const Arr3 = [10, 23, 8, 34, 54, 6];
const Arr4 = [23, 3, 10, 34, 43, 8, 41];



////// =>> კოდი დაწერეთ აქ
function newArr(Arg1, Arg2) {
    let arrNew = [];

    for (let i = 0; i < Arg1.length; i++) {
        for (let j = 0; j < Arg2.length; j++) {
            if (Arg1[i] == Arg2[j]) {
                arrNew.push(Arg1[i]);
            }
        }
    }
    return arrNew;
}

let result1 = newArr(Arr1, Arr2);
let result2 = newArr(Arr3, Arr4);


console.log(result1);

console.log(result2);




//////



// <-------- ასინქრონული ფუნქცია -------#### //

/**
 * შექმენით ასინქრონული ფუნქცია რომელიც დაითვლის ათამდე, 10 წამის განმავლობაში (1++ == 1წმ)
 */


////// =>> კოდი დაწერეთ აქ

function counter(a){
    console.log(a);
    a++;
    if (a <= 10){
        setTimeout(() => counter(a), 1000);
    }
}

 counter(1);


//////



// <-------- უდიდესი რიცხვი -------#### //

/**
 * შექმენით ისეთი ფუნქცია რომელიც დაგიბრუნებთ მიწოდებული მასივის უდიდეს რიცხვს
 */


////// =>> კოდი დაწერეთ აქ

const masivi1 = [1, 23, 3, 34, 54, 6];

function bigNumber(massive){
    let max = massive[0];
    for (let i = 0; i < massive.length; i++) {
    if (massive[i] > max) {
        max = massive[i];
    }
    }
    return max;
}


let biggest = bigNumber(masivi1);

document.getElementById('result').innerHTML += ` ;        თქვენ მიერ არჩეული მასივის უდიდესი რიცხვი = ${biggest}-ს `;



//////



// <-------- პროცენტის გამოთვლა -------#### //

/**
 *  ჩვენ ვაკეთებთ პროგრამას ბანკისთვის სადაც ადამიანს ვთავაზობთ შეიყვანოს თანხა და დროის ოდენობა (თვეში). 
 *  პროცენტი თვეების მიხედვით: 1-6 თვემდე 10%, 6-12 თვემდე 14%, 1წელზე ზემოთ 20%
 *  გამოთვალეთ სულ რამდენი იქნება გადასახდელი პროცენტთან ერთად.
 */

////// =>> კოდი დაწერეთ აქ
const percentage = document.getElementById('gamomtvleli');
let smth = percentage.addEventListener("click", sruliTanxa);

document.getElementById('jami').innerHTML = `თქვენი სრული გადასახდელი თანხა იქნება ${jami}`;


function sruliTanxa (tve, tanxa) {
    tanxa = +prompt('chaweret ramdeni gchirdebat tanxa?')  ;
    tve = +prompt('ramdeni tvit gnebavt sesxi');

    let jami = 0;
    if (tve > 12){
        jami =  tanxa * 0.2 * tve + tanxa;
    }else if(tve >= 6 && tve <= 12){
        jami =  tanxa * 0.14 * tve + tanxa;
    }else if (tve < 6){
        jami =  tanxa * 0.1 * tve + tanxa;
    }

    return document.getElementById('jami').innerHTML = `თქვენი სრული გადასახდელი თანხა იქნება ${jami}`;
}





/////