import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import 'colors';

console.time('main');
console.time('init');

const input = fs
	.readFileSync(path.resolve(path.dirname(fileURLToPath(import.meta.url)), 'input'), {
		encoding: 'utf-8',
	})
	.trim()
	.split('\n')
	.map((line) =>
		line
			.trim()
			.split(/\s+/)
			.map((number) => +number.trim()),
	);

const columns = input.reduce(
	([leftAcc, rightAcc], [left, right]) => [
		[...leftAcc, left],
		[...rightAcc, right],
	],
	[[], []],
);

console.timeEnd('init');
console.time('part 1');
const sortedColumns = columns.map((column) => column.toSorted((a, b) => a - b));

const distances = sortedColumns[0].map((left, i) => Math.abs(left - sortedColumns[1][i]));

const distancesSum = distances.reduce((acc, res) => acc + res);

console.log(`The total distance between the lists is ${distancesSum.toString().yellow}`);

console.timeEnd('part 1');
console.time('part 2');

const similarities = columns[0].map((left) => left * columns[1].filter((number) => number === left).length);

const similarityScore = similarities.reduce((acc, similarity) => acc + similarity);

console.log(`The total similarity score of the list is ${similarityScore.toString().green}.`);

console.timeEnd('part 2');
console.timeEnd('main');
