function updateDateTime() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    
    // Get current date and time
    const currentDate = now.toLocaleDateString('en-US', options);
    const currentTime = now.toLocaleTimeString('en-US');
    
    // Display date and time on the page
    document.getElementById('date-time').innerHTML = `<strong>Date:</strong> ${currentDate} <br> <strong>Time:</strong> ${currentTime}`;
  }

  // Update the date and time every second
  setInterval(updateDateTime, 1000);

  // Initial call to display immediately
  updateDateTime();