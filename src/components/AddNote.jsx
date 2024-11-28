import { useState } from "react"
import { addNoteApi } from "../utils/Api"

function AddNote ({handleNotesList}) {
    const[isExpanded, setIsExpanded] = useState(false)
    const handleAddNote = () => {
        // state toggle
        //api call --> title & description should be there
        // payload --> { title : "vlaue", description: "value", color: "#ffffff"}
        // addNoteApi({ title : "vlaue", description: "value", color: "#ffffff"})
        handleNotesList({id: 110, title: "Product 10", description: "This is Product 10", quantity: 13})
    }

    return (
        <>
            {isExpanded ?
                <div>
                    <input type="text" placeholder="title"/>
                    <br />
                    <input type="text" placeholder="description"/>
                </div>
                : <span>Take a note</span>
            }
        </>
    )
}

export default AddNote
