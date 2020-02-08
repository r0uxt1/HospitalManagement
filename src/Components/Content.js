import React from 'react';
import {MenuBar} from './MenuBar.js';
import {MainContent} from './MainContent.js';

export const Content=(props)=>{
    return (
            <div >

 

                <div className="row">
                    <div className='col-md-3'>
                    	<MenuBar />
                    </div>
                    <div className='col-md-9'>
                    	<MainContent   handlerInput={props.handlerInput}  addPatient={props.addPatient} />
               		</div>
                </div>
            </div>
        )
}

