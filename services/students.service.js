"use strict";

// const winston = require("winston");
// const Elasticsearch = require("winston-elasticsearch");
// const logstashTcpWins = require("logstash-tcp-wins");

// const esTransportOpts = {
// 	level: "info",
// 	clientOpts: {
// 		host: "http://elk.apps.okd.codespring.ro",
// 		log: "info",
// 	},
// 	indexPrefix: "jlevi",
// };
// const logger = winston.createLogger({
// 	transports: [
// 		new Elasticsearch(esTransportOpts),
// 		new logstashTcpWins({ host: "127.0.0.1", port: 5000 }),
// 	],
// });

/**
 * @typedef {import('moleculer').Context} Context Moleculer's Context
 */

module.exports = {
	name: "students",

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
		eluxstudents: {
			rest: {
				method: "GET",
				path: "/eluxstudents",
			},
			async handler() {
				return {
					students: [
						{ name: "Isti" },
						{ name: "JLevi" },
						{ name: "KLevi" },
						{ name: "Piro" },
						{ name: "Réka" },
					],
				};
			},
		},
		randomstudent: {
			rest: {
				method: "GET",
				path: "/randomstudent",
			},
			async handler() {
				const student = ["Isti", "JLevi", "KLevi", "Piro", "Reka"];
				const studentId = Math.floor(Math.random() * student.length);
				const score = Math.floor(Math.random() * 10);

				this.logger.info("Get random user: " + student[studentId]);
				return { name: student[studentId], score };
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
