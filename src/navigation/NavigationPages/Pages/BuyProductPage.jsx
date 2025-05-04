import { React, useContext, useState, useRef  } from "react";

import { ProductContext } from "../../../context/ProductData";
import FooterSection from "./footer";
import { convertPriceToRupees } from '../../../helper/Helper';

import './Css/BuyProductPageCss.css';

function BuyProductPage () {
    const { selectedProduct } = useContext(ProductContext);
    const [selectedImgPath, setSelectedImgPath] = useState(null);
    const productReviewDivRef = useRef(null);

    const getClikedImagePath = (path)=>{
        setSelectedImgPath(path);
    }

    const handleScrollToProductReviewDiv = () => {
        productReviewDivRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      };
    
    return(
        <div className="buy-product-wrapper__outer">

            <div class="new-arrival-wrapper"><span class="new-arrival-label">Place Your Order</span></div>

            <div className="buy-product-wrapper__inner">
                <div className="product-image-wrapper h-1/2 flex items-center flex-col">                   
                    <div className="product-image__inner flex items-center justify-center h-64 w-64 bg-gray-100 rounded overflow-hidden my-1">
                        <img
                            src={selectedImgPath || selectedProduct.thumbnail}
                            alt={selectedProduct.title}
                            className="h-full w-full object-cover"
                        />
                    </div>

                        <div className="product-thumbnails-wrapper flex items-center gap-4">
                            {selectedProduct.images.map((image, index) => (
                                <div key={index} className="small-image-wrapper">
                                <img
                                    src={image}
                                    className="product-image-small"
                                    onClick={() => getClikedImagePath(image)}
                                />
                                </div>
                            ))}
                        </div>
                    </div>
          
                    <div className="product-description-wrapper">
                    <div className="space-y-4 p-4 bg-white dark:bg-gray-900 rounded-lg shadow-sm">
                        <div className="product-title-wrapper text-3xl font-bold text-gray-900 dark:text-white">
                            {selectedProduct.title}
                        </div>

                        <div className="product-description-wrapper text-base text-gray-700 dark:text-gray-300">
                            {selectedProduct.description}
                        </div>

                        <div className="price-rating-wrapper flex flex-col md:flex-row md:items-center md:justify-between gap-2 pt-4 border-t border-gray-200 dark:border-gray-700">

                            <div className="product-price-wrapper text-2xl font-bold text-green-600 dark:text-green-400">
                            ₹ {convertPriceToRupees(selectedProduct.price)}
                            </div>

                            <p className="product-rating text-sm text-gray-600 dark:text-gray-300 flex items-center gap-2 flex-wrap">
                            {Array.from({ length: Math.round(selectedProduct.rating) }, (_, index) => (
                                <span key={index}>⭐</span>
                            ))}
                            <span
                                className="review-label underline cursor-pointer hover:text-blue-600 dark:hover:text-blue-400"
                                onClick={handleScrollToProductReviewDiv}
                            >
                                Total {selectedProduct.reviews.length} reviews
                            </span>
                            <span className="in-stock-label font-medium text-sm text-green-700 dark:text-green-400">
                                {selectedProduct.availabilityStatus}
                            </span>
                            </p>
                        </div>
                    </div>


                        <div className="product-metadata-wrapper grid grid-cols-1 md:grid-cols-2 gap-6 bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
                         
                            <div className="dimensions-card bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Product Dimensions</h3>
                                <p className="text-gray-700 dark:text-gray-300"><strong>Height:</strong> {selectedProduct.dimensions.height} cm</p>
                                <p className="text-gray-700 dark:text-gray-300"><strong>Width:</strong> {selectedProduct.dimensions.width} cm</p>
                                <p className="text-gray-700 dark:text-gray-300"><strong>Weight:</strong> {selectedProduct.weight} kg/gm</p>
                            </div>

                            <div className="product-info-card bg-gray-100 dark:bg-gray-800 p-4 rounded-lg space-y-3">
                                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Warranty Information</h3>
                                <p className="text-gray-700 dark:text-gray-300">{selectedProduct.warrantyInformation}</p>

                                <div className="meta-info pt-3 space-y-2 border-t border-gray-300 dark:border-gray-700 mt-4">
                                <p className="text-gray-700 dark:text-gray-300"><strong>Created:</strong> {new Date(selectedProduct.meta.createdAt).toDateString()}</p>
                                <p className="text-gray-700 dark:text-gray-300"><strong>Updated:</strong> {new Date(selectedProduct.meta.updatedAt).toDateString()}</p>
                                <p className="text-gray-700 dark:text-gray-300"><strong>Shipped Within:</strong> {selectedProduct.shippingInformation}</p>
                                <p className="text-gray-700 dark:text-gray-300"><strong>Return Policy:</strong> {selectedProduct.returnPolicy}</p>
                                <div className="return-policy" ref={productReviewDivRef}></div>
                                </div>
                            </div>
                        </div>

                        <div className="reviews-container p-4 md:p-8">
                            <div className="review-heading-wrapper mb-6 text-center">
                                <span className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">Consumer Evaluations</span>
                            </div>

                            <div className="review-wrapper grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                                {selectedProduct.reviews.length > 0 ? (
                                selectedProduct.reviews.map((review, index) => (
                                    <div
                                    key={index}
                                    className="review-card border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-md rounded-lg p-4 transition hover:shadow-lg"
                                    >
                                    <div className="review-header flex items-center gap-4 mb-4">
                                        <div className="avatar w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-semibold text-lg">
                                        {review.reviewerName.charAt(0).toUpperCase()}
                                        </div>
                                        <div className="review-info">
                                        <p className="font-medium text-gray-800 dark:text-gray-100">{review.reviewerName}</p>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">
                                            {review.reviewerEmail.replace(/(.{1}).*(@.*)/, "$1****$2")}
                                        </p>
                                        </div>
                                    </div>

                                    <p className="review-comment italic text-gray-700 dark:text-gray-300 mb-2">"{review.comment}"</p>
                                    <p className="review-date text-sm text-gray-500 dark:text-gray-400">
                                        {new Date(review.date).toDateString()}
                                    </p>
                                    </div>
                                ))
                                ) : (
                                <p className="no-reviews text-gray-500 dark:text-gray-400 text-center col-span-full">No reviews available.</p>
                                )}
                            </div>
                        </div>

                    </div>

                    <div className="product-billing-wrapper__outer p-4 md:p-8 bg-white dark:bg-gray-900 rounded-lg shadow-lg space-y-6">
                    
                        <div className="product-billing-wrapper__inner flex flex-col md:flex-row gap-6">
                            <div className="product-count-wrapper flex-1">
                            <h5 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">Select Count</h5>
                            <input
                                type="number"
                                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
                                placeholder="0"
                            />
                            </div>
                        </div>

                        <div className="card-details-wrapper__outer space-y-6">
                            <div className="card-label text-xl font-semibold text-gray-800 dark:text-white">Card Details</div>

                            <div className="card-type-wrapper flex flex-wrap gap-4">
                            <div className="card bg-red-100 dark:bg-red-800 text-red-800 dark:text-red-100 px-4 py-2 rounded shadow-sm">Master</div>
                            <div className="card bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-100 px-4 py-2 rounded shadow-sm">Visa</div>
                            <div className="card bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-100 px-4 py-2 rounded shadow-sm">Rupay</div>
                            </div>

                            <div className="card-details__inner grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <h5 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name on card</h5>
                                <input
                                type="text"
                                placeholder="Enter name here"
                                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
                                />
                            </div>

                            <div>
                                <h5 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Card number</h5>
                                <input
                                type="text"
                                placeholder="1234 5678 9012 3456"
                                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
                                />
                            </div>

                            <div>
                                <h5 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Expiration Date</h5>
                                <input
                                type="text"
                                placeholder="MM/YY"
                                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
                                />
                            </div>

                            <div>
                                <h5 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">CVV</h5>
                                <input
                                type="text"
                                placeholder="123"
                                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
                                />
                            </div>
                            </div>
                          
                            <div className="total-cost__wrapper">
                            <h5 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">Total</h5>
                            <input
                                type="text"
                                placeholder="Total will be appear here"
                                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
                            />
                            </div>

                            <div className="btn-wrapper">
                            <button className="w-full md:w-auto bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
                                Order now
                            </button>
                            </div>
                        </div>
                    </div>

                </div>
            <FooterSection/>
        </div>
    )
}

export default BuyProductPage;

// 🚚 , 🔄