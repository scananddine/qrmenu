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
                "type": "Vegetarian",
                "image": "images/pasta mimi.jpeg"
            },
            // Keep all your menu items here
            {
                "id": 24,
                "name": "Burger",
                "description": "",
                "price": 18.99,
                "category": "Menu",
                "type": "Vegetarian",
                "image": "images/burger mimi.png"
            },
            {
                "id": 24,
                "name": "Nachos",
                "description": "",
                "price": 18.99,
                "category": "Menu",
                "type": "Vegetarian",
                "image": "images/nachos mimi.jpg"
            }
        ]
    };

    // Toggle dark mode
    const checkbox = document.getElementById("checkbox");
    checkbox.addEventListener("change", () => {
        document.body.classList.toggle("dark");
    });

    // Render the detailed view of a single menu item
    function renderDetailedView(item) {
        menuContainer.innerHTML = ''; // Clear the container

        const detailedView = document.createElement('div');
        detailedView.classList.add('detailed-view');

        detailedView.innerHTML = `
            <div class="detailed-item">
                <img src="${item.image}" alt="${item.name}" class="detailed-item-image">
                <div class="detailed-item-content">
                    <h2>${item.name}</h2>
                    <p>${item.description || "No description available."}</p>
                    <p><strong>Price:</strong> $${item.price.toFixed(2)}</p>
                    <p><strong>Type:</strong> ${item.type}</p>
                    <button class="back-button">Back to Main Menu</button>
                </div>
            </div>
        `;

        menuContainer.appendChild(detailedView);

        // Back button event listener
        const backButton = detailedView.querySelector('.back-button');
        backButton.addEventListener('click', () => {
            renderMenu(menuData.menu); // Render the main menu again
        });
    }


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

                // Add click event listener to render detailed view
                menuItem.addEventListener('click', () => {
                    renderDetailedView(item);
                });

                categorySection.appendChild(menuItem);
            });

            menuContainer.appendChild(categorySection);
        }
    }

    // Filter menu items based on search query (updated to include categoryLists)
    function filterMenu(query) {
        // Clean up the query by trimming and handling multiple spaces
        const cleanQuery = query.trim().replace(/\s+/g, ' ');

        // If query is empty or only spaces, show the main menu
        if (!cleanQuery) {
            renderMenu(menuData.menu);
            return;
        }

        const filteredItems = [];
        
        // First, check the main menu items
        const mainMenuFiltered = menuData.menu.filter(item => {
            const nameMatch = item.name.toLowerCase().includes(cleanQuery.toLowerCase());
            const descriptionMatch = item.description && item.description.toLowerCase().includes(cleanQuery.toLowerCase());
            const typeMatch = item.type && item.type.toLowerCase().includes(cleanQuery.toLowerCase());
            const categoryMatch = item.category && item.category.toLowerCase().includes(cleanQuery.toLowerCase());
            return nameMatch || descriptionMatch || typeMatch || categoryMatch;
        });
        
        // Add filtered main menu items
        filteredItems.push(...mainMenuFiltered);
        
        // Then, search through all category items
        for (const category in categoryLists) {
            const categoryItemsFiltered = categoryLists[category].filter(item => {
                const nameMatch = item.name.toLowerCase().includes(cleanQuery.toLowerCase());
                const descriptionMatch = item.description && item.description.toLowerCase().includes(cleanQuery.toLowerCase());
                const typeMatch = item.type && item.type.toLowerCase().includes(cleanQuery.toLowerCase());
                const categoryMatch = category.toLowerCase().includes(cleanQuery.toLowerCase());
                return nameMatch || descriptionMatch || typeMatch || categoryMatch;
            });
            
            if (categoryItemsFiltered.length > 0) {
                // If we found matching items in this category, show them
                const categorySection = document.createElement('div');
                categorySection.classList.add('search-results-category');
                
                const categoryHeading = document.createElement('h2');
                categoryHeading.textContent = category;
                categoryHeading.classList.add('category-heading');
                
                menuContainer.innerHTML = ''; // Clear the container
                menuContainer.appendChild(categoryHeading);
                
                const itemsSection = document.createElement('div');
                itemsSection.classList.add('category-menu'); // Changed to category-menu to match the styling
                
                categoryItemsFiltered.forEach(item => {
                    const menuItem = document.createElement('div');
                    menuItem.classList.add('category-menu-item'); // Changed to category-menu-item for consistent styling
                    menuItem.innerHTML = `
                        <img src="${item.image}" alt="${item.name}" class="category-menu-item-image">
                        <div class="category-menu-item-content">
                            <h3>${item.name}</h3>
                            <p>${item.description}</p>
                            <p class="price"><strong>₹${item.price}</strong></p>
                        </div>
                    `;
                    
                    itemsSection.appendChild(menuItem);
                });
                
                menuContainer.appendChild(itemsSection);
                return; // Stop after showing results from the first matching category
            }
        }
        
        // If no items found in categories but found in main menu, show those
        if (filteredItems.length > 0) {
            renderMenu(filteredItems);
        } else {
            // If no items found at all, show a message
            menuContainer.innerHTML = '<p class="error">No items found matching your search.</p>';
        }
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

    // Separate lists for each category
    const categoryLists = {
        Pizza: [
            {
                id: 1,
                name: "Margherita Pizza",
                description: "Classic pizza with fresh mozzarella, tomatoes, and basil.",
                price: 450,
                type: "Vegetarian",
                image: "./images/pizza_margherita.jpeg"
            },
            {
                id: 2,
                name: "Veggie Supreme Pizza",
                description: "Topped with bell peppers, onions, olives, and mushrooms.",
                price: 450,
                type: "Vegetarian",
                image: "./images/pizza_veggie.jpg"
            }
        ],
        Pasta: [
            {
                id: 3,
                name: "Penne Arrabbiata",
                description: "Penne pasta in a spicy tomato sauce with fresh herbs.",
                price: 450,
                type: "Vegetarian",
                image: "./images/pasta_arrabbiata.jpg"
            },
            {
                id: 4,
                name: "Vegetable Alfredo Pasta",
                description: "Fettuccine pasta with creamy alfredo sauce and mixed vegetables.",
                price: 450,
                type: "Vegetarian",
                image: "./images/pasta_alfredo.jpg"
            }
        ],
        Burger: [
            {
                id: 5,
                name: "Classic Veggie Burger",
                description: "A delicious plant-based patty with lettuce, tomato, and cheese.",
                price: 450,
                type: "Vegetarian",
                image: "./images/burger_veggie.jpg"
            },
            {
                id: 6,
                name: "Spicy Paneer Burger",
                description: "Crispy paneer patty with a spicy mayo sauce.",
                price: 450,
                type: "Vegetarian",
                image: "./images/burger_paneer.jpg"
            },
            {
                id: 7,
                name: "Mushroom Swiss Burger",
                description: "Grilled mushrooms with melted Swiss cheese on a toasted bun.",
                price: 450,
                type: "Vegetarian",
                image: "./images/burger_mushroom.jpg"
            }
        ],
        Nachos: [
            {
                id: 8,
                name: "Cheesy Nachos",
                description: "Crunchy tortilla chips topped with melted cheese and jalapeños.",
                price: 450,
                type: "Vegetarian",
                image: "./images/nachos_cheese.jpg"
            },
            {
                id: 9,
                name: "Loaded Veggie Nachos",
                description: "Tortilla chips with beans, guacamole, sour cream, and salsa.",
                price: 450,
                type: "Vegetarian",
                image: "./images/nachos_loaded.jpg"
            },
            {
                id: 10,
                name: "Spicy Mexican Nachos",
                description: "Tortilla chips with spicy salsa, corn, and cheese.",
                price: 450,
                type: "Vegetarian",
                image: "./images/nachos_mexican.jpg"
            }
        ]
    };

    // Render the list of items for a specific category
    function renderCategoryItems(category) {
        menuContainer.innerHTML = ''; // Clear the container
        menuContainer.classList.add('detailed-view');

        const categoryItems = categoryLists[category];

        if (!categoryItems || categoryItems.length === 0) {
            menuContainer.innerHTML = `<p>No items available in this category.</p>`;
            return;
        }
        // Create category header with back button
        const categoryHeader = document.createElement('div');
        categoryHeader.classList.add('category-header');

        const backButton = document.createElement('img');
        backButton.src = document.body.classList.contains('dark') 
            ? "./images/dark_back_btn.png"
            : "./images/light_back_btn.png";
        backButton.alt = 'Back';
        backButton.classList.add('back-button-image');

        // Update back button image on theme change
        const checkbox = document.getElementById('checkbox');
        checkbox.addEventListener('change', () => {
            backButton.src = document.body.classList.contains('dark') 
                ? "./images/dark_back_btn.png"
                : "./images/light_back_btn.png";
        });

        backButton.addEventListener('click', () => {
            menuContainer.classList.remove('detailed-view'); // Remove detailed view class
            renderMenu(menuData.menu); // Render the main menu
        });

        const categoryTitle = document.createElement('h1');
        categoryTitle.textContent = category;

        categoryHeader.appendChild(backButton);
        categoryHeader.appendChild(categoryTitle);
        menuContainer.appendChild(categoryHeader);
        const categorySection = document.createElement('div');
        categorySection.classList.add('category-menu');

        categoryItems.forEach(item => {
            const menuItem = document.createElement('div');
            menuItem.classList.add('category-menu-item');
            menuItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}" class="category-menu-item-image">
                <div class="category-menu-item-content">
                    <h3>${item.name}</h3>
                    <p>${item.description}</p>
                    <p class="price"><strong>₹${item.price.toFixed(2)}</strong></p>
                </div>
            `;

            categorySection.appendChild(menuItem);
        });

        menuContainer.appendChild(categorySection);
    }

    // Attach event listeners to menu items (Modify this in your existing `renderMenu` function)
    document.addEventListener('click', (event) => {
        const clickedItem = event.target.closest('.menu-item');
        if (clickedItem) {
            const itemName = clickedItem.querySelector('h3').textContent;
            if (categoryLists[itemName]) {
                renderCategoryItems(itemName);
            }
        }
    });

    renderMenu(menuData.menu);
    initMobileNavigation();
});