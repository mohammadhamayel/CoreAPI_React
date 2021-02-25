import React from 'react'
import aboutpic from '../images/about.jpg';

class Aboutus extends React.Component{
    
    render(){
        return(
            <section>
                <img src={aboutpic} alt="About Organization" class="img" />
            </section>
              
        );
    }
}

export default Aboutus;