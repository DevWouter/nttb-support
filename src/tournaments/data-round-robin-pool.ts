import { Match } from './match'
import { RoundRobinPool } from './round-robin-pool';

// Short hand to create a new Match
function M(home: number, away: number): Match {
  return new Match(home, away);
}

export const RoundRobinPool_3_Players: RoundRobinPool = {
  matches: [
    [M(2, 3)],
    [M(1, 3)],
    [M(1, 2)],
  ]
};

export const RoundRobinPool_4_Players: RoundRobinPool = {
  matches: [
    [M(1, 4), M(2, 3)],
    [M(1, 3), M(2, 4)],
    [M(1, 2), M(3, 4)],
  ]
};

export const RoundRobinPool_5_Players: RoundRobinPool = {
  matches: [
    [M(2, 5), M(3, 4)],
    [M(1, 5), M(2, 4)],
    [M(1, 4), M(2, 3)],
    [M(1, 3), M(4, 5)],
    [M(1, 2), M(3, 5)],
  ]
};

export const RoundRobinPool_6_Players: RoundRobinPool = {
  matches: [
    [M(1, 6), M(2, 5), M(3, 4)],
    [M(1, 5), M(2, 4), M(3, 6)],
    [M(1, 4), M(2, 3), M(5, 6)],
    [M(1, 3), M(2, 6), M(4, 5)],
    [M(1, 2), M(3, 5), M(4, 6)],
  ]
};

export const RoundRobinPool_7_Players: RoundRobinPool = {
  matches: [
    [M(2, 7), M(3, 6), M(4, 5)], // 1
    [M(1, 7), M(3, 5), M(4, 6)], // 2
    [M(2, 5), M(1, 6), M(4, 7)], // 3
    [M(1, 5), M(2, 6), M(3, 7)], // 4
    [M(1, 4), M(6, 7), M(2, 3)], // 5
    [M(5, 7), M(2, 4), M(1, 3)], // 6
    [M(5, 6), M(3, 4), M(1, 2)], // 7
  ]
};


export const RoundRobinPool_8_Players: RoundRobinPool = {
  matches: [
    [M(1, 8), M(2, 7), M(3, 6), M(4, 5)], // 1
    [M(1, 7), M(2, 6), M(3, 5), M(4, 8)], // 2
    [M(1, 6), M(2, 5), M(3, 8), M(4, 7)], // 3
    [M(1, 5), M(2, 8), M(3, 7), M(4, 6)], // 4
    [M(5, 8), M(6, 7), M(2, 3), M(1, 4)], // 5
    [M(6, 8), M(5, 7), M(2, 4), M(1, 3)], // 6
    [M(7, 8), M(5, 6), M(3, 4), M(1, 2)], // 7
  ]
};

export const RoundRobinPool_9_Players: RoundRobinPool = {
  matches: [
    [M(2, 9), M(3, 8), M(4, 7), M(5, 6)], // 1
    [M(1, 9), M(2, 8), M(3, 7), M(4, 6)], // 2
    [M(1, 8), M(2, 7), M(3, 6), M(4, 5)], // 3
    [M(1, 7), M(2, 6), M(3, 5), M(8, 9)], // 4
    [M(1, 6), M(2, 5), M(4, 9), M(7, 8)], // 5
    [M(1, 5), M(3, 9), M(4, 8), M(6, 7)], // 6
    [M(5, 9), M(6, 8), M(1, 4), M(2, 3)], // 7
    [M(5, 8), M(7, 9), M(1, 3), M(2, 4)], // 8
    [M(6, 9), M(5, 7), M(3, 4), M(1, 2)], // 9
  ]
};

export const RoundRobinPool_10_Players: RoundRobinPool = {
  matches: [
    [M(1, 10), M(2, 9), M(3, 8), M(4, 7), M(5, 6)], // 1
    [M(1, 9), M(2, 8), M(3, 7), M(4, 6), M(5, 10)], // 2
    [M(1, 8), M(2, 7), M(3, 6), M(4, 5), M(9, 10)], // 3
    [M(1, 7), M(2, 6), M(3, 5), M(4, 10), M(8, 9)], // 4
    [M(1, 6), M(2, 5), M(3, 10), M(4, 9), M(7, 8)], // 5
    [M(1, 5), M(2, 10), M(3, 9), M(4, 8), M(6, 7)], // 6
    [M(1, 4), M(2, 3), M(5, 9), M(6, 8), M(7, 10)], // 7
    [M(1, 3), M(2, 4), M(5, 8), M(6, 10), M(7, 9)], // 8
    [M(1, 2), M(3, 4), M(5, 7), M(6, 9), M(8, 10)], // 9
  ]
};

export const RoundRobinPool_11_Players: RoundRobinPool = {
  matches: [
    [M(2, 11), M(3, 10), M(4, 9), M(5, 8), M(6, 7)],
    [M(1, 11), M(2, 10), M(3, 9), M(4, 8), M(5, 7)],
    [M(1, 10), M(2, 9), M(3, 8), M(4, 7), M(5, 6)],
    [M(1, 9), M(2, 8), M(3, 7), M(4, 6), M(5, 11)],
    [M(1, 8), M(2, 7), M(3, 6), M(4, 5), M(10, 11)],
    [M(1, 7), M(2, 6), M(3, 5), M(4, 11), M(9, 10)],
    [M(1, 6), M(2, 5), M(3, 4), M(9, 11), M(8, 10)],
    [M(1, 5), M(2, 4), M(6, 11), M(7, 10), M(8, 9)],
    [M(1, 4), M(2, 3), M(6, 10), M(7, 9), M(8, 11)],
    [M(1, 3), M(4, 10), M(5, 9), M(6, 8), M(7, 11)],
    [M(1, 2), M(3, 11), M(5, 10), M(6, 9), M(7, 8)],
  ],
};


export const RoundRobinPool_12_Players: RoundRobinPool = {
  matches: [
    [M(1, 12), M(2, 11), M(3, 10), M(4, 9), M(5, 8), M(6, 7)],
    [M(1, 11), M(2, 10), M(3, 9), M(4, 8), M(5, 7), M(6, 12)],
    [M(1, 10), M(2, 9), M(3, 8), M(4, 7), M(5, 6), M(11, 12)],
    [M(1, 9), M(2, 8), M(3, 7), M(4, 6), M(5, 11), M(10, 12)],
    [M(1, 8), M(2, 7), M(3, 6), M(4, 5), M(9, 12), M(10, 11)],
    [M(1, 7), M(2, 6), M(3, 5), M(4, 11), M(8, 12), M(9, 10)],
    [M(1, 6), M(2, 5), M(3, 4), M(7, 12), M(8, 10), M(9, 11)],
    [M(1, 5), M(2, 4), M(3, 12), M(6, 11), M(7, 10), M(8, 9)],
    [M(1, 4), M(2, 3), M(5, 12), M(6, 10), M(7, 9), M(8, 11)],
    [M(1, 3), M(2, 12), M(4, 10), M(5, 9), M(6, 8), M(7, 11)],
    [M(1, 2), M(3, 11), M(4, 12), M(5, 10), M(6, 9), M(7, 8)],
  ]
};