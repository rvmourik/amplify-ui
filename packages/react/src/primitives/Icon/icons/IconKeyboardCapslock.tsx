import classNames from 'classnames';

import { ComponentClassNames } from '../../shared';
import { View } from '../../View';

export const IconKeyboardCapslock = (props) => {
  const { className, ...rest } = props;
  return (
    <View
      as="span"
      width="1em"
      height="1em"
      className={classNames(ComponentClassNames.Icon, className)}
      {...rest}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 8.40984L16.59 12.9998L18 11.5898L12 5.58984L6 11.5898L7.41 12.9998L12 8.40984ZM6 17.9998H18V15.9998H6V17.9998Z"
          fill="currentColor"
        />
      </svg>
    </View>
  );
};
