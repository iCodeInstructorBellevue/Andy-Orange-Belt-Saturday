window.onload = function() {
  setTimeout(function() {
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('popup').style.display = 'block';
  }, 3000); // 3000 milliseconds = 3 seconds
};
document.addEventListener("mouseleave", function(e) {
  if (e.clientY < 0) {
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('popup').style.display = 'block';
  }
});
document.getElementById('closeBtn').onclick = function() {
  document.getElementById('overlay').style.display = 'none';
  document.getElementById('popup').style.display = 'none';
};

window.addEventListener("load", function() {
    // Set how long the "fake" load should last (3000ms = 3 seconds)
    setTimeout(function() {
        document.getElementById("fake-loader").style.display = "none";
        document.getElementById("main-content").style.display = "block";
    }, 3000);
});

const faceio = new faceIO("your-public-app-id");

async function enrollNewUser() {
  try {
    let response = await faceio.enroll({
      locale: "auto", 
      payload: { email: "user@example.com" }
    });
    alert(`Success! Facial ID: ${response.facialId}`);
  } catch (err) {
    console.error(err);
  }
}

async function authenticateUser() {
  try {
    let response = await faceio.authenticate({ locale: "auto" });
    alert(`Authenticated! Welcome back, User ${response.facialId}`);
  } catch (err) {
    console.error(err);
  }
}

const video = document.getElementById('video');

function startVideo() {
  navigator.mediaDevices.getUserMedia({ video: {} })
    .then(stream => video.srcObject = stream)
    .catch(err => console.error(err));
}

const box = document.querySelector('#your-element');
box.addEventListener('click', () => {
  box.requestPointerLock(); // Locks the cursor to this element
});

inputElement.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
    e.preventDefault(); // Stops the blinking line from moving
  }
});
