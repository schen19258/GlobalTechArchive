function addStationElement(station) {
  station = station.split(" - ");
  let h4 = document.createElement("h4");
  h4.innerText = station[0];
  let p = document.createElement("p");
  p.innerText = station[1];
  document.getElementById("stations").append(h4, p);
}

function addWishlistElement(item) {
  let li = document.createElement("li");
  li.innerText = item;
  document.getElementById("wishlist").appendChild(li);
}

function searchStations() {
  document.getElementById("stations").innerHTML = "";
  let matches = filterByCity(
    document.getElementById("city-search-input").value,
    openStations
  );
  if (matches.length === 0) {
    let notFound = Object.assign(document.createElement("em"), {
      innerHTML: "Sorry, we're not there yet. Check back soon!",
    });
    document.getElementById("stations").appendChild(notFound);
    return;
  }
  matches.forEach((match) => addStationElement(match));
}
