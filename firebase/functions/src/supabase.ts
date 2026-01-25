import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

if (!supabaseUrl) {
  throw new Error('Supabase configuration error: SUPABASE_URL environment variable is not set.');
}

if (!supabaseAnonKey) {
  throw new Error('Supabase configuration error: SUPABASE_ANON_KEY environment variable is not set.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
// test with npx tsx src/supabase.ts
// async function test() {
//   const { data, error } = await supabase.from('users').select('*').limit(5);
//   if (error) console.error('Supabase error:', error);
//   else console.log('Data:', data);
// }

// test();
