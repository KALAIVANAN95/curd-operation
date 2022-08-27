import React, { useState } from 'react';
import '../CURD/Curd.css';

const Curd = () => {

    const [name,setName]=useState('');
    const [allData,setAllData]=useState([]);
    const [show,setShow]=useState(false)
    const [editIndex,setEditIndex]=useState()

    const hanldeAdd = () =>{
        if(name.length !==0){
            setAllData(newData=>[...newData,name]);
            setName('');    
        }
        else{
            alert('Please enter the data');
        }
    }


    const handleDelete = (index) =>{
        allData.splice(index,1);
        setAllData([...allData])
    }


    const handleEdit = (i) =>{
        setName(allData[i]);
        setShow(true)
        setEditIndex(i)
    }

    const hanldeUpdate = () =>{
        allData.splice(editIndex,1,name);
        setAllData([...allData])
        setShow(false)
        setName('')
    }


    return (
    <div>

        <h1>CRUD Insert,Update and Delete</h1>
        <input value={name} onChange={(event)=>setName(event.target.value)}/>
      {!show?
        <button className='btns' onClick={hanldeAdd}>Add</button>:
        <button className='btns' onClick={hanldeUpdate}>Update</button>
      }  
        
        {
            allData.map((val,i)=>{
                return(
                    <>
                    <h1>{val}</h1>
                    <button className='editbtn' onClick={()=>handleEdit(i)}>Edit</button>
                    <button className='deletebtn' onClick={()=>handleDelete(i)}>Delete</button>
                    </>
                )
            })
        }
      
    </div>
  )
}

export default Curd
