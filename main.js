var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

btn = document.querySelector('button');
btn.addEventListener('click',changeDarkness);

var overlay = document.querySelector('.overlay');

/* Looping through images */
for(var i = 1;i <= 5;i++) {
  var newImage = document.createElement('img');
  var path = 'images/pic'+ i + '.jpg';
  newImage.setAttribute('src', path);
  newImage.addEventListener('click',displayImage);
  thumbBar.appendChild(newImage);
}

function displayImage(e) {
  var imgSrc = e.target.getAttribute('src');
  displayedImage.setAttribute('src',imgSrc);
}

/* Wiring up the Darken/Lighten button */


/*=============================================
=            Using onclick property            =
=============================================*/




/**
 *
 * btn.onclick = function() {
  var btnClass = btn.getAttribute('class'); 
  if(btnClass === 'dark') {
    btn.setAttribute('class','light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
  } else {
    btn.setAttribute('class','dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  }
}
 *
 */



/*=============================================
=            Using addEventListener           =
=============================================*/


function changeDarkness(e) {
  var classTag = e.target.getAttribute('class');
  if( classTag === 'dark' )
  {
    btn.setAttribute('class','light');
    btn.textContent = 'Lighten';
    overlay.style.background = 'rgba(0,0,0,0.5)';
  } else if (classTag === 'light') {
    btn.setAttribute('class','dark');
    btn.textContent = 'Darken';
    overlay.style.background = 'rgba(0,0,0,0)';
  }
}


