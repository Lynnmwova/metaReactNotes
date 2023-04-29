import React from 'react';

const MealsContext = React.createContext();
const todaysMeals = ['Chapati','Beans','watermelon','Chicken','Noodles'];
const MealProvider = ({children}) => {
    const [meals, setMealList]= React.useState(todaysMeals);

    return (
        <MealsContext.Provider value={(meals)}>
        {children}
        </MealsContext.Provider>
    )

};

export const useMealsListContext = () => React.useContext(MealsContext);

export default MealProvider