let currentPage = 1;
const totalPages = document.querySelectorAll('.page').length;

// Navegación
document.getElementById('next').addEventListener('click', () => turnPage(1));
document.getElementById('prev').addEventListener('click', () => turnPage(-1));

function turnPage(direction) {
  const current = document.getElementById(`page${currentPage}`);
  if (!current) return;

  if (direction === 1 && currentPage < totalPages) {
    current.classList.add('flipped');
    currentPage++;
  } else if (direction === -1 && currentPage > 1) {
    currentPage--;
    const prev = document.getElementById(`page${currentPage}`);
    prev.classList.remove('flipped');
  }
}

// Descargar todo el portafolio como PDF
async function downloadVisualPDF() {
  const book = document.querySelector('.book');
  const clone = book.cloneNode(true);

  clone.style.width = '800px';
  clone.style.height = 'auto';
  clone.style.transform = 'none';
  clone.querySelectorAll('.page').forEach(p => {
    p.classList.remove('flipped');
    p.style.transform = 'none';
    p.style.boxShadow = 'none';
    p.style.marginBottom = '20px';
  });

  const wrapper = document.createElement('div');
  wrapper.style.position = 'fixed';
  wrapper.style.left = '-9999px';
  wrapper.appendChild(clone);
  document.body.appendChild(wrapper);

  const opt = {
    margin: 10,
    filename: 'Portafolio_HS.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2, useCORS: true },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
  };

  await html2pdf().set(opt).from(wrapper).save();
  wrapper.remove();
}

document.getElementById('pdf-download').addEventListener('click', downloadVisualPDF);
