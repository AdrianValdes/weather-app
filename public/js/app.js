console.log("It works");

const dataDiv = document.getElementById("dataDiv");
const form = document.getElementById("form");
const searchInput = document.getElementById("searchInput");
const descriptionP = document.createElement("p");
descriptionP.style.width = "650px";
dataDiv.appendChild(descriptionP);

async function fetchData(url) {
  try {
    let response = await fetch(url);
    let data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
    descriptionP.textContent = `${e} :(`;
  }
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  let locationToSearch = searchInput.value;

  if (locationToSearch === "") {
    return renderData({ error: "You must provide a place!" });
  }
  descriptionP.textContent = "Loading...";
  let { description, error } = await fetchData(
    `/weather?address=${locationToSearch}`
  );
  searchInput.value = "";
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
