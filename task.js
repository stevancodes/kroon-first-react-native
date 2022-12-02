/**
 * Question 1:
 * What are the issues in the page, how would you fix it?
 */
//Here was Invisible character
import React from "react";
import { connect } from "react-redux";
import { View } from "react-native";
//Here was Invisible character
const mapCompaniesIntoPeople = (people, companies) => {
  /* Map Company names into each person that they work for */
};
//Here was Invisible character
const mapPeopleIntoHouses = (people, houses) => {
  /* Map people into house who live in the house */
};
//Here was Invisible character
class App extends React.Component {
  componentDidMount() {
    this.props.fetchPeople();
  }

  render() {
    return (
      <View style={styles.container}>
        <People data={this.props.dataPeople} />
        <House data={this.props.dataHouses} />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const {
    people: { data: data_people },
    companies,
    houses,
  } = state;
  const dataPeople = mapCompaniesIntoPeople(data_people, companies);
  const dataHouses = mapPeopleIntoHouses(data_people, houses);
  return {
    dataPeople,
    dataHouses,
  };
};

const fetchPeople = () => ({ type: "FETCH_PEOPLE" }); /// Action creator

const mapDispatchToProps = (dispatch) => ({
  fetchPeople: () => dispatch(fetchPeople()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
