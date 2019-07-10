const heroes = [
    "spider-man",
    "black widow",
    "hawk-eye",
    "black panther",
    "happy"
];

console.log("there are " + heroes.length + " "+ "heroes");

heroes[0] = "cookie monster";

heroes[0].push("elmo");

console.log(heroes.length);

heroes.pop(4);

console.log(heroes[1]);

