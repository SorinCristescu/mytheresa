import React, { Component, lazy, Suspense } from 'react';

// Routing
import { Route, withRouter } from 'react-router-dom';

// Lazy loading with code splitting.
const HomePage = lazy(() => import('./views/Home'));
const CategoryPage = lazy(() => import('./views/Category'));
const MovieDetailsPage = lazy(() => import('./views/MovieDetails'));
const CartPage = lazy(() => import('./views/Cart'));

// Components
import ErrorBoundary from './components/ErrorBoundary';
import Spinner from './components/Spinner';
import Layout from './layout';

// Declare routes.
const routes = [
  {
    path: '/',
    name: 'Home',
    Component: HomePage,
  },
  {
    path: '/category/:categoryName',
    name: 'Category',
    Component: CategoryPage,
  },
  {
    path: '/movie-details/:id',
    name: 'MovieDetails',
    Component: MovieDetailsPage,
  },
  {
    path: '/cart',
    name: 'Cart',
    Component: CartPage,
  },
];

// Styles
import GlobalStyle from './globalStyles';

class App extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <Layout>
          <ErrorBoundary>
            <Suspense fallback={<Spinner />}>
              {routes.map(({ name, path, Component }) => (
                <Route key={name} path={path} exact>
                  <Component />
                </Route>
              ))}
            </Suspense>
          </ErrorBoundary>
        </Layout>
      </>
    );
  }
}

export default withRouter(App);
