'use strict'

/**
 * @template T
 */
class TypeHolder {
	constructor() {
		const FUNC_PARAM_DEFAULT_VALUE = undefined

		/**
		 * @type {T}
		 */
		// @ts-ignore
		this.nonnull = FUNC_PARAM_DEFAULT_VALUE

		/**
		 * @type {T?}
		 */
		// @ts-ignore
		this.nullable = FUNC_PARAM_DEFAULT_VALUE

		/**
		 * @type {T[]}
		 */
		// @ts-ignore
		this.array = FUNC_PARAM_DEFAULT_VALUE
	}

	/**
	 * @deprecated Assign value directly instead
	 * @param {T} value
	 * @returns {T}
	 */
	ofNonnull(value) {
		return value
	}

	/**
	 * @param {T?} value
	 * @returns {T?}
	 */
	ofNullable(value) {
		return value
	}

	/**
	 * @param {T[]} array
	 * @returns {T[]}
	 */
	ofArray(array) {
		return array
	}
}

module.exports = { TypeHolder }
