import React,{useState} from "react";
import * as bootstrap from 'bootstrap'
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";



export default  function Rules(){
    
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);

    function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
    }


    <div id = "rules" class="modal"  tabindex="-1">
    <div class="modal-dialog modal-fullscreen-sm-down">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Rules</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        
        <div class="modal-body">
          <p>Modal body text goes here.</p>
          
        </div>

        <div class="modal-footer">    
        </div>
      </div>
    </div>
  </div>
    return(
    <div>
    
        <button  className="me-2" onClick={handleShow}>
        Rules
        </button>

    <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
        <Modal.Title>RULES</Modal.Title>
        </Modal.Header>
        <Modal.Body>Rules text</Modal.Body>
    </Modal>
    
            </div>
        

    )
} 