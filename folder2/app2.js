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
  document.getElementById("test").innerHTML = document
    .getElementById("test")
    .innerHTML.replace(/head/, "Bihar");
}
