document.addEventListener('DOMContentLoaded', () => {

  const images = document.querySelectorAll('.gallery-image');
  const videos = document.querySelectorAll('.gallery-video');

  const lightbox = document.getElementById('lightbox');

  const lightboxImage = document.getElementById('lightboxImage');
  const lightboxVideo = document.getElementById('lightboxVideo');

  const closeButton = document.getElementById('closeButton');

  // IMAGE CLICK

  images.forEach(image => {

    image.addEventListener('click', () => {

      lightbox.classList.add('active');

      lightboxImage.style.display = 'block';
      lightboxVideo.style.display = 'none';

      lightboxImage.src = image.src;

    });

  });

  // VIDEO CLICK

  videos.forEach(video => {

    video.addEventListener('click', () => {

      const videoSource = video.querySelector('source').getAttribute('src');

      lightbox.classList.add('active');

      lightboxImage.style.display = 'none';
      lightboxVideo.style.display = 'block';

      lightboxVideo.src = videoSource;

      lightboxVideo.load();
      lightboxVideo.play();

    });

  });

  // CLOSE LIGHTBOX

  function closeLightbox() {

    lightbox.classList.remove('active');

    lightboxImage.src = '';

    lightboxVideo.pause();
    lightboxVideo.src = '';

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

});
