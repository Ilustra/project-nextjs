import React from "react";
import useId from "./userId";


const variantComponent: any = {
    standard: 'Input',
    filled: 'FilledInput',
    outlined: 'OutlinedInput',
};

  
const TextField = React.forwardRef(function TextField(inProps: any,) {
    const {props} = inProps
    const {
      autoComplete,
      autoFocus = false,
      children,
      className,
      color = 'primary',
      defaultValue,
      disabled = false,
      error = false,
      FormHelperTextProps,
      fullWidth = false,
      helperText,
      id: idOverride,
      InputLabelProps,
      inputProps,
      InputProps,
      inputRef,
      label,
      maxRows,
      minRows,
      multiline = false,
      name,
      onBlur,
      onChange,
      onFocus,
      placeholder,
      required = false,
      rows,
      select = false,
      SelectProps,
      type,
      value,
      variant = 'outlined',
      ...other
    } = props;
  
    const ownerState = {
      ...props,
      autoFocus,
      color,
      disabled,
      error,
      fullWidth,
      multiline,
      required,
      select,
      variant,
    };
   
    const InputMore: any = {};
  
    if (variant === 'outlined') {
      if (InputLabelProps && typeof InputLabelProps.shrink !== 'undefined') {
        InputMore.notched = InputLabelProps.shrink;
      }
      InputMore.label = label;
    }
    if (select) {
      // unset defaults from textbox inputs
      if (!SelectProps || !SelectProps.native) {
        InputMore.id = undefined;
      }
      InputMore['aria-describedby'] = undefined;
    }
  
    const id = useId(idOverride);
    const helperTextId = helperText && id ? `${id}-helper-text` : undefined;
    const inputLabelId = label && id ? `${id}-label` : undefined;
    const InputComponent = variantComponent[variant];
    const InputElement = (
      <InputComponent
        aria-describedby={helperTextId}
        autoComplete={autoComplete}
        autoFocus={autoFocus}
        defaultValue={defaultValue}
        fullWidth={fullWidth}
        multiline={multiline}
        name={name}
        rows={rows}
        maxRows={maxRows}
        minRows={minRows}
        type={type}
        value={value}
        id={id}
        inputRef={inputRef}
        onBlur={onBlur}
        onChange={onChange}
        onFocus={onFocus}
        placeholder={placeholder}
        inputProps={inputProps}
        {...InputMore}
        {...InputProps}
      />
    );
  
    return (
      <TextFieldRoot
        className={clsx(classes.root, className)}
        disabled={disabled}
        error={error}
        fullWidth={fullWidth}
        ref={ref}
        required={required}
        color={color}
        variant={variant}
        ownerState={ownerState}
        {...other}
      >
        {label && (
          <InputLabel htmlFor={id} id={inputLabelId} {...InputLabelProps}>
            {label}
          </InputLabel>
        )}
  
        {select ? (
          <Select
            aria-describedby={helperTextId}
            id={id}
            labelId={inputLabelId}
            value={value}
            input={InputElement}
            {...SelectProps}
          >
            {children}
          </Select>
        ) : (
          InputElement
        )}
  
        {helperText && (
          <FormHelperText id={helperTextId} {...FormHelperTextProps}>
            {helperText}
          </FormHelperText>
        )}
      </TextFieldRoot>
    );
  });

  export default TextField