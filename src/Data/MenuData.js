// src/data/menuData.js

import TofuTikkaMasala from '../assets/MenuImg/TofuTikkaMasala.jpg'
import DalMakhani from '../assets/MenuImg/DalMakhani.jpg'
import ButterChicken from '../assets/MenuImg/ButterChicken.jpg'
import BBQChickenPizza from '../assets/MenuImg/BBQChickenPizza.jpg'
import ChanaMasala from '../assets/MenuImg/ChanaMasala.jpg'
import VegetableMasalaKhichdi from '../assets/MenuImg/VegetableMasalaKhichdi.jpg'
import PaneerButterMasala  from '../assets/MenuImg/PaneerButterMasala.jpg'
import MixedVegKadai from '../assets/MenuImg/MixedVegKadai.jpg'
import BlackBeanandQuinoaBowl from '../assets/MenuImg/BlackBeanandQuinoaBowl.jpg'
import VeganBurritos from '../assets/MenuImg/VeganBurritos.jpg'
import LentilShepherdPie from '../assets/MenuImg/LentilShepherdPie.jpg'
import VeganPadThai from '../assets/MenuImg/VeganPadThai.jpg'
import GrilledChickenwithAvocadoSalad from '../assets/MenuImg/GrilledChickenwithAvocadoSalad.jpg'
import ZucchiniNoodleswithPesto from '../assets/MenuImg/ZucchiniNoodleswithPesto.jpg'
import BaconandEggMuffins from '../assets/MenuImg/BaconandEggMuffins.jpg'
import CauliflowerRiceStirFry from '../assets/MenuImg/CauliflowerRiceStirFry.jpg'
import GlutenFreePastaPrimavera from '../assets/MenuImg/GlutenFreePastaPrimavera.jpg'
import BakedCodwithQuinoa from '../assets/MenuImg/BakedCodwithQuinoa.jpg'
import ChickenandVegetableStirFry from '../assets/MenuImg/ChickenandVegetableStirFry.jpg'
import StuffedPepperswithRice from '../assets/MenuImg/StuffedPepperswithRice.jpg'
import GrilledSteakwithSweetPotatoes from '../assets/MenuImg/GrilledSteakwithSweetPotatoes.jpg'
import PaleoChickenSalad from '../assets/MenuImg/PaleoChickenSalad.jpg'
import ShrimpandAvocadoSalad from '../assets/MenuImg/ShrimpandAvocadoSalad.jpg'
import StuffedBellPeppers from '../assets/MenuImg/StuffedBellPeppers.jpg'





export const categories = [
  {
    name: "FAMILY-FRIENDS MEALS",
    meals: [
      { id: 1, title: "Tofu Tikka Masala", img: TofuTikkaMasala },
      { id: 2, title: "Dal Makhani", img: DalMakhani  },
      { id: 3, title: "Butter Chicken", img: ButterChicken },
      { id: 4, title: "BBQ Chicken Pizza", img: BBQChickenPizza }
    ]
  },
  {
    name: "VEGETARIAN MEALS",
    meals: [
      { id: 5, title: "Chana Masala (Chickpeas)", img: ChanaMasala },
      { id: 6, title: "Vegetable Masala Khichdi", img: VegetableMasalaKhichdi },
      { id: 7, title: "Paneer Butter Masala", img: PaneerButterMasala },
      { id: 8, title: "Mixed Veg Kadai", img: MixedVegKadai }
    ]
  },
  {
    name : "VEGAN MEALS",
    meals: [
        {id: 9, title: "Black Bean and Quinoa Bowl", img : BlackBeanandQuinoaBowl},
        {id: 10, title: "Vegan Burritos", img :  VeganBurritos},
        {id: 11, title: "Lentil Shepherd's Pie", img :  LentilShepherdPie},
        {id: 12, title: "Vegan Pad Thai", img : VeganPadThai},

    ]
  },
  {
    name : "KETO MEALS",
    meals : [
        {id: 13, title: "Grilled Chicken with Avocado Salad", img : GrilledChickenwithAvocadoSalad},
        {id: 14, title: "Zucchini Noodles with Pesto", img : ZucchiniNoodleswithPesto},
        {id: 15, title: "Bacon and Egg Muffins", img : BaconandEggMuffins},
        {id: 16, title: "Cauliflower Rice Stir-Fry", img : CauliflowerRiceStirFry},
    ]
  },
  {
    name : "PALEO MEALS",
    meals: [
            {id: 17, title: "Grilled Steak with Sweet Potatoes", img : GrilledSteakwithSweetPotatoes},
            {id: 18, title: "Paleo Chicken Salad", img : PaleoChickenSalad},
            {id: 19, title: "Shrimp and Avocado Salad", img : ShrimpandAvocadoSalad},
            {id: 20, title: "Stuffed Bell Peppers", img : StuffedBellPeppers},
    ]
  },
  {
    name : "GLUTEN-FREE MEALS",
    meals : [
            {id: 21, title: "Gluten-Free Pasta Primavera", img : GlutenFreePastaPrimavera},
            {id: 22, title: "Baked Cod with Quinoa", img : BakedCodwithQuinoa},
            {id: 23, title: "Chicken and Vegetable Stir-Fry", img : ChickenandVegetableStirFry},
            {id: 24, title: "Stuffed Peppers with Rice", img : StuffedPepperswithRice},
    ]
  }
];




export const specialRequests = [
  { text: "EXTRA PROTEIN", type: "green" },
  { text: "DAIRY-FREE", type: "blue" },
  { text: "HIGH FIBER", type: "tan" },
  { text: "NUT-FREE", type: "red" },
  { text: "SEAFOOD", type: "green" }, 
  { text: "CHICKEN", type: "tan" },   
  { text: "PLANT-BASED", type: "green" },
  { text: "SPICY", type: "blue" },
];