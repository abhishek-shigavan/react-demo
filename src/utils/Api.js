import axios from "axios"

export const loginApiCall = () => {
    axios.post("https://fundoonotes.incubation.bridgelabz.com/api/user/login", {}, {"email":"qwerty123@samp.com","password":"qwerty123"} )
}

export const getAllNotesApiCall = () => {
    return axios.get("https://fundoonotes.incubation.bridgelabz.com/api/notes/getNotesList?access_token=u6gfvqD7uZK6dqQR9MhJ086fWCmwLT6TntAwfb29T4OSmbnSwSLrQq1CRBOJci0u")
}