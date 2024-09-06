// form-validation.js
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        const eventName = document.getElementById('event-name').value;
        const eventDate = document.getElementById('event-date').value;
        const eventLocation = document.getElementById('event-location').value;
        const eventDescription = document.getElementById('event-description').value;

        if (!eventName || !eventDate || !eventLocation || !eventDescription) {
            event.preventDefault();
            alert('Please fill in all fields before submitting the form.');
        } else {
            alert('Event created successfully!');
        }
    });
});
