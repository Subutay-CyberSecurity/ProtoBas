// Function to fetch and display GitHub star count
async function updateStarCount() {
  try {
    const response = await fetch('https://api.github.com/repos/Subutay-cybersecurity/ProtoBas');
    const repoData = await response.json();
    const starCount = repoData.stargazers_count;
    document.getElementById('star-count').textContent = `⭐ ${starCount}`;
  } catch (error) {
    console.error('Error fetching star count:', error);
    document.getElementById('star-count').textContent = '⭐ --';
  }
}

// Theme toggle functionality
function setupThemeToggle() {
  // Create theme toggle button
  const themeToggle = document.createElement('button');
  themeToggle.className = 'theme-toggle';
  themeToggle.innerHTML = '🌙'; // Moon icon for dark mode
  themeToggle.setAttribute('aria-label', 'Toggle theme');
  document.body.appendChild(themeToggle);
  
  // Check for saved theme preference or respect OS preference
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeToggle.innerHTML = '☀️'; // Sun icon for light mode
  }
  
  themeToggle.addEventListener('click', function() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    
    if (currentTheme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
      themeToggle.innerHTML = '🌙';
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
      themeToggle.innerHTML = '☀️';
    }
  });
}

// Enhanced search functionality
function setupSearch() {
  const searchInput = document.getElementById('search-input');
  const protocolElements = document.querySelectorAll('.protocol');
  
  if (!searchInput) return; // Exit if search input doesn't exist
  
  // Store original display property for each protocol element
  protocolElements.forEach(protocol => {
    protocol.dataset.originalDisplay = 'flex';
  });
  
  searchInput.addEventListener('input', function() {
    const searchTerm = this.value.trim().toLowerCase();
    
    // If search is empty, show all protocols
    if (searchTerm === '') {
      protocolElements.forEach(protocol => {
        protocol.style.display = protocol.dataset.originalDisplay;
      });
      return;
    }
    
    // For each protocol, check if it matches the search term
    protocolElements.forEach(protocol => {
      const protocolNumber = protocol.querySelector('.number')?.textContent.toLowerCase() || '';
      const protocolAbbrev = protocol.querySelector('.abbreviation')?.textContent.toLowerCase() || '';
      const protocolName = protocol.querySelector('.name')?.textContent.toLowerCase() || '';
      const fullText = protocolNumber + ' ' + protocolAbbrev + ' ' + protocolName;
      
      if (fullText.includes(searchTerm)) {
        protocol.style.display = protocol.dataset.originalDisplay;
      } else {
        protocol.style.display = 'none';
      }
    });
  });
  
  // Add search on Enter key for better UX
  searchInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      // Trigger the search immediately when Enter is pressed
      const event = new Event('input');
      this.dispatchEvent(event);
    }
  });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
  setupThemeToggle();
  updateStarCount();
  setupSearch();
});