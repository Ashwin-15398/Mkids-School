document.addEventListener('DOMContentLoaded', () => {
    const galleryGrid = document.querySelector('.gallery-grid');

    // Placeholder logic for dynamically adding gallery items
    console.log('Gallery page script loaded');

    // Example of dynamically adding a gallery item (if needed)
    const newGalleryItem = document.createElement('div');
    newGalleryItem.className = 'gallery-item';
    newGalleryItem.innerHTML = `
        <img src="assets/example-gallery.jpg" alt="Example Gallery">
    `;
    galleryGrid.appendChild(newGalleryItem);
});