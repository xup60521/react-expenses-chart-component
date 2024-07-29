/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                dm: ["DM Sans", "sans-serif"]
            },
            colors: {
                c_Soft_red: "hsl(10, 79%, 65%)",
                c_Cyan: "hsl(186, 34%, 60%)",
                c_Dark_brown: "hsl(25, 47%, 15%)",
                c_Medium_brown: "hsl(28, 10%, 53%)",
                c_Cream: "hsl(27, 66%, 92%)",
                c_Very_pale_orange: "hsl(33, 100%, 98%)",
            }
        },
    },
    plugins: [],
}

