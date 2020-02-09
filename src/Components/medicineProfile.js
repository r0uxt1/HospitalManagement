import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import ChartistGraph from "react-chartist";

import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";








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
import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "./charts.js";

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




export default function medicineProfile() {
  const classes = useStyles();
  return (
    <div className={classes.divstyles}>
          <GridContainer>
                  <GridItem xs={12} sm={12} md={3}>


                  </GridItem>

           <GridItem xs={12} sm={12} md={8}>

           <br/>
           <br/>
           <br/>

          <Card chart>
            <CardHeader color="warning">
                <GridContainer>
                <GridItem xs={12} sm={12} md={3}>


                  </GridItem>


                 <GridItem xs={12} sm={12} md={5}>

<img  src="data:image/jpeg;base64,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"></img>


                  </GridItem>
                    </GridContainer>

            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Medicine Details</h4>
              <p className={classes.cardCategory}>Last Package Shipment</p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> Shipment sent 2 days ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>

 
                  <GridItem xs={12} sm={12} md={2}>


                  </GridItem>
          </GridContainer>


      
    </div>
  );
}
