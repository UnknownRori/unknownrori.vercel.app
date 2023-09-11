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
      projects: {
        Row: {
          created_at: string
          description: string
          img_url: string
          source_url: string | null
          title: string
          uuid: string
        }
        Insert: {
          created_at?: string
          description: string
          img_url: string
          source_url?: string | null
          title: string
          uuid?: string
        }
        Update: {
          created_at?: string
          description?: string
          img_url?: string
          source_url?: string | null
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
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
