function Test(){
  fetch("https://api.unsplash.com/photos/?client_id=7egRKx7SVQe3XE01hgm8fxaRFwiWPlT1jVxY7IX8Y0w")
        .then((res) => {
          const data = res.json();
          return data;
        })
        .then((data) => {
          console.log(data);
          let container = document.querySelector(".container .row");
          for (let i = 0; i < data.length; i++) {
            let col = document.createElement("div");
            col.setAttribute("class","col-4");
            let img = document.createElement("img");
            col.append(img);
            img.setAttribute("src", data[i].urls.small_s3);
            img.setAttribute("class", "w-100");
            container.append(col);
          }
        });
    }