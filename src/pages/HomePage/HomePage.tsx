import { useTranslation } from "react-i18next";

import groupOne from "../../assets/photos/home/illustration.svg";
import navArrows from "../../assets/photos/home/arrows-right.svg";
import facebook from "../../assets/photos/home/facebook.svg";
import youtube from "../../assets/photos/home/youtube.svg";
import twitter from "../../assets/photos/home/twitter.svg";
import people from "../../assets/photos/home/people.svg";
import why_image from "../../assets/photos/home/why-image.svg";
import why_arrow_top from "../../assets/photos/home/why-arrow-top.svg";
import why_arrow_bottom from "../../assets/photos/home/why-arrow-bottom.svg";
import Banner from "../../components/Banner/Banner";
import Review from "../../components/Review/Review";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import classNames from "classnames";

import chart1 from "../../assets/photos/home/chart-1.svg";
import chart2 from "../../assets/photos/home/chart-2.svg";
import chart3 from "../../assets/photos/home/chart-3.svg";
import chart_arrow from "../../assets/photos/home/chart-arrow.svg";
import playbook_lg from "../../assets/photos/collection/pb-lg.svg";
import playbook_md from "../../assets/photos/collection/pb-md.svg";
import playbook_sm from "../../assets/photos/collection/pb-xs.svg";
import icon_left from "../../assets/photos/collection/icon_left.svg";
import icon_right from "../../assets/photos/collection/icon_right.svg";
import highlight from "../../assets/photos/collection/highlight.svg";
import what_is_img from "../../assets/photos/home/what-is-img.svg";
import stepper from "../../assets/photos/home/stepper.svg";
import arrows_right from "../../assets/photos/home/arrows-right.svg";
import chart0 from "../../assets/photos/home/many_job.svg";
import Testimonials from "../../components/Testimonials";
import Pricing from "../../components/Pricing";
import { UIRoutes } from "../../core/router";
import { LogEvent } from "../../core/constants/functions";
import { hotjar } from "react-hotjar";
import useAuth from "../../core/hooks/useAuth";
import useModal from "../../core/hooks/useModal";
import { Modal } from "../../core/models/enums";

const read_lg = require("../../assets/photos/home-tabs/read-lg.png");
const read_md = require("../../assets/photos/home-tabs/read-md.png");
const read_sm = require("../../assets/photos/home-tabs/read-sm.png");

const сommunity_lg = require("../../assets/photos/home-tabs/сommunity-lg.png");
const сommunity_md = require("../../assets/photos/home-tabs/сommunity-md.png");
const сommunity_sm = require("../../assets/photos/home-tabs/сommunity-sm.png");
const publish_lg = require("../../assets/photos/home-tabs/publish-lg.png");
const publish_md = require("../../assets/photos/home-tabs/publish-md.png");
const publish_sm = require("../../assets/photos/home-tabs/publish-sm.png");

const grow_lg = require("../../assets/photos/home-tabs/grow-lg.png");
const grow_md = require("../../assets/photos/home-tabs/grow-md.png");
const grow_sm = require("../../assets/photos/home-tabs/grow-sm.png");

const HomePage = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState(1);

  const navigate = useNavigate();
  const { isAuth } = useAuth();

  const handleClickScroll = () => {
    const element = document.getElementById("section-why");
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const NavigateToDiscover = () => {
    isAuth
      ? navigate(`/${UIRoutes.DISCOVER}`)
      : navigate(`/${UIRoutes.SIGN_IN}`);
  };

  return (
    <>
      <div
        className="flex mx-auto max-w-[1880px] justify-between gap-[40px] my-[38px] pl-[7vw] pr-[50px]
        max-sm:px-[16px]
        max-sm:items-center
        max-sm:flex-col-reverse
        max-sm:my-[22px]
        max-md:flex-col-reverse
      max-lg:my-[62px]
      max-lg:pl-[32px]
      max-lg:pr-[20px]
      max-lg:gap-[12px]
      max-lg:items-center
      "
      >
        <div
          className="mt-[46px]
          max-sm:w-full
          max-md:w-full
          max-lg:mt-0
        max-lg:w-[568px]
        "
        >
          <h1
            className="max-w-[568px] font-poppins text-[40px] leading-[60px] font-bold text-home-title tracking-[-0.01em]
          max-lg:text-[38px]
          max-lg:leading-[53px]
          "
          >
            {t<string>("HOME.TITLE")}
          </h1>
          <div className="flex flex-col gap-[16px] mt-[24px]">
            <p className="text-[16px] font-poppins text-simple-text max-w-[474px] leading-[26px] tracking-[-0.1px]">
              {t<string>("HOME.SUBTITLE")}
            </p>
          </div>
          <div
            className="flex items-center gap-[32px] mt-[48px]
          max-sm:gap-[16px]
          max-sm:mt-[36px]
          "
          >
            <Link
              onClick={() => {
                hotjar.event("SplashPage-GetStarted");
                LogEvent("splash-page", "get-started");
              }}
              to={`/${UIRoutes.SIGN_UP}`}
              className="text-[16px] font-semibold leading-[21px] py-[17px] px-[20px] bg-buttons-bg rounded-[8px] text-buttons-color shadow-free-trial
              hover:bg-buttons-bg-hover
                active:bg-buttons-bg-active
              "
            >
              {t<string>("HOME.FREE_START")}
            </Link>
            <div className="flex items-center">
              <button
                onClick={() => {
                  LogEvent("splash-page", "learn-more");
                  hotjar.event("SplashPage-LearnMore");
                  handleClickScroll();
                }}
                className="text-buttons-bg text-[16px] font-semibold leading-[21px] min-w-[90px]
                hover:text-buttons-bg-hover
                active:text-buttons-bg-active
                "
              >
                {t<string>("HOME.LEARN")}
              </button>
              <img
                className="max-w-[32px]
                "
                src={navArrows}
                alt="navigate arrows"
              />
            </div>
          </div>
          <div
            className="flex items-center gap-[16px] mt-[80px] bg-people-bg p-[16px] rounded-[8px]
            max-lg:hidden
          "
          >
            <div>
              <img src={people} alt="people" />
            </div>
            <p
              className="text-simple-text max-w-[256px] leading-[23px] tracking-[-0.1px] text-[16px] font-poppins font-normal
            max-sm:text-center
            "
            >
              {t<string>("HOME.JOIN").split(" ")[0]}{" "}
              <span className="font-semibold">
                {t<string>("HOME.JOIN").split(" ")[1]}{" "}
              </span>
              {t<string>("HOME.JOIN").split(" ").slice(2).join(" ")}
            </p>
          </div>
          <div
            className="flex gap-[85.5px]  mt-[15px]
          max-lg:hidden
          "
          >
            {/* <button className="flex items-center gap-[12px]">
              <img src={facebook} alt="facebook" />
              <span className="font-poppins not-italic text-[14px] uppercase leading-[26px] font-medium tracking-[2px]">
                {t<string>("HOME.FACEBOOK")}
              </span>
            </button>
            <button className="flex items-center gap-[12px]">
              <img src={youtube} alt="youtube" />
              <span className="font-poppins not-italic text-[14px] uppercase leading-[26px] font-medium tracking-[2px]">
                {t<string>("HOME.YOUTUBE")}
              </span>
            </button> */}
            <Link
              onClick={() => {
                hotjar.event("twitter-link");
                LogEvent("social-networks", "twitter");
              }}
              to="https://twitter.com/playbookwork"
              target="blank"
              className="flex items-center gap-[12px]"
            >
              <img src={twitter} alt="twitter" />
              <span className="font-poppins not-italic text-[14px] uppercase leading-[26px] font-medium tracking-[2px]">
                {t<string>("HOME.TWITTER")}
              </span>
            </Link>
          </div>
        </div>
        <div className="min-[768px]:absolute z-[-1] right-0">
          <img
            className="object-cover
            max-sm:h-[485px]
            max-lg:h-[465px]
            max-lg:w-[360px]
            max-xl:w-[600px]
          "
            src={groupOne}
            alt="group"
          />
          {/* <img
            src={groupOneMob}
            alt="groupOneMob"
            className="hidden
            max-sm:hidden
            max-lg:block
          "
          />
          <img
            src={groupThreeMob}
            alt="groupOneMob"
            className="hidden max-sm:block"
          /> */}
        </div>
      </div>
      <div
        className="hidden  items-center justify-center flex-col
        max-sm:px-[16px]
      max-lg:flex
      "
      >
        <div
          className="items-center gap-[16px] mt-[36px] bg-people-bg p-[16px] rounded-[8px]
          max-sm:w-full
          max-sm:flex-col
      max-lg:flex
      "
        >
          <div>
            <img
              src={people}
              alt="people"
              className="
          max-sm:w-full
            "
            />
          </div>
          <p
            className="text-simple-text max-w-[256px] leading-[23px] tracking-[-0.1px] text-[16px] font-poppins font-normal
          max-sm:w-full
          max-sm:text-center
          "
          >
            {t<string>("HOME.JOIN").split(" ")[0]}{" "}
            <span className="font-semibold">
              {t<string>("HOME.JOIN").split(" ")[1]}{" "}
            </span>
            {t<string>("HOME.JOIN").split(" ").slice(2).join(" ")}
          </p>
        </div>
        <div
          className="gap-[85.5px] mt-[15px]
          max-sm:mt-[9px]
          max-sm:w-full
          max-sm:justify-center
          max-sm:gap-[25.45px]
          max-lg:flex
          max-[1024px]:mb-[50px]
        "
        >
          {/* <button
            className="flex items-center gap-[12px] max-sm:flex-1 
          max-sm:gap-[4px]
          max-sm:justify-between
          ">
            <img src={facebook} alt="facebook" />
            <span className="font-poppins not-italic text-[14px] uppercase leading-[26px] font-medium tracking-[2px]">
              {t<string>("HOME.FACEBOOK")}
            </span>
          </button>
          <button
            className="flex items-center gap-[12px] max-sm:flex-1 
          max-sm:gap-[4px]
          max-sm:justify-between
          ">
            <img src={youtube} alt="youtube" />
            <span className="font-poppins not-italic text-[14px] uppercase leading-[26px] font-medium tracking-[2px]">
              {t<string>("HOME.YOUTUBE")}
            </span>
          </button> */}
          <Link
            onClick={() => {
              hotjar.event("twitter-link");
              LogEvent("social-networks", "twitter");
            }}
            to="https://twitter.com/playbookwork"
            target="blank"
            className="flex items-center gap-[12px] max-sm:flex-1 
            max-sm:gap-[4px] max-sm:w-max max-sm:justify-center"
          >
            <img src={twitter} alt="twitter" />
            <span className="font-poppins not-italic text-[14px] uppercase leading-[26px] font-medium tracking-[2px]">
              {t<string>("HOME.TWITTER")}
            </span>
          </Link>
        </div>
      </div>

      <div
        id="what-is-playbook"
        className="flex flex-col items-center max-w-[1264px] mx-[auto] pb-[140px] text-home-title px-[32px]"
      >
        <h2 className="mt-[32px] font-poppins font-bold lg:text-[40px] text-[28px]">
          {t<string>("HOME.WHAT_IS_PLAYBOOK")}
        </h2>
        <p className="text-center text-simple-text leading-[26px] max-w-[620px] mt-[24px] text-[16px] font-poppins">
          {t<string>("HOME.WHAT_IS_DESC")}
        </p>
        <div className="flex flex-col md:flex-row items-center justify-between w-[100%] gap-[3vw] mt-[60px]">
          <div className="max-w-[536px]">
            <img className="w-[100%] object-cover" src={what_is_img} alt="" />
          </div>
          <div className="flex flex-row items-start gap-[24px] mt-[30px]">
            <div className="w-[40px] h-[300px]">
              <img className="w-[100%]" src={stepper} alt="" />
            </div>
            <div className="flex flex-col">
              <div className="flex flex-col gap-[32px] max-w-[458px]">
                <div>
                  <h2 className="text-home-title text-[20px] font-poppins font-semibold">
                    {t<string>("HOME.WHAT_IS_TITLE_1")}
                  </h2>
                  <p className="text-simple-text text-[16px] font-poppins leading-[26px]">
                    {t<string>("HOME.WHAT_IS_TEXT_1")}
                  </p>
                </div>
                <div>
                  <h2 className="text-home-title text-[20px] font-poppins font-semibold">
                    {t<string>("HOME.WHAT_IS_TITLE_2")}
                  </h2>
                  <p className="text-simple-text text-[16px] font-poppins leading-[26px]">
                    {t<string>("HOME.WHAT_IS_TEXT_2")}
                  </p>
                </div>
                <div>
                  <h2 className="text-home-title text-[20px] font-poppins font-semibold">
                    {t<string>("HOME.WHAT_IS_TITLE_3")}
                  </h2>
                  <p className="text-simple-text text-[16px] font-poppins leading-[26px]">
                    {t<string>("HOME.WHAT_IS_TEXT_3")}
                  </p>
                </div>
              </div>
              <div className="lg:flex flex-row hidden gap-[32px] mt-[97px]">
                <button
                  onClick={NavigateToDiscover}
                  className="px-[12px] py-[20px] bg-buttons-bg rounded-[8px] text-buttons-color text-[16px] font-poppins font-semibold"
                >
                  {t<string>("HOME.WHAT_IS_BUTTON_FREE")}
                </button>
                <button
                  onClick={NavigateToDiscover}
                  className="flex flex-row gap-[5px] items-center px-[12px] py-[20px] text-buttons-bg text-[16px] font-poppins font-semibold"
                >
                  {t<string>("HOME.WHAT_IS_BUTTON_DISCOVER")}
                  <img src={arrows_right} alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center lg:hidden gap-[32px] mt-[97px]">
          <button
            onClick={NavigateToDiscover}
            className="px-[12px] py-[20px] bg-buttons-bg rounded-[8px] text-buttons-color text-[16px] font-poppins font-semibold"
          >
            {t<string>("HOME.WHAT_IS_BUTTON_FREE")}
          </button>
          <button
            onClick={NavigateToDiscover}
            className="flex flex-row gap-[5px] items-center px-[12px] py-[20px] text-buttons-bg text-[16px] font-poppins font-semibold"
          >
            {t<string>("HOME.WHAT_IS_BUTTON_DISCOVER")}
            <img src={arrows_right} alt="" />
          </button>
        </div>
      </div>

      <div
        className="bg-tools-bg  min-[1024px]:pt-[90px] pb-[100px] max-[1024px]:pt-[80px] max-[650px]:pb-[50px]"
        id="section-why"
      >
        <div className="w-[100%] max-w-[1264px] px-[32px] mx-[auto] font-poppins max-[650px]:px-[16px]">
          <h2
            className="text-center font-bold text-[40px] leading-[52px] text-home-title tracking-[-0.1px]
              max-lg:text-[28px] max-lg:leading-[36.4px] mb-[60px] max-[650px]:mb-[40px]"
          >
            {t<string>("HOME.WHY_PB")}
          </h2>

          <div
            className="rounded-[20px] bg-white shadow-review-card pt-[28px] min-[1024px]:pl-[36px] relative
            max-[1024px]:px-[40px] max-[1024px]:pb-[60px] max-[650px]:pt-[12px] max-[650px]:px-[16px] max-[650px]:pb-[40px]"
          >
            <div
              className="overflow-auto mb-[14px] max-[1024px]:mb-[0px] max-[1024px]:px-[40px] max-[1024px]:mx-[-40px] max-[650px]:mx-[-16px]
              max-[1024px]:px-[16px]"
            >
              <div
                className="inline-flex items-end gap-[24px] pt-[5px] pb-[15px] border-b-[1px] border-solid
                  "
              >
                <div
                  onClick={() => setActiveTab(1)}
                  className={classNames({
                    "text-buttons-bg": activeTab === 1,
                    "text-home-title": activeTab !== 1,
                    "tracking-[-0.1px] relative transition duration-150 ease-in text-[15px] leading-[22px] cursor-pointer":
                      true,
                  })}
                >
                  {t<string>("HOME.WHY_TAB_1")}
                  <div
                    className={classNames({
                      "w-[100%]": activeTab === 1,
                      "w-[0%]": activeTab !== 1,
                      "absolute bottom-[-15px] left-[-1px] h-[1px] transition-all duration-300 ease-in bg-buttons-bg":
                        true,
                    })}
                  ></div>
                </div>
                <div
                  onClick={() => setActiveTab(2)}
                  className={classNames({
                    "text-buttons-bg": activeTab === 2,
                    "text-home-title": activeTab !== 2,
                    "tracking-[-0.1px] relative transition duration-150 ease-in text-[15px] leading-[22px] cursor-pointer":
                      true,
                  })}
                >
                  {t<string>("HOME.WHY_TAB_2")}
                  <div
                    className={classNames({
                      "w-[100%]": activeTab === 2,
                      "w-[0%]": activeTab !== 2,
                      "absolute bottom-[-15px] left-[-1px] h-[1px] transition-all duration-300 ease-in bg-buttons-bg":
                        true,
                    })}
                  ></div>
                </div>
                <div
                  onClick={() => setActiveTab(3)}
                  className={classNames({
                    "text-buttons-bg": activeTab === 3,
                    "text-home-title": activeTab !== 3,
                    "tracking-[-0.1px] relative transition duration-150 ease-in text-[15px] leading-[22px] cursor-pointer":
                      true,
                  })}
                >
                  {t<string>("HOME.WHY_TAB_3")}
                  <div
                    className={classNames({
                      "w-[100%]": activeTab === 3,
                      "w-[0%]": activeTab !== 3,
                      "absolute bottom-[-15px] left-[-1px] h-[1px] transition-all duration-300 ease-in bg-buttons-bg":
                        true,
                    })}
                  ></div>
                </div>
                <div
                  onClick={() => setActiveTab(4)}
                  className={classNames({
                    "text-buttons-bg": activeTab === 4,
                    "text-home-title": activeTab !== 4,
                    "tracking-[-0.1px] relative transition duration-150 ease-in text-[15px] leading-[22px] cursor-pointer":
                      true,
                  })}
                >
                  {t<string>("HOME.WHY_TAB_4")}
                  <div
                    className={classNames({
                      "w-[100%]": activeTab === 4,
                      "w-[0%]": activeTab !== 4,
                      "absolute bottom-[-15px] left-[-1px] h-[1px] transition-all duration-300 ease-in bg-buttons-bg":
                        true,
                    })}
                  ></div>
                </div>
                <div
                  onClick={() => setActiveTab(5)}
                  className={classNames({
                    "text-buttons-bg": activeTab === 5,
                    "text-home-title": activeTab !== 5,
                    "tracking-[-0.1px] relative transition duration-150 ease-in text-[15px] leading-[22px] cursor-pointer":
                      true,
                  })}
                >
                  {t<string>("HOME.WHY_TAB_5")}
                  <div
                    className={classNames({
                      "w-[100%]": activeTab === 5,
                      "w-[0%]": activeTab !== 5,
                      "absolute bottom-[-15px] left-[-1px] h-[1px] transition-all duration-300 ease-in bg-buttons-bg":
                        true,
                    })}
                  ></div>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-end max-[1024px]:flex-wrap max-[1024px]:flex-col-reverse ">
              <div
                className="min-[1024px]:max-w-[40%] pt-[80px] min-[1024px]:pb-[95px] max-[1024px]:w-[100%] max-[1024px]:pt-[50px]
                max-[650px]:pt-[40px]"
              >
                <h3
                  className="font-bold text-[32px] leading-[42px] text-home-title mb-[24px] max-w-[390px] max-[1024px]:max-w-[100%] 
                  max-[650px]:text-[24px]
                  max-[650px]:leading-normal max-[650px]:mb-[18px]"
                >
                  {activeTab === 1 && <>{t<string>("HOME.WHY_TITLE_1")}</>}
                  {activeTab === 2 && <>{t<string>("HOME.WHY_TITLE_2")}</>}
                  {activeTab === 3 && <>{t<string>("HOME.WHY_TITLE_3")}</>}
                  {activeTab === 4 && <>{t<string>("HOME.WHY_TITLE_4")}</>}
                  {activeTab === 5 && <>{t<string>("HOME.WHY_TITLE_5")}</>}
                </h3>
                <p className="text-[16px] leading-[26px] text-simple-text mb-[48px] max-[650px]:mb-[24px]">
                  {activeTab === 1 && <>{t<string>("HOME.WHY_DESC_1")}</>}
                  {activeTab === 2 && <>{t<string>("HOME.WHY_DESC_2")}</>}
                  {activeTab === 3 && <>{t<string>("HOME.WHY_DESC_3")}</>}
                  {activeTab === 4 && <>{t<string>("HOME.WHY_DESC_4")}</>}
                  {activeTab === 5 && <>{t<string>("HOME.WHY_DESC_5")}</>}
                </p>

                <Link
                  onClick={() => {
                    hotjar.event("SplashPage-GetStarted");
                    LogEvent("splash-page", "get-started");
                  }}
                  to={`/${UIRoutes.SIGN_UP}`}
                  className="table text-[16px] font-semibold leading-[21px] py-[17px] px-[20px] bg-buttons-bg rounded-[8px] text-buttons-color shadow-free-trial
                  hover:bg-buttons-bg-hover
                active:bg-buttons-bg-active
                  "
                >
                  {t<string>("HOME.FREE_START")}
                </Link>
              </div>
              {activeTab === 1 && (
                <>
                  <img
                    src={read_lg}
                    alt=""
                    className="min-[1024px]:max-w-[60%] absolute right-[0] bottom-[0] max-h-[100%] max-[1024px]:hidden"
                  />
                  <img
                    src={read_md}
                    alt=""
                    className="min-[1024px]:hidden max-[650px]:hidden mt-[15px] max-w-[calc(100%+80px)] mx-[-40px]"
                  />
                  <img
                    src={read_sm}
                    alt=""
                    className="min-[650px]:hidden mt-[35px] max-w-[calc(100%+16px)] mr-[-16px]"
                  />
                </>
              )}
              {activeTab === 2 && (
                <>
                  <img
                    src={why_image}
                    alt=""
                    className="min-[1024px]:max-w-[61%] absolute right-[0] bottom-[0] max-h-[100%] 
                    max-[1024px]:hidden"
                  />
                  <img
                    src={why_image}
                    alt=""
                    className="min-[1024px]:hidden max-[650px]:hidden mt-[45px] 
                    max-w-[calc(100%+80px)] mx-[-40px]"
                  />
                  <img
                    src={why_image}
                    alt=""
                    className="min-[650px]:hidden mt-[25px] max-w-[calc(100%+32px)] mx-[-16px]"
                  />
                </>
              )}
              {activeTab === 3 && (
                <>
                  <img
                    src={сommunity_lg}
                    alt=""
                    className="min-[1024px]:max-w-[70%] absolute right-[0] bottom-[0] max-h-[100%] 
                    max-[1024px]:hidden"
                  />
                  <img
                    src={сommunity_md}
                    alt=""
                    className="min-[1024px]:hidden max-[650px]:hidden mt-[45px] 
                    max-w-[calc(100%+80px)] mx-[-40px]"
                  />
                  <img
                    src={сommunity_sm}
                    alt=""
                    className="min-[650px]:hidden mt-[25px] max-w-[calc(100%+32px)] mx-[-16px]"
                  />
                </>
              )}
              {activeTab === 4 && (
                <>
                  <img
                    src={publish_lg}
                    alt=""
                    className="min-[1024px]:max-w-[61%] absolute right-[0] bottom-[0] max-h-[100%] 
                    max-[1024px]:hidden"
                  />
                  <img
                    src={publish_md}
                    alt=""
                    className="min-[1024px]:hidden max-[650px]:hidden mt-[10px] 
                    max-w-[calc(100%+80px)] mx-[-40px]"
                  />
                  <img
                    src={publish_sm}
                    alt=""
                    className="min-[650px]:hidden mt-[20px] max-w-[calc(100%+32px)] mx-[-16px]"
                  />
                </>
              )}
              {activeTab === 5 && (
                <>
                  <img
                    src={grow_lg}
                    alt=""
                    className="min-[1024px]:max-w-[53%] absolute right-[5%] bottom-[0] max-h-[95%] 
                    max-[1024px]:hidden"
                  />
                  <img
                    src={grow_md}
                    alt=""
                    className="min-[1024px]:hidden max-[650px]:hidden mt-[10px] 
                    max-w-[calc(100%+80px)] mx-[-40px]"
                  />
                  <img
                    src={grow_sm}
                    alt=""
                    className="min-[650px]:hidden mt-[50px] max-w-[calc(100%+32px)] mx-[-16px]"
                  />
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <div
        className="bg-tools-bg  min-[1024px]:pb-[140px] max-[1024px]:pt-[20px] max-[1024px]:pb-[100px]
        max-[650px]:pt-[40px] max-[650px]:pb-[80px]"
      >
        <div className="w-[100%] max-w-[1264px] px-[32px] mx-[auto] font-poppins max-[650px]:px-[16px]">
          <h2
            className="text-center font-bold text-[40px] leading-[52px] text-home-title tracking-[-0.1px] max-w-[770px] mx-[auto]
              max-lg:text-[28px] max-lg:leading-[36.4px] mb-[24px]"
          >
            {t<string>("HOME.JOB_TITLE")}
          </h2>
          <p
            className="text-center text-[16px] leading-[26px] text-simple-text max-w-[534px] mx-[auto] mb-[80px] 
            max-[1024px]:mb-[54px] max-[650px]:mb-[40px]"
          >
            {t<string>("HOME.JOB_TEXT")}
          </p>

          <img src={chart0} alt="" className="w-[100%] shadow-chart-grow" />
        </div>
      </div>

      <div
        className="bg-white  min-[1024px]:pt-[140px] min-[1024px]:pb-[150px] max-[1024px]:pt-[110px] max-[1024px]:pb-[110px]
        max-[650px]:pt-[70px] max-[650px]:pb-[95px]"
      >
        <div className="w-[100%] max-w-[1264px] px-[32px] mx-[auto] font-poppins max-[650px]:px-[16px]">
          <h2
            className="text-center font-bold text-[40px] leading-[52px] text-home-title tracking-[-0.1px]
              max-lg:text-[28px] max-lg:leading-[36.4px] mb-[24px]"
          >
            {t<string>("HOME.CHART_TITLE")}
          </h2>
          <p
            className="text-center text-[16px] leading-[26px] text-simple-text max-w-[534px] mx-[auto] mb-[90px] 
            max-[1024px]:mb-[54px] max-[650px]:mb-[40px]"
          >
            {t<string>("HOME.CHART_TEXT")}
          </p>

          <div className="flex justify-between flex-wrap px-[20px] max-[650px]:px-[40px]">
            <div className="w-[50%] max-[650px]:w-[100%]">
              <img src={chart1} alt="" className="w-[100%] rotate-[-1deg]" />
            </div>
            <div className="w-[50%] max-[650px]:w-[100%] max-[650px]:mt-[-4%]">
              <img
                src={chart2}
                alt=""
                className="w-[100%] rotate-[6deg] shadow-chart rounded-[20px] border-[1px] border-chart-color
                max-[650px]:shadow-chart-mobile"
              />
            </div>
          </div>
        </div>
      </div>

      <div
        className="bg-tools-bg  min-[1024px]:pt-[120px] min-[1024px]:pb-[150px] max-[1024px]:pt-[110px] max-[1024px]:pb-[110px]
        max-[650px]:pt-[70px] max-[650px]:pb-[95px]"
      >
        <div className="w-[100%] max-w-[1264px] px-[32px] mx-[auto] font-poppins max-[650px]:px-[16px]">
          <h2
            className="text-center font-bold text-[40px] leading-[52px] text-home-title tracking-[-0.1px] max-w-[670px] mx-[auto]
              max-lg:text-[28px] max-lg:leading-[36.4px] mb-[24px]"
          >
            {t<string>("HOME.CHART2_TITLE")}
          </h2>
          <p
            className="text-center text-[16px] leading-[26px] text-simple-text max-w-[534px] mx-[auto] mb-[90px] 
            max-[1024px]:mb-[54px] max-[650px]:mb-[40px]"
          >
            {t<string>("HOME.CHART2_TEXT")}
          </p>

          <div className="flex justify-between flex-wrap relative">
            <img src={chart3} alt="" className="w-[100%] shadow-chart-grow" />
            <img
              src={chart_arrow}
              alt=""
              className="absolute left-[14%] top-[-25%] w-[90%]"
            />
          </div>
        </div>
      </div>

      <div
        className="bg-tools-bg  min-[1024px]:pb-[150px]  max-[1024px]:pb-[110px]
         max-[650px]:pb-[80px]"
      >
        <div className="w-[100%] max-w-[1264px] px-[32px] mx-[auto] font-poppins max-[650px]:px-[16px]">
          <h2
            className="text-center font-bold text-[40px] leading-[52px] text-home-title tracking-[-0.1px] max-w-[770px] mx-[auto]
              max-lg:text-[28px] max-lg:leading-[36.4px] mb-[24px]"
          >
            {t<string>("HOME.APP_TITLE")}
          </h2>
          <p
            className="text-center text-[16px] leading-[26px] text-simple-text max-w-[534px] mx-[auto] mb-[90px] 
            max-[1024px]:mb-[54px] max-[650px]:mb-[40px]"
          >
            {t<string>("HOME.APP_DESC")}
          </p>

          <div
            className="rounded-[20px] bg-white shadow-review-card pt-[28px] min-[1024px]:pl-[50px] min-[1024px]:pt-[50px] 
            max-[1024px]:pl-[40px] max-[1024px]:pt-[50px] max-[650px]:px-[16px]  overflow-hidden max-[650px]:pt-[20px]"
          >
            <div className="flex justify-between items-end max-[650px]:flex-wrap max-[650px]:flex-col-reverse">
              <div
                className="max-w-[344px] gap-[60px] grid pb-[43px] max-[1024px]:max-w-[50%] max-[650px]:max-w-[100%]
                max-[650px]:gap-[40px]"
              >
                <div className="">
                  <span
                    className="table text-[12px] leading-[1] bg-chart-color text-white rounded-[100px] px-[12px] py-[6px]
                      mb-[16px]"
                  >
                    {t<string>("HOME.APP_POS_1")}
                  </span>
                  <h3 className="font-semibold text-[24px] leading-normal text-home-title mb-[8px]">
                    {t<string>("HOME.APP_TITLE_1")}
                  </h3>
                  <p className="text-[16px] leading-[26px] text-simple-text">
                    {t<string>("HOME.APP_DESC_1")}
                  </p>
                </div>
                <div className="">
                  <span
                    className="table text-[12px] leading-[1] bg-top-entrepreneur text-white rounded-[100px] px-[12px] py-[6px]
                      mb-[16px]"
                  >
                    {t<string>("HOME.APP_POS_2")}
                  </span>
                  <h3 className="font-semibold text-[24px] leading-normal text-home-title mb-[8px]">
                    {t<string>("HOME.APP_TITLE_2")}
                  </h3>
                  <p className="text-[16px] leading-[26px] text-simple-text">
                    {t<string>("HOME.APP_DESC_2")}
                  </p>
                </div>
                <div className="">
                  <span
                    className="table text-[12px] leading-[1] bg-top-ceo text-white rounded-[100px] px-[12px] py-[6px]
                      mb-[16px]"
                  >
                    {t<string>("HOME.APP_POS_3")}
                  </span>
                  <h3 className="font-semibold text-[24px] leading-normal text-home-title mb-[8px]">
                    {t<string>("HOME.APP_TITLE_3")}
                  </h3>
                  <p className="text-[16px] leading-[26px] text-simple-text">
                    {t<string>("HOME.APP_DESC_3")}
                  </p>
                </div>
              </div>
              <div
                className="min-[1024px]:max-w-[56%] relative max-[1024px]:w-[100%] max-[650px]:max-w-[450px] max-[650px]:mx-[auto]
                max-[650px]:mb-[40px]"
              >
                <div
                  className="image px-[110px] z-[5] relative max-[1024px]:pr-[0] max-[1024px]:pl-[60px]
                  max-[650px]:px-[60px]"
                >
                  <img
                    src={playbook_lg}
                    alt=""
                    className="w-[395px]  max-[1024px]:hidden 
                    border-[8px] border-b-[0px]  border-create-bg-main rounded-t-[32px]"
                  />
                  <img
                    src={playbook_md}
                    alt=""
                    className="w-[100%] min-[1024px]:hidden  max-[650px]:hidden 
                      rounded-tl-[35px] shadow-playbook-md"
                  />
                  <img
                    src={playbook_sm}
                    alt=""
                    className="w-[100%] min-[650px]:hidden "
                  />
                </div>
                <img
                  src={icon_left}
                  alt=""
                  className="absolute top-[8px] right-[79%] max-w-[30%] max-[1024px]:max-w-[42%] 
                  max-[1024px]:z-[6] max-[1024px]:right-[70%] max-[1024px]:top-[-30px] 
                  max-[650px]:right-[82%] max-[650px]:top-[-2px] max-[650px]:max-w-[26%]"
                />

                <img
                  src={icon_right}
                  alt=""
                  className="absolute bottom-[25%] right-[-25px]  
                  max-[650px]:right-[-8%] max-[650px]:max-w-[28%]"
                />

                <img
                  src={highlight}
                  alt=""
                  className="absolute bottom-[6%] right-[57%] max-w-[54%] max-[1024px]:max-w-[70%]
                  max-[1024px]:rotate-[-30deg] max-[1024px]:right-[52%] max-[650px]:rotate-[0deg] max-[650px]:max-w-[55%]
                  max-[650px]:right-[63%]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Pricing /> */}
      <Testimonials />
      {/* <TopFeatures /> */}
      <Review />
      <Banner />
    </>
  );
};

export default HomePage;
