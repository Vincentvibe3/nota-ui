import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
 
export const load =  (async ({ url, params }) => {
  let response = await fetch(`${url.origin}/docs/${params.id}.api.json`);
  if (response.status==200){
    const data = await response.json();
    return {
      componentData:data
    };
  }
  throw error(404, 'Not found')
}) satisfies PageLoad;