import { useEffect, useId, useRef } from "react";
import { Wrapper, Label, StyledTextarea, Helper } from "./Textarea.styles";
import type { TextareaProps } from "./Textarea.types";

export const Textarea = ({
  label,
  helperText,
  error = false,
  fullWidth = false,
  size = "md",
  autoSize = false,
  id,
  ...props
}: TextareaProps) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const generatedId = useId();
  const textareaId = id ?? generatedId;

  // 자동 높이 조절
  useEffect(() => {
    // if (autoSize && textareaRef.current) {
    //   const el = textareaRef.current;
    //   el.style.height = "auto";
    //   el.style.height = `${el.scrollHeight}px`;
    // }
  }, [props.value, autoSize]);

  return (
    <Wrapper $fullWidth={fullWidth}>
      {label && <Label htmlFor={textareaId}>{label}</Label>}

      <StyledTextarea
        id={textareaId}
        ref={textareaRef}
        $error={error}
        $disabled={props.disabled}
        $size={size}
        {...props}
      />

      {helperText && <Helper $error={error}>{helperText}</Helper>}
    </Wrapper>
  );
};
