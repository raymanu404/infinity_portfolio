import MultipleDefContent from '@/Shared/Components/CodeBlocks/MultipleDefContent';
import Notes from '@/Shared/Components/Notes/Notes';
import { BoxCardContent, FlexWithGapBox } from '@/Shared/Utils/Helpers/styled-components';
import React from 'react';

const PasskeysAndWebAuth: React.FC = () => {
  return (
    <FlexWithGapBox>
      <MultipleDefContent
        contents={[
          {
            title: `Simulating the Backend Response`,
            content: (
              <BoxCardContent>
                <Notes
                  container={{
                    hideNote: true,
                    parentSx: {
                      padding: '10px',
                    },
                  }}
                  notes={[
                    {
                      note: <FlexWithGapBox sx={{ width: '100%' }}></FlexWithGapBox>,
                      hideList: true,
                      orderedList: false,
                    },
                  ]}
                />
              </BoxCardContent>
            ),
          },
        ]}
      />
    </FlexWithGapBox>
  );
};

export default PasskeysAndWebAuth;
