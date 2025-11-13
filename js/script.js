// Inicialización de Swiper con efecto tipo libro
const swiper = new Swiper('.swiper', {
  allowTouchMove: true,
  speed: 800,
  effect: 'slide',
  slidesPerView: 1,
  loop: false,
});

// Botones de navegación
document.getElementById('next').addEventListener('click', () => swiper.slideNext());
document.getElementById('prev').addEventListener('click', () => swiper.slidePrev());

// Descargar PDF
document.getElementById('downloadPDF').addEventListener('click', async () => {
  const { jsPDF } = window.jspdf;
  const pdf = new jsPDF('p', 'pt', 'a4');
  const slides = document.querySelectorAll('.swiper-slide');

  for (let i = 0; i < slides.length; i++) {
    const canvas = await html2canvas(slides[i]);
    const imgData = canvas.toDataURL('image/png');
    const imgWidth = 595.28;
    const pageHeight = 841.89;
    const imgHeight = canvas.height * imgWidth / canvas.width;
    const position = 0;

    if (i > 0) pdf.addPage();
    pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
  }

  pdf.save('Portafolio_Hogar_Seguro.pdf');
});
