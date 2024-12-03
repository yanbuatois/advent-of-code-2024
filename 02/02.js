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

console.timeEnd('init');
console.time('part 1');
const safeReports = input.filter(
	(report) =>
		!report.reduce(
			({ invalid, previous, evolution }, level, i) => {
				if (i === 0 || invalid) {
					return {
						invalid,
						previous: level,
						evolution,
					};
				} else {
					const newEvolution = level - previous;
					return {
						invalid:
							(evolution !== undefined && newEvolution * evolution <= 0) || Math.abs(newEvolution) > 3,
						previous: level,
						evolution: newEvolution,
					};
				}
			},
			{ invalid: false, previous: undefined, evolution: undefined },
		).invalid,
);

console.log(`There is ${safeReports.length.toString().yellow} safe reports`);

console.timeEnd('part 1');
console.time('part 2');
const newSafeReports = input.filter(
	(report) =>
		!report.reduce(
			({ invalid, previous, evolution, previousPrevious, alreadyRemoved }, level, i) => {
				if (i <= 1 || invalid) {
					return {
						invalid,
						previous: level,
						previousPrevious: previous,
						evolution,
						alreadyRemoved,
					};
				} else {
					const newEvolution = level - previous;
					const newInvalidFirst =
						(evolution !== undefined && newEvolution * evolution <= 0) || Math.abs(newEvolution) > 3;
					if (!newInvalidFirst || alreadyRemoved || previousPrevious === undefined) {
						return {
							invalid: newInvalidFirst,
							previous: level,
							previousPrevious: previous,
							evolution: newEvolution,
							alreadyRemoved,
						};
					}
					const newNewEvolution = level - previousPrevious;
					const newNewInvalid =
						(evolution !== undefined && newNewEvolution * evolution <= 0) || Math.abs(newNewEvolution) > 3;
					return {
						invalid: newNewInvalid,
						previous: level,
						previousPrevious: previous,
						evolution: newNewEvolution,
						alreadyRemoved: true,
					};
				}
			},
			{
				invalid: 0,
				previous: undefined,
				previousPrevious: undefined,
				evolution: undefined,
				alreadyRemoved: false,
			},
		).invalid,
); // ?
console.timeEnd('part 2');
console.timeEnd('main');
