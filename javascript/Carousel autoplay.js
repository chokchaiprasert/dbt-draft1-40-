const track = document.getElementById("track");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const dotsBox = document.getElementById("dots");

// 1. โคลนรูปภาพตัวแรกและตัวสุดท้ายเพื่อทำ Loop แบบสมูท (Infinite Loop)
const originalSlides = Array.from(track.children);
const firstClone = originalSlides[0].cloneNode(true);
const lastClone = originalSlides[originalSlides.length - 1].cloneNode(true);

// ใส่ Clone เข้าไปใน Track
track.appendChild(firstClone);
track.insertBefore(lastClone, track.firstElementChild);

// อัปเดตรายการสไลด์ทั้งหมด (รวม Clone)
const slides = Array.from(track.children);
let index = 1; // เริ่มที่ 1 เพราะ 0 คือตัว Clone ของรูปสุดท้าย
let slideWidth = 100; // เปอร์เซ็นต์ความกว้าง
let transitionSpeed = 0.6; // ความเร็วอนิเมชั่น (วินาที)

// 2. สร้างจุด (Dots) ตามจำนวนรูปจริง (ไม่รวม Clone)
originalSlides.forEach((_, i) => {
    const b = document.createElement("button");
    if (i === 0) b.classList.add("active");
    dotsBox.appendChild(b);
});
const dots = Array.from(dotsBox.children);

// จัดตำแหน่งเริ่มต้นให้โชว์รูปจริงรูปแรก
track.style.transform = `translateX(-${index * slideWidth}%)`;

// ฟังก์ชันอัปเดตตำแหน่งและจุด
function updateSlide() {
    track.style.transition = `transform ${transitionSpeed}s cubic-bezier(0.25, 1, 0.5, 1)`; // ใช้ cubic-bezier เพื่อความนุ่มนวล
    track.style.transform = `translateX(-${index * slideWidth}%)`;
    
    // คำนวณ Index ของจุด (Dots)
    let dotIndex = index - 1;
    if (dotIndex < 0) dotIndex = dots.length - 1;
    if (dotIndex >= dots.length) dotIndex = 0;

    dots.forEach(d => d.classList.remove("active"));
    if (dots[dotIndex]) dots[dotIndex].classList.add("active");
}

function nextSlide() {
    if (index >= slides.length - 1) return; // ป้องกันการกดรัวเกินขอบเขต
    index++;
    updateSlide();
}

function prevSlide() {
    if (index <= 0) return; // ป้องกันการกดรัวเกินขอบเขต
    index--;
    updateSlide();
}

// 3. ตรวจจับเมื่อจบการเลื่อน (Transition End) เพื่อวาร์ปกลับไปตำแหน่ง Loop เนียนๆ
track.addEventListener('transitionend', () => {
    // ถ้าเลื่อนไปถึง Clone ตัวท้ายสุด -> วาร์ปกลับไปรูปแรกจริง
    if (index === slides.length - 1) {
        track.style.transition = 'none'; // ปิดอนิเมชั่นชั่วคราว
        index = 1;
        track.style.transform = `translateX(-${index * slideWidth}%)`;
    }
    // ถ้าเลื่อนถอยไปถึง Clone ตัวแรกสุด -> วาร์ปไปรูปท้ายจริง
    if (index === 0) {
        track.style.transition = 'none'; // ปิดอนิเมชั่นชั่วคราว
        index = slides.length - 2;
        track.style.transform = `translateX(-${index * slideWidth}%)`;
    }
});

// 4. ตั้งค่าปุ่ม
next.onclick = nextSlide;
prev.onclick = prevSlide;

// 5. ตั้งค่าการกดจุด
dots.forEach((dot, i) => {
    dot.onclick = () => {
        index = i + 1; // +1 เพราะต้องข้าม Clone ตัวแรก
        updateSlide();
    };
});

// 6. Auto Play
let autoPlayInterval = setInterval(nextSlide, 6000);

// เสริม: หยุด Auto Play เมื่อเอาเมาส์ชี้ เพื่อไม่ให้กวนใจผู้ใช้
track.parentElement.addEventListener('mouseenter', () => {
    clearInterval(autoPlayInterval);
});

track.parentElement.addEventListener('mouseleave', () => {
    autoPlayInterval = setInterval(nextSlide, 6000);
});