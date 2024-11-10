// Function to show selected page and hide others
function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
        if (page.id === pageId) {
            page.classList.add('active');
        }
    });
}

// Initialize the Summary Engagement Chart with animation
function initEngagementChart() {
    const ctx = document.getElementById('engagementChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
            datasets: [{
                label: 'Engagement',
                data: [300, 500, 400, 700, 800, 600, 900],
                borderColor: '#66ff66',  // Green
                backgroundColor: 'rgba(102, 255, 102, 0.2)',
                fill: true,
                tension: 0.4,
            }]
        },
        options: {
            responsive: true,
            animation: {
                duration: 1000,
                easing: 'easeInOutQuad'
            }
        }
    });
}

// Likes Bar Chart with animation
function initLikesChart() {
    const ctx = document.getElementById('likesChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
            datasets: [{
                label: 'Likes',
                data: [120, 150, 180, 200, 220],
                backgroundColor: '#79c6ff', // Blue
                borderRadius: 5,
            }]
        },
        options: {
            responsive: true,
            animation: {
                duration: 1000,
                easing: 'easeInOutQuad'
            }
        }
    });
}

// Comments Pie Chart with animation
function initCommentsChart() {
    const ctx = document.getElementById('commentsChart').getContext('2d');
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Positive', 'Neutral', 'Negative'],
            datasets: [{
                data: [60, 25, 15],
                backgroundColor: ['#66ff66', '#8be9fd', '#ff79c6'], // Green, Blue, Purple
            }]
        },
        options: {
            responsive: true,
            animation: {
                duration: 1000,
                easing: 'easeInOutQuad'
            }
        }
    });
}

// Views Line Chart with animation
function initViewsChart() {
    const ctx = document.getElementById('viewsChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
            datasets: [{
                label: 'Views',
                data: [1000, 1200, 1500, 1800, 2000],
                borderColor: '#ff79c6', // Purple
                backgroundColor: 'rgba(255, 121, 198, 0.2)',
                fill: true,
                tension: 0.4,
            }]
        },
        options: {
            responsive: true,
            animation: {
                duration: 1000,
                easing: 'easeInOutQuad'
            }
        }
    });
}

// Followers Pie Chart with animation
function initFollowersChart() {
    const ctx = document.getElementById('followersChart').getContext('2d');
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['North America', 'Europe', 'Asia', 'Others'],
            datasets: [{
                data: [40, 30, 20, 10],
                backgroundColor: ['#66ff66', '#79c6ff', '#ff79c6', '#8be9fd'], // Green, Blue, Purple, Light Blue
            }]
        },
        options: {
            responsive: true,
            animation: {
                duration: 1000,
                easing: 'easeInOutQuad'
            }
        }
    });
}

// Initialize all charts when the DOM is loaded
document.addEventListener("DOMContentLoaded", function() {
    initEngagementChart();
    initLikesChart();
    initCommentsChart();
    initViewsChart();
    initFollowersChart();
});

// Notification counter functionality
let notificationCount = 0;

function openNotifications() {
    notificationCount++;
    document.getElementById('notification-count').innerText = notificationCount;
    alert("You have " + notificationCount + " new notifications!");
}

// Profile modal functionality
function openProfile() {
    document.getElementById('profile-modal').style.display = "block";
}

function closeProfile() {
    document.getElementById('profile-modal').style.display = "none";
}

// Login modal functionality
function openLogin() {
    document.getElementById('login-modal').style.display = "block";
}

function closeLogin() {
    document.getElementById('login-modal').style.display = "none";
}

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username && password) {
        alert('Login successful!');
        document.getElementById('login-modal').style.display = "none";
        document.getElementById('user-name').innerText = username;
    } else {
        alert('Please enter both username and password.');
    }
}
