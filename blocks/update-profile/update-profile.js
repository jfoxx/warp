export default function decorate(block) {
  const title = document.createElement('h2');
  title.innerText = 'My Profile';
  block.appendChild(title);
}
