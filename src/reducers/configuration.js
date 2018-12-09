import { ADD_ITEM, REMOVE_ITEM } from '../actions';


import deodorant1 from '../assets/images/products/deo-1.jpg';
import deodorant2 from '../assets/images/products/deo-2.jpg';
import deodorant3 from '../assets/images/products/deo-3.jpg';
import deodorant4 from '../assets/images/products/deo-4.jpg';
import deodorant5 from '../assets/images/products/deo-5.jpg';

import wash1 from '../assets/images/products/wash-1.jpg';
import wash2 from '../assets/images/products/wash-2.jpg';
import wash3 from '../assets/images/products/wash-3.jpg';
import wash4 from '../assets/images/products/wash-4.jpg';
import wash5 from '../assets/images/products/wash-5.jpg';
import wash6 from '../assets/images/products/wash-6.jpg';

import bodyspray1 from '../assets/images/products/bodyspray-1.jpg';
import bodyspray2 from '../assets/images/products/bodyspray-2.jpg';
import bodyspray3 from '../assets/images/products/bodyspray-3.jpg';
import bodyspray4 from '../assets/images/products/bodyspray-4.jpg';
import bodyspray5 from '../assets/images/products/bodyspray-5.jpg';
import bodyspray6 from '../assets/images/products/bodyspray-6.jpg';

import scent1 from '../assets/images/products/scent-1.jpg';
import scent2 from '../assets/images/products/scent-1.jpg';
import scent3 from '../assets/images/products/scent-1.jpg';

import swag1 from '../assets/images/products/swag1.jpg';
import swag2 from '../assets/images/products/swag2.jpg';
import swag3 from '../assets/images/products/swag3.jpg';
import swag4 from '../assets/images/products/swag4.jpg';



const INITIAL_STATE = {
  data: [],
  itemCount: 0,
  items: [
    {
      img: deodorant1,
      title: 'WILDERNESS WITH LAVANDER',
      price: 2.5,
      description: `Once you smell like nature, you’ll forget about all of your problems and your life will be better and you’ll finally get that promotion you know you deserve. The Fresher Collection has real freshness forged with real ingredients and is inspired by nature`,
      quantity: 0,
      category: 'Deodorant'
    },
    {
      img: deodorant2,
      title: 'ORIGINAL CLASSIC SOLID DEODORANT',
      price: 2.5,
      description: `Old Spice Original Deodorant reduces underarm odor for 24 hours. The citrus and clove scents of Original are often imitated but never duplicated. So easy to use you might accidentally put it on and only later realize your man-nificence`,
      quantity: 0,
      category: 'Deodorant'
    },
    {
      img: deodorant3,
      title: 'TUNDRA MINT SOLID',
      price: 2.5,
      description: `Tundra With Mint smells like arctic tundra and mint, which is something that normally only polar bears get to smell.Tell your underarm odor to take a hike! And then take a hike in the opposite direction from your underarm odor`,
      quantity: 0,
      category: 'Deodorant'
    },
    {
      img: deodorant4,
      title: 'WILDERNESS',
      price: 2.5,
      description: `Old Spice Deodorant trounces underarm odor for 24 hours without aluminum or parabens. Once you smell like nature, you’ll forget about all of your problems and your life will be better and you’ll finally get that promotion you know you deserve`,
      quantity: 0,
      category: 'Deodorant'
    },
    {
      img: deodorant5,
      title: 'KRAKENGARD WILD COLLECTION DEODORANT',
      price: 2.5,
      description: `Krakengärd smells like citrus, fresh herbs, and the unspeakable power of the ancient ocean. Old Spice Men's Deodorant overpowers stink with good-smellingness`,
      quantity: 0,
      category: 'Deodorant'
    },
    {
      img: wash1,
      title: 'SWAGGER BAR SOAP - 6 PACK',
      price: 7.99,
      description: `Swagger is the scent of confidence, which happens to smell like lime and cedarwood. Old Spice Swagger Bar Soap cleans away dirt and odor`,
      quantity: 0,
      category: 'Body Wash'
    },
    {
      img: wash2,
      title: 'TIMBER BAR SOAP – 6 PACK',
      price: 7.99,
      description: `The scent of woods and spices in Timber can fell even the hardest of hearts. Old Spice Timber Bar Soap cleans away dirt and odor. Step out of the shower fresher and manlier than ever`,
      quantity: 0,
      category: 'Body Wash'
    },
    {
      img: wash3,
      title: 'PURE SPORT DUAL-SIDED BODY CLEANSER',
      price: 7.99,
      description: `Old Spice DUO, a flexible, dual-sided body cleanser that scrubs, cleans, and smooths skin. You’ll laugh as rich, cleansing lather pile-drives dirt —2X better than our basic body wash and a puff. Force your body to smell good with Old Spice Pure Sport, even when it doesn’t want to.`,
      quantity: 0,
      category: 'Body Wash'
    },
    {
      img: wash4,
      title: 'BODY WASH FOR MEN RELAX WITH LAVENDER',
      price: 4.99,
      description: ` Relax With Lavender smells like wild lavender, which is much rowdier than ordinary lavender. The Fresher Collection has real freshness forged with real ingredients and is inspired by nature`,
      quantity: 0,
      category: 'Body Wash'
    },
    {
      img: wash5,
      title: 'SWAGGER FOAMER BODY WASH',
      price: 3,
      description: `Swagger is the scent of confidence, which happens to smell like lime and cedarwood. Old Spice Men's Body Wash Foamer is an easier-to-use, effective foam soap that cleans with a vengeance and leaves no dirt or odor behind`,
      quantity: 0,
      category: 'Body Wash'
    },
    {
      img: wash6,
      title: 'STEEL COURAGE HWC HYDRO WASH BODY WASH',
      price: 3.5,
      description: `2 in 1: Lasting Scent + Hydration • Fighting dry skin at the source • The Hardest Working Collection brings together more odor blocking, sweat defending, and dirt destroying power than ever before • Legendary cleansing for legendary men`,
      quantity: 0,
      category: 'Body Wash'
    },
    {
      img: bodyspray1,
      title: 'KRAKENGARD WILD COLLECTION BODY SPRAY',
      price: 2.99,
      description: `Krakengärd smells like citrus, fresh herbs, and the unspeakable power of the ancient ocean. Old Spice Men's Deodorant overpowers stink with good-smellingness `,
      quantity: 0,
      category: 'Body Spray'
    },
    {
      img: bodyspray2,
      title: 'WOLFTHORN REFRESH BODY SPRAY',
      price: 3.50,
      description: `Old Spice enhances confidence and commands female attention. And that’s a pretty fancy trick indeed, provided you always buy products only really cool men buy.`,
      quantity: 0,
      category: 'Body Spray'
    },
    {
      img: bodyspray3,
      title: `SWAGGER REFRESH BODY SPRAY`,
      price: 2.99,
      description: `Swagger is the scent of confidence, which happens to smell like lime and cedarwood. Old Spice Men's Body Spray for bodies lasts all day, because your body is your body all day long—usually `,
      quantity: 0,
      category: 'Body Spray'
    },
    {
      img: bodyspray4,
      title: 'BEARGLOVE REFRESH BODY SPRAY',
      price: 2.99,
      description: `Bearglove scent commands grizzly-bear-level respect with smells of apple, citrus, and spice. Old Spice Men's Body Spray for bodies lasts all day, because your body is your body all day long—usually`,
      quantity: 0,
      category: 'Body Spray'
    },
    {
      img: bodyspray5,
      title: 'HAWKRIDGE REFRESH BODY SPRAY',
      price: 2.99,
      description: `Hawkridge outwits unsuspecting stink with its sandalwood and vanilla scent. Old Spice Men's Body Spray for bodies lasts all day, because your body is your body all day long—usually `,
      quantity: 0,
      category: 'Body Spray'
    },
    {
      img: bodyspray6,
      title: 'TIMBER FRESHER COLLECTION BODY SPRAY',
      price: 2.99,
      description: `The scent of woods and spices in Timber can fell even the hardest of hearts. Old Spice Men's Body Spray for bodies lasts all day, because your body is your body all day long—usually `,
      quantity: 0,
      category: 'Body Spray'
    },
    {
      img: scent1,
      title: 'PURE SPORT AFTERSHAVE',
      price: 2.99,
      description: `The unmistakably masculine scent of Old Spice.; Cool, crisp and clean`,
      quantity: 0,
      category: 'Scent'
    },
    {
      img: scent2,
      title: 'CLASSIC COLOGNE',
      price: 2.99,
      description: `Old Spice has won a magazines 2008 Reader's Choice Award for men’s fragrance. Try an Old Spice cologne, maybe the Old Spice Classic scent.`,
      quantity: 0,
      category: 'Scent'
    },
    {
      img: scent3,
      title: 'CLASSIC AFTER SHAVE',
      price: 2.99,
      description: `After you shave, use the distinctive scent of Old Spice Classic as an after shave. Old Spice after shave is perfect for you. `,
      quantity: 0,
      category: 'Scent'
    },
    {
      img: swag1,
      title: 'OS T-SHIRT',
      price: 19.99,
      description: `A special T-shirt (trust us). `,
      quantity: 0,
      category: 'Swag'
    },
     {
      img: swag2,
      title: 'MANCARD',
      price: 9.99,
      description: `Nothing better than getting your man a card stocked with money, so they can buy more stuff from us`,
      quantity: 0,
      category: 'Swag'
    },
    {
      img: swag3,
      title: 'KOOZIE',
      price: 2.99,
      description: `Keep your shampoo warm with this stylish koozie, comes in three different colors; Red, Dark Red, and Blood Red `,
      quantity: 0,
      category: 'Swag'
    },
    {
      img: swag4,
      title: 'BATH TOWEL',
      price: 2.99,
      description: `This towel is not meant to be used, it is meant to show off to your jealous friends for when they come over.`,
      quantity: 0,
      category: 'Swag'
    },
  ],
  cart: []
};


export const configuration = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_ITEM:
      action.item.quantity = action.item.quantity + 1;

      const add =
        state.cart.indexOf(action.item) !== -1
          ? state.cart.map(item =>
              item.title === action.item.title ? (item = action.item) : item
            )
          : [...state.cart, action.item];

          const addCount = add.map(item => item.quantity).reduce((a, v) => a + v);


      return {
        ...state,
        itemCount: addCount,
        cart: [...add]
      };
    case REMOVE_ITEM:
      action.item.quantity = action.item.quantity - 1;

      const remove = state.cart
        .map(item =>
          item.title === action.item.title ? (item = action.item) : item
        )
        .filter(item => item.quantity > 0);

        const remCount = remove.length > 0 ? remove.map(item => item.quantity).reduce((a, v) => a + v): 0;

      return {
        ...state,
        itemCount: remCount,
        cart: [...remove]
      };
    default:
      return state;
  }
};