import { getListOfRepositories } from '../src/github';

/*
 * MSW allows use to mock the fetch request to the GitHub API.
 * We setup this up in a separate file so we can reuse it in multiple tests
 * Here we call the handler for github
 */

import { server } from './msw/server';
import { githubHandler } from './msw/handlers';

describe('getListOfRepositories', () => {
  beforeAll(() =>
    // https://mswjs.io/docs/api/setup-server/listen
    server.listen({
      onUnhandledRequest: 'error', // this can be set to 'warn', 'error' or 'bypass'
    })
  );
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  test('returns list length 5', async () => {
    const username = 'degu-io';
    const url = `https://api.github.com/users/${username}/repos`;

    // we use the github handler we've defined in the handlers.ts file
    server.use(githubHandler(url));

    const repos = await getListOfRepositories(username);
    expect(repos.length).toBe(5);
  });
});
