document.addEventListener('DOMContentLoaded', () => {
    const menuContainer = document.getElementById('menu-container');
    const searchBar = document.getElementById('search-bar'); // Get the search bar element
    const searchIcon = document.querySelector('.search-icon');
    const searchContainer = document.querySelector('.search-container');

    // Menu collection - embedded directly in JavaScript instead of in a separate JSON file
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
                "image": "./images/pasta mimi.jpg"
            },
            {
                "id": 3,
                "name": "Burger",
                "description": "",
                "price": 8.99,
                "category": "Menu",
                "type": "Vegan",
                "image": "images/burger mimi.png"
            },
            {
                "id": 4,
                "name": "Nachos",
                "description": "",
                "price": 9.99,
                "category": "Menu",
                "type": "Vegetarian",
                "image": "./images/nachos mimi.jpg"
            },
            {
                "id": 5,
                "name": "Chicken Alfredo Pasta",
                "description": "Fettuccine pasta with creamy alfredo sauce and grilled chicken.",
                "price": 15.99,
                "category": "Pasta",
                "type": "Non-Vegetarian",
                "image": "./images/pasta mimi.jpg"
            },
            {
                "id": 6,
                "name": "Spaghetti Carbonara",
                "description": "Pasta with creamy sauce, pancetta, and parmesan cheese.",
                "price": 14.99,
                "category": "Pasta",
                "type": "Non-Vegetarian",
                "image": "./images/pasta mimi.jpg"
            },
            {
                "id": 7,
                "name": "Beef Burger",
                "description": "Juicy beef patty with lettuce, tomato, cheese, and special sauce.",
                "price": 13.99,
                "category": "Burger",
                "type": "Non-Vegetarian",
                "image": "./images/burger mimi.png"
            },
            {
                "id": 8,
                "name": "Veggie Burger",
                "description": "Plant-based patty with avocado, sprouts, and vegan mayo.",
                "price": 12.99,
                "category": "Burger",
                "type": "Vegan",
                "image": "./images/burger mimi.png"
            },
            {
                "id": 9,
                "name": "Chocolate Lava Cake",
                "description": "Warm chocolate cake with a molten center, served with vanilla ice cream.",
                "price": 7.99,
                "category": "Dessert",
                "type": "Vegetarian",
                "image": "./images/dessert mimi.jpg"
            },
            {
                "id": 10,
                "name": "Tiramisu",
                "description": "Classic Italian dessert with coffee-soaked ladyfingers and mascarpone.",
                "price": 6.99,
                "category": "Dessert",
                "type": "Vegetarian",
                "image": "./images/dessert mimi.jpg"
            },
            {
                "id": 11,
                "name": "Chicken & Vegetable Soup",
                "description": "Hearty soup with chicken, fresh vegetables, and herbs.",
                "price": 6.99,
                "category": "Soup",
                "type": "Non-Vegetarian",
                "image": "./images/soup mimi.jpg"
            },
            {
                "id": 12,
                "name": "French Fries",
                "description": "Crispy golden fries served with ketchup and aioli.",
                "price": 4.99,
                "category": "Sides",
                "type": "Vegan",
                "image": "./images/fries mimi.jpg"
            },
            {
                "id": 13,
                "name": "Garlic Bread",
                "description": "Toasted bread with garlic butter and herbs.",
                "price": 5.99,
                "category": "Sides",
                "type": "Vegetarian",
                "image": "./images/Garlic-Bread mimi.jpg"
            },
            {
                "id": 14,
                "name": "Loaded Nachos",
                "description": "Tortilla chips topped with cheese, jalapeños, salsa, and sour cream.",
                "price": 9.99,
                "category": "Appetizers",
                "type": "Vegetarian",
                "image": "./images/nachos mimi.jpg"
            },
            {
                "id": 15,
                "name": "Vegetable Dimsums",
                "description": "Steamed dumplings filled with mixed vegetables and herbs.",
                "price": 8.99,
                "category": "Appetizers",
                "type": "Vegan",
                "image": "./images/dimsums mimi.jpg"
            },
            {
                "id": 16,
                "name": "Chicken Tacos",
                "description": "Soft tortillas filled with seasoned chicken, lettuce, and pico de gallo.",
                "price": 11.99,
                "category": "Tacos",
                "type": "Non-Vegetarian",
                "image": "./images/tacos mimi.jpg"
            },
            {
                "id": 17,
                "name": "Vegetable Fried Rice",
                "description": "Stir-fried rice with mixed vegetables and soy sauce.",
                "price": 10.99,
                "category": "Rice & Noodles",
                "type": "Vegan",
                "image": "./images/fried rice and noodles mimi.jpg"
            },
            {
                "id": 18,
                "name": "Chicken Hakka Noodles",
                "description": "Stir-fried noodles with chicken and vegetables in a savory sauce.",
                "price": 12.99,
                "category": "Rice & Noodles",
                "type": "Non-Vegetarian",
                "image": "./images/fried rice and noodles mimi.jpg"
            },
            {
                "id": 19,
                "name": "California Sushi Roll",
                "description": "Crab, avocado, and cucumber wrapped in nori and sushi rice.",
                "price": 13.99,
                "category": "Sushi",
                "type": "Non-Vegetarian",
                "image": "./images/sushi mimi.jpg"
            },
            {
                "id": 20,
                "name": "Chicken Caesar Wrap",
                "description": "Grilled chicken, romaine, parmesan, and Caesar dressing in a flour tortilla.",
                "price": 10.99,
                "category": "Wraps",
                "type": "Non-Vegetarian",
                "image": "./images/wraps mimi.jpg"
            },
            {
                "id": 21,
                "name": "Fresh Lemonade",
                "description": "Freshly squeezed lemonade served chilled.",
                "price": 3.99,
                "category": "Drinks",
                "type": "Vegan",
                "image": "./images/drinks mimi.jpg"
            },
            {
                "id": 22,
                "name": "Iced Tea",
                "description": "House-brewed iced tea with lemon.",
                "price": 3.49,
                "category": "Drinks",
                "type": "Vegan",
                "image": "./images/drinks mimi.jpg"
            },
            {
                "id": 23,
                "name": "Kung Pao Chicken",
                "description": "Spicy stir-fried chicken with peanuts, vegetables, and chili peppers.",
                "price": 16.99,
                "category": "Main Course",
                "type": "Non-Vegetarian",
                "image": "./images/main course mimi.jpg"
            },
            {
                "id": 24,
                "name": "Grilled Salmon",
                "description": "Fresh salmon fillet grilled to perfection with lemon herb butter.",
                "price": 18.99,
                "category": "Main Course",
                "type": "Non-Vegetarian",
                "image": "./images/main course mimi.jpg"
            }
        ]
    };
    const checkbox = document.getElementById("checkbox")
    checkbox.addEventListener("change", () => {
      document.body.classList.toggle("dark")
    })
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
            const categoryMatch = item.category.toLowerCase().includes(query.toLowerCase()); // Match category
            return nameMatch || descriptionMatch || typeMatch || categoryMatch;
        });

        renderMenu(filteredMenu);
    }

    // Event listener for the search bar
    searchBar.addEventListener('input', (e) => {
        const query = e.target.value; // Get the search query
        filterMenu(query); // Filter the menu based on the query
    });

    // Toggle the visibility of the search bar when the search icon is clicked
    searchIcon.addEventListener('click', () => {
        if (searchBar.classList.contains('hidden')) {
            searchBar.classList.remove('hidden');
            searchBar.classList.add('visible');
            searchContainer.classList.remove('hidden-bar'); // Remove the class to align the bar
            searchBar.focus(); // Automatically focus on the search bar
        } else {
            searchBar.classList.remove('visible');
            searchBar.classList.add('hidden');
            searchContainer.classList.add('hidden-bar'); // Add the class to move the icon
        }
    });

    // Close the search bar when the user clicks outside of it
    document.addEventListener('click', (event) => {
        if (!event.target.closest('.search-container')) {
            searchBar.classList.remove('visible');
            searchBar.classList.add('hidden');
            searchContainer.classList.add('hidden-bar'); // Add the class to move the icon
        }
    });

    // Initial render of the full menu
    renderMenu(menuData.menu);
    initMobileNavigation();
=======
document.addEventListener('DOMContentLoaded', () => {
    const menuContainer = document.getElementById('menu-container');
    const searchBar = document.getElementById('search-bar'); // Get the search bar element
    const searchIcon = document.querySelector('.search-icon');
    const searchContainer = document.querySelector('.search-container');

    // Menu collection - embedded directly in JavaScript instead of in a separate JSON file
    const menuData = {
        "menu": [
            {
                "id": 1,
                "name": "Classic Margherita",
                "description": "Fresh mozzarella, tomatoes, basil, and olive oil on our house-made dough.",
                "price": 12.99,
                "category": "Pizza",
                "type": "Vegetarian",
                "image": "./images/pizza mimi.jpg"
            },
            {
                "id": 2,
                "name": "Veg Supreme",
                "description": "Loaded with Vegetables, mozzarella cheese and our signature tomato sauce.",
                "price": 14.99,
                "category": "Pizza",
                "type": "Non-Vegetarian",
                "image": "./images/pizza mimi.jpg"
            },
            {
                "id": 3,
                "name": "Garden Fresh Salad",
                "description": "Mixed greens, cherry tomatoes, cucumbers, and balsamic vinaigrette.",
                "price": 8.99,
                "category": "Salad",
                "type": "Vegan",
                "image": "./images/salad mimi.jpg"
            },
            {
                "id": 4,
                "name": "Caesar Salad",
                "description": "Crisp romaine lettuce with Caesar dressing, croutons, and parmesan.",
                "price": 9.99,
                "category": "Salad",
                "type": "Vegetarian",
                "image": "./images/salad mimi.jpg"
            },
            {
                "id": 5,
                "name": "Chicken Alfredo Pasta",
                "description": "Fettuccine pasta with creamy alfredo sauce and grilled chicken.",
                "price": 15.99,
                "category": "Pasta",
                "type": "Non-Vegetarian",
                "image": "./images/pasta mimi.jpg"
            },
            {
                "id": 6,
                "name": "Spaghetti Carbonara",
                "description": "Pasta with creamy sauce, pancetta, and parmesan cheese.",
                "price": 14.99,
                "category": "Pasta",
                "type": "Non-Vegetarian",
                "image": "./images/pasta mimi.jpg"
            },
            {
                "id": 7,
                "name": "Beef Burger",
                "description": "Juicy beef patty with lettuce, tomato, cheese, and special sauce.",
                "price": 13.99,
                "category": "Burger",
                "type": "Non-Vegetarian",
                "image": "./images/burger mimi.png"
            },
            {
                "id": 8,
                "name": "Veggie Burger",
                "description": "Plant-based patty with avocado, sprouts, and vegan mayo.",
                "price": 12.99,
                "category": "Burger",
                "type": "Vegan",
                "image": "./images/burger mimi.png"
            },
            {
                "id": 9,
                "name": "Chocolate Lava Cake",
                "description": "Warm chocolate cake with a molten center, served with vanilla ice cream.",
                "price": 7.99,
                "category": "Dessert",
                "type": "Vegetarian",
                "image": "./images/dessert mimi.jpg"
            },
            {
                "id": 10,
                "name": "Tiramisu",
                "description": "Classic Italian dessert with coffee-soaked ladyfingers and mascarpone.",
                "price": 6.99,
                "category": "Dessert",
                "type": "Vegetarian",
                "image": "./images/dessert mimi.jpg"
            },
            {
                "id": 11,
                "name": "Chicken & Vegetable Soup",
                "description": "Hearty soup with chicken, fresh vegetables, and herbs.",
                "price": 6.99,
                "category": "Soup",
                "type": "Non-Vegetarian",
                "image": "./images/soup mimi.jpg"
            },
            {
                "id": 12,
                "name": "French Fries",
                "description": "Crispy golden fries served with ketchup and aioli.",
                "price": 4.99,
                "category": "Sides",
                "type": "Vegan",
                "image": "./images/fries mimi.jpg"
            },
            {
                "id": 13,
                "name": "Garlic Bread",
                "description": "Toasted bread with garlic butter and herbs.",
                "price": 5.99,
                "category": "Sides",
                "type": "Vegetarian",
                "image": "./images/Garlic-Bread mimi.jpg"
            },
            {
                "id": 14,
                "name": "Loaded Nachos",
                "description": "Tortilla chips topped with cheese, jalapeños, salsa, and sour cream.",
                "price": 9.99,
                "category": "Appetizers",
                "type": "Vegetarian",
                "image": "./images/nachos mimi.jpg"
            },
            {
                "id": 15,
                "name": "Vegetable Dimsums",
                "description": "Steamed dumplings filled with mixed vegetables and herbs.",
                "price": 8.99,
                "category": "Appetizers",
                "type": "Vegan",
                "image": "./images/dimsums mimi.jpg"
            },
            {
                "id": 16,
                "name": "Chicken Tacos",
                "description": "Soft tortillas filled with seasoned chicken, lettuce, and pico de gallo.",
                "price": 11.99,
                "category": "Tacos",
                "type": "Non-Vegetarian",
                "image": "./images/tacos mimi.jpg"
            },
            {
                "id": 17,
                "name": "Vegetable Fried Rice",
                "description": "Stir-fried rice with mixed vegetables and soy sauce.",
                "price": 10.99,
                "category": "Rice & Noodles",
                "type": "Vegan",
                "image": "./images/fried rice and noodles mimi.jpg"
            },
            {
                "id": 18,
                "name": "Chicken Hakka Noodles",
                "description": "Stir-fried noodles with chicken and vegetables in a savory sauce.",
                "price": 12.99,
                "category": "Rice & Noodles",
                "type": "Non-Vegetarian",
                "image": "./images/fried rice and noodles mimi.jpg"
            },
            {
                "id": 19,
                "name": "California Sushi Roll",
                "description": "Crab, avocado, and cucumber wrapped in nori and sushi rice.",
                "price": 13.99,
                "category": "Sushi",
                "type": "Non-Vegetarian",
                "image": "./images/sushi mimi.jpg"
            },
            {
                "id": 20,
                "name": "Chicken Caesar Wrap",
                "description": "Grilled chicken, romaine, parmesan, and Caesar dressing in a flour tortilla.",
                "price": 10.99,
                "category": "Wraps",
                "type": "Non-Vegetarian",
                "image": "./images/wraps mimi.jpg"
            },
            {
                "id": 21,
                "name": "Fresh Lemonade",
                "description": "Freshly squeezed lemonade served chilled.",
                "price": 3.99,
                "category": "Drinks",
                "type": "Vegan",
                "image": "./images/drinks mimi.jpg"
            },
            {
                "id": 22,
                "name": "Iced Tea",
                "description": "House-brewed iced tea with lemon.",
                "price": 3.49,
                "category": "Drinks",
                "type": "Vegan",
                "image": "./images/drinks mimi.jpg"
            },
            {
                "id": 23,
                "name": "Kung Pao Chicken",
                "description": "Spicy stir-fried chicken with peanuts, vegetables, and chili peppers.",
                "price": 16.99,
                "category": "Main Course",
                "type": "Non-Vegetarian",
                "image": "./images/main course mimi.jpg"
            },
            {
                "id": 24,
                "name": "Grilled Salmon",
                "description": "Fresh salmon fillet grilled to perfection with lemon herb butter.",
                "price": 18.99,
                "category": "Main Course",
                "type": "Non-Vegetarian",
                "image": "./images/main course mimi.jpg"
            }
        ]
    };

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
                        <span class="price">$${item.price.toFixed(2)}</span>
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
            const categoryMatch = item.category.toLowerCase().includes(query.toLowerCase()); // Match category
            return nameMatch || descriptionMatch || typeMatch || categoryMatch;
        });

        renderMenu(filteredMenu);
    }

    // Event listener for the search bar
    searchBar.addEventListener('input', (e) => {
        const query = e.target.value; // Get the search query
        filterMenu(query); // Filter the menu based on the query
    });

    // Toggle the visibility of the search bar when the search icon is clicked
    searchIcon.addEventListener('click', () => {
        if (searchBar.classList.contains('hidden')) {
            searchBar.classList.remove('hidden');
            searchBar.classList.add('visible');
            searchContainer.classList.remove('hidden-bar'); // Remove the class to align the bar
            searchBar.focus(); // Automatically focus on the search bar
        } else {
            searchBar.classList.remove('visible');
            searchBar.classList.add('hidden');
            searchContainer.classList.add('hidden-bar'); // Add the class to move the icon
        }
    });

    // Close the search bar when the user clicks outside of it
    document.addEventListener('click', (event) => {
        if (!event.target.closest('.search-container')) {
            searchBar.classList.remove('visible');
            searchBar.classList.add('hidden');
            searchContainer.classList.add('hidden-bar'); // Add the class to move the icon
        }
    });

    // Initial render of the full menu
    renderMenu(menuData.menu);
    initMobileNavigation();
>>>>>>> 98c5f204924e253b84c6c8aa30d1a683f1cae415
});