import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import {SubmitButton, CounterComponent} from './components';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';
import {totalComponents} from './actions';

const w = 'total wing count:';
const e = 'total empennage count:';
const f = 'total fuselage count:';
const p = 'total power plant count:';
const l = 'total landing gear count:';

export default function Home(value) {
  const dispatch = useDispatch();

  const [isFetching, setIsFetching] = useState(false);

  const total_components = useSelector(state => state.total_components);
  const empennage_counter = useSelector(state => state.empennage_counter);
  const wing_counter = useSelector(state => state.wing_counter);
  const fuselage_counter = useSelector(state => state.fuselage_counter);
  const power_plant_counter = useSelector(state => state.power_plant_counter);
  const landing_gear_counter = useSelector(state => state.landing_gear_counter);

  const {data} = total_components;

  useEffect(() => getTotalComponents(), []);

  const getTotalComponents = () => {
    setIsFetching(true);

    let url =
      'https://reduxcounter-2968f-default-rtdb.firebaseio.com/lightjetinc/.json';
    axios
      .get(url)
      .then(res => res.data)
      .then(data => dispatch(totalComponents(data)))
      .catch(error => alert(error.message))
      .finally(() => setIsFetching(false));
  };

  const onSubmit = (wing, empennage, fuselage, power, landing) => {
    let url =
      'https://reduxcounter-2968f-default-rtdb.firebaseio.com/lightjetinc/.json';
    axios.put(url, wing, empennage, fuselage, power, landing).then(response => {
      console.log(response);
    });
  };

  const obj = data;
  const cloneTotal = {...obj};
  console.log(cloneTotal);

  return (
    <View style={styles.container}>
      <View>
        {isFetching ? (
          <ActivityIndicator />
        ) : (
          <CounterComponent
            add={() =>
              dispatch({
                type: 'ADD_Landing_Gear',
              })
            }
            minus={() =>
              dispatch({
                type: 'REMOVE_Landing_Gear',
              })
            }
            currentComponent={l}
            currentNumberOfComponents={
              cloneTotal.landing ? landing_gear_counter : cloneTotal.landing
            }
            addText="add"
            minusText="minus"
          />
        )}
        {isFetching ? (
          <ActivityIndicator />
        ) : (
          <CounterComponent
            add={() =>
              dispatch({
                type: 'ADD_Wings',
              })
            }
            minus={() =>
              dispatch({
                type: 'REMOVE_Wings',
              })
            }
            currentComponent={w}
            currentNumberOfComponents={
              cloneTotal.wing ? wing_counter : cloneTotal.wing
            }
            addText="add"
            minusText="minus"
          />
        )}
        {isFetching ? (
          <ActivityIndicator />
        ) : (
          <CounterComponent
            add={() =>
              dispatch({
                type: 'ADD_Power_Plant',
              })
            }
            minus={() =>
              dispatch({
                type: 'REMOVE_Power_Plant',
              })
            }
            currentComponent={p}
            currentNumberOfComponents={
              cloneTotal.power ? power_plant_counter : cloneTotal.power
            }
            addText="add"
            minusText="minus"
          />
        )}
        {isFetching ? (
          <ActivityIndicator />
        ) : (
          <CounterComponent
            add={() =>
              dispatch({
                type: 'ADD_Empennage',
              })
            }
            minus={() =>
              dispatch({
                type: 'REMOVE_Empennage',
              })
            }
            currentComponent={e}
            currentNumberOfComponents={
              cloneTotal.empennage ? empennage_counter : cloneTotal.empennage
            }
            addText="add"
            minusText="minus"
          />
        )}
        {isFetching ? (
          <ActivityIndicator />
        ) : (
          <CounterComponent
            add={() =>
              dispatch({
                type: 'ADD_Fuselage',
              })
            }
            minus={() =>
              dispatch({
                type: 'REMOVE_Fuselage',
              })
            }
            currentComponent={f}
            currentNumberOfComponents={
              cloneTotal.fuselage ? fuselage_counter : cloneTotal.fuselage
            }
            addText="add"
            minusText="minus"
          />
        )}
      </View>

      <SubmitButton
        onPress={onSubmit({
          empennage: empennage_counter,
          wing: wing_counter,
          fuselage: fuselage_counter,
          power: power_plant_counter,
          landing: landing_gear_counter,
        })}
        title="Submit"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },

  textWrapper: {
    marginLeft: '4%',
    marginRight: '4%',
  },
});
