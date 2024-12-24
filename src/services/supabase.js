import { createClient } from "@supabase/supabase-js";

// https://mgqqnysonzggudousjlm.supabase.co/storage/v1/object/public/avatats/3795147.jpg?t=2024-11-18T13%3A31%3A03.286Z

export const supabaseUrl = "https://mgqqnysonzggudousjlm.supabase.co";

const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1ncXFueXNvbnpnZ3Vkb3VzamxtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzAxOTE2NDMsImV4cCI6MjA0NTc2NzY0M30.krQqh15NpIZSATNYkvS2_AcMHhY6lkDyh73P0KLFmFY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
