import { Box, Button, Grid, Paper, Step, StepLabel, Stepper } from "@mui/material";
import Info from "./Info";
import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";
import Review from "./Review";
import { useState } from "react";
import { ChevronLeftRounded, ChevronRightRounded } from "@mui/icons-material";

const steps = ["Teslimat Bilgileri","Ödeme","Sipariş Özeti"];

function getStepContent(step: number)
{
    switch(step) {
        case 0:
            return <AddressForm />;
        case 1:
            return <PaymentForm />;
        case 2:
            return <Review />;
        default:
            throw new Error("Bilinmeyen bir Adım.");
    }
}

export default function CheckoutPage()
{
    const [activeStep, setActiveStep] = useState(0);

    function handleNext() {
        setActiveStep(activeStep + 1);
    }

    function handlePrevious() {
        setActiveStep(activeStep - 1);
    }

    return (
        <Paper>
            <Grid container spacing={5}>
                <Grid size={4} sx={{
                    borderRight: "1px solid",
                    borderColor: "divider",
                    p: 3
                }}>
                    <Info />
                </Grid>
                <Grid size={8} sx={{p:3}} >
                   <Box >
                        <Stepper activeStep={activeStep} sx={{height: 40, mb: 4}}>
                            { steps.map((label) => (
                                <Step key={label}>
                                    <StepLabel>{label}</StepLabel>
                                </Step>
                            ))}
                        </Stepper>
                   </Box>
                   <Box>
                        {activeStep === steps.length ? (
                            <h2>Siparişiniz Alındı.</h2>
                        ) : (
                            <>
                                {getStepContent(activeStep)}
                                <Box>

                                    <Box sx={
                                        [
                                            {
                                                display: "flex",
                                            },
                                            activeStep !== 0 
                                                ? { justifyContent: "space-between" }
                                                : { justifyContent: "flex-end" }
                                        ]
                                    }>
                                        {
                                            activeStep !== 0 && 
                                                <Button startIcon={<ChevronLeftRounded />} variant="contained" 
                                                onClick={handlePrevious}>Geri</Button>
                                        }

                                        <Button startIcon={<ChevronRightRounded />} variant="contained" 
                                            onClick={handleNext}>İleri</Button>
                                    </Box>
                                </Box>
                            </>
                        )}           
                   </Box>
                </Grid>
            </Grid>
        </Paper>
    );
}