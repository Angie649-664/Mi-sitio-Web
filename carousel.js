(function (window, document) {
    function createIndicators(carousel, count) {
        const wrap = carousel.querySelector('.carousel-indicators');
        wrap.innerHTML = '';
        for (let i = 0; i < count; i++) {
            const btn = document.createElement('button');
            btn.className = 'indicator';
            btn.type = 'button';
            btn.setAttribute('aria-label', `Ir a la diapositiva ${i+1}`);
            btn.dataset.index = i;
            wrap.appendChild(btn);
        }
    }

    function initOne(carousel) {
        if (!carousel) return;
        const track = carousel.querySelector('.carousel-track');
        const slides = Array.from(carousel.querySelectorAll('.carousel-slide'));
        const prev = carousel.querySelector('.carousel-btn.prev');
        const next = carousel.querySelector('.carousel-btn.next');
        const indicatorsWrap = carousel.querySelector('.carousel-indicators');
        if (!track || !slides.length) return;

        let current = 0;
        let timer = null;
        const interval = parseInt(carousel.dataset.interval,10) || 4000;
        const auto = carousel.dataset.auto !== 'false';

        createIndicators(carousel, slides.length);
        const indicators = Array.from(indicatorsWrap.children);

        // ensure layout
        track.style.display = 'flex';
        track.style.transition = 'transform 360ms ease';
        slides.forEach(s => { s.style.flex = '0 0 100%'; s.style.width = '100%'; });

        function update() {
            // compute slide width from visible carousel container
            const slideWidth = carousel.clientWidth || slides[0].getBoundingClientRect().width || 0;
            track.style.transform = `translateX(-${current * slideWidth}px)`;
            indicators.forEach((b,i) => b.classList.toggle('active', i === current));
        }

        function go(n) {
            current = (n + slides.length) % slides.length;
            update();
        }

        function nextSlide() { go(current + 1); }
        function prevSlide() { go(current - 1); }

        next?.addEventListener('click', () => { nextSlide(); resetTimer(); });
        prev?.addEventListener('click', () => { prevSlide(); resetTimer(); });

        indicators.forEach(btn => {
            btn.addEventListener('click', () => { go(Number(btn.dataset.index)); resetTimer(); });
        });

        // responsive: recalc on resize (use debounce simple)
        let resizeTimer;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(update, 80);
        });

        function startTimer() {
            if (!auto) return;
            stopTimer();
            timer = setInterval(nextSlide, interval);
        }
        function stopTimer() { if (timer) clearInterval(timer); timer = null; }
        function resetTimer() { stopTimer(); startTimer(); }

        // pause on hover/focus
        carousel.addEventListener('mouseenter', stopTimer);
        carousel.addEventListener('mouseleave', startTimer);
        carousel.addEventListener('focusin', stopTimer);
        carousel.addEventListener('focusout', startTimer);

        // keyboard navigation
        carousel.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') { prevSlide(); resetTimer(); }
            if (e.key === 'ArrowRight') { nextSlide(); resetTimer(); }
        });

        // initial update + start
        update();
        startTimer();
    }

    // public init: accepts node or selector
    function init(target) {
        if (!target) {
            // auto init all carousels in page
            Array.from(document.querySelectorAll('.carousel')).forEach(initOne);
            return;
        }
        if (typeof target === 'string') target = document.querySelector(target);
        initOne(target);
    }

    window.Carousel = { init };
})(window, document);