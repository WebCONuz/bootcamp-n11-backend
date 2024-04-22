// -----------------------------------------------------------------------
// GET data --------------------------------------------------------------
// -----------------------------------------------------------------------
async function getData() {
  try {
    // Select HTML element
    let container = document.querySelector(".container");

    // get data
    let jsonData = await fetch("https://jsonplaceholder.typicode.com/photos");
    let data = await jsonData.json();

    // write to html
    data.forEach((item, index) => {
      if (index < 20) {
        let card = `
          <div class="card">
            <img src="${item.url}"  loading="lazy" alt="card-img" />
            <h4>${item.title}</h4>
          </div>
        `;
        container.innerHTML += card;
      }
    });
  } catch (err) {
    console.log(err.message);
  }
}
