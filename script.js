// JS logic for CTA section form and submit button // 



// JS logic for dark and light mode // 
const btn = document.getElementById('theme-toggle')
const body = document.body;

const savedTheme = localStorage.getItem('theme');
if (savedTheme == 'dark') {
body.classList.add('dark-mode')
}

btn.addEventListener('click', () => {
body.classList.toggle('dark-mode');

if (body.classList.contains('dark-mode')) {
localStorage.setItem('theme', 'dark');
} else {
localStorage.setItem('theme', 'light' );
}
});