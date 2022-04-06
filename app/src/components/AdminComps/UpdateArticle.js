import React, { useState, useContext } from 'react';
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
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import Modal from '@mui/material/Modal';
import { AuthContext } from '../../context/auth'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: 'none',
    boxShadow: 24,
    p: 4,
};


const Input = styled('input')({
    display: 'none',
});


const UpdateArticle = ({ data }) => {

    // recup les infos user
    const { user } = useContext(AuthContext)

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [titre, setTitre] = useState(data.title ? data.title : "");
    const [soustitre, setSoustitre] = useState(data.subTitle ? data.subTitle : "");
    const [contenu, setContenu] = useState(data.contenu ? data.contenu : "");
    const [imageNom, setImageNom] = useState(data.articleImage ? data.articleImage : "");
    const [articleImage, setArticleImage] = useState(data.articleImage ? data.articleImage : "");

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

        const token = localStorage.getItem('jwtToken')

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
        formData.append('id', user._id)
        formData.append('firstName', user.firstName)
        formData.append('lastName', user.lastName)
        formData.append('email', user.email)


        axios.put(`${process.env.REACT_APP_API_URL}api/articles/update/${data._id}`, formData,
            {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }
        )
            .then(function (response) {
                setContenuHelper(response.data.ok)

            })
            .catch(function (error) {
                console.log(error);
                setContenuHelper(
                    "L'article n'a pas pu être ajouté."
                )
            })
    }

    const handleDelete = async (event) => {

        const formData = new FormData();

        const token = localStorage.getItem('jwtToken')

        formData.append('id', user._id)
        formData.append('firstName', user.firstName)
        formData.append('lastName', user.lastName)
        formData.append('email', user.email)

        event.preventDefault();
        axios.put(`${process.env.REACT_APP_API_URL}api/articles/delete/${data._id}`, formData,
            {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }
        )
            .then(function () {
                window.location = '/admin'
            })
            .catch(function (error) {
                console.log(error);
                setContenuHelper(
                    "L'article n'a pas pu être ajouté."
                )
            })
    }



    return (
        <Box>
            <Stack direction="column" alignItems="start-end" >
                <IconButton onClick={handleOpen} aria-label="delete" size="large" sx={{ "&:hover": { color: "primary.main" } }} >
                    <EditOutlinedIcon />
                </IconButton>
            </Stack>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    {/** Titre création article */}
                    <ThemeProvider theme={ThemeTitres}>
                        <Typography variant="h1" color="primary.main" sx={{ mt: 4, fontSize: "2rem" }}>
                            Actualiser l'article
                        </Typography>
                    </ThemeProvider>
                    <Divider sx={{ my: 4 }} />
                    {/** Form pour créer nouvel article */}
                    <Box
                        component="form"
                        encType='multipart/form-data'
                        onSubmit={handleSubmit}
                        sx={{
                            display: "flex", flexDirection: "column",
                            maxWidth: "600px",
                            '& .MuiTextField-root': { m: 1 },
                            '& .MuiButton-root': { m: 1 },
                            justifyContent: "center",
                            mx: "auto",
                            encType: 'multipart/form-data'
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
                                setTitre(event.target.value);
                            }}
                            error={titreError}
                            color={titreColor}
                            helperText={titreHelper}
                        />
                        <TextField
                            required
                            label="Sous-titre"
                            value={soustitre}
                            onChange={(event) => {
                                setSoustitre(event.target.value);
                            }}
                            error={soustitreError}
                            color={soustitreColor}
                            helperText={soustitreHelper}
                        />

                        <TextField
                            value={contenu}
                            required
                            label="Contenu article"
                            multiline
                            rows={8}
                            onChange={(event) => {
                                setContenu(event.target.value);
                            }}
                            error={contenuError}
                            color={contenuColor}
                            helperText={contenuHelper}
                        />

                        {/** Option ajout image */}
                        <label
                            htmlFor="contained-button-file"
                        >
                            <Input accept=".jpg,.jpeg,.png" id="contained-button-file" type="file" filename="articleImage" onChange={(event) => {
                                setImageNom(event.target.value);
                                setArticleImage(event.target.files[0]);
                            }} />

                            <Button variant="contained" component="span" endIcon={<PhotoCamera />} sx={{ color: "white" }}>
                                Image
                            </Button>
                            <Typography variant="caption" gutterBottom>{imageNom}</Typography>
                        </label>

                        <Button
                            type="submit"
                            variant="contained"
                            sx={{ color: "white" }}
                            size="large">Mettre à jour</Button>

                        <Button
                            variant="contained"
                            onClick={handleDelete}
                            sx={{ color: "white", bgcolor: "secondary.main" }}
                            size="large">Supprimer</Button>

                    </Box>
                </Box>
            </Modal>
        </Box>
    )
}

export default UpdateArticle