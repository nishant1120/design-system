import * as React from 'react';
import { action } from '@/utils/action';
import Pagination from '../../Pagination';
import Text from '@/components/atoms/text';

// CSF format story
export const type = () => {
  const paginationTypes = ['basic', 'jump'];

  const page = 1;

  const totalPages = 50;

  const innerStyle = {
    display: 'flex',
    'flex-direction': 'column',
    'align-items': 'center',
  };

  return (
    <div className="d-flex">
      {paginationTypes.map((displayType, ind) => {
        return (
          <div key={ind} style={innerStyle}>
            <Text weight="strong">{displayType}</Text>
            <br />
            <Pagination
              type={displayType}
              page={page}
              totalPages={totalPages}
              onPageChange={(pageNo) => action(`No-change-action: ${pageNo}`)()}
            />
          </div>
        );
      })}
    </div>
  );
};

export default {
  title: 'Components/Pagination/Variants/Type',
  component: Pagination,
  parameters: {
    docs: {
      docPage: {
        title: 'Pagination',
      },
    },
  },
};
