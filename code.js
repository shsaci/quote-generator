
var collection = {quotes: []};
var arr = [
  "The most difficult thing is the decision to act. The rest is merely tenacity", "Amelia Earhart",
  "Change is inevitable. Growth is optional.", "John C. Maxwell",
  "Do not take the agenda that someone else has mapped out for your life.", "John C. Maxwell", "Growth inside fuels growth outside.", "John C. Maxwell",
  "Learn to say ‘no’ to the good so you can say ‘yes’ to the best.", "John C. Maxwell",
  "Life is 10% of what happens to me and 90% of how I react to it.", "John C. Maxwell",
  "People do not care how much you know until they know how much you care.", "John C. Maxwell", "The pessimist complains about the wind. The optimist expects it to change. The leader adjusts the sails.", "John C. Maxwell",
  "We all stand on the shoulders of the past generation.", "John C. Maxwell",
  "You don’t overcome challenges by making them smaller but by making yourself bigger.", "John C. Maxwell",
  "You must manage your thought life daily and then you can manage your life.", "John C. Maxwell"
];

function adder(arr) {
  for (var i = 0; i < arr.length; i++) {
    var quoteObj = {};
    quoteObj.quote = arr[i];
    i++;
    quoteObj.authName = arr[i];
    collection.quotes.push(quoteObj);
  }
}

adder(arr);
console.log(collection);
var collectionLength = collection.quotes.length;
collectionLength--;

function randomNum() {
    var x = Math.floor((Math.random() * collectionLength) + 1);

    var z = document.getElementsByClassName("quote");
    z[0].innerHTML = "\"" + collection.quotes[x].quote + "\"";

    var y = document.getElementsByClassName("author");
    y[0].innerHTML = "~ " + collection.quotes[x].authName;
}

randomNum();
