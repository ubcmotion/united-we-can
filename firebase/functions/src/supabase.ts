import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!
);

// test with npx tsx src/supabase.ts
// async function test() {
//   const { data, error } = await supabase.from('users').select('*').limit(5);
//   if (error) console.error('Supabase error:', error);
//   else console.log('Data:', data);
// }

// test();
