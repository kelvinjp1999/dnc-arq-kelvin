import './LoadingSpinner.css'
import LoadingSpinnerGif from '../../assets/spinner.gif'


function LoadingSpinner() {
    return (
      <div className='d-flex al-center jc-center loading-overlay-container'>
        <img src={LoadingSpinnerGif} alt="Loading" height='80'/>
      </div>
    );
}
  
export default LoadingSpinner;