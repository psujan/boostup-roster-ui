import { Avatar, Button, Card, CardContent, Stack, Typography } from '@mui/material'
import React from 'react'


const ECard = () => {
  return (
    <div>
    <Card
    sx={{
      maxWidth: "294px",
      height : "300px",
      textAlign: "center",
      p: 2,
      borderRadius: "6px",
      // boxShadow: 3,
      backgroundColor: '#FCFBFB',
      mt: '40px'
    }}
  >
    <Avatar
      src="./src/assets/images/1.png"
      alt="James Wilson"
      sx={{ width: 80, height: 80, margin: "auto", mb: 2 }}
    />
    <CardContent>
      <Typography sx={{fontFamily : 'Inter', fontWeight : '500'}}>
        James Wilson
      </Typography>
      <Typography variant="body2" color="text.secondary">
        jameswilsom@gmail.com
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        +61 417 456 789
      </Typography>
      <Stack direction="row" spacing={2} justifyContent="center">
        <Button
          variant="contained"
          sx={{
            backgroundColor: "var(--primaryColor)",
            width: "105px",
            height: "35px",
            padding: "10px",
          }}
        >
          <Typography
            sx={{
              fontSize: "12px",
              fontWeight: "500",
              textTransform: "none",
            }}
          >
            Plan Schedule
          </Typography>
        </Button>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "var(--secondaryColor)",
            color: "black",
            width: "105px",
            height: "35px",
          }}
        >
          <Typography
            sx={{
              fontSize: "12px",
              fontWeight: "500",
              textTransform: "none",
            }}
          >
            View Profile
          </Typography>
        </Button>
      </Stack>
    </CardContent>
  </Card></div>
  )
}

export default ECard