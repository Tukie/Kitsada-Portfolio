// Get all the images with the loading="lazy" attribute
const lazyImages = document.querySelectorAll('img[loading="lazy"]');

// Options for the Intersection Observer
const options = {
  root: null, // Use the viewport as the root element
  rootMargin: '0px',
  threshold: 0.1 // Adjust this value as needed
};

// Callback function to handle intersecting images
const handleIntersection = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Load the image
      entry.target.src = entry.target.dataset.src;
      entry.target.removeAttribute('loading');
      observer.unobserve(entry.target);
    }
  });
};

// Create the Intersection Observer instance
const observer = new IntersectionObserver(handleIntersection, options);

// Observe each lazy image
lazyImages.forEach(image => {
  observer.observe(image);
});
