console.log("It works");

const url = `http://localhost:3000/weather?address=%22La%20Habana,%20Cuba%22`;

async function fetchData(url) {
  try {
    let response = await fetch(url);
    let data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
}
const dataDiv = document.getElementById("dataDiv");
const form = document.getElementById("form");
const searchInput = document.getElementById("searchInput");
const descriptionP = document.createElement("p");
dataDiv.appendChild(descriptionP);

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  let locationToSearch = searchInput.value;

  if (locationToSearch === "") {
    return renderData({ error: "You must provide a place!" });
  }
  descriptionP.textContent = "Loading...";
  let { description, error } = await fetchData(
    `http://localhost:3000/weather?address=${locationToSearch}`
  );

  renderData({ description, error });
});

function renderData({ description, error }) {
  descriptionP.textContent = "";

  if (error) {
    descriptionP.textContent = `${error} :(`;
  } else {
    descriptionP.textContent = description;
  }
}
