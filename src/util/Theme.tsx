
/* 자주쓰는 컬러에 대한 enum */
export type colorType = keyof typeof theme.theme_color
// svg icon theme.themecolor..?
// function (...arg)
// "primary" | "danger" | "warning" 
// | "danger" | "warning" | "background"
export type fontWeightType = "regular" | "bold" | "extrabold" | "black"
/* 사이즈 종류에 따른 enum */
export type sizeType = "lg" | "md" | "sm"

export interface themeType {

    element : {
        /** 엘리먼트의 일반 사이즈 (height) */
        height : {
            lg : string
            sm : string
            md : string
        }

        /** 엘리먼트의 일반 Padding */
        padding : {
            lg: string
            sm : string
            md : string
        }
    }

    font : {
        /** 사이즈 관련 프로퍼티 */
        size : {
            /** 엘리먼트 속 폰트 */
            element_font : {
                lg : string
                sm : string
                md : string
            }
            /** 일반 폰트 크기 */
            font : {
                lg: string
                sm : string
                md : string
            }
            /** 폰트 굵기 */
            weight: {
                regular: string,
                bold: string,
                extrabold: string,
                black: string,
            }
        }

    }

    /** 테마 컬러 프로퍼티 */
    theme_color : {

        primary : {
            normal:string
            active:string
            hover:string
            disable:string
        }

        danger : {
            normal:string
            active:string
            hover:string
            disable:string
        }

        warning: {
            normal:string
            active:string
            hover:string
            disable:string
        }
    }

    color : {
        background: string
        dark : {
                gray : {
                    lighter: string
                    light: string
                    normal: string
                    dark : string
                },
                text : {
                    light : string
                    normal: string
                    darker : string
                    dark : string
                }
            }
    }

        // background: string
        // danger : string
        // warning: string
        // background: string

        // /** 다크 테마 */
        // dark : {
        //     gray : {
        //         lighter: string
        //         light: string
        //         normal: string
        //         dark : string
        //     },
        //     text : {
        //         light : string
        //         normal: string
        //         darker : string
        //         dark : string
        //     }
        // }
}



export const theme : themeType = {

    element : {
        height : {
            lg : '3rem',
            md : '2.5rem',
            sm : '1.75rem',
        },
        padding : {
            lg : '0 1.5rem',
            md : '0 1rem',
            sm : '0 0.875rem'
        }   
    },

    font : {
        size : {
            element_font : {
                lg : '1.125rem',
                md : '1rem',
                sm : '0.75rem',
            },
            font : {
                lg: '32',
                md : '24',
                sm : '12',
            },
            weight: {
                regular: '400',
                bold: '700',
                extrabold: '800',
                black: '900',
            }
        }
    },
    theme_color : {
        primary: {
            normal: "#5383e8",
            hover: "#5c90ff",
            active: "#446abd",
            disable:"#adc8ff"
        },
        danger: {
            normal: "#e84057",
            hover: "#ff546c",
            active: "#bd4052",
            disable: "#9e5f68",
        },
        warning: {
            normal: "#eb9c00",
            hover: "#ffb41f",
            active: "#ba7c00",
            disable: "#c4ae82"
        }
        // danger:"#e84057",
        // warning:"#eb9c00",
        // 
    },
    color:{
        background: "#1c1c1f",
        dark : {
            gray : {
                lighter: "#505163",
                light: "#424254",
                normal: "#31313c",
                dark : "#282830",
            },
            text : {
                light : "#ffffff",
                normal: '#ebeef1',
                darker : '#ebeef1',
                dark : '#9e9eb1'
            }
        }
    }
}


/*
const theme = {

    theme_color : {
        primary: "#5383e8",
        danger:"#e84057",
        warning:"#eb9c00",
        background: "#1c1c1f",
        light_gray:"#424254",
        lighter_gary:"#505163",
        gray:"#31313c",
        dark_gray:"#282830",
        light_text:"#ffffff",
        textColor:"#ebeef1",
        darker_text:'#7B7A8E',
        dark_text:'#9e9eb1'
    },
    typography : {
        type: {
          primary: '"Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
          code: '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace',
        },
        weight: {
          regular: '400',
          bold: '700',
          extrabold: '800',
          black: '900',
        },
        size: {
          s1: '12',
          s2: '14',
          s3: '16',
          m1: '20',
          m2: '24',
          m3: '28',
          l1: '32',
          l2: '40',
          l3: '48',
          code: '90',
        },
    },
      
    color : {
        content_bg: "#1c1c1f",
        main_100: "#28344e",
        main_200: "#2f436e",
        main_300: "#2f436e",
        main_400: "#4171d6",
        main_500: "#5383e8",
        main_600: "#5383e8",
        main_700: "#5383e8",
        main_800: "#81acff",
        main_900: "#81acff",
        gray_0: "#31313c",
        gray_100: "#282830",
        gray_200: "#1c1c1f",
        gray_250: "#424254",
        gray_300: "#515163",
        gray_400: "#7b7a8e",
        gray_500: "#9e9eb1",
        gray_600: "#9e9eb1",
        gray_700: "#b7b7c9",
        gray_800: "#b7b7c9",
        gray_900: "#fff",
        darkpurple_100: "#cfcfe1",
        darkpurple_200: "#b7b7c9",
        darkpurple_300: "#9e9eb1",
        darkpurple_400: "#7b7a8e",
        darkpurple_500: "#676678",
        darkpurple_600: "#515163",
        darkpurple_700: "#424254",
        darkpurple_800: "#31313c",
        darkpurple_850: "#282830",
        darkpurple_900: "#1c1c1f",
        red_100: "#59343b",
        red_200: "#703c47",
        red_300: "#703c47",
        red_400: "#d31a45",
        red_500: "#e84057",
        red_600: "#e84057",
        red_700: "#e84057",
        red_800: "#ff6c81",
        red_900: "#ff6c81",
        orange_100: "#703100",
        orange_200: "#8e3e00",
        orange_300: "#8e3e00",
        orange_400: "#f06f00",
        orange_500: "#ff8200",
        orange_600: "#ff8200",
        orange_700: "#ff8200",
        orange_800: "#ff9f4a",
        orange_900: "#ff9f4a",
        yellow_100: "#4a340e",
        yellow_200: "#aa6a19",
        yellow_300: "#aa6a19",
        yellow_400: "#e28400",
        yellow_500: "#eb9c00",
        yellow_600: "#eb9c00",
        yellow_700: "#eb9c00",
        yellow_800: "#ffb900",
        yellow_900: "#ffb900",
        green_100: "#304a1d",
        green_200: "#24662b",
        green_300: "#24662b",
        green_400: "#139020",
        green_500: "#00ae0a",
        green_600: "#00ae0a",
        green_700: "#00ae0a",
        green_800: "#6cc92d",
        green_900: "#6cc92d",
        teal_100: "#1d4346",
        teal_200: "#00666e",
        teal_300: "#00666e",
        teal_400: "#00a399",
        teal_500: "#00bba3",
        teal_600: "#00bba3",
        teal_700: "#00bba3",
        teal_800: "#00d7b0",
        teal_900: "#00d7b0",
        blue_100: "#183955",
        blue_200: "#114882",
        blue_300: "#114882",
        blue_400: "#006de2",
        blue_500: "#0093ff",
        blue_600: "#0093ff",
        blue_700: "#0093ff",
        blue_800: "#00b8ed",
        blue_900: "#00b8ed",
        purple_100: "#332353",
        purple_200: "#3f2a75",
        purple_300: "#3f2a75",
        purple_400: "#6b42dc",
        purple_500: "#7d59ea",
        purple_600: "#7d59ea",
        purple_700: "#7d59ea",
        purple_800: "#a072ff",
        purple_900: "#a072ff",
        pink_100: "#5f225e",
        pink_200: "#8f178d",
        pink_300: "#8f178d",
        pink_400: "#e537a2",
        pink_500: "#e537a2",
        pink_600: "#d932d6",
        pink_700: "#d932d6",
        pink_800: "#b920b7",
        pink_900: "#b920b7",
        bronze_100: "#3a3734",
        bronze_200: "#52493f",
        bronze_300: "#52493f",
        bronze_400: "#7c6750",
        bronze_500: "#907659",
        bronze_600: "#907659",
        bronze_700: "#907659",
        bronze_800: "#a88a67",
        bronze_900: "#a88a67",
    },

   
}
*/

  