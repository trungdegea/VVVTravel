import React, { useLayoutEffect, lazy, Suspense, useState } from "react";
import { View, ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";

// styles
import { style as globalStyle } from "../../styles/index";

// components
const Categories = lazy(() => import("../../components/Categories"));
import RecentlyViewed from "../../components/RecentlyViewed/home";
import AwesomeDeals from "../../components/AwesomeDeals";
import Title from "../../components/Title";
import ThingsToDo from "../../components/ThingsToDo";
import Destinations from "../../components/Destinations";
import HeaderHome from "../../components/Headers/home";
import { getDataHome } from "../../redux/actions/home";
import useRetrieve from "../../hooks/useRetrive";
import CategoriesLoading from "../../components/Loading/Categories";

const Home = () => {
  const dispatch = useDispatch();
  const dataHome = useSelector((state) => state.home);
  const retrieve = useRetrieve();
  const [isLoading, setIsLoading] = useState(false);

  useLayoutEffect(() => {
    const getData = async () => {
      setIsLoading(true)
      dispatch(await getDataHome());
      setIsLoading(false);
    };
    getData();
    retrieve();
  }, []);
  return (
    <>
      {/* header */}
      <HeaderHome />

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
        <Suspense fallback={<CategoriesLoading />}>
         {isLoading ? <CategoriesLoading/> : <Categories data={dataHome.categories} />}
        </Suspense>

        {/* Recently viewed */}
        <View style={globalStyle.container}>
          <View style={globalStyle.gap_sm}></View>
          <Title title="Recently Viewed" hasMore={true}></Title>
          <View style={globalStyle.gap_sm}></View>
          <RecentlyViewed data={dataHome.dataRecently} />
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
          <ThingsToDo data={dataHome.products} />
        </View>

        {/* Incredible destinations */}
        <View style={globalStyle.container}>
          <View style={globalStyle.gap_sm}></View>
          <Title title="Incredible destinations"></Title>
          <View style={globalStyle.gap_sm}></View>
          <Destinations data={dataHome.destinations} />
        </View>

        <View style={globalStyle.gap_lg}></View>
        <View style={globalStyle.gap_lg}></View>
      </ScrollView>
    </>
  );
};

export default Home;
