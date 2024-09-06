// event-handler.js
document.addEventListener('DOMContentLoaded', () => {
    const addEventButton = document.getElementById('add-event-btn');
    const eventList = document.getElementById('event-list');

    addEventButton.addEventListener('click', () => {
        const newEvent = document.createElement('div');
        newEvent.classList.add('event-item');
        newEvent.innerHTML = '<p>New Event - Date: TBD</p>';
        eventList.appendChild(newEvent);
    });
});
