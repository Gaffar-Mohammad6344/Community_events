// dynamic-content.js
document.addEventListener('DOMContentLoaded', () => {
    const events = [
        { name: 'Community Cleanup', date: '2024-09-15', location: 'Local Park' },
        { name: 'Food Drive', date: '2024-09-20', location: 'Community Center' },
        { name: 'Health Fair', date: '2024-09-25', location: 'City Hall' },
    ];

    const eventList = document.getElementById('event-list');
    events.forEach(event => {
        const eventItem = document.createElement('div');
        eventItem.classList.add('event-item');
        eventItem.innerHTML = `<h3>${event.name}</h3><p>Date: ${event.date}</p><p>Location: ${event.location}</p>`;
        eventList.appendChild(eventItem);
    });
});
