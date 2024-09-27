const books_boxes = document.querySelectorAll(".books_box");
const book_box_open_toogles = document.querySelectorAll(".book_box_open_toogle");

book_box_open_toogles.forEach((toogle, index) => {
  toogle.addEventListener("click", function() {
    const books_box = books_boxes[index]; // index orqali har bir toogle ga mos books_box ni olamiz
    const childrenCount = books_box.children.length; // books_box ichidagi child elementlar sonini aniqlaymiz
    const maxHeightPerChild = 531; // har bir child element uchun maksimal balandlik
    const totalHeight = childrenCount * maxHeightPerChild; // umumiy balandlikni hisoblaymiz

    // Har bir tugmani bosganingizda, faqat tegishli `books_box` ochilib-yopiladi
    books_boxes.forEach((box, i) => {
      if (i !== index) {
        box.style.maxHeight = null; // Qolgan `books_box` larni yopamiz
        box.classList.remove("open"); // Animatsiya sinfini ham olib tashlaymiz
      }
    });

    // Joriy `books_box` ning holatini o'zgartiramiz
    if (books_box.classList.contains("open")) {
      books_box.style.maxHeight = null; // Yopamiz
      books_box.classList.remove("open");
    } else {
      books_box.style.maxHeight = totalHeight + "px"; // Ochamiz
      books_box.classList.add("open");
    }
  });
});





const mobile_books_box = document.querySelectorAll(".mobile_books_box");
const mobile_books_box_open_toogle = document.querySelectorAll(".mobile_books_box_open_toogle");

mobile_books_box_open_toogle.forEach((toogle, index) => {
  toogle.addEventListener("click", function() {
    const current_mobile_books_box = mobile_books_box[index]; // index orqali har bir toogle ga mos mobile_books_box ni olamiz
    const childrenCount = current_mobile_books_box.children.length; // mobile_books_box ichidagi child elementlar sonini aniqlaymiz
    const maxHeightPerChild = 404; // har bir child element uchun maksimal balandlik
    const totalHeight = childrenCount * maxHeightPerChild; // umumiy balandlikni hisoblaymiz

    // Har bir tugmani bosganingizda, faqat tegishli `mobile_books_box` ochilib-yopiladi
    mobile_books_box.forEach((box, i) => {
      if (i !== index) {
        box.style.maxHeight = null; // Qolgan `mobile_books_box` larni yopamiz
        box.classList.remove("open"); // Animatsiya sinfini ham olib tashlaymiz
      }
    });

    // Joriy `mobile_books_box` ning holatini o'zgartiramiz
    if (current_mobile_books_box.classList.contains("open")) {
      current_mobile_books_box.style.maxHeight = null; // Yopamiz
      current_mobile_books_box.classList.remove("open");
    } else {
      current_mobile_books_box.style.maxHeight = totalHeight + "px"; // Ochamiz
      current_mobile_books_box.classList.add("open");
    }
  });
});
