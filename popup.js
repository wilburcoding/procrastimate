let font = new FontFace("atma", "url('Atma-Regular.ttf')");
document.fonts.add(font);
function stimer() {
  $("#timer").css("display", "flex")
  $("#menu").css("display", "none")

}
$(window).on("load", function () {
  $("#timer").css("display", "none")
  $("#menu").css("display", "flex")
  chrome.storage.sync.get("timer", function (res) {
    if (res["timer"] == undefined) {
      chrome.storage.sync.set({ "timer": JSON.stringify({ start: Date.now(), ongoing: false }) });
    }
    let d = JSON.parse(res["timer"]);
    if (d.ongoing) {
      stimer()
    }
    $("#op").on("click", function () {
      chrome.storage.sync.set({ "timer": JSON.stringify({ start: Date.now(), ongoing: true }) });
      stimer()

    })
  });


})
$("#monkey").on("click", function () {
  chrome.storage.sync.get("timer", function (res) {
    if (res["timer"] != undefined) {
      chrome.storage.sync.set({ "timer": JSON.stringify({ start: Date.now()-1000*60*60*24, ongoing: false }) });
    }
  })
})
setInterval(function () {
  chrome.storage.sync.get("timer", function (res) {
    if (res["timer"] == undefined) {
      chrome.storage.sync.set({ "timer": JSON.stringify({ start: Date.now(), ongoing: false }) });
    }
    let d = JSON.parse(res["timer"]);
    if (d.ongoing) {
      var da = new Date();
      var h = da.getHours();
      var m = da.getMinutes();
      var s = da.getSeconds();
      var secondsUntilEndOfDate = (24 * 60 * 60) - (h * 60 * 60) - (m * 60) - s;
      var hleft = Math.floor(secondsUntilEndOfDate / 60 / 60);
      var mleft = Math.floor(secondsUntilEndOfDate / 60 % 60);
      $("#tvalue").html(`${hleft}h ${mleft}m`)
    }
    let vg = new Date(d.start);
    if (vg.getDate() != new Date().getDate() && d.ongoing) {
      chrome.storage.sync.set({ "timer": JSON.stringify({ start: Date.now(), ongoing: false }) });

    }


  });


}, 500)