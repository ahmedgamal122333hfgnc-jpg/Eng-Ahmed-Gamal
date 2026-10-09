// التقاط السكرين شوت
document.getElementById('screenshotBtn').addEventListener('click', function () {
    const cardElement = document.getElementById('captureArea');
    const btn = this;
    const originalText = btn.innerHTML;
    btn.innerHTML = "Capturing...";
    btn.style.opacity = "0.7";

    html2canvas(cardElement, {
        backgroundColor: '#050403',
        scale: 2,
        useCORS: true
    }).then(canvas => {
        const link = document.createElement('a');
        link.download = 'Ahmed_ElKassar_Profile.png';
        link.href = canvas.toDataURL('image/png');
        link.click();

        btn.innerHTML = originalText;
        btn.style.opacity = "1";
    }).catch(err => {
        console.error("Error:", err);
        btn.innerHTML = originalText;
        btn.style.opacity = "1";
        alert("Failed to capture screenshot.");
    });
});

// تكبير الصورة
const avatarTrigger = document.getElementById('avatarTrigger');
const imageModal = document.getElementById('imageModal');
const closeModal = document.querySelector('.close-modal');

avatarTrigger.addEventListener('click', () => {
    imageModal.classList.add('active');
});

closeModal.addEventListener('click', () => {
    imageModal.classList.remove('active');
});

imageModal.addEventListener('click', (e) => {
    if (e.target === imageModal) {
        imageModal.classList.remove('active');
    }
});

// دعم التفاعل باللمس على الهواتف لتفعيل خاصية إضاءة الزر وتعتيم الباقي عند الضغط
const contactItems = document.querySelectorAll('.contact-item');
const contactsContainer = document.querySelector('.contacts-container');

contactItems.forEach(item => {
    item.addEventListener('touchstart', function() {
        contactsContainer.classList.add('touch-active');
        contactItems.forEach(i => i.classList.remove('active-touch'));
        this.classList.add('active-touch');
    });
});

document.addEventListener('touchend', function(e) {
    if (!e.target.closest('.contact-item')) {
        contactsContainer.classList.remove('touch-active');
        contactItems.forEach(i => i.classList.remove('active-touch'));
    }
});