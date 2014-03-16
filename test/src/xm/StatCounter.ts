/// <reference path="../../_ref.d.ts" />

import chai = require('chai');
import assert = chai.assert;

import StatCounter = require('../../../src/xm/lib/StatCounter');

export function assertion(stat: StatCounter, values: any, message: string) {
	assert.isObject(stat, message + ': stat');
	assert.isObject(values, message + ': values');
	assert.instanceOf(stat, StatCounter, message + ': stat');

	var obj = {};
	// only check required values? hmm...
	Object.keys(values).forEach((key: string) => {
		// if (stat.has(key)) {
		obj[key] = stat.get(key);
		//}
	});
	assert.deepEqual(obj, values, message + ': stat');
}
