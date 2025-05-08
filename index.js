const url = "https://rickandmortyapi.com/api/character";

const arrData = [];

const handleData = async () => {
  try {
    const fetchData = await fetch(url);
    const data = await fetchData.json();
    data.results.forEach((item) => {
      const character = item.name;
      const image = item.image;
      // console.log(image);

      arrData.push({
        name: character,
        image: image,
      });

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

const handleSearch = async () => {
  await handleData();
  const character = arrData.forEach((item) => {
    item.name;
  });

  const form = document.querySelector(".input");
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    
  });
};

handleSearch();

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const input = e.target.search.value.toLowerCase();
//   // console.log(data);

//   console.log("character: ", character, "name: ", input);
// });
