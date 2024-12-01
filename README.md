# Advent of Code 2024

This is my attempt to participate in [the 2024 edition of the Advent of Code](https://adventofcode.com/2024). For this
year, like others, I try to resolve every puzzle in JavaScript, with Node.js engine. This year, I use **Node.js 22**,
current LTS.

## Installing and running the project

You can install the project and run it on your side if you want. You'll need `npm` and `node.js` (at least version `22.11.0`,
older ones could work, but don't have been tested).

First, you can clone the project :
```shell
git clone https://www.github.com/yanbuatois/advent-of-code-2024.git
```

Then, go into the cloned folder, and `install` the few dependencies :

```shell
cd advent-of-code-2024
npm install
```

When the process is ended, you can put your `input` in a text file named `input` in the folder of the corresponding day.
It's required to run the project as it doesn't provide any input.

Then you can run the script corresponding to the day you want to run, using the start script, like this :
```shell
npm start -- 1 # example for the first day, but the logic is the same for every following day.
```

Please not that each day runs the two parts of the day.

## License

This software is provided under the [Anti-Capitalist Software License](./LICENSE).
