// Function to simulate a login
function handleLogin(event) {
    event.preventDefault();
    
    // In a real app, you'd check a database here
    // For now, we'll just redirect to your dashboard
    console.log("Login attempted...");
    window.location.href = "dashboard.html";
}

// Simple dashboard greeting logic
document.addEventListener("DOMContentLoaded", () => {
    const welcomeMsg = document.getElementById("welcome-user");
    if (welcomeMsg) {
        welcomeMsg.innerText = "Welcome back to Marutham Dashboard!";
    }
});