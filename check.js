let sochan = [];
function findEven(number) {
    for (let i = 4; i < number; i++ ) {
        if (i % 2 == 0) {
            sochan += i;
        }
    }
}
findEven(15);
console.log(sochan)


function numberOnetriangle() {
    for(i = 0; i < 5; i++ ) {
        for (a = 0; a <= i; a++){
            document.writeln("1");
        }
        document.writeln("<br>")
    }
}
numberOnetriangle();