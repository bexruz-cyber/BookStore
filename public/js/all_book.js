const books_boxes = document.querySelectorAll(".books_box");
const book_box_open_toogles = document.querySelectorAll(".book_box_open_toogle");

book_box_open_toogles.forEach((toogle, index) => {
  toogle.addEventListener("click", function() {
    const books_box = books_boxes[index]; // index orqali har bir toogle ga mos books_box ni olamiz
    const childrenCount = books_box.children.length; // books_box ichidagi child elementlar sonini aniqlaymiz
    const maxHeightPerChild = 531; // har bir child element uchun maksimal balandlik
    const totalHeight = childrenCount * maxHeightPerChild; // umumiy balandlikni hisoblaymiz

    // Barcha `books_box` larni yopamiz
    books_boxes.forEach((box, i) => {
      if (i !== index) {
        box.style.maxHeight = null; // Qolgan box larni asl holatiga qaytarib yopamiz
      }
    });

    // Joriy books_box ning holatini teskari qilib ochamiz yoki yopamiz
    if (books_box.style.maxHeight) {
      books_box.style.maxHeight = null; // Agar ochilgan bo'lsa, yopamiz
    } else {
      books_box.style.maxHeight = totalHeight + "px"; // Agar yopilgan bo'lsa, ochamiz
    }
  });
});
