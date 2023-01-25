let title = document.title;
let url = document.URL.includes("bihar");
let testDelhi = /Delhi ncr/i;
let testGoa = /Goa/g;
let testHry = /Haryana/g;
let testUp = /Uttar Pradesh/g;

let replaceDelhi = testDelhi.test(title); //return true or false
let replaceGoa = testGoa.test(title); //return true or false
let appendHaryana = testHry.test(title); //return true or false
let prependUp = testUp.test(title); //return true or false
// console.log(prependUp);

replaceDelhi
  ? (document.getElementById("test").innerHTML = document
      .getElementById("test")
      .innerHTML.replace(/head/, "Delhi NCR"))
  : "";
replaceGoa
  ? (document.getElementById("test").innerHTML = document
      .getElementById("test")
      .innerHTML.replace(/head/, "GOA"))
  : "";

if (appendHaryana) {
  let textNode = document.createTextNode(" Smart City Haryana");
  document.getElementById("test").appendChild(textNode);
}
if (prependUp) {
  let textNode = document.createTextNode("Welcome to Uttar Pradesh ");
  document.getElementById("test").prepend(textNode);
}
if (url) {
  console.log("inside bihar if");
  // console.log(document.getElementById("test").innerHTML);

  document.getElementById("test").innerHTML = document
    .getElementById("test")
    .innerHTML.replace(/head/, "Bihar");
}
// appendHaryana?
// (let textNode = document.createTextNode('Smart City Haryana');):'';

// if (test) {
//   document.getElementById("test").innerHTML = document
//     .getElementById("test")
//     .innerHTML.replace(/head/, "Delhi NCR");
// } else if (replaceGoa) {
//   document.getElementById("test").innerHTML = document
//     .getElementById("test")
//     .innerHTML.replace(/head/, "Goa");
// }

// console.log(typeof document.title);
// if (document.title.includes(/delhi ncr/g)) {
//   document.getElementById("test").append("appending text");
// }

// if (document.URL.includes("delhi")) {
//   document.getElementById("test").innerHTML = document.body.innerHTML.replace(
//     /head/g,
//     "Delhi"
//   );
// }
//   // if (document.URL.includes("delhi")) {
//   //   document.body.innerHTML = document.body.innerHTML.replace(/head/g, "Delhi");
//   // }
//   // if (document.URL.includes("goa")) {
//   //   document.body.innerHTML = document.body.innerHTML.replace(/head/g, "Goa");
// }

//   // if (document.URL.includes("delhi")) {
//   //   document.body.innerHTML = document.body.innerHTML.replace(/head/g, "Delhi");
// }
