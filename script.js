let apikey = `
https://v6.exchangerate-api.com/v6/${API_KEY}/latest/USD`;

const fromdropdown = document.getElementById("from-convert");
const todropdown = document.getElementById("to-convert");

countries.forEach((currency) => {
  var option = document.createElement("option");
  option.value = currency;
  option.textContent = currency;
  fromdropdown.add(option); // Add the option to the "from-convert" select
});

countries.forEach((currency) => {
  var option = document.createElement("option");
  option.value = currency;
  option.textContent = currency;
  todropdown.add(option); // Add the option to the "to-convert" select
});

fromdropdown.value = "USD";
todropdown.value = "PKR";

let currencyconvertor = () => {
  console.log("amount");
  let amount = document.querySelector("#amount").value;
  let fromcurrency = fromdropdown.value;
  let tocurrency = todropdown.value;

  if ((amount.length = !0)) {
    fetch(apikey)
      .then((resp) => resp.json())
      .then((data) => {
        let fromExchange = data.conversion_rates[fromcurrency];
        let toExchange = data.conversion_rates[tocurrency];

        let convertRate = (amount / fromExchange) * toExchange;
        result.innerHTML = `${amount} ${fromcurrency} = ${convertRate.toFixed(
          2
        )} ${tocurrency}`;
      });
  } else {
    alert("please fill the amount");
  }
};
document.querySelector("#convertorbutton").addEventListener("click", () => {
  currencyconvertor();
});
window.addEventListener("load", currencyconvertor());
