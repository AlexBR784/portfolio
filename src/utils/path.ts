/**
 * Utility functions to handle paths with basePath for GitHub Pages deployment
 */

/**
 * Adds the basePath prefix to a path
 * @param path The original path starting with "/"
 * @returns The path with basePath prefix
 */
export function getPath(path: string): string {
  // Get basePath from next.config.js (hardcoded for simplicity)
  const basePath = '/portfolio';
  
  // Make sure the path starts with '/'
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  
  // Return the path with basePath prepended
  return `${basePath}${normalizedPath}`;
}

