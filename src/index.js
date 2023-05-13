const { TypeHolder } = require('./type-holder')

/**
 * @type {TypeHolder<number>}
 */
const number = new TypeHolder()

/**
 * @type {TypeHolder<string>}
 */
const string = new TypeHolder()

/**
 * @type {TypeHolder<boolean>}
 */
const boolean = new TypeHolder()

module.exports = { TypeHolder, number, string, boolean }
