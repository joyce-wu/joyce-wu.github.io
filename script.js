document.addEventListener('DOMContentLoaded', () => {

  const images = document.querySelectorAll('.gallery-image, .triple-image');
  const videos = document.querySelectorAll('.gallery-video');

  const lightbox = document.getElementById('lightbox');

  const lightboxImage = document.getElementById('lightboxImage');
  const lightboxVideo = document.getElementById('lightboxVideo');
  const lightboxCaption = document.getElementById('lightboxCaption');

  const closeButton = document.getElementById('closeButton');

  // IMAGE CLICK

  images.forEach(image => {

    image.addEventListener('click', () => {

      lightbox.classList.add('active');

      lightboxImage.style.display = 'block';
      lightboxVideo.style.display = 'none';

      lightboxImage.src = image.src;
      lightboxCaption.textContent = image.dataset.title || '';

    });

  });

  // VIDEO CLICK

  videos.forEach(video => {

    video.addEventListener('click', () => {

      const videoSource = video.querySelector('source').getAttribute('src');

      lightbox.classList.add('active');

      lightboxImage.style.display = 'none';
      lightboxVideo.style.display = 'block';
      if (video.classList.contains('no-rotate-lightbox')) {
        lightboxVideo.classList.add('no-rotation');
      } else {
        lightboxVideo.classList.remove('no-rotation');
      }

      lightboxVideo.src = videoSource;

      lightboxVideo.load();
      lightboxVideo.play();
      lightboxCaption.textContent = video.dataset.title || '';

    });

  });

  // CLOSE LIGHTBOX

  function closeLightbox() {

    lightbox.classList.remove('active');

    lightboxImage.src = '';

    lightboxVideo.pause();
    lightboxVideo.src = '';
    lightboxCaption.textContent = '';
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
