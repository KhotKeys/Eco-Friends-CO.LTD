// Swiper js
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  // grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


// Nav open close
const body = document.querySelector('body'),
      navMenu = body.querySelector('.menu-content'),
      navOpenBtn = body.querySelector('.navOpen-btn'),
      navCloseBtn = navMenu.querySelector('.navClose-btn');

if(navMenu && navOpenBtn){
  navOpenBtn.addEventListener("click", () =>{
    navMenu.classList.add("open");
    body.style.overflowY = "hidden";
  })
}

if(navMenu && navCloseBtn){
  navCloseBtn.addEventListener("click", () =>{
    navMenu.classList.remove("open");
    body.style.overflowY = "scroll";
  })
}

// Change header bg color
window.addEventListener("scroll", () => {
  const scrollY = window.pageYOffset;

  if(scrollY > 5){
    document.querySelector("header").classList.add("header-active");
  }else{
    document.querySelector("header").classList.remove("header-active");
  }

  // Scroll up button
  const scrollUpBtn = document.querySelector('.scrollUp-btn');

  if(scrollY > 250){
    scrollUpBtn.classList.add("scrollUpBtn-active");
  }else{
    scrollUpBtn.classList.remove("scrollUpBtn-active");
  }
  
  
  // Nav link indicator

  const sections = document.querySelectorAll('section[id]');
  sections.forEach(section =>{
    const sectionHeight = section.offsetHeight,
          sectionTop = section.offsetTop - 100;

          let navId = document.querySelector(`.menu-content a[href='#${section.id}']`);
          if(scrollY > sectionTop && scrollY <=  sectionTop + sectionHeight){
            navId.classList.add("active-navlink");           
          }else{
            navId.classList.remove("active-navlink");     
          }
          
          navId.addEventListener("click", () => {
            navMenu.classList.remove("open");
            body.style.overflowY = "scroll";
          })
  })
})  
  
  
  // Scroll Reveal Animation
  const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
  })
  
  sr.reveal(`.section-title, .section-subtitle, .section-description, .brand-image, .tesitmonial, .newsletter 
.logo-content, .newsletter-inputBox, .newsletter-mediaIcon, .footer-content, .footer-links`, {interval:100,})

sr.reveal(`.about-imageContent, .menu-items`, {origin: 'left'})
sr.reveal(`.about-details, .time-table`, {origin: 'right'})




// Add event listener to the image container
document.querySelector('.image-container-2023').addEventListener('click', function() {
  // Toggle the flipped class on the image
  document.querySelector('.image-2023').classList.toggle('flipped');
});



// Add event listener to the image cards
document.querySelectorAll('.image-card').forEach((card) => {
  card.addEventListener('touchstart', () => {
    // Add a class to the card to trigger the animation
    card.classList.add('animate');
  });

  card.addEventListener('touchend', () => {
    // Remove the class to reset the animation
    card.classList.remove('animate');
  });
});


// Add event listener to window to listen for resize events
window.addEventListener('resize', function() {
  // Check if window width is less than 768px
  if (window.innerWidth < 768) {
    // Change grid template columns to 2
    document.querySelector('.service-grid').style.gridTemplateColumns = 'repeat(2, 1fr)';
  } else {
    // Change grid template columns to 4
    document.querySelector('.service-grid').style.gridTemplateColumns = 'repeat(4, 1fr)';
  }
});

// Call event listener function once to set initial grid template columns
window.dispatchEvent(new Event('resize'));


// contact form

// Add event listener to sign up form submit
document.getElementById('sign-up-form').addEventListener('submit', function(event) {
  event.preventDefault();
  // Get form data
  var formData = new FormData(this);
  // Send form data to server
  fetch('/sign-up', {
    method: 'POST',
    body: formData
  })
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
    // Show success message
    alert('Account created successfully!');
  })
  .catch(function(error) {
    console.error(error);
    // Show error message
    alert('Error creating account!');
  });
});

// Add event listener to sign up form submit
document.getElementById('sign-up-form').addEventListener('submit', function(event) {
  event.preventDefault();
  // Get form data
  var formData = new FormData(this);
  // Send form data to server
  fetch('/sign-up', {
    method: 'POST',
    body: formData
  })
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
    // Show success message
    alert('Account created successfully!');
    // Make sign in form visible
    document.querySelector('.sign-in-section').style.display = 'block';
    // Hide sign up form
    document.querySelector('.sign-up-section').style.display = 'none';
  })
  .catch(function(error) {
    console.error(error);
    // Show error message
    alert('Error creating account!');
  });
});

// Add event listener to sign in form submit
document.getElementById('sign-in-form').addEventListener('submit', function(event) {
  event.preventDefault();
  // Get form data
  var formData = new FormData(this);
  // Send form data to server
  fetch('/sign-in', {
    method: 'POST',
    body: formData
  })
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
    // Show success message
    alert('Logged in successfully!');
  })
  .catch(function(error) {
    console.error(error);
    // Show error message
    alert('Error logging in!');
  });
});



// Donation form

// Add event listener to donation form submit
document.getElementById('donation-form').addEventListener('submit'), function(event) {
  event.preventDefault();
  // Get form data
  var formData = new FormData(this);
  // Send form data to server
  fetch('/donate', {
    method: 'POST',
    body: formData
  })
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
    // Show success message
    alert('Donation successful!');
  })
  .catch(function(error){
    console.error(error);
  }); 
}


