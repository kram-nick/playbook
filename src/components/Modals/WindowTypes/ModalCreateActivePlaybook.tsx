import * as Yup from "yup";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import { useState } from "react";
import Select from "react-select";
import classNames from "classnames";
import DatePicker from "react-date-picker";

import { Data } from "../../../core/models";
import { APIRoutes } from "../../../core/http";
import { useAppDispatch, useAppSelector } from "../../../core/hooks/useRedux";
import useHttpGet from "../../../core/hooks/useHttpGet";
import useModal from "../../../core/hooks/useModal";
import PlaybookService from "../../../core/services/playbook.service";

import check from "../../../assets/photos/main/check.svg";
import delete_icon from "../../../assets/photos/main/close-cross.svg";
import icon_close from "../../../assets/photos/main/modal-close.svg";
import { setReloadChecker } from "../../../core/store/reducers/helpers/helpersDataSlice";
import CalendarIcon from "../../CalendarIcon/CalendarIcon";

const ModalCreateActivePlaybook = () => {
  const [tags, setTags] = useState([]);
  const [tagItem, setTagItem] = useState({
    text: "",
    active: false,
  });

  const [iconType, setIconType] = useState<boolean>(false);

  const { t } = useTranslation();
  const { closeModal } = useModal();

  const { selectedPlaybook } = useAppSelector((state) => state.app);
  const { reloadChecker, sharedId } = useAppSelector((state) => state.helpers);
  const dispatch = useAppDispatch();

  const [statusOptions, setStatusOptions] = useState<any[]>([
    {
      value: "open",
      label: `${t<string>("MODALS.OPEN")}`,
      bg: "rgba(43, 113, 247, 0.12)",
      color: "#2B71F7",
    },
    {
      value: "failed",
      label: `${t<string>("MODALS.FAILED")}`,
      bg: "rgba(255, 59, 48, 0.12)",
      color: "#FF3B30",
    },

    {
      value: "not_started",
      label: `${t<string>("MODALS.NOT_STARTED")}`,
      bg: "#EDEDED",
      color: "#242428",
    },
    {
      value: "success",
      label: `${t<string>("MODALS.SUCCESS")}`,
      bg: "rgba(0, 184, 184, 0.12)",
      color: "#00B8B8",
    },
  ]);

  const CustomStyles = {
    singleValue: (provided: any, state: any) => {
      const optionIndex = statusOptions.findIndex(
        (option) => option.value === state.data.value
      );
      const backgroundColor = statusOptions[optionIndex].bg;
      const color = statusOptions[optionIndex].color;

      return {
        ...provided,
        backgroundColor,
        color,
        fontSize: "12px",
        fontWeight: "600",
        width: "max-content",
        padding: "4px 12px",
        borderRadius: "100px",
      };
    },
    option: (provided: any, state: any) => {
      const optionIndex = statusOptions.findIndex(
        (option) => option.value === state.data.value
      );
      const backgroundColor = statusOptions[optionIndex].bg;
      const color = statusOptions[optionIndex].color;

      return {
        ...provided,
        backgroundColor,
        color,
        fontSize: "12px",
        fontWeight: "600",
        padding: "4px 12px",
        margin: "8px 16px",
        borderRadius: "100px",
        cursor: "pointer",
        width: "max-content",
      };
    },
  };

  useHttpGet<any>(`${APIRoutes.PLAYS_TAGS}`, {
    dependencies: [tagItem],
    condition: tagItem.active,
    resolve: (response) => {
      setTags(
        response?.data?.filter((tag: Data.Tag) =>
          tag.name
            .toLocaleLowerCase()
            .includes(tagItem.text.toLocaleLowerCase())
        )
      );
    },
  });

  const valueFormValidationSchema = Yup.object().shape({
    name: Yup.string().required(t<string>("ERRORS.NOT_EMPTY")),
    description: Yup.string().required(t<string>("ERRORS.NOT_EMPTY")).max(100),
    tags: Yup.array().min(1, t<string>("ERRORS.PLAYS_TAG")),
  });

  const { fetchedData: playbook } = useHttpGet<any>(
    `${APIRoutes.PLAYBOOKS}/${selectedPlaybook?.id}`,
    {
      dependencies: [selectedPlaybook],
    }
  );

  const formikForm = useFormik<{
    name: string;
    description: string;
    due_date: string;
    status: string;
    tags: Data.Tag[];
  }>({
    initialValues: {
      name: "",
      description: "",
      due_date: "2023-06-12 20:33:02",
      status: "not_started",
      tags: [],
    },
    validationSchema: valueFormValidationSchema,
    onSubmit: async (values: any) => {
      HandleNewPlay(values);
    },
  });

  const HandleNewPlay = async (values: any) => {
    const tags_ids = values.tags.map((tag: any) => tag.id);

    try {
      const response = await PlaybookService.CreatePlay({
        ...values,
        tags: tags_ids,
        playbook_id: selectedPlaybook?.id,
      });
      dispatch(setReloadChecker(!reloadChecker));
      closeModal();
      toast.success(t<string>("MAIN.PLAY_CREATED"));
    } catch (errors: any) {
      for (let error in errors?.response?.data?.errors) {
        toast.error(`${error} ${errors?.response?.data?.errors[error]}`);
      }
    }
  };

  const RemoveTag = (selectedTag: any) => {
    const tagsArr = formikForm.values.tags.filter(
      (tag: Data.Tag) => tag.id !== selectedTag.id
    );

    if (tagsArr) {
      formikForm.setFieldValue("tags", [...tagsArr]);
    }
  };

  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        setTagItem({
          text: "",
          active: false,
        });
      }}
      className="modal-box relative w-[100%] max-w-[528px] p-[24px] shadow-free-trial rounded-[5px]
    border-[1px] border-solid border-border-btn bg-white font-poppins flex flex-col items-center max-md:m-[12px]"
    >
      <div
        className="w-full flex justify-between items-center mb-[20px]
              max-md:mb-[15px]"
      >
        <span className="leading-[28px] tracking-[-0.1px] text-[20px] font-medium font-poppins text-footer-main">
          {t<string>("MODALS.ADD_ACTIVE_PLAYBOOK")}
        </span>
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            closeModal();
          }}
        >
          <img src={icon_close} alt="close" />
        </button>
      </div>
      <form
        onSubmit={formikForm.handleSubmit}
        className="flex flex-col gap-[16px] w-[100%]"
      >
        <label className="flex flex-col">
          <span className="text-[14px] text-home-title font-poppins leading-[20px]">
            {t<string>("MODALS.NAME")}
          </span>
          <input
            className="h-[38px] outline-none border-[1px] border-solid border-border-input rounded-[4px] mt-[6px] pl-[16px] placeholder:text-border-input placeholder:text-[16px] placeholder:font-poppins"
            placeholder={t<string>("MODALS.NAME")}
            {...formikForm.getFieldProps("name")}
          />
          {formikForm.errors.name && formikForm.touched.name && (
            <p className="block text-[14px] leading-[20px] mt-[6px] text-error-color">
              {formikForm.errors.name}
            </p>
          )}
        </label>
        <label className="flex flex-col">
          <span className="text-[14px] text-home-title font-poppins leading-[20px]">
            {t<string>("MODALS.DUE_DATE")}
          </span>
          <div className="flex flex-row items-center gap-[11px] h-[38px] outline-none border-[1px] border-solid border-border-input rounded-[4px] mt-[6px] pl-[16px]">
            <DatePicker
              format="dd.MM.y"
              locale="en-UK"
              calendarIcon={<CalendarIcon IconType={iconType} />}
              onCalendarOpen={() => setIconType(true)}
              onCalendarClose={() => setIconType(false)}
              minDate={new Date(new Date().getTime() + 24 * 60 * 60 * 1000)}
              maxDate={new Date(`${new Date().getFullYear() + 100}-01-01`)}
              onChange={(e: any) => {
                console.log(e);
                if (e) {
                  formikForm.setFieldValue(
                    "due_date",
                    `${e.getFullYear()}-${
                      Number(e.getMonth() + 1) < 10
                        ? "0" + `${e.getMonth() + 1}`
                        : e.getMonth() + 1
                    }-${
                      Number(e.getDate()) < 10
                        ? "0" + `${e.getDate()}`
                        : e.getDate()
                    } 00:00:00`
                  );
                }
              }}
              value={
                formikForm.values.due_date
                  ? new Date(
                      new Date(
                        formikForm.values.due_date.split(" ")[0]
                      ).getTime()
                    )
                  : undefined
              }
            />
          </div>
        </label>
        <label className="flex flex-col">
          <span className="text-[14px] text-home-title font-poppins leading-[20px]">
            {t<string>("MODALS.DESCRIPTION")}
          </span>
          <textarea
            className="outline-none resize-none h-[75px] border-[1px] border-solid border-border-input rounded-[4px] mt-[6px] pl-[16px] 
            pt-[9px] placeholder:text-border-input placeholder:text-[16px] placeholder:font-poppins"
            placeholder={`${t<string>("MODALS.DESCRIPTION")}`}
            {...formikForm.getFieldProps("description")}
          />
          <span className="mt-[8px] text-[14px] text-inform-text font-poppins leading-[20px]">
            {t<string>("MODALS.WORDS_MAX")}
          </span>
          {formikForm.errors.description && formikForm.touched.description && (
            <p className="block text-[14px] leading-[20px] mt-[6px] text-error-color">
              {formikForm.errors.description}
            </p>
          )}
        </label>
        <label className="relative flex flex-col gap-[6px]">
          <p>
            <span className="text-[14px] text-home-title font-poppins leading-[20px]">
              {t<string>("MODALS.ADD_TAGS")}
            </span>
          </p>

          <input
            className={classNames({
              "max-w-full pl-[12px] overflow-x-auto outline-none border-[1px] border-solid border-border-input rounded-[4px] pr-[16px] py-[7px] text-[16px] font-poppins font-normal tracking-[-0.1px] leading-[26px] mt-[6px]":
                true,
              //   "pl-[12px]": formikForm.values.tags.length === 0,
              //   "pl-[185px]": formikForm.values.tags.length === 1,
              //   "pl-[320px]": formikForm.values.tags.length === 2,
              //   "pl-[75%]": formikForm.values.tags.length >= 3,
            })}
            type="text"
            value={tagItem.text}
            onChange={(event) => {
              setTagItem({ ...tagItem, text: event.target.value });
              // formikForm.setFieldValue('tags')
            }}
            onClick={(event) => {
              event.stopPropagation();
              setTagItem({
                ...tagItem,
                active: true,
              });
            }}
          />
          <div className="scroll-visible max-w-[95%] overflow-x-scroll absolute left-[18px] right-[12px] flex-nowrap top-[45px] flex flex-row items-center gap-[8px]">
            {formikForm.values.tags.map((tag: Data.Tag, index: number) => {
              return (
                <label
                  className="flex items-center flex-row gap-[6px] min-w-max px-[12px] py-[4px] border-solid rounded-[100px] bg-selected-btn"
                  key={tag.id}
                >
                  <span className="font-poppins normal font-light text-[12px] leading-[16px]">
                    {tag.name}
                  </span>
                  <img
                    className="cursor-pointer"
                    onClick={() => RemoveTag(tag)}
                    src={delete_icon}
                    alt="delete_icon"
                  />
                </label>
              );
            })}
          </div>
          {tagItem.active && (
            <ul className="w-full shadow-tags rounded-[4px] border-[1px] border-solid border-header-bottom">
              {tags.map((tag: Data.Tag) => (
                <li
                  onClick={() => {
                    formikForm.setFieldValue("tags", [tag]);
                  }}
                  className="flex justify-between px-[16px] py-[10px] hover:bg-chapter-color"
                  key={tag.id}
                >
                  <span className="font-light text-[14px] normal leading-[20px] font-poppins tracking-[-0.1px] text-home-title">
                    {tag.name}{" "}
                  </span>
                  {formikForm.values.tags.find(
                    (newTag: Data.Tag) => tag.id === newTag.id
                  ) && <img src={check} alt="selected" />}
                </li>
              ))}
            </ul>
          )}
          {formikForm.errors.tags && formikForm.touched.tags && (
            <p className="block text-[14px] leading-[20px] mt-[6px] text-error-color pl-[4px]">
              {t<string>("ERRORS.PLAYS_TAG")}
            </p>
          )}
        </label>
        <div>
          <span className="text-[14px] text-home-title font-poppins leading-[20px]">
            {t<string>("MODALS.STATUS")}
          </span>
          <Select
            className={classNames({
              "select-custom h-[44px] cursor-pointer mt-[6px] font-poppins text-[12px] outline-none":
                true,
              "bg-active-open": formikForm.values.status === "open",
              "bg-active-failed": formikForm.values.status === "failed",
              "bg-active-not-started":
                formikForm.values.status === "not_started",
              "bg-active-success": formikForm.values.status === "success",
            })}
            isSearchable={false}
            styles={CustomStyles}
            options={statusOptions}
            onChange={(value: any) => {
              formikForm.setFieldValue("status", value.value);
            }}
            value={statusOptions.find(
              (el: any) => el.value === formikForm.values.status
            )}
          />
        </div>

        {playbook?.data && (
          <div>
            <span className="text-[14px] text-home-title font-poppins leading-[20px]">
              {t<string>("MODALS.PLAYBOOK")}
            </span>

            <div
              className={classNames({
                "flex flex-row gap-[12px] items-center p-[12px] rounded-[8px] border-[1px] border-solid border-card-border h-[82px]":
                  true,
              })}
            >
              <img
                className="w-[40px] h-[40px] object-cover rounded-[4px]"
                src={playbook?.data?.header_url}
                alt={playbook?.data?.name}
              />
              <div className="flex flex-col gap-[4px] items-start">
                <span className="font-poppins font-medium text-[14px] leading-[18px] tracking-[-0.1px] normal text-footer-main">
                  {playbook?.data?.name}
                </span>
                <span className="leading-[18px] text-[12px] font-poppins font-normal text-input-placeholder normal">
                  {playbook?.data?.profile_first_name}{" "}
                  {playbook?.data?.profile_last_name} &#x2022; Page 4
                </span>
              </div>
            </div>
          </div>
        )}
        <div className="flex flex-row gap-[16px]">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              closeModal();
            }}
            className="  py-[12px] w-[100%] rounded-[6px] shadow-purchase_btn border-[1px] border-header-bottom
                hover:bg-secondary-hover
                active:bg-secondary-active
                "
          >
            {t<string>("MODALS.CANCEL")}
          </button>
          <button
            type="submit"
            className="text-[16px] font-poppins font-medium leading-[21px] 
                py-[12px] w-[100%] rounded-[6px] shadow-purchase_btn border-[1px] text-buttons-color bg-buttons-bg
                hover:bg-buttons-bg-hover
                active:bg-buttons-bg-active
                "
          >
            {t<string>("MODALS.SAVE")}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ModalCreateActivePlaybook;
