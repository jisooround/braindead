export const goTo = (navigate: (path: string) => void, path?: string) => {
  if (!path) return;
  navigate(path);
};
