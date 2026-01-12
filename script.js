// Dashboard Application - Complete with All Features

// Data Storage
const dashboardData = {
    // Revenue data for different periods
    revenue: {
        week: [12000, 19000, 15000, 25000, 22000, 30000, 28000],
        month: [12000, 19000, 15000, 25000, 22000, 30000, 28000, 32000, 29000, 35000, 38000, 40000],
        quarter: [120000, 145000, 180000, 210000],
        year: [120000, 145000, 180000, 210000, 230000, 250000, 280000, 310000, 340000, 370000, 400000, 420000]
    },
    
    // Traffic sources data
    traffic: {
        week: { Organic: 35, Direct: 25, Social: 20, Email: 15, Referral: 5 },
        month: { Organic: 40, Direct: 30, Social: 15, Email: 10, Referral: 5 }
    },
    
    // Recent orders
    orders: [
        { id: 'ORD-7841', customer: { name: 'Sarah Johnson', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah' }, date: 'Jun 14, 2023', amount: 245.99, status: 'delivered' },
        { id: 'ORD-7840', customer: { name: 'Robert Davis', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Robert' }, date: 'Jun 14, 2023', amount: 1248.50, status: 'processing' },
        { id: 'ORD-7839', customer: { name: 'Emily Wilson', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emily' }, date: 'Jun 13, 2023', amount: 89.99, status: 'pending' },
        { id: 'ORD-7838', customer: { name: 'James Miller', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=James' }, date: 'Jun 13, 2023', amount: 549.00, status: 'delivered' },
        { id: 'ORD-7837', customer: { name: 'Lisa Brown', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa' }, date: 'Jun 12, 2023', amount: 324.75, status: 'cancelled' }
    ],
    
    // Top products
    products: [
        { name: 'MacBook Pro 16"', category: 'Electronics', price: 2399, sales: 142, revenue: 340658, rating: 4.5, icon: 'fa-laptop' },
        { name: 'Premium T-Shirt', category: 'Fashion', price: 29.99, sales: 845, revenue: 25328, rating: 4.0, icon: 'fa-tshirt' },
        { name: 'Professional Guide', category: 'Books', price: 49.99, sales: 312, revenue: 15597, rating: 5.0, icon: 'fa-book' },
        { name: 'Wireless Headphones', category: 'Electronics', price: 199.99, sales: 421, revenue: 84195, rating: 4.0, icon: 'fa-headphones' },
        { name: 'Smart Watch', category: 'Electronics', price: 349.99, sales: 198, revenue: 69298, rating: 4.5, icon: 'fa-watch' }
    ],
    
    // User activities
    activities: [
        { type: 'success', icon: 'fa-check-circle', title: 'Order #7841 Delivered', description: 'Order has been delivered to Sarah Johnson', time: '10 minutes ago' },
        { type: 'info', icon: 'fa-user-plus', title: 'New User Registered', description: 'Alex Turner has registered for an account', time: '45 minutes ago' },
        { type: 'warning', icon: 'fa-exclamation-triangle', title: 'Server Alert', description: 'High CPU usage detected on server-02', time: '2 hours ago' },
        { type: 'primary', icon: 'fa-shopping-cart', title: 'New Order Placed', description: 'Order #7842 placed by Emily Wilson', time: '3 hours ago' },
        { type: 'success', icon: 'fa-chart-line', title: 'Monthly Report Generated', description: 'May 2023 performance report is ready', time: '5 hours ago' }
    ],
    
    // Project progress
    projects: [
        { name: 'Website Redesign', progress: 85 },
        { name: 'Mobile App Development', progress: 62 },
        { name: 'Marketing Campaign', progress: 45 },
        { name: 'Customer Portal', progress: 92 }
    ],
    
    // Users data
    users: [
        { name: 'Michael Chen', email: 'michael@example.com', role: 'admin', status: 'active', lastActive: '2 minutes ago', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Michael' },
        { name: 'Sarah Johnson', email: 'sarah@example.com', role: 'editor', status: 'active', lastActive: '15 minutes ago', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah' },
        { name: 'Robert Davis', email: 'robert@example.com', role: 'viewer', status: 'active', lastActive: '1 hour ago', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Robert' },
        { name: 'Emily Wilson', email: 'emily@example.com', role: 'editor', status: 'inactive', lastActive: '2 days ago', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emily' },
        { name: 'James Miller', email: 'james@example.com', role: 'viewer', status: 'pending', lastActive: 'Never', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=James' }
    ],
    
    // Notifications
    notifications: [
        { id: 1, title: 'System Update Scheduled', message: 'Maintenance scheduled for June 18, 2:00 AM - 4:00 AM', time: '2 hours ago', read: false, icon: 'fa-bell' },
        { id: 2, title: 'New User Approval', message: 'John Smith is requesting access to the admin panel', time: '4 hours ago', read: false, icon: 'fa-user-check' },
        { id: 3, title: 'Weekly Report Ready', message: 'Your weekly performance report is now available', time: '1 day ago', read: true, icon: 'fa-chart-line' },
        { id: 4, title: 'Order Shipped', message: 'Order #7839 has been shipped to the customer', time: '2 days ago', read: true, icon: 'fa-shopping-cart' }
    ]
};

// Chart instances
let revenueChart = null;
let trafficChart = null;
let analyticsChart = null;
let demographicsChart = null;

// Initialize the dashboard
document.addEventListener('DOMContentLoaded', function() {
    initializeDashboard();
});

function initializeDashboard() {
    // Set current date
    updateCurrentDate();
    setCurrentYear();
    
    // Initialize all components
    initializeNavigation();
    initializeCharts();
    initializeDataTables();
    initializeNotifications();
    initializeEventListeners();
    
    // Load dashboard data
    loadDashboardData();
}

// Navigation and Page Switching
function initializeNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    const pageContents = document.querySelectorAll('.page-content');
    
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get target page
            const targetPage = this.getAttribute('data-page');
            
            // Update active states
            navItems.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
            
            // Hide all pages
            pageContents.forEach(page => page.classList.remove('active'));
            
            // Show target page
            const targetContent = document.getElementById(`${targetPage}-content`);
            if (targetContent) {
                targetContent.classList.add('active');
                
                // Update page title
                const pageTitle = document.getElementById('page-title');
                if (pageTitle) {
                    pageTitle.textContent = getPageTitle(targetPage);
                }
                
                // Load page-specific data
                loadPageData(targetPage);
            }
        });
    });
    
    // Initialize sidebar toggle
    const sidebarToggle = document.getElementById('sidebar-toggle');
    const sidebar = document.querySelector('.sidebar');
    
    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', function() {
            sidebar.classList.toggle('collapsed');
            // Update icon
            const icon = this.querySelector('i');
            if (sidebar.classList.contains('collapsed')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-indent');
            } else {
                icon.classList.remove('fa-indent');
                icon.classList.add('fa-bars');
            }
        });
    }
}

// Chart Initialization
function initializeCharts() {
    // Revenue Chart
    const revenueCtx = document.getElementById('revenueChart');
    if (revenueCtx) {
        revenueChart = new Chart(revenueCtx.getContext('2d'), {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
                datasets: [{
                    label: 'Revenue',
                    data: dashboardData.revenue.month,
                    borderColor: '#4361ee',
                    backgroundColor: 'rgba(67, 97, 238, 0.1)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4
                }]
            },
            options: getChartOptions('Revenue')
        });
    }
    
    // Traffic Chart
    const trafficCtx = document.getElementById('trafficChart');
    if (trafficCtx) {
        const trafficData = dashboardData.traffic.month;
        trafficChart = new Chart(trafficCtx.getContext('2d'), {
            type: 'doughnut',
            data: {
                labels: Object.keys(trafficData),
                datasets: [{
                    data: Object.values(trafficData),
                    backgroundColor: ['#4361ee', '#7209b7', '#4cc9f0', '#f9c74f', '#f72585']
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { position: 'bottom' }
                }
            }
        });
    }
}

// Data Tables Initialization
function initializeDataTables() {
    loadOrdersTable();
    loadProductsTable();
    loadActivities();
    loadProgress();
}

// Load Dashboard Data
function loadDashboardData() {
    // Update stats
    updateStats();
    
    // Load initial data
    loadOrdersTable();
    loadProductsTable();
    loadActivities();
    loadProgress();
}

// Update Statistics
function updateStats() {
    // In a real app, this would fetch from an API
    const stats = {
        revenue: 24580,
        users: 1248,
        conversion: 3.24,
        session: '4m 32s'
    };
    
    document.getElementById('total-revenue').textContent = stats.revenue.toLocaleString();
    document.getElementById('new-users').textContent = stats.users.toLocaleString();
    document.getElementById('conversion-rate').textContent = stats.conversion;
    document.getElementById('avg-session').textContent = stats.session;
}

// Load Orders Table
function loadOrdersTable() {
    const tbody = document.getElementById('orders-table-body');
    if (!tbody) return;
    
    tbody.innerHTML = dashboardData.orders.map(order => `
        <tr>
            <td>${order.id}</td>
            <td>
                <div class="customer-cell">
                    <img src="${order.customer.avatar}" alt="${order.customer.name}">
                    <span>${order.customer.name}</span>
                </div>
            </td>
            <td>${order.date}</td>
            <td>$${order.amount.toFixed(2)}</td>
            <td><span class="status-badge ${order.status}">${order.status.charAt(0).toUpperCase() + order.status.slice(1)}</span></td>
            <td>
                <button class="btn-icon view-order" data-id="${order.id}"><i class="fas fa-eye"></i></button>
                <button class="btn-icon edit-order" data-id="${order.id}"><i class="fas fa-edit"></i></button>
            </td>
        </tr>
    `).join('');
    
    // Add event listeners to order buttons
    document.querySelectorAll('.view-order').forEach(btn => {
        btn.addEventListener('click', function() {
            const orderId = this.getAttribute('data-id');
            alert(`Viewing order: ${orderId}`);
        });
    });
    
    document.querySelectorAll('.edit-order').forEach(btn => {
        btn.addEventListener('click', function() {
            const orderId = this.getAttribute('data-id');
            alert(`Editing order: ${orderId}`);
        });
    });
}

// Load Products Table
function loadProductsTable() {
    const tbody = document.getElementById('products-table-body');
    if (!tbody) return;
    
    tbody.innerHTML = dashboardData.products.map(product => `
        <tr>
            <td>
                <div class="product-cell">
                    <div class="product-icon">
                        <i class="fas ${product.icon}"></i>
                    </div>
                    <span>${product.name}</span>
                </div>
            </td>
            <td>${product.category}</td>
            <td>$${product.price.toFixed(2)}</td>
            <td>${product.sales}</td>
            <td>$${product.revenue.toLocaleString()}</td>
            <td>
                <div class="rating">
                    ${getRatingStars(product.rating)}
                    <span>${product.rating}</span>
                </div>
            </td>
        </tr>
    `).join('');
}

// Load Activities
function loadActivities() {
    const activityList = document.getElementById('activity-list');
    if (!activityList) return;
    
    activityList.innerHTML = dashboardData.activities.map(activity => `
        <div class="activity-item">
            <div class="activity-icon ${activity.type}">
                <i class="fas ${activity.icon}"></i>
            </div>
            <div class="activity-content">
                <h4>${activity.title}</h4>
                <p>${activity.description}</p>
                <span class="activity-time">${activity.time}</span>
            </div>
        </div>
    `).join('');
}

// Load Progress
function loadProgress() {
    const progressList = document.getElementById('progress-list');
    if (!progressList) return;
    
    // Calculate overall progress
    const totalProgress = dashboardData.projects.reduce((sum, project) => sum + project.progress, 0);
    const averageProgress = Math.round(totalProgress / dashboardData.projects.length);
    
    document.getElementById('overall-progress').textContent = `${averageProgress}% Complete`;
    
    progressList.innerHTML = dashboardData.projects.map(project => `
        <div class="progress-item">
            <div class="progress-info">
                <h4>${project.name}</h4>
                <span>${project.progress}%</span>
            </div>
            <div class="progress-bar">
                <div class="progress-fill" style="width: ${project.progress}%"></div>
            </div>
        </div>
    `).join('');
}

// Initialize Notifications
function initializeNotifications() {
    const notificationsBtn = document.getElementById('notifications-btn');
    const closeBtn = document.getElementById('close-notifications');
    const panel = document.getElementById('notifications-panel');
    const markAllReadBtn = document.getElementById('mark-all-read');
    
    if (notificationsBtn) {
        notificationsBtn.addEventListener('click', () => {
            panel.classList.add('open');
            loadNotifications();
        });
    }
    
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            panel.classList.remove('open');
        });
    }
    
    if (markAllReadBtn) {
        markAllReadBtn.addEventListener('click', markAllNotificationsAsRead);
    }
    
    // Update notification badge
    updateNotificationBadge();
}

function loadNotifications() {
    const notificationsList = document.getElementById('notifications-list');
    if (!notificationsList) return;
    
    const unreadCount = dashboardData.notifications.filter(n => !n.read).length;
    
    notificationsList.innerHTML = dashboardData.notifications.map(notification => `
        <div class="notification-item ${notification.read ? '' : 'unread'}" data-id="${notification.id}">
            <div class="notification-icon">
                <i class="fas ${notification.icon}"></i>
            </div>
            <div class="notification-content">
                <h4>${notification.title}</h4>
                <p>${notification.message}</p>
                <span class="notification-time">${notification.time}</span>
            </div>
        </div>
    `).join('');
    
    // Add click event to notifications
    document.querySelectorAll('.notification-item').forEach(item => {
        item.addEventListener('click', function() {
            const notificationId = parseInt(this.getAttribute('data-id'));
            markNotificationAsRead(notificationId);
            this.classList.remove('unread');
            updateNotificationBadge();
        });
    });
}

function markNotificationAsRead(id) {
    const notification = dashboardData.notifications.find(n => n.id === id);
    if (notification) {
        notification.read = true;
    }
}

function markAllNotificationsAsRead() {
    dashboardData.notifications.forEach(notification => {
        notification.read = true;
    });
    loadNotifications();
    updateNotificationBadge();
}

function updateNotificationBadge() {
    const unreadCount = dashboardData.notifications.filter(n => !n.read).length;
    const badge = document.getElementById('notification-count');
    if (badge) {
        if (unreadCount > 0) {
            badge.textContent = unreadCount > 9 ? '9+' : unreadCount;
            badge.style.display = 'flex';
        } else {
            badge.style.display = 'none';
        }
    }
}

// Initialize Event Listeners
function initializeEventListeners() {
    // Theme Toggle
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            document.body.classList.toggle('dark-theme');
            localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light');
            
            if (document.body.classList.contains('dark-theme')) {
                themeIcon.classList.remove('fa-moon');
                themeIcon.classList.add('fa-sun');
            } else {
                themeIcon.classList.remove('fa-sun');
                themeIcon.classList.add('fa-moon');
            }
        });
        
        // Check saved theme
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-theme');
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        }
    }
    
    // Chart Period Selectors
    const revenuePeriod = document.getElementById('revenue-period');
    const trafficPeriod = document.getElementById('traffic-period');
    
    if (revenuePeriod) {
        revenuePeriod.addEventListener('change', function() {
            updateRevenueChart(this.value);
        });
    }
    
    if (trafficPeriod) {
        trafficPeriod.addEventListener('change', function() {
            updateTrafficChart(this.value);
        });
    }
    
    // Export Products Button
    const exportBtn = document.getElementById('export-products');
    if (exportBtn) {
        exportBtn.addEventListener('click', exportProducts);
    }
    
    // View All Activity Button
    const viewAllActivityBtn = document.getElementById('view-all-activity');
    if (viewAllActivityBtn) {
        viewAllActivityBtn.addEventListener('click', function() {
            alert('Showing all activities...');
        });
    }
    
    // Upgrade Button
    const upgradeBtn = document.getElementById('upgrade-btn');
    if (upgradeBtn) {
        upgradeBtn.addEventListener('click', function() {
            alert('Redirecting to upgrade page...');
        });
    }
    
    // Search Input
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            performSearch(this.value);
        });
    }
    
    // User Dropdown Actions
    document.getElementById('profile-btn')?.addEventListener('click', function(e) {
        e.preventDefault();
        alert('Opening profile...');
    });
    
    document.getElementById('logout-btn')?.addEventListener('click', function(e) {
        e.preventDefault();
        if (confirm('Are you sure you want to logout?')) {
            alert('Logging out...');
        }
    });
    
    // Footer Links
    document.getElementById('privacy-link')?.addEventListener('click', function(e) {
        e.preventDefault();
        alert('Opening Privacy Policy...');
    });
    
    document.getElementById('terms-link')?.addEventListener('click', function(e) {
        e.preventDefault();
        alert('Opening Terms of Service...');
    });
    
    document.getElementById('help-link')?.addEventListener('click', function(e) {
        e.preventDefault();
        alert('Opening Help Center...');
    });
    
    document.getElementById('contact-link')?.addEventListener('click', function(e) {
        e.preventDefault();
        alert('Opening Contact Form...');
    });
}

// Chart Updates
function updateRevenueChart(period) {
    if (!revenueChart) return;
    
    const labels = getChartLabels(period);
    const data = dashboardData.revenue[period] || dashboardData.revenue.month;
    
    revenueChart.data.labels = labels;
    revenueChart.data.datasets[0].data = data;
    revenueChart.update();
}

function updateTrafficChart(period) {
    if (!trafficChart) return;
    
    const trafficData = dashboardData.traffic[period] || dashboardData.traffic.month;
    
    trafficChart.data.labels = Object.keys(trafficData);
    trafficChart.data.datasets[0].data = Object.values(trafficData);
    trafficChart.update();
}

// Utility Functions
function getChartLabels(period) {
    switch(period) {
        case 'week': return ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
        case 'month': return ['Week 1', 'Week 2', 'Week 3', 'Week 4'];
        case 'quarter': return ['Q1', 'Q2', 'Q3', 'Q4'];
        case 'year': return ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        default: return ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];
    }
}

function getChartOptions(title) {
    return {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        return `$${context.parsed.y.toLocaleString()}`;
                    }
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                grid: { drawBorder: false },
                ticks: {
                    callback: function(value) {
                        return '$' + value.toLocaleString();
                    }
                }
            },
            x: {
                grid: { display: false }
            }
        }
    };
}

function getRatingStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    
    let stars = '';
    for (let i = 0; i < fullStars; i++) stars += '<i class="fas fa-star"></i>';
    if (hasHalfStar) stars += '<i class="fas fa-star-half-alt"></i>';
    for (let i = 0; i < emptyStars; i++) stars += '<i class="far fa-star"></i>';
    
    return stars;
}

function getPageTitle(page) {
    const titles = {
        dashboard: 'Dashboard Overview',
        analytics: 'Analytics',
        users: 'User Management',
        orders: 'Order Management',
        products: 'Product Management',
        finance: 'Financial Reports',
        settings: 'Settings',
        help: 'Help Center'
    };
    return titles[page] || 'Dashboard';
}

function updateCurrentDate() {
    const now = new Date();
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    const dateString = now.toLocaleDateString('en-US', options);
    document.getElementById('current-date').textContent = dateString;
}

function setCurrentYear() {
    document.getElementById('current-year').textContent = new Date().getFullYear();
}

function performSearch(query) {
    if (query.length === 0) return;
    console.log('Searching for:', query);
    // In a real app, this would filter data or make an API call
}

function exportProducts() {
    // Create CSV content
    let csvContent = "data:text/csv;charset=utf-8,";
    csvContent += "Product,Category,Price,Sales,Revenue,Rating\n";
    
    dashboardData.products.forEach(product => {
        csvContent += `${product.name},${product.category},${product.price},${product.sales},${product.revenue},${product.rating}\n`;
    });
    
    // Create download link
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "products_export.csv");
    document.body.appendChild(link);
    
    // Trigger download
    link.click();
    document.body.removeChild(link);
    
    alert('Products exported successfully!');
}

// Load Page-Specific Data
function loadPageData(page) {
    switch(page) {
        case 'users':
            loadUsersPage();
            break;
        case 'analytics':
            loadAnalyticsPage();
            break;
        case 'products':
            loadProductsPage();
            break;
    }
}

function loadUsersPage() {
    const tbody = document.getElementById('users-table-body');
    if (!tbody) return;
    
    tbody.innerHTML = dashboardData.users.map(user => `
        <tr>
            <td>
                <div class="customer-cell">
                    <img src="${user.avatar}" alt="${user.name}">
                    <span>${user.name}</span>
                </div>
            </td>
            <td>${user.email}</td>
            <td><span class="status-badge ${user.role}">${user.role.charAt(0).toUpperCase() + user.role.slice(1)}</span></td>
            <td><span class="status-badge ${user.status}">${user.status.charAt(0).toUpperCase() + user.status.slice(1)}</span></td>
            <td>${user.lastActive}</td>
            <td>
                <button class="btn-icon edit-user" data-email="${user.email}"><i class="fas fa-edit"></i></button>
                <button class="btn-icon delete-user" data-email="${user.email}"><i class="fas fa-trash"></i></button>
            </td>
        </tr>
    `).join('');
    
    // Add event listeners
    document.querySelectorAll('.edit-user').forEach(btn => {
        btn.addEventListener('click', function() {
            const email = this.getAttribute('data-email');
            alert(`Editing user: ${email}`);
        });
    });
    
    document.querySelectorAll('.delete-user').forEach(btn => {
        btn.addEventListener('click', function() {
            const email = this.getAttribute('data-email');
            if (confirm(`Are you sure you want to delete ${email}?`)) {
                alert(`Deleting user: ${email}`);
            }
        });
    });
}

function loadAnalyticsPage() {
    // Initialize analytics charts if they don't exist
    const analyticsCtx = document.getElementById('analyticsChart');
    if (analyticsCtx && !analyticsChart) {
        analyticsChart = new Chart(analyticsCtx.getContext('2d'), {
            type: 'bar',
            data: {
                labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                datasets: [
                    {
                        label: 'Visitors',
                        data: [1200, 1900, 1500, 2500, 2200, 3000, 2800],
                        backgroundColor: '#4361ee'
                    },
                    {
                        label: 'Conversions',
                        data: [120, 190, 150, 250, 220, 300, 280],
                        backgroundColor: '#4cc9f0'
                    }
                ]
            },
            options: getChartOptions('Analytics')
        });
    }
    
    // Initialize demographics chart
    const demographicsCtx = document.getElementById('demographicsChart');
    if (demographicsCtx && !demographicsChart) {
        demographicsChart = new Chart(demographicsCtx.getContext('2d'), {
            type: 'pie',
            data: {
                labels: ['18-24', '25-34', '35-44', '45-54', '55+'],
                datasets: [{
                    data: [25, 35, 20, 15, 5],
                    backgroundColor: ['#4361ee', '#7209b7', '#4cc9f0', '#f9c74f', '#f72585']
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: { position: 'bottom' }
                }
            }
        });
    }
    
    // Load funnel data
    const funnelContainer = document.getElementById('funnel-container');
    if (funnelContainer) {
        const funnelData = [
            { step: 'Visitors', value: 10000 },
            { step: 'Signups', value: 2500 },
            { step: 'Active Users', value: 1200 },
            { step: 'Paying Customers', value: 300 },
            { step: 'VIP Members', value: 75 }
        ];
        
        funnelContainer.innerHTML = funnelData.map(item => `
            <div class="funnel-step">
                <h4>${item.step}</h4>
                <p>${item.value.toLocaleString()} users</p>
            </div>
        `).join('');
    }
}

function loadProductsPage() {
    const productsGrid = document.querySelector('.products-grid');
    if (!productsGrid) return;
    
    productsGrid.innerHTML = dashboardData.products.map(product => `
        <div class="product-card">
            <div class="product-icon" style="background: rgba(67, 97, 238, 0.1); padding: 20px; text-align: center;">
                <i class="fas ${product.icon}" style="font-size: 48px; color: #4361ee;"></i>
            </div>
            <div class="product-card-content">
                <h4>${product.name}</h4>
                <div class="product-price">$${product.price.toFixed(2)}</div>
                <div class="product-stats">
                    <span>Sales: ${product.sales}</span>
                    <span>Revenue: $${product.revenue.toLocaleString()}</span>
                </div>
                <div class="rating" style="margin-top: 10px;">
                    ${getRatingStars(product.rating)}
                    <span>${product.rating}</span>
                </div>
                <div style="margin-top: 15px; display: flex; gap: 10px;">
                    <button class="btn btn-primary" style="flex: 1;">Edit</button>
                    <button class="btn btn-secondary" style="flex: 1;">View</button>
                </div>
            </div>
        </div>
    `).join('');
}

// Auto-update date every minute
setInterval(updateCurrentDate, 60000);