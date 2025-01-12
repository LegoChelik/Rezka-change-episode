// ==UserScript==
// @name         Rezka change episode
// @version      1.2
// @description  Allows you to change episodes on hdrezka. B - previous, N - next
// @author       https://vk.com/legoklyachik
// @match        https://rezka.fi/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=rezkify.com
// @downloadURL  https://github.com/LegoChelik/Rezka-change-episode/raw/main/change_episode.user.js
// @updateURL    https://github.com/LegoChelik/Rezka-change-episode/raw/main/change_episode.user.js
// ==/UserScript==

function getData() {
    let season = document.getElementsByClassName('b-simple_season__item active')[0]
    let episode = document.getElementsByClassName('b-simple_episode__item active')[0]
    return {'s': season, 'e': episode}
}

document.addEventListener('keypress', (event) => {
    let keyName = event.key;
    if(keyName.match(/(N|Т)/i)){
        let data = getData();
        if (data.e.nextElementSibling != null) {
            data.e.nextElementSibling.click()
        } else if (data.s.nextElementSibling != null) {
            data.s.nextElementSibling.click()
        }
    }
    else if(keyName.match(/^(B|И)/i)){
        let data = getData();
        if (data.e.previousElementSibling != null) {
            data.e.previousElementSibling.click()
        } else if (data.s.previousElementSibling != null) {
            data.s.previousElementSibling.click()
        }
    }
    }
  )
