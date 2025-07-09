console.log("papa".replace("p", "m"));

console.log("Borobudur".replace(/[ou]/g, "a"));

console.log("Borobudur".replace(/[ou]/, "a"));

console.log("Liskov, Barbava\nMcCarthy, John\nMatler, Philip".replace(/(\w+), (\w+)/g, "$2 $1"));

let s = "the cia and fbi";
console.log(s.replace(/\b(fbi|cia)\b/g, str=> str.toUpperCase()));

let stock = "1 lemon, 2 Cabbages, and 101 eggs";
function minusOne(match, amount, unit) {
    amount = Number(amount) - 1; 
    if (amount == 1) {
        //this will remove the s 
        unit = unit.slice(o, unit.length -1);
    } else if (amount == 0) {
        amount = "no";
    } return amount + " " + unit;
}
 console.log(stock.replace (/c\d + ) (\w+)/g, minusOne));22

 //Greed
function stripComments(code) {
    return code.replace(/\/.*|\/\*[^]*\*\//g, " ");
}
console.log(stripComments("1 + / * 2  * /3"));

console.log(stripComments("x = 10; //ten!"));

console.log(stripComments("1 /* a */+/* b */1"));

//
let name = "Henry";
let text = "Harry is a suspicious character";
let regexp = new RegExp("\\b (" + name + ")\\b","gi");
console.log(text.replace(regexp, "_$1_"));

//last index property
let pattern = /y/g;
pattern.lastIndex = 3
let match = pattern.exec ("xyzzy");
console.log(Math.index);

console.log(pattern.lastIndex);

//
let global = /abc/g;
console.log(global.exec("xyz abc"));

let sticky = /abc/y;
console.log(sticky.exec("xyz abc"));

//
let digit = /\d/g;
console.log(digit.exec("here it is: 1"));

console.log(digit.exec("and now: 1"));

console.log("Banana".match(/an/g));

//Looping over materials

let input = "A string with 3 numbers in it ... 42 and 88";
let number = /\b\d+\b/g;

let match0;
while (match = number.exec(input)) {
    console.log("Found", match[0], "at", match.index);
}

//parsing an infi file
function parseINI(string) {
    // start with an object to hold the top level field
    let result = {};
    let section = result;

    string.split(/\r?\n/).forEach(line => {
        let match;
        if (match = line.match(/^(\w+) = (.*)$/)) {
            section[match[1]] = match[2];
        } else if (match = line.match(/^\[(.*)\]$/)) {
            section = result [match[1]] = {};
        } else if (!/^\s*(;, *) ?$/.test(line))
        {throw new Error ("Line " + line + " is not valid.");

        }
    });
    return result;
}
console.log(parseINI ('name = Vasilis [address],city = Tessaloniki'));