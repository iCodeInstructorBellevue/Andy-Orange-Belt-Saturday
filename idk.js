.popup-box {
  display: none;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid black;
  background: white;
  padding: 20px;
  z-index: 1000;
}

/* When the link is clicked, display the popup */
.popup-box:target {
  display: block;
}
