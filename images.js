const ul = document.getElementById("ul");
console.log(ul);
fetch("https://yuniyapi.herokuapp.com/allImage")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);

    data.forEach((e) => {
      console.log(e);
      const img = document.createElement("img");
      img.style.width = "400px";
      img.src = `https://yuniyapi.herokuapp.com/` + e.imagename;
      console.log(e);
      //   img.dataset.imgId =
      const div = document.createElement("div");
      div.classList.add("swiper-slide");
      div.append(img);

      ul.append(div);
    });
  });
