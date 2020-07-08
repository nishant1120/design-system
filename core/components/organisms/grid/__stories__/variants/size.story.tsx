import * as React from 'react';
import data from '../_common_/data';
import schema from '../_common_/simpleSchema';
import { Card, Heading, Grid } from '@/index';
import { GridProps } from '@/index.type';

// CSF format story
export const size = () => {
  const values: GridProps['size'][] = ['comfortable', 'standard', 'compressed', 'tight'];

  const style = {
    display: 'flex',
    flexWrap: 'wrap',
  };

  return (
    // @ts-ignore
    <div style={style}>
      {values.map((v, index) => (
        <div
          key={index}
          style={{
            margin: '20px',
            width: '45%'
          }}
        >
          <Heading>{v}</Heading>
          <div
            style={{
              height: '350px',
            }}
          >
            <Card
              shadow="light"
              className="h-100"
            >
              <Grid
                size={v}
                data={data}
                schema={schema}
              />
            </Card>
          </div>
        </div>
      ))}
    </div>
  );
};

export default {
  title: 'Organisms|Grid/Variants',
  component: Grid
};
