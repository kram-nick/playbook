/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "footer-main": "#242428",
        "buttons-bg": "#2B71F7",
        "buttons-bg-hover": "#5390F8",
        "buttons-bg-active": "#3761DE",
        "buttons-color": "#FFF",
        "header-links": "#4F4C68",
        "home-title": "#242428",
        "people-bg": "#F8F8F8",
        "simple-text": "#606266",
        "tools-bg": "#F8F8F8",
        "tools-block": "#FFF",
        "banner-bg": "#4CB7FB",
        "banner-txt": "#FFF",
        "banner-btn": "#1B163A",
        "copyrights-main": "#8A90A2",
        "border-copyrights": "#38383F",
        "list-title": "#fff",
        "button-submit-footer": "#2B71F7",
        "footer-placeholder": "#313138",
        "top-playbook-title": "#242428",
        "top-subtitle-playbook": "#606266",
        "top-playbook": "#F8F8F8",
        "top-engineering": "#2B71F7",
        "top-entrepreneur": "#FF2B80",
        "top-ceo": "#FBCB33",
        "top-sub-accent": "#FFFEFE",
        "top-sub-secondary": "#606266",
        "review-main": "#F8F8F8",
        "review-name": "#1F2228",
        "term-of-use-head": "#3666E4",
        "input-squeeze": "#F0F1F2",
        "inp-squeez-placeholder": "#9A9EA6",
        "header-bottom": "#E5E5E5",
        "squeeze-footer": "#6B6B6B",
        "bg-squeeze-engineering": "#00B8B8",
        "create-bg-main": "#F9F9F9",
        "nav-txt-private": "#737373",
        "active-playbook": "rgba(43, 113, 247, 0.12);",
        "border-input": "#D4D4D4",
        "border-btn": "#DAE0E6",
        "input-placeholder": "#A3A3A3",
        "checkbox-bg": "#437EF7",
        "search-input": "#F5F5F5",
        "card-border": "#EDEDED",
        overlay: "rgba(138, 138, 138, 0.6)",
        "side-overlay": "rgba(92, 92, 92, 0.5);",
        "btn-free": "rgba(43, 113, 247, 0.04)",
        "blue-light": "#F3F7FF",
        danger: "#FF3B30",
        "gray-btn": "#EDEDED",
        "chapter-color": "#F6F6F6",
        "option-btn": "#E3E3E3",
        "chart-color": "#47B5FF",
        "error-color": "#de0f0f",
        "payment-title": "#272D37",
        "payment-checkbox": "#F5FAFF",
        "payment-second-title": "#242428",
        "border-apply": "rgba(43, 113, 247, 0.04);",
        "accent-pay-code": "#47B5FF",
        "order-main": "#272D37",
        "selected-btn": "rgba(43, 113, 247, 0.16)",
        "secondary-hover": "#F7F7F8",
        "secondary-active": "#EFEFF1",
        "inform-text": "#737373",
        "active-open": "#2B71F71F",
        "active-not-started": "#EDEDED",
        "active-success": "#00B8B81F",
        "active-failed": "FF3B301F",
      },
      backgroundPosition: {
        "top-bottom": "right 60px ",
      },
      fontFamily: {
        poppins: ["Poppins, sans-serif"],
        inter: ["Inter , sans-serif"],
        manrope: ["Manrope, sans-serif"],
      },
      boxShadow: {
        "review-card": "0px 13px 60px rgba(53, 52, 116, 0.08);",
        "3xl": "0px 13px 60px rgba(53, 52, 116, 0.08)",
        "inp-squeeze": "0px 1px 2px rgba(16, 24, 40, 0.04);",
        "free-trial": " 0px 1px 2px rgba(16, 24, 40, 0.04);",
        dropmenu:
          "0px 1px 2px -1px rgba(16, 24, 40, 0.1), 0px 1px 3px rgba(16, 24, 40, 0.1);",
        chart:
          "-9px 4px 222px rgba(135, 135, 135, 0.25), 0px 0px 0px 9px rgba(71, 181, 255, 0.1);",
        "chart-mobile":
          "-3.87497px 1.72221px 95.5825px rgba(135, 135, 135, 0.25), 0px 0px 0px 3.87497px rgba(71, 181, 255, 0.1);",
        "chart-grow": "-10px 6px 34px rgba(50, 50, 61, 0.04)",
        "playbook-md": "-7.94729px 3.17892px 38.147px rgba(54, 54, 62, 0.09)",
        review: "-4px -4px 27px rgba(38, 37, 47, 0.05)",
        pricing: "0 0 0 8px rgba(71, 181, 255, 0.12)",
        "payment-btn": "0px 1px 2px rgba(16, 24, 40, 0.04)",
        get_free: "0px 0.616667px 1.23333px rgba(16, 24, 40, 0.04);",
        tags: "0px 1px 2px rgba(16, 24, 40, 0.04);",
        cookies:
          "0px -5px 47px rgba(0, 0, 0, 0.04), 7px 13px 60px rgba(51, 51, 65, 0.08);",
        card: "0px 2px 4px -2px rgba(16, 24, 40, 0.05), 0px 4px 6px -1px rgba(16, 24, 40, 0.03);",
      },
      backgroundImage: {
        sign: "url('./assets/photos/sign/bg-sign.svg')",
        "banner-back": "url('./assets/photos/home/banner-bg.svg')",
        "term-back": "url('./assets/photos/terms/top-bg.svg')",
        "tablet-transparent":
          "url('./assets/photos/squeeze/transparent-tablet.svg')",
        "mob-transparent":
          "url('./assets/photos/squeeze/transparent-mobile.svg')",
        "sales-bckg": "url('./assets/photos/squeeze/sales-bckg.svg')",
        "product-bckg": "url('./assets/photos/squeeze/product-bckg.svg')",
        "engineering-bckg":
          "url('./assets/photos/squeeze/engineering-bckg.svg')",
        "entrepreneur-bckg":
          "url('./assets/photos/squeeze/entrepreneur-bckg.svg')",
        "without-photo": "url('./assets/photos/main/user.svg')",
        "what-is-1": "url('./assets/photos/home/what-is-1.svg')",
        "what-is-2": "url('./assets/photos/home/what-is-2.svg')",
        "what-is-3": "url('./assets/photos/home/what-is-3.svg')",
      },
      screens: {
        mobile: "480px",
      },
    },
  },
  plugins: [],
};
