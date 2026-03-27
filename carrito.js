// Lógica del carrito: almacenamiento, totales y helpers de UI (toast)
(function (window) {
    const STORAGE_KEY = 'novaCart_v1';

    const load = () => {
        try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || []; }
        catch { return []; }
    };

    const save = items => localStorage.setItem(STORAGE_KEY, JSON.stringify(items));

    const findIndex = (items, item) =>
        items.findIndex(i => i.name === item.name && i.price === item.price);

    const addItem = item => {
        const items = load();
        const idx = findIndex(items, item);
        if (idx >= 0) items[idx].quantity = (items[idx].quantity || 1) + (item.quantity || 1);
        else items.push(Object.assign({ quantity: 1 }, item));
        save(items);
        showToast(`Se agregó "${item.name}" al carrito`);
        updateBadge();
        return items;
    };

    const getItems = () => load();

    const removeItem = index => {
        const items = load();
        if (index >= 0 && index < items.length) items.splice(index, 1);
        save(items);
        updateBadge();
        return items;
    };

    const clear = () => { save([]); updateBadge(); };

    const getSubtotal = () => load().reduce((s, i) => s + (parseFloat(i.price || 0) * (i.quantity || 1)), 0);
    const getTaxRate = () => 0.15;
    const getTax = () => getSubtotal() * getTaxRate();
    const getTotal = () => getSubtotal() + getTax();
    const countItems = () => load().reduce((s, i) => s + (i.quantity || 1), 0);

    // UI helpers
    function showToast(message, timeout = 2200) {
        const t = document.getElementById('toast');
        if (!t) return;
        t.textContent = message;
        t.classList.add('show');
        clearTimeout(t._hideTimer);
        t._hideTimer = setTimeout(() => t.classList.remove('show'), timeout);
    }

    function updateBadge() {
        const count = countItems();
        const badge = document.getElementById('cartBadge');
        if (badge) {
            badge.textContent = count > 0 ? count : '';
        }
    }

    function renderCartHTML() {
        const items = getItems();
        if (!items.length) {
            return `
                <section class="product-section">
                    <h2>Mi carrito</h2>
                    <p>Tu carrito está vacío.</p>
                </section>
            `;
        }
        const rows = items.map((it, idx) => `
            <div class="cart-row">
                <div class="cart-img"><img src="${it.img || ''}" alt="${it.name}" /></div>
                <div class="cart-info">
                    <h4>${it.name}</h4>
                    <p class="cart-desc">${it.desc || ''}</p>
                </div>
                <div class="cart-qty"><span>${it.quantity || 1}×</span></div>
                <div class="cart-price">$${(parseFloat(it.price) || 0).toFixed(2)}</div>
                <div class="cart-actions"><button data-remove="${idx}" class="btn-remove">Eliminar</button></div>
            </div>
        `).join('');

        const subtotal = getSubtotal();
        const tax = getTax();
        const total = getTotal();

        return `
            <section class="product-section">
                <h2>Mi carrito</h2>
                <div class="cart-list">${rows}</div>

                <div class="cart-totals">
                    <div class="cart-totals-row"><div>Subtotal</div><div class="cart-subtotal">$${subtotal.toFixed(2)}</div></div>
                    <div class="cart-totals-row"><div>IVA (${Math.round(getTaxRate()*100)}%)</div><div class="cart-tax">$${tax.toFixed(2)}</div></div>
                    <div class="cart-totals-row cart-totals-total"><div>Total a pagar</div><div class="cart-total">$${total.toFixed(2)}</div></div>
                </div>

                <div class="cart-actions-row" style="margin-top:16px;">
                    <button id="checkoutBtn" class="btn-primary">Ir a pagar</button>
                    <button id="clearCartBtn" class="btn-secondary" style="margin-left:12px;">Vaciar carrito</button>
                </div>
            </section>
        `;
    }

    window.Cart = {
        addItem,
        getItems,
        removeItem,
        clear,
        getSubtotal,
        getTax,
        getTotal,
        renderCartHTML,
        showToast,
        updateBadge
    };

    // Inicializar badge al cargar
    document.addEventListener('DOMContentLoaded', updateBadge);
})(window);