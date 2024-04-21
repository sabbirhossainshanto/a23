import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

const Slider = ({ card }) => {
  const navigate = useNavigate();

  const handleNavigate = (item) => {
    if (item?.link) {
      navigate(`/game-details/${item?.link}`);
    }
  };
  return (
    <div style={{ padding: "10px" }}>
      <div className="swiper swiper-initialized swiper-horizontal swiper-ios mySwiper swiper-backface-hidden">
        <Swiper
          spaceBetween={20}
          slidesPerView={3}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <div
            className="swiper-wrapper"
            style={{
              transitionDuration: "0ms",
              transform: "translate3d(0px, 0px, 0px)",
              transitionDelay: "0ms",
            }}
          >
            {card?.map((item, i) => {
              return (
                <SwiperSlide
                  onClick={() => handleNavigate(item)}
                  key={i}
                  style={{ borderRadius: "10px", overflow: "hidden" }}
                >
                  <div
                    className="swiper-slide swiper-slide-active"
                    style={{
                      borderRadius: "10px",
                      overflow: "hidden",
                      marginRight: "10px",
                    }}
                  >
                    <div>
                      <img
                        className="banner"
                        alt="Instant Games"
                        src={item?.image}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
