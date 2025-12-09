import { useId, useState } from "react";
import { Wrapper, StyledTextarea, TextareaContainer } from "./Textarea.styles";
import type { TextareaProps } from "./Textarea.types";
import { Text } from "../Text/Text.styles";
import { IconButton } from "../Input/Input.styles";
import { FiX } from "react-icons/fi";

export const Textarea = ({
  label,
  helperText,
  error = false,
  fullWidth = false,
  size = "md",
  id,
  clearable = true,
  required,
  ...props
}: TextareaProps) => {
  const [value, setValue] = useState(props.value ?? "");

  const generatedId = useId();
  const textareaId = id ?? generatedId;

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
    props.onChange?.(e); // 기존 onChange 호출 유지
  };

  const clearInput = () => {
    const event = {
      target: { value: "" },
    } as React.ChangeEvent<HTMLTextAreaElement>;

    setValue("");
    props.onChange?.(event);
  };

  console.log(value, "value");

  return (
    <Wrapper $fullWidth={fullWidth}>
      {label && (
        <Text.Label required={required} htmlFor={textareaId}>
          {label}
        </Text.Label>
      )}
      <TextareaContainer $error={error} $disabled={props.disabled} $size={size}>
        <StyledTextarea
          id={textareaId}
          value={value}
          onChange={handleChange}
          {...props}
        />
        {/* clear button */}
        {clearable && value && (
          <IconButton type="button" onClick={clearInput}>
            <FiX size={16} />
          </IconButton>
        )}
      </TextareaContainer>

      {helperText && <Text.Helper $error={error}>{helperText}</Text.Helper>}
    </Wrapper>
  );
};
