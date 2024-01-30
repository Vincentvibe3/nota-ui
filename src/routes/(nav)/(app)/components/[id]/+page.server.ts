import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
 
export const load =  (async ({ params, fetch }) => {
  const response = await fetch(`/docs/${params.id}.api.json`);
  if (response.status === 200){
    const data = await response.json();
    return {
      componentData:data
    };
  }
  error(404, 'Not found');
}) satisfies PageServerLoad;