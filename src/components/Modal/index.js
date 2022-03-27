import Button from "../Button"
import styles from '../../styles/main.module.css'
import { useEffect, useRef, useState } from "react";

const Modal=({closeModal, children}) =>{

        const [isBrowser, setIsBrowser] = useState(false);
    
        // create ref for the StyledModalWrapper component
        const modalWrapperRef = useRef();
    
        // check if the user has clickedinside or outside the modal
        const backDropHandler = e => {
          if (!modalWrapperRef?.current?.contains(e.target)) {
              closeModal();
          }
        }
      
        useEffect(() => {
          setIsBrowser(true);
    
         // attach event listener to the whole windor with our handler
          window.addEventListener('click', backDropHandler);
    
          // remove the event listener when the modal is closed
          return () => window.removeEventListener('click', backDropHandler);
        }, []);
      
      

    return (
      <div className={styles['modal-filter']}>
        {/* <Button onClick={()=>{closeModal(false)}} className='X-button'>X</Button> */}
        {children}
      </div>
    )
      
    if (isBrowser) {
        return ReactDOM.createPortal(
          modalContent,
          document.getElementById("modal-root")
        );
      } else {
        return null;
      }
  }
  export default Modal