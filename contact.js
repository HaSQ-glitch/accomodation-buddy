const form = document.getElementById("bookingForm");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const room = document.getElementById("room").value;

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!email.match(emailPattern)) {
        alert("❌ Please enter a valid email");
        return;
    }

    if (room === "") {
        alert("❌ Please select a room");
        return;
    }

    // Save data (so payment page can use it)
    localStorage.setItem("name", name);
    localStorage.setItem("room", room);

    // Redirect to payment page
    window.location.href = "payment.html";
});
