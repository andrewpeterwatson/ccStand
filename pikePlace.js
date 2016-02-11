var newShopForm = document.getElementById("NewShopInfo");
var nameInput = document.getElementById("storeName");
var newShopInput = document.getElementById("shopNameId");
var minCustInput = document.getElementById("minCustId");
var maxCustInput = document.getElementById("maxCustId");
var aveCustInput = document.getElementById("aveCookId");
newShopForm.addEventListener("submit", function() {
  event.preventDefault();
  locations.unshift(newShopInput.value);
  minCust.unshift(parseInt(minCustInput.value));
  maxCust.unshift(parseInt(maxCustInput.value));
  aveCook.unshift(parseInt(aveCustInput.value));
  newShops.unshift(new Shop(locations[0],minCust[0],maxCust[0],aveCook[0]));
  for (var i = 0; i < 1; i++) {
    newShops[0].getCookies();
    newShops[0].storeRender();
  }
});
var hours = ["10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm",];
var locations = ["Pike Place","SeaTac","Southcenter","Bellevue","Alki",];
var minCust = [17,6,11,20,3];
var maxCust = [88,24,38,48,24];
var aveCook = [5.2,1.2,1.9,3.3,2.6];
var newShops = [];
function Shop(name, minCustomer, maxCustomer, aveCookPerCus) {
  this.stores = name;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.aveCookiesPerCustomer = aveCookPerCus;
  this.cookiesSoldPerHour = [];
  this.cookiesPerHour = [];
  this.totalCookies = 0;
  this.randomNum = function(min, max) {
    return Math.random() * (max - min) + 1;
  }
  this.getCookies = function() {
    for (var i = 0; i < hours.length; i++) {
      var randomCustomerNum = this.randomNum(this.minCustomer,this.maxCustomer);
      var cookiesSold = Math.floor(randomCustomerNum * this.aveCookiesPerCustomer);
      this.cookiesPerHour.push(hours[i] + ": " + cookiesSold);
      this.totalCookies += cookiesSold;
      this.cookiesSoldPerHour.push(cookiesSold);
    }
    this.cookiesPerHour.push("Total: " + this.totalCookies);
  }
};
for (var i = 0; i < locations.length; i++) {
  newShops.push(new Shop(locations[i],minCust[i],maxCust[i],aveCook[i]));
};
for (var i = 0; i < newShops.length; i++) {
  newShops[i].getCookies();
};
    var tableEl = document.getElementById("salesTable");
    var tHeadEl = document.createElement("thead");
    var tBodyEl = document.createElement("tbody");
    var hoursTrEl = document.createElement("tr");
    var spaceTh = document.createElement("th");
    spaceTh.textContent = "";
    hoursTrEl.appendChild(spaceTh);
    Shop.prototype.hoursRender = function() {
      for (var i = 0; i < hours.length; i++) {
        var hoursThEl = document.createElement("th");
        hoursThEl.textContent = hours[i];
        hoursTrEl.appendChild(hoursThEl);
      }
      totalHeaderEl = document.createElement("th");
      totalHeaderEl.textContent = "Total";
      hoursTrEl.appendChild(totalHeaderEl);
      tHeadEl.appendChild(hoursTrEl);
    };
      Shop.prototype.storeRender = function() {
        var tableTrEl = document.createElement("tr");
        var newShopsTh = document.createElement("th");
        newShopsTh.textContent = this.stores;
        tableTrEl.appendChild(newShopsTh);

        for (var i = 0; i < this.cookiesSoldPerHour.length; i++) {
          var tableTdEl = document.createElement("td");
          tableTdEl.textContent = this.cookiesSoldPerHour[i];
          tableTrEl.appendChild(tableTdEl);
        }
        var totalTdEl = document.createElement("td");
        totalTdEl.textContent = this.totalCookies;
        tableTrEl.appendChild(totalTdEl);

        tBodyEl.appendChild(tableTrEl);
        tableEl.appendChild(tHeadEl);
      tableEl.appendChild(tBodyEl);
    };
    for (var i = 0; i < newShops.length; i++) {
      newShops[i].storeRender();
    };
    for (var i = 0; i < 1; i++) {
    newShops[i].hoursRender();
  };
