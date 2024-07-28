let userLevel;

function PyS_isOperatingSytem() {
    // This could be used to pre-check the OS question
    if (navigator.appVersion.indexOf("Android") != -1) return false;
    if (navigator.appVersion.indexOf("iPhone") != -1) return false;
    if (navigator.appVersion.indexOf("Win") != -1) return "windows";
    if (navigator.appVersion.indexOf("Mac") != -1) return "macos";
    if (navigator.appVersion.indexOf("Linux") != -1) return "linux";
    return false;
}

function PyS_osSelector(os) {
    const baseUrl = window.location.href.replace(/\/quickstart\/.*/, '/'); // Construct base URL excluding 'quickstart'
    window.location.href = `${baseUrl}menu/${os}/${userLevel}`;
}

function PyS_redirectUser(UserLevel) {
    let os = PyS_isOperatingSytem();
    userLevel = UserLevel;
    if (!os) {
        document.getElementById("PyS_userLevelSelector").classList.add('hidden');
        document.getElementById("PyS_osSelector").classList.remove('hidden');
    } else {
        const baseUrl = window.location.href.replace(/\/quickstart\/.*/, '/'); // Construct base URL excluding 'quickstart'
        window.location.href = `${baseUrl}menu/${os}/${userLevel}`;
    }
}


