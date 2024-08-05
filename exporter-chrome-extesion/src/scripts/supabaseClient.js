import { createClient } from '@supabase/supabase-js'

const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

const { data: user, error } = await supabase.from('todos').select('*')