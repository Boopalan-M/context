
import * as React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { BrowserRouter, Route, Link } from "react-router-dom";

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}));
function Header(props) {
    const { cartItems } = props;
    return (
        <div>
            <BrowserRouter>
                <Link to="/Home">
                    Home
                </Link>
            </BrowserRouter>




            <IconButton aria-label="cart">
                <StyledBadge badgeContent={cartItems?.length } color="secondary">
                    <ShoppingCartIcon />
                </StyledBadge>
            </IconButton>

        </div>
    )
}

export default Header

