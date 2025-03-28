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
    const categoryHeader = document.createElement('h2');
    categoryHeader.textContent = category; // Set the category name as the header
    categoryHeader.classList.add('category-header');
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

    const backButton = document.createElement('button');
    backButton.innerHTML = '<img class="back" src="./images/back-button.png" alt="Back">';
    backButton.classList.add('back-button'); 

    backButton.addEventListener('click', () => {
        menuContainer.classList.remove('detailed-view'); 
        renderMenu(menuData.menu); 
    });
    document.querySelector('header h1').addEventListener('click', () => {
        menuContainer.classList.remove('detailed-view'); // Remove detailed view class if present
        renderMenu(menuData.menu); // Render the main menu
    });
    menuContainer.appendChild(backButton);
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