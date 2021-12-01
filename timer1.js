//Implement an alarm clock / timer which will beep after a specified amount of time has passed. The user can specify an unlimited number of alarms using command line arguments

//retrieve commandline input on the number of alarms
//the input will be sorted into a new array according to ascending orders
// code for beep sound: process.stdout.write('\x07');
//utilize if statements -> (1) no beep for no number, (2) ignore negative number (when sorting the array) and ignore non-number input

var args = process.argv.slice(2);

const array1 = args.filter(args => args > 0); //remove negative number
const array2 = array1.sort((a, b) => {  //ascending order
  return a - b;
});

for (const alarm of array2) {
  setTimeout(() => {
    process.stdout.write(`${alarm}`);
    process.stdout.write('\x07');
  }, alarm * 100);
}
