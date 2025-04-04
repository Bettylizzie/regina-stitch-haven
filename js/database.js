// Simple database simulation using localStorage
const database = {
    // Initialize database
    init: function() {
        if (!localStorage.getItem('contacts')) {
            localStorage.setItem('contacts', JSON.stringify([]));
        }
        
        if (!localStorage.getItem('appointments')) {
            localStorage.setItem('appointments', JSON.stringify([]));
        }
        
        if (!localStorage.getItem('classRegistrations')) {
            localStorage.setItem('classRegistrations', JSON.stringify([]));
        }
    },
    
    // Save contact form data
    saveContactForm: function(data) {
        const contacts = JSON.parse(localStorage.getItem('contacts'));
        contacts.push({
            ...data,
            date: new Date().toISOString()
        });
        localStorage.setItem('contacts', JSON.stringify(contacts));
    },
    
    // Save appointment
    saveAppointment: function(data) {
        const appointments = JSON.parse(localStorage.getItem('appointments'));
        appointments.push({
            ...data,
            date: new Date().toISOString()
        });
        localStorage.setItem('appointments', JSON.stringify(appointments));
    },
    
    // Save class registration
    saveClassRegistration: function(data) {
        const registrations = JSON.parse(localStorage.getItem('classRegistrations'));
        registrations.push({
            ...data,
            date: new Date().toISOString()
        });
        localStorage.setItem('classRegistrations', JSON.stringify(registrations));
    },
    
    // Get all contacts
    getContacts: function() {
        return JSON.parse(localStorage.getItem('contacts'));
    },
    
    // Get all appointments
    getAppointments: function() {
        return JSON.parse(localStorage.getItem('appointments'));
    },
    
    // Get all class registrations
    getClassRegistrations: function() {
        return JSON.parse(localStorage.getItem('classRegistrations'));
    }
};

// Initialize database when the page loads
database.init();

// Make database functions available globally
window.saveContactForm = database.saveContactForm;
window.saveAppointment = database.saveAppointment;
window.saveClassRegistration = database.saveClassRegistration;