$(function(){
    $('#google').click(function() {

        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            location.reload();
        }).catch(function(error) {
            // Handle Errors here.
            console.log('エラー')
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
        });

    });

    $('#new').click(function() {
        var email = $('#email').val();
        var password = $('#pass').val();

        firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
            // existing user
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log('ログイン')
            console.log(errorCode)
            console.log(errorMessage)
            console.log(email)
            console.log(password)
        });
        location.reload();
    });

    $('#login').click(function() {
        var email = $('#email').val();
        var password = $('#pass').val();
        firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode)
            console.log(errorMessage)
            console.log(email)
            console.log(password)

        });
        location.reload();
    });


    $('#logout').click(function() {
        console.log('サインアウト')
        firebase.auth().signOut().catch(function(error) {
            alert('サインアウトできませんでした');
        });
        location.reload();
    });

});
