import React from 'react';

import Button from '@material-ui/core/Button';

const ButtonComponent = ({
      className,
      innerText,
      onClick,
      disabled,
}) => {
      return (
            <Button
                  variant="outlined"
                  color="primary"
                  className={className}
                  onClick={onClick}
                  disabled={disabled}
            >
                  {innerText}
            </Button>
      )
}

export default ButtonComponent;
