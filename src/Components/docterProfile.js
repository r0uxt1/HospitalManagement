import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
//import CustomInput from "components/CustomInput/CustomInput.js";
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
  }
};

const useStyles = makeStyles(styles);




export default function UserProfile() {
  const classes = useStyles();
  return (
    <div className={classes.divstyles}>
      
          <Card profile>
            <CardAvatar profile>
              <a href="#pablo" onClick={e => e.preventDefault()}>
                <img src={avatar} alt="..." />
              </a>
            </CardAvatar>
            <CardBody profile>
              <h6 className={classes.cardCategory}>CEO / CO-FOUNDER</h6>
              <h4 className={classes.cardTitle}>Alec Thompson</h4>
              <p className={classes.description}>
                Don{"'"}t be scared of the truth because we need to restart the
                human foundation in truth And I love you like Kanye loves Kanye
                I love Rick Owens’ bed design but the back is...
              </p>
              <Button color="primary" round>
                Follow
              </Button>
            </CardBody>
          </Card>
      
    </div>
  );
}
