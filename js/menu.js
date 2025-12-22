document.addEventListener('DOMContentLoaded', function() {
    
    // 1. โค้ดเปิด-ปิด Hamburger Menu (Slide)
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            menu.classList.toggle('open');
            // เวลาปิดเมนูใหญ่ ให้รีเซ็ต dropdown ข้างในให้พับเก็บด้วย (ถ้าต้องการ)
            if (!menu.classList.contains('open')) {
                document.querySelectorAll('.menu li.dropdown.active, .menu li.dropdown-submenu.active')
                    .forEach(el => el.classList.remove('active'));
            }
        });
    }

    // 2. โค้ดเปิด-ปิด Dropdown (Accordion)
    // เลือกตัวแม่ที่มีลูก dropdown ทั้งหมด
    const dropdowns = document.querySelectorAll('.menu li.dropdown, .menu li.dropdown-submenu');

    dropdowns.forEach(dropdown => {
        // หาตัวลิงก์ที่เป็นหัวข้อ (เช่น "นักเรียน", "หลักสูตร")
        const link = dropdown.querySelector('a'); 

        // ดักจับการคลิก
        link.addEventListener('click', (e) => {
            // ทำงานเฉพาะในโหมดมือถือ (จอเล็กกว่า 768px)
            if (window.innerWidth <= 768) {
                e.preventDefault(); // ห้ามลิงก์เด้งไปหน้าอื่น
                e.stopPropagation(); // ห้ามไปกระทบตัวแม่ (สำหรับเมนูซ้อน)

                // สั่งสลับคลาส active (ถ้ามีก็เอาออก ถ้าไม่มีก็ใส่)
                dropdown.classList.toggle('active');
            }
        });
    });

    // คลิกพื้นที่ว่างเพื่อปิดเมนู (Optional)
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 768 && 
            !menu.contains(e.target) && 
            !menuToggle.contains(e.target) &&
            menu.classList.contains('open')) {
            menu.classList.remove('open');
        }
    });
});