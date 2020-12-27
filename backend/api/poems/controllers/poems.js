'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/controllers.html#core-controllers)
 * to customize this controller
 */
const { sanitizeEntity } = require('strapi-utils');

const poemSliceSend = (poemList) => {
  if (poemList.length > 10) {
    return(poemList.slice(0,10))
  } else {
    return(poemList)
  }
}

const findPoemFunc = (data, searchText) => {
  const lowerCaseText = searchText.toLowerCase()
  const foundPoems = data.reduce((sum, item) => {
    const poem = item.text
    const hasText = poem.includes(searchText)
    if (!hasText) return sum
    return sum.concat(item)
  }, [])
  const foundPoems2 = data.reduce((sum, item) => {
    const text = item.text
    const hasText = text.includes(lowerCaseText)
    if (!hasText) return sum

    if (foundPoems.includes(item)) {
      return sum
    }
    return sum.concat(item)
  }, [])
  const searchResult = foundPoems.concat(foundPoems2);
  return searchResult
}

module.exports = {
  async findOne(ctx) {
    const { poem_name, searchText, searchText2 } = ctx.params;
    let entities;
    entities = await strapi.services.poems.findOne({ poem_name });
    entities = entities.poems

    const foundPoems = findPoemFunc(entities, searchText)

    if (foundPoems.length !== 0) {
      const foundPoems2 = findPoemFunc(foundPoems, searchText2)
      if (foundPoems2.length !== 0) {
        entities = poemSliceSend(foundPoems2);
      } else {
        entities = poemSliceSend(foundPoems);
      }
    } else {
      entities = foundPoems;
    }

    // return entities.map(entity => sanitizeEntity(entity, { model: strapi.models.poems }));
    return sanitizeEntity(entities, { model: strapi.models.poems });
  },
};
