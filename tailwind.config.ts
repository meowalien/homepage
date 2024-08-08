import {nextui} from '@nextui-org/theme';
import type {Config} from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
    theme: {
        extend: {
            // backgroundImage: {
            //     "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
            //     "gradient-conic":
            //         "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            // },
            screens: {
                print: {raw: 'print'},
                page: '980px',
                desktop: '1592px',
                // 'desktop': '1280px',
            },
            colors: {
                "accent-fuzzy-color": 'rgb(242 242 242)',
                "main-page-background": 'rgb(251 251 251)',
                "main-page-text": 'rgb(51 51 51)',
                "title-bar": 'rgb(38 104 160 )',
                "main-text": 'rgb(51 51 51)',
                "middle-gray": 'rgb(204 204 204)',
                "darkest-gray": 'rgb(108 108 108)',
                "middle-grey-2": 'rgb(170 178 190)',
            },
            fontSize: {
                'section-title': [
                    '1.875rem', {
                        lineHeight: '2.8125rem',
                    }
                ],
                'highlight': [
                    '1.25rem', {
                        lineHeight: '1.875rem',
                    }
                ],
                'emphasize': [
                    '1.125rem', {
                        lineHeight: '1.75rem',
                    }
                ]
            },
            // borderColor: {
            //     "main-page-border": 'rgb(204 204 204)',
            // },
        },

    },
    darkMode: "class",
  plugins: [nextui()],
};
export default config;
