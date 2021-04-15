# PLANE MANUFACTURER HANGER

Light Jet Inc Supply chain counter demonstrates counting and submiting the total number for each of the 5 Main Components of it's light body Aircraft manufacturing line in the hanger so that the procurement department knows when to re-stock.

To insure productivity that counter can not go below 30 items for each component this is when procurments knows when to restock.

This Example uses redux with axios GET and PUT request to a remote firebase URL.

Aircraft components:

• Fuselage
• Wings
• Empennage
• Power Plant
• Landing Gear

##### Setup node modules

```
yarn install or npm install
```

##### Setup Pod files

```
cd ios

pod install
```

##### Start

```
npx react-native start
```

<img src="./assets/image.png" width="350" alt="image.png">

1. **Each counter starts out with various counts and consists of a button to increase or decrease the amount, a text showcasing the current amount and a button to decrease the amount.**

2. **When the user submits the app sends a PUT request with the state of the counters to the endpoint(procurement department) and saves it to a firebase realtime database**

3. **The app then loads the updated state back onto the view of the app.**

4. **The count stops at 0 and cannot go into negative figures**

# LIGHT-JET-INC-REDUX-HOOKS
# LIGHT-JET-INC-REDUX-HOOKS
