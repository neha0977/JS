// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

// The expression is evaluated once and compared with each case value.
// If a match is found, the corresponding block of code is executed.
// The break statement prevents the code from running into the next case. If you omit break, it will "fall through" and continue executing the following case blocks, even if those do not match.
// The default case is optional and will run if no cases match the expression.
const month = "march"

switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break;
    case "april":
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}