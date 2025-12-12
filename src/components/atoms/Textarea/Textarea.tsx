import { Wrapper, StyledTextarea, TextareaContainer } from "./Textarea.styles";
import type { TextareaProps } from "./Textarea.types";
import { Text } from "../Text/Text.styles";
import { IconButton } from "../Input/Input.styles";
import { FiX } from "react-icons/fi";
import useTextarea from "./useTextarea";

export const Textarea = ({
  label,
  helperText,
  error = false,
  fullWidth = false,
  size = "md",
  id,
  clearable = true,
  required,
  value,
  ...props
}: TextareaProps) => {
  const { textareaId, clearInput, handleChange, selectedValue, textareaRef } =
    useTextarea({
      onChange: props.onChange,
      value,
      id,
    });

  return (
    <Wrapper $fullWidth={fullWidth}>
      {label && (
        <Text.Label required={required} htmlFor={textareaId}>
          {label}
        </Text.Label>
      )}
      <TextareaContainer $error={error} $disabled={props.disabled} $size={size}>
        <StyledTextarea
          ref={textareaRef}
          id={textareaId}
          value={selectedValue}
          onChange={handleChange}
          {...props}
        />
        {/* clear button */}
        {clearable && selectedValue && (
          <IconButton type="button" onClick={clearInput}>
            <FiX size={16} />
          </IconButton>
        )}
      </TextareaContainer>

      {helperText && <Text.Helper $error={error}>{helperText}</Text.Helper>}
    </Wrapper>
  );
};
