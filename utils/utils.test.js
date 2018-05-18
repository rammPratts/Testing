const utils = require("./utils");
const expect = require("expect");

it("should square two numbers", ()=>{
    var res = utils.square(2);

    if(res !== 4){
        throw new Error(`Se esperaba 4, se obtuvo ${res}`);
    }
});

// it("should verify first and last names are set",()=>{
//     var res = utils.names({age: 18,location:"Melo"},"Ramiro Meneses");

//     expect(res).toInclude({
//         firstName:"Ramiro",
//         secondName:"Meneses"
//         });
// });