
function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // User logged in successfully
            const user = userCredential.user;
            console.log(`User logged in: ${user.email}`);
            window.alert(`User successfully logged in.`);
            // Redirect to another page
            window.location.href = '../Components/myProfile.html'
        })
        .catch((error) => {
            console.error(`Login error: ${error.message}`);
            window.alert(`Email address and Password does not match.`);
        });
}

function logingoogle() {
    const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

    auth.signInWithPopup(googleAuthProvider)
        .then((result) => {
            const user = result.user;
            console.log(`Google Sign-In successful: ${user.displayName}`);

            // Create a folder in Firestore under "users" with the user's UID as the document ID
            const userFolderRef = firestore.collection('users').doc(user.uid);

            userFolderRef.get().then((docSnapshot) => {
                if (!docSnapshot.exists) {
                    // Document does not exist, create the folder
                    userFolderRef.set({
                        fname: '',
                        age: '',
                        email: user.email,
                        password: 'Sign in with Google'
                    }); // You can add initial data if needed
                    console.log('User folder created in Firestore');
                } else {
                    console.log('User folder already exists in Firestore');
                }

                // You can redirect to another page here if needed
                window.location.href = '../Components/myProfile.html'
            }).catch((error) => {
                console.error('Error checking user folder:', error);
            });
        })
        .catch((error) => {
            console.error('Google Sign-In error:', error.message);
        });
}