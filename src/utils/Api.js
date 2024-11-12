import axios from "axios"

export const loginApiCall = async() => {
    const res = await axios.post("https://fundoonotes.incubation.bridgelabz.com/api/user/login", {}, {"email":"qwerty123@samp.com","password":"qwerty123"} )
    console.log(res);
    localStorage.setItem('accessToken', res?.data?.id)
    
}

export const getAllNotesApiCall = () => {
    return axios.get(`https://fundoonotes.incubation.bridgelabz.com/api/notes/getNotesList?access_token=${localStorage.getItem('accessToken')}`,)
}

export const addNoteApi = (payload) => {
    return axios.post(`https://fundoonotes.incubation.bridgelabz.com/api/notes/addNotes`, {headers: {
        "Content-Type": "multipart/form-data",
        "Authorization": `Bearer ${localStorage.getItem('accessToken')}`
    }}, payload)   
}