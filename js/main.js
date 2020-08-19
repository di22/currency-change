document.addEventListener("DOMContentLoaded", function (){
  document.querySelector("#form").onsubmit = function () {
    const currency = document.querySelector("#type").value;
    fetch(`https://api.exchangeratesapi.io/latest?base=USD&symbol=${currency}`).then(function (res) {
      return res.json();
    }).then(function (data) {
      const result = `<span> 1 USD is equal to ${data.rates[currency.toUpperCase()]} ${currency}</span>`
      document.querySelector("#result").innerHTML = result;
    })
    return false;
  }
})
