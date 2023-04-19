
// first image 
var likeButton = document.getElementById("like-button");
var likeCount = document.querySelector("#like-button .like-count");

var liked = false;
var count = 54;

likeButton.addEventListener("click", function() {
  if (!liked) {
    count++;
    likeCount.textContent = count;
    likeButton.classList.add("liked");
    liked = true;
  } else {
    count--;
    likeCount.textContent = count;
    likeButton.classList.remove("liked");
    liked = false;
  }
});
// second image
var likeButton2 = document.getElementById("like-button2");
var likeCount2 = document.querySelector("#like-button2 .like-count");

var liked2 = false;
var count2 = 63;

likeButton2.addEventListener("click", function() {
  if (!liked2) {
    count2++;
    likeCount2.textContent = count2;
    likeButton2.classList.add("liked");
    liked2 = true;
  } else {
    count2--;
    likeCount2.textContent = count2;
    likeButton2.classList.remove("liked");
    liked2 = false;
  }
});
// third image
var likeButton3 = document.getElementById("like-button3");
var likeCount3 = document.querySelector("#like-button3 .like-count");

var liked3 = false;
var count3 = 40;

likeButton3.addEventListener("click", function() {
  if (!liked3) {
    count3++;
    likeCount3.textContent = count3;
    likeButton3.classList.add("liked");
    liked3 = true;
  } else {
    count3--;
    likeCount3.textContent = count3;
    likeButton3.classList.remove("liked");
    liked3 = false;
  }
});
// 4th image
var likeButton4 = document.getElementById("like-button4");
var likeCount4 = document.querySelector("#like-button4 .like-count");

var liked4 = false;
var count4 = 25;

likeButton4.addEventListener("click", function() {
  if (!liked4) {
    count4++;
    likeCount4.textContent = count4;
    likeButton4.classList.add("liked");
    liked4 = true;
  } else {
    count4--;
    likeCount4.textContent = count4;
    likeButton4.classList.remove("liked");
    liked4 = false;
  }
});
// 5th image
var likeButton5 = document.getElementById("like-button5");
var likeCount5 = document.querySelector("#like-button5 .like-count");

var liked5 = false;
var count5 = 52;

likeButton5.addEventListener("click", function() {
  if (!liked5) {
    count5++;
    likeCount5.textContent = count5;
    likeButton5.classList.add("liked");
    liked5 = true;
  } else {
    count5--;
    likeCount5.textContent = count5;
    likeButton5.classList.remove("liked");
    liked5 = false;
  }
});
// 6th image
var likeButton6 = document.getElementById("like-button6");
var likeCount6 = document.querySelector("#like-button6 .like-count");

var liked6 = false;
var count6 = 35;

likeButton6.addEventListener("click", function() {
  if (!liked6) {
    count6++;
    likeCount6.textContent = count6;
    likeButton6.classList.add("liked");
    liked6 = true;
  } else {
    count6--;
    likeCount6.textContent = count6;
    likeButton6.classList.remove("liked");
    liked6 = false;
  }
});
// 7th image
var likeButton7 = document.getElementById("like-button7");
var likeCount7 = document.querySelector("#like-button7 .like-count");

var liked7 = false;
var count7 = 8;

likeButton7.addEventListener("click", function() {
  if (!liked7) {
    count7++;
    likeCount7.textContent = count7;
    likeButton7.classList.add("liked");
    liked7 = true;
  } else {
    count7--;
    likeCount7.textContent = count7;
    likeButton7.classList.remove("liked");
    liked7 = false;
  }
});
// 8th image
var likeButton8 = document.getElementById("like-button8");
var likeCount8 = document.querySelector("#like-button8 .like-count");

var liked8 = false;
var count8 = 10;

likeButton8.addEventListener("click", function() {
  if (!liked8) {
    count8++;
    likeCount8.textContent = count8;
    likeButton8.classList.add("liked");
    liked8 = true;
  } else {
    count8--;
    likeCount8.textContent = count8;
    likeButton8.classList.remove("liked");
    liked8 = false;
  }
});
// 9th image
var likeButton9 = document.getElementById("like-button9");
var likeCount9 = document.querySelector("#like-button9 .like-count");

var liked9 = false;
var count9 = 13;

likeButton9.addEventListener("click", function() {
  if (!liked9) {
    count9++;
    likeCount9.textContent = count9;
    likeButton9.classList.add("liked");
    liked9 = true;
  } else {
    count9--;
    likeCount9.textContent = count9;
    likeButton9.classList.remove("liked");
    liked9 = false;
  }
});
  