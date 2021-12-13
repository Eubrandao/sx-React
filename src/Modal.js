import React, {useEffect, useState} from "react";
import {Modal, Button} from 'react-bootstrap';
import image from './images/logotipo_unip.jpg'

import './styles/app.scss'

function Modals() {
    const [show, setShow] = useState(false);
    const [course,setCourse] = useState([])
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(()=>{
      fetch('https://api-sx.herokuapp.com/list/')
      .then(response=> response.json())
      .then(result => setCourse(result))
      .then(result => console.log(result))
      .catch(error=> console.log(error))
    
    },[])
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Mais
        </Button>
  
        <Modal className="teste" show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Sobre</Modal.Title>
          </Modal.Header>

          {
    
    course.map(csr=>
          <Modal.Body>
        

  
              <div style={{display:"flex", justifyContent:"space-between"}}>
                  <img style={{width: "120px"}} src={image}/>
                  
              </div>

              <div style={{display:"flex", justifyContent:"space-between"}}>
                  <h1 style={{fontSize:"20px"}}>{csr.course.name}</h1>
                  <h1 style={{fontSize:"20px"}}>{csr.course.level}</h1>
              </div>

              <div style={{display:"flex", justifyContent:"center"}}>
                  <h1>{csr.full_price}</h1>
              </div>


  
          </Modal.Body>

    
        )

      }
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Fechar
            </Button>
            
          </Modal.Footer>
        </Modal>
    
      </>
    );
  }
  
 export default Modals