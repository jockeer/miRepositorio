import firebase from 'firebase'
import 'firebase/firestore'
import config from './config'
firebase.initializeApp(config);

const db = firebase.firestore();

const save = model =>{
    db.collection('users')
        .add(model)
        .then(ref => {
            console.log('<====== Exito!')
        })
        .catch(err => {
            console.log('<==== Error!')
        })
}
export default save