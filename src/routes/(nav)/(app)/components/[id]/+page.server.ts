import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
 
export const load =  (async ({ params, fetch }) => {
  let response = await fetch(`/docs/${params.id}.api.json`);
  if (response.status==200){
    const data = await response.json();
    return {
      componentData:data
    };
  }
  throw error(404, 'Not found')
}) satisfies PageServerLoad;