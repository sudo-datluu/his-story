const hisStorySupabaseSupabase = {
    supabaseClient: null,
    
    // Get the Supabase client
    getClient: async () => {
        if (!hisStorySupabase.supabaseClient) {
            const supabaseUrl = 'https://dnltcinntgbuzxcnfcrd.supabase.co'
            const supabaseKey = await new Promise((resolve) => {
                chrome.storage.sync.get(['supabaseAPIKey'], (result) => {
                    resolve(result.supabaseAPIKey);
                });
            });
            hisStorySupabase.supabaseClient = supabase.createClient(supabaseUrl, supabaseKey)
        }
        return hisStorySupabase.supabaseClient
    },

    // Get the user
    getUser: async (userID) => {
        const supabaseClient = await hisStorySupabase.getClient();
        
        const { data, error } = await supabaseClient
            .from('app-users')
            .select('*')
            .eq('id', userID);

        if (error) {
            console.error(error)
            return null
        }
        return data
    }
}

export default hisStorySupabase;