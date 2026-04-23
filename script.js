document.getElementById("year").textContent = new Date().getFullYear();

// Contact form functionality
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    
    const subject = `Message from ${name} via Portfolio`;
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    
    const mailtoLink = `mailto:sadhamm1245@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailtoLink;
});