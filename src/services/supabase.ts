import { createClient } from '@supabase/supabase-js'

export const supabaseUrl = 'https://yzldumjsikdcvhvippif.supabase.co'
const supabaseKey =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl6bGR1bWpzaWtkY3ZodmlwcGlmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDEzNTk1MTEsImV4cCI6MjAxNjkzNTUxMX0.4OSVrG5g2k5TEUSNcRMwIS757ZhN14IFdoEyw6wm7F8'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase
