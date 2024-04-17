/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        borderRadius: {
            sm: "10px",
            md: "15px",
            lg: "20px"
        },

        colors: {
            white: "#FFFFFE",
            secondary: "#E3F6F5",

            tertiary: {
                50: "#F8FDFD",
                100: "#EAF8F8",
                200: "#DFF4F4",
                300: "#D1F0F0",
                400: "#C8EDED",
                500: "#BAE8E8",
                600: "#A9D3D3",
                700: "#84A5A5",
                800: "#668080",
                900: "#4E6161"
            },

            stroke: {
                50: "#E9E9EC",
                100: "#BCBBC5",
                200: "#9C9AA9",
                300: "#6E6C81",
                400: "#524F69",
                500: "#272343",
                600: "#23203D",
                700: "#1C1930",
                800: "#151325",
                900: "#100F1C"
            },

            para: {
                50: "#EAEBED",
                100: "#BEC0C7",
                200: "#9EA1AC",
                300: "#727686",
                400: "#575C6E",
                500: "#2D334A",
                600: "#292E43",
                700: "#202435",
                800: "#191C29",
                900: "#13151F"
            },

            highlight: {
                50: "#FFFBE6",
                100: "#FFF3B1",
                200: "#FFED8B",
                300: "#FFE556",
                400: "#FFE035",
                500: "#FFD803",
                600: "#E8C503",
                700: "#B59902",
                800: "#8C7702",
                900: "#6B5B01"
            }
        },

        extend: {
            fontSize: {
                "d1-semibold": [
                    "72px",
                    {
                        lineHeight: "80px",
                        fontWeight: "600"
                    }
                ],
                "d1-bold": [
                    "72px",
                    {
                        lineHeight: "80px",
                        fontWeight: "700"
                    }
                ],
                "d1-extrabold": [
                    "72px",
                    {
                        lineHeight: "80px",
                        fontWeight: "800"
                    }
                ],

                "d2-semibold": [
                    "60px",
                    {
                        lineHeight: "72px",
                        fontWeight: "600"
                    }
                ],
                "d2-bold": [
                    "60px",
                    {
                        lineHeight: "72px",
                        fontWeight: "700"
                    }
                ],
                "d2-extrabold": [
                    "60px",
                    {
                        lineHeight: "72px",
                        fontWeight: "800"
                    }
                ],

                "h1-semibold": [
                    "48px",
                    {
                        lineHeight: "56px",
                        fontWeight: "600"
                    }
                ],
                "h1-bold": [
                    "48px",
                    {
                        lineHeight: "56px",
                        fontWeight: "700"
                    }
                ],
                "h1-extrabold": [
                    "48px",
                    {
                        lineHeight: "56px",
                        fontWeight: "800"
                    }
                ],

                "h2-semibold": [
                    "39px",
                    {
                        lineHeight: "47px",
                        fontWeight: "600"
                    }
                ],
                "h2-bold": [
                    "39px",
                    {
                        lineHeight: "47px",
                        fontWeight: "700"
                    }
                ],
                "h2-extrabold": [
                    "39px",
                    {
                        lineHeight: "47px",
                        fontWeight: "800"
                    }
                ],

                "h3-semibold": [
                    "33px",
                    {
                        lineHeight: "40px",
                        fontWeight: "600"
                    }
                ],
                "h3-bold": [
                    "33px",
                    {
                        lineHeight: "40px",
                        fontWeight: "700"
                    }
                ],
                "h3-extrabold": [
                    "33px",
                    {
                        lineHeight: "40px",
                        fontWeight: "800"
                    }
                ],

                "h4-regular": [
                    "28px",
                    {
                        lineHeight: "34px",
                        fontWeight: "400"
                    }
                ],
                "h4-semibold": [
                    "28px",
                    {
                        lineHeight: "34px",
                        fontWeight: "600"
                    }
                ],
                "h4-bold": [
                    "28px",
                    {
                        lineHeight: "34px",
                        fontWeight: "700"
                    }
                ],
                "h4-extrabold": [
                    "28px",
                    {
                        lineHeight: "34px",
                        fontWeight: "800"
                    }
                ],

                "h5-regular": [
                    "23px",
                    {
                        lineHeight: "28px",
                        fontWeight: "400"
                    }
                ],
                "h5-semibold": [
                    "23px",
                    {
                        lineHeight: "28px",
                        fontWeight: "600"
                    }
                ],
                "h5-bold": [
                    "23px",
                    {
                        lineHeight: "28px",
                        fontWeight: "700"
                    }
                ],
                "h5-extrabold": [
                    "23px",
                    {
                        lineHeight: "28px",
                        fontWeight: "800"
                    }
                ],

                "h6-regular": [
                    "19px",
                    {
                        lineHeight: "23px",
                        fontWeight: "400"
                    }
                ],
                "h6-semibold": [
                    "19px",
                    {
                        lineHeight: "23px",
                        fontWeight: "600"
                    }
                ],
                "h6-bold": [
                    "19px",
                    {
                        lineHeight: "23px",
                        fontWeight: "700"
                    }
                ],
                "h6-extrabold": [
                    "19px",
                    {
                        lineHeight: "23px",
                        fontWeight: "800"
                    }
                ],

                "p1-regular": [
                    "14px",
                    {
                        lineHeight: "17px",
                        fontWeight: "400"
                    }
                ],
                "p1-semibold": [
                    "14px",
                    {
                        lineHeight: "17px",
                        fontWeight: "500"
                    }
                ],

                "p2-regular": [
                    "16px",
                    {
                        lineHeight: "24px",
                        fontWeight: "400"
                    }
                ],
                "p2-semibold": [
                    "16px",
                    {
                        lineHeight: "24px",
                        fontWeight: "500"
                    }
                ],

                "caption-regular": [
                    "12px",
                    {
                        fontWeight: "400"
                    }
                ],
                "caption-semibold": [
                    "12px",
                    {
                        fontWeight: "500"
                    }
                ],

                "caption-sm-regular": [
                    "8px",
                    {
                        fontWeight: "400"
                    }
                ],
                "caption-sm-semibold": [
                    "8px",
                    {
                        fontWeight: "500"
                    }
                ],

                "footer-regular": [
                    "10px",
                    {
                        fontWeight: "400",
                        lineHeight: "14px"
                    }
                ],
                "footer-semibold": [
                    "10px",
                    {
                        fontWeight: "500",
                        lineHeight: "14px"
                    }
                ],

                "subheading-regular": [
                    "20px",
                    {
                        fontWeight: "400",
                        lineHeight: "28px"
                    }
                ],
                "subheading-semibold": [
                    "20px",
                    {
                        fontWeight: "500",
                        lineHeight: "28px"
                    }
                ]
            }
        }
    },
    plugins: []
};
