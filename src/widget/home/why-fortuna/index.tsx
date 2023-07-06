import Badge from "@/components/badge";
import PageWrapper from "@/components/pageWrapper";
import Typography from "@/components/typography";
import React from "react";
import Yield from "./icons/yield";
import Key from "./icons/key";
import Pool from "./icons/pool";
import Fee from "./icons/fee";

export default function WhyFortuna() {
  const cardClass =
    "rounded-[24px] border-2 bg-transparent-1 border-transparent";

  const CardHeader = ({
    title,
    summary,
  }: {
    title: string;
    summary: string;
  }) => {
    return (
      <div className="w-[60%] text-start">
        <Typography variant="semi-heading" label={title} />
        <div className="mt-[8px]"></div>
        <Typography variant="body2" label={summary} />
      </div>
    );
  };
  return (
    <div className="text-center bg-black py-32">
      <div className="mb-16">
        <Badge
          leftComponent={
            <svg
              width={25}
              height={25}
              className="mr-3"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_421_24388)">
                <path
                  style={{ mixBlendMode: "screen" }}
                  d="M9.95898 7C9.95898 6.82741 9.81907 6.6875 9.64648 6.6875C8.61094 6.6875 7.77148 5.84804 7.77148 4.8125C7.77148 4.63991 7.63157 4.5 7.45898 4.5C7.28639 4.5 7.14648 4.63991 7.14648 4.8125C7.14648 5.84804 6.30702 6.6875 5.27148 6.6875C5.09889 6.6875 4.95898 6.82741 4.95898 7C4.95898 7.17259 5.09889 7.3125 5.27148 7.3125C6.30702 7.3125 7.14648 8.15196 7.14648 9.1875C7.14648 9.36009 7.28639 9.5 7.45898 9.5C7.63157 9.5 7.77148 9.36009 7.77148 9.1875C7.77148 8.15196 8.61094 7.3125 9.64648 7.3125C9.81907 7.3125 9.95898 7.17259 9.95898 7Z"
                  fill="url(#paint0_linear_421_24388)"
                />
                <path
                  d="M9.95898 7C9.95898 6.82741 9.81907 6.6875 9.64648 6.6875C8.61094 6.6875 7.77148 5.84804 7.77148 4.8125C7.77148 4.63991 7.63157 4.5 7.45898 4.5C7.28639 4.5 7.14648 4.63991 7.14648 4.8125C7.14648 5.84804 6.30702 6.6875 5.27148 6.6875C5.09889 6.6875 4.95898 6.82741 4.95898 7C4.95898 7.17259 5.09889 7.3125 5.27148 7.3125C6.30702 7.3125 7.14648 8.15196 7.14648 9.1875C7.14648 9.36009 7.28639 9.5 7.45898 9.5C7.63157 9.5 7.77148 9.36009 7.77148 9.1875C7.77148 8.15196 8.61094 7.3125 9.64648 7.3125C9.81907 7.3125 9.95898 7.17259 9.95898 7Z"
                  fill="white"
                  fillOpacity="0.5"
                />
                <path
                  style={{ mixBlendMode: "screen" }}
                  d="M17.459 6.5C17.459 6.22386 17.2351 6 16.959 6C16.6829 6 16.459 6.22386 16.459 6.5C16.459 8.98488 14.4442 11 11.959 11C11.6829 11 11.459 11.2239 11.459 11.5C11.459 11.7761 11.6829 12 11.959 12C14.4443 12 16.459 14.0142 16.459 16.5C16.459 16.7761 16.6829 17 16.959 17C17.2351 17 17.459 16.7761 17.459 16.5C17.459 14.0141 19.4731 12 21.959 12C22.2351 12 22.459 11.7761 22.459 11.5C22.459 11.2239 22.2351 11 21.959 11C19.4732 11 17.459 8.98492 17.459 6.5Z"
                  fill="url(#paint1_linear_421_24388)"
                />
                <path
                  d="M17.459 6.5C17.459 6.22386 17.2351 6 16.959 6C16.6829 6 16.459 6.22386 16.459 6.5C16.459 8.98488 14.4442 11 11.959 11C11.6829 11 11.459 11.2239 11.459 11.5C11.459 11.7761 11.6829 12 11.959 12C14.4443 12 16.459 14.0142 16.459 16.5C16.459 16.7761 16.6829 17 16.959 17C17.2351 17 17.459 16.7761 17.459 16.5C17.459 14.0141 19.4731 12 21.959 12C22.2351 12 22.459 11.7761 22.459 11.5C22.459 11.2239 22.2351 11 21.959 11C19.4732 11 17.459 8.98492 17.459 6.5Z"
                  fill="white"
                  fillOpacity="0.5"
                />
                <path
                  style={{ mixBlendMode: "screen" }}
                  d="M8.45898 13C8.45898 12.7239 8.23512 12.5 7.95898 12.5C7.68284 12.5 7.45898 12.7239 7.45898 13C7.45898 14.6569 6.11584 16 4.45898 16C4.18284 16 3.95898 16.2239 3.95898 16.5C3.95898 16.7761 4.18284 17 4.45898 17C6.11584 17 7.45898 18.3431 7.45898 20C7.45898 20.2761 7.68284 20.5 7.95898 20.5C8.23512 20.5 8.45898 20.2761 8.45898 20C8.45898 18.3431 9.80212 17 11.459 17C11.7351 17 11.959 16.7761 11.959 16.5C11.959 16.2239 11.7351 16 11.459 16C9.80212 16 8.45898 14.6569 8.45898 13Z"
                  fill="url(#paint2_linear_421_24388)"
                />
                <path
                  d="M8.45898 13C8.45898 12.7239 8.23512 12.5 7.95898 12.5C7.68284 12.5 7.45898 12.7239 7.45898 13C7.45898 14.6569 6.11584 16 4.45898 16C4.18284 16 3.95898 16.2239 3.95898 16.5C3.95898 16.7761 4.18284 17 4.45898 17C6.11584 17 7.45898 18.3431 7.45898 20C7.45898 20.2761 7.68284 20.5 7.95898 20.5C8.23512 20.5 8.45898 20.2761 8.45898 20C8.45898 18.3431 9.80212 17 11.459 17C11.7351 17 11.959 16.7761 11.959 16.5C11.959 16.2239 11.7351 16 11.459 16C9.80212 16 8.45898 14.6569 8.45898 13Z"
                  fill="white"
                  fillOpacity="0.5"
                />
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_421_24388"
                  x1="3.95898"
                  y1="20.5"
                  x2="22.459"
                  y2="20.5025"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#E59CFF" />
                  <stop offset="0.5" stopColor="#BA9CFF" />
                  <stop offset={1} stopColor="#9CB2FF" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_421_24388"
                  x1="3.95898"
                  y1="20.5"
                  x2="22.459"
                  y2="20.5025"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#E59CFF" />
                  <stop offset="0.5" stopColor="#BA9CFF" />
                  <stop offset={1} stopColor="#9CB2FF" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_421_24388"
                  x1="3.95898"
                  y1="20.5"
                  x2="22.459"
                  y2="20.5025"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#E59CFF" />
                  <stop offset="0.5" stopColor="#BA9CFF" />
                  <stop offset={1} stopColor="#9CB2FF" />
                </linearGradient>
                <clipPath id="clip0_421_24388">
                  <rect
                    width={24}
                    height={24}
                    fill="white"
                    transform="translate(0.958984 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
          }
          label="New: Our Ai Aggregator Just Landed"
        />
      </div>
      <Typography className="" variant="title">
        <>
          Multi-chain Staking and <div></div>
          <span className="text-text-cool">Lending</span>
        </>
      </Typography>

      <div className="w-[40%] mt-7 mx-auto">
        <Typography
          variant="heading"
          label="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id es"
        />
      </div>
      <div className="mt-[140px]"></div>
      <PageWrapper>
        <div>
          <div className="grid grid-cols-2 gap-10">
            <div>
              <div className={`${cardClass} px-[33px] py-[31px]`}>
                <div>
                  <div className="mb-10">
                    <CardHeader
                      title="AI Yield Aggregator"
                      summary="Phasellus accumsan imperdiet tempor. Cras tincidunt, arcu nec eleifend porttitor, orci est vehicula "
                    />
                  </div>

                  <Yield />
                </div>
              </div>
              <div className={`${cardClass} mt-[22px] px-[33px] py-[31px]`}>
                <div className="h-1/2">
                  <div className="flex">
                    <CardHeader
                      title="Secure"
                      summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore "
                    />
                    <div className="w-1/2">
                      <Key />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <div>
                <div
                  className={`${cardClass}  px-[33px] relative overflow-hidden py-[31px]`}
                >
                  <div className="mb-4">
                    <CardHeader
                      title="Permissionless pool creation"
                      summary="Duis ac augue ut lectus congue luctus. Vivamus eu lacus vestibulum, luctus ante dignissim, interdum "
                    />
                  </div>
                  <div className="-mb-[197px] flex justify-center relative overflow-hidden">
                    <Pool />
                  </div>
                </div>
              </div>
              <div className="mt-[22px]">
                <div
                  className={`${cardClass}  px-[33px] relative overflow-hidden py-[31px]`}
                >
                  <div className="mb-10">
                    <CardHeader
                      title="Low transaction fees"
                      summary="Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed posuere egestas nunc ut tempus. Fu"
                    />
                  </div>
                  <Fee />
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageWrapper>
    </div>
  );
}
