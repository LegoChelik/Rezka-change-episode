// ==UserScript==
// @name         Rezka change episode
// @version      1.0
// @description  Allows you to change episodes on hdrezka. B - previous, N - next
// @author       https://vk.com/legoklyachik
// @match        https://rezkify.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=rezkify.com
// @downloadUrl  https://github.com/LegoChelik/Rezka-change-episode/raw/main/change_episode.user.js
// @updateUrl    https://github.com/LegoChelik/Rezka-change-episode/raw/main/change_episode.user.js
// ==/UserScript==

function changeEpisode(change, episodeList) {
    if (change >= 0 && change != episodeList.length) episodeList[change].click()
}

function changeSeason(change, seasonList) {
    if (change >= 0 && change != seasonList.length) seasonList[change].click()
}

function getData() {
    let url = window.location.href.split('#')[1];
    url = url.split('-');
    let data = {'t': 0, 's':-1, 'e':-1};
    let keys = Object.keys(data);
    for (let i = 0; i<3; i++) {
        data[keys[i]] += Number(url[i].split(':')[1]);
    }
    let seasonList = document.getElementsByClassName('b-simple_season__item');
    let season = document.getElementById('simple-episodes-list-'+(data.s+1));
    let episodeList = season.getElementsByClassName('b-simple_episode__item');
    return {'currentEp': data.e, 'currentSeas': data.s, 'seasonList': seasonList, 'episodeList': episodeList};
}

document.addEventListener('keypress', (event) => {
    let keyName = event.key;
    if(keyName.match(/(N|Т)/i)){
        let data = getData();
        if (data.currentEp == data.episodeList.length-1) changeSeason(data.currentSeas+1, data.seasonList);
        else changeEpisode(data.currentEp+1, data.episodeList);
    }
    if(keyName.match(/(B|И)/i)){
        let data = getData();
        if (data.currentEp == 0) changeSeason(data.currentSeas-1, data.seasonList);
        else changeEpisode(data.currentEp-1, data.episodeList);
    }
  })
