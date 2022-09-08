import { NumbersCollection } from "./NumberCollection";
import { CharactersCollection } from "./CharactersCollection";
import {LinkedList} from './LinkedList';

const numbersCollections = new NumbersCollection([10, 3, -5, 0]);
numbersCollections.sort();
console.log(numbersCollections.data);

const charactersCollection = new CharactersCollection('Xaayb');
charactersCollection.sort();
console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);

linkedList.sort();
linkedList.print();