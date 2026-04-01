// Example: highlight booked rooms
document.querySelectorAll('.room').forEach(room => {
    if(room.dataset.status === "Booked"){
        room.style.opacity = 0.6;
    }
});
