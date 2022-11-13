import Item from './item';
import ItemsList from './items-list'
import './index.scss'
import 'normalize.css'

const itemsList = ItemsList();
document.body.appendChild(itemsList)

const item1Element = Item();
itemsList.appendChild(item1Element)
