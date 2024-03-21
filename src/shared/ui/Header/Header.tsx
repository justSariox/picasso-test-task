import { ArrowBack } from '@mui/icons-material'
import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom'

export const Header = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#171717' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Picasso Test App
          </Typography>
          {id && (
            <IconButton onClick={() => navigate('/')}>
              <ArrowBack sx={{ color: '#fff' }} />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  )
}
