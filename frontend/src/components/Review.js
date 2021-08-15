import React from "react";
import Rating from "react-rating-stars-component";

export default function Review() {
    return (
        <div className='rating-wrapper'>
            <div className='mb-3'>
                <span className='title'>reviews</span>
            </div>
            <div className='d-flex justify-content-between'>
                <div className='d-flex align-items-center'>
                    <Rating value={5} edit={false}></Rating>
                    <span className='count-review ms-2'>2 reviews</span>
                </div>
                <div>
                    <img
                        alt='icon'
                        className='me-2'
                        src={require("../assets/imgs/message.png").default}
                    />
                    <span className='write-review'>Write a review</span>
                </div>
            </div>
            <div className='review-wrapper mt-3'>
                <div className='review-item mb-5'>
                    <div className='d-flex justify-content-between mb-2'>
                        <strong className='user_name'>ShAmAn design</strong>
                        <div className='d-flex align-items-center'>
                            <span className='count_time me-2'>
                                3 months ago
                            </span>
                            <Rating value={5} edit={false}/>
                        </div>
                    </div>
                    <span className='review_content'>
                        At vero eos et accusamus et iusto odio dignissimos
                        ducimus qui blanditiis praesentium voluptatum deleniti
                    </span>
                </div>
                <div className='review-item'>
                    <div className='d-flex justify-content-between mb-2'>
                        <strong className='user_name'>Oleh Chabanov</strong>
                        <div className='d-flex align-items-center'>
                            <span className='count_time me-2'>
                                3 months ago
                            </span>
                            <Rating value={5} edit={false}/>
                        </div>
                    </div>
                    <span className='review_content'>
                        On the other hand, we denounce with righteous
                        indignation and like men who are so beguiled and
                        demoralized by the charms of pleasure of the moment
                    </span>
                </div>
            </div>
        </div>
    );
}
