export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      posts: {
        Row: {
          body: string
          cover_img: string | null
          created_at: string
          slug: string
          tags: string | null
          title: string
          uuid: string
        }
        Insert: {
          body: string
          cover_img?: string | null
          created_at?: string
          slug: string
          tags?: string | null
          title: string
          uuid?: string
        }
        Update: {
          body?: string
          cover_img?: string | null
          created_at?: string
          slug?: string
          tags?: string | null
          title?: string
          uuid?: string
        }
        Relationships: []
      }
      projects: {
        Row: {
          created_at: string
          deployment_url: string | null
          description: string
          featured: boolean
          img_url: string
          lang: string | null
          source_url: string | null
          tags: string | null
          title: string
          uuid: string
        }
        Insert: {
          created_at?: string
          deployment_url?: string | null
          description: string
          featured?: boolean
          img_url: string
          lang?: string | null
          source_url?: string | null
          tags?: string | null
          title: string
          uuid?: string
        }
        Update: {
          created_at?: string
          deployment_url?: string | null
          description?: string
          featured?: boolean
          img_url?: string
          lang?: string | null
          source_url?: string | null
          tags?: string | null
          title?: string
          uuid?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_my_claim: {
        Args: {
          claim: string
        }
        Returns: Json
      }
      get_my_claims: {
        Args: Record<PropertyKey, never>
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
