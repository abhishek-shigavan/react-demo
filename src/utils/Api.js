import axios from "axios"

export const loginApiCall = () => {
    axios.post("https://fundoonotes.incubation.bridgelabz.com/api/user/login", {}, {"email":"qwerty123@samp.com","password":"qwerty123"} )
}