import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
 
export const load =  (async ({ fetch }) => {
  const response = await fetch(`/components.json`);
  if (response.status === 200){
    const data = await response.json();
    return {
      names:data
    };
  }
  error(404, 'Not found');
}) satisfies PageServerLoad;