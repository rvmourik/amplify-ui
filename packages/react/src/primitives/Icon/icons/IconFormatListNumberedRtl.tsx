import classNames from 'classnames';

import { ComponentClassNames } from '../../shared';
import { View } from '../../View';

export const IconFormatListNumberedRtl = (props) => {
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
          d="M18 17H20V17.5H19V18.5H20V19H18V20H21V16H18V17ZM19 8H20V4H18V5H19V8ZM18 11H19.8L18 13.1V14H21V13H19.2L21 10.9V10H18V11ZM2 5H16V7H2V5ZM2 17H16V19H2V17ZM2 11H16V13H2V11Z"
          fill="currentColor"
        />
      </svg>
    </View>
  );
};
