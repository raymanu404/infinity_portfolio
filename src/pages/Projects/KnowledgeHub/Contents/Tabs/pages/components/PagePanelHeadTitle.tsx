import { FullModal } from '@/Shared/Components';
import { OptionsAppMenuType } from '@/Shared/Hooks/useURLQueryParams';
import { SpaceBetweenRowBox } from '@/Shared/Utils/Helpers/styled-components';
import { theme } from '@/theme';
import { IconButton, Typography } from '@mui/material';
import { ArrowLeft, ArrowRight, Maximize } from 'lucide-react';
import React, { PropsWithChildren } from 'react';

interface PagePanelHeadTitleProps {
  title: string;
  appsMenu: AppMenuProps[];
}

export interface AppMenuProps extends PropsWithChildren {
  description?: string;
  icon?: React.ReactNode;
  appValueName: OptionsAppMenuType | null;
  handleDialogOpen?: () => void;
  handleClose?: () => void;
  isOpenDialog?: boolean;
}

const PagePanelHeadTitle: React.FC<PagePanelHeadTitleProps> = ({ appsMenu, title }) => {
  const [isMenuOpened, setIsMenuOpened] = React.useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpened(prev => !prev);
  };

  return (
    <SpaceBetweenRowBox>
      <Typography variant="h6">{title}</Typography>

      <div style={{ display: 'flex' }}>
        <div
          style={{
            borderBottom: '1px solid',
            borderColor: theme.custom.specialPalette?.variantSecondaryLight,
            display: 'flex',
            backgroundColor: theme.custom.specialPalette?.variant[300],
          }}
        >
          {/* TODO: FIX FULL DIALOG ISSUE */}
          {appsMenu.length > 0 &&
            appsMenu.map(
              (
                {
                  appValueName,
                  handleDialogOpen,
                  isOpenDialog,
                  icon,
                  children,
                  description,
                  handleClose,
                },
                index,
              ) => {
                const handleCloseLocal = () => {
                  console.log('close local');

                  if (handleClose) {
                    handleClose();
                  }
                  console.log('close local');
                };

                return (
                  <div key={index}>
                    {isMenuOpened && appValueName !== 'fullMode' && icon && (
                      <IconButton size="medium" onClick={handleDialogOpen}>
                        {icon}
                      </IconButton>
                    )}

                    {/* CONTENT */}
                    <FullModal
                      isOpen={!!isOpenDialog}
                      handleClose={handleCloseLocal}
                      title={description ?? 'App Modal'}
                    >
                      {children}
                    </FullModal>
                  </div>
                );
              },
            )}
        </div>
        <>
          {isMenuOpened ? (
            <IconButton onClick={handleMenuToggle}>
              <ArrowLeft />
            </IconButton>
          ) : (
            <IconButton onClick={handleMenuToggle}>
              <ArrowRight />
            </IconButton>
          )}
        </>
        <IconButton
          onClick={appsMenu.find(x => x.appValueName === 'fullMode')?.handleDialogOpen}
          disabled={appsMenu.find(x => x.appValueName === 'fullMode')?.isOpenDialog}
        >
          <Maximize />
        </IconButton>
      </div>
    </SpaceBetweenRowBox>
  );
};

PagePanelHeadTitle.displayName = 'PagePanelHeadTitle';

export default PagePanelHeadTitle;
