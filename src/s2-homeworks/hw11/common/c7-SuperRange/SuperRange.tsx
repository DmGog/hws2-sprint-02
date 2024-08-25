import React from "react"
import {Slider, SliderProps} from "@mui/material"

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{// стили для слайдера // пишет студент
                color: "rgba(0, 204, 34, 1)",
                height: 4,
                "& .MuiSlider-track": {
                    border: "none",
                    transition: "none",
                },
                "& .MuiSlider-thumb": {
                    pointerEvents: "auto",
                    transition: "none",
                    height: 18,
                    width: 18,
                    backgroundColor: "#fff",
                    border: "1px solid rgba(0, 204, 34, 1)",
                    boxShadow: "none",
                    "&:hover": {
                        boxShadow: "0 0 0 4px rgba(58, 133, 137, 0.16)",
                    },
                    "&::before": {
                        height: 6,
                        width: 6,
                        backgroundColor: "#00CC22FF",
                        boxShadow: "none"
                    },
                    "&::after": {
                        height: 0,
                        width: 0,
                    },
                },

            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
