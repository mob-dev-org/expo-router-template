import 'react-native-url-polyfill/auto';

// It is recommended that you re-use this instance throughout your entire app instead of creating a new instance each time, so export the storage object.
// use it for persisting store, instead of async storage

import { createClient } from '@supabase/supabase-js';
import { zustandStorage } from '@src/stores/persistStorage';

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl || '', supabaseAnonKey || '', {
    auth: {
        storage: zustandStorage,
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: false,
    },
});
