/**
 * dream-story service
 */

import { factories } from '@strapi/strapi';


export default factories.createCoreService('api::dream-story.dream-story', ({ strapi }) => ({
  async findOneBySlug(slug: string, query: Record<string, any>) {
    const entities = await strapi.entityService.findMany('api::dream-story.dream-story', {
      filters: { slug },
      ...query,
    });

    return entities.length > 0 ? entities[0] : null;
  },
}));
