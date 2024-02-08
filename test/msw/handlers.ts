import { HttpResponse, http } from 'msw';

export const githubHandler = (url: string) =>
  http.get(url, () => {
    return HttpResponse.json([
      { name: 'repo1' },
      { name: 'repo2' },
      { name: 'repo3' },
      { name: 'repo4' },
      { name: 'repo5' },
    ]);
  });
