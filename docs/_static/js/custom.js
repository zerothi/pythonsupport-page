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
    window.location.href = `${baseUrl}menu/${os}/${userLevel}`;
}

function PyS_redirectUser(UserLevel) {
    let os = PyS_isOperatingSytem();
    userLevel = UserLevel;
    if (!os) {
        document.getElementById("PyS_userLevelSelector").classList.add('hidden');
        document.getElementById("PyS_osSelector").classList.remove('hidden');
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
