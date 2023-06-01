import React, { ReactNode } from "react";
import icon_banner from "../../assets/photos/main/icon-banner.svg";
import icon_add from "../../assets/photos/main/icon-smiley.svg";
import icon_close from "../../assets/photos/main/modal-close.svg";
import { useTranslation } from "react-i18next";
import Select from "react-select";
import { useState, useEffect } from "react";
import ModalIcons from "./ModalIcons";
import { useModal } from "../../core/hooks/useModal";
import { colourStyles } from "../../core/constants";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import PlaybookService from "../../core/services/playbook.service";
import { useNavigate } from "react-router-dom";
import { PrivateUIRoutes } from "../../core/router";

interface ModalType {
  children?: ReactNode;
  isOpen: boolean;
  class?: string;
  item: any;
  onSave: (reload: boolean) => void;
  toggle: () => void;
}

export interface ColourOption {
  readonly value: string;
  readonly label: string;
  readonly color: string;
  readonly isFixed?: boolean;
  readonly isDisabled?: boolean;
}

export const colourOptions: readonly ColourOption[] = [
  { value: "ocean", label: "Ocean", color: "#00B8D9" },
  { value: "blue", label: "Blue", color: "#0052CC" },
  { value: "purple", label: "Purple", color: "#5243AA" },
  { value: "red", label: "Red", color: "#FF5630" },
  { value: "orange", label: "Orange", color: "#FF8B00" },
  { value: "yellow", label: "Yellow", color: "#FFC400" },
  { value: "green", label: "Green", color: "#36B37E" },
  { value: "forest", label: "Forest", color: "#00875A" },
  { value: "slate", label: "Slate", color: "#253858" },
  { value: "silver", label: "Silver", color: "#666666" },
  { value: "white", label: "White", color: "#FFFFFF" },
  { value: "black", label: "Black", color: "#000000" },
];

export default function ModalPlaybookDetail(props: ModalType) {
  const [activeColor, setActiveColor] = useState<any>(colourOptions[1]);

  const { t } = useTranslation();

  const navigate = useNavigate();

  let { isOpenModal, toggle } = useModal();

  const formikForm = useFormik<{
    name: string;
    content: string;
    color_code: string;
    header_url: string;
    icon_url: string;
    favorited: boolean | any;
    privacy: boolean | any;
    category_id: number | string;
    status: string;
    order: string;
    url: string;
  }>({
    initialValues: {
      name: "",
      content: "",
      color_code: "#0052CC",
      header_url:
        "https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1618602532707-3OAII3QVHYKCW3KJ1HJU/cars_boast.jpg",
      icon_url: "https://cdn-icons-png.flaticon.com/512/4436/4436481.png",
      favorited: false,
      privacy: false,
      category_id: 0,
      status: "",
      order: "",
      url: "",
    },
    // validationSchema: valueFormValidationSchema,
    onSubmit: async (values: any) => {
      if (!props.item) {
        createPlaybook(values);
      } else {
        updatePlaybook(values);
      }
      // handleSubmitForm(values);
    },
  });

  const handlePrivate = () => {
    if (props?.item) {
      try {
        formikForm.setFieldValue("privacy", !formikForm.values.privacy);
        const privacy = !formikForm.values.privacy ? "private" : "public";
        PlaybookService.ChangePrivacy({ privacy: privacy }, props?.item?.id);
        props.onSave(true);
        toast.success(t<string>("MAIN.UPDATE_PRIVACY_SUCCESS"));
      } catch (errors: any) {
        formikForm.setFieldValue("privacy", !formikForm.values.privacy);
        for (let error in errors?.response?.data?.errors) {
          toast.error(`${error} ${errors?.response?.data?.errors[error]}`);
        }
      }
    }
  };

  const handleIconsModal = () => {
    isOpenModal = true;
    toggle();
  };

  useEffect(() => {
    if (props?.item?.id) {
      formikForm.setValues(props.item);
      formikForm.setFieldValue(
        "privacy",
        props.item.privacy === ("private" || true) ? true : false
      );

      if (props?.item?.color_code) {
        const color = colourOptions.find(
          (el) => el.color === props.item.color_code
        );
        setActiveColor(color);
      }
    } else {
      setActiveColor(colourOptions[1]);
    }
  }, [props?.item]);

  function closePopup() {
    props.toggle();
    formikForm.resetForm();
    // props.onSave(true);
    // isOpenModal = false;
  }

  const updatePlaybook = async (values: any) => {
    // setLoading(true);
    try {
      values.privacy = values.privacy ? "private" : "public";
      await PlaybookService.UpdatePlaybook(values);
      props.onSave(true);
      toast.success(t<string>("MAIN.UPDATE_SUCCESS"));
      closePopup();
    } catch (errors: any) {
      for (let error in errors?.response?.data?.errors) {
        toast.error(`${error} ${errors?.response?.data?.errors[error]}`);
      }
    }
  };

  const createPlaybook = async (values: any) => {
    // setLoading(true);
    try {
      values.privacy = values.privacy ? "private" : "public";
      // const data = {
      //   ...values,
      //   privacy: values.privacy ? 'private' : 'public'
      // }
      const response = await PlaybookService.CreatePlaybook(values);
      navigate(`/${PrivateUIRoutes.Chapters}/${response.data.data.id}`);
      props.onSave(true);
      toast.success(t<string>("MAIN.CREATE_SUCCESS"));
      closePopup();
    } catch (errors: any) {
      for (let error in errors?.response?.data?.errors) {
        toast.error(`${error} ${errors?.response?.data?.errors[error]}`);
      }
    }
  };

  return (
    <>
      {props.isOpen && (
        <div>
          <div
            className="modal-overlay bg-overlay max-sm:overflow-y-auto max-sm:items-start"
            onClick={() => closePopup()}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="modal-box relative w-[100%] max-w-[530px] px-[24px] pt-[24px] shadow-free-trial 
                border-[1px] border-solid border-border-btn bg-white font-poppins
                max-sm:min-h-[100vh] max-sm:px-[16px] max-sm:py-[16px] max-sm:pb-[80px] max-sm:max-w-[100%]"
            >
              <div className="flex items-center justify-between mb-[24px]">
                <p
                  className="text-[20px] font-medium text-home-title leading-[26px] tracking-[-0.1px]
                  max-sm:text-[16px] max-sm:leading-[22px] max-sm:pl-[28px]"
                >
                  {props.item ? "Edit Details" : "Add a Playbook"}
                </p>
                <button className="absolute top-[16px] right-[16px] max-sm:right-[auto] max-sm:top-[6px] max-sm:left-[6px]">
                  <img src={icon_close} alt="" onClick={() => closePopup()} />
                </button>
              </div>

              <form
                onSubmit={formikForm.handleSubmit}
                className="form grid gap-y-[16px] mb-[24px]"
              >
                <div className="form-group flex flex-wrap">
                  <label
                    htmlFor=""
                    className="block text-[14px] text-home-title leading-[20px] mb-[6px]"
                  >
                    {t<string>("FIELDS.NAME")}
                  </label>
                  <input
                    placeholder={t<string>("FIELDS.NAME")}
                    onChange={formikForm.handleChange}
                    value={formikForm.values.name}
                    id="name"
                    name="name"
                    type="text"
                    className="py-[10px] px-[16px] rounded-[5px]  placeholder:text-border-input
                    border-solid border-[1px] shadow-free-trial min-w-[100%]
                    leading-[18px] font-normal font-poppins text-[16px] tracking-[-0.01px] outline-none box-border"
                    // onChange={(e) => setName(e.target.value)}
                    // value={props.item ? props.item.title : ""}
                  />
                </div>

                <div className="form-group flex flex-wrap">
                  <label
                    htmlFor=""
                    className="block text-[14px] text-home-title leading-[20px] mb-[6px]"
                  >
                    {t<string>("FIELDS.DESCRIPTION")}
                  </label>
                  <textarea
                    onChange={formikForm.handleChange}
                    value={formikForm.values.content}
                    id="content"
                    name="content"
                    placeholder={t<string>("FIELDS.DESCRIPTION")}
                    className="py-[10px] px-[16px] rounded-[5px]  placeholder:text-border-input
                  border-solid border-[1px] shadow-free-trial min-w-[100%] h-[105px] resize-none
                  leading-[26px] font-normal font-poppins text-[16px] tracking-[-0.01px] outline-none box-border"
                  ></textarea>
                </div>
                <div className="form-group">
                  <label
                    htmlFor=""
                    className="block text-[14px] text-home-title leading-[20px] mb-[6px]"
                  >
                    {t<string>("FIELDS.COLOR")}
                  </label>

                  <Select
                    className="select-custom h-[40px]"
                    defaultValue={activeColor}
                    options={colourOptions}
                    styles={colourStyles}
                    onChange={(option) =>
                      formikForm.setFieldValue("color_code", option.color)
                    }
                  />
                </div>
                {/* <div className="flex items-center rounded-[4px] bg-gray-btn px-[8px] py-[6px] gap-[6px] cursor-pointer">
                  <img src={icon_banner} alt="" />
                  <span className="text-[14px] tracking-[-0.01px] leading-[20px]">
                    {t<string>("FIELDS.ADD_COVER")}
                  </span>
                </div>
                <div
                  onClick={handleIconsModal}
                  className="flex items-center rounded-[4px] bg-gray-btn px-[8px] py-[6px] gap-[6px] cursor-pointer">
                  <img src={icon_add} alt="" />
                  <span className="text-[14px] tracking-[-0.01px] leading-[20px]">
                    {t<string>("FIELDS.ADD_ICON")}
                  </span>
                </div> */}

                <label className="flex items-center  w-[100%] justify-between">
                  <span className="text-[16px] text-home-title leading-[20px]">
                    {t<string>("FIELDS.ADD_TO_F")}
                  </span>
                  <span className="switch flex w-[34px] h-[20px]">
                    <input
                      type="checkbox"
                      hidden
                      onChange={formikForm.handleChange}
                      checked={formikForm.values.favorited}
                      id="favorited"
                      name="favorited"
                    ></input>
                    <span
                      className="switch-check flex w-[34px] h-[20px] rounded-[20px] 
                      bg-header-bottom cursor-pointer relative transition duration-300 ease-out"
                    ></span>
                  </span>
                </label>
                <label className="flex items-center  w-[100%] justify-between">
                  <span className="text-[16px] text-home-title leading-[20px]">
                    {t<string>("FIELDS.PRIVATE")}
                  </span>
                  <span className="switch flex w-[34px] h-[20px]">
                    <input
                      type="checkbox"
                      hidden
                      onChange={handlePrivate}
                      checked={formikForm.values.privacy}
                      id="privacy"
                      name="privacy"
                    ></input>

                    <span
                      className="switch-check flex w-[34px] h-[20px] rounded-[20px] 
                      bg-header-bottom cursor-pointer relative transition duration-300 ease-out"
                    ></span>
                  </span>
                </label>

                <div
                  className="grid grid-cols-2 font-poppins gap-[16px] max-sm:absolute max-sm:bottom-[24px] 
                  max-sm:left-[16px] max-sm:right-[16px]"
                >
                  <button
                    className="h-[46px] flex items-center justify-center 
                      py-[8px] px-[15px] bg-white rounded-[5px] text-home-title
                      text-[16px] font-medium leading-[20px] shadow-free-trial border-solid border-[1px]"
                    title="Cancel"
                    onClick={() => closePopup()}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="h-[46px] flex items-center justify-center  
                      py-[8px] px-[15px] bg-buttons-bg rounded-[5px] text-buttons-color 
                      text-[16px] font-medium leading-[20px] shadow-free-trial "
                  >
                    {props.item ? "Save" : "Continue"}
                  </button>
                </div>
              </form>

              {props.children}
            </div>
          </div>
          <ModalIcons isOpen={isOpenModal} toggle={toggle}></ModalIcons>
        </div>
      )}
    </>
  );
}
