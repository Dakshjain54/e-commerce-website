// Updated JavaScript with Complete Cart Functionality
document.addEventListener('DOMContentLoaded', function () {
    // Header scroll effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Product data
    const products = [
        {
            id: 1,
            title: "Wireless Headphones",
            category: "electronics",
            price: 99.99,
            originalPrice: 129.99,
            image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            rating: 4.5,
            badge: "sale"
        },
        {
            id: 2,
            title: "White T-Shirt",
            category: "clothing",
            price: 24.99,
            originalPrice: 29.99,
            image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
            rating: 4.2,
            badge: null
        },
        {
            id: 3,
            title: "Smart Watch",
            category: "electronics",
            price: 199.99,
            originalPrice: 249.99,
            image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1099&q=80",
            rating: 4.7,
            badge: "new"
        },
        {
            id: 4,
            title: "Designer Sunglasses",
            category: "accessories",
            price: 89.99,
            originalPrice: 120.00,
            image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
            rating: 4.3,
            badge: "sale"
        },
        {
            id: 5,
            title: "Nike Shoes",
            category: "clothing",
            price: 79.99,
            originalPrice: 99.99,
            image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            rating: 4.8,
            badge: null
        },
        {
            id: 6,
            title: "Apple EarPods",
            category: "electronics",
            price: 179.99,
            originalPrice: 189.99,
            image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=785&q=80",
            rating: 4.1,
            badge: "sale"
        },
        {
            id: 7,
            title: "Leather Handbag",
            category: "accessories",
            price: 49.99,
            originalPrice: 59.99,
            image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=738&q=80",
            rating: 4.4,
            badge: null
        },
        {
            id: 8,
            title: "Denim Jacket",
            category: "clothing",
            price: 69.99,
            originalPrice: 89.99,
            image: "https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            rating: 4.6,
            badge: "new"
        },

        {
            id: 9,
            title: "Fitness Tracker Band",
            category: "electronics",
            price: 49.99,
            originalPrice: 69.99,
            image: "https://images.unsplash.com/photo-1576243345690-4e4b79b63288?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            rating: 4.3,
            badge: "sale"
        },
        {
            id: 10,
            title: "Cotton Hoodie",
            category: "clothing",
            price: 39.99,
            originalPrice: 49.99,
            image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1072&q=80",
            rating: 4.2,
            badge: null
        },
        {
            id: 11,
            title: "Leather Backpack",
            category: "accessories",
            price: 89.99,
            originalPrice: 119.99,
            image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            rating: 4.7,
            badge: "new"
        },
        {
            id: 12,
            title: "Wireless Earbuds",
            category: "electronics",
            price: 79.99,
            originalPrice: 99.99,
            image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
            rating: 4.4,
            badge: "sale"
        },
        {
            id: 13,
            title: "Casual Sneakers",
            category: "clothing",
            price: 59.99,
            originalPrice: 79.99,
            image: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80",
            rating: 4.6,
            badge: null
        },
        {
            id: 14,
            title: "Smartphone Stand",
            category: "electronics",
            price: 19.99,
            originalPrice: 29.99,
            image: "https://ewartwoods.com/cdn/shop/products/E.1_8832fc37-0604-4a78-a92c-d272dd3bfac1.jpg?v=1705707133",
            rating: 4.1,
            badge: "sale"
        },
        {
            id: 15,
            title: "Silk Scarf",
            category: "accessories",
            price: 29.99,
            originalPrice: 39.99,
            image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=736&q=80",
            rating: 4.0,
            badge: null
        },
        {
            id: 16,
            title: "Gaming Mouse",
            category: "electronics",
            price: 49.99,
            originalPrice: 59.99,
            image: "https://images.unsplash.com/photo-1527814050087-3793815479db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=728&q=80",
            rating: 4.8,
            badge: "new"
        },
        {
            "id": 106,
            "title": "Casual Polo Shirt",
            "category": "clothing",
            "price": 24.99,
            "originalPrice": 34.99,
            "image": "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80",
            "rating": 4.4,
            "badge": "Trending"
        },
        {
            id: 18,
            title: "Stainless Steel Watch",
            category: "accessories",
            price: 129.99,
            originalPrice: 149.99,
            image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
            rating: 4.9,
            badge: "sale"
        },
        {
            id: 19,
            title: "Women's Summer Dress",
            category: "clothing",
            price: 49.99,
            originalPrice: 69.99,
            image: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=773&q=80",
            rating: 4.5,
            badge: "sale"
        },
        {
            id: 20,
            title: "Summer Hat",
            category: "accessories",
            price: 22.99,
            originalPrice: 29.99,
            image: "https://images.unsplash.com/photo-1595642527925-4d41cb781653?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            rating: 4.3,
            badge: "sale"
        }



    ];

    // Cart functionality
    let cart = [];
    const cartCount = document.querySelector('.cart-count');
    const cartIcon = document.querySelector('.cart-icon');

    // Create cart modal elements
    const cartModal = document.createElement('div');
    cartModal.className = 'cart-modal';
    cartModal.innerHTML = `
        <div class="cart-modal-content">
            <div class="cart-modal-header">
                <h3>Your Cart</h3>
                <span class="close-cart">&times;</span>
            </div>
            <div class="cart-items-container">
                <div class="cart-items-list"></div>
                <div class="cart-summary">
                    <div class="cart-totals">
                        <div class="cart-subtotal">
                            <span>Subtotal:</span>
                            <span class="subtotal-amount">$0.00</span>
                        </div>
                        <div class="cart-tax">
                            <span>Tax (10%):</span>
                            <span class="tax-amount">$0.00</span>
                        </div>
                        <div class="cart-total">
                            <span>Total:</span>
                            <span class="total-amount">$0.00</span>
                        </div>
                    </div>
                    <button class="checkout-btn">Proceed to Checkout</button>
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(cartModal);

    // Create checkout modal
    const checkoutModal = document.createElement('div');
    checkoutModal.className = 'checkout-modal';
    checkoutModal.innerHTML = `
    <div class="checkout-modal-content">
        <div class="checkout-modal-header">
            <h3>Checkout</h3>
            <span class="close-checkout">&times;</span>
        </div>
        <div class="checkout-steps">
            <div class="checkout-step active" data-step="1">Cart Review</div>
            <div class="checkout-step" data-step="2">Payment</div>
            <div class="checkout-step" data-step="3">Confirmation</div>
        </div>
        <div class="checkout-content">
            <div class="checkout-cart-review">
                <!-- Cart items will be inserted here -->
            </div>
            <div class="checkout-payment" style="display:none;">
                <div class="payment-options">
                    <div class="payment-method selected" data-method="card">
                        <i class="fas fa-credit-card"></i>
                        <span>Credit/Debit Card</span>
                    </div>
                    <div class="payment-method" data-method="gpay">
                        <i class="fab fa-google-pay"></i>
                        <span>Google Pay</span>
                    </div>
                    <div class="payment-method" data-method="phonepe">
                        <i class="fab fa-amazon-pay"></i>
                        <span>Amazon Pay</span>
                    </div>
                    <div class="payment-method" data-method="cod">
                        <i class="fas fa-money-bill-wave"></i>
                        <span>Cash on Delivery</span>
                    </div>
                </div>
                <div class="payment-form" id="card-payment-form">
                    <form id="payment-form">
                        <div class="form-group">
                            <label for="card-name">Name on Card</label>
                            <input type="text" id="card-name" required>
                        </div>
                        <div class="form-group">
                            <label for="card-number">Card Number</label>
                            <input type="text" id="card-number" placeholder="1234 5678 9012 3456" required>
                        </div>
                        <div class="form-row">
                            <div class="form-group">
                                <label for="card-expiry">Expiry Date</label>
                                <input type="text" id="card-expiry" placeholder="MM/YY" required>
                            </div>
                            <div class="form-group">
                                <label for="card-cvc">CVC</label>
                                <input type="text" id="card-cvc" placeholder="123" required>
                            </div>
                        </div>
                        <button type="submit" class="submit-payment">Pay Now</button>
                    </form>
                </div>
                <div class="payment-form" id="upi-payment-form" style="display:none;">
                    <form id="upi-payment-form">
                        <div class="form-group">
                            <label for="upi-id">UPI ID</label>
                            <input type="text" id="upi-id" placeholder="yourname@upi" required>
                        </div>
                        <button type="submit" class="submit-payment">Pay via UPI</button>
                    </form>
                </div>
                <div class="payment-form" id="cod-payment-form" style="display:none;">
                    <div class="cod-message">
                        <i class="fas fa-info-circle"></i>
                        <p>Pay cash when your order is delivered. Additional charges may apply.</p>
                    </div>
                    <button type="button" class="submit-payment cod-btn">Place Order</button>
                </div>
            </div>
            <div class="checkout-confirmation" style="display:none;">
                <div class="confirmation-icon">
                    <i class="fas fa-check-circle"></i>
                </div>
                <h3>Order Confirmed!</h3>
                <p>Thank you for your purchase. Your order has been received.</p>
                <div class="order-details">
                    <!-- Order details will be inserted here -->
                </div>
                <button class="continue-shopping">Continue Shopping</button>
            </div>
        </div>
    </div>
`;
    document.body.appendChild(checkoutModal);

    // Open cart modal when cart icon is clicked
    cartIcon.addEventListener('click', function () {
        cartModal.style.display = 'block';
        updateCartModal();
    });

    // Close cart modal
    cartModal.querySelector('.close-cart').addEventListener('click', function () {
        cartModal.style.display = 'none';
    });

    // Close when clicking outside modal
    window.addEventListener('click', function (e) {
        if (e.target === cartModal) {
            cartModal.style.display = 'none';
        }
        if (e.target === checkoutModal) {
            checkoutModal.style.display = 'none';
        }
    });

    // Proceed to checkout
    cartModal.querySelector('.checkout-btn').addEventListener('click', function () {
        cartModal.style.display = 'none';
        checkoutModal.style.display = 'block';
        updateCheckoutModal();
    });

    // Checkout navigation
    const checkoutSteps = checkoutModal.querySelectorAll('.checkout-step');
    checkoutSteps.forEach(step => {
        step.addEventListener('click', function () {
            const stepNumber = this.dataset.step;
            navigateToCheckoutStep(stepNumber);
        });
    });

    // Payment form submission
    document.getElementById('payment-form')?.addEventListener('submit', function (e) {
        e.preventDefault();
        processPayment();
    });
    // Payment method selection
    const paymentMethods = checkoutModal.querySelectorAll('.payment-method');
    paymentMethods.forEach(method => {
        method.addEventListener('click', function () {
            paymentMethods.forEach(m => m.classList.remove('selected'));
            this.classList.add('selected');

            // Hide all payment forms
            document.querySelectorAll('.payment-form').forEach(form => {
                form.style.display = 'none';
            });

            // Show the selected payment form
            const methodType = this.dataset.method;
            if (methodType === 'gpay' || methodType === 'phonepe') {
                document.getElementById('upi-payment-form').style.display = 'block';
            } else if (methodType === 'cod') {
                document.getElementById('cod-payment-form').style.display = 'block';
            } else {
                document.getElementById('card-payment-form').style.display = 'block';
            }
        });
    });

    // Continue shopping button
    checkoutModal.querySelector('.continue-shopping')?.addEventListener('click', function () {
        checkoutModal.style.display = 'none';
    });

    // Close checkout modal
    checkoutModal.querySelector('.close-checkout').addEventListener('click', function () {
        checkoutModal.style.display = 'none';
    });

    // Display products
    const productGrid = document.querySelector('.product-grid');
    const filterButtons = document.querySelectorAll('.filter-btn');

    function displayProducts(filter = 'all') {
        productGrid.innerHTML = '';

        const filteredProducts = filter === 'all'
            ? products
            : products.filter(product => product.category === filter);

        filteredProducts.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.innerHTML = `
                ${product.badge ? `<span class="product-badge ${product.badge}">${product.badge === 'sale' ? 'Sale' : 'New'}</span>` : ''}
                <div class="product-image">
                    <img src="${product.image}" alt="${product.title}">
                </div>
                <div class="product-info">
                    <span class="product-category">${product.category.charAt(0).toUpperCase() + product.category.slice(1)}</span>
                    <h3 class="product-title">${product.title}</h3>
                    <div class="product-price">
                        <span class="current-price">$${product.price.toFixed(2)}</span>
                        ${product.originalPrice ? `<span class="original-price">$${product.originalPrice.toFixed(2)}</span>` : ''}
                    </div>
                    <div class="product-rating">
                        ${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5 - Math.floor(product.rating))} (${product.rating})
                    </div>
                    <button class="add-to-cart" data-id="${product.id}">
                        <i class="fas fa-shopping-cart"></i> Add to Cart
                    </button>
                </div>
            `;
            productGrid.appendChild(productCard);
        });

        // Add event listeners to the new buttons
        document.querySelectorAll('.add-to-cart').forEach(button => {
            button.addEventListener('click', addToCart);
        });
    }

    // Filter products
    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            displayProducts(this.dataset.filter);
        });
    });

    // Add to cart function
    function addToCart(e) {
        const productId = parseInt(e.target.closest('.add-to-cart').dataset.id);
        const product = products.find(p => p.id === productId);

        const existingItem = cart.find(item => item.id === productId);

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                ...product,
                quantity: 1
            });
        }

        updateCartCount();

        // Animation effect
        const button = e.target.closest('.add-to-cart');
        button.innerHTML = '<i class="fas fa-check"></i> Added!';
        button.style.backgroundColor = '#00b894';

        setTimeout(() => {
            button.innerHTML = '<i class="fas fa-shopping-cart"></i> Add to Cart';
            button.style.backgroundColor = '';
        }, 1500);
    }

    // Update cart count
    function updateCartCount() {
        const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
        cartCount.textContent = totalItems;

        // Animation
        cartCount.style.transform = 'scale(1.5)';
        setTimeout(() => {
            cartCount.style.transform = 'scale(1)';
        }, 300);
    }

    // Update cart modal
    function updateCartModal() {
        const cartItemsList = cartModal.querySelector('.cart-items-list');
        const subtotalAmount = cartModal.querySelector('.subtotal-amount');
        const taxAmount = cartModal.querySelector('.tax-amount');
        const totalAmount = cartModal.querySelector('.total-amount');

        if (cart.length === 0) {
            cartItemsList.innerHTML = '<div class="empty-cart">Your cart is empty</div>';
            subtotalAmount.textContent = '$0.00';
            taxAmount.textContent = '$0.00';
            totalAmount.textContent = '$0.00';
            return;
        }

        cartItemsList.innerHTML = '';

        let subtotal = 0;

        cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            subtotal += itemTotal;

            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <div class="cart-item-image">
                    <img src="${item.image}" alt="${item.title}">
                </div>
                <div class="cart-item-details">
                    <h4>${item.title}</h4>
                    <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                    <div class="cart-item-quantity">
                        <button class="quantity-btn minus" data-id="${item.id}">-</button>
                        <span class="quantity">${item.quantity}</span>
                        <button class="quantity-btn plus" data-id="${item.id}">+</button>
                    </div>
                </div>
                <div class="cart-item-total">$${itemTotal.toFixed(2)}</div>
                <button class="remove-item" data-id="${item.id}">&times;</button>
            `;
            cartItemsList.appendChild(cartItem);
        });

        const tax = subtotal * 0.1; // 10% tax
        const total = subtotal + tax;

        subtotalAmount.textContent = `$${subtotal.toFixed(2)}`;
        taxAmount.textContent = `$${tax.toFixed(2)}`;
        totalAmount.textContent = `$${total.toFixed(2)}`;

        // Add event listeners to quantity buttons
        cartModal.querySelectorAll('.quantity-btn').forEach(button => {
            button.addEventListener('click', function () {
                const productId = parseInt(this.dataset.id);
                const isPlus = this.classList.contains('plus');
                updateCartItemQuantity(productId, isPlus);
            });
        });

        // Add event listeners to remove buttons
        cartModal.querySelectorAll('.remove-item').forEach(button => {
            button.addEventListener('click', function () {
                const productId = parseInt(this.dataset.id);
                removeCartItem(productId);
            });
        });
    }

    // Update cart item quantity
    function updateCartItemQuantity(productId, isPlus) {
        const item = cart.find(item => item.id === productId);

        if (item) {
            if (isPlus) {
                item.quantity += 1;
            } else {
                if (item.quantity > 1) {
                    item.quantity -= 1;
                } else {
                    // Remove item if quantity reaches 0
                    cart = cart.filter(item => item.id !== productId);
                }
            }

            updateCartCount();
            updateCartModal();
        }
    }

    // Remove cart item
    function removeCartItem(productId) {
        cart = cart.filter(item => item.id !== productId);
        updateCartCount();
        updateCartModal();
    }

    // Update checkout modal
    function updateCheckoutModal() {
        const cartReview = checkoutModal.querySelector('.checkout-cart-review');
        const orderDetails = checkoutModal.querySelector('.order-details');

        if (cart.length === 0) {
            cartReview.innerHTML = '<div class="empty-cart">Your cart is empty</div>';
            return;
        }

        let cartHTML = '';
        let detailsHTML = '';
        let subtotal = 0;

        cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            subtotal += itemTotal;

            cartHTML += `
                <div class="checkout-item">
                    <div class="checkout-item-image">
                        <img src="${item.image}" alt="${item.title}">
                    </div>
                    <div class="checkout-item-info">
                        <h4>${item.title}</h4>
                        <div class="checkout-item-price">$${item.price.toFixed(2)} × ${item.quantity}</div>
                    </div>
                    <div class="checkout-item-total">$${itemTotal.toFixed(2)}</div>
                </div>
            `;

            detailsHTML += `
                <div class="order-item">
                    <span>${item.title} (${item.quantity})</span>
                    <span>$${itemTotal.toFixed(2)}</span>
                </div>
            `;
        });

        const tax = subtotal * 0.1; // 10% tax
        const total = subtotal + tax;

        cartHTML += `
            <div class="checkout-totals">
                <div class="checkout-total-row">
                    <span>Subtotal:</span>
                    <span>$${subtotal.toFixed(2)}</span>
                </div>
                <div class="checkout-total-row">
                    <span>Tax (10%):</span>
                    <span>$${tax.toFixed(2)}</span>
                </div>
                <div class="checkout-total-row grand-total">
                    <span>Total:</span>
                    <span>$${total.toFixed(2)}</span>
                </div>
            </div>
        `;

        detailsHTML += `
            <div class="order-totals">
                <div class="order-total-row">
                    <span>Subtotal:</span>
                    <span>$${subtotal.toFixed(2)}</span>
                </div>
                <div class="order-total-row">
                    <span>Tax:</span>
                    <span>$${tax.toFixed(2)}</span>
                </div>
                <div class="order-total-row grand-total">
                    <span>Total:</span>
                    <span>$${total.toFixed(2)}</span>
                </div>
            </div>
        `;

        cartReview.innerHTML = cartHTML;
        orderDetails.innerHTML = detailsHTML;

        // Start at step 1
        navigateToCheckoutStep('1');
    }

    // Navigate to checkout step
    function navigateToCheckoutStep(stepNumber) {
        const steps = checkoutModal.querySelectorAll('.checkout-step');
        const cartReview = checkoutModal.querySelector('.checkout-cart-review');
        const paymentForm = checkoutModal.querySelector('.checkout-payment');
        const confirmation = checkoutModal.querySelector('.checkout-confirmation');

        steps.forEach(step => {
            if (step.dataset.step === stepNumber) {
                step.classList.add('active');
            } else {
                step.classList.remove('active');
            }
        });

        switch (stepNumber) {
            case '1':
                cartReview.style.display = 'block';
                paymentForm.style.display = 'none';
                confirmation.style.display = 'none';
                break;
            case '2':
                cartReview.style.display = 'none';
                paymentForm.style.display = 'block';
                confirmation.style.display = 'none';
                break;
            case '3':
                cartReview.style.display = 'none';
                paymentForm.style.display = 'none';
                confirmation.style.display = 'block';
                break;
        }
    }

    // Process payment
    function processPayment(method) {
        // Get the appropriate button
        let submitBtn;
        let isValid = true;

        switch (method) {
            case 'card':
                submitBtn = checkoutModal.querySelector('#payment-form .submit-payment');
                // Validate card details
                const cardName = document.getElementById('card-name').value;
                const cardNumber = document.getElementById('card-number').value;
                const cardExpiry = document.getElementById('card-expiry').value;
                const cardCvc = document.getElementById('card-cvc').value;

                if (!cardName || !cardNumber || !cardExpiry || !cardCvc) {
                    alert('Please fill in all card details');
                    isValid = false;
                }
                break;

            case 'upi':
                submitBtn = checkoutModal.querySelector('#upi-payment-form .submit-payment');
                // Validate UPI ID
                const upiId = document.getElementById('upi-id').value;
                if (!upiId) {
                    alert('Please enter your UPI ID');
                    isValid = false;
                } else if (!upiId.includes('@')) {
                    alert('Please enter a valid UPI ID (e.g., yourname@upi)');
                    isValid = false;
                }
                break;

            case 'cod':
                submitBtn = checkoutModal.querySelector('.cod-btn');
                break;
        }

        if (!isValid) return;

        // Show loading state
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
        submitBtn.disabled = true;

        // Simulate payment processing (2 seconds delay)
        setTimeout(() => {
            // For demo purposes, we'll consider all payments successful
            // In real app, you would check payment success first

            // Navigate to confirmation step
            navigateToCheckoutStep('3');

            // Clear cart after successful payment
            cart = [];
            updateCartCount();

            // Update confirmation message based on payment method
            const confirmationMessage = checkoutModal.querySelector('.checkout-confirmation p');
            if (method === 'cod') {
                confirmationMessage.textContent = 'Thank you for your order! Pay ₹' + calculateTotal() + ' in cash when your order is delivered.';
            } else {
                confirmationMessage.textContent = 'Payment successful! Your order has been confirmed.';
            }

            // Reset button state
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }, 2000);
    }

    // Helper function to calculate total
    function calculateTotal() {
        let subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        let tax = subtotal * 0.1; // 10% tax
        return (subtotal + tax).toFixed(2);
    }

    // Make sure all payment methods trigger processPayment
    document.getElementById('payment-form')?.addEventListener('submit', function (e) {
        e.preventDefault();
        processPayment('card');
    });

    document.getElementById('upi-payment-form')?.addEventListener('submit', function (e) {
        e.preventDefault();
        processPayment('upi');
    });

    checkoutModal.querySelector('.cod-btn')?.addEventListener('click', function () {
        processPayment('cod');
    });

    // Newsletter form
    const newsletterForm = document.querySelector('.newsletter-form');
    newsletterForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const emailInput = this.querySelector('input');
        const email = emailInput.value.trim();

        if (email) {
            // In a real app, you would send this to your server
            alert(`Thank you for subscribing with ${email}!`);
            emailInput.value = '';
        }
    });

    // Initialize
    displayProducts();
});