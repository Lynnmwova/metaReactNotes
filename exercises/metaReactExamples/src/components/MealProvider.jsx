import React from 'react';
import { useState } from 'react';

const MealsContext = React.createContext();
const todaysMeals = ['Chapati','Beans','watermelon','Chicken','Noodles'];
const MealProvider = ({children}) => {
    const [meals, setMealList]= useState(todaysMeals);

    return (
        <MealsContext.Provider value={(meals)}>
        {children}
        </MealsContext.Provider>
    )

};

export const useMealsListContext = () => React.useContext(MealsContext);

export default MealProvider;