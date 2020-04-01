import React from "react";

import { useState, useRef, useImperativeHandle, forwardRef } from "react";
import IconElement from "./IconElement/index";
import './AdditionStep.css'

const emptyCallback = () => { }

// css bem 命名规范
export default forwardRef((props, ref) => {
    const [iconDone, setIconDone] = useState(false);
    const inputRef = useRef()
    useImperativeHandle(ref, () => ({
        reset: () => {
            inputRef.current.value = ''
            setIconDone(false)
        }
    }))
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                padding: "12px",
            }}
        >
            <IconElement
                type={iconDone ? "circle" : "add"}
                size={24}
                color="rgb(117, 134, 230)"
                style={{
                    marginLeft: "10px",
                    border: "none"
                }}
                onClick={() => {
                    setIconDone(!iconDone);
                }}
            />

            <input
                type="text"
                placeholder={props.p}
                ref={inputRef}
                style={{
                    color: "rgb(117, 134, 230)",
                    border: 0,
                    fontSize: "20px",
                    marginLeft: "20px",
                }}
                onClick={() => {
                    // console.log("click");
                    setIconDone(!iconDone);
                }}

                onKeyDown={(e) => {
                    if (e.keyCode === 13) {
                        const callback = props.onAdd || emptyCallback;
                        callback.call({}, inputRef.current.value)
                    }
                }}

                onBlur={() => {
                    setIconDone(!iconDone)
                }}
            />
        </div>
    );
});
