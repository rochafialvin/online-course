
// 0.000 - 0.999
var rand = Math.random()
// 000.0 - 099.9
// 0.0 - 99.9
var randTimesHund = rand * 100
// 0 - 99
var randFloor = Math.floor(randTimesHund)
// 1 - 100
var randFinal = randFloor + 1

document.write(rand);
