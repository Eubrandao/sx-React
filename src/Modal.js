import React from "react";
import {Modal, Button} from 'react-bootstrap';
import image from './images/logotipo_unip.jpg'

import './styles/app.scss'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }

  handleShow = () => {
    this.setState({
      show: !this.state.show
    });
  };

  handleClose = () =>{
    this.setState({
      show: false
    })
  }

    render(){

      return (
        <>
          <Button variant="primary" onClick={this.handleShow}>
            Mais
          </Button>
    
          <Modal className="teste" show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Sobre</Modal.Title>
            </Modal.Header>
  
            <Modal.Body>
          
  
    
                <div style={{display:"flex", justifyContent:"space-between"}}>
                    <img style={{width: "120px"}} src={image}/>
                    
                </div>
  
                <div style={{display:"flex", justifyContent:"space-between"}}>
                    <div style={{fontSize: '20px'}}>{this.state.show ? <div>{this.props.listagem.course.name}</div> : null}</div>
                    <div style={{fontSize: '20px', fontWeight: 'bold'}}>{this.state.show ? <div>{this.props.listagem.course.level}</div> : null}</div>

                   
                </div>

                <div style={{display:"flex", justifyContent:"space-between"}}>
                    <div style={{fontSize: '20px'}}>{this.state.show ? <div>{this.props.listagem.university.name}</div> : null}</div>
                    <div style={{fontSize: '20px'}}>{this.state.show ? <div>{this.props.listagem.campus.city}</div> : null}</div>

                   
                </div>
  
                <div style={{display:"flex", justifyContent:"center"}}>
                <div style={{fontSize: '20px'}}>{this.state.show ? <div>{this.props.listagem.full_price}</div> : null}</div>
                </div>
  
  
    
            </Modal.Body>
  
      
          
  
      
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClose}>
                Fechar
              </Button>
              
            </Modal.Footer>
          </Modal>
      
        </>
        );
    }
  
    
  }
  
