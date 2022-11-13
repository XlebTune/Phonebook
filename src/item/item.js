import ItemTelefonImg from './telefon-iconka.png'
import ItemPoiskImg from './poisk-iconka.png'
import ItemIconAvatarImg from './avatar-iconka.png'
import ItemKrestBlackImg from './black-krest-iconka.png'
import ItemHeartPustoeImg from './pustoe-heart-iconka.png'

import './item.scss'



const Item = (onAdd) => {

    const ItemElement = document.createElement('div')
    ItemElement.className = 'item'

    const PhoneElement = document.createElement('div')
    PhoneElement.className = 'PhoneElement'

    const TelefonImageElement = document.createElement('img')
    TelefonImageElement.className = 'telefon_image'
    TelefonImageElement.src = ItemTelefonImg;

    const PoiskElement = document.createElement('input')
    PoiskElement.className = 'item_poisk'
    PoiskElement.src = ItemPoiskImg;

    const CardContactsElement = document.createElement('div')
    CardContactsElement.className = 'card_for_contacts'
    
    const ContactCard1Element = document.createElement('div')
    ContactCard1Element.className = 'card_for_contacts-1'
    const ContactCard2Element = document.createElement('div')
    ContactCard2Element.className = 'card_for_contacts-2'
    
    const Avatar1Element = document.createElement('img')
    Avatar1Element.className = 'card_for_contacts-1_avatar'
    Avatar1Element.src = ItemIconAvatarImg;

    const CardHeaderName1Element = document.createElement('div')
    CardHeaderName1Element.className = 'card_header_name-1'
    CardHeaderName1Element.innerText = 'Name'

    const PhoneNumber1Element = document.createElement('div')
    PhoneNumber1Element.className = 'card_phone_number-1'
    PhoneNumber1Element.innerText = 'Phone'

    const CardKrest1Element = document.createElement('img')
    CardKrest1Element.className = 'card_krest-1'
    CardKrest1Element.src = ItemKrestBlackImg;

    const CardLove1Element = document.createElement('img')
    CardLove1Element.className = 'card_pustoe-love-1'
    CardLove1Element.src = ItemHeartPustoeImg;

    const Avatar2Element = document.createElement('img')
    Avatar2Element.className = 'card_for_contacts-2_avatar'
    Avatar2Element.src = ItemIconAvatarImg;

    const CardHeaderName2Element = document.createElement('div')
    CardHeaderName2Element.className = 'card_header_name-2'
    CardHeaderName2Element.innerText = 'Name'

    const PhoneNumber2Element = document.createElement('div')
    PhoneNumber2Element.className = 'card_phone_number-2'
    PhoneNumber2Element.innerText = 'Phone'

    const CardKrest2Element = document.createElement('img')
    CardKrest2Element.className = 'card_krest-2'
    CardKrest2Element.src = ItemKrestBlackImg;

    const CardLove2Element = document.createElement('img')
    CardLove2Element.className = 'card_pustoe-love-2'
    CardLove2Element.src = ItemHeartPustoeImg;

    const PoloskaElement = document.createElement('hr')
    PoloskaElement.className = 'item_poloska'

    const KnopkaDobavkiElement = document.createElement('button')
    KnopkaDobavkiElement.className = 'item_knopka_dobavit_contact'
    KnopkaDobavkiElement.innerText = 'Добавить контакт'
    KnopkaDobavkiElement.addEventListener('click', onAdd)


    ItemElement.appendChild(PoiskElement)
    ItemElement.appendChild(PhoneElement)
    ItemElement.appendChild(TelefonImageElement)
    ItemElement.appendChild(CardContactsElement)
    ItemElement.appendChild(ContactCard1Element)
    ItemElement.appendChild(ContactCard2Element)  
    ItemElement.appendChild(Avatar1Element)
    ItemElement.appendChild(CardHeaderName1Element)
    ItemElement.appendChild(PhoneNumber1Element)
    ItemElement.appendChild(CardKrest1Element)
    ItemElement.appendChild(CardLove1Element)  
    ItemElement.appendChild(Avatar2Element)
    ItemElement.appendChild(CardHeaderName2Element)
    ItemElement.appendChild(PhoneNumber2Element)
    ItemElement.appendChild(CardKrest2Element)
    ItemElement.appendChild(CardLove2Element)
    ItemElement.appendChild(PoloskaElement)
    ItemElement.appendChild(KnopkaDobavkiElement)

    return ItemElement
};

export default Item