import {ReactNode} from "react";

const GrayBackground = ({children,className}:{children?: ReactNode, className?:string }) => {
    return (
        <div className={`${className} bg-main-page-background w-full flex flex-col items-center`}>
            {children}
        </div>
    )
}

export default GrayBackground;