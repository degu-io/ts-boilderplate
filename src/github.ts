/*
 * Returns a list of GitHub repositories for a given username or organization
 * via the GitHub API.
 */
export const getListOfRepositories = async (
  username: string
): Promise<string[]> => {
  const url = `https://api.github.com/users/${username}/repos`;
  const response = await fetch(url);
  const listJson = (await response.json()) as Record<
    string,
    string | Record<string, string>
  >[];

  const listOfRepos = [
    ...new Set(listJson.map((repo) => repo.name)),
  ] as string[];

  return listOfRepos;
};
