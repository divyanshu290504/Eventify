import React, {useState} from "react";
import Modal from "react-modal";
import Datetime from "react-datetime";

export default function({isOpen , onClose, onEventAdded}){

    const [title,setTitle] = useState();
    const [start,setStart] = useState(new Date());
    const [end,setEnd] = useState(new Date());

    const customStyles = {
        content: {
            border: "1px solid",
            opacity:"1",
            height: "35%",
        }
      };

      const form_style ={
        height:"100px"
      }
    const onSubmit = (event) => {
        event.preventDefault();

        onEventAdded({
            title,
            start,
            end
        })
        onClose();
    }

    return(
        <Modal isOpen = {isOpen} onRequestClose={onClose} style={customStyles}>
            <form onSubmit={onSubmit} style={form_style}>
                <input placeholder="Title" value={title} onChange = {e=>setTitle(e.target.value)} />

                <div>
                    <label>Start Date</label>
                    <Datetime value={start} onChange={date => setStart(date)} />
                </div>
                
                <div>
                    <label>End Date</label>
                    <Datetime value={end} onChange={date => setEnd(date)} />
                </div>

                <button>Add Event</button>
            </form>
        </Modal>
    )
}