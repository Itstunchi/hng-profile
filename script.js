// Function to display the current time in UTC format
function updateUTC() {
    const utcTime = new Date().toUTCString();
    document.getElementById("currentTimeUTC").textContent = "Current Time (UTC): " + utcTime;
  }
  
  // Update UTC time every second
  setInterval(updateUTC, 1000);
  
  // Initial call to display time immediately
  updateUTC();
  