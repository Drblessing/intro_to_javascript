var age = 21;

var age = 21, sex = 'yes', loc = 'SF';

var a = 350;
var b = 70;
var total = a+b;
console.log(total);

var problems = 9;
problems += 90;
console.log(problems);

problems++;
console.log(problems);


// comments
var dude = 'Rando';


if (dude == 'Daniel Blessing'){
    console.log('888-8888');
    console.log('me@protonmail.com');
}
else if(dude != 'Douchebag') {
    console.log('find me on insta')
}

else{
    alert("I'm busy for the rest of my life");
}


var charStats = [[32,24,32,],'OSX','Python'];

console.log(charStats);

console.log(charStats[0][1]);

charStats.push('Iphone');

console.log(charStats);

var counter = 0;

while (counter <= 10){
    console.log('I"ll be back');
    counter ++;
}

//alert('Hasta la vista baby ' + counter);

var char = ['Seldon','Andorak','Og','Thanos'];

var charCount = char.length;

for (var i = 0; i<charCount; i++) {
    console.log(char[i] + (', so hot right now'));
}

function block() {
    alert('block!');
}

//block();

function addNumbers(a,b) {
    var sum = a+b;
    return sum;
}

console.log(addNumbers(611,8));
