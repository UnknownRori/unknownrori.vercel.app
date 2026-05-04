export type ProjectType = 'music' | 'game' | 'web' | 'app' | 'library' | 'artwork';

export interface Project {
  name: string,
  description: string,
  tags: string[],
  imgUrl: string,
  type: ProjectType,

  sourceCode?: string,
  previewUrl?: string,
  pixiv?: string,
  itchIo?: string,
}
