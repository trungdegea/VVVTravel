import React, { useLayoutEffect, useEffect, useState} from "react";
import {
  View,
  ScrollView,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";

// styles
import { style as globalStyle } from "../../styles/index";

// components
import Categories from "../../components/Categories";
import RecentlyViewed from "../../components/RecentlyViewed/home";
import AwesomeDeals from "../../components/AwesomeDeals";
import Title from "../../components/Title";
import ThingsToDo from "../../components/ThingsToDo";
import Destinations from "../../components/Destinations";
import HeaderHome from "../../components/Headers/home";
import { getDataHome } from "../../redux/actions/home";


const Home = ({ navigation }) => {
  const [destinations, setDestinations] = useState([]);
  const [categories, setCategories] = useState([]);
  const [things, setThings] = useState([]);
  const recentViews = [
    {
      id: "1",
      img: "https://picsum.photos/400/300",
      package: "lorem ipsum qua troi luon ne asd",
      price: "200000",
    },
    {
      id: "2",
      img: "https://picsum.photos/400/300",
      package: "lorem ipsum",
      price: "200000",
    },
    {
      id: "3",
      img: "https://picsum.photos/400/300",
      package: "lorem ipsum",
      price: "200000",
    },
    {
      id: "4",
      img: "https://picsum.photos/400/300",
      package: "lorem ipsum",
      price: "200000",
    },
    {
      id: "5",
      img: "https://picsum.photos/400/300",
      package: "lorem ipsum",
      price: "200000",
    },
    {
      id: "6",
      img: "https://picsum.photos/400/300",
      package: "lorem ipsum",
      price: "200000",
    },
  ];
  // const things = [
  //   {
  //     id: "1",
  //     img: "https://picsum.photos/400/300",
  //     package: "lorem ipsum qua troi luon ne asd",
  //     rating: 4.3,
  //     price: "200000",
  //     location: "Ha Noi",
  //   },
  //   {
  //     id: "2",
  //     img: "https://picsum.photos/400/300",
  //     package: "lorem ipsum",
  //     rating: 4.3,
  //     price: "200000",
  //     location: "Ha Noi",
  //   },
  //   {
  //     id: "3",
  //     img: "https://picsum.photos/400/300",
  //     package: "lorem ipsum",
  //     rating: 4.3,
  //     price: "200000",
  //     location: "Ha Noi",
  //   },
  //   {
  //     id: "4",
  //     img: "https://picsum.photos/400/300",
  //     package: "lorem ipsum",
  //     rating: 4.3,
  //     price: "200000",
  //     location: "Ha Noi",
  //   },
  //   {
  //     id: "5",
  //     img: "https://picsum.photos/400/300",
  //     package: "lorem ipsum",
  //     rating: 4.3,
  //     price: "200000",
  //     location: "Ha Noi",
  //   },
  //   {
  //     id: "6",
  //     img: "https://picsum.photos/400/300",
  //     package: "lorem ipsum",
  //     rating: 4.3,
  //     price: "200000",
  //     location: "Ha Noi",
  //   },
  // ];

  
  const dispatch = useDispatch();
  const dataHome = useSelector(state => state.home);
  
  useEffect(() => {
    setCategories(dataHome.categories);
    setDestinations(dataHome.destinations);
    const thingArr = [];
    dataHome.products.map((product) => {
      if(product.id <= 6) {
        thingArr.push(product);
      }
    })
    setThings(thingArr);
  }, [dataHome]);

  useLayoutEffect(() => {
    const getData = async () => {
      dispatch(await getDataHome());
    }
    getData();
    
  }, [])
  return (
    <>
      {/* header */}
      <HeaderHome navigation={navigation} />

      {/* body */}
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        style={[
          {
            paddingTop: 70,
          },
        ]}
      >
        {/* Categories */}
        <View style={globalStyle.gap_sm}></View>
        <Categories data={categories} />

        {/* Recently viewed */}
        <View style={globalStyle.container}>
          <View style={globalStyle.gap_sm}></View>
          <Title title="Recently Viewed" hasMore={true}></Title>
          <View style={globalStyle.gap_sm}></View>
          <RecentlyViewed data={recentViews} />
        </View>

        {/* Recently viewed */}
        <View style={globalStyle.container}>
          <View style={globalStyle.gap_sm}></View>
          <Title title="Awesome deals" hasMore={true}></Title>
          <View style={globalStyle.gap_sm}></View>
          <AwesomeDeals />
        </View>

        {/* Top things to do */}
        <View style={globalStyle.container}>
          <View style={globalStyle.gap_sm}></View>
          <Title title="Top things to do" hasMore></Title>
          <View style={globalStyle.gap_sm}></View>
          <ThingsToDo data={things} />
        </View>

        {/* Incredible destinations */}
        <View style={globalStyle.container}>
          <View style={globalStyle.gap_sm}></View>
          <Title title="Incredible destinations"></Title>
          <View style={globalStyle.gap_sm}></View>
          <Destinations data={destinations} />
        </View>

        <View style={globalStyle.gap_lg}></View>
        <View style={globalStyle.gap_lg}></View>
      </ScrollView>
    </>
  );
};

export default Home;
