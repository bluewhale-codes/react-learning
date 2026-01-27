import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'


export default function HeroCarousel({slides}) {

  
  return (
    <Swiper 
      modules={[Autoplay, Pagination, Navigation]}
      autoplay={{ delay: 3000 }}
      pagination={{ clickable: true }}
      navigation
      loop
      className="h-[50vh]"
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <img
            src={slide.image}
            className="h-full w-full object-cover"
            alt=""
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
