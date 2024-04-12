var images = ["Images/Business PNG 1.png", "Images/Business PNG 2.png", "Images/Business PNG 3.png", "Images/Business PNG 4.png", "Images/Business PNG 5.png", "Images/Business PNG 6.png", "Images/Business PNG 7.png", "Images/Business PNG 8.png", "Images/Business PNG 9.png", ];

var tartalomDiv = document.getElementById("tartalom");
images.forEach(function(image) {
  var div = document.createElement("div");
  div.className = "kartya";
  var img = document.createElement("img");
  img.src = image;
  img.className = "kep1";
  div.appendChild(img);
  tartalomDiv.appendChild(div);
});
