// let pageUrl = document.URL;
if (pageUrl.includes("mathura")) {
  let textNode = document.createTextNode(" in Mathura");
  document.getElementById("tagtitle").append(textNode);
  //   document.getElementById("tagtitle").prepend(textNode);
} else if (pageUrl.includes("faridabad")) {
  let textNode = document.createTextNode(" in Faridabad");
  document.getElementById("tagtitle").append(textNode);
}

document.getElementById("tagtitle").innerHTML = document
  .getElementById("test")
  .innerHTML.replace(/tagtitle/, "test");

// document.getElementById('tagtitle').innerHTML= document.getElementById('tagtitle').innerHTML.replace('#',"");
let pageUrl = document.URL;
if (pageUrl.includes("mathura")) {
  document.getElementById("city").innerHTML = document
    .getElementById("test")
    .innerHTML.replace(/head/, "GOA");
}
