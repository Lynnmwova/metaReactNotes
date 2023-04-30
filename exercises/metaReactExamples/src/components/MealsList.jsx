import { useMealsListContext } from "./MealProvider";

const MealsList = ()=> {
    const {meals} = useMealsListContext();
    return (
        <>
            <h1>Meals Using context API</h1>
            {meals.map((meal, index)=>{
                <h2 key={index}>{meal}</h2>
            })}

        </>
    );
};

export default MealsList;