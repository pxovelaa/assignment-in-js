/* მოგესალმებით მეგობრებო ეს არის დავალება ნომერი 1. დავალების ყველა ეტაპი აღწერილია კომენტარის სახით
 * 1) კომენტარები
 * 2) ცვლადები
 * 3) მონაცემთა ტიპები
 * 4) ოპერატორები და არითმეტიკა
 */



// 1 კომენტარები

/*
  // კომენტარები გაფუჭდა თქვენი დავალებაა
  // არასწორად დაწერილი კომენტარი ჩაასწოროთ
  // და ასევე გამოიყენოთ თქვენი კოდის აღსაწერად
*/



// 2 ცვლადები

/*
  // მსურს ჩემი Spotify ლისტის განახლება 
  // ამაში კი თქვენი დახმარება მჭირდება
  // აღწერეთ თქვენი საყვარელი მომღერლის
  // (სახელი, გვარი, ასაკი, დაბადების წელი, დაბადების ადგილი,)
  // გაითვალისწინეთ რომ ამისთვის უნდა
  // გამოიყენოთ მხოლოდ (const, let)
  // (ნებისმიერი პიროვნების ჩაწერა შეგიძლიათ)
*/

// >>>> კოდი დაწერეთ აქ
const name = 'Michael';
const surname = 'Jackson';
const birthYear = 1958;
const birthPlace = 'USA';



// 

/*
  // დროა დავიწყოთ მზადება ჩვენს მომავალ პროექტზე.
  // ჩვენი დავალეებაა მოვიფიქროთ რაიმე პროდუქტთა სია
  // რომელსაც გამოვიყენებთ მომავალში.

  წიგნების მაღაზიის მაგალითი:

  const BookName = "ვეფხისტყაოსანი";
  const AuthrName = "შოთა რუსთაველი";
  const CreateDate = "13 საუკუნე";
  let ProductQuant = 124;
*/


// >>>> კოდი დაწერეთ აქ
const bookName = "გურჯი-ხათუნი";
const authrName = "დათო ტურაშვილი";
const createDate = "21 საუკუნე";
let productQuant = 90;

//



// 3 მონაცემთა ტიპები

/*
  // აქ რაღაც შეცდომაა თქვენი დავალებაა ცვლადის გამოცხადების
  // დროს გაასწოროთ შეცდომა;
*/



const age = 1; // removed --> ""
const hisName = "bob"; // removed --> []
const isHigh = true; // removed --> ""
const dateOfBirth = 1995; // removed --> ""




// ეს კოდი ამოწმებს თქვენ მიერ მითითებულ ტიპებს

// თქვენი მიზანია დააბრუნოთ პირველი 4 frue

console.log(typeof age === "number");
console.log(typeof hisName === "string");
console.log(typeof isHigh === "boolean");
console.log(typeof dateOfBirth === "number")



// აქ უნდა გაიგოთ თქვენი პროდუქტის სიის ტიპი
console.log(typeof bookName);
console.log(typeof authrName);
console.log(typeof createDate);
console.log(typeof productQuant);

// მაგ: console.log(typeof age)



// ოპერატორები არითმეტიკა

let num = 5;

// გამოიყენეთ ყველა ვარიანტი რომლითაც შეგვიძლია ამ ციფრის გაზრდა

// >>> კოდი დაწერეთ აქ
let c = num ** 2;

let a = num + 5;

let b = num * 5;



c = +c;

//

console.log(a, '+=');
console.log(b, '*=');
console.log(c, '**');



// სცადეთ შეკრიბოთ განსხვავებული ტიპის მქონე 
// მნიშვნელობები და გაიგოთ შეკრებილი მონაცემების ტიპი

// >>> კოდი დაწერეთ აქ
let aplleQuant = 10;
let grapeQuant = '30';
let pearQuant = 20;

let sum;

sum = aplleQuant + pearQuant + grapeQuant;

let sum1 ;

sum1 = aplleQuant  + grapeQuant + pearQuant;

console.log(sum);
console.log(sum1);

//