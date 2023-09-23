type Project = {
  created_at: string;
  deployment_url: string | null;
  description: string;
  featured: boolean;
  img_url: string;
  lang: string | null;
  source_url: string | null;
  tags: string | null;
  title: string;
  uuid: string;
};

export default Project;
