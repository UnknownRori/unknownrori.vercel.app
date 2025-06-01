export type ProjectType = 'music' | 'game' | 'web' | 'app' | 'library';

export interface Project {
  name: string,
  description: string,
  tags: string[],
  imgUrl: string,
  type: ProjectType,

  sourceUrl?: string,
  previewUrl?: string,
}
