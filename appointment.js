document.addEventListener('DOMContentLoaded', () => {
    const appointmentForm = document.getElementById('appointmentForm');

    appointmentForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form data
        const formData = new FormData(appointmentForm);
        const appointmentData = Object.fromEntries(formData.entries());

        // In a real application, you would send this data to a server
        console.log('Appointment Data:', appointmentData);

        // Show success message
        alert('Thank you for scheduling an appointment. We will contact you shortly to confirm.');
        appointmentForm.reset();
    });

    // Set minimum date to today
    const dateInput = document.getElementById('date');
    const today = new Date().toISOString().split('T')[0];
    dateInput.min = today;
});