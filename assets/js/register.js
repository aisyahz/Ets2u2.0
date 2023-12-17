function register() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const fname = document.getElementById('fname').value;

    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // User registered successfully
            const user = userCredential.user;
            console.log(`User registered: ${user.email}`);

            // Example: Add data to Firestore
            var userData = firestore.collection('users').doc(user.uid);

            userData.set({
                fname: fname,
                age: '',
                email: email,
                password: password
            })
                .then(() =>
                    window.location.href = '../Components/myProfile.html'
                )
        })
        .catch((error) => {
            console.error(`Registration error: ${error.message}`);
            window.alert(`This email address has already been used to create an account.`);
        });
}