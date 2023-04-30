import { createClient } from 'next-sanity';

type GeneralContent = {
  title: string;
}

const client = createClient({
  projectId: "7422fbll",
  dataset: "production",
  apiVersion: "2023-03-04",
  useCdn: false,
});

const getPage = async (page: string) => {
  const content = await client.fetch(`*[_type == "${page}"]`);
  return content;
};

export {
  getPage,
};
