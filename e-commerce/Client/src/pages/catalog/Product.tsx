import { AddShoppingCart } from "@mui/icons-material";
import { IProduct } from "../../model/IProduct";
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { Link } from "react-router";
import { useState } from "react";
import requests from "../../api/requests";
import { LoadingButton } from "@mui/lab";
import { toast } from "react-toastify";
import { currencyTRY } from "../../utils/formatCurrency";
import { useAppDispatch } from "../../hooks/hooks";
import { setCart } from "../cart/cartSlice";

interface Props {
    product: IProduct
}

export default function Product({product}: Props) {

  const [loading, setLoading] = useState(false);

  const dispacth = useAppDispatch();

  function handleAddItem(productId: number)
  {
    setLoading(true);

    requests.Cart.addItem(productId)
      .then(cart => {
                      dispacth(setCart(cart));
                      toast.success("Sepete Eklendi.");
                  })
      .catch(error => console.log(error))
      .finally(() => setLoading(false));

  }
    return (
     <Card>
      <CardMedia sx={{ height: 160, backgroundSize: "contain" }} image={`http://localhost:5047/images/${product.imageUrl}`} />
      <CardContent>
        <Typography gutterBottom variant="h6" component="h2" color="text.secondary">
          {product.name}
        </Typography>
        <Typography variant="body2" color="secondary">
          { currencyTRY.format(product.price)} 
        </Typography>
      </CardContent>
      <CardActions>
        {/*<Button 
          variant="outlined" size="small" startIcon={<AddShoppingCart/>} color="success"
          onClick={() => handleAddItem(product.id)}>Add to cart
        </Button>*/}
        <LoadingButton
          variant="outlined"
          size="small"
          loadingPosition="start"
          startIcon={<AddShoppingCart/>}      
          loading={loading} 
          onClick={() => handleAddItem(product.id)}>Sepete Ekle      
        </LoadingButton>
        <Button component={Link} to={`/catalog/${product.id}`} variant="outlined" size="small" startIcon={<SearchIcon />} color="primary">View</Button>
      </CardActions>
     </Card>
    );
  }
  