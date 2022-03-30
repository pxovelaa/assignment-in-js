/* მოგესალმებით მეგობრებო ეს არის დავალება ნომერი 2. დავალების ყველა ეტაპი აღწერილია კომენტარის სახით
 * 1) შედარება
 * 3) If პირობები
 * 4) ლოგიკური ოპერატორები
 * 5) Switch 
 */



// <------- შედარება ---------#### //

const num1 = 0;
const boolean1 = false;
const num2 = 5;
const emptyString = "";
const boolean2 = false;
const text = "I'm Text";
const text2 = "0";

// ჩამოწერეთ ცვლადები რომელი არის true რომელი false
// ჩამოწერეთ ზეპირად!
// მაგ. [1, 2, 3, 4]

// >>> კოდი დაწერეთ აქ 

const isFalse = [num1, boolean1, emptyString, boolean2,];
const isTrue = [num2, text, text2];

//


// შეცვალეთ ერთი ასო რომ მიიღოთ ჭეშმარიტი დებულება
// მოკლედ ახსენით მუშაობის პრინციპი თუ რატომ იმოქმედა

console.log("ibc" > "ah") ;
/* amowmebs numeraciit binary positionis mixedvit tu pirveli ori aso tolia amowmebs shemdeg asos magalitad abc da abg 
radgann a=a , b = b, da c < g  ---->> aqedan gamomdinare abg > abc mgoni sworad avxseni :DDD */
console.log(2 == "002") ;




// <------- ლოგიკური ოპერატორები ---------#### //

// შეამოწმეთ სრულ წლოვნებაზე და თუ მეტი ან ტოლია
// 18 წელზე შესთავაზეთ სასმელი

// >>> კოდი დაწერეთ აქ 
let age = 18;

if ( age >= 18){
  console.log('რომელი სასმელი გნებავთ?');
}else {
  console.log('თქვენ ჯერ არასრულწლოვანი ხართ ...');
}

//


// მოიფიქრეთ 2 if else-ის მაგალითი თქვენით

// >>> კოდი დაწერეთ აქ
let carAge = 2015;
let CO2 = 0.6;
function greenWay(){
  if (CO2 <= 0.6){
    if (carAge >= 2014){
      console.log('თქვენ გაიარეთ 2 წლიანი ტექ-ინპექტირება !!');
    }else {
      console.log('თქვენ გაიარეთ 1 წლიანი ტექ-ინპექტირება !!');
    }
  } else {
    console.log('თქვენ ვერ გაიარეთ ტექ-ინსპექტირება!');
  }
}


//


// გადაიყვანეთ If ternary operator-ში მაგ. (true ? 1 : 2) 

// >>> კოდი დაწერეთ აქ
(CO2 <= 0.6) ? console.log('თქვენ გაიარეთ ტექ-ინსპექტირება!') : console.log('თქვენ ვერ გაიარეთ ტექ-ინსპექტირება!');
//



/*
  ჩვენ გვაქვს ოთხი ფერი რომელთაც აქვთ
  კონკრეტული ციფრები მინიჭებული (თეთრი=4, 
  წითელი=3, მწვანე=2, ლურჯი=1, შავი=0, 
  სხვა ყველა ფერი=undefinde)
*/

let colorId = 3

// დაწერეთ if ისე, რომ როდესაც ჩვენ
// შევცვლით მაღლა განსაზღვრულ ცვლადს გავიგოთ
// ამ აიდის ფერი (ფერი გამოიტანეთ კონსოლში ტექსტის
// სახით)


// >>> კოდი დაწერეთ აქ
if(colorId == 0){
  console.log('შავი');
}else if (colorId == 1){
  console.log('ლურჯი');
}else if ( colorId == 2 ){
  console.log('მწვანე');
}else if( colorId == 3){
  console.log('წითელი');
}else if (colorId == 4){
  console.log('თეთრი');
} else {
  console.log('colorId = undefined');
}

//



// გადაიყვანეთ If ternary operator-ში მაგ. (true ? 1 : 2) 

// >>> კოდი დაწერეთ აქ
colorId == 0 ? console.log('შავი') : console.log('colorId = undefined');
colorId == 1 ? console.log('ლურჯი') : console.log('colorId = undefined');
colorId == 2 ? console.log('მწვანე') : console.log('colorId = undefined');
colorId == 3 ? console.log('წითელი') : console.log('colorId = undefined');
colorId == 4 ? console.log('თეთრი') : console.log('colorId = undefined');

//


// <------- დავალება Switch ---------#### //

// ცადეთ იგივე გააკეთოთ რაც წინა დავალებაში
// ოღონდ ამჯერად Switch-ის დახმარებით
switch (colorId){
  case 0 : 
    console.log('შავი');
    break;
  case 1 :
    console.log('ლურჯი');
    break;
  case 2 :
    console.log('მწვანე');
    break;
  case 3 :
    console.log('წითელი');
    break;
  case 4 :
    console.log('თეთრი');
    break;
  default:
    console.log('colorId = undefined');
}

// >>> კოდი დაწერეთ აქ


//



//  ||
//  ||
//  ||
// \  /
//  \/

/*
    ეს დავალება რომ ნახოთ გამოიყენეთ HTML,
    ჩვენი მიზანია ავაწყოთ ჩეთ ბოტი რომელთანაც ვისაუბრებთ
    როგორც ხედავთ დაბლა გამზადებული მაქვს კოდის გარკვეული
    ნაწილი ეს არის ფუნქცია რომელსაც მომავალში გავივლით
    კონკრეტულად ეს ფუნქცია არის რეკურსიული, რეკურსია
    არის პროცესი როდესაც ფუნქცია თავის თავს იძახებს ჩვენ კი
    იმიტომ ვიყენებთ ამას, რომ ყოველ ჯერზე როდესად რაღაცის თქმა
    დაგვჭირდება მზად იყოს სასაუბროდ ჩვენი ბოტი

    // კოდში მოათავსეთ Switch რომლითაც დააპროგნოზებთ სასაუბრო
    // სიტყვებს ააწყობთ მინი ჩათ ბოტს.
    მაგ. 
    """"
      case "გამარჯობა":
        alert("გამარჯობა");
        break;
    """"
*/
const bot = document.getElementById("bot");
bot.addEventListener("click", myFun);

function myFun() {
  let x = 0;
  x = prompt("მე მზად არ ვარ პასუხისათვის")

  // >>> კოდი დაწერეთ აქ გამოიყენეთ Switch
  switch (x){
    case 'გამარჯობა':
      alert('გამარჯობა, რით შემიძლია დაგეხმაროთ');
      break;
    case 'რომელ საათამდე მუშაობთ?':
      alert('6 საათამდე');
      break;
    case 'რომელ დღეებში მუშაობთ?':
      alert('ორშაბათიდან პარასკევამდე');
      break;
    case 'ვაკანსიები გაქვთ?':
      alert('front-end სტაჟირების ვაკანსია გვაქვს მხოლოდ');
      break;
    case 'ტერიტორიულად სად ხართ?':
      alert('ვარკეთილში.');
      break;
    case '':
      alert('????');
      break;
    case null :
      alert ('კითქვები თუ არ გაქვთ დაგემშვიდობებით');
      return false;
  }



  //

  // რეკურსიული ფუნქცია
  myFun()


}