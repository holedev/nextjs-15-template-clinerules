export const animals = [
  'Aardvark', 'Albatross', 'Alligator', 'Alpaca', 'Ant', 'Anteater', 'Antelope', 'Ape', 'Armadillo', 'Baboon',
  'Badger', 'Barracuda', 'Bat', 'Bear', 'Beaver', 'Bee', 'Bison', 'Boar', 'Buffalo', 'Butterfly',
  'Camel', 'Capybara', 'Caribou', 'Cassowary', 'Cat', 'Caterpillar', 'Cattle', 'Chamois', 'Cheetah', 'Chicken',
  'Chimpanzee', 'Chinchilla', 'Clam', 'Cobra', 'Coyote', 'Crab', 'Crane', 'Crocodile', 'Crow', 'Deer',
  'Dinosaur', 'Dog', 'Dogfish', 'Dolphin', 'Donkey', 'Dove', 'Dragonfly', 'Duck', 'Dugong', 'Eagle',
  'Echidna', 'Eel', 'Elephant', 'Elk', 'Emu', 'Falcon', 'Ferret', 'Finch', 'Fish', 'Fox',
  'Frog', 'Gazelle', 'Gerbil', 'Giraffe', 'Goat', 'Goose', 'Gorilla', 'Grasshopper', 'Grouse', 'Guanaco',
  'Guinea Pig', 'Hamster', 'Hare', 'Hawk', 'Hedgehog', 'Heron', 'Hippopotamus', 'Hornet', 'Horse', 'Hummingbird',
  'Hyena', 'Iguana', 'Jackal', 'Jaguar', 'Jellyfish', 'Kangaroo', 'Koala', 'Komodo Dragon', 'Lama', 'Lamb',
  'Leopard', 'Lion', 'Lizard', 'Llama', 'Lobster', 'Locust', 'Lynx', 'Magpie', 'Mallard', 'Manatee'
];

export function getRandomAnimal(): string {
  const randomIndex = Math.floor(Math.random() * animals.length);
  return animals[randomIndex];
}

export function getRandomAnimals(count: number = 1): string[] {
  if (count < 1) count = 1;
  if (count > animals.length) count = animals.length;
  
  const shuffled = [...animals].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}