import SanityClient from '@sanity/client';

// ============================================================================

export const client = new SanityClient({
    projectId: process.env.SANITY_PROJECT_ID,
    dataset: process.env.SANITY_DATASET,
    useCdn: true, // set to `true` to fetch from edge cache
    apiVersion: '2023-02-09', // use current date (YYYY-MM-DD) to target the latest API version
    // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
});

// ============================================================================

export const projectionVideoListItem = `{
    _id,
    title,
    'tags': tags[]->{
        "value": name,
        "label": title
    },
    release,
    "cover": cover.asset->url + '?auto=format&w=600&q=50',
    links
}`;
