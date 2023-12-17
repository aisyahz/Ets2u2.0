firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        document.getElementById('sign-out-container').innerHTML = `
        <button onclick="signOut()">Sign Out</button>
        `;
    } else {
    }
});

function signOut() {
    firebase.auth().signOut();
    window.alert(`User successfully signed out.`);
    window.location.href = '/index.html';
}

function toggleSidebar() {
    var sidebar = document.getElementById('mySidenav');
    if (sidebar.style.width === '250px') {
        sidebar.style.width = '0';
    } else {
        sidebar.style.width = '250px';
    }
}