// var buttonOne = document.getElementById('cat-1');
// var counterOne = document.getElementById('score-text-1'),
//   count = 0;
// buttonOne.onclick = function() {
//   count += 1;
//   counterOne.innerHTML = "Cat 1 clicks: " + count;
// };

// var buttonTwo = document.getElementById('cat-2');
// var counterTwo = document.getElementById('score-text-2'),
//   count = 0;
// buttonTwo.onclick = function() {
//   count += 1;
//   counterTwo.innerHTML = "Cat 2 clicks: " + count;
// };

var cat = {
  one:"Julie",
  two:"Ken",
  };

// Create cats

var cats = {
  "cat-1": [{
    "name": "Julie",
    "picture": "img/cat.jpg",
    "clicks": "0",
  }]

  "cat-2": [{
    "name" : "Ken",
    "picture": "img/cat2.jpg",
    "clicks": "0",
  }]
}

document.getElementById('cat-1-name').innerHTML = cat.one;
document.getElementById('cat-2-name').innerHTML = cat.two;


// var catNames = document.getElementsByClassName("cat-name");
// for(var i = 0; i < catNames.length; i++)
// {
//   catNames.innterHTML = cat.one;
//   console.log(cat.one);
// }