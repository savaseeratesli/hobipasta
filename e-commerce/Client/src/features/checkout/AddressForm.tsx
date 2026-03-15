import { Grid, TextField } from "@mui/material";
import { useFormContext } from "react-hook-form";

export default function AddressForm()
{
    const { register, formState: {errors} } = useFormContext();
    
    return (
        <Grid container spacing={3}>
            <Grid size={{xs: 12, md: 6}}>
                    <TextField 
                        {...register("Firstname", {required: "zorunlu alan"})}                    
                        label="Enter Firstname" 
                        fullWidth autoFocus 
                        sx={{mb: 2}} 
                        size="small"
                        error={!!errors.Firstname}></TextField> 
            </Grid>
            <Grid size={{xs: 12, md: 6}}>
                    <TextField 
                        {...register("Surname", {required: "zorunlu alan"})}                   
                        label="Surname" 
                        fullWidth 
                        sx={{mb: 2}} 
                        size="small"
                        error={!!errors.Surname}></TextField> 
            </Grid>
            <Grid size={{xs: 12, md: 6}}>
                    <TextField 
                        {...register("Phone", {required: "zorunlu alan"})}                   
                        label="Enter Phone" 
                        fullWidth 
                        sx={{mb: 2}} 
                        size="small"
                        error={!!errors.Phone}></TextField> 
            </Grid>
            <Grid size={{xs: 12, md: 6}}>
                    <TextField 
                        {...register("City", {required: "zorunlu alan"})}                   
                        label="Enter City" 
                        fullWidth 
                        sx={{mb: 2}} 
                        size="small"
                        error={!!errors.City}></TextField> 
            </Grid>
            <Grid size={{xs: 12}}>
                    <TextField 
                        {...register("AddresLine", {required: "zorunlu alan"})}                   
                        label="Enter AddresLine" 
                        fullWidth 
                        multiline
                        rows={4}
                        sx={{mb: 2}} 
                        size="small"
                        error={!!errors.AddresLine}></TextField> 
            </Grid>
        </Grid>
    );
}