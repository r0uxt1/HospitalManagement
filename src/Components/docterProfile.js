import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
//import CustomInput from "components/CustomInput/CustomInput.js";
import GridItem from "./Grid/GridItem.js";
import GridContainer from "./Grid/GridContainer.js";
import Button from "./CustomButtons/Button.js";
import Card from "./Card/Card.js";
import CardHeader from "./Card/CardHeader.js";
import CardAvatar from "./Card/CardAvatar.js";
import CardBody from "./Card/CardBody.js";
import CardFooter from "./Card/CardFooter.js";

import avatar from "../assets/img/faces/marc.jpg";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  },
  divstyles:{
    margin:"0 auto",
  },
   topstyle:{
    marginTop:"20vh",
  }
};

const useStyles = makeStyles(styles);




export default function UserProfile() {
  const classes = useStyles();
  return (
    <div className={classes.divstyles}>
          <GridContainer>
                  <GridItem xs={12} sm={12} md={2}>


                  </GridItem>

                  <GridItem xs={12} sm={12} md={8} >
                      <Card profile className={classes.topstyle}>
                        <CardAvatar profile>
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            <img src={avatar} alt="..." />
                          </a>
                        </CardAvatar>
                        <CardBody profile>
                          <h4 className={classes.cardCategory}>Dr. Sudarshan Avale</h4>
                          <h6 className={classes.cardTitle}>MBBS MD (Medicine)</h6>
                          <p className={classes.description}>
                            Get an Expert Medical Opinion from one of our 
                            world-renowned specialists so you can have the answers 
                            and confidence to make informed decisions about your health.
                          </p>
                          <Button color="primary" round>
                            Contact
                          </Button>
                        </CardBody>
                      </Card>


                  </GridItem>
 
 
                  <GridItem xs={12} sm={12} md={2}>


                  </GridItem>
          </GridContainer>


      
    </div>
  );
}
