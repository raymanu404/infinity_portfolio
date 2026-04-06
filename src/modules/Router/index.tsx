import Home from '@/pages/Home';
import ErrorPage from '@/Shared/Components/Error/ErrorPage';
import { FullCenteredBox } from '@/Shared/Utils/Helpers/styled-components';
import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
import { NotFoundPage, Spinner } from '../../Shared/Components';
import { convertToPathURI } from '../../Shared/Utils/Helpers/global-utils';
import { Layout } from '../Layout/Layout';
import { RedirectRouter } from './Components/RedirectRouter';
import { PATH_ROUTES } from './constants';

const ErrorBoundary = lazy(() =>
  import('react-error-boundary').then(module => ({
    default: module.ErrorBoundary,
  })),
);

const Projects = lazy(() =>
  import('@/pages/Projects/index.js').then(module => ({
    default: module.ProjectsContainer,
  })),
);
const TicTacToe = lazy(() =>
  import('@/pages/Projects/index.js').then(module => ({
    default: module.TicTacToe,
  })),
);
const Monsters = lazy(() =>
  import('@/pages/Projects/index.js').then(module => ({
    default: module.Monsters,
  })),
);
const KnowledgeHub = lazy(() =>
  import('@/pages/Projects/index.js').then(module => ({
    default: module.KnowledgeHub,
  })),
);

const knowledgeHub = convertToPathURI([PATH_ROUTES.PROJECTS, PATH_ROUTES.KNOWLEDGE_HUB, '*']);

const CustomRouter = () => {
  return (
    <BrowserRouter>
      <RedirectRouter>
        <Layout>
          <Suspense
            fallback={
              <FullCenteredBox>
                <Spinner size="3rem" />
              </FullCenteredBox>
            }
          >
            <ErrorBoundary fallback={<ErrorPage />}>
              <Routes>
                <Route index element={<Home />} />
                <Route path="*" element={<NotFoundPage />} />
                <Route path={convertToPathURI(PATH_ROUTES.PROJECTS)} element={<Projects />} />
                <Route
                  path={convertToPathURI([PATH_ROUTES.PROJECTS, PATH_ROUTES.MONSTERS])}
                  element={<Monsters />}
                />
                <Route path={knowledgeHub} element={<KnowledgeHub />} />

                {/* In this block, we should wrap all components into our game context, and use State only in game scope*/}
                <Route
                  path={convertToPathURI([PATH_ROUTES.PROJECTS, PATH_ROUTES.TIC_TAC_TOE])}
                  element={<TicTacToe />}
                />
              </Routes>
            </ErrorBoundary>
          </Suspense>
        </Layout>
      </RedirectRouter>
    </BrowserRouter>
  );
};

export { CustomRouter };
