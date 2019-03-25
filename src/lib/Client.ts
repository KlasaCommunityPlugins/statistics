// Copyright (c) 2018-2019 KlasaCommunityPlugins. All rights reserved. MIT license.
import { Client, KlasaClientOptions, util } from 'klasa';

import { OPTIONS } from './util/CONSTANTS';

/**
 * The client for handling everything. See {@tutorial GettingStarted} for more information how to get started using this class.
 * @extends external:KlasaClient
 * @tutorial GettingStarted
 */
export class StatisticsClient extends Client {

	/**
	 * @typedef {external:KlasaClientOptions} StatisticsClientOptions
	 * @property {StatisticsOptions} [statistics={}]
	 */

	/**
	 * @typedef {Object} StatisticsOptions
	 */

	/**
	 * Constructs the statistics client.
	 * @since 0.0.1
	 * @param {StatisticsClientOptions} options The config to pass to the new client
	 */
	constructor(options?: KlasaClientOptions) {
		super(options);
		// @ts-ignore
		this.constructor[Client.plugin].call(this);
	}

	static [Client.plugin]() {
		const typedThis = this as unknown as StatisticsClient;
		util.mergeDefault(OPTIONS, typedThis.options);
	}

}

declare module 'discord.js' {
	interface ClientOptions {
		statistics: {
		};
	}
}
