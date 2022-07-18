import react, { createElement, useState } from 'react';
import axios from 'axios';
const CreateQuestion=()=>{
const [data,setdata]=useState({
    question:'',
    option1:'',
    option2:'',
    option3:'',
    answer:'',
})
    const handleChange=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setdata((prevData)=>({
            ...prevData,
            [name]:value
        }))
        
    }
    const handleCreate=async()=>{
        let createdData=await axios.post("https://still-harbor-47234.herokuapp.com/createquestion",data).then(res=> alert("Data Created!!!"))
        .catch(err=>console.log(err));

        if(createdData){
            alert("Data Created!!!");
            setdata({
                question:'',
                option1:'',
                option2:'',
                option3:'',
                answer:'',
            })
        }
        
    }
    return (
        <>
       <div className="mt-5 container col-md-4">
  <div class="form-group">    
    <input type="text" class="form-control" id="question" name='question' onChange={handleChange} value={data.question} placeholder='Enter Question'/>    
  </div>
  <div class="form-group">    
    <input type="text" class="form-control" id="option1" name='option1' onChange={handleChange} value={data.option1} placeholder='Enter option1'/>
  </div>
  <div class="form-group">    
    <input type="text" class="form-control" id="option2" name='option2' onChange={handleChange} value={data.option2} placeholder='Enter option2'/>
  </div>
  <div class="form-group">    
    <input type="text" class="form-control" id="option3" name='option3' onChange={handleChange} value={data.option3} placeholder='Enter option3'/>
  </div>
  <div class="form-group">    
    <input type="text" class="form-control" id="answer" name='answer' onChange={handleChange} value={data.answer} placeholder='Enter answer'/>
  </div>
  
  <button type="submit" class="btn btn-primary" onClick={()=>handleCreate()}>Create</button>
</div>
        </>
    )
}
export default CreateQuestion;