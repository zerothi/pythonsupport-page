// var userLevel = userLevel || 'package-managed.html';

let userLevel;

function PyS_isOperatingSytem() {
    if (navigator.appVersion.indexOf("Android") != -1) return false;
    if (navigator.appVersion.indexOf("iPhone") != -1) return false;
    if (navigator.appVersion.indexOf("Win") != -1) return "windows";
    if (navigator.appVersion.indexOf("Mac") != -1) return "macos";
    if (navigator.appVersion.indexOf("Linux") != -1) return "linux";
    return false;
}

function PyS_osSelector(os) {
    const baseUrl = getBaseUrl();
    if (os === "windows") {
        window.location.href = `${baseUrl}menu/${os}/fully-manual.html`;
    } else {
        window.location.href = `${baseUrl}menu/${os}/${userLevel}`;
    }
}

function PyS_redirectUser(UserLevel) {
    let os = PyS_isOperatingSytem();
    userLevel = UserLevel;
    if (!os) {
        toggleBanner(); // Show os selector
    } else if (os === "windows") {
        const baseUrl = getBaseUrl();
        window.location.href = `${baseUrl}menu/${os}/fully-manual.html`;
    } else {
        const baseUrl = getBaseUrl();
        window.location.href = `${baseUrl}menu/${os}/${userLevel}`;
    }
}

function getBaseUrl() {
    let pathArray = window.location.pathname.split('/');
    let newPathname = "";
    for (let i = 0; i < pathArray.length - 1; i++) {
        if (pathArray[i] !== "quickstart") {
            newPathname += pathArray[i] + "/";
        }
    }
    return window.location.origin + newPathname;
}

function toggleBanner() {
    const bannerContainer = document.getElementById('bannerContainer');
    const topBanner = document.querySelector('.topBanner');
    const bottomBanner = document.querySelector('.bottomBanner');
    const osSelector = document.getElementById('PyS_osSelector');

    bannerContainer.classList.toggle('collapsed');
    // Delay the execution by 0.5 seconds (500 milliseconds)
    setTimeout(() => {
        topBanner.classList.toggle('hidden');
        bottomBanner.classList.toggle('hidden');
        osSelector.classList.toggle('hidden');
        bannerContainer.classList.toggle('collapsed');
    }, 500);
    
}

function noRed() {
    const bottomBanner = document.querySelector('.bottomBanner');
    bottomBanner.classList.toggle('hidden');
}
