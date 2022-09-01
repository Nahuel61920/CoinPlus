import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import loader from "../../assets/img/loading-best.gif";

function CryptoBest({bestCrypto}) {
  return (
    <div>
      <h2>Las mejores Criptos</h2>
      {bestCrypto.length ? (
        <div className="row d-flex align-items-center justify-content-center mt-4 mb-5">
          <Swiper
            slidesPerView={3}
            slidesPerGroup={3}
            grabCursor={true}
            loop={true}
            loopFillGroupWithBlank={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            breakpoints={{
              0: {
                slidesPerView: 1,
                slidesPerGroup: 1,
              },
              768: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                spaceBetween: 30,
              },
            }}
          >
            {bestCrypto.map((c, key) => {
              if (key < 12) {
                return (
                  <SwiperSlide className="card_cryp_best" key={c.id}>
                    <div className="card-body row">
                      <div className="col-8">
                        <h5 className="card-title">{c.name}</h5>
                        <p className="card-text">{c.symbol}</p>
                        <p className="card-text">
                          ${c.price.toLocaleString("en-US")}
                        </p>
                      </div>
                      <div className="col-4">
                        <img src={c.logo} alt={c.name} className="img-fluid" />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              }
            })}
          </Swiper>
        </div>
      ) : (
        <div className="d-flex justify-content-center my-5">
            <img src={loader} alt="loading" height="20" className="my-5" />
        </div>
      )}
    </div>
  );
}

export default CryptoBest;
