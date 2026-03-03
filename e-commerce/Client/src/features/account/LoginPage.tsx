import { LockOutlined } from "@mui/icons-material";
import { Avatar, Box, Container, Paper, TextField, Typography } from "@mui/material";
import { FieldValues, useForm } from "react-hook-form"
import { LoadingButton } from "@mui/lab";
import { useAppDispatch } from "../../hooks/hooks";
import { loginUser } from "./accountSlice";
import { useNavigate } from "react-router";

export default function LoginPage()
{
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const { register, handleSubmit, formState: {errors, isSubmitting, isValid} } = useForm({
        defaultValues: {
            username: "",
            password: ""
        }
    });

    async function submitForm(data: FieldValues) {
        await dispatch(loginUser(data));
        navigate("/catalog");
    }

    
    return (
        <Container maxWidth="xs">
            <Paper sx={{marginTop: 8, padding: 2}} elevation={3}>
                <Avatar sx={{ mx: "auto", textAlign: "center", mb: 1}}>
                    <LockOutlined />
                </Avatar>
                <Typography component="h1" variant="h5" sx={{textAlign: "center"}}>Login</Typography>
                <Box component="form" onSubmit={handleSubmit(submitForm)} noValidate sx={{mt: 2}}>
                    <TextField 
                        {...register("username", {required: "zorunlu alan"})}  //required, boş değer girilmesin diye                  
                        label="Enter username" 
                        fullWidth required autoFocus 
                        sx={{mb: 2}} 
                        size="small"
                        error={!!errors.username}
                        helperText={errors.username?.message}></TextField> 
                   

                    <TextField 
                        {...register("password", {required: "zorunlu alan", minLength: {
                            value: 6,
                            message: "Şifre en az 6 karakter olmalıdır."
                        }})}
                        label="Enter password" 
                        type="password" 
                        fullWidth required 
                        sx={{mb: 2}} 
                        size="small"
                        error={!!errors.password}
                        helperText={errors.password?.message}></TextField>
               
                    <LoadingButton 
                        loading={isSubmitting} 
                        disabled={!isValid} //Giriş koşulları uygun değilsebuton pasif
                        type="submit" 
                        variant="contained" 
                        fullWidth sx={{mt: 1}}>Giriş</LoadingButton>
                </Box>
            </Paper>
        </Container>
    );
}

