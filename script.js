function toggleHeart() {
  const heart = document.querySelector('.heart');
  const body = document.body;
  
  // Toggle the open class for the heart animation
  heart.classList.toggle('open');
  
  // Toggle the background color to black when the heart is clicked
  body.classList.toggle('bg-black');
}
