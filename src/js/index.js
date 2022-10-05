window.addEventListener("DOMContentLoaded", () => {
  const btn_right = document.querySelector(".btn_right"),
    video1 = document.querySelector(".video__media1"),
    video2 = document.querySelector(".video__media2"),
    btn = document.querySelector(".btn_left");

  btn_right.addEventListener("click", () => {
    video2.classList.toggle("video__active");
    video1.classList.toggle("video__disactive");
 
  });


  btn.addEventListener("click", () => {
    video2.classList.toggle("video__active");
    video1.classList.toggle("video__disactive");
   
  });

 
});

