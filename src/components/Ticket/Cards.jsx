import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchListOfItemsFromSelectedCategoryHandler } from '../../store/category-actions'
import CardItem from './CardItem'

const Cards = () => {
     const cardsData = useSelector((state)=> state.category.selectedCategoryItems)
     console.log('cardsData',cardsData);
    
  return (
    <div>
     {cardsData.length!==0 && cardsData.map((item)=>(
          <CardItem id={item.id} data={item}/>
     ))}
    </div>
  )
}

export default Cards