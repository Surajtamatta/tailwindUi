import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-divider":"linear-gradient(180deg, rgba(40, 40, 40, 1) 42%, rgb(53 49 49 / 64%) 100%, rgba(255, 255, 255, 0.05) 0%);",
        "arrow-gradient": "radial-gradient(circle, rgba(48,52,57,1) 0%, rgba(22,23,24,1) 100%)",
        // "background: rgb(25,27,31);
        "gradient-background": "linear-gradient(0deg, rgba(25,27,31,1) 0%, rgba(55,62,68,1) 100%);",
     
      
      },
      boxShadow: {
        'boxshadow': '13.49px 16.87px 67.47px 8.43px #0A0A0A,-8.43px -16.87px 50.6px -16.87px #485B71',
        'buttonshadow2': 'inset 0 3.6px 3.26px 0px #ffffff4d, inset 0px 0px 48.91px 0px #ffffff80, 9px 10px 7.1px 0px #00000066, -0.5px -0.5px 6.9px 0px #ffffff40, inset 0 4.96px 12.4px 2.48px #0000003d;',
        'contentshadow': '5.67px 5.67px 3.78px 0px rgba(0, 0, 0, 0.4)',
        "arrowshadow": '4px 5px 30px 5px rgba(16, 18, 19, 1),-5px -3px 30px -10px rgba(150, 190, 231, 1)',
        'backgroundshadow': '10px 10px 40px 10px #00000080',
        
    },
    keyframes: {
      rotateSlider: {
        from: { transform: 'perspective(1000px) rotateX(-16deg) rotateY(0deg)' },
        to: { transform: 'perspective(1000px) rotateX(-16deg) rotateY(360deg)' },
      },
    },
    animation: {
      rotateSlider: 'rotateSlider 20s linear infinite',
    },

  },
  plugins: [],
 },
}
export default config;
