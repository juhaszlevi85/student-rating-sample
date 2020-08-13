"use strict";

// const winston = require("winston");
// const logger = winston.createLogger({
// 	transports: [
// 		new winston.transports.Console(),
// 		new winston.transports.File({
// 			filename: "./logs/error.log",
// 			level: "error",
// 			format: winston.format.logstash(),
// 		}),
// 	],
// });
/**
 * @typedef {import('moleculer').Context} Context Moleculer's Context
 */

module.exports = {
	name: "greeter",

	/**
	 * Settings
	 */
	settings: {},

	/**
	 * Dependencies
	 */
	dependencies: [],

	/**
	 * Actions
	 */
	actions: {
		/**
		 * Say a 'Hello' action.
		 *
		 * @returns
		 */
		hello: {
			rest: {
				method: "GET",
				path: "/hello",
			},
			async handler(ctx) {
				this.logger.error("Failed to call the 'hello' action!");
				return "Hello Moleculer";
			},
		},

		/**
		 * Welcome, a username
		 *
		 * @param {String} name - User name
		 */
		welcome: {
			rest: "/welcome",
			params: {
				name: {
					type: "string",
					optional: true,
				},
				number: {
					type: "number",
					optional: true,
				},
			},
			/** @param {Context} ctx  */
			async handler(ctx) {
				if (!ctx.params.name) {
					this.logger.error(
						"ERROR: You need to pass any string value!"
					);
				} else if (!isNaN(ctx.params.number)) {
					this.logger.warn(
						"WARN: Please provide some name instead of number!"
					);
				} else {
					this.logger.info(
						`It's OK! The welcome parameter is ${ctx.params.name}`
					);
				}
				return `Welcome, ${ctx.params.name}`;
			},
		},
	},

	/**
	 * Events
	 */
	events: {},

	/**
	 * Methods
	 */
	methods: {},

	/**
	 * Service created lifecycle event handler
	 */
	created() {},

	/**
	 * Service started lifecycle event handler
	 */
	async started() {},

	/**
	 * Service stopped lifecycle event handler
	 */
	async stopped() {},
};
