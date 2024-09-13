//-----------------------------chap # 01 ALERT----------------------------


// ------------------------------Q#1--------------------------------------
alert("WELCOME USER");

// ------------------------------Q#2--------------------------------------
alert("Error! Please enter a valid password");

// ------------------------------Q#3--------------------------------------
alert("Welcome to JS land...\n Happy Coding");

// ------------------------------Q#4--------------------------------------
alert("Welcome to JS land...");
alert("Happy Coding!");

// ------------------------------Q#5--------------------------------------
document.write("Hello... I can run JS through my web browser’s console<br>");

// // -------------Q#6 in index file---------------------------------
// // -------------Q#7 in index file---------------------------------






// --------------------chap # 02 VARIABLES FOR STRINGS--------------------


// ------------------------------Q#1--------------------------------------

var username;
// ------------------------------Q#2--------------------------------------

var myname="imran khan";
// ------------------------------Q#3--------------------------------------

var message="Hello World";
alert(message);

// ------------------------------Q#4--------------------------------------
var fullname="Imran Khan";
var age="20";
var skill="Web developer";
alert(fullname);
alert(age);
alert(skill);

// ------------------------------Q#5--------------------------------------
var dish;
dish="pizza"
alert(dish="pizza\npizz\npiz\npi\np");

// ------------------------------Q#6--------------------------------------
var email;
email="ik7080367@gmail.com";
alert("My email address is " + email);

// ------------------------------Q#7--------------------------------------
var book="A smarter way to learn Javascript";
alert("I am trying to learn from the book " + book);
document.write("Yah! I can write HTML content through Javascript<br>" );

// ------------------------------Q#8--------------------------------------
var design;
design="“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”";
alert(design);
document.write("<br>",design+"<br>");




// --------------------chap # 03 VARIABLES FOR NUMBERS--------------------

// ------------------------------Q#1--------------------------------------
var age= 15;
alert("I am "+age+" years old");

// ------------------------------Q#2--------------------------------------
var visitor=15;
alert("You have visited this site "+ visitor +" times");

// ------------------------------Q#3--------------------------------------
var birth=2004;
document.write("<br>MY birth year is "+birth+"<br>datatype of my declare variable is number<br>");

// ------------------------------Q#4--------------------------------------
var visitors_Name="Imran khan";
var product_Title="T-shirts";
var quanity=10;
document.write("<br>"+visitors_Name+" ordered "+quanity + product_Title+" on Khan Clothing store<br>");




// --------------------chap # 04 VARIABLE NAMES: LEGAL & ILLEGAL--------------------

// ------------------------------Q#1--------------------------------------
var fullname="khan";
var middle_name="khan";
var last_name="khan";

// ------------------------------Q#2--------------------------------------
// legal variables
var first_Var1;
var secondvar2;
var Third_var3;
var fourthvar$4;
var fifth5_var5;

// illegal variables
// var 1first_var1;
// var Second-var2;
// var Third@var3;
// var furthvar>;
// var fifth.5;

// ------------------------------Q#3--------------------------------------
document.write("<br><b>Rules for naming JS variables</b><br><br>");
document.write("Variable names can only contain,numbers ,$ and _.for example:$my_1stVariable <br>");
document.write("Variables must begin with a letter,$ or _.For example $name, _name or name<br>");
document.write("Variable name are case sensitive<br>");
document.write("Variable names should not be JS keywords<br>"); 




// --------------------chap # 5 MATH EXPRESSIONS--------------------


// ------------------------------Q#1--------------------------------------
var num1=3;
var num2=5;
var sum= num1+num2;
document.write("Sum of "+num1+" and "+num2+" is "+sum+"<br>");

// ------------------------------Q#2--------------------------------------
var sub= num1-num2;
document.write(" <br>Subtraction of "+num1+" and "+num2+" is "+sub+"<br>");


var multiply= num1*num2;
document.write(" <br> multiplication "+num1+" and "+num2+" is "+multiply+"<br>");

var div= num1/num2;
document.write(" <br> division of "+num1+" and "+num2+" is "+div+"<br>");

var modu= num1%num2;
document.write(" <br> modulus of "+num1+" and "+num2+" is "+modu+"<br><br>");

// ------------------------------Q#3--------------------------------------
var rollNo;
document.write("Value after variable declaration is "+rollNo+"<br>");
rollNo=5;
document.write("Initial value : "+rollNo+"<br>");
rollNo++;
document.write("Value after increment is : "+rollNo+"<br>");

var addi=rollNo+7;
document.write("Value after addition is : "+addi+"<br>");
addi--
document.write("Value after decrement is : "+addi+"<br>");

document.write("The reminder is : "+addi%3+"<br><br>");

// ------------------------------Q#4--------------------------------------
var one_movieTicket=600;
var five_movieTickets=5*600;
document.write("Total cost to buy 5 tickets to a movies is "+five_movieTickets+" PKR<br>");

// ------------------------------Q#5--------------------------------------
var num=Number(prompt("Table"));
document.write("<b>Table of  "+num+"</b><br>");
document.write(num+" x "+1+" =  "+num*1+"<br>");
document.write(num+" x "+2+" =  "+num*2+"<br>");
document.write(num+" x "+3+" =  "+num*3+"<br>");
document.write(num+" x "+4+" =  "+num*4+"<br>");
document.write(num+" x "+5+" =  "+num*5+"<br>");
document.write(num+" x "+6+" =  "+num*6+"<br>");
document.write(num+" x "+7+" =  "+num*7+"<br>");
document.write(num+" x "+8+" =  "+num*8+"<br>");
document.write(num+" x "+9+" =  "+num*9+"<br>");
document.write(num+" x "+10+" = "+num*10+"<br><br>");


// ------------------------------Q#6--------------------------------------
var celsius = 25;

var celsiusIntoFarenheit = (celsius * 9 / 5) + 32;

document.write(celsius+"<sup>0</sup>C is "+celsiusIntoFarenheit+"<sup>o</sup>C<br>");

var farenheit = 70;

var farenheitIntocelsius = (farenheit - 32)*5 / 9;

document.write(farenheit+"<sup>0</sup>F is "+farenheitIntocelsius+"<sup>o</sup>F<br>");
 
// ------------------------------Q#7--------------------------------------
var item1=Number(prompt("ITEM-1"));
var quantity_1st=Number(prompt(" Quantity of item-1"));

var item2=Number(prompt("ITEM-2"));
var quantity_2nd=Number(prompt(" Quantity of item-2"));

var shipping_charges=Number(prompt(" shipping charges"));

var add1= item1*quantity_1st;
var add2= item2*quantity_2nd;
var final_add=add1+add2+shipping_charges;
document.write("Price of item 1 is: "+item1+"<br>");
document.write("Quantity of item 1 is:"+quantity_1st+"<br>");
document.write("Price of item 2 is: "+item2+"<br>");
document.write("Quantity of item 2 is: "+quantity_2nd+"<br>");
document.write("Shipping charges: "+shipping_charges+"<br><br><hr>");
document.write("<b>Total cost of your order is: "+final_add+"<br></b><hr>");
 

// ------------------------------Q#8--------------------------------------
var total_marks=Number(prompt("Total Marks"));
var marks_obtained=Number(prompt("Marks Obtained"));
var percentage=marks_obtained/total_marks*100;

document.write("<h2>MARKS SHEET</h2> ");
document.write("Total Marks: "+total_marks+"<br>");
document.write("Marks Obtained: "+marks_obtained+"<br><hr>");
document.write("<b>Percentage: "+percentage+" %<br></b><hr>");


// ------------------------------Q#9--------------------------------------
var usdToPkr = 104.80;
var sarToPkr = 28;

var usdAmount = 10;
var sarAmount = 25;

var totalPkr = (usdAmount * usdToPkr) + (sarAmount * sarToPkr);

document.write("Total  currency in Pakistani Rupees:" +totalPkr+"<br>");


// ------------------------------Q#10--------------------------------------
var num=5;
var calculation=((num+5)*10)/2;
console.log(calculation);


// ------------------------------Q#11--------------------------------------
var current_year=2024;
var birth_year=2004;
var age1=current_year-birth_year;
var age2 = age1 - 1;
document.write("<h1>Age Calculator</h1><br>");
document.write("Current Year: "+current_year+"<br>");
document.write("Birth Year: "+ birth_year+"<br>");

document.write("You are either "+ age1+" or "+ age2+"<br>");


// ------------------------------Q#12--------------------------------------
var radius=Number(prompt("Radius of a Circle"));
var  Circumference=2*3.142*radius;
var area= 3.142*(radius*radius);
document.write("<h1> The Geometrizer </h1><br>");
document.write("Radius of a circle: "+radius+"<br>");
document.write(" Circumference of a circle: "+Circumference+"<br>");
document.write("The Area is: "+area+"<br><hr>");


// ------------------------------Q#13--------------------------------------

var snacks="chocolate chip";
var current_age=15;
var maximum_age=65;
var perday=3;
var total=(maximum_age-current_age)*perday;


 document.write("<h1> The Life Time Supply Calculator </h1><br>");
 document.write("Favorite snack: "+snacks+"<br>");
 document.write("Current age: "+current_age+"<br>");
 document.write("Estimated maximum age: "+maximum_age+"<br>");
 document.write("Amount of Snacks Per day: "+perday+"<br><hr>");
 document.write("You will need "+total+" chocolate chip to last you until the ripe old age of "+maximum_age+"<br>");




































































