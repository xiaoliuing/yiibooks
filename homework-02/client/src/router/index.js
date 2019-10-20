import React from 'react';
import { Switch, Route } from 'react-router-dom';

const { lazy, Suspense } = React;

const Index = lazy(() => import('../pages/index'));
const Add = lazy(() => import('../pages/add'));
const Update = lazy(() => import('../pages/edit'));
const Look = lazy(() => import('../pages/look'));

const routes = [
  {
    path: '/',
    exact: true,
    component: Index
  },
  {
    path: '/add/',
    exact: true,
    component: Add
  },
  {
    path: '/update/:id',
    exact: true,
    component: Update
  },
  {
    path: '/look/:id',
    exact: true,
    component: Look
  }
]

export default () => {
  return (
    <Suspense fallback="loading......">
      <Switch>
        {
          routes.map(route => {
            const { path, exact, component } = route;
            const LayCom = component;
            return <Route path={path} key={path} exact={exact} render={() => <LayCom />}/>
          })
        }
      </Switch>
    </Suspense>
  )
}