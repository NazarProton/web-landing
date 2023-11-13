import React, { MouseEventHandler, useState } from "react";
import Image from "next/image";
import team1 from "../../../../public/team.png";
import team2 from "../../../../public/team.png";
import team3 from "../../../../public/team.png";
import team4 from "../../../../public/team.png";
import Typography from "@/components/typography";
import PageWrapper from "@/components/pageWrapper";
import SectionTopHeader from "@/widget/common/sectionTopHeader";
import Carousel from "react-multi-carousel";
import Button from "@/components/button";

const partners = [
  {
    img: "bg-learn-1",
    title: `How Fortuna Works: Complete Guide Getting started with Fortuna Fi`,
    description:
      "Lorem ipsum dolor sit amet consectetur. Feugiat tristique at feugiat mi. Id at neque cursus euismod. Amet nullam risus ac purus mattis elit blandit. Quam quis ut cras et sed faucibus.",
  },
  {
    img: "bg-learn-2",
    title: "Popular Pools in Ethereum: Top 5 pools on Ethereum",
    description: "Lorem ipsum dolor sit amet consectetur. Ut sit est feugiat viverra elit id vitae scelerisque vestibulum. Dignissim suspendisse at est ac leo sociis lectus turpis dui. Habitant arcu montes cursus dui.",
  },
];

export default function LearningHub() {
  const [activeSlide, setActiveSlide] = useState(0); // Track the active slide

  const handleDotClick = (slideIndex: number) => {
    setActiveSlide(slideIndex);
  };

  const SingleSection = ({
    title,
    description,
    image,
  }: {
    title: string;
    description: string;
    image: string;
  }) => {
    return (
      <div
        className={`${image} bg-center bg-[length:100%_100%] md:px-[35px] px-8 pb-[48px] rounded-[8px] overflow-hidden md:pt-[95px] pt-12`}
      >
        {/* <div className="!mt-[150px]"></div> */}

        <Typography
          variant="body3"
          className="md:!text-[20px] !text-[21px] py-[8px] !leading-normal !font-aeonik-pro !text-white !leading-7 "
          label={title}
        />
        <Typography
          variant="heading"
          className="!font-inter-light !text-[13px] !text-white !leading-5"
          label={description}
        />

        <Button className="!mt-[30px]" theme="white" label="Learn more" />
      </div>
    );
  };

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const CustomDot = ({
    active,
    onClick,
  }: {
    active: number;
    onClick: (e: any) => void;
  }) => {
    return (
      <button
        className={`bg-[#676767] w-[10px] h-[10px] rounded mx-2 ${
          active ? "!bg-white" : ""
        }`}
        onClick={onClick}
      />
    );
  };
  return (
    <div className="bg-black">
      <PageWrapper className="!px-10%">
        <>
          {" "}
          {/* <div className="grid grid-cols-4 gap-12"> */}
          <Carousel
            swipeable={true}
            draggable={true}
            showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            customDot={
              <CustomDot active={activeSlide} onClick={handleDotClick} />
            }
            autoPlay={true}
            autoPlaySpeed={3000}
            keyBoardControl={true}
            transitionDuration={500}
            customLeftArrow={<></>}
            customRightArrow={<></>}
            // containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            {partners.map((partner, index) => {
              return (
                <div key={index} className="relative pb-24 pr-7">
                  <SingleSection
                    description={partner.description}
                    title={partner.title}
                    image={partner.img}
                  />
                </div>
              );
            })}
          </Carousel>
          {/* </div> */}
        </>
      </PageWrapper>
    </div>
  );
}
