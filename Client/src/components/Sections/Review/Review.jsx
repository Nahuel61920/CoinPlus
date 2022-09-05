import React, { useEffect } from "react";
import commentSVG from "../../../assets/svg/commentSVG.svg";
import { fetchCommet } from "../../../redux/reducers/cryptoRed.js";
import { useDispatch, useSelector } from "react-redux";
import { ImQuotesLeft } from "react-icons/im";
import { TbPlayerTrackPrev, TbPlayerTrackNext } from "react-icons/tb";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "./review.css";
import "swiper/css";
import "swiper/css/navigation";

export default function Review() {
    const dispatch = useDispatch();
    const { commets } = useSelector((state) => state.crypto);

    useEffect(() => {
        dispatch(fetchCommet());
    }, [dispatch]);

    console.log(commets);
  return (
    <div
      id="Reviews"
      className="row aling-content-center justify-content-center d-flex flex-md-row flex-column min-vh-100"
    >
      <h1 className="fw-bold text-center mt-4">Comentarios</h1>
      <div
        className="col-12 col-md-6 aling-content-center mt-5"
        data-aos="fade-right"
        data-aos-delay="300"
      >
        <Swiper
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
                nextEl: ".next",
                prevEl: ".prev",
            }}
            loop={true}
            modules={[Navigation]}
            className="mySwiper"
            >
            <div>


                {commets.map((commet) => (
                    <SwiperSlide key={commet.id}>
                        <div className="testimonial__quote">
                            <ImQuotesLeft className='bx bxs-quote-alt-left' ></ImQuotesLeft>
                        </div>
                        <p className="testimonial__description">
                            {commet.content}
                        </p>
                        <h3 className="testimonial__date">{commet.createdAt.slice(0, 10)}</h3>
                        <div className="testimonial__perfil">
                            <img src={commet.picture} alt="" className="testimonial__perfil-img"/>

                            <div className="testimonial__perfil-data">
                                <span className="testimonial__perfil-name">{commet.name}</span>
                                    {commet.rating === 1 ? (
                                        <span className="testimonial__perfil-stars">★</span>
                                    ) : commet.rating === 2 ? (
                                        <span className="testimonial__perfil-stars">★★</span>
                                    ) : commet.rating === 3 ? (
                                        <span className="testimonial__perfil-stars">★★★</span>
                                    ) : commet.rating === 4 ? (
                                        <span className="testimonial__perfil-stars">★★★★</span>
                                    ) : commet.rating === 5 ? (
                                        <span className="testimonial__perfil-stars">★★★★★</span>
                                    ) 
                                    : null}

                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </div>
            <div className="d-flex gap-3">
            <div class="prev">
                <TbPlayerTrackPrev />
            </div>
            <div class="next">
                <TbPlayerTrackNext />
            </div>
            </div>
        </Swiper>
                
      </div>
      <div
        className="col-12 col-md-6 my-5 container__img_header"
        data-aos="fade-left"
        data-aos-delay="650"
      >
        <img src={commentSVG} alt="header" />
      </div>
      
    </div>
  );
}
