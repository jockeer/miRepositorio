import firebase from 'firebase'
import 'firebase/firestore'
import config from './config'
firebase.initializeApp(config);

const db = firebase.firestore();
db.settings({
    timestampsInSnapshots:true
})

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
const list=(callback)=>{
    db.collection('users').onSnapshot(querySnapshot =>{
        const list = []
        querySnapshot.forEach(doc =>{
            list.push(doc.data())
        })
        callback(list)
    })
}
export{
    save,
    list
}