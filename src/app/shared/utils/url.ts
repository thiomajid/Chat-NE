import { QueryObject, withQuery } from 'ufo';

/**
 * Creates a route with parameters
 * @param route
 * @param params
 */
export function createRouteWithParams(
  route: string,
  params: Record<string, any>,
) {
  return route
    .split('/')
    .map((part) => (part.startsWith(':') ? params[part.slice(1)] : part))
    .join('/');
}

/**
 * Creates a route with the provided arguments such as query parameters and route parameters
 * @param route Route to create
 * @param args Arguments to use to create the route
 * @param queryParams Query parameters to add to the route
 */
export function createRouteWithArgs(
  route: string,
  args: Record<string, any>,
  queryParams?: QueryObject,
) {
  const hasQueryParams = route.includes('?');
  const hasArgs = route.includes(':');
  const hasBoth = hasQueryParams && hasArgs;

  if (hasBoth) {
    /**
     * query is the part of the route after the question mark
     * path is the part of the route before the question mark
     */
    const [path, query] = route.split('?');
    const routeWithParams = createRouteWithParams(path, args);

    return withQuery(routeWithParams, { ...queryParams });
  } else if (hasQueryParams) {
    const [path, query] = route.split('?');
    return withQuery(path, { ...queryParams });
  }

  return createRouteWithParams(route, args);
}
