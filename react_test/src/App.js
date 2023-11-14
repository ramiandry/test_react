import {
  Box,
  Button,
  FormGroup,
  Paper,
  TextField,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import React from "react";
import { connect } from "react-redux";
import { updateFormData } from "./actions";
import "./App.css";
import Swal from "sweetalert2";

class App extends React.Component {
  
  showmessage=(icon, text)=>{
      Swal.fire({
        title: 'Validation formulaire',
        text: text,
        icon: icon
      });
  }
  handleChange = (e) => {
    const { name, value } = e.target;
    this.props.updateFormData(name, value);
  };

  handleSubmit = (e) => {
    if(this.isFormValid()){
      this.showmessage("success", "Votre donnée est validée !!")
    }else{
      this.showmessage("error", "Verifiée bien votre champ!!")
    }
  };

  isFormValid = () => {
    const { nom, email, tel, message } = this.props.formData;
    const frenchPhoneNumberRegex =
      /^(?:(?:\+|00)33[\s.-]{0,3}(?:\(0\)[\s.-]{0,3})?|0)[1-9](?:(?:[\s.-]?)(?:\d{2})){4}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return (
      nom.trim() !== "" &&
      emailRegex.test(email) &&
      frenchPhoneNumberRegex.test(tel) &&
      message!==""
      
    );
  };

  render() {
    return (
      <Box sx={{ margin: "auto", width: "50%", marginTop:"10vh"  }}>
        <Paper elevation={5} sx={{paddingX:"10px", paddingY:"20px", border:"1px blue solid", borderRadius:"20px"}}>
        <Typography variant="h2" color="primary" align="center">INFORMATION</Typography>
        <FormGroup>
          <TextField
            type="text"
            onChange={this.handleChange}
            name="nom"
            label="Nom"
            margin="dense"
          />
          <TextField
            type="email"
            onChange={this.handleChange}
            name="email"
            label="Adresse e-mail"
            margin="dense"
          />
          <TextField
            type="text"
            onChange={this.handleChange}
            name="tel"
            label="N° Telephone"
            placeholder="+-- - -- -- -- --"
            margin="dense"
          />
          <TextareaAutosize
            name="message"
            onChange={this.handleChange}
            placeholder="votre message..."
            style={{ height: "200px" }}
          ></TextareaAutosize>
          <Button onClick={this.handleSubmit} sx={{marginTop:"20px"}} variant="contained">
            Valider
          </Button>
        </FormGroup>
        </Paper>
      </Box>
    );
  }
}

const mapStateToProps = (state) => ({
  formData: state.formData,
});

const mapDispatchToProps = {
  updateFormData,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
