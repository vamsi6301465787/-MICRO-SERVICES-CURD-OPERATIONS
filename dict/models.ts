/* eslint-disable */
// tslint:disable
/**
 * MICRO SERVICES CURD OPERATIONS
 * 
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator+.
 * https://github.com/karlvr/openapi-generator-plus
 * Do not edit the class manually.
 */

export namespace Api {
	/**
	 * <p>ResponseInStatusCode</p>
	 */
	export interface ApiResponse {
		/**
		 * @type {number}
		 * @memberof ApiResponse
		 */
		code?: number;
		type?: string;
		message?: string;
	}

	export interface BODYDATA {
		topicid?: string;
		questionid?: string;
		question?: string;
		option1?: string;
		option2?: string;
		option3?: string;
		option4?: string;
	}

}
