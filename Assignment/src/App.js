import './App.css';

import Photo1 from './assets/Photo1.png';
import { Signup } from './components/Signup';

function App() {
  return (
    <div className="container mt-3 border">
      <div className="row">
        
        <div className="col-md-7 my-auto bg ">
          <img className="img-fluid w-100" src={Photo1} alt=""/>
            <h4 class="text-center text-dark">Chose a date range</h4>
            <p class="text-center text-dark">Donec eu ornare mi. Sed finibus
condimentum mauris, ut dictum eros
maximus vitae. Nullam
condimentum tortor ac elit feugiat
iaculis. Aenean mauris nisl, blandit</p>
        </div>
        <div className="col-md-5">
          <Signup />
        </div>
      </div>
    </div>
  );
}

export default App;
