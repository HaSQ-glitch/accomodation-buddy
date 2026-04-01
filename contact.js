const bookingForm = document.getElementById('bookingForm');
const bookingMessage = document.getElementById('bookingMessage');

bookingForm.addEventListener('submit', function(e){
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const room = document.getElementById('room').value;
    bookingMessage.textContent = `Thank you ${name}! Your booking for ${room} is confirmed.`;
    bookingForm.reset();
});
