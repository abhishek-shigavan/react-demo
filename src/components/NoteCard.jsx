function NoteCard(props) {
    const { noteDetails } = props
    
    return (
        <>
            <span>{noteDetails.title}</span><br />
            <span>{noteDetails.description}</span><br /><br /><br /><br />
        </>
    )
}

export default NoteCard
