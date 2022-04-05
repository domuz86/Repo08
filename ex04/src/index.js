// Only change code belowe this line

var myGlobalVariable = 10;

function function1(){
   var myLocalVariable = 5;
}

//Only change above this line

function function2(){ 
    
    var result = "";
    if(typeof myGlobalVariable != "undefined"){
        result += "myGlobalVariableyG:" + myGlobalVariable;
    }
    if(typeof myLocalVariable != "undefined"){
        result += " myLocalVariable:" + myLocalVariable;
    }
console.log(result);

}

function1();
function2();

module.exports = {
    function1,
    function2
};
