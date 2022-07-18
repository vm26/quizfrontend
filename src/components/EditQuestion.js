import axios from 'axios';
import react,{useEffect, useState} from 'react';
const EditQuestion=()=>{
    const [questions,setquestions]=useState([]);
    const [selected,setselected]=useState('');
    const [counter,setcounter]=useState(0);
    useEffect(()=>{
        axios.get("https://still-harbor-47234.herokuapp.com/getallquestions").then(res=>setquestions(res.data)).catch(err=>console.log(err));
    },[counter])
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
        const handleSelected=async(id)=>{
            setselected(id);
            await axios.get(`https://still-harbor-47234.herokuapp.com/getquestion/${id}`).then(res=>setdata(res.data))
            .catch(err=>console.log(err));
        }
        const handleUpdate=async()=>{
            let updatedData=await axios.put(`https://still-harbor-47234.herokuapp.com/updatequestion/${selected}`,data).then(res=>{setcounter(counter+1); console.log("Data Updated!!!");})
        .catch(err=>console.log(err));
        }
        const handleDelete=async(id)=>{
          let deletedData=await axios.delete(`https://still-harbor-47234.herokuapp.com/deletequestion/${id}`).then(res=>{setcounter(counter+1); alert("Data deleted!!!");})
      .catch(err=>console.log(err));
      }
    return (
        <>
        <div className='container d-flex mt-5'>
       <div className='col-md-6'>
       <ul class="list-group">
        {
            questions.map((item)=>{
                return(
                <>                
                <li class="list-group-item">{item.question}
                <button type="button" class="btn btn-warning" style={{marginLeft:'20px'}} onClick={()=>handleSelected(item._id)}>Edit</button>
                <button type="button" class="btn btn-danger" style={{marginLeft:'20px'}} onClick={()=>handleDelete(item._id)}>Delete</button>
                </li>
                </>
                )
                })
        } 
  
</ul>
       </div>
       <div className="col-md-6">
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
  
  <button type="submit" class="btn btn-primary" onClick={()=>handleUpdate()}>Update</button>
</div>
       </div>
       
        </>
    )
}
export default EditQuestion;