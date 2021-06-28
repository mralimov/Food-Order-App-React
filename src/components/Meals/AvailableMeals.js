import styling from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import { useEffect, useState } from 'react';

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        'https://food-order-react-app-6768c-default-rtdb.firebaseio.com/Meals.json'
      );
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }
      const responseData = await response.json();
      let loadedMeals = [];

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }
      setMeals(loadedMeals);
      setIsLoading(false);
    };

    fetchMeals().catch(error => {
      setIsLoading(false);
      setError(error.message);
    });
  }, []);
  if (isLoading) {
    return (
      <section className={styling.MealsLoading}>
        <p>Loading...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className={styling.MealsError}>
        <p>{error}</p>
      </section>
    );
  }
  const mealsList = meals.map(meal => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={styling.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
