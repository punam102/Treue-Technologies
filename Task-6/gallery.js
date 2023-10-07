let isLightboxOpen = false;
let currentImageIndex = 0;

function openLightbox() {
  isLightboxOpen = true;
}

function closeLightbox() {
  // Code to close the lightbox
  isLightboxOpen = false;
}

function navigateNext() {
  // Code to navigate to the next image
  if (currentImageIndex < images.length - 1) {
    currentImageIndex++;
    // Update lightbox to display the image at currentImageIndex
  }
}

function navigatePrev() {
  // Code to navigate to the previous image
  if (currentImageIndex > 0) {
    currentImageIndex--;
    // Update lightbox to display the image at currentImageIndex
  }
}

// Call these functions based on our UI interactions
//  clicking on an image thumbnail
thumbnail.addEventListener("click", () => {
  openLightbox();
});

//  close button in the lightbox
closeButton.addEventListener("click", () => {
  closeLightbox();
});

//  next and previous navigation buttons
nextButton.addEventListener("click", () => {
  navigateNext();
});

prevButton.addEventListener("click", () => {
  navigatePrev();
});
