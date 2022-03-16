import { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import ArticleModele from './ArticleModele'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import { ThemeProvider } from '@mui/material/styles'
import { ThemeTitres } from '../theme/ThemeTitres'
import axios from 'axios'

// Fetch data => ARTICLES
function useFetch(url) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    axios
      .get(url)
      .then((response) => {
        setData(response.data)
      })
      .catch((err) => {
        setError(err)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [url])

  return { data, loading, error }
}

const Articles = () => {
  const { data, loading, error } = useFetch(
    `${process.env.REACT_APP_API_URL}api/articles`
  )

  if (loading) return <Box>Loading</Box>

  if (error) return <Box>There's been an error</Box>

  return (
    <Box sx={{ flexGrow: 1, width: '80%', mx: 'auto' }}>
      {/** Titre du blog */}
      <ThemeProvider theme={ThemeTitres}>
        <Typography
          variant="h1"
          color="primary.main"
          sx={{ mt: 4, fontSize: '2rem' }}
        >
          Notre actualité
        </Typography>
      </ThemeProvider>
      <Divider sx={{ my: 4 }} />
      {/** Articles du blog */}
      <Grid container sx={{ mx: 'auto' }}>
        {data ? (
          data
            .slice(0)
            .reverse()
            .map((article) => {
              return (
                <Grid item key={article._id} xs={12} sm={6} md={4} lg={4}>
                  <ArticleModele
                    img={
                      article.articleImage
                        ? `/uploads/${article.articleImage}`
                        : 'https://picsum.photos/id/173/400/400'
                    }
                    title={article.title}
                    subTitle={article.subTitle}
                    content={article.contenu}
                    date={
                      article.createdAt
                        ? article.createdAt.slice(8, 10) +
                          '/' +
                          article.createdAt.slice(5, 7) +
                          '/' +
                          article.createdAt.slice(0, 4)
                        : 'non daté'
                    }
                    auteur={article.emailUser}
                  />
                </Grid>
              )
            })
        ) : (
          <div>On a un soucis!</div>
        )}
      </Grid>
    </Box>
  )
}

export default Articles
