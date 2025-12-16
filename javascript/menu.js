document.addEventListener('DOMContentLoaded', function() {
    // 1. ค้นหาองค์ประกอบต่างๆ ที่ต้องการควบคุม
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');

    // 2. ตรวจสอบว่าพบทั้งสององค์ประกอบหรือไม่
    if (menuToggle && menu) {
        
        // 3. เพิ่ม Event Listener เมื่อมีการคลิกที่ปุ่ม Hamburger
        menuToggle.addEventListener('click', function() {
            // สลับ (Toggle) คลาส 'open' บนรายการเมนู
            menu.classList.toggle('open');
        });

        // 4. (ทางเลือก) ปิดเมนูเมื่อคลิกที่ลิงก์ในเมนู (สำหรับ Mobile)
        const menuLinks = menu.querySelectorAll('a');
        menuLinks.forEach(link => {
            link.addEventListener('click', function() {
                // ปิดเมนูทันทีเมื่อมีการคลิกที่ลิงก์
                if (menu.classList.contains('open')) {
                    menu.classList.remove('open');
                }
            });
        });

    }
});



const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        const dropbtn = dropdown.querySelector('.dropbtn');
        const dropdownContent = dropdown.querySelector('.dropdown-content');

        if (dropbtn && dropdownContent) {
            // เมื่อคลิกที่ Dropdown Button (บนมือถือ)
            dropbtn.addEventListener('click', function(e) {
                // ป้องกันไม่ให้ลิงก์ทำงาน (ถ้า href เป็น #)
                e.preventDefault(); 
                
                // สลับการแสดงผลของเมนูย่อย
                // ให้ display: block; ใน CSS/JS และถูกปิดด้วย display: none;
                
                // ตรวจสอบว่าอยู่ในโหมดมือถือ (เมนูหลักถูกเปิดอยู่)
                if (menu.classList.contains('open')) {
                    
                    // ปิด Dropdown อื่นๆ ก่อน
                    document.querySelectorAll('.dropdown-content').forEach(content => {
                        if (content !== dropdownContent) {
                            content.style.display = 'none';
                        }
                    });

                    // สลับการแสดงผลของ Dropdown นี้
                    if (dropdownContent.style.display === 'block') {
                        dropdownContent.style.display = 'none';
                    } else {
                        dropdownContent.style.display = 'block';
                    }
                }
            });
        }
    });


   