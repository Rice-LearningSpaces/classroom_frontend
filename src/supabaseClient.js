import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://tfhhstwboksdmjlhwgic.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRmaGhzdHdib2tzZG1qbGh3Z2ljIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc3NTIyNzYsImV4cCI6MjA1MzMyODI3Nn0.t8Q8lTBjMqxdbTnOJvdg6tS281ulpC-bSqFUZQ5aoT8';

export const supabase = createClient(supabaseUrl, supabaseKey);