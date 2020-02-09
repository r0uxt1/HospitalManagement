import React from 'react';
import {MenuBar} from './MenuBar.js';
import {MainContent} from './MainContent.js';
import GridItem from "./Grid/GridItem.js";
import GridContainer from "./Grid/GridContainer.js";

export const Content=(props)=>{
    return (
            <div >
                <GridContainer>
                	<GridItem xs={12} sm={12} md={2}>
                		<MenuBar />

                	</GridItem>

                	<GridItem xs={12} sm={12} md={10}>
                		<MainContent   handlerInput={props.handlerInput}  addPatient={props.addPatient} />

                	</GridItem>

      			</GridContainer>
 


 

               
            </div>
        )
}

