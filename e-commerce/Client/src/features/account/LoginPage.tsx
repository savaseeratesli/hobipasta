import { LockOutlined } from "@mui/icons-material";
import { Avatar, Box, Button, Container, Paper, TextField, Typography } from "@mui/material";

export default function LoginPage()
{
    function handleSubmit(){

    }
    return (
        <Container maxWidth="xs">
            <Paper sx={{marginTop: 8, padding: 2}} elevation={3}>
                <Avatar sx={{ mx: "auto", textAlign: "center", mb: 1 }}>
                    <LockOutlined />
                </Avatar>
                <Typography component="h1" variant="h5" sx={{textAlign: "center"}}>Kullanıcı Giriş</Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{mt: 2}}>
                    <TextField label="Kullanıcı Adı Giriniz" fullWidth required autoFocus sx={{mb: 2}} size="small"></TextField>
                    <TextField label="Şifre Giriniz" type="password" fullWidth required sx={{mb: 2}} size="small"></TextField>
                    <Button type="submit" variant="contained" fullWidth sx={{mt: 1}}>Giriş</Button>
                </Box>

            </Paper>
        </Container>
    );
}