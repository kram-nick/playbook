/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "footer-main": "#242428",
        "buttons-bg": "#2B71F7",
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
        "input-squeeze": '#F0F1F2',
        'inp-squeez-placeholder': '#9A9EA6',
        "header-bottom": "#E5E5E5",
        'squeeze-footer': "#6B6B6B",
      },
      fontFamily: {
        poppins: ["Poppins, sans-serif"],
        inter: ["Inter , sans-serif"],
      },
      boxShadow: {
        "review-card": "0px 13px 60px rgba(53, 52, 116, 0.08);",
        "3xl": "0px 13px 60px rgba(53, 52, 116, 0.08)",
        "inp-squeeze": "0px 1px 2px rgba(16, 24, 40, 0.04);",
        "free-trial": " 0px 1px 2px rgba(16, 24, 40, 0.04);"
      },
      backgroundImage: {
        "banner-back": "url('./assets/photos/home/banner-bg.svg')",
        "term-back": "url('./assets/photos/terms/top-bg.svg')",
        "tablet-transparent": "url('./assets/photos/squeeze/transparent-tablet.svg')",
        "mob-transparent": "url('./assets/photos/squeeze/transparent-mobile.svg')",
      },
      screens: {
        mobile: "480px"
      }
    },
  },
  plugins: [],
};
