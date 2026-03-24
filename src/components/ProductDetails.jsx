import React from 'react';
import { useLocation } from 'react-router-dom';
function ProductDetails() {
    const location = useLocation();
    const product = location.state?.product;

    if (!product) return <h2>No Product Found</h2>;
    return (
        <div>
            
        </div>
    );
}

export default ProductDetails;