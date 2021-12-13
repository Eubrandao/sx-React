import React,{useEffect,useState} from 'react'
import { Table } from 'react-bootstrap'
import {InputGroup, FormControl} from 'react-bootstrap'
import './styles/app.scss'
import Modals from './Modal'
import image from './images/logotipo_unip.jpg'




const Tables = () =>{
const [course,setCourse] = useState([])

const [searchItem, setSearchItem] = useState("")


// const cols = [
//   {dataField:'logo', text:'Logo'},
//   {dataField:'curso', text:'Curso'},
//   {dataField:'cidade', text:'Cidade'},
//   {dataField:'preco', text:'Preço'}
// ]

useEffect(()=>{
  fetch('https://api-sx.herokuapp.com/list')
  .then(response=> response.json())
  .then(result => setCourse(result))
  .then(result => console.log(result))
  .catch(error=> console.log(error))

},[])
  
    return(
       <>
 

      <div className="nav">
            <h1>Sx</h1>
            <InputGroup className="mb-3">
    <FormControl
      placeholder="Filtrar"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
      onChange={(e)=>{
        setSearchItem(e.target.value)
      }}
    />
   
  </InputGroup>
        </div>
      
 <Table responsive>
  
  <thead>
    <tr>
      <th>Logo</th>
      <th>Curso</th>
      <th>Cidade</th>
      <th>Preço</th>
      <th>Detalhes</th>
    </tr>
   
  </thead>
  <tbody>
  {
    
      course.filter((val)=>{
        if(searchItem ===""){
          return val
        }else if(
          val.course.name.toLowerCase().includes(searchItem.toLocaleLowerCase()) ||
          val.campus.city.toLowerCase().includes(searchItem.toLocaleLowerCase()) 
         
        ){
          return val
        }
      }).map(listagem =>
        
    
    <tr key={listagem._id}>
      <td><img src={image}/></td>
      <td>{listagem.course.name}</td>
      <td>{listagem.campus.city}</td>
      <td>{listagem.full_price}</td>
      <td> <Modals listagem={listagem}/></td>
      
    </tr>
    )
    
  }
   
  </tbody>
</Table> 
</>
        
    )
}

export default Tables
