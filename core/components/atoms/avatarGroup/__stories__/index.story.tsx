import * as React from 'react';
import { AvatarGroup } from '../AvatarGroup';
import { number, select, boolean } from '@storybook/addon-knobs';
import { list } from './AvatarList';

export const all = () => {
  const position = select(
    'position',
    ['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end'],
    'bottom-end'
  );

  const on = select('on', ['click', 'hover'], 'hover');

  const dark = boolean('dark', true);

  const max = number('max', 2);

  const options = {
    max,
    popoverOptions: {
      on,
      position,
      dark,
    },
    list: list.slice(0, 4),
  };

  return (
    <div className="ml-12">
      <AvatarGroup {...options} />
    </div>
  );
};

export default {
  title: 'Components/AvatarGroup/All',
  component: AvatarGroup,
};
