import { Suspense, lazy } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { PATH_ROUTES } from './constants';
import { RedirectRouter } from './Components/RedirectRouter';
import { convertToPathURI } from '../../Shared/Utils/Helpers/global-utils';
import { NotFoundPage, Spinner } from '../../Shared/Components';
import { Layout } from '../Layout/Layout';
import { CenteredBox } from '@/Shared/Utils/Helpers/styled-components';

const Home = lazy(() => import('../../pages/Home/Home'));
const Projects = lazy(() =>
  import('../../pages/Projects/index').then((module) => ({
    default: module.ProjectsContainer,
  })),
);
const TicTacToe = lazy(() =>
  import('../../pages/Projects/index').then((module) => ({
    default: module.TicTacToe,
  })),
);
const Monsters = lazy(() =>
  import('../../pages/Projects/index').then((module) => ({
    default: module.Monsters,
  })),
);
const KnowledgeHub = lazy(() =>
  import('../../pages/Projects/index').then((module) => ({
    default: module.KnowledgeHub,
  })),
);

const CustomRouter = () => {
  return (
    <BrowserRouter
      future={{
        v7_relativeSplatPath: true,
        v7_startTransition: true,
      }}
    >
      <RedirectRouter>
        <Layout>
          <Suspense
            fallback={
              <CenteredBox>
                <Spinner size="3rem" />
              </CenteredBox>
            }
          >
            <Routes>
              <Route index element={<Home />} />
              <Route
                element={<NotFoundPage />}
                path={convertToPathURI(PATH_ROUTES.NOT_FOUND)}
              />
              <Route path="*" element={<Navigate to={'not-found'} replace />} />
              <Route
                path={convertToPathURI(PATH_ROUTES.PROJECTS)}
                element={<Projects />}
              />
              <Route
                path={convertToPathURI([
                  PATH_ROUTES.PROJECTS,
                  PATH_ROUTES.MONSTERS,
                ])}
                element={<Monsters />}
              />
              <Route
                path={convertToPathURI([
                  PATH_ROUTES.PROJECTS,
                  PATH_ROUTES.KNOWLEDGE_HUB,
                ])}
                element={<KnowledgeHub />}
              />

              {/* In this block, we should wrap all components into our game context, and use State only in game scope*/}
              <Route
                path={convertToPathURI([
                  PATH_ROUTES.PROJECTS,
                  PATH_ROUTES.TIC_TAC_TOE,
                ])}
                element={<TicTacToe />}
              />
            </Routes>
          </Suspense>
        </Layout>
      </RedirectRouter>
    </BrowserRouter>
  );
};

export { CustomRouter };
