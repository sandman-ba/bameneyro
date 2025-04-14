const setTheme = (theme) => {
  document.documentElement.className = theme;
  localStorage.setItem('theme',theme);
}

const getTheme = () => {
  const theme = localStorage.getItem('theme');
  theme && setTheme(theme);
}

getTheme();

window.onload = function() {
  document.getElementById('theme-select').addEventListener('change', function() {
    setTheme(this.value);
  });
}
