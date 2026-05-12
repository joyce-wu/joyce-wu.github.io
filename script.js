// script.js

const images = document.querySelectorAll('.gallery-image');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const closeButton = document.getElementById('closeButton');
const videoSource = video.querySelector('source').getAttribute('src');

lightboxVideo.src = videoSource;

lightboxVideo.load();
lightboxVideo.play();

images.forEach(image => {
  image.addEventListener('click', () => {
    lightbox.classList.add('active');
    lightboxImage.src = image.src;
  });
});

function closeLightbox() {
  lightbox.classList.remove('active');
}

closeButton.addEventListener('click', closeLightbox);

lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    closeLightbox();
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeLightbox();
  }
});
