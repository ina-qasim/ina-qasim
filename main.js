
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    const errorMessage = document.getElementById('error-message');
  
    form.addEventListener('submit', function(event) {
      let error = '';
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
  
      if (!email.includes('@')) {
        error += 'Please enter a valid email address.';
      }
  
      if (password.length < 8) {
        error += 'Password must be at least 8 characters long.<br>';
      }

   
  
      if (error !== '') {
        event.preventDefault(); // Prevent form submission
        errorMessage.innerHTML = error;
      }
    });
  });


  // contact


  // document.getElementById('myForm').addEventListener('submit', function(event) {
  //   event.preventDefault();
   
  //   let fname = document.getElementById('fname').value;
  //   let lname = document.getElementById('lname').value;
  //   let email = document.getElementById('email').value;
  //   let password = document.getElementById('password').value;
  //   let confirmPassword = document.getElementById('confirmPassword').value;
  //   let terms = document.getElementById('terms').checked;
   
  //   if(fname === "" || lname === "" || email === "" || password === "" || confirmPassword === "" || !terms) {
  //      alert('Please fill in all fields and accept the terms.');
  //   } else if(password !== confirmPassword) {
  //      alert('Passwords do not match. Please try again.');
  //   } else {
  //      alert('Form submitted successfully!');
  //   }
  //  });

// scripts.js



// about js starts here

function getButtonId() {
  var buttonId = document.getElementById("myButton").id;
  document.getElementById("display").innerHTML = `I;m Web designer and i design multple
   designe like game 
  bhkuysgabhnm,bdtfc yvhnvy
  bvhbnxrb6ytfhgvcrdtb
  xebytfhgvthgjnhfbcd6xrghjnmjm
  xebgyvjnhbyjhmbyfgvnjhmyujhmbv
  tvserfgbgjnhyugnhjkmunk,
  drbgtjnhyuhfdnryjnhyujkhntfcv
  gjhbnhjkmbn
  rdtcfgvugjhmvbturcdfvjhmbtghvbyi
  hkjvbghbng bjhbvjhbn
  dfcgvfgcvfyghvutgyvtfgchvfghv
  bughvnbghv   ` + buttonId;
}

