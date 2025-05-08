const url = "https://rickandmortyapi.com/api/character";
      
      const handleData = async () => {
        try {
          const fetchData = await fetch(url);
          const data = await fetchData.json();
          data.results.forEach(item => {
            const character = item.name
            const image = item.image
            // console.log(image);
            
            const box = document.createElement('div')
            const p = document.createElement('p')
            p.textContent = character
            
            const img = document.createElement('img')
            img.setAttribute('src', `${image}`)

            box.append(img)
            box.append(p)
            document.getElementById('container').prepend(box)



            // h1.innerHTML = character
            // div.prepend(h1)
            // const div = document.createElement('div')
          });
          
        } catch (err) {
          console.log(err);
        }
      };

      handleData();