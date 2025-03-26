document.addEventListener('DOMContentLoaded', () => {
    const menuContainer = document.getElementById('menu-container');
    const searchBar = document.getElementById('search-bar');
    const searchIcon = document.querySelector('.search-icon');
    const searchContainer = document.querySelector('.search-container');

    // Menu collection - embedded directly in JavaScript
    const menuData = {
        "menu": [
            {
                "id": 1,
                "name": "Pizza",
                "description": "",
                "price": 12.99,
                "category": "Menu",
                "type": "Vegetarian",
                "image": "./images/pizza mimi.jpg"
            },
            {
                "id": 2,
                "name": "Pasta",
                "description": "",
                "price": 14.99,
                "category": "Menu",
                "type": "Non-Vegetarian",
                "image": "images/pasta mimi.jpg"
            },
            // Keep all your menu items here
            {
                "id": 24,
                "name": "Burger",
                "description": "",
                "price": 18.99,
                "category": "Menu",
                "type": "Non-Vegetarian",
                "image": "images/burger mimi.png"
            },
            {
                "id": 24,
                "name": "Nachos",
                "description": "",
                "price": 18.99,
                "category": "Menu",
                "type": "Non-Vegetarian",
                "image": "images/nachos mimi.jpg"
            }
        ]
    };

    // Toggle dark mode
    const checkbox = document.getElementById("checkbox");
    checkbox.addEventListener("change", () => {
        document.body.classList.toggle("dark");
    });

    // Render the menu
    function renderMenu(menuItems) {
        menuContainer.innerHTML = ''; // Clear the container

        // Group menu items by category
        const categories = {};
        menuItems.forEach(item => {
            if (!categories[item.category]) {
                categories[item.category] = [];
            }
            categories[item.category].push(item);
        });

        // Render each category
        for (const category in categories) {
            // Create category heading
            const categoryHeading = document.createElement('h2');
            categoryHeading.textContent = category;
            categoryHeading.classList.add('category-heading');
            menuContainer.appendChild(categoryHeading);

            // Create category section
            const categorySection = document.createElement('div');
            categorySection.classList.add('category-section');

            // Add items to category
            categories[category].forEach(item => {
                const menuItem = document.createElement('div');
                menuItem.classList.add('menu-item');
                menuItem.innerHTML = `
                    <img src="${item.image}" alt="${item.name}" class="menu-item-image">
                    <div class="menu-item-content">
                        <h3>${item.name}</h3>
                        <p>${item.description}</p>
                        
                    </div>
                `;
                categorySection.appendChild(menuItem);
            });

            menuContainer.appendChild(categorySection);
        }
    }

    // Filter menu items based on search query
    function filterMenu(query) {
        const filteredMenu = menuData.menu.filter(item => {
            const nameMatch = item.name.toLowerCase().includes(query.toLowerCase());
            const descriptionMatch = item.description.toLowerCase().includes(query.toLowerCase());
            const typeMatch = item.type.toLowerCase().includes(query.toLowerCase());
            const categoryMatch = item.category.toLowerCase().includes(query.toLowerCase());
            return nameMatch || descriptionMatch || typeMatch || categoryMatch;
        });

        renderMenu(filteredMenu);
    }

    // Event listener for the search bar
    searchBar.addEventListener('input', (e) => {
        const query = e.target.value;
        filterMenu(query);
    });

    // Toggle the visibility of the search bar when the search icon is clicked
    searchIcon.addEventListener('click', () => {
        if (searchBar.classList.contains('hidden')) {
            searchBar.classList.remove('hidden');
            searchBar.classList.add('visible');
            searchContainer.classList.remove('hidden-bar');
            searchBar.focus();
        } else {
            searchBar.classList.remove('visible');
            searchBar.classList.add('hidden');
            searchContainer.classList.add('hidden-bar');
        }
    });

    // Close the search bar when the user clicks outside of it
    document.addEventListener('click', (event) => {
        if (!event.target.closest('.search-container')) {
            searchBar.classList.remove('visible');
            searchBar.classList.add('hidden');
            searchContainer.classList.add('hidden-bar');
        }
    });

    // Function to initialize mobile navigation if needed
    function initMobileNavigation() {
        // Your mobile navigation code here if needed
    }

    // Initial render of the full menu
    renderMenu(menuData.menu);
    initMobileNavigation();
});