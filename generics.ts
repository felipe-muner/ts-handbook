//npx ts-node - to run

function simpleState<T>(initial: T): [() => T, (v: T) => void] {
  let val: T = initial;
  return [
    () => val,
    (v: T) => {
      val = v;
    },
  ];
}

const [getter, setter] = simpleState<string | null>("123");

console.log(getter());
setter("felipe");
console.log(getter());

interface Rank<RankItem> {
  item: RankItem;
  rank: number;
}

function ranker<RankItem>(
  items: RankItem[],
  rank: (v: RankItem) => number
): RankItem[] {
  const ranks: Rank<RankItem>[] = items.map((item) => ({
    item,
    rank: rank(item),
  }));
  ranks.sort((a, b) => b.rank - a.rank);

  return ranks.map((rank) => rank.item);
}

interface Pokemon {
  name: string;
  hp: number;
}
const pokemon: Pokemon[] = [
  { name: "Bulbasaur", hp: 20 },
  { name: "MegaSaur", hp: 5 },
];

const ranks = ranker(pokemon, ({ hp }) => hp);
console.log(ranks)
