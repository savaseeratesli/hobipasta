import { Grid, TextField } from "@mui/material";
import { useFormContext } from "react-hook-form";

export default function PaymentForm()
{
    const { register, formState: {errors} } = useFormContext();
    
    return (
        <Grid container spacing={3}>
            <Grid size={{xs: 12, md: 6}}>
                    <TextField 
                        {...register("card_name", {required: "CArt adı zorunlu alan"})}                    
                        label="Enter card_name" 
                        fullWidth autoFocus 
                        sx={{mb: 2}} 
                        size="small"
                        error={!!errors.card_name}></TextField> 
            </Grid>
            <Grid size={{xs: 12, md: 6}}>
                    <TextField 
                        {...register("card_number", {required: "card_number zorunlu alan"})}                   
                        label="Enter card_number" 
                        fullWidth 
                        sx={{mb: 2}} 
                        size="small"
                        error={!!errors.card_number}></TextField> 
            </Grid>
            <Grid size={{xs: 12, md: 6}}>
                    <TextField 
                        {...register("card_expire_date", {required: "card_expire_date zorunlu alan"})}                   
                        label="Enter card_expire_date" 
                        fullWidth 
                        sx={{mb: 2}} 
                        size="small"
                        error={!!errors.card_expire_date}></TextField> 
            </Grid>
            <Grid size={{xs: 12, md: 6}}>
                    <TextField 
                        {...register("card_cvv", {required: "card_cvv zorunlu alan"})}                   
                        label="Enter card_cvv" 
                        fullWidth 
                        sx={{mb: 2}} 
                        size="small"
                        error={!!errors.card_cvv}></TextField> 
            </Grid>
        </Grid>
    );
}