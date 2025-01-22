// Variables globales
let cart = [];
let currentCategory = null;
let currentProduct = null;
let currentPage = 1;
let isLoading = false;
let hasMoreProducts = true;
const productsPerPage = 6;
let allProducts = [];
let currentUser = null;

// API URLs
const API_URL = 'https://api.escuelajs.co/api/v1';
const CATEGORIES_URL = `${API_URL}/categories`;
const PRODUCTS_URL = `${API_URL}/products`;

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Cargar datos mientras se muestra el preloader
    loadCategories();
    loadCartFromStorage();
    loadUserFromStorage();

    // Mantener el preloader por 2 segundos exactos
    setTimeout(() => {
        const preloader = document.getElementById('preloader');
        if (preloader) {
            preloader.style.display = 'none';
        }
        // Mostrar las secciones principales
        const sections = ['hero', 'categories', 'newsletter'];
        sections.forEach(id => {
            const section = document.getElementById(id);
            if (section) {
                section.classList.remove('hidden');
            }
        });
    }, 2000);
});

// Funciones de navegación
function showHome() {
    hideAllSections();
    const hero = document.getElementById('hero');
    const categories = document.getElementById('categories');
    const newsletter = document.getElementById('newsletter');
    
    if (hero) hero.classList.remove('hidden');
    if (categories) categories.classList.remove('hidden');
    if (newsletter) newsletter.classList.remove('hidden');
}

// Función para ocultar todas las secciones
function hideAllSections() {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.classList.add('hidden'));
}

// Funciones de carga de datos
async function loadCategories() {
    try {
        const response = await fetch(CATEGORIES_URL);
        const allCategories = await response.json();
        const categories = allCategories.slice(0, 6);
        renderCategories(categories);
    } catch (error) {
        console.error('Error loading categories:', error);
        showNotification('Error al cargar las categorías', 'error');
    }
}

async function loadProducts(categoryId) {
    try {
        const url = categoryId ? `${PRODUCTS_URL}/?categoryId=${categoryId}` : PRODUCTS_URL;
        const response = await fetch(url);
        allProducts = await response.json();
        currentPage = 1;
        hasMoreProducts = true;
        renderInitialProducts();
        setupInfiniteScroll();
    } catch (error) {
        console.error('Error loading products:', error);
        showNotification('Error al cargar los productos', 'error');
    }
}

function renderInitialProducts() {
    const productsContainer = document.getElementById('productsContainer');
    if (!productsContainer) return;
    productsContainer.innerHTML = '';
    renderNextBatchOfProducts();
}

function renderNextBatchOfProducts() {
    if (!hasMoreProducts || isLoading) return;
    const productsContainer = document.getElementById('productsContainer');
    if (!productsContainer) return;

    isLoading = true;
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const productsToRender = allProducts.slice(startIndex, endIndex);

    if (endIndex >= allProducts.length) {
        hasMoreProducts = false;
    }

    const productsHTML = productsToRender.map(product => `
        <div class="product">
            <div class="product__image-container">
                <img src="${product.images[0]}" alt="${product.title}" class="product__image" onerror="this.src='https://via.placeholder.com/300'">
            </div>
            <div class="product__info">
                <h3 class="product__title">${product.title}</h3>
                <p class="product__price">$${product.price}</p>
                <button class="product__details-btn" onclick="showProductDetails(${product.id})">
                    Ver detalles
                </button>
            </div>
        </div>
    `).join('');

    productsContainer.insertAdjacentHTML('beforeend', productsHTML);
    currentPage++;
    isLoading = false;
}

// Funciones del carrito
function addToCart() {
    if (!currentUser) {
        showNotification('Debes iniciar sesión para agregar productos al carrito', 'error');
        showAuth();
        return;
    }

    const quantity = parseInt(document.getElementById('quantity').value);
    const existingItemIndex = cart.findIndex(item => item.id === currentProduct.id);
    
    if (existingItemIndex !== -1) {
        cart[existingItemIndex].quantity += quantity;
    } else {
        cart.push({
            id: currentProduct.id,
            title: currentProduct.title,
            price: currentProduct.price,
            image: currentProduct.images[0],
            quantity: quantity
        });
    }
    
    saveCartToStorage();
    updateCartCount();
    showNotification('Producto añadido al carrito', 'success');
}

function updateCartCount() {
    const cartCount = document.getElementById('cartCount');
    if (!cartCount) return;
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = totalItems;
}

// Funciones de almacenamiento
function loadCartFromStorage() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartCount();
    }
}

function saveCartToStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function loadUserFromStorage() {
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        updateUserMenu();
    }
}

// Funciones de utilidad
function showNotification(message, type = 'success') {
    const notificationContainer = document.getElementById('notificationContainer');
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    notificationContainer.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notificationContainer.removeChild(notification);
        }, 300);
    }, 3000);
}

// Funciones de autenticación
function updateUserMenu() {
    const userMenuContainer = document.getElementById('userMenuContainer');
    if (!userMenuContainer) return;

    if (currentUser) {
        userMenuContainer.innerHTML = `
            <div class="nav__user">
                <span onclick="toggleDropdown(event)">${currentUser.name} ▼</span>
                <div class="dropdown" id="userDropdown">
                    ${currentUser.role === 'admin' ? 
                        '<a href="#" onclick="showAdminPanel(); return false;">Panel Admin</a>' : 
                        ''
                    }
                    <a href="#" onclick="showOrders(); return false;">Mis Pedidos</a>
                    <a href="#" onclick="showCart(); return false;">Mi Carrito</a>
                    <a href="#" onclick="logout(); return false;">Cerrar Sesión</a>
                </div>
            </div>
        `;
    } else {
        userMenuContainer.innerHTML = `
            <a href="#" onclick="showAuth(); return false;" id="loginButton">Iniciar Sesión</a>
        `;
    }
}

function toggleDropdown(event) {
    if (event) {
        event.preventDefault();
        event.stopPropagation();
    }
    const dropdown = document.getElementById('userDropdown');
    if (dropdown) {
        dropdown.classList.toggle('show');
    }
}