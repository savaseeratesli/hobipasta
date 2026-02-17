import { CircularProgress, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { IProduct } from "../../model/IProduct";

export default function ProductDetailsPage() {

    const { id } = useParams();
    const [product, setProduct] = useState<IProduct | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProduct = async () => {
            setLoading(true);

            const startTime = Date.now(); // spinner başlangıç zamanı

            try {
                const response = await fetch(`http://localhost:5047/api/products/${id}`);
                const data = await response.json();
                setProduct(data);
            } catch (error) {
                console.log(error);
            } finally {
                const elapsed = Date.now() - startTime;
                const minimumTime = 400; // 1.5 saniye minimum spinner süresi

                if (elapsed < minimumTime) {
                    setTimeout(() => {
                        setLoading(false);
                    }, minimumTime - elapsed);
                } else {
                    setLoading(false);
                }
            }
        };

        fetchProduct();
    }, [id]);

    if (loading) {
        return (
            <Stack
                alignItems="center"
                justifyContent="center"
                height="60vh"
            >
                <CircularProgress size={70} />
            </Stack>
        );
    }

    if (!product) return <h5>Product not found...</h5>;

    return (
        <Typography variant="h2">
            {product.name}
        </Typography>
    );
}
