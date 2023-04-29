import { useMealsListContext } from "./MealProvider";

const Counter = () => {
const {meals} = useMealsListContext();
    return(
        <>
            <h3>Number of meals today:{meals.length}</h3>
        </>
    )
}

export default Counter;