const routes = {
    '#/': () => `
        <section class="hero">
            <div class="hero-content">
                <h1>NovaWear</h1>
                <a href="#/mujeres" class="hero-btn">Explorar Colección</a>
            </div>

            <div class="carousel" id="homeCarousel" data-auto="true" data-interval="1500" aria-roledescription="carousel">
                <div class="carousel-track">
                    <div class="carousel-slide"><img src="src/imagenes/logo/logoN3.png" alt="Street Armor"></div>
                    <div class="carousel-slide"><img src="src/imagenes/ropaHombre/img2.jfif" alt="Capa Urbana"></div>
                    <div class="carousel-slide"><img src="src/imagenes/ropaMujer/img99.jpg" alt="Urban Shell"></div>
                    <div class="carousel-slide"><img src="src/imagenes/logo/logoN3.png" alt="Street Armor"></div>
                </div>
                <button class="carousel-btn prev" aria-label="Anterior">‹</button>
                <button class="carousel-btn next" aria-label="Siguiente">›</button>
                <div class="carousel-indicators" role="tablist"></div>
            </div>

        </section>`,
    '#/mujeres': () => renderGrid('Mujeres', [
    { name: 'Urban Shell', img: 'src/imagenes/ropaMujer/img99.jpg', desc: 'Chaqueta ligera con acabado premium. El equilibrio entre protección y estilo callejero.', price: '48.50' },
    { name: 'Street Puffer', img: 'src/imagenes/ropaMujer/img98.jpg', desc: 'Máximo volumen, máximo estilo. Diseñada para destacar en la ciudad durante los días fríos.', price: '65.99' },
    { name: 'City Bomber', img: 'src/imagenes/ropaMujer/img97.jpg', desc: 'Corte clásico renovado con texturas modernas. Versatilidad pura para tu outfit diario.', price: '42.00' },
    { name: 'Neo-Windbreaker', img: 'src/imagenes/ropaMujer/img96.jpg', desc: 'Rompevientos de alta resistencia con detalles reflectantes. Estilo funcional sin límites.', price: '38.90' },
    { name: 'High-Rise Cargo', img: 'src/imagenes/ropaMujer/img95.jpg', desc: 'Corte de tiro alto con bolsillos tácticos. Comodidad urbana para un look imparable.', price: '35.00' },
    { name: 'Street Jogger', img: 'src/imagenes/ropaMujer/img94.jpg', desc: 'Ajuste relajado con terminaciones elásticas. La pieza clave para un estilo "athleisure".', price: '29.99' },
    { name: 'Wide Leg Denim', img: 'src/imagenes/ropaMujer/img93.jpg', desc: 'Jeans de bota ancha inspirados en los 90s. Durabilidad y tendencia en cada paso.', price: '44.50' },
    { name: 'Urban Slim Fit', img: 'src/imagenes/ropaMujer/img92.jpg', desc: 'Silueta estilizada con tejido flexible. Perfectos para moverte libre por la metrópolis.', price: '32.75' },
    { name: 'Cosmic Platform', img: 'src/imagenes/ropaMujer/img91.jpg', desc: 'Sneakers con plataforma track. Eleva tu altura y tu estilo con una pisada firme.', price: '75.00' },
    { name: 'Draft Low-Top', img: 'src/imagenes/ropaMujer/img90.jpg', desc: 'Zapatillas de perfil bajo con diseño minimalista. Elegancia urbana para el uso diario.', price: '58.50' },
    { name: 'Chunky Volt', img: 'src/imagenes/ropaMujer/img89.jpg', desc: 'Diseño robusto con tecnología de amortiguación. El motor de tus mejores pasos.', price: '82.99' },
    { name: 'Urban Essence', img: 'src/imagenes/ropaMujer/img88.jpg', desc: 'Botines de estilo urbano con acabados mate. Resistentes, ligeros y con toda la actitud.', price: '69.00' },
    { name: 'Nova Snapback', img: 'src/imagenes/ropaMujer/img87.jpg', desc: 'Visera plana y ajuste premium. El accesorio definitivo para tu identidad urbana.', price: '18.50' },
    { name: 'Soft Beanie', img: 'src/imagenes/ropaMujer/img86.jpg', desc: 'Gorro de punto suave con caída relajada. El toque de textura que tu look necesita.', price: '15.99' },
    { name: 'Street Curve', img: 'src/imagenes/ropaMujer/img85.jpg', desc: 'Gorra curva clásica con bordado minimalista. El detalle final que marca la diferencia.', price: '21.00' }
    ]),
    '#/hombres': () => renderGrid('Hombres', [
{ name: 'Capa Urbana', img: 'src/imagenes/ropaHombre/img2.jfif', desc: 'El toque final perfecto para cualquier outfit. Resistencia y estilo en una sola pieza.', price: '45.99' },
    { name: 'Street Armor', img: 'src/imagenes/ropaHombre/img3.jpg', desc: 'Diseñada para la ciudad. Corte moderno, comodidad absoluta y lista para el frío.', price: '59.50' },
    { name: 'Essential Outerwear', img: 'src/imagenes/ropaHombre/img4.jpg', desc: 'Versatilidad sin límites. La chaqueta que no puede faltar en tu rotación diaria.', price: '38.00' },
    { name: 'Move Free', img: 'src/imagenes/ropaHombre/img5.jpg', desc: 'Corte ergonómico diseñado para el ritmo de la calle. Comodidad que no sacrifica el estilo.', price: '28.99' },
    { name: 'Urban Fit', img: 'src/imagenes/ropaHombre/img6.jpg', desc: 'El equilibrio perfecto entre lo clásico y lo moderno. Durabilidad garantizada en cada paso.', price: '34.50' },
    { name: 'Daily Cargo', img: 'src/imagenes/ropaHombre/img7.jpg', desc: 'Bolsillos tácticos y silueta relajada. Funcionalidad pura para tu día a día.', price: '42.00' },
    { name: 'City Walkers', img: 'src/imagenes/ropaHombre/img8.jpg', desc: 'Tracción superior y diseño minimalista. Camina la ciudad con máxima amortiguación.', price: '78.00' },
    { name: 'Urban Sole', img: 'src/imagenes/ropaHombre/img9.jpg', desc: 'La fusión de tecnología y moda urbana. Estilo que destaca desde el suelo.', price: '65.99' },
    { name: 'All-Day Comfort', img: 'src/imagenes/ropaHombre/img10.jpg', desc: 'Ligeros, resistentes y con toda la actitud. El motor de tus mejores pasos.', price: '52.75' },
    { name: 'Signature Cap', img: 'src/imagenes/ropaHombre/img11.jpg', desc: 'El accesorio definitivo. Ajuste perfecto para completar tu identidad urbana.', price: '15.00' },
    { name: 'Urban Beanie', img: 'src/imagenes/ropaHombre/img12.jpg', desc: 'Estilo relajado y protección ideal. El toque de textura que tu look necesita.', price: '12.50' },
    { name: 'Street Identity', img: 'src/imagenes/ropaHombre/img13.jpg', desc: 'Más que un accesorio, es una declaración. Diseño ligero y transpirable.', price: '19.99' },
    { name: 'Final Touch', img: 'src/imagenes/ropaHombre/img14.jpg', desc: 'Ajuste premium y visera de alta calidad. El detalle que marca la diferencia.', price: '22.00' },
    { name: 'Urban Tech Bag', img: 'src/imagenes/ropaHombre/img15.jpg', desc: 'Seguridad y estilo para tus pertenencias. El complemento ideal para el explorador urbano.', price: '25.00' }
    ]),
    '#/mi-carrito': () => Cart.renderCartHTML(),
    '#/checkout': () => `
        <section class="product-section">
            <h2>Formulario de pago</h2>
            <form id="checkoutForm" class="checkout-form" autocomplete="off">
                <label>Titular de tarjeta
                    <input name="holder" type="text" placeholder="ejemplo: Maria Rodriguez" required />
                </label>

<label>Número de tarjeta
    <input 
   name="cardNumber" 
    type="text" 
    inputmode="numeric" 
    pattern="[0-9]{10}" 
    minlength="10"
    maxlength="10" 
    placeholder="Ingrese 10 numeros" 
    oninput="this.value = this.value.replace(/[^0-9]/g, '').substring(0, 10)"
    required
    />
</label>

                <div class="row">
                    <div class="col">
                        <label>Mes
                            <select name="expMonth" required>
                                <option value="">MM</option>
                                ${Array.from({length:12},(_,i)=>`<option value="${i+1}">${String(i+1).padStart(2,'0')}</option>`).join('')}
                            </select>
                        </label>
                    </div>
                    <div class="col">
                        <label>Año
                            <select name="expYear" required>
                                <option value="">AA</option>
                                ${Array.from({length:12},(_,i)=>`<option value="${new Date().getFullYear()+i}">${new Date().getFullYear()+i}</option>`).join('')}
                            </select>
                        </label>
                    </div>
                    <div class="col small">
                        <label>Código de seguridad
                            <input name="cvv" type="text" inputmode="numeric" pattern="\\d{3,4}" placeholder="CVV" required />
                        </label>
                    </div>
                </div>

                <div class="checkout-actions">
                    <button type="submit" class="btn-primary">Aceptar y finalizar</button>
                    <button type="button" id="cancelCheckout" class="btn-secondary">Cancelar</button>
                </div>
            </form>
        </section>
    `,
    '#/contactos': () => `
        <section class="product-section">
            <h2>Contactos</h2>
            <div class="contact-card" style="max-width:600px;margin:16px auto;padding:18px;border-radius:10px;background:#fff;box-shadow:0 6px 18px rgba(0,0,0,0.06);text-align:left;">
                <p style="margin:6px 0;font-size:1.05rem;"><strong>📱 Móvil:</strong> <a href="tel:+34600000000" style="color:#111;text-decoration:none;">0987654321</a></p>
                <p style="margin:6px 0;font-size:1.05rem;"><strong>☎️ Teléfono:</strong> <a href="tel:+34912345678" style="color:#111;text-decoration:none;">+34 912 345 678</a></p>
                <p style="margin:6px 0;font-size:1.05rem;"><strong>✉️ Correo:</strong> <a href="mailto:contacto@novawear.com" style="color:#ff4757;text-decoration:none;">contacto@novawear.com</a></p>
                <hr style="border:none;border-top:1px solid rgba(0,0,0,0.06);margin:12px 0;">
                <p style="margin:6px 0;color:#666;">Horario de atención: Lunes a Viernes, 09:00 - 18:00</p>
                <p style="margin:6px 0;color:#666;">Dirección: Calle Amazonas 455, Machachi</p>
            </div>
        </section>`
};

// Función auxiliar para productos
function renderGrid(title, products) {
    const sectionClass = title.toLowerCase() === 'mujeres' ? 'section-mujeres' : title.toLowerCase() === 'hombres' ? 'section-hombres' : '';
    const cards = products.map((p, idx) => `
        <div class="card" data-index="${idx}">
            <div class="img-placeholder">
                <img src="${p.img}" alt="${p.name}" class="product-img" />
            </div>
            <h3>${p.name}</h3>
            <div class="card-details">
                <p class="desc">${p.desc || ''}</p>
                <p class="price">$${(parseFloat(p.price)||0).toFixed(2)}</p>
            </div>
            <button class="add-cart" 
                data-name="${escapeHtml(p.name)}" 
                data-price="${p.price}" 
                data-img="${p.img}" 
                data-desc="${escapeHtml(p.desc || '')}">
                Añadir al carrito
            </button>
        </div>
    `).join('');
    return `<section class="product-section ${sectionClass}"><h2>${title}</h2><div class="grid">${cards}</div></section>`;
}
function escapeHtml(s){ return String(s).replace(/"/g,'&quot;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

// único punto de render
function render() {
    const hash = location.hash || '#/';
    const app = document.getElementById('app');
    app.innerHTML = (routes[hash] || routes['#/'])();

    // actualizar estado activo en nav y dropdown
    document.querySelectorAll('a[href]').forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === hash);
    });

    // cerrar dropdown si existe
    const kebabMenu = document.getElementById('kebabDropdown');
    if (kebabMenu) kebabMenu.classList.remove('show');

    Cart.updateBadge();

    // inicializar carousel si está presente
    if (window.Carousel && typeof window.Carousel.init === 'function') {
        window.Carousel.init(document.getElementById('homeCarousel'));
    }
}

document.addEventListener('click', (e) => {
    const addBtn = e.target.closest('.add-cart');
    if (addBtn) {
        e.preventDefault();
        Cart.addItem({
            name: addBtn.dataset.name,
            price: addBtn.dataset.price,
            img: addBtn.dataset.img,
            desc: addBtn.dataset.desc
        });
        render();
        return;
    }

    const removeBtn = e.target.closest('.btn-remove');
    if (removeBtn) {
        const idx = parseInt(removeBtn.dataset.remove, 10);
        if (!Number.isNaN(idx)) {
            Cart.removeItem(idx);
            render();
        }
        return;
    }

    if (e.target.closest('#clearCartBtn')) {
        Cart.clear();
        render();
        return;
    }

    if (e.target.closest('#checkoutBtn')) {
        location.hash = '#/checkout';
        return;
    }

    // cerrar dropdown si clic en enlace dentro del kebab (se delega en kebab init)
});

// delegación para submit del formulario de checkout
document.addEventListener('submit', (e) => {
    if (e.target && e.target.id === 'checkoutForm') {
        e.preventDefault();
        // Mostrar modal de pago exitoso
        const successModal = document.getElementById('successModal');
        if (successModal) {
            successModal.classList.add('show');
        }
        Cart.clear();
        setTimeout(() => {
            location.hash = '#/';
            if (successModal) {
                successModal.classList.remove('show');
            }
            render();
        }, 3000);
    }
    // cancelar checkout (delegado por click arriba)
});

// Kebab dropdown control: inicializar al DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    const kebabBtn = document.getElementById('kebabBtn');
    const kebabDropdown = document.getElementById('kebabDropdown');
    if (!kebabBtn || !kebabDropdown) {
        // render inicial incluso si kebab no existe
        if (!location.hash) location.hash = '#/';
        render();
        return;
    }

    const toggleDropdown = (ev) => {
        ev.stopPropagation();
        const isOpen = kebabDropdown.classList.toggle('show');
        kebabBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        kebabDropdown.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
    };

    kebabBtn.addEventListener('click', toggleDropdown);

    document.addEventListener('click', (ev) => {
        if (!kebabDropdown.contains(ev.target) && ev.target !== kebabBtn) {
            kebabDropdown.classList.remove('show');
            kebabBtn.setAttribute('aria-expanded', 'false');
            kebabDropdown.setAttribute('aria-hidden', 'true');
        }
    });

    kebabDropdown.addEventListener('click', (ev) => {
        const a = ev.target.closest('a[href]');
        if (a) {
            kebabDropdown.classList.remove('show');
            kebabBtn.setAttribute('aria-expanded', 'false');
            kebabDropdown.setAttribute('aria-hidden', 'true');
            // allow hash navigation to proceed
        }
    });

    if (!location.hash) location.hash = '#/';
    render();
});

window.addEventListener('hashchange', render);
window.addEventListener('load', () => { if (!location.hash) location.hash = '#/'; render(); });