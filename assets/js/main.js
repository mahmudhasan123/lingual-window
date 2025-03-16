function loadLessons() {
  fetch("https://openapi.programming-hero.com/api/levels/all")
    .then((res) => res.json())
    .then((data) => displayLessons(data.data));
}

function displayLessons(lessons) {
  const lessonContainer = document.getElementById("lessonContainer");
  for(let lesson of lessons){
    const lessonsDiv = document.createElement('div');
    lessonsDiv.innerHTML = `
        <button
            class="btn bg-transparent hover:bg-[#422AD520] text-[#422AD5] border-[#422AD5]"
          >
            <img src="assets/images/book-open.png" alt="" />
            Lesson - ${lesson.level_no}
          </button>
    `;
    lessonContainer.appendChild(lessonsDiv);
  }
}

loadLessons();
