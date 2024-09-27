const books_boxes = document.querySelectorAll(".books_box");
const book_box_open_toogles = document.querySelectorAll(".book_box_open_toogle");

book_box_open_toogles.forEach((toogle, index) => {
  toogle.addEventListener("click", function() {
    const books_box = books_boxes[index];
    const childrenCount = books_box.children.length; 
    const maxHeightPerChild = 531; 
    const totalHeight = childrenCount * maxHeightPerChild; 

    books_boxes.forEach((box, i) => {
      if (i !== index) {
        box.style.maxHeight = null; 
        box.classList.remove("open"); 
      }
    });

    if (books_box.classList.contains("open")) {
      books_box.style.maxHeight = null;
      books_box.classList.remove("open");
    } else {
      books_box.style.maxHeight = totalHeight + "px"; 
      books_box.classList.add("open");
    }
  });
});





const mobile_books_box = document.querySelectorAll(".mobile_books_box");
const mobile_books_box_open_toogle = document.querySelectorAll(".mobile_books_box_open_toogle");

mobile_books_box_open_toogle.forEach((toogle, index) => {
  toogle.addEventListener("click", function() {
    const current_mobile_books_box = mobile_books_box[index]; 
    const childrenCount = current_mobile_books_box.children.length;
    const maxHeightPerChild = 404;
    const totalHeight = childrenCount * maxHeightPerChild;

    mobile_books_box.forEach((box, i) => {
      if (i !== index) {
        box.style.maxHeight = null;
        box.classList.remove("open");
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
