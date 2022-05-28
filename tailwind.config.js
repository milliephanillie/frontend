module.exports = {
    jit: true,
    purge: ["./src/**/*.html", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        fontFamily: {
            sans: ['Graphik', 'sans-serif'],
            serif: ['Merriweather', 'serif'],
        },
        fontSize: {
            'xs': '12px',
            'sm':'13px',
            'tiny': '14px',
            'base': '18px',
            'lg': '20px',
            'xl': '24px',
            '2xl': '28px',
            '3xl': '36px',
            '4xl': '42px',
            '5xl': '48px',
            '6xl': '56px',
            '7xl': '62px',
        },
        screens: {
            sm: '550px',
            md: '768px',
            lg: '960px',
            container: '1200px',
            xl: '1440px',
        },
        extend: {
            margin: {
                '5px': '5px',
            },
            colors: {
                'brand': '#1fb6ff',
                'midnight': '#082036',
                transparent: "transparent",
                current: "currentColor",
                "light-grey": "#E5EEE5",
                purple: "#7652C6",
            },
            spacing: {
                '128': '32rem',
                '144': '36rem',
            },
        },
    },
    plugins: [],
    corePlugins: {
        preflight: false,
    }
}
