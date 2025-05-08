const url = "https://rickandmortyapi.com/api/character";

let arrData = [];

const handleData = async () => {
  try {
    const fetchData = await fetch(url);
    const data = await fetchData.json();
    data.results.forEach((item) => {
      const character = item.name;
      const image = item.image;
      // console.log(image);

      // arrData.push({
      //   name: character,
      //   image: image,
      // });

      // arrData = [...arrData, {name: character, image: image}]
      arrData.push({ name: character, image: image });

      const box = document.createElement("div");
      const p = document.createElement("p");
      p.textContent = character;

      const img = document.createElement("img");
      img.setAttribute("src", `${image}`);

      box.append(img);
      box.append(p);
      document.getElementById("container").prepend(box);
    });
  } catch (err) {
    console.log(err);
  }
};

// const handleSearch = async () => {
//   await handleData();
//   const character = arrData.forEach((item) => {
//     item.name;
//   });

//   form.addEventListener("submit", (e) => {
//     e.preventDefault();

//   });
// };

// handleSearch();

// handleData();

const handleSearch = async () => {
  await handleData();

  const form = document.querySelector(".input");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const container = document.querySelector("#container");
    container.innerHTML = "";

    const searchKeyword = e.target.search.value.toLowerCase();
    // console.log(searchKeyword);

    arrData.forEach((item) => {
      if (item.name.toLowerCase() === searchKeyword) {
        const box = document.createElement("div");

        const p = document.createElement("p");
        p.textContent = item.name;
        box.prepend(p);
        
        const image = document.createElement("img");
        image.setAttribute("src", `${item.image}`);
        box.prepend(image);
        container.append(box);
      }
    });

  });
};

handleSearch();
