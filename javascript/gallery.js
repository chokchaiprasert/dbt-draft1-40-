// 1. โครงสร้างข้อมูล: กำหนด 6 แฟ้ม (Albums) และรูปภาพภายใน
// *** สำคัญ: คุณต้องเปลี่ยนชื่อไฟล์ใน Array 'images' ให้เป็นไฟล์รูปภาพของคุณ ***
const albums = [
    {
        title: "เปิดรับสมัครนักเรียนใหม่",
        thumbnail: "photo/alabum/gallery1/1.jpg", 
        images: [
            "photo/alabum/gallery1/1.jpg", 
            "photo/alabum/gallery1/2.jpg", 
            "photo/alabum/gallery1/3.jpg",
            "photo/alabum/gallery1/4.jpg",
            "photo/alabum/gallery1/5.jpg",
            "photo/alabum/gallery1/6.jpg"
        ]
    },
    {
        title: "กิจกรรมกลางของสถานศึกษา",
        thumbnail: "photo/alabum/gallery2/12.jpg",
        images: [
            "photo/alabum/gallery2/12.jpg",
            "photo/alabum/gallery2/1.jpg",
            "photo/alabum/gallery2/2.jpg",
            "photo/alabum/gallery2/3.jpg",
            "photo/alabum/gallery2/4.jpg",
            "photo/alabum/gallery2/5.jpg",
            "photo/alabum/gallery2/6.jpg",
            "photo/alabum/gallery2/7.jpg",
            "photo/alabum/gallery2/8.jpg",
            "photo/alabum/gallery2/9.jpg",
            "photo/alabum/gallery2/10.jpg",
            "photo/alabum/gallery2/11.jpg"
        ]
    },
    {
        title: "องค์กรนักวิชาชีพ",
        thumbnail: "image_87383d.jpg",
        images: [
            "image_87383d.jpg",
            "reg2569.jpg"
        ]
    },
    {
        title: "เทคโนโลยีธุรกิจดิจิทัล",
        thumbnail: "image_8746a6.png",
        images: [
            "image_8746a6.png",
            "20251106_084153_18.jpg"
        ]
    },
    {
        title: "ปฏิทินกิจกรรม",
        thumbnail: "image_87b09e.png",
        images: [
            "image_87b09e.png",
            "image_87383d.jpg",
            "image_e9f784.png"
        ]
    },
    {
        title: "รูปภาพสำรอง",
        thumbnail: "image_e9f784.png",
        images: [
            "image_e9f784.png",
            "reg2569.jpg"
        ]
    }
];

let currentAlbumImages = []; 
let currentIndex = 0;       

// ฟังก์ชันหลัก: เปิด Lightbox ด้วยชุดภาพจาก Album ที่กำหนด
function openAlbum(albumIndex) {
    // โหลดชุดภาพของ Album นั้นๆ มาเก็บใน currentAlbumImages
    currentAlbumImages = albums[albumIndex].images;
    
    // เปิด Lightbox ที่รูปแรก (index 0)
    currentIndex = 0;
    const lightbox = document.getElementById('myLightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    
    lightbox.style.display = "block";
    lightboxImg.src = currentAlbumImages[currentIndex];
}

// ฟังก์ชันปิด Lightbox
function closeLightbox() {
    document.getElementById('myLightbox').style.display = "none";
}

// ฟังก์ชันเลื่อนรูป (n = -1 คือถอยหลัง, n = 1 คือไปหน้า)
function changeSlide(n) {
    currentIndex += n;
    
    // ตรวจสอบขอบเขต (วนลูป)
    if (currentIndex >= currentAlbumImages.length) {
        currentIndex = 0;
    }
    if (currentIndex < 0) {
        currentIndex = currentAlbumImages.length - 1;
    }

    document.getElementById('lightbox-img').src = currentAlbumImages[currentIndex];
}