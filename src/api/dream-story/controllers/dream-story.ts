import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::dream-story.dream-story', ({ strapi }) => ({
  async findOne(ctx) {
    const { id } = ctx.params;
    const sanitizedQueryParams = await this.sanitizeQuery(ctx);

    try {
      const entity = await strapi.service('api::dream-story.dream-story').findOneBySlug(id, sanitizedQueryParams);

      if (!entity) {
        return ctx.notFound('Dream story not found');
      }

      const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

      return this.transformResponse(sanitizedEntity);
    } catch (err) {
      return ctx.internalServerError('An error occurred while fetching the dream story');
    }
  }
}));
