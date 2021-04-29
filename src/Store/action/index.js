import firebase from '../../config/firebase';
import Swal from 'sweetalert2'


const facebookLogin = () => {
    return (dispatch) => {
        var today = new Date(),
            date = today.getDate() + ' / ' + (today.getMonth() + 1) + ' / ' + today.getFullYear();

        var provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then(function (result) {
                var user = result.user;
                console.log('Facebook result ==>', result)

                let logUser = {
                    name: user.displayName,
                    email: user.email,
                    profile: user.photoURL,
                    uid: user.uid,
                    date: date
                }
                firebase.database().ref('/').child(`users/${user.uid}`).push(logUser)
                    .then(() => {
                        dispatch({
                            type: 'FACEBOOKUSER',
                            payload: logUser
                        })
                        Swal.fire({
                            icon: 'success',
                            title: 'User Logged in Successfully!',
                            showConfirmButton: false,
                            timer: 1000
                        })
                    })
            }).catch(function (error) {
                console.log('Facebook Error ==>', error)
            });
    }
}
const googleLogin = () => {
    return (dispatch) => {
        var today = new Date(),
            date = today.getDate() + ' / ' + (today.getMonth() + 1) + ' / ' + today.getFullYear();

        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then(function (result) {
                var user = result.user;
                console.log('Google result ==>', result)

                let googleUser = {
                    name: user.displayName,
                    email: user.email,
                    profile: user.photoURL,
                    uid: user.uid,
                    date: date
                }
                firebase.database().ref('/').child(`users/${user.uid}`).push(googleUser)
                    .then(() => {
                        dispatch({
                            type: 'GOOGLEUSER',
                            payload: googleUser
                        })
                        Swal.fire({
                            icon: 'success',
                            title: 'User Logged in Successfully!',
                            showConfirmButton: false,
                            timer: 1000
                        })
                    })
            }).catch(function (error) {
                console.log('Facebook Error ==>', error)
            });
    }
}


// const googleLogin = () => {
//     return (dispatch) => {

// firebase.auth().onAuthStateChanged((user) => {
//     this.setState({
//         authUser: user
//     })
//     if (user) {

//         firebase.database().ref('users').on('value', (data) => {
//             for (var key in data.val()) {
//                 if (user.email === data.val()[key].email) {
//                     this.setState({
//                         authUser: data.val()[key],
//                         show2: false,
//                         show: false,
//                     })
//                 } else {
//                     this.setState({ signout: true })
//                 }
//             }
//         })
//     }
// })
//     }}

export {
    facebookLogin,
    googleLogin
}