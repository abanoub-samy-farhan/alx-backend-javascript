import {uploadPhoto, createUser} from "./utils"
export default function handleProfileSignup(){
    uploadPhoto().then((photo) => {
        createUser().then((user) => {
            console.log(`${photo.body} ${user.firstName} ${user.lastName}`);
        })
    })
}