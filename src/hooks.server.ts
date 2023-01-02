import type { HandleFetch } from '@sveltejs/kit';
 
export const handleFetch = (async ({ event, request, fetch }) => {
  console.log(request.headers.get('user-agent'));
}) satisfies HandleFetch;