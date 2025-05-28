
import { useState } from 'react';
import ContactDepartmentHead from './ContactDepartmentHead';
import ContactFieldWorks from './ContactFieldWorks';
import ContactOfficiers from './ContactOfficiers';
import ContactHelpline from './ContactHelpline';
function ContactData() {
    
      const [active, setActive] = useState('Municipal Officers'); // Default is "Latest News"
    
      const handleButtonClick = (buttonName) => {
        setActive(buttonName); // Change active button
       
        
    }
  return (
    <>
        <div className="d-flex justify-content-center align-items-center mx-auto ">
            <button
            type="button"
            onClick={() => handleButtonClick('Municipal Officers')}
            className={`btn btn-outline-success  m-1 ${active === 'Municipal Officers' ? 'active' : ''}`}>
             Municipal Officers
          </button>
          
          <button
            type="button"
            onClick={() => handleButtonClick('Department Head')}
            className={`btn btn-outline-success  m-1 ${active === 'Department Head' ? 'active' : ''}`}>
            Department Head
          </button>
           <button
            type="button"
            onClick={() => handleButtonClick('Municipal Officers(Field)')}
            className={`btn btn-outline-success  m-1 ${active === 'Municipal Officers(Field)' ? 'active' : ''}`}
          >
            Municipal Officers(Field)
          </button>
            <button
                type="button"
                onClick={() => handleButtonClick('Helpline Numbers')}
                className={`btn btn-outline-success  m-1 ${active === 'Helpline Numbers' ? 'active' : ''}`}>
                    Helpline Numbers
                </button>
          
         </div>
           {/* Conditionally render components based on active state */}
            {active === 'Municipal Officers' && <ContactOfficiers />}
            {active === 'Department Head' && <ContactDepartmentHead/>}
            {active === 'Municipal Officers(Field)' && <ContactFieldWorks/>}
            {active === 'Helpline Numbers' && <ContactHelpline/>}
       
        
    </>
  )
}

export default ContactData;
