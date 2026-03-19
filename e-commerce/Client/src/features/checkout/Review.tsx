import { DeliveryDining, Payment } from "@mui/icons-material";
import { Divider, Stack, Typography } from "@mui/material";
import { useFormContext } from "react-hook-form";

export default function Review()
{
    const { getValues } = useFormContext();
    return (
        <Stack spacing={2} sx={{mb:3}}>
            <Stack direction="column" divider={<Divider/>} spacing={2} sx={{my:2}}>
                <div>
                    <Typography variant="subtitle2" gutterBottom 
                        sx={{display: "flex", alignItems: "center", mb: 2, color: "text.secondary"}}>
                        <DeliveryDining color="primary" sx={{mr: 2}}/> Teslimat Bilgileri
                    </Typography>
                    <Typography gutterBottom>{getValues("Firstname")} {getValues("Surname")}</Typography>
                    <Typography gutterBottom>{getValues("Phone")}</Typography>
                    <Typography gutterBottom>{getValues("AddresLine")} / {getValues("City")}</Typography>         
                </div>
                <div>
                    <Typography variant="subtitle2" gutterBottom 
                        sx={{display: "flex", alignItems: "center", mb: 2, color: "text.secondary"}}>
                        <Payment color="primary" sx={{mr: 2}}/>Ödeme Bilgileri
                    </Typography>
                    <Typography gutterBottom>{getValues("cardname")}</Typography>
                    <Typography gutterBottom>{getValues("cardnumber")}</Typography> 
                </div>
            </Stack>
        </Stack>
    );
}