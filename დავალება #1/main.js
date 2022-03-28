/* მოგესალმებით მეგობრებო ეს არის დავალება ნომერი 1. დავალების ყველა ეტაპი აღწერილია კომენტარის სახით
 * 1) კომენტარები
 * 2) ცვლადები
 * 3) მონაცემთა ტიპები
 * 4) ოპერატორები და არითმეტიკა
 */



// 1 კომენტარები


  // კომენტარებმა გაფუჭდა თქვენი დავალებაა
  // არასწორად დაწერილი კომენტარი ჩაასწოროთ
  // და ასევე გამოიყენოთ თქვენი კოდის აღსაწერად


  // კომენტარებისთვის ვიყენებთ // სლეშს თუ არვიცი რას ეძახით . :დ ...  ვფიქრობ ყველა
  // გავასწორე.

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

let surname = 'Stjepan';
let firsname = 'Hauser';
let Age = 35;
let birth = '15 June 1986';
let date_of_birth =  1986;
let place_of_birth= 'Yugoslavia';

console.log(`სახელი: ${surname}`);
console.log(`გვარი: ${firsname}`);
console.log(`ასაკი: ${Age}`);
console.log(`დაბადების წელი თვე და რიცხვი ${birth}`);
console.log(`დაბადების წელი ${date_of_birth}`);
console.log(`დაბადების ადგილი: ${place_of_birth}`);

//ჩემებურად დავწერე რაღაცეები ჩვევასავით მაქ
// და მოსახერხებელი იყო ჩემთვის.




  // დროა დავიწყოთ მზადება ჩვენს მომავალ პროექტზე.
  // ჩვენი დავალეებაა მოვიფიქროთ რაიმე პროდუქტთა სია
  // რომელსაც გამოვიყენებთ მომავალში.

  //წიგნების მაღაზიის მაგალითი:

const BookName = "ვეფხისტყაოსანი";
const AuthrName = "შოთა რუსთაველი";
const CreateDate = "13 საუკუნე";
let ProductQuant = 124;

   // ჩემი მაგალითია   მოგზაურობა
   const name= 'მოგზაურობა'
const travel ='იტალია';
const city= 'რომი';
const food = 'პიცა';
let rest = 15;

  console.log(name);
  console.log(travel);
  console.log(city);
  console.log(food);
  console.log(rest);


//  >>>> კოდი დაწერეთ აქ


//

// 3 მონაცემთა ტიპები

  // აქ რაღაც შეცდომაა თქვენი დავალებაა ცვლადის გამოცხადების
  // დროს გაასწოროთ შეცდომა;

const age = 1;
const hisName = 'bob';
const isHigh = true;
const dateOfBirth = 1995;


// ეს კოდი ამოწმებს თქვენ მიერ მითითებულ ტიპებს

// თქვენი მიზანია დააბრუნოთ პირველი 4 frue

console.log(typeof age != "number");
console.log(typeof hisName != "string");
console.log(typeof isHigh != "boolean");
console.log(typeof dateOfBirth != "number")



// აქ უნდა გაიგოთ თქვენი პროდუქტის სიის ტიპი

// მაგ: console.log(typeof age)
console.log(typeof(age), (age));
console.log(typeof (hisName), (hisName) );
console.log(typeof (isHigh), (isHigh));
console.log(typeof (dateOfBirth), (dateOfBirth))


// ოპერატორები არითმეტიკა

let num = 5;


// გამოიყენეთ ყველა ვარიანტი რომლითაც შეგვიძლია ამ ციფრის გაზრდა

// >>> კოდი დაწერეთ აქ
num++;
console.log(num + 5);
console.log(num)




// სცადეთ შეკრიბოთ განსხვავებული ტიპის მქონე 
// მნიშვნელობები და გაიგოთ შეკრებილი მონაცემების ტიპი

// >>> კოდი დაწერეთ აქ
const x = 10;
const y = 25;
const z = 0;
// არითმეტიკული ოპერატორები
console.log(x + y);
console.log(x - y);
console.log(x / y);
console.log(x * y);
// ლოგიკური ოპერატორები
console.log(z || y);
console.log(z && y);
// შედარებითი ოპერატორები
console.log(z > y);
console.log(z <= y);
 

// მგონი ყველა შევასრულე 