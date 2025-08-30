


let my_firstName = "Md.Pranto";
let my_lastName = ' Islam ';
let sorr_name = `Pranto`;
console.log(my_firstName + my_lastName,"Your Sorr Name is: ",sorr_name);




//String Looping

let name = "Md.ranto Islam";
let length = name.length;
for (let i = 0; i < length; i++) {
    if(name[i] === "P" || name[i] === "p") {
        console.log("Done");
    }
    else {
        console.log("Missing '@'");
        break;
    }
}


