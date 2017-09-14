// Create HTML cat name element
var HTMLcatName = '<p class="cat-name">%data%</p>';

// Set the names of cat one and cat two
var catOneName = HTMLcatName.replace("%data%", "Kelly");
//var catTwoName = HTMLcatName.replace("%data%", "John");

// Show the cat names on the page
$("#cat-1").prepend(catOneName);
//$("#cat-2").prepend(catTwoName);

// Create clicker and counter for cat 1
var button = document.getElementById('cat-pic-1');
var counter = document.getElementById('score-text'),
count = 0;

button.onclick = function() {
  count += 1;
  counter.innerHTML = "Clicks: " + count;
};


// Create cats... this was confusing, try again later
// var cats = {
//   "catOne": [{
//     "name": "Julie",
//     "picture": "img/cat.jpg",
//     "clicks": "0",
//   }],

//   "catTwo": [{
//     "name" : "Ken",
//     "picture": "img/cat2.jpg",
//     "clicks": "0",
//   }]
// }

// Create Cat two object
var catTwo = {
  "name": "Ken",
  "photo": "img/cat2.jpg",
  "counter": "Clicks: 0"
}

// Create HTML elements for cats
var HTMLcatName = '<p class="cat-name">%data%</p>';
var HTMLcatPic = '<img src="%data%" class="cat-pic img-fluid">';
var HTMLcatCount = '<p class="cat-score">%data%</p>';

//Display cat two object
catTwo.display = function() {

  var formattedName = HTMLcatName.replace("%data%", catTwo.name);
  var formattedPic = HTMLcatPic.replace("%data%", catTwo.photo);
  var formattedCount = HTMLcatCount.replace("%data%", catTwo.counter);
  $("#cat-2").append(formattedName, formattedPic, formattedCount);

  // Create a button for the click counter.. this doesn't work yet
  var button = formattedPic;
  var counter2 = formattedCount;
  count = 0;
  button.onclick = function() {
    count += 1;
    counter2.innerHTML = "Clicks: " + count;
  };
}

//Call cat display function
catTwo.display();

