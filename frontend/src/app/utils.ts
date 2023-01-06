export const url = 'http://localhost:3000'

export const updateUrl = (newUrl: string) => {
  const nextURL = `${url}${newUrl}`;
  const nextTitle = '';
  const nextState = { };

  window.history.pushState(nextState, nextTitle, nextURL);
  window.history.replaceState(nextState, nextTitle, nextURL);
}


