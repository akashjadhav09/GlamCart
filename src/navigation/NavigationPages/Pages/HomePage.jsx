import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RiErrorWarningLine } from "react-icons/ri";

import { ProductContext } from "../../../context/ProductData";
import Carousel from "../../../widgets/components/CarouselWidget";
import ProductCard from "../../../widgets/components/CardWidget"; 
import FooterSection from '../Pages/footer';
import ScrollToTop from '../../../widgets/components/ScrollToTop';
import CustomModal from "../../../widgets/custom-modal/ModalWidget/CustomModal";

import "./Css/HomePageCss.css";

export default function HomePage() {
    const { productDetails, validUser } = useContext(ProductContext);
    const [showCustomModal, setShowCustomModal] = useState(false);
    const [customModalMessage, setcustomModalMessage] = useState('');
    
    const navigate = useNavigate();

    function handleExploreMoreProducts(){
        if(validUser.length){
            navigate("/shopnow");
        }else
        {
            setcustomModalMessage('Please sign in before explore products.');
            setShowCustomModal(true);
        }
    }
    function handleSignInRoute(){        
        navigate('/signin')
    }

    return (
        <div className="home-page-wrapper__outer">
            <div className="home-page-wrapper__inner">
                <Carousel className="carousel" />
                <h3 className="explore-products-text"><span className="explore-product-label">Explore Products</span></h3>
                <div className="inital-product-wrapper">
                    {productDetails.products.slice(0, 8).map((product, _index) => (
                            <div key={product.id} className="product-cards">
                                <ProductCard product={product} />
                            </div>
                    ))}
                </div>
                <div className="explore-more-btn__wrapper">
                    <button className="explore-more-btn" onClick={()=> handleExploreMoreProducts()}>Explore More</button>
                </div>
                <FooterSection/>
                <ScrollToTop />
            </div>

            {showCustomModal && (
                <div className="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <CustomModal onClose={() => setShowCustomModal(false)} message={customModalMessage} handleOkButtonClick={handleSignInRoute} iconName={RiErrorWarningLine}/>
                </div>
            )}
        </div>
    );
}
