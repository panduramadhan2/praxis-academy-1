//Block statement
while (x < 10) {
    x++;
  }




  var x = 1;
{
  var x = 2;
}
console.log(x); // outputs 2


//Conditional statements

if (condition) {
    statement_1;
  } else {
    statement_2;
  }



if (condition_1) {
    statement_1;
  } else if (condition_2) {
    statement_2;
  } else if (condition_n) {
    statement_n;
  } else {
    statement_last;
  } 


if (condition) {
  statement_1_runs_if_condition_is_true;
  statement_2_runs_if_condition_is_true;
} else {
  statement_3_runs_if_condition_is_false;
  statement_4_runs_if_condition_is_false;
}


if (x = y) {
    /* statements here */
  }

if ((x = y)) {
  /* statements here */
}


var b = new Boolean(false);
if (b) // this condition evaluates to true
if (b == true) // this condition evaluates to false


function checkData() {
    if (document.form1.threeChar.value.length == 3) {
      return true;
    } else {
      alert('Enter exactly three characters. ' +
      document.form1.threeChar.value + ' is not valid.');
      return false;
    }
  }



//switch statement
switch (expression) {
    case label_1:
      statements_1
      [break;]
    case label_2:
      statements_2
      [break;]
      ...
    default:
      statements_def
      [break;]
  }




switch (fruittype) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Apples':
    console.log('Apples are $0.32 a pound.');
    break;
  case 'Bananas':
    console.log('Bananas are $0.48 a pound.');
    break;
  case 'Cherries':
    console.log('Cherries are $3.00 a pound.');
    break;
  case 'Mangoes':
    console.log('Mangoes are $0.56 a pound.');
    break;
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    break;
  default:
   console.log('Sorry, we are out of ' + fruittype + '.');
}
console.log("Is there anything else you'd like?");



//Exception handling statements
throw 'Error2';   // String type
throw 42;         // Number type
throw true;       // Boolean type
throw {toString: function() { return "I'm an object!"; } };


// Create an object type UserException
function UserException(message) {
    this.message = message;
    this.name = 'UserException';
  }
  
  // Make the exception convert to a pretty string when used as a string 
  // (e.g. by the error console)
  UserException.prototype.toString = function() {
    return this.name + ': "' + this.message + '"';
  }
  
  // Create an instance of the object type and throw it
  throw new UserException('Value too high');




//try...catch statement
function getMonthName(mo) {
  mo = mo - 1; // Adjust month number for array index (1 = Jan, 12 = Dec)
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
                'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  if (months[mo]) {
    return months[mo];
  } else {
    throw 'InvalidMonthNo'; //throw keyword is used here
  }
}

try { // statements to try
  monthName = getMonthName(myMonth); // function could throw exception
}
catch (e) {
  monthName = 'unknown';
  logMyErrors(e); // pass exception object to error handler -> your own function
}


//The catch block
catch (catchID) {
    statements
  }

try {
  throw 'myException'; // generates an exception
}
catch (e) {
  // statements to handle any exceptions
  logMyErrors(e); // pass exception object to error handler
}

openMyFile();
try {
  writeMyFile(theData); //This may throw an error
} catch(e) {  
  handleError(e); // If we got an error we handle it
} finally {
  closeMyFile(); // always close the resource
}


function f() {
    try {
      console.log(0);
      throw 'bogus';
    } catch(e) {
      console.log(1);
      return true; // this return statement is suspended
                   // until finally block has completed
      console.log(2); // not reachable
    } finally {
      console.log(3);
      return false; // overwrites the previous "return"
      console.log(4); // not reachable
    }
    // "return false" is executed now  
    console.log(5); // not reachable
  }
  console.log(f()); // 0, 1, 3, false


  function f() {
    try {
      throw 'bogus';
    } catch(e) {
      console.log('caught inner "bogus"');
      throw e; // this throw statement is suspended until 
               // finally block has completed
    } finally {
      return false; // overwrites the previous "throw"
    }
    // "return false" is executed now
  }
  
  try {
    console.log(f());
  } catch(e) {
    // this is never reached because the throw inside
    // the catch is overwritten
    // by the return in finally
    console.log('caught outer "bogus"');
  }
  
  // OUTPUT
  // caught inner "bogus"
  // false


//Nesting try...catch statements
//Utilizing Error objects
function doSomethingErrorProne() {
    if (ourCodeMakesAMistake()) {
      throw (new Error('The message'));
    } else {
      doSomethingToGetAJavascriptError();
    }
  }
  ....
  try {
    doSomethingErrorProne();
  } catch (e) { // now we actually use console.error()
    console.error(e.name); // logs 'Error'
    console.error(e.message); // logs 'The message' or a JavaScript error message
  }
