chrome.tabs.onActivated.addListener(function (tab) {
  console.log(tab.tabId, "ACTIVATED")
  chrome.tabs.get(tab.tabId, (ta) => {
    chrome.storage.sync.get("timer", function (res) {
      if (res["timer"] != undefined) {
        let vg = new Date(JSON.parse(res["timer"]).start);
        console.log(JSON.parse(res["timer"]))
        console.log(vg)
        console.log(new Date())
        if (vg.getDate() != new Date().getDate()) {
          chrome.storage.sync.set({ "timer": JSON.stringify({ start: Date.now(), ongoing: false }) });
          chrome.scripting.executeScript(
            {
              target: { tabId: tab.tabId },
              files: ['jquery.min.js', 'panic.js'],
            });
          return
        }
        if (String(ta.url).includes("https") && JSON.parse(res["timer"]).ongoing) {
          let url = new URL(ta.url);
          let origin = String(url.origin);
          if (proSites.includes(origin)) {
            chrome.scripting.executeScript(
              {
                target: { tabId: tab.tabId },
                files: ['jquery.min.js', 'content.js'],
              });
          } else {
            chrome.scripting.executeScript(
              {
                target: { tabId: ta.id },
                files: ['jquery.min.js', 'full.js'],
              });
          }
        } 
      }


    })


  }
  )

});
chrome.tabs.onCreated.addListener(function (tab) {
  console.log(tab.tabId + "CREATED")
  chrome.tabs.get(tab.tabId, (ta) => {
    chrome.storage.sync.get("timer", function (res) {
      if (res["timer"] != undefined) {
        let vg = new Date(JSON.parse(res["timer"]).start);
        console.log(JSON.parse(res["timer"]))
        console.log(vg)
        console.log(new Date())
        if (vg.getDate() != new Date().getDate()) {
          chrome.storage.sync.set({ "timer": JSON.stringify({ start: Date.now(), ongoing: false }) });
          chrome.scripting.executeScript(
            {
              target: { tabId: tab.tabId },
              files: ['jquery.min.js', 'panic.js'],
            });
          return
        }
        if (String(ta.url).includes("https") && JSON.parse(res["timer"]).ongoing) {
          let url = new URL(ta.url);
          let origin = String(url.origin);
          if (proSites.includes(origin)) {
            chrome.scripting.executeScript(
              {
                target: { tabId: tab.tabId },
                files: ['jquery.min.js', 'content.js'],
              });

          } else {
            chrome.scripting.executeScript(
              {
                target: { tabId: ta.id },
                files: ['jquery.min.js', 'full.js'],
              });
          }
        } 
        
      }

    })


  }
  )

});

chrome.tabs.onUpdated.addListener(function (tab, changeInfo, ta) {
  console.log(ta);
  console.log(ta.id + "UPDATED")
  chrome.storage.sync.get("timer", function (res) {
    if (res["timer"] != undefined) {
      let vg = new Date(JSON.parse(res["timer"]).start);
      console.log(JSON.parse(res["timer"]))
      console.log(vg)
      console.log(new Date())
      if (vg.getDate() != new Date().getDate()) {
        chrome.storage.sync.set({ "timer": JSON.stringify({ start: Date.now(), ongoing: false }) });
        chrome.scripting.executeScript(
          {
            target: { tabId: ta.id },
            files: ['jquery.min.js', 'panic.js'],
          });
        return
      }
      if (String(ta.url).includes("https") && JSON.parse(res["timer"]).ongoing) {
        let url = new URL(ta.url);
        let origin = String(url.origin);
        if (proSites.includes(origin)) {
          chrome.scripting.executeScript(
            {
              target: { tabId: ta.id },
              files: ['jquery.min.js', 'content.js'],
            });

        } else {
          chrome.scripting.executeScript(
            {
              target: { tabId: ta.id },
              files: ['jquery.min.js', 'full.js'],
            });
        }
      } 
    }

  })
});

let proSites = ["https://mail.google.com", "https://classroom.google.com", "https://drive.google.com", "https://docs.google.com", "https://web.kamihq.com","https://www.castlelearning.com", "https://www.deltamath.com", "https://apclassroom.collegeboard.org"];
