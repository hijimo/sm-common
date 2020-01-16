import React from 'react';
import Redirect from 'umi/redirect';
import pathToRegexp from 'path-to-regexp';
import { RouteContext } from '@ant-design/pro-layout';
import Authorized from '@/utils/Authorized';
import ForbiddenPage from '@common/components/403';

const getRouteAuthority = (path, routeData) => {
  let authorities;
  routeData.forEach(route => {
    // match prefix
    if (pathToRegexp(`${route.path}(.*)`).test(path)) {
      // exact match
      if (route.path === path) {
        authorities = route.resourceKey || authorities;
      } // get children authority recursively

      if (route.routes) {
        authorities = getRouteAuthority(path, route.routes) || authorities;
      }
    }
  });
  return authorities;
};

// 当本地路由里面没有指定resouceKey的时候 默认能访问页面
const checkAuthority = (authority, flattenMenuData) =>
  authority == null ? true : flattenMenuData[authority];

const AuthComponent = ({
  children,
  route = {
    routes: [],
  },
  location = {
    pathname: '',
  },
}) => {
  const { routes = [] } = route;

  const authority = getRouteAuthority(location.pathname, [route, ...routes]);

  return (
    <RouteContext.Consumer>
      {({ flattenMenuData }) => {
        return checkAuthority(authority, flattenMenuData) ? children : <ForbiddenPage />;
      }}
    </RouteContext.Consumer>
  );
};

export default AuthComponent;
