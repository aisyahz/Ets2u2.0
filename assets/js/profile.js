auth.onAuthStateChanged((user) => {
    if (user) {
        // User is signed in
        const collectionRef = firestore.collection('users').doc(user.uid);
        collectionRef.get().then((doc) => {
            if (doc.exists) {
                const userData = doc.data();
                document.getElementById("userid").value = user.uid || "";
                document.getElementById("email").value = userData.email || "";
                document.getElementById("password").value = userData.password || "";
                document.getElementById("fname").value = userData.fname || "";
                document.getElementById("phone").value = userData.phone || "";
            } else {
                console.log("No such document!");
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
    } else {
        // User is not signed in
        console.log("User not logged in");
    }
});

function editForm() {
    var inputs = document.querySelectorAll('.form-group input:not(#userid)');
    inputs.forEach(function (input) {
        input.removeAttribute('readonly');
    });
}
function saveForm() {
    var userid = document.getElementById('userid').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var fname = document.getElementById('fname').value;
    var phone = document.getElementById('phone').value;

    // Example: Update data in Firestore
    var userData = firestore.collection('users').doc(userid);
    console.log("User ID: " + userid);

    userData.update({
        email: email,
        password: password,
        fname: fname,
        phone: phone
    })
        .then(function () {
            console.log('Document successfully updated!');
        })
        .catch(function (error) {
            console.error('Error updating document: ', error);
        });
}

// // Upload file(s)
// function upload() {
//     const user = firebase.auth().currentUser;
//     const singleInput = document.getElementById('single');
//     const single = singleInput.files[0];
//     const multiInput = document.getElementById('multi');
//     const multi = multiInput.files;

//     if (single) {
//         // Create a reference to the file in Firebase Storage
//         const fileRef = storage.ref(`users/${user.uid}/picture/${single.name}`);
//         // Upload the file
//         fileRef.put(single).then((snapshot) => {
//             console.log('File uploaded successfully!');
//             // You can get the download URL if needed
//             snapshot.ref.getDownloadURL().then((downloadURL) => {
//                 console.log('File available at', downloadURL);
//             });
//         }).catch((error) => {
//             console.error('Error uploading file:', error.message);
//         });
//     } else {
//         console.error('No picture selected.');
//     }
//     if (multi.length > 0) {
//         for (let i = 0; i < multi.length; i++) {
//             const file = multi[i];
//             // Create a reference to the file in Firebase Storage
//             const fileRef = storage.ref(`users/${user.uid}/images/${file.name}`);
//             // Upload the file
//             fileRef.put(file).then((snapshot) => {
//                 console.log('File uploaded successfully!');
//                 // You can get the download URL if needed
//                 snapshot.ref.getDownloadURL().then((downloadURL) => {
//                     console.log('File available at', downloadURL);
//                 });
//             }).catch((error) => {
//                 console.error('Error uploading file:', error.message);
//             });
//         }
//     } else {
//         console.error('No images selected.');
//     }
// }

