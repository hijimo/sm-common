import { useMemo, useRef, useCallback } from 'react';
import _get from 'lodash/get';
import _memoize from 'lodash/memoize';
import useData from './useData';
import { getUserRoleMenu } from '../services/common';

const mapMenuToStandard = _memoize(
  (data: Array<any>, pathMap: Array<any>): Array<any> =>
    data == null
      ? []
      : data.map(d => ({
          ..._get(pathMap, `[${d.resourceKey}]`),
          // 当遇到没有指定resourceKey的菜单项时 当做外链处理 外链也为空时 当做404页面路由处理
          path: _get(pathMap, `[${d.resourceKey}].path`) || d.resourceUrl || '/404',
          icon: d.resourceIcon,
          children: mapMenuToStandard(d.children, pathMap),
          // target: '_blank'
        })),
);

const mapMenuToFlatten = (data: Array<any>): any =>
  (data || []).reduce(
    (memo, d) => (memo = { ...memo, [d.resourceKey]: true, ...mapMenuToFlatten(d.children) }),
    {},
  );

const generatePathMap = _memoize((data: Array<any>): any =>
  (data || []).reduce((memo, d) => {
    if (d.resourceKey == null) {
      memo = {
        ...memo,
        ...generatePathMap(d.children),
      };
    } else {
      memo = {
        ...memo,
        [d.resourceKey]: d,
        ...generatePathMap(d.children),
      };
    }
    return memo;
  }, {}),
);

const useMenu = () => {
  // resourceType传入0为只获取菜单
  const dataLoader = useCallback(() => getUserRoleMenu({ resourceType: 0 }), []);

  const { data, isLoading, isError } = useData(dataLoader, []);

  const flattenMenuData = useMemo(() => mapMenuToFlatten(data), [data]);

  const menuListRef = useRef<any>(null);

  const menuDataRender = (menuList: any) => {
    if (menuListRef.current === null && menuList !== null) {
      menuListRef.current = menuList;
    }

    // 此处由于menuList每次都不是同一个引用，虽然加了memoize但还是会重复计算，考虑使用useRef
    // 如果遇到菜单展示问题可以取消缓存或者修改缓存逻辑
    const pathMap = generatePathMap(menuListRef.current || []);

    const computedMenuData = mapMenuToStandard(data, pathMap);

    return computedMenuData;
  };

  return {
    data,
    isLoading,
    isError,
    flattenMenuData,
    menuDataRender,
  };
};

export default useMenu;
