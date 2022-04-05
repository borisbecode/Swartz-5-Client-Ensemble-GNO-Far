// import { Link } from "react-router-dom";
// import './login.css'
import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import { ThemeProvider } from '@mui/material/styles'
import { ThemeTitres } from '../../theme/ThemeTitres'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import axios from 'axios'

export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // gestion email 
    const [emailError, setEmailError] = useState(false);
    const [emailColor, setEmailColor] = useState('primary');
    const [emailHelper, setEmailHelper] = useState("");

    // gestion password
    const [passwordError, setPasswordError] = useState(false);
    const [passwordColor, setPasswordColor] = useState('primary');
    const [passwordHelper, setPasswordHelper] = useState("");


    // handle la soumission du form
	const handleSubmit = async (e) => {
		e.preventDefault();

        if(email === "") {
            setEmailError(true);
            setEmailColor("secondary");
            setEmailHelper('Ce champ est obligatoire.')
        }
        if(password === "") {
            setPasswordError(true);
            setPasswordColor("secondary");
            setPasswordHelper('Ce champ est obligatoire.')
        }

        const data = {
            email: email,
            password: password,
          }

        axios.post(`${process.env.REACT_APP_API_URL}api/auth`, data)
        .then(function (res) {
            console.log(res);
            localStorage.setItem("token", res.data.data);
            //window.location = "/";  
        })
        .catch(function (error) {
            setPasswordHelper(
            "Le mot de passe ou l'adresse email est incorrect(e)."
            );
        })

	};


    // détecter si le format de l'email est ok + le placer dans le useState
    const handleEmailChange = (e) => {
        setEmail(e);
        if (
          e === "" ||
          !e.match(
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          )
        ) {
          setEmailError(true);
          setEmailHelper("Ecrivez un format d'adresse email correct. [*@.*]");
          setEmailColor("secondary");
        } else {
          setEmailError(false);
          setEmailHelper("");
          setEmailColor("primary");
        }
      };


      // détecter si le format du password est ok + le placer dans le useState
      const handlePasswordChange = (e) => {
        setPassword(e);
        if (
          e === "" ||
          // le mot de passe doit contenir au moins 8 caractères, une min, une maj, un chiffre ainsi qu'un caractère spécial
          !e.match(/^(?=.{8,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W).*$/)
        ) {
          setPasswordError(true);
          setPasswordColor('secondary');
          setPasswordHelper(
            "Le mot de passe doit contenir au moins 8 caractères dont au moins un chiffre, une majuscule, une minuscule et un caractère spécial. "
          );
        } else {
          setPasswordError(false);
          setPasswordHelper("")
          setPasswordColor("primary");
        }
      };



	return (
		<Box sx={{ flexGrow: 1, width: '80%', mx: 'auto', my:5 }}>
      {/** Titre création article */}
      <ThemeProvider theme={ThemeTitres}>
        <Typography
          variant="h1"
          color="primary.main"
          sx={{ mt: 4, fontSize: '2rem' }}
        >
          Connectez-vous en mode admin
        </Typography>
      </ThemeProvider>
      <Typography
          variant="body1" 
          gutterBottom
          sx={{ mt: 2 }}
        >
          Cet espace est réservé aux administrateurs. Veuillez vous connecter afin d'accéder à la page Admin et pouvoir gérer le contenu du site.
        </Typography>
      <Divider sx={{ my: 4 }} />
      {/** Se connecter */}
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          maxWidth: '600px',
          '& .MuiTextField-root': { m: 1 },
          '& .MuiButton-root': { m: 1 },
          justifyContent: 'center',
          mx: 'auto',
          encType: 'multipart/form-data',
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          type="email"
          autoFocus
          name="email"
          onChange={(e) => {
            handleEmailChange(e.target.value);
          }}
          value={email}
          required
          label="Email"
          error={emailError}
          color={emailColor}
          helperText={emailHelper}
        />
        <TextField
          type="password"
          name="password"
          onChange={(e) => handlePasswordChange(e.target.value)}
          value={password}
          required
          label="Password"
          error={passwordError}
          color={passwordColor}
          helperText={passwordHelper}
        />

        <Button
          type="submit"
          variant="contained"
          sx={{ color: 'white' }}
          size="large"
        >
          Se connecter
        </Button>

      </Box>
    </Box>
	);

}

