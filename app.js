//nested ternary operator
// if (true) {
//     if (true) {
//         console.log("true")
//     } else {
//         console.log("false")
//     }
// } else {
//     console.log("parent false")
// }
// nested
// true ? true ? console.log("true") : console.log("false") : console.log("parent false");

// -----------------------conditional saving & circuit ------------------------------

// let bool = true;
// let num1 = undefined; //"10"
// let num2 = 20;
// let a = bool ? "abc" : "xyz";  //conditional saving
// console.log(a);

//circuits && ||
// let b = bool && "ABC";
// console.log(b);

// let c = num1 + num2 //|| 0;
// console.log(c);  //typeof naN == number

// if (b == true) {
//     console.log("true")
// } else {
//     console.log("false")
// }

// -------------------------pass by value-----------------------------------
// let a ="abc";
// a = 123
// console.log(a)

// -------------------------pass by reference-----------------------------------
// const a = "abc";
// a = "xyz";

// const a = []
// a[0] = "abc";

// let a = "abc";
// let b=a
// b=123;
// console.log(b); //output 123

// let a = ["abc"];
// let b=a
// // b=[123];
// console.log(A); //output abc
// console.log(b); //output 123

// let a = ["abc"];
// let b=a
// b[0] = 123
// console.log(a); //output 123
// console.log(b); //output 123


//array and object create reference


// let a = [1,2,3]
// let b = a;
// b.splice(1,1)  if there is an array or an object
// console.log(a)



// const a = {
//     id: 1,
//     name:"ABC"
// };

// const b = a;
// b.name = "XYz"
// console.log(a);


// ------------------------- spread operator----------------------------------------------
// const a = [1, 2, 3];

// // const b = [...a,4,5,6,7] //...spread
// const b = new Array(...a)
// // b.splice(1,1);
// console.log(a) //1, 2, 3
// console.log(b) //1,3

// array spread possible in array 
// object spread possible in object 
// Object.array =
// ================================ practice ================================================

// let a ="abc";
// let b = a;
// b = 123
// console.log(a); //abc
// console.log(b); //123

// let a = [];
// a[0] = "abc";
// let b = a;
// b[0] = 123
// console.log(a); //123
// console.log(b); //123

//===================================== class 4 ==================================================
// a=10;
// console.log(a)
// var a 


// let a = ["one", "two","three","four","five"]
// a.splice(1,3, "six")
// console.log(a)
//------------------------------------ Rest operator ---------------------------------------------

// function abc(...rest){
//     console.log(rest)
// }
// let b = [0,55]
// abc(...b,1,2,3,4)

// function abc(a,...rest){
//     console.log(a)
//     console.log(rest)
// }
// abc(1,2,3,4)

//---------------------------------- D structure ---------------------------------------------
// const obj = {
//     name:"rehan",
//     id : 123,
// };

// const { name , id} = obj;
// console.log(id);

// nested obj
// const obj = {
//     nested: {
//         name: "rehan",
//         id: 123,
//     }
// };
// const { name, id } = obj.nested;
// console.log(id);

// const arr =[1,2,3,4];
// const [a,b,c] = arr 
// // let a = arr[0]; //old method
// console.log(a,b,c)

// let arr = ["ahmed" , 'shezad', "0123"]
// let [firstname ,contact] = arr

// let obj1 ={

// name:firstname,
// contact:contact
// }

// console.log(Object.entries(obj1))

// const obj = {
//          name: "rehan",
//           id: 123,
//   };

// let array = Object.keys(obj).map((keys)=> obj[keys]
// )
// console.log(array)

// ---------------------------------------------------------------------------
// let ab = ['a','b','c','d']
// let obj = {
//   id:1
// }

// --------------------------------- map ----------------------------------------
// const arr = ['z','x','c','abc'];

// arr.map(function(value,index){
//     console.log("value=====",value)
//     console.log("index=====",index)
// });


// let a = [
//     {
//         id: 1,
//         name: "ABC"
//     }, {
//         id: 2,
//         name: "XYZ"
//     }, {
//         id: 3,
//         name: "abc"
//     }, {
//         id: 4,
//         name: "abc"
//     }, {
//         id: 5,
//         name: "abc"
//     }
// ]


// a.map(function (e) {                                //(x,1,lst)
//     console.log(e);
//     return(e); // it will return an array
// })
// --------------------------------- filter ----------------------------------------

// let a = [{id:1},{id:2},{id:3}]

// let b = [...a]
// let b = JSON.parse(JSON.stringify(a))
// b[0].name = "ABC";

// console.log(b[1]);

// --------------------------------- filter ----------------------------------------
// let a = [
//     {
//         id: 1,
//         name: "ABC",
//         catagory: "A"
//     }, {
//         id: 3,
//         name: "abc",
//         catagory: "V"
//     }, {
//         id: 2,
//         name: "XYZ",
//         catagory: "X"
//     }, {
//         id: 4,
//         name: "abc",
//         catagory: "V"
//     }, {
//         id: 5,
//         name: "abcn",
//         catagory: "V"
//     }
// ];


// if(regExp.test(testString)){
//   /* do something if letters are found in your string */
// } else {
//   /* do something if letters are not found in your string */
// }
// let c = a.filter((x) => {
  
//   var regExp = "n";
//   if(regExp.test(x.name)== regExp){
//     return x
//   }
// }
// )
// console.log(c)

// var regExp = /[lL]/g;
// var testString = "john";
            
// if(regExp.test(testString)){
//   console.log("done")
// } else {
//   console.log("nit fount")
// }


// let b = a.filter(function (x, i) {
//     if (x.catagory == "V") {
//         console.log(i)
//         x.in = i;
//         return x;
//     }
// })
// console.log(b)

// let b = a.filter(function (x, i) {
//     if (x.name.includes(x)) {
//         return x;
//     }
// })
// console.log(b)

//////////---------

// let filtered = a.filter(x=>x.name.includes("ean"))
// console.log(filtered)

// --------------------------------- forEach ----------------------------------------
// let a = [
//     {
//         id: 1,
//         name: "ABC",
//         catagory: "A"
//     }, {
//         id: 3,
//         name: "abc",
//         catagory: "V"
//     }, {
//         id: 2,
//         name: "XYZ",
//         catagory: "X"
//     }, {
//         id: 4,
//         name: "abc",
//         catagory: "V"
//     }, {
//         id: 5,
//         name: "abc",
//         catagory: "V"
//     }
// ];

// a.forEach(function (x, i) {
//     x.inst = "SAIMS"
//     // delete x.catagory
// });

// console.log(a)

// //---------------------------------  sum -----------------------------------
// // return Boolean

// let a = [
//     {
//         id: 1,
//         name: "ABC",
//         catagory: "A",
//         isApproved: true
//     }, {
//         id: 3,
//         name: "abc",
//         catagory: "V",
//         isApproved: false
//     }, {
//         id: 2,
//         name: "XYZ",
//         catagory: "X",
//         isApproved: false
//     }, {
//         id: 4,
//         name: "abc",
//         catagory: "V",
//         isApproved: false
//     }, {
//         id: 5,
//         name: "abc",
//         catagory: "V",
//         isApproved: false
//     }
// ];

// let b = a.some(function (x, i) {
//     if(x.catagory == "A"){
//         return x;
//     }
// });
// let c = a.some(function (x, i) {
//     if(x.isApproved){
//         return x;
//     }
// });
// console.log(b)
// console.log(c)

//---------------------------------  find -----------------------------------
// return single object

// let a = [
//     {
//         id: 1,
//         name: "ABC",
//         catagory: "A",
//         isApproved: true
//     }, {
//         id: 3,
//         name: "abc",
//         catagory: "V",
//         isApproved: false
//     }, {
//         id: 2,
//         name: "XYZ",
//         catagory: "X",
//         isApproved: false
//     }, {
//         id: 4,
//         name: "abc",
//         catagory: "V",
//         isApproved: false
//     }, {
//         id: 5,
//         name: "abc",
//         catagory: "V",
//         isApproved: false
//     }
// ];

// let b = a.find(function (x, i) {
//     if(x.id == 2){
//         return x;
//     }
// });
// let c = a.some(function (x, i) {
//     if(x.isApproved){
//         return x;
//     }
// });
// console.log(b)
// console.log(c)




// ========================================== class 5=======================================
// let a = [1, 2, 3, 21, 2]
// let v = [...new Set(a)]                //for unique value
// const mobiles = [
//   {
//     companyName: "Samsung",
//     model: "A12",
//     color: "Blue",
//     ram: 128,
//     price: 250000,
//     src: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a12-sm-a125.jpg",
//   },
//   {
//     companyName: "Samsung",
//     model: "A7",
//     color: "Blue",
//     ram: 128,
//     price: 250000,
//     src: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a12-sm-a125.jpg",
//   },
// ]


// let filterArray = []
// function init(){

//   let a = mobiles.map(function(x){

//   })

// }

// function searchMob(a) {
//   filterArray = mobiles.map(function (x) {
//     if (x.companyName = a) {
//       return x["model"]
//     }
//   }).filter(Booleam);
//   console.log(filterArray);
// }

// init()
// searchMob()


// ============================= TypeScript =================================
// ============================= find =================================
// const mobiles = [
//   {
//       id:1,
//       companyName: "Samsung",
//       model: "A12",
//       color: "Blue",
//       ram: 128,
//       price: 250000,
//       src: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a12-sm-a125.jpg",
//     },
//     {
//       id:2,
//       companyName: "Samsung",
//       model: "A7",
//       color: "Blue",
//       ram: 128,
//       price: 250000,
//       src: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a12-sm-a125.jpg",
//     },
//   ]
  
  
  
  // ============================= findIndex =================================
  // let a = mobiles.findIndex(function (x){
    
  //   return x.id == 2 ? x : null;
  // }) 
  // console.log(a)
  
  
  // ============================= functions =================================

// 1: arrow
// 2: callback
// 3: higherOrder
// 4: Closures

// ---------------------------------// 1: arrow

// function abc(a) {
  // console.log(a);
// }

// let abc =(a)=>{ //anonymous, save in variable ,nothosted, doesnot allocate space in memory 
//   console.log(a);
// }
// abc()

// let abc =(a)=>{
  //   return a
  // }
  // console.log(abc("Message"))
  // abc()
  
  // let abc = a=> a                            //(_)=>_
  // console.log(abc("Message"))
  // abc()
  
  // let arr = mobiles.filter(x=>x.model == "Redmi 10")
  // console.log(arr)
  // abc()

  
  
  
//==================================calback + high order====================================

// let abc = (a) => {
//   // console.log(a)
//   return a
//   } 

// let xyz = (a) => {
//   // console.log(a)
//   return a*2
//   } 
 
//   console.log(xyz(abc(10)))

// let ab
// c= ()=>{
//   console.log('abc')
//   return()=>{
//   console.log('xyz')
//   return ()=>{
//     console.log('3')
//     }}
// }
// // let b = abc()
// // b()

// abc()()()


// ---------------------------------  promise ----------------------
// let myPromise = new Promise((myResolve, myReject)=> {
//   let x = 0;

//   if (x == 0) {
//     myResolve("OK");
//   } else {
//     myReject("Error");
//   }
// });

// myPromise.then(
//   (value)=> {console.log(value);}
  
// ).catch((error)=> {console.log(error);});


// let checkPass = (password)=> new Promise((myResolve, myReject)=> {
  
//     if (password.length > 6) {
//       myResolve("strong");
//     } else {
//       myReject("weak");
//     }
//   });

//   myPromise.then(
//       (value)=> {console.log(value);}
      
//     ).catch((error)=> {console.log(error);});


// ---------------------------------  promise ----------------------
// let ac ()=>{
// // console.log("1")
// // setTimeout(()=>
// // console.log("2"),1000)
// // console.log("3")
// let 
// setTimeout(()=>
//   a="CBC",100)
// }
// console.log(await a)
// abc()
// let abc = asyn



// let abc = (a ="default value") =>{
//   console.log(a)
// };

// abc("Rehan");
// abc();





