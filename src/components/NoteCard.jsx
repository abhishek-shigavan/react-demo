import Menu from '@mui/material/Menu';
import { useEffect, useState } from 'react';
import "./NoteCard.scss"

function NoteCard(props) {
    const { noteDetails, handleNotesList } = props
    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl)
    
    const handleIconsClick = (action) => {
//call an api
        const updatedNoteDetails = {
            ...noteDetails,
            color: action
        }
        // console.log(updatedNoteDetails);
        setAnchorEl(null)
        handleNotesList(updatedNoteDetails, "color")
        
    }

    return (
        <div style={{border: '1px solid black', borderRadius: '4px', padding: '20px 15px', margin: '20px', width: '200px', backgroundColor: noteDetails.color}}>
            <span>{noteDetails.title}</span><br />
            <span>{noteDetails.description}</span><br /><br /><br /><br />
            <button onClick={(e)=> setAnchorEl(e.currentTarget)}>color</button>
            <Menu
            // id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={() => setAnchorEl(null)}
            MenuListProps={{
            // 'aria-labelledby': 'basic-button',
            }}
        >
                <div className="color-palate-cnt">    
                <div className="col1" onClick={() =>handleIconsClick('#FFFFFF')}></div>
                <div className="col2" onClick={() =>handleIconsClick('#FAAFA8')}></div>
                <div className="col3" onClick={() =>handleIconsClick('#F39F76')}></div>
                <div className="col4" onClick={() =>handleIconsClick('#FFF8B8')}></div>
                <div className="col5" onClick={() =>handleIconsClick('#E2F6D3')}></div>
                <div className="col6" onClick={() =>handleIconsClick('#B4DDD3')}></div>
                <div className="col7" onClick={() =>handleIconsClick('#D4E4ED')}></div>
                <div className="col8" onClick={() =>handleIconsClick('#AECCDC')}></div>
                <div className="col9" onClick={() =>handleIconsClick('#D3BFDB')}></div>
                <div className="col10"  onClick={() => handleIconsClick('#F6E2DD')}></div>
                <div className="col11"  onClick={() => handleIconsClick('#E9E3D4')}></div>
                <div className="col12" onClick={() => handleIconsClick('#EFEFF1')}></div>           
            </div>
                  </Menu>
        </div>
    )
}

export default NoteCard
