
// function to show a alert message
// alert("Welcome to JavaScript");




// console.log is used to show something on the console of the browser
console.log('I am Mohammad Sameer');





// VARIABLES VARIABLES VARIABLES VARIABLES VARIABLES VARIABLES VARIABLES VARIABLES VARIABLES VARIABLES VARIABLES
{

    var myName = 'Mohammad';
    let myAge = 21;
    const myGender = 'Male';

    var myName = 'Mohammad Sameer'; //variable can be updated and re-declared
    myAge = myAge + 1;  //variable can be updated but cannot be re-declared
    // const myGender = 'Male';  //variable cannot be updated or re-declared




    //DATATYPES DATATYPES DATATYPES DATATYPES DATATYPES DATATYPES DATATYPES DATATYPES DATATYPES DATATYPES DATATYPES

    //primitive data types
    let fruit = 'apple';   //string
    let priceOfApple = 100;   //number
    let isAppleFruit = true;   //boolean
    let applePriceAfterAYear = undefined;  //undefined


    //non primitive data types
    let vegetable = {   //object
        vegName: 'tomato',
        vegPrice: 40,
        isVeg: true,
        largestProducer: 'maharastra',
        productionTime: 90
    };

    let product = {
        productName: 'parker Jotter Standard CT Ball Pen(Black)',
        productRating: 4,
        productRatingCount: 7002,
        productIsOffer: true,
        productPrice: 270,
        productMRP: 285
    };


    let instagramProfile = {
        userName: 'sammu01_',
        nameOfTheUser: 'Møhammad Sameer',
        userBio: '😎',
        isVerified: false,
        userPosts: '0',
        userFollowers: '307',
        userFollowing: '321',
    }
}



//OPERATORS OPERATORS OPERATORS OPERATORS OPERATORS OPERATORS OPERATORS OPERATORS OPERATORS OPERATORS OPERATORS
{

    //Arithmetic operators
    console.log('Arithmetic operators');
    {
        let a = 20;
        let b = 10;

        console.log('Addition Operator =', a, '+', b, '=', a + b);  //Addition Operator
        console.log('Subtraction Operator =', a, '-', b, '=', a - b);  //Subtraction Operator
        console.log('Multiplication Operator =', a, '*', b, '=', a * b);  //Multiplication Operator
        console.log('Division Operator =', a, '/', b, '=', a / b);  //Division Operator


        console.log('Modulus Operator =', a, '%', b, '=', a % b);  //Modulus Operator
        console.log('Exponentiation Operator =', a, '**', b, '=', a ** b);  //Exponentiation Operator //a to the power b


        //increment and decrement operators are called as UNARY operators
        console.log('Unary Operators from below')


        console.log('The value of a is', a);
        console.log('The value of a++ is (a++ =', a++, ") ,that is because the a++ increases the value in this line and from next line the value of 'a' will be increased by one");
        console.log('a =', a);


        console.log('The value of b is', b);
        console.log('The value of b-- is (b-- =', b--, ") ,that is because the b-- decreases the value in this line and from next line the value of 'b' will be decreased by one");
        console.log('b =', b);


        console.log('The value of a is', a);
        console.log('The value of ++a is (++a =', ++a, ") ,the ++a will increaase the value first and will change the value 'a' from this line itself");

        console.log('The value of b is', b);
        console.log('The value of --b is (--b =', --b, ") ,the --b will decrease the value first and will change the value 'b' from this line itself");

    };

    //Assignment operators
    console.log('Assignment operators');
    {
        let c = 100;
        let d = 200;
        let e = 5;
        let f = 6;
        let g = 7;
        let h = 10;


        //addtion assignment(+=)
        // c += 5;   // c = c + 5 which becomes 105
        console.log('let c =', c, 'and the value of "c += 5" will become', c += 5, 'that is because c += 5 means a shorthand of c = c + 5');

        //Subtraction assignment(-=)
        // d -= 5;   // d = d - 5 which becomes 195
        console.log('let d =', d, 'and the value of "d -= 5" will become', d -= 5, 'that is because d -= 5 means a shorthand of d = d - 5');

        //Multiplication  assignment(*=)
        // e *= 5;   // e = d * 5 which becomes 25
        console.log('let e =', e, 'and the value of "e *= 5" will become', e *= 5, 'that is because e *= 5 means a shorthand of e = e * 5');


        //Division assignment(/=)
        // f /= 5;   // f = f / 5 which becomes 1.2
        console.log('let f =', f, 'and the value of "f /= 5" will become', f /= 5, 'that is because f /= 5 means a shorthand of f = f / 5');

        //Modulus  assignment(%=)
        // g %= 5;   // g = g % 5 which becomes 2
        console.log('let g =', g, 'and the value of "g %= 5" will become', g %= 5, 'that is because g %= 5 means a shorthand of g = g % 5');

        //Modulus  assignment(**=)
        // h **= 5;   // h = h ** 5 which becomes 100000
        console.log('let h =', h, 'and the value of "h **= 5" will become', h **= 5, 'that is because h **= 5 means a shorthand of h = h ** 5');


    };


    //Comparison  operators
    console.log('Comparison operators');
    {
        let a = 10;
        let b = 20;
        let c = 10;
        let d = '20';

        // == operator compares both the values and returns a boolean value weather it is true or false
        console.log('let a =', a, 'and b =', b, 'is "a == b"(that means is a and b are equal) the answer is', a == b);

        console.log('let a =', a, 'and b =', b, 'is "a != b"(that means is a and b are not equal) the answer is', a != b);

        console.log('let a =', a, 'and c =', c, 'is "a == c"(that means is a and c are equal) the answer is', a == c);

        console.log('let a =', a, 'and c =', c, 'is "a != c"(that means is a and c are not equal) the answer is', a != c);

        console.log('let b =', b, 'and d =', d, '(the datatype of d is string)is "b == d"(that means is b and d are equal) the answer is', b == d, 'we still got the answer because even if the string has just a number inside of it then the == operator will first change the string into a number and then it compares the both values and returns true or false ');

        console.log('10 > 20', a > b);
        console.log('10 < 20', a < b);
        console.log('10 >= 20', a >= b);
        console.log('10 <= 20', a <= b);

    };


    //Logical  operators
    console.log("Logical operators");
    {
        let a = 20;
        let b = 10;

        let condition1 = a > b;
        let condition2 = a === 20;
        let condition3 = a < b;
        let condition4 = b === 40;

        console.log('let a = ', a, ' and let b = ', b);
        console.log('let condition1 = a > b');
        console.log('let condition2 = a === 20');
        console.log('let condition3 = a < b');
        console.log('let condition4 = b === 40');

        console.log("In logical operators we will have multiple expressions and after checking all the expression we will get our final result in the form of true or false");



        //Logical AND(&&):
        console.log('condition1 && condition2 = ', condition1 && condition2);
        console.log('condition1 && condition3 = ', condition1 && condition3);
        console.log("logical 'AND(&&)' returns true only if all the operands are true,even if one condition becomes false then it will give final results as false");

        //Logical OR(||):
        console.log('condition1 || condition2 =', condition1 || condition2);
        console.log('condition2 || condition3 =', condition2 || condition3);
        console.log('condition3 || condition4 =', condition3 || condition4);
        console.log("logical 'OR(||)' returns true if atleast one operand is ture,if all operands are flase then it will give final results as false");

        // Logical NOT(!):
        console.log('!condition1', !condition1);
        console.log('!condition3', !condition3);
        console.log('logical "NOT(!)" will invert the results of the operand,i.e it will reverse the original results');
    }

    // this is a Ternary operator
    console.log('Tenary operator')
    {
        // This is a shorthand for an if-else statement.

        let age = 18;
        console.log("let age =", age, ';');
        let canVote = (age >= 18) ? "Yes" : "No"; // "Yes"
        console.log('Let canVote = (age >= 18)? "Yes" : "No";');
        console.log(canVote);

    }


}


//CONDITIONAL STATEMENTS  CONDITIONAL STATEMENTS  CONDITIONAL STATEMENTS  CONDITIONAL STATEMENTS  CONDITIONAL STATEMENTS
{
    console.log('Conditional Statements:');
    console.log('Conditional statements in JavaScript are used to perform different actions based on different conditions. They allow your code to make decisions and execute certain blocks of code only when specific conditions are met')


    let age = 21;
    let age2 = 16;
    console.log('let age = ', age);
    console.log('let age2 = ', age2);

    // 'if' Statement:
    {
        console.log('if statement:');
        console.log('The "if" statement is used to execute a block of code if a specified condition evaluates to true.')
        console.log('Our condition is age >= 18');
        if (age >= 18) {
            console.log('You can vote because your age is', age);
        }
    }

    //'if-else' Statement:
    {
        console.log('if-else statement:');
        console.log('The "if-else" statement is used to execute a block of code if the condition in the if statement is false.');
        if (age2 >= 18) {
            console.log('You can vote because your age is', age);
        } else {
            console.log('You Cannot vote as your age is', age2, 'which is below 18');
        }
    }

    //'else-if' Statement:
    {
        console.log('else-if statement:');
        console.log('The else if statement is used to specify a new condition to test if the first condition is false. You can chain multiple else if statements together.');
        let person1 = 14;
        let person2 = 21;
        let person3 = 65;

        console.log('let person1 = 14,person2 = 21,person3 = 65');

        if (person1 < 18) {
            console.log('You are a kid')
        } else if (person1 >= 60) {
            console.log('you are old')
        }
        else {
            console.log('You are middle aged')
        }


        if (person2 < 18) {
            console.log('You are a kid')
        } else if (person2 >= 60) {
            console.log('you are old')
        }
        else {
            console.log('You are middle aged')
        }

        if (person3 < 18) {
            console.log('You are a kid')
        } else if (person3 >= 60) {
            console.log('you are old')
        }
        else {
            console.log('You are middle aged')
        }




        // let grade = 90;

        // if (grade <= 100 && grade >= 90) {
        //     console.log('Congratulations you got A grade');
        // } else if ((grade <= 89 && grade >= 70)) {
        //     console.log('Congratulations you got B grade');
        // } else if ((grade <= 69 && grade >= 60)) {
        //     console.log('You got grade C');
        // } else if ((grade <= 59 && grade >= 50)) {
        //     console.log('You got grade D');
        // } else if ((grade <= 49 && grade >= 1)) {
        //     console.log("You are failed")
        // }
        // else {
        //     grade = console.log("Try again later");
        // }

    }




}

