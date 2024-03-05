( function () {
  startup();
})();

async function getData() {
  let response = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=57.00216540&lon=33.98531420&appid=7a4fc0d2ee016fb0184760cac9429b46"); 
  const jsonData = await response.json();
  const temp = k2c(jsonData.main.temp).toString();
  console.log(temp);

  let val = document.getElementById("val");
  val.innerHTML = temp.slice(0, temp.indexOf(".") + 3);

  setTimeout(() => {getData();}, 5000);
}

function k2c (kelvins) {
  return kelvins - 272.15;
}

function startup() {
  setTimeout(() => {getData();}, 1000);
}
