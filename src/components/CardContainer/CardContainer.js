import React from 'react';
import Card from '../Card/Card';
import { useSelector } from 'react-redux';


const CardContainer = () => {
  const activitiesToDisplay = useSelector(state => state.activities);

  return (
    <section>
      {activitiesToDisplay.map(activity => <Card 
        key={activity.description}
        location={activity.location} 
        description={activity.description} 
        activityName={activity.activityName}/>)}
    </section>
  );
};

export default CardContainer;