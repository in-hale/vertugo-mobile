import { StyleSheet, Text } from 'react-native';
import React from 'react';
import { List } from 'react-native-paper';

const PriceTag = ({ amount, currency }) => (
  <Text style={styles.priceTag}>
    {amount}
    {' '}
    {currency}
  </Text>
);

const MenuSection = ({ children, title }) => (
  <List.Accordion style={styles.menuSection} title={title} titleStyle={styles.menuSectionTitle}>
    { children }
  </List.Accordion>
);

const MenuItem = ({ title, price, currency }) => (
  <List.Item title={title} style={styles.menuItem} right={() => <PriceTag amount={price} currency={currency} />} />
);

const CategorizedMenuItems = ({ categories }) => {
  const renderedMenu = categories.map((category) => (
    <MenuSection title={category.name} key={category.id}>
      {category.meals.map((meal) => <MenuItem title={meal.name} price={meal.price} currency={meal.currency} key={meal.id} />)}
    </MenuSection>
  ));

  const placeholder = (
    <Text style={{ paddingLeft: 11, paddingBottom: 15 }}>
      No menu added yet :(
    </Text>
  );

  return categories.length > 0 ? renderedMenu : placeholder;
};

const styles = StyleSheet.create({
  menuSection: {
    paddingLeft: 3,
    borderTopWidth: 1,
  },
  menuSectionTitle: {
    color: 'black',
  },
  menuItem: {
    paddingLeft: 15,
    padding: 3,
    alignItems: 'center',
  },
  priceTag: {
    marginRight: 10,
    marginTop: 6,
  },
});

export default CategorizedMenuItems;
