const name = localStorage.getItem("name");
const room = localStorage.getItem("room");

const details = document.getElementById("details");
const status = document.getElementById("status");
const payBtn = document.getElementById("payBtn");

// Show booking info
details.textContent = `Booking for ${name} (${room})`;

payBtn.addEventListener("click", () => {
    status.textContent = "⏳ Processing payment...";

    setTimeout(() => {
        status.textContent = "✅ Payment Successful! Booking Confirmed.";

        // Optional: clear storage
        localStorage.clear();
    }, 2000);
});
