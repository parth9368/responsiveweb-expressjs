const span = document.querySelector('.final-print');
const btn = document.querySelector('.magic');

btn.addEventListener("click", ()=> {
    const val = document.querySelector('input').value;
    span.textContent = val;
  });
