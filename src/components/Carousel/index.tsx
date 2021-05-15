import { Box, Image } from "@chakra-ui/react";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper/core";

SwiperCore.use([Navigation, Pagination]);

import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";

import "swiper/swiper.min.css";
export function Carousel() {
  return (
    <Box w="100%" bg="gray.50" mt="100" mb="50">
      <Swiper slidesPerView={1} navigation={true} pagination={true}>
        <SwiperSlide>
          <Box h="450px">
            <Image
              objectFit="cover"
              src="https://images.unsplash.com/photo-1491557345352-5929e343eb89?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
            />
          </Box>
        </SwiperSlide>

        <SwiperSlide>
          <Box h="450px">
            <Image
              objectFit="contain"
              src="https://images.unsplash.com/photo-1530841377377-3ff06c0ca713?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGV1cm9wZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=60"
            />
          </Box>
        </SwiperSlide>

        <SwiperSlide>
          <Box h="450px">
            <Image
              objectFit="contain"
              src="https://images.unsplash.com/photo-1493707553966-283afac8c358?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=1500&q=60"
            />
          </Box>
        </SwiperSlide>

        <SwiperSlide>
          <Box h="450px">
            <Image
              objectFit="cover"
              src="https://images.unsplash.com/photo-1491900177661-4e1cd2d7cce2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGV1cm9wZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=60"
            />
          </Box>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
}
