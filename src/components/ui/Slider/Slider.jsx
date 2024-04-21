const Slider = () => {
  return (
    <div style={{ padding: "10px" }}>
      <div className="swiper swiper-initialized swiper-horizontal swiper-ios mySwiper swiper-backface-hidden">
        <div
          className="swiper-wrapper"
          style={{
            transitionDuration: "0ms",
            transform: "translate3d(0px, 0px, 0px)",
            transitionDelay: "0ms",
          }}
        >
          <div
            className="swiper-slide swiper-slide-active"
            style={{
              borderRadius: "10px",
              overflow: "hidden",
              width: "270px",
              marginRight: "10px",
            }}
          >
            <div>
              <img
                className="banner"
                alt="Instant Games"
                src="https://b2c.bet/uploads/mi_rcb.webp"
              />
            </div>
          </div>
          <div
            className="swiper-slide swiper-slide-next"
            style={{
              borderRadius: "10px",
              overflow: "hidden",
              width: "270px",
              marginRight: "10px",
            }}
          >
            <div>
              <img
                className="banner"
                alt="Instant Games"
                src="https://b2c.bet/uploads/lsg_dc.webp"
              />
            </div>
          </div>
        </div>
        <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
          <span className="swiper-pagination-bullet swiper-pagination-bullet-active"></span>
          <span className="swiper-pagination-bullet"></span>
        </div>
      </div>
    </div>
  );
};

export default Slider;
