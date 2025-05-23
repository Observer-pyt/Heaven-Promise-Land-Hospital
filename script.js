// Crazy Background Color Change
setInterval(() => {
    const colors = ['#FF6347', '#1E90FF', '#32CD32', '#FFD700',];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}, 1000);

// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Appointment Button Alert
document.querySelector('.appointment-btn').addEventListener('click', () => {
    alert('Redirecting to appointment page!');
});
// Handle Appointment Form Submission
document.getElementById('appointmentForm').addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Collect form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const date = document.getElementById('date').value;
    const reason = document.getElementById('reason').value;

    // Simulate sending data (replace with backend logic or API call)
    console.log("Appointment Details:");
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Phone: ${phone}`);
    console.log(`Date: ${date}`);
    console.log(`Reason: ${reason}`);

    // Display success message
    alert(`Appointment successfully booked for ${name} on ${date}!`);
    
    // Clear the form
    document.getElementById('appointmentForm').reset();
});
// Toggle Navbar on Mobile
document.querySelector('.hamburger').addEventListener('click', () => {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
});

