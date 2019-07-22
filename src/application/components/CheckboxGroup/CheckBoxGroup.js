import React, { Children, memo } from 'react';

const CheckboxGroup = (props) => {
  
    const handleChange = event => {
      const target = event.currentTarget;
      let valueArray = [...props.value] || [];
  
      if (target.checked) {
        valueArray.push(target.id);
      } else {
        valueArray.splice(valueArray.indexOf(target.id), 1);
      }
  
      props.onChange(props.id, valueArray);
    };
  
    const handleBlur = () => {
      props.onBlur(props.id, true);
    };
  
      const { value, error, touched, className, children } = props;
  
      return (
        <div className={className}>
            {Children.map(children, child => {
              return React.cloneElement(child, {
                field: {
                  value: value.includes(child.props.id),
                  onChange: handleChange,
                  onBlur: handleBlur
                }
              });
            })}
            {touched && <div>{error} </div>}
        </div>
      );
  }

  export default memo(CheckboxGroup);