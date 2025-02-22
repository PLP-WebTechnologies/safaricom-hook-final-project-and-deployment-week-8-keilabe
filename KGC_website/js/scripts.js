/*!
* Start Bootstrap - Creative v7.0.7 (https://startbootstrap.com/theme/creative)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Activate SimpleLightbox plugin for portfolio items
    new SimpleLightbox({
        elements: '#portfolio a.portfolio-box'
    });

});

document.querySelectorAll(".accordion-btn").forEach(button => {
    button.addEventListener("click", function () {
        const accordionItem = this.parentElement;
        accordionItem.classList.toggle("active");
    });
});

function openModal(id) {
    document.getElementById(id).style.display = "flex"; // Show modal
}

function closeModal(id) {
    document.getElementById(id).style.display = "none"; // Hide modal
}

// Close modal when clicking outside content
window.onclick = function(event) {
    let modals = document.querySelectorAll(".modal");
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
};

function filterSermons(category) {
    let sermons = document.querySelectorAll(".sermon-card");

    sermons.forEach(sermon => {
        if (category === "all" || sermon.getAttribute("data-category") === category) {
            sermon.style.display = "block";
        } else {
            sermon.style.display = "none";
        }
    });
}

const events = [
    {
        title: "Sunday Service",
        date: "2025-02-23",
        description: "Join us for our Sunday worship service.",
        category: "service"
    },
    {
        title: "Tuesday Teaching Service",
        date: "2025-02-25",
        description: "Deepen your understanding of scripture.",
        category: "Service"
    },
    {
        title: "Thursday Communion and Warfare Service",
        date: "2025-02-27",
        description: "Come worship, war and win!",
        category: "Service"
    },
    {
        title: "Men's Workshop",
        date: "2025-03-09",
        description: "A men's hangout",
        category: "workshop"
    },
];

// Display events in a basic calendar format
function loadCalendar() {
    const calendarDiv = document.getElementById("calendar");
    calendarDiv.innerHTML = "";
    
    events.forEach(event => {
        const eventElement = document.createElement("div");
        eventElement.className = `event ${event.category}`;
        eventElement.innerHTML = `<strong>${event.title}</strong> - ${event.date}`;
        eventElement.onclick = () => openEventModal(event);
        calendarDiv.appendChild(eventElement);
    });
}

// Open event details modal
function openEventModal(event) {
    document.getElementById("eventTitle").textContent = event.title;
    document.getElementById("eventDate").textContent = `📅 ${event.date}`;
    document.getElementById("eventDescription").textContent = event.description;

    // Set iCal link
    const iCalLink = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${event.date.replace(/-/g, '')}/${event.date.replace(/-/g, '')}`;
    document.getElementById("addToCalendar").href = iCalLink;

    document.getElementById("eventModal").style.display = "flex";
}

// Close event modal
function closeEventModal() {
    document.getElementById("eventModal").style.display = "none";
}

// Open RSVP form modal
function openRSVPForm() {
    document.getElementById("rsvpEventTitle").textContent = document.getElementById("eventTitle").textContent;
    document.getElementById("rsvpModal").style.display = "flex";
}

// Close RSVP form modal
function closeRSVPForm() {
    document.getElementById("rsvpModal").style.display = "none";
}

// Handle RSVP form submission
document.getElementById("rsvpForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("RSVP submitted successfully!");
    closeRSVPForm();
});

// Initialize calendar on page load
window.onload = loadCalendar;
