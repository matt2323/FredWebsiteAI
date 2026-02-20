/* =============================================================
   WINE & SPIRITS AT 130 MAIN — Site Script
   ============================================================= */

(function () {
  'use strict';

  /* -----------------------------------------------------------
     1. NAVBAR — transparent when at top, solid on scroll
     ----------------------------------------------------------- */
  var navbar = document.getElementById('navbar');

  function handleNavScroll() {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else if (!navbar.classList.contains('menu-open')) {
      navbar.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleNavScroll, { passive: true });

  // Run once on load in case user refreshes mid-page
  handleNavScroll();


  /* -----------------------------------------------------------
     2. HAMBURGER MENU — toggle mobile dropdown
     ----------------------------------------------------------- */
  var menuBtn    = document.getElementById('menu-btn');
  var mobileMenu = document.getElementById('mobile-menu');
  var iconOpen   = document.getElementById('icon-open');
  var iconClose  = document.getElementById('icon-close');

  function openMenu() {
    mobileMenu.classList.remove('hidden');
    navbar.classList.add('menu-open', 'scrolled');
    iconOpen.classList.add('hidden');
    iconClose.classList.remove('hidden');
    menuBtn.setAttribute('aria-expanded', 'true');
  }

  function closeMenu() {
    mobileMenu.classList.add('hidden');
    navbar.classList.remove('menu-open');
    iconOpen.classList.remove('hidden');
    iconClose.classList.add('hidden');
    menuBtn.setAttribute('aria-expanded', 'false');
    // Re-check scroll state
    handleNavScroll();
  }

  menuBtn.addEventListener('click', function () {
    var isOpen = !mobileMenu.classList.contains('hidden');
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Close menu when a mobile nav link is clicked
  var mobileLinks = document.querySelectorAll('.mobile-link');
  mobileLinks.forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  // Close menu on Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !mobileMenu.classList.contains('hidden')) {
      closeMenu();
      menuBtn.focus();
    }
  });

  // Close menu if viewport resizes to desktop width
  window.addEventListener('resize', function () {
    if (window.innerWidth >= 768 && !mobileMenu.classList.contains('hidden')) {
      closeMenu();
    }
  });


  /* -----------------------------------------------------------
     3. COPYRIGHT YEAR — auto-update so it never goes stale
     ----------------------------------------------------------- */
  var yearEl = document.getElementById('copyright-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }


  /* -----------------------------------------------------------
     4. SMOOTH SCROLL — ensure anchor links feel polished
        (CSS scroll-behavior handles most cases; this catches
         edge cases where CSS smooth scroll isn't supported)
     ----------------------------------------------------------- */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId === '#') return;
      var target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });

      // Update URL without triggering a jump
      if (history.pushState) {
        history.pushState(null, null, targetId);
      }
    });
  });

}());
