import { useMealsListContext } from "./MealProvider";

const MealsList = ()=> {
    const {meals} = useMealsListContext();
    return (
        <>
            <h1>Meals Using context API</h1>

        </>
    );
};

export default MealsList;