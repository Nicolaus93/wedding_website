function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const sidebarContent = document.getElementById('sidebarContent');
    const toggleButton = document.getElementById('sidebarToggle');

    if (sidebar.style.width === '50px' || !sidebar.style.width) {
        sidebar.style.width = '250px';
        sidebarContent.style.display = 'block'; // Show content
        toggleButton.textContent = '<'; // Set text to '<' when expanded
    } else {
        sidebar.style.width = '50px';
        sidebarContent.style.display = 'none'; // Hide content
        toggleButton.textContent = '>'; // Set text to '>' when collapsed
    }
}

document.getElementById('sidebarToggle').addEventListener('click', toggleSidebar);
