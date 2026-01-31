/**
 * Artist Portfolio - Main JavaScript
 * Handles navigation toggle and lightbox functionality
 */

document.addEventListener('DOMContentLoaded', function() {
  // Mobile Navigation Toggle
  initMobileNav();

  // Lightbox for gallery images
  initLightbox();
});

/**
 * Mobile Navigation
 * Toggles the navigation menu on mobile devices
 */
function initMobileNav() {
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const body = document.body;

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function(e) {
      e.stopPropagation();
      const isOpen = navMenu.classList.toggle('active');
      navToggle.classList.toggle('active');
      body.classList.toggle('menu-open', isOpen);
    });

    // Close menu when clicking a link
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
        body.classList.remove('menu-open');
      });
    });

    // Close on Escape key
    document.addEventListener('keydown', function(event) {
      if (event.key === 'Escape' && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
        body.classList.remove('menu-open');
      }
    });
  }
}

/**
 * Lightbox
 * Opens full-size images in a modal overlay
 */
function initLightbox() {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxTitle = document.getElementById('lightbox-title');
  const lightboxDetails = document.getElementById('lightbox-details');
  const lightboxClose = document.querySelector('.lightbox-close');
  const galleryItems = document.querySelectorAll('.gallery-item');

  if (!lightbox || galleryItems.length === 0) return;

  // Open lightbox when clicking a gallery item
  galleryItems.forEach(function(item) {
    item.addEventListener('click', function() {
      const imgSrc = item.getAttribute('data-src');
      const title = item.getAttribute('data-title');
      const details = item.getAttribute('data-details');

      if (imgSrc) {
        lightboxImg.src = imgSrc;
        lightboxImg.alt = title || '';
        lightboxTitle.textContent = title || '';
        lightboxDetails.textContent = details || '';
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  // Close lightbox
  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
    lightboxImg.src = '';
  }

  // Close button
  if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
  }

  // Close on background click
  lightbox.addEventListener('click', function(event) {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });

  // Close on Escape key
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && lightbox.classList.contains('active')) {
      closeLightbox();
    }
  });
}
