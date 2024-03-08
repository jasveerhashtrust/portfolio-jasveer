import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        borderWidth: {
            DEFAULT: '1px',
            '0': '0',
            0.1: '0.1px',
            0.2: '0.2px',
            0.3: '0.3px',
            '0.5': '0.5px',
            '3': '3px',
            '4': '4px',
            '6': '6px',
            '8': '8px',
        },
        extend: {
            backgroundColor: {
                InnerColor: 'rgb(41, 41, 41)',
                boxLightShade: 'rgba(0, 0, 0, .1)',
                inputBoxColor: 'rgb(22, 22, 22)',
                redDot: 'rgb(0, 198, 84)',
            },
            boxShadow: {
                shadow: 'rgba(0, 198, 84, 0.5) 0px 0px 5px 1px',
            },
            colors: {
                Black: '#161616',
                White: '#FFFFFF',
                grey: '#545454',
                InnerColor: 'rgb(41, 41, 41)',
                textLight: 'rgba(255, 255, 255, .2)',
                BoxesColor: 'rgb(30, 30, 30)',
            },
            borderColor: {
                borderGreyLight: 'rgb(84, 84, 84)',
                borderLight: 'rgba(255, 255, 255, 0.05)',
            },
        },
    },
    plugins: [],
}
export default config
