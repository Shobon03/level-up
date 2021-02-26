import Tooltip from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/material.css";

export function InfoButton({
  tooltipContent,
  placement,
  interactive,
  children,
}) {
  return (
    <Tooltip
      content={tooltipContent}
      arrow={true}
      placement={placement}
      hideOnClick={false}
      theme="material"
      interactive={interactive}
    >
      {children}
    </Tooltip>
  );
}
