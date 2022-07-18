import axios from 'axios';
import react, { useEffect, useState } from 'react';

const Cards=()=>{
    const [questions,setquestions]=useState([]);
    const [selected,setselected]=useState('');
    const [index,setindex]=useState(0);
    useEffect(()=>{
        axios.get("https://still-harbor-47234.herokuapp.com/getallquestions").then(res=>setquestions(res.data)).catch(err=>console.log(err));
    },[])
    const handleSelected=(item)=>{
        setselected(item);
        console.log(item);
    }
    const handleCompare=(answer)=>{
        if(selected==answer)
        {
        setindex(index+1);
        alert('Correct!!');
        }
        else
        alert('Wrong!!');
    }
    return(
        <div className='col-md-4 mx-auto'>
               
               <div class="card" style={{marginTop:'10%',padding:'10px'}}>
               {
               questions[index]?<> 
  <div class="card-body">
    <h5 class="card-title">{questions[index].question}</h5>
    <p class="card-text">
    <div class="form-check" onClick={()=>handleSelected(questions[index].option1)}>
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value={questions[index].option1} />
  <label class="form-check-label" for="exampleRadios1">
    {questions[index].option1}
  </label>
</div>
    </p>
    <p class="card-text">
    <div class="form-check" onClick={()=>handleSelected(questions[index].option2)}>
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value={questions[index].option2} />
  <label class="form-check-label" for="exampleRadios2">
    {questions[index].option2}
  </label>
</div>
    </p>
    <p class="card-text">
    <div class="form-check" onClick={()=>handleSelected(questions[index].option3)}>
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value={questions[index].option3} />
  <label class="form-check-label" for="exampleRadios3">
    {questions[index].option3}
  </label>
</div>
    </p>
    <a href="#" class="btn btn-primary" onClick={()=>handleCompare(questions[index].answer)}>Next</a>
  </div>
  </>:
<>
<div>
<p className='text-success'> Congratulations!!!!</p>
<a href="#" class="btn btn-primary" onClick={()=>setindex(0)}>Try Again</a>
</div>

</>               
  } 
</div>
  
        </div>
    )
}
export default Cards;