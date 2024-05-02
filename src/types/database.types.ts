export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      achievements: {
        Row: {
          created_at: string
          description: string
          id: number
          requirements: Json | null
          reward_points: number
          reward_xp: number
          title: string
        }
        Insert: {
          created_at?: string
          description?: string
          id?: number
          requirements?: Json | null
          reward_points?: number
          reward_xp?: number
          title?: string
        }
        Update: {
          created_at?: string
          description?: string
          id?: number
          requirements?: Json | null
          reward_points?: number
          reward_xp?: number
          title?: string
        }
        Relationships: []
      }
      challenges: {
        Row: {
          answers: string[]
          created_at: string
          difficulty: Database["public"]["Enums"]["Difficulty"]
          durations: number
          id: number
          question: string
          reward_points: number
          reward_xp: number
          snippet: string | null
          topics: string
          user_ids: number[]
        }
        Insert: {
          answers?: string[]
          created_at?: string
          difficulty?: Database["public"]["Enums"]["Difficulty"]
          durations: number
          id?: number
          question?: string
          reward_points?: number
          reward_xp?: number
          snippet?: string | null
          topics: string
          user_ids: number[]
        }
        Update: {
          answers?: string[]
          created_at?: string
          difficulty?: Database["public"]["Enums"]["Difficulty"]
          durations?: number
          id?: number
          question?: string
          reward_points?: number
          reward_xp?: number
          snippet?: string | null
          topics?: string
          user_ids?: number[]
        }
        Relationships: []
      }
      students: {
        Row: {
          achievements: number[]
          challenges_completed: number[]
          created_at: string
          current_xp: number
          has_failed_challenge: boolean
          has_finished_challenge: boolean
          id: number
          last_challenge_timestamp: string | null
          level: number
          points: number
          rank: Database["public"]["Enums"]["Ranks"]
          streaks: number
          total_challenges_completed: number
          user_id: string | null
          username: string | null
        }
        Insert: {
          achievements: number[]
          challenges_completed?: number[]
          created_at?: string
          current_xp?: number
          has_failed_challenge?: boolean
          has_finished_challenge?: boolean
          id?: number
          last_challenge_timestamp?: string | null
          level?: number
          points?: number
          rank?: Database["public"]["Enums"]["Ranks"]
          streaks?: number
          total_challenges_completed?: number
          user_id?: string | null
          username?: string | null
        }
        Update: {
          achievements?: number[]
          challenges_completed?: number[]
          created_at?: string
          current_xp?: number
          has_failed_challenge?: boolean
          has_finished_challenge?: boolean
          id?: number
          last_challenge_timestamp?: string | null
          level?: number
          points?: number
          rank?: Database["public"]["Enums"]["Ranks"]
          streaks?: number
          total_challenges_completed?: number
          user_id?: string | null
          username?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "students_user_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      Difficulty: "Easy" | "Medium" | "Hard"
      Ranks: "Beginner" | "Intermediate" | "Advanced" | "Master"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
