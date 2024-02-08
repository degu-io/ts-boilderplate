import { getListOfRepositories } from './github';

const main = async () => {
  const username = 'degu-io';
  const repos = await getListOfRepositories(username);
  console.log(repos);
};

main();
