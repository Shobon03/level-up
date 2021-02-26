import Tooltip from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/material.css";

export function SideButton({ tooltipContent, children }) {
  return (
    <Tooltip
      content={tooltipContent}
      arrow={true}
      placement="left"
      hideOnClick={false}
      theme="material"
    >
      {children}
    </Tooltip>
  );
}
