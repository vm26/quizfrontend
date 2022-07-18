import react from 'react';
import {Link} from 'react-router-dom';
const Navbar=()=>{
    return (
        <>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link to='/'>
  <a class="navbar-brand" href="#">QuizApp</a>
  </Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav" style={{justifyContent:'flex-end'}}>
    <ul class="navbar-nav">
     
      <li class="nav-item">
        <Link to='/createquestion'>
        <a class="nav-link" href="#">Create Question</a>
        </Link>
      </li>
      <li class="nav-item">
      <Link to='/editquestion'>
        <a class="nav-link" href="#">Edit Question</a>
        </Link>
      </li>
      
    </ul>
  </div>
</nav>
        </>
    )
}
export default Navbar;