import { CSSProperties} from "react";

namespace Theme {

    // enum Color {
    //     red = "#e84057",
    //     blue = "#5383e8",
    //     darkGray = "#31313C",
    //     bgDarkGray = "#1C1C1F",
    // }
    
    enum FontSize {
        large,
        small,
        middle,
    }
    
    enum FontWieght {
        bold,
        normal
    }

    
}

/*
export function getFont(size: Theme.FontSize, weight=Theme.FontWieght.normal, percentage=0, color="#000"): CSSProperties {

    let rtSize: string;
    let rtPercentage = (percentage / 10);
    
    if (size === Theme.FontSize.large) {
        rtSize = (40 + rtPercentage).toString() + "px"
    } else if (size === Theme.FontSize.middle){ 
        rtSize = (30 + rtPercentage).toString() + "px"
    } else {
        rtSize = (20 + rtPercentage).toString() + "px"
    }

    let rtWeight: "normal" | "bold"

    if (weight === Theme.FontWieght.normal) {
        rtWeight = 'normal'
    } else {
        rtWeight = 'bold'
    }

    return {fontSize: rtSize, fontWeight:rtWeight, color:color}

}*/