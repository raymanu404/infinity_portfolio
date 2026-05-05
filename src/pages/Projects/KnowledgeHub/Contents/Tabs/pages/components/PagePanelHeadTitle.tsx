import { FullModal } from '@/Shared/Components';
import { OptionsAppMenuType } from '@/Shared/interfaces';
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

  const fullMode = appsMenu.find(x => x.appValueName === 'fullMode');

  return (
    <SpaceBetweenRowBox>
      <Typography variant="h6">{title}</Typography>

      <div style={{ display: 'flex' }}>
        <div
          style={{
            borderBottom: `2px solid ${theme.custom.specialPalette?.variantSecondaryLight}`,
            display: 'flex',
          }}
        >
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
                  if (handleClose) {
                    handleClose();
                  }
                };

                return (
                  <div key={index}>
                    {isMenuOpened && appValueName !== 'fullMode' && icon && (
                      <IconButton size="medium" onClick={handleDialogOpen}>
                        {icon}
                      </IconButton>
                    )}

                    {/* CONTENT */}
                    {isOpenDialog && (
                      <FullModal
                        isOpen={!!isOpenDialog}
                        handleClose={handleCloseLocal}
                        title={description ?? 'App Modal'}
                      >
                        {children}
                      </FullModal>
                    )}
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
        <IconButton onClick={fullMode?.handleDialogOpen} disabled={fullMode?.isOpenDialog}>
          <Maximize />
        </IconButton>
      </div>
    </SpaceBetweenRowBox>
  );
};

PagePanelHeadTitle.displayName = 'PagePanelHeadTitle';

export default PagePanelHeadTitle;
