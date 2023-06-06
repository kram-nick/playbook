import { useState } from "react";
import { useTranslation } from "react-i18next";
import * as Yup from "yup";
import { useFormik } from "formik";

import useModal from "../../../core/hooks/useModal";
import { Data } from "../../../core/models";
import { useAppSelector } from "../../../core/hooks/useRedux";
import { APIRoutes } from "../../../core/http";
import useHttpGet from "../../../core/hooks/useHttpGet";

import icon_close from "../../../assets/photos/main/modal-close.svg";
import icon_star from "../../../assets/photos/main/star.svg";
import arrowDown from "../../../assets/photos/home/arrow-down.svg";

const ModalSale = () => {
  const [playbook, setPlaybook] = useState<Data.Playbook>();
  const [tags, setTags] = useState([]);
  const [showDrop, setShowDrop] = useState(false);
  const [activeTab, setActiveTab] = useState<Data.Tag>();

  const { closeModal } = useModal();

  const { t } = useTranslation();

  const { sharedId } = useAppSelector((state) => state.helpers);

  const user: Data.UserAccount = JSON.parse(
    localStorage.getItem("user") || "{}"
  );

  useHttpGet<any>(`${APIRoutes.PLAYBOOKS}/${sharedId}`, {
    dependencies: [],
    resolve: (response) => {
      setPlaybook(response?.data);
    },
  });

  useHttpGet<any>(`${APIRoutes.TAGS}`, {
    dependencies: [],
    resolve: (response) => {
      setTags(response?.data);
    },
  });

  //   console.log(tags);

  const valueFormValidationSchema = Yup.object().shape({
    discount_price: Yup.number().min(0, t<string>("ERRORS.MIN_4")),
    retail_price: Yup.number().min(0, t<string>("ERRORS.MIN_4")),
    sale_price: Yup.number().min(0, t<string>("ERRORS.MIN_4")),
    password: Yup.string()
      .min(8, t<string>("ERRORS.MIN_8"))
      .required(t<string>("ERRORS.PASSWORD_REQUIRED")),
    agree: Yup.boolean().isTrue(t<string>("ERRORS.AGREE_TERMS")),
  });

  const formikForm = useFormik<{
    playbook_id: string;
    status: string;
    tags: null | string[];
    chargeable: boolean;
    discount_price: number;
    retail_price: number;
    sale_price: number;
  }>({
    initialValues: {
      playbook_id: "",
      status: "Only Users",
      tags: null,
      chargeable: true,
      discount_price: 0,
      retail_price: 0,
      sale_price: 0,
    },
    validationSchema: valueFormValidationSchema,
    onSubmit: async (values: any) => {
      HandleSubmitForm(values);
    },
  });

  const HandleSubmitForm = async (values: any) => {};

  const ClearDescription = () => {
    setPlaybook((prev: any) => {
      return {
        ...prev,
        content: "",
      };
    });
  };

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="modal-box relative w-[100%] max-w-[839px] p-[24px] shadow-free-trial rounded-[5px]
                border-[1px] border-solid border-border-btn bg-white font-poppins 
              flex flex-col items-center
                max-md:m-[12px]
                ">
      <div
        className="w-full flex justify-between items-center mb-[20px]
              max-md:mb-[15px]
              ">
        <span className="leading-[28px] tracking-[-0.1px] text-[20px] font-normal font-poppins text-footer-main">
          {t<string>("MODALS.LIST_TITLE")}
        </span>
        <button onClick={closeModal}>
          <img src={icon_close} alt="close" />
        </button>
      </div>
      <div className="w-full flex flex-row gap-[24px] mb-[12px]">
        <span className="text-[16px] font-semibold leading-[21px] text-footer-main font-poppins min-w-[244px]">
          {t<string>("MODALS.THUMBNAIL")}
        </span>
        <span className="text-[16px] font-semibold leading-[21px] text-footer-main font-poppins ">
          {t<string>("MODALS.DETAILS")}
        </span>
      </div>
      <div
        className="mb-[24px] flex flex-row items-start gap-[24px] justify-between w-full
                max-md:flex-col
                max-md:mb-[19px]
              ">
        <div
          className="relative rounded-[5px] border-[0.718421px] border-solid border-header-bottom flex flex-col gap-[11.49px]
                items-start p-[11.1px] min-w-[244px]
                max-md:w-full
                ">
          <div className="flex flex-col items-start gap-[2.87px] w-full">
            <h4 className="text-[16px] font-semibold normal leading-[21px] text-footer-main font-poppins">
              {`${playbook?.name.slice(0, 15)}...`}
            </h4>
            <div className="flex flex-row items-center gap-[7.18px]">
              <img
                src={user?.profile_image}
                alt="avatar"
                className="w-[14.8px] h-[14.8px] object-cover rounded-[50px]"
              />
              <span className="text-[12px] normal font-poppins font-normal leading-[26px] tracking-[-0.1px] text-input-paceholder">
                {user.first_name} {user.last_name}
              </span>
            </div>
          </div>
          <img
            src={playbook?.header_url}
            alt="card"
            className="max-md:w-full h-[148px] w-[222px] object-cover"
          />
          <div className="flex flex-row items-center gap-[4.93px] max-md:w-full">
            <button
              className="flex justify-center min-w-[188.7px]  
             bg-blue-light shadow-get_free rounded-[3.7px] border-[0.62px] h-[28.37px] text-[14px] font-poppins font-normal items-center self-stretch not-italic leading-[21px] text-buttons-bg 
             max-md:min-w-[90%]
             ">
              {t<string>("MODALS.FREE_BTN")}
            </button>
            <button
              className="min-w-[28.37px] min-h-[28.37px] p-[7.4px] sahdow-payment-btn border-[0.62px] rounded-[3.7px] border-header-bottom flex items-center justify-center
            max-md:min-w-[10%]
            max-md:h-[28.37px]
            ">
              <img src={icon_star} alt="icon_star" />
            </button>
          </div>
          <button className="absolute left-0 bottom-[-28px] text-[16px] text-buttons-bg font-medium tracking-[-0.1px] leading-[18px]">
            {t<string>("MODALS.CHANGE_THUMB")}
          </button>
        </div>
        <form
          onSubmit={formikForm.handleSubmit}
          className="flex flex-col gap-[24px] justify-between min-w-[486px] w-full
        max-md:flex-col
        max-md:mb-[19px]
        ">
          <div className="flex flex-col gap-[16px]">
            <label className="flex flex-col gap-[6px]">
              <span className="text-[14px] text-home-title font-light leading-[24px]">
                {t<string>("MODALS.NAME")}
              </span>
              <input
                type="text"
                // {...formikForm.getFieldProps("")}
                value={playbook?.name}
                className="outline-none border-[1px] border-solid border-border-input rounded-[4px] px-[16px] py-[7px]
                text-[16px] font-poppins font-normal tracking-[-0.1px] leading-[26px]
                "
              />
            </label>

            <label className="flex flex-col gap-[6px]">
              <p className="flex w-full justify-between">
                <span className="text-[14px] text-home-title font-light leading-[20px]">
                  {t<string>("MODALS.DESCRIPTION")}
                </span>
                <button
                  onClick={ClearDescription}
                  className="text-[14px] text-input-paceholder font-medium leading-[20px]">
                  {t<string>("MODALS.CLEAR")}
                </button>
              </p>

              <textarea
                className="outline-none resize-none border-[1px] border-solid border-border-input rounded-[4px] px-[16px] py-[7px]
                text-[16px] font-poppins font-normal tracking-[-0.1px] leading-[26px] h-[132px]
                "
                value={playbook?.content}
              />
            </label>

            <label className="flex flex-col gap-[6px]">
              <p>
                <span className="text-[14px] text-home-title font-light leading-[20px]">
                  {t<string>("MODALS.TAGS")}
                </span>{" "}
                <span className="text-[14px] text-input-paceholder font-light leading-[20px]">
                  {t<string>("MODALS.MAX_TAG")}
                </span>
              </p>
              <input
                type="text"
                {...formikForm.getFieldProps("tags")}
                className="outline-none border-[1px] border-solid border-border-input rounded-[4px] px-[16px] py-[7px]
                text-[16px] font-poppins font-normal tracking-[-0.1px] leading-[26px]"
              />
            </label>

            <label className="flex flex-col gap-[6px]">
              <span className="text-[14px] text-home-title font-light leading-[20px]">
                {t<string>("MODALS.VISIBILITY")}
              </span>
              <div className="relative border-[1px] border-solid border-border-input rounded-[4px]  min-h-[26px]">
                <button
                  type="button"
                  className="w-full flex justify-between items-center px-[16px] py-[7px]"
                  onClick={() => {
                    setShowDrop(!showDrop);
                  }}>
                  {formikForm.values.status || t<string>("MODALS.SELECT")}
                  <img src={arrowDown} alt="arrowDown" />
                </button>
                {showDrop && (
                  <button
                    type="button"
                    onClick={() => {
                      setShowDrop(!showDrop);
                    }}
                    className="cursor-pointer absolute left-[0px] bottom-[-30px] w-[520px] bg-blue-600 z-20 flex flex-col items-start">
                    {/* {tags.map((tag: Data.Tag) => ( */}
                    <span className="px-[16px] py-[7px] text-[14px] text-home-title font-light leading-[20px]">
                      {formikForm.values.status}
                    </span>
                    {/* ))} */}
                  </button>
                )}
              </div>
              {/* <input
                type="text"
                {...formikForm.getFieldProps("status")}
                className="outline-none 
                text-[16px] font-poppins font-normal tracking-[-0.1px] leading-[26px]
                "
              /> */}
            </label>
          </div>
          <div className="w-full border-[1px] border-solid border-header-bottom" />
          <div className="flex flex-col gap-[16px]">
            <div className="flex justify-between flex-row w-full">
              <span className="text-[16px] font-semibold text-home-title leading-[21px] font-poppins not-italic">
                {t<string>("MODALS.PRICE")}
              </span>
              <label className="flex items-center gap-[16px]">
                <span className="text-[16px] text-home-title leading-[20px]">
                  {t<string>("MODALS.SHARE")}
                </span>
                <span className="switch flex w-[34px] h-[20px]">
                  <input
                    type="checkbox"
                    checked={formikForm.values.chargeable}
                    onChange={(event) => {
                      event.target.checked
                        ? formikForm.setFieldValue("chargeable", true)
                        : formikForm.setFieldValue("chargeable", false);
                    }}
                    hidden
                  />
                  <span
                    className="switch-check flex w-[34px] h-[20px] rounded-[20px] 
                      bg-header-bottom cursor-pointer relative transition duration-300 ease-out"></span>
                </span>
              </label>
            </div>
            {formikForm.values.chargeable && (
              <>
                <div className="w-full flex justify-between flex-row gap-[16px]">
                  <label className="w-full flex flex-col gap-[6px] flex-1">
                    <span className="text-[14px] text-home-title font-light leading-[20px]">
                      {t<string>("MODALS.RETAIL")}
                    </span>
                    <label className="relative w-full">
                      <input
                        type="number"
                        {...formikForm.getFieldProps("retail_price")}
                        className="w-full outline-none border-[1px] border-solid border-border-input rounded-[4px] px-[16px] py-[7px]
                  text-[16px] font-poppins font-normal tracking-[-0.1px] leading-[26px]"
                      />
                      <span className="absolute left-[8px] top-[9px] font-poppins font-light text-[16px]">
                        $
                      </span>
                    </label>
                  </label>
                  <label className="flex flex-col gap-[6px] flex-1">
                    <span className="text-[14px] text-home-title font-light leading-[20px]">
                      {t<string>("MODALS.DISCOUNT")}
                    </span>
                    <label className="w-full relative">
                      <input
                        type="number"
                        {...formikForm.getFieldProps("discount_price")}
                        className="w-full outline-none border-[1px] border-solid border-border-input rounded-[4px] px-[16px] py-[7px]
                  text-[16px] font-poppins font-normal tracking-[-0.1px] leading-[26px] pr-[84%]"
                      />
                      <span className="absolute left-[40px] top-[9px] font-poppins font-light text-[16px]">
                        %
                      </span>
                    </label>
                  </label>
                </div>
                <div>
                  <label className="flex flex-col gap-[6px] flex-1">
                    <span className="text-[14px] text-home-title font-light leading-[20px]">
                      {t<string>("MODALS.SALE_PRICE")}
                    </span>
                    <label className="relative">
                      <input
                        type="number"
                        {...formikForm.getFieldProps("sale_price")}
                        className="w-full outline-none border-[1px] border-solid border-border-input rounded-[4px] px-[16px] py-[7px]
                  text-[16px] font-poppins font-normal tracking-[-0.1px] leading-[26px]
                  "
                      />
                      <span className="absolute left-[8px] top-[9px] font-poppins font-light text-[16px]">
                        $
                      </span>
                    </label>
                  </label>
                </div>
              </>
            )}
          </div>
          <div className="w-full flex items-center justify-end gap-[16px]">
            <button
              onClick={closeModal}
              className="text-[16px] text-top-playbook-title font-poppins font-medium leading-[21px] 
                px-[41px] py-[12px] rounded-[6px] shadow-purchase_btn border-[1px] border-header-bottom">
              {t<string>("MODALS.CANCEL")}
            </button>
            <button
              type="submit"
              className="text-[16px] text-buttons-color bg-buttons-bg font-poppins font-medium leading-[21px]
                px-[70.5px] py-[12px] rounded-[6px] shadow-purchase_btn">
              {t<string>("MODALS.SALE_BTN")}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalSale;