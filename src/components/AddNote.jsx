import { addNoteApi } from "../utils/Api"

function AddNote ({handleNotesList}) {
    const handleAddNote = () => {
        // state toggle
        //api call --> title & description should be there
        // payload --> { title : "vlaue", description: "value", color: "#ffffff"}
        // addNoteApi({ title : "vlaue", description: "value", color: "#ffffff"})
        handleNotesList({id: 110, title: "Product 10", description: "This is Product 10", quantity: 13})
    }

    return (
        <>
            <h1>AddNote</h1>
            <button onClick={handleAddNote}>close</button>
            <br /><br /><br />
        </>
    )
}

export default AddNote
