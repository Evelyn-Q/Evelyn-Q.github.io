/* ************* Initial Typing Animation ************* */
function typeText(text, id) {
    const container = document.getElementById(id);

    let index = 0;

    const intervalId = setInterval(() => {
      if (index === text.length) {
        clearInterval(intervalId);
      } else {
        container.textContent += text.charAt(index);
        container.style.width = `${container.scrollWidth}px`;
        index++;
      }
    }, 80);
  }

window.addEventListener('load', () => {
    typeText('Hello! Welcome to my Website', 'welcome-text');
});
  
/* ************* Calender ************* */

var datetime = document.getElementById('datetime');

setInterval(function () {
  var now = new Date();
  var datetimeStr = now.toLocaleString();
  datetime.innerHTML = datetimeStr;
}, 1000);

/* ************* Drag Element Functionality ************* */

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

window.onload = function() {
  dragElement(document.querySelector('.sticky-note'));
  dragElement(document.querySelector('.about-me'));
  dragElement(document.querySelector('.projects'));
  dragElement(document.querySelector('.email-view'));
  dragElement(document.querySelector('.bookstore-img'));
  dragElement(document.querySelector('.gamestore-img'));
  dragElement(document.querySelector('.cpu-img'));
  dragElement(document.querySelector('.enigma-img'));
  dragElement(document.querySelector('.jump61-img'));
  dragElement(document.querySelector('.gitlet-img'));
  dragElement(document.querySelector('.web'))
};

/* ************* Clicking Functionality ************* */

document.getElementById("file").onclick = function() {
  document.querySelector(".about-me").style.display = "block";
  document.querySelector(".about-me").style.visibility = "visible";
  document.querySelector(".startFile").style.filter = "brightness(50%)";
};

document.getElementById("about-me-x").onclick = function() {
  document.querySelector(".about-me").style.display = "none";
  document.querySelector(".about-me").style.visibility = "hidden";
  document.querySelector(".startFile").style.filter = "brightness(100%)";
};

document.getElementById("folder").onclick = function() {
  document.querySelector(".projects").style.display = "block";
  document.querySelector(".projects").style.visibility = "visible";
  document.querySelector(".startFolder").style.filter = "brightness(50%)";
};

document.getElementById("projects-x").onclick = function() {
  document.querySelector(".projects").style.display = "none";
  document.querySelector(".projects").style.visibility = "hidden";
  document.querySelector(".startFolder").style.filter = "brightness(100%)";
};

document.getElementById("email").onclick = function() {
  document.querySelector(".email-view").style.display = "block";
  document.querySelector(".email-view").style.visibility = "visible";
  document.querySelector(".startEmail").style.filter = "brightness(50%)";
};

document.getElementById("email-x").onclick = function() {
  document.querySelector(".email-view").style.display = "none";
  document.querySelector(".email-view").style.visibility = "hidden";
  document.querySelector(".startEmail").style.filter = "brightness(100%)";
};

document.getElementById("gamestore").onclick = function() {
  document.querySelector(".gamestore-img").style.display = "block";
  document.querySelector(".gamestore-img").style.visibility = "visible";
};

document.getElementById("game-x").onclick = function() {
  document.querySelector(".gamestore-img").style.display = "none";
  document.querySelector(".gamestore-img").style.visibility = "hidden";
};

document.getElementById("bookstore").onclick = function() {
  document.querySelector(".bookstore-img").style.display = "block";
  document.querySelector(".bookstore-img").style.visibility = "visible";
};

document.getElementById("book-x").onclick = function() {
  document.querySelector(".bookstore-img").style.display = "none";
  document.querySelector(".bookstore-img").style.visibility = "hidden";
};

document.getElementById("gitlet").onclick = function() {
  document.querySelector(".gitlet-img").style.display = "block";
  document.querySelector(".gitlet-img").style.visibility = "visible";
};

document.getElementById("gitlet-x").onclick = function() {
  document.querySelector(".gitlet-img").style.display = "none";
  document.querySelector(".gitlet-img").style.visibility = "hidden";
};

document.getElementById("jump61").onclick = function() {
  document.querySelector(".jump61-img").style.display = "block";
  document.querySelector(".jump61-img").style.visibility = "visible";
};

document.getElementById("jump-x").onclick = function() {
  document.querySelector(".jump61-img").style.display = "none";
  document.querySelector(".jump61-img").style.visibility = "hidden";
};

document.getElementById("enigma").onclick = function() {
  document.querySelector(".enigma-img").style.display = "block";
  document.querySelector(".enigma-img").style.visibility = "visible";
};

document.getElementById("enigma-x").onclick = function() {
  document.querySelector(".enigma-img").style.display = "none";
  document.querySelector(".enigma-img").style.visibility = "hidden";
};

document.getElementById("cs61c").onclick = function() {
  document.querySelector(".cpu-img").style.display = "block";
  document.querySelector(".cpu-img").style.visibility = "visible";
};

document.getElementById("cpu-x").onclick = function() {
  document.querySelector(".cpu-img").style.display = "none";
  document.querySelector(".cpu-img").style.visibility = "hidden";
};

document.getElementById("skills").onclick = function() {
  document.querySelector(".web").style.display = "block";
  document.querySelector(".web").style.visibility = "visible";
  document.querySelector(".startExplorer").style.filter = "brightness(50%)";
};

document.getElementById("web-x").onclick = function() {
  document.querySelector(".web").style.display = "none";
  document.querySelector(".web").style.visibility = "hidden";
  document.querySelector(".startExplorer").style.filter = "brightness(100%)";
};

document.getElementById("note-x").onclick = function() {
  document.querySelector(".sticky-note").style.display = "none";
  document.querySelector(".sticky-note").style.visibility = "hidden";
  document.querySelector(".startNotepad").style.filter = "brightness(100%)";
};

/* ************* Reload On Click Functionality ************* */

const homeDiv = document.getElementById("home");

homeDiv.addEventListener("click", function() {
  location.reload();
});
