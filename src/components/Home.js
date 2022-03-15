import React from 'react'
import Navbar from './Navbar'
import Textform from './Textform'


export default function Home(props) {
    return (
        <div>


            <Navbar title={props.title} aboutText={props.aboutText} Mode={props.Mode} toggleMode={props.toggleMode} />

                                                                                                                                                                
            <div className='container'>

                <h1>Enter your text to analyse...</h1>
                <Textform />
            </div>
        </div>
    )
}
