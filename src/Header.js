import React from 'react'
import {InputGroup, FormControl, Button} from 'react-bootstrap'
import './styles/header.scss'

const Header = ()=>{

 
  
    return(
      <>


        <div className="nav">
            <h1>Sx</h1>
            <InputGroup className="mb-3">
    <FormControl
      placeholder="Filtrar"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
    />
    <Button variant="outline-secondary" id="button-addon2">
      Pesquisar
    </Button>
  </InputGroup>
        </div>
        </>
       
    )
    
}

export default Header