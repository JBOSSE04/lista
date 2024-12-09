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
let orders = [];

// API URLs
const API_URL = 'https://api.escuelajs.co/api/v1';
const CATEGORIES_URL = `${API_URL}/categories`;
const PRODUCTS_URL = `${API_URL}/products`;
const USERS_URL = `${API_URL}/users`;
const AUTH_URL = `${API_URL}/auth`;

// Elementos DOM
const preloader = document.getElementById('preloader');
const categoriesContainer = document.getElementById('categoriesContainer');
const productsContainer = document.getElementById('productsContainer');
const productDetailSection = document.getElementById('product-detail');
const cartCount = document.getElementById('cartCount');
const cartContainer = document.getElementById('cartContainer');
const cartTotal = document.getElementById('cartTotal');
const heroSection = document.getElementById('hero');
const categoriesSection = document.getElementById('categories');
const productsSection = document.getElementById('products');
const cartSection = document.getElementById('cart');
const authSection = document.getElementById('auth');
const adminPanel = document.getElementById('adminPanel');
const scrollUpButton = document.getElementById('scroll-up');

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Inicializar elementos
    loadCategories();
    loadCartFromStorage();
    loadUserFromStorage();
    loadOrdersFromStorage();
    
    // Scroll Up Button
    const scrollUp = document.getElementById('scroll-up');
    if (scrollUp) {
        window.addEventListener('scroll', () => {
            if (window.scrollY >= 200) {
                scrollUp.classList.add('show-scroll');
            } else {
                scrollUp.classList.remove('show-scroll');
            }
        });

        scrollUp.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Cerrar dropdown al hacer clic fuera
    document.addEventListener('click', (e) => {
        const userMenu = document.querySelector('.nav__user');
        const dropdown = document.getElementById('userDropdown');
        
        if (!userMenu?.contains(e.target) && dropdown?.classList.contains('show')) {
            dropdown.classList.remove('show');
        }
    });
});

// Funciones de navegación
function showHome() {
    hideAllSections();
    if (currentUser) {
        // Si el usuario está logueado, mostrar solo categorías
        document.getElementById('categories').style.display = 'block';
    } else {
        // Si no hay usuario logueado, mostrar hero y categorías
        document.getElementById('hero').style.display = 'block';
        document.getElementById('categories').style.display = 'block';
    }
}

function showCategories() {
    hideAllSections();
    
    // Mostrar la sección de categorías
    const categoriesSection = document.getElementById('categories');
    if (categoriesSection) {
        categoriesSection.style.display = 'block';
        // Hacer scroll suave hasta las categorías
        setTimeout(() => {
            categoriesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
    }
}

function showProductsByCategory(categoryId) {
    hideAllSections();
    document.getElementById('products').style.display = 'block';

    // Obtener y filtrar productos
    const allProducts = [
        {
            id: 1,
            title: "Camiseta Básica",
            price: 19.99,
            description: "Camiseta básica de algodón",
            category: "camisetas",
            images: ["img/products/camiseta1.jpg"]
        },
        {
            id: 2,
            title: "Pantalón Vaquero",
            price: 49.99,
            description: "Pantalón vaquero clásico",
            category: "pantalones",
            images: ["img/products/pantalon1.jpg"]
        },
        {
            id: 3,
            title: "Zapatillas Deportivas",
            price: 79.99,
            description: "Zapatillas deportivas cómodas",
            category: "zapatillas",
            images: ["img/products/zapatillas1.jpg"]
        }
        // Añade más productos según sea necesario
    ];

    const filteredProducts = allProducts.filter(product => product.category === categoryId);
    
    // Actualizar el título de la sección
    const sectionTitle = document.querySelector('#products .section__title');
    if (sectionTitle) {
        sectionTitle.textContent = getCategoryName(categoryId);
    }

    // Mostrar los productos filtrados
    const productsContainer = document.getElementById('productsContainer');
    if (productsContainer) {
        productsContainer.innerHTML = filteredProducts.map(product => `
            <div class="product-card">
                <img src="${product.images[0]}" alt="${product.title}" class="product-card__image">
                <div class="product-card__content">
                    <h3 class="product-card__title">${product.title}</h3>
                    <p class="product-card__price">$${product.price.toFixed(2)}</p>
                    <button class="button" onclick="addToCart(${product.id})">
                        Añadir al carrito
                    </button>
                </div>
            </div>
        `).join('');
    }

    // Hacer scroll suave hasta la sección de productos
    setTimeout(() => {
        document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
    }, 100);
}

function getCategoryName(categoryId) {
    const categories = {
        'camisetas': 'Camisetas',
        'pantalones': 'Pantalones',
        'zapatillas': 'Zapatillas'
    };
    return categories[categoryId] || 'Productos';
}

function showProducts() {
    hideAllSections();
    document.getElementById('products').style.display = 'block';
}

function showCart() {
    hideAllSections();
    document.getElementById('cart').style.display = 'block';
    renderCart();
}

function showAuth() {
    hideAllSections();
    document.getElementById('auth').style.display = 'block';
    document.getElementById('hero').style.display = 'none';
    document.getElementById('categories').style.display = 'none';
    
    // Asegurarse de que el formulario de login esté visible por defecto
    document.getElementById('loginForm').classList.remove('hidden');
    document.getElementById('registerForm').classList.add('hidden');
    
    // Actualizar las clases de las pestañas
    const tabs = document.querySelectorAll('.auth__tab');
    tabs.forEach(tab => {
        if (tab.textContent === 'Iniciar Sesión') {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });
}

function hideAllSections() {
    const sections = [
        'hero',
        'categories',
        'products',
        'cart',
        'auth',
        'adminPanel'
    ];
    
    sections.forEach(sectionId => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.style.display = 'none';
        }
    });
}

// Funciones de carga de datos
async function loadCategories() {
    const categories = [
        { id: 'camisetas', name: 'Camisetas', image: 'img/categories/camisetas.jpg' },
        { id: 'pantalones', name: 'Pantalones', image: 'img/categories/pantalones.jpg' },
        { id: 'zapatillas', name: 'Zapatillas', image: 'img/categories/zapatillas.jpg' }
    ];

    const categoriesContainer = document.getElementById('categoriesContainer');
    if (!categoriesContainer) return;

    categoriesContainer.innerHTML = categories.map(category => `
        <div class="category-card" onclick="showProductsByCategory('${category.id}')">
            <img src="${category.image}" alt="${category.name}" class="category-card__image">
            <h3 class="category-card__title">${category.name}</h3>
        </div>
    `).join('');
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
    if (!productsContainer) return;
    productsContainer.innerHTML = '';
    renderNextBatchOfProducts();
}

// Funciones de renderizado
function renderCategories(categories) {
    if (!categoriesContainer) return;
    
    categoriesContainer.innerHTML = categories.map(category => `
        <div class="category" onclick="selectCategory(${category.id})">
            <img src="${category.image}" alt="${category.name}" class="category__image" onerror="this.src='https://via.placeholder.com/300'">
            <h3 class="category__name">${category.name}</h3>
        </div>
    `).join('');
}

function displayProducts(products) {
    if (!productsContainer) return;
    productsContainer.innerHTML = products.map(product => `
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
}

// Funciones de autenticación
async function handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    try {
        if (email === 'admin' && password === 'admin') {
            currentUser = {
                id: 0,
                email: 'admin',
                name: 'Administrator',
                role: 'admin'
            };
            saveUserToStorage();
            updateUserMenu();
            showNotification('Sesión iniciada correctamente', 'success');
            
            // Mostrar la página principal después del login
            hideAllSections();
            document.getElementById('hero').style.display = 'block';
            document.getElementById('categories').style.display = 'block';
            return;
        }

        const registeredUsers = getRegisteredUsers();
        const user = registeredUsers.find(u => u.email === email && u.password === password);

        if (!user) {
            throw new Error('Credenciales inválidas');
        }

        currentUser = {
            ...user,
            role: 'customer'
        };

        saveUserToStorage();
        updateUserMenu();
        showNotification('Sesión iniciada correctamente', 'success');
        
        // Mostrar la página principal después del login
        hideAllSections();
        document.getElementById('hero').style.display = 'block';
        document.getElementById('categories').style.display = 'block';
    } catch (error) {
        showNotification('Error al iniciar sesión: ' + error.message, 'error');
    }
}

async function handleRegister(event) {
    event.preventDefault();
    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;

    try {
        const registeredUsers = getRegisteredUsers();
        
        // Verificar si el email ya está registrado
        if (registeredUsers.some(u => u.email === email)) {
            throw new Error('Este email ya está registrado');
        }

        const newUser = {
            id: Date.now(), // Usar timestamp como ID único
            name,
            email,
            password,
            role: 'customer'
        };

        // Guardar el nuevo usuario
        registeredUsers.push(newUser);
        saveRegisteredUsers(registeredUsers);
        
        // Enviar email de bienvenida
        // await sendWelcomeEmail(email, name);
        
        showNotification('Registro exitoso. Por favor, inicia sesión.', 'success');
        switchAuthTab('login');
        
        // Prellenar el formulario de login
        document.getElementById('loginEmail').value = email;
    } catch (error) {
        showNotification('Error en el registro: ' + error.message, 'error');
    }
}

function logout() {
    currentUser = null;
    localStorage.removeItem('currentUser');
    updateUserMenu();
    showNotification('Sesión cerrada correctamente', 'success');
    
    // Volver a la página de inicio después del logout
    hideAllSections();
    document.getElementById('hero').style.display = 'block';
    document.getElementById('categories').style.display = 'block';
}

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

        // Agregar event listener para cerrar el dropdown cuando se hace clic fuera
        document.addEventListener('click', function(event) {
            const dropdown = document.getElementById('userDropdown');
            const userMenu = document.querySelector('.nav__user');
            if (dropdown && !userMenu.contains(event.target)) {
                dropdown.classList.remove('show');
            }
        });
    } else {
        userMenuContainer.innerHTML = `
            <a href="#" onclick="showAuth(); return false;" id="loginButton">Iniciar Sesión</a>
        `;
    }
}

function toggleDropdown(event) {
    event.preventDefault();
    event.stopPropagation();
    const dropdown = document.getElementById('userDropdown');
    if (dropdown) {
        dropdown.classList.toggle('show');
    }
}

// Funciones de almacenamiento local
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

function saveUserToStorage() {
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
}

function saveRegisteredUsers(users) {
    localStorage.setItem('registeredUsers', JSON.stringify(users));
}

function getRegisteredUsers() {
    const users = localStorage.getItem('registeredUsers');
    return users ? JSON.parse(users) : [];
}

function loadOrdersFromStorage() {
    const savedOrders = localStorage.getItem('orders');
    if (savedOrders) {
        orders = JSON.parse(savedOrders);
    }
}

function saveOrdersToStorage() {
    localStorage.setItem('orders', JSON.stringify(orders));
}

// Funciones de administración
async function loadUsers() {
    if (!currentUser || currentUser.role !== 'admin') return;

    try {
        const response = await fetch(USERS_URL);
        const users = await response.json();
        renderUsersList(users);
    } catch (error) {
        showNotification('Error al cargar usuarios', 'error');
    }
}

function renderUsersList(users) {
    const usersList = document.getElementById('usersList');
    if (!usersList) return;
    
    usersList.innerHTML = users.map(user => `
        <div class="admin__user-item">
            <div class="admin__user-info">
                <h3>${user.name}</h3>
                <p>${user.email}</p>
            </div>
            <div class="admin__item-actions">
                <button class="button" onclick="editUser(${user.id})">Editar</button>
                <button class="button button--secondary" onclick="deleteUser(${user.id})">Eliminar</button>
            </div>
        </div>
    `).join('');
}

async function editUser(userId) {
    // Implementar edición de usuario
}

async function deleteUser(userId) {
    if (!confirm('¿Estás seguro de que quieres eliminar este usuario?')) return;

    try {
        const response = await fetch(`${USERS_URL}/${userId}`, {
            method: 'DELETE'
        });

        if (!response.ok) throw new Error('Error al eliminar usuario');

        showNotification('Usuario eliminado correctamente', 'success');
        loadUsers();
    } catch (error) {
        showNotification('Error al eliminar usuario: ' + error.message, 'error');
    }
}

// Funciones de gestión de productos
async function showAddProductForm() {
    // Solo permitir si es admin
    if (!currentUser || currentUser.role !== 'admin') {
        showNotification('Acceso denegado', 'error');
        return;
    }
    
    const modal = document.getElementById('productFormModal');
    const form = document.getElementById('productForm');
    const categorySelect = document.getElementById('productCategory');
    
    // Limpiar el formulario
    form.reset();
    
    // Cargar categorías en el select
    try {
        const response = await fetch(CATEGORIES_URL);
        const categories = await response.json();
        categorySelect.innerHTML = categories.map(category => 
            `<option value="${category.id}">${category.name}</option>`
        ).join('');
    } catch (error) {
        console.error('Error loading categories:', error);
    }
    
    modal.classList.remove('hidden');
    modal.style.display = 'flex';
    modal.classList.add('show');
}

async function handleProductSubmit(event) {
    event.preventDefault();
    const formData = {
        title: document.getElementById('productTitle').value,
        price: Number(document.getElementById('productPrice').value),
        description: document.getElementById('productDescription').value,
        images: document.getElementById('productImages').value.split(',').map(url => url.trim()),
        categoryId: Number(document.getElementById('productCategory').value)
    };

    try {
        const response = await fetch(PRODUCTS_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (!response.ok) throw new Error('Error al crear producto');

        showNotification('Producto creado correctamente', 'success');
        closeProductForm();
        loadProducts(currentCategory);
    } catch (error) {
        showNotification('Error al crear producto: ' + error.message, 'error');
    }
}

function closeProductForm() {
    const modal = document.getElementById('productFormModal');
    modal.classList.remove('show');
    modal.classList.add('hidden');
    modal.style.display = 'none';
}

// Funciones de UI
function showAdminPanel() {
    if (!currentUser || currentUser.role !== 'admin') {
        showNotification('Acceso denegado', 'error');
        return;
    }

    hideAllSections();
    adminPanel.classList.remove('hidden');
    loadUsers();
}

function showAdminTab(tab) {
    const adminTabs = document.querySelectorAll('.admin__tab');
    const adminContents = document.querySelectorAll('.admin__content');

    adminTabs.forEach(tabElement => tabElement.classList.remove('active'));
    adminContents.forEach(content => content.classList.add('hidden'));

    const selectedTab = document.getElementById(`${tab}Tab`);
    if (selectedTab) selectedTab.classList.add('active');

    const selectedContent = document.getElementById(`${tab}Management`);
    if (selectedContent) selectedContent.classList.remove('hidden');

    if (tab === 'users') {
        loadUsers();
    } else {
        loadProducts();
    }
}

// Email functions
async function sendWelcomeEmail(email, name) {
    try {
        await emailjs.send(
            "TU_SERVICE_ID",
            "TU_TEMPLATE_ID",
            {
                to_email: email,
                to_name: name,
                message: "¡Bienvenido a nuestra tienda!"
            }
        );
    } catch (error) {
        console.error('Error sending welcome email:', error);
    }
}

async function sendOrderConfirmationEmail(orderDetails) {
    try {
        await emailjs.send(
            "TU_SERVICE_ID",
            "TU_TEMPLATE_ID",
            {
                to_email: currentUser.email,
                to_name: currentUser.name,
                order_details: orderDetails
            }
        );
    } catch (error) {
        console.error('Error sending order confirmation:', error);
    }
}

// Modificar funciones existentes para requerir autenticación
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

async function checkout() {
    if (!currentUser) {
        showNotification('Debes iniciar sesión para realizar la compra', 'error');
        showAuth();
        return;
    }

    if (cart.length === 0) {
        showNotification('El carrito está vacío', 'error');
        return;
    }
    
    try {
        const order = {
            id: Date.now(),
            userId: currentUser.id,
            date: new Date(),
            products: cart,
            total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)
        };

        // Guardar el pedido
        orders.push(order);
        saveOrdersToStorage();

        // Limpiar el carrito
        cart = [];
        saveCartToStorage();
        updateCartCount();

        showNotification('¡Compra realizada con éxito!', 'success');
        showOrders();
    } catch (error) {
        console.error('Error al procesar la compra:', error);
        showNotification('Error al procesar la compra', 'error');
    }
}

// Funciones de utilidad
function showNotification(message, type = 'success') {
    const notificationContainer = document.getElementById('notificationContainer');
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    notificationContainer.appendChild(notification);
    
    // Mostrar la notificación
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    // Eliminar la notificación después de 3 segundos
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notificationContainer.removeChild(notification);
        }, 300);
    }, 3000);
}

// Funciones de carga de datos
async function loadCategories() {
    try {
        const response = await fetch(CATEGORIES_URL);
        const allCategories = await response.json();
        // Filtrar solo las primeras 5 categorías
        const categories = allCategories.slice(0, 5);
        renderCategories(categories);
        setTimeout(() => {
            if (preloader) preloader.style.display = 'none';
        }, 1000);
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
    if (!productsContainer) return;
    productsContainer.innerHTML = '';
    renderNextBatchOfProducts();
}

function renderNextBatchOfProducts() {
    if (!hasMoreProducts || isLoading) return;

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

    // Agregar el loader si hay más productos
    updateLoader();
}

function updateLoader() {
    let loader = document.getElementById('products-loader');
    if (!loader) {
        loader = document.createElement('div');
        loader.id = 'products-loader';
        loader.className = 'products-loader';
        loader.innerHTML = '<div class="loader-spinner"></div>';
        productsContainer.after(loader);
    }
    
    loader.style.display = hasMoreProducts ? 'flex' : 'none';
}

function setupInfiniteScroll() {
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && hasMoreProducts && !isLoading) {
                renderNextBatchOfProducts();
            }
        });
    }, options);

    // Observar el loader
    const loader = document.getElementById('products-loader');
    if (loader) {
        observer.observe(loader);
    }
}

async function showProductDetails(productId) {
    try {
        const response = await fetch(`${PRODUCTS_URL}/${productId}`);
        const product = await response.json();
        currentProduct = product;
        
        const productDetailContent = document.querySelector('.product-detail__content');
        productDetailContent.innerHTML = `
            <div class="product-detail__images">
                <img src="${product.images[0]}" alt="${product.title}" id="mainProductImage" onerror="this.src='https://via.placeholder.com/600'">
                <div class="product-detail__thumbnails">
                    ${product.images.map((image, index) => `
                        <div class="product-detail__thumbnail ${index === 0 ? 'active' : ''}" onclick="changeMainImage('${image}', this)">
                            <img src="${image}" alt="${product.title}" onerror="this.src='https://via.placeholder.com/150'">
                        </div>
                    `).join('')}
                </div>
            </div>
            <div class="product-detail__info">
                <h2>${product.title}</h2>
                <p class="product-detail__price">$${product.price}</p>
                <p class="product-detail__description">${product.description}</p>
                <div class="product-detail__quantity">
                    <button onclick="decrementQuantity()">-</button>
                    <input type="number" id="quantity" value="1" min="1" max="99">
                    <button onclick="incrementQuantity()">+</button>
                </div>
                <button class="add-to-cart-btn" onclick="addToCart()">
                    Añadir al carrito
                </button>
            </div>
        `;
        
        hideAllSections();
        productDetailSection.classList.remove('hidden');
        
        // Añadir event listeners para las miniaturas
        document.querySelectorAll('.product-detail__thumbnail').forEach(thumbnail => {
            thumbnail.addEventListener('click', function() {
                document.querySelectorAll('.product-detail__thumbnail').forEach(t => t.classList.remove('active'));
                this.classList.add('active');
            });
        });
        
    } catch (error) {
        console.error('Error loading product details:', error);
        showNotification('Error al cargar los detalles del producto', 'error');
    }
}

function changeMainImage(imageUrl, thumbnailElement) {
    const mainImage = document.getElementById('mainProductImage');
    mainImage.src = imageUrl;
    
    // Actualizar la clase active
    document.querySelectorAll('.product-detail__thumbnail').forEach(thumbnail => {
        thumbnail.classList.remove('active');
    });
    thumbnailElement.classList.add('active');
}

function closeProductDetail() {
    productDetailSection.classList.add('hidden');
    showProducts();
}

// Funciones de categoría y productos
function selectCategory(categoryId) {
    currentCategory = categoryId;
    loadProducts(categoryId);
    showProducts();
}

// Funciones de cantidad
function incrementQuantity() {
    const quantityInput = document.getElementById('quantity');
    if (quantityInput.value < 99) {
        quantityInput.value = parseInt(quantityInput.value) + 1;
    }
}

function decrementQuantity() {
    const quantityInput = document.getElementById('quantity');
    if (quantityInput.value > 1) {
        quantityInput.value = parseInt(quantityInput.value) - 1;
    }
}

// Funciones del carrito
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCartToStorage();
    updateCartCount();
    renderCart();
    showNotification('Producto eliminado del carrito', 'success');
}

function updateCartCount() {
    if (!cartCount) return;
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = totalItems;
}

function renderCart() {
    if (!cartContainer || !cartTotal) return;

    if (cart.length === 0) {
        cartContainer.innerHTML = '<p>No hay productos en el carrito</p>';
        cartTotal.textContent = '$0';
        return;
    }
    
    cartContainer.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.title}" class="cart-item__image" onerror="this.src='https://via.placeholder.com/100'">
            <div class="cart-item__info">
                <h3 class="cart-item__title">${item.title}</h3>
                <p class="cart-item__price">$${item.price}</p>
            </div>
            <div class="cart-item__quantity">
                <button onclick="updateCartItemQuantity(${item.id}, ${item.quantity - 1})">-</button>
                <span>${item.quantity}</span>
                <button onclick="updateCartItemQuantity(${item.id}, ${item.quantity + 1})">+</button>
            </div>
            <button class="cart-item__remove" onclick="removeFromCart(${item.id})">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    `).join('');

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = `$${total}`;
}

function updateCartItemQuantity(productId, newQuantity) {
    if (newQuantity < 1) {
        removeFromCart(productId);
        return;
    }
    
    const itemIndex = cart.findIndex(item => item.id === productId);
    if (itemIndex !== -1) {
        cart[itemIndex].quantity = newQuantity;
        saveCartToStorage();
        updateCartCount();
        renderCart();
    }
}

function showOrders() {
    if (!currentUser) {
        showNotification('Debes iniciar sesión para ver tus pedidos', 'error');
        showAuth();
        return;
    }
    hideAllSections();
    document.getElementById('orders').classList.remove('hidden');
    renderOrders();
}

function renderOrders() {
    const ordersContainer = document.getElementById('ordersContainer');
    if (!ordersContainer) return;

    const userOrders = orders.filter(order => order.userId === currentUser.id);

    if (userOrders.length === 0) {
        ordersContainer.innerHTML = '<p class="orders__empty">No tienes pedidos realizados</p>';
        return;
    }

    ordersContainer.innerHTML = userOrders.map(order => `
        <div class="order__item">
            <div class="order__header">
                <span class="order__date">${new Date(order.date).toLocaleDateString()}</span>
                <span class="order__total">Total: $${order.total}</span>
            </div>
            <div class="order__products">
                ${order.products.map(product => `
                    <div class="order__product">
                        <img src="${product.image}" alt="${product.title}" class="order__product-image">
                        <div class="order__product-info">
                            <h4>${product.title}</h4>
                            <p>Cantidad: ${product.quantity}</p>
                            <p>Precio: $${product.price}</p>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');
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

// Función para mostrar los pedidos
function showOrders() {
    if (!currentUser) {
        showNotification('Por favor, inicia sesión para ver tus pedidos', 'error');
        return;
    }

    // Ocultar otras secciones
    hideAllSections();
    showProducts();
    
    // Obtener pedidos del localStorage
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    const userOrders = orders.filter(order => order.userId === currentUser.id);

    // Mostrar los pedidos en la sección de productos
    const productsContainer = document.getElementById('productsContainer');
    if (!productsContainer) return;

    if (userOrders.length === 0) {
        productsContainer.innerHTML = '<p class="no-orders">No tienes pedidos realizados.</p>';
        return;
    }

    productsContainer.innerHTML = userOrders.map(order => `
        <div class="product-card order-card">
            <div class="product-card__content">
                <h3>Pedido #${order.id}</h3>
                <p>Fecha: ${new Date(order.date).toLocaleDateString()}</p>
                <div class="order-items">
                    ${order.items.map(item => `
                        <div class="order-item">
                            <span>${item.name}</span>
                            <span>x${item.quantity}</span>
                            <span>$${(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                    `).join('')}
                </div>
                <p class="order-total">Total: $${order.total.toFixed(2)}</p>
            </div>
        </div>
    `).join('');
}

// Función para guardar un nuevo pedido
function saveOrder(orderItems, total) {
    if (!currentUser) return null;

    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    const newOrder = {
        id: Date.now(),
        userId: currentUser.id,
        date: new Date().toISOString(),
        items: orderItems,
        total: total
    };

    orders.push(newOrder);
    localStorage.setItem('orders', JSON.stringify(orders));
    return newOrder;
}

// Función para ocultar todas las secciones
function hideAllSections() {
    const sections = [
        'hero',
        'categories',
        'products',
        'cart',
        'auth',
        'adminPanel'
    ];
    
    sections.forEach(sectionId => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.style.display = 'none';
        }
    });
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}
