import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { ThemeProvider } from '@mui/material/styles';
import { ThemeTitres } from '../../theme/ThemeTitres';
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { styled } from '@mui/material/styles';
import axios from "axios";

const Input = styled('input')({
    display: 'none',
  });


const CreationArticle = () => {

  const [titre, setTitre] = useState('');
  const [soustitre, setSoustitre] = useState('');
  const [contenu, setContenu] = useState('');
  const [imageNom, setImageNom] = useState("");
  const [articleImage, setArticleImage] = useState("");

  const [titreError, setTitreError] = useState(false);  
  const [soustitreError, setSoustitreError] = useState(false);
  const [contenuError, setContenuError] = useState(false);

  const [titreHelper, setTitreHelper] = useState("");  
  const [soustitreHelper, setSoustitreHelper] = useState("");
  const [contenuHelper, setContenuHelper] = useState("");

  const [titreColor, setTitreColor] = useState("primary");  
  const [soustitreColor, setSoustitreColor] = useState("primary");
  const [contenuColor, setContenuColor] = useState("primary");

  // à la soumission du form
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (titre === "") {
      setTitreError(true);
      setTitreHelper("Ce champ est obligatoire.");
      setTitreColor("secondary");
    }
    if (soustitre === "") {
      setSoustitreError(true);
      setSoustitreHelper("Ce champ est obligatoire.");
      setSoustitreColor("secondary");
    }
    if (contenu === "") {
        setContenuError(true);
        setContenuHelper("Ce champ est obligatoire.");
        setContenuColor("secondary");
      }

      const formData = new FormData();

      formData.append("title", titre)
      formData.append("subTitle", soustitre)
      formData.append("contenu", contenu)
      formData.append("articleImage", articleImage);


      const data = {
        title: titre,
        subTitle: soustitre,
        contenu: contenu,
        articleImage: articleImage,
      }


      axios.post(`http://localhost:5000/api/articles/add`,data)
        .then(function (response) {
            window.location.reload();
        })
        .catch(function (error) {
            console.log(error);
            setContenuHelper(
            "L'article n'a pas pu être ajouté."
            );
  });


    }

  return (
    <Box sx={{ flexGrow: 1, width:"80%", mx:"auto" }}>
        {/** Titre création article */}
        <ThemeProvider theme={ThemeTitres}>
            <Typography variant="h1" color="primary.main" sx={{mt:4, fontSize:"2rem"}}>
                Créer un nouvel article
            </Typography>
        </ThemeProvider>
    <Divider sx={{my:4}}/>
    {/** Form pour créer nouvel article */}
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display:"flex", flexDirection:"column",
        maxWidth:"600px",
        '& .MuiTextField-root': { m: 1 },
        '& .MuiButton-root': { m: 1 },
        justifyContent:"center",
        mx:"auto"
      }}
      noValidate
      autoComplete="off"
    >
      
        <TextField
          autoFocus
          required
          label="Titre"
          value={titre}
          onChange={(event) => {
            setTitre(event.target.value);}}
          error={titreError}
          color={titreColor}
          helperText={titreHelper}
        />
        <TextField
          required
          label="Sous-titre"
          value={soustitre}
          onChange={(event) => {
            setSoustitre(event.target.value);}}
          error={soustitreError}
          color={soustitreColor}
          helperText={soustitreHelper}
        />
        
        <TextField
          required
          label="Contenu article"
          multiline
          rows={8}
          onChange={(event) => {
            setContenu(event.target.value);}}
          error={contenuError}
          color={contenuColor}
          helperText={contenuHelper}
        />

        {/** Option ajout image */}
        <label 
            htmlFor="contained-button-file" 
        >
            <Input accept=".jpg,.jpeg,.png" id="contained-button-file" type="file" filename="articleImage" onChange={(event) => {
                setImageNom(event.target.file[0]);
                }}  />
            
            <Button variant="contained" component="span" endIcon={<PhotoCamera />} sx={{color:"white"}}>
            Image
            </Button>
            <Typography variant="caption" gutterBottom>{imageNom}</Typography>
        </label>

        <Button 
            type="submit" 
            variant="contained" 
            sx={{color: "white"}}
            size="large">Publier</Button>
      
    </Box>


    </Box>
  )
}

export default CreationArticle