import React, {useRef} from 'react';
import {View, Animated, StyleSheet, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Home() {
  const scroll = useRef(new Animated.Value(0)).current;
  return (
    <Animated.ScrollView
      onScroll={Animated.event([{nativeEvent: {contentOffset: {y: scroll}}}], {
        useNativeDriver: true,
      })}
      scrollEventThrottle={16}>
      <View style={styles.bannerContainer}>
        <Animated.Image
          style={styles.banner(scroll)}
          source={require('../assets/polo-g-hero.png')}
        />
        <View style={styles.heroSection}>
          <Text style={styles.headerText}>Polo G</Text>
          <View style={styles.actionButtons}>
            <Ionicons
              name="ios-shuffle"
              size={28}
              color="#000"
              style={styles.icon}
            />
            <Ionicons
              name="play"
              size={28}
              color="#fff"
              style={{...styles.icon, backgroundColor: '#109fd9'}}
            />
          </View>
        </View>
      </View>
      <Text>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste facilis,
        dignissimos quos enim quis ea, ut quibusdam odit alias modi qui ducimus
        explicabo adipisci nihil soluta veritatis cumque nemo, ad quidem neque.
        Recusandae, repudiandae nemo. Harum, accusamus consectetur quia corrupti
        nihil ipsam tenetur nisi doloribus, rem placeat sequi. Ad dignissimos
        tempore impedit iusto sit quia saepe tempora dicta soluta, pariatur,
        illum accusantium ea itaque! Placeat necessitatibus eius dolorem
        molestiae eveniet minus accusantium a illum, expedita omnis excepturi
        ipsa nesciunt. Quasi eius, corporis cupiditate cumque provident ipsum
        iste, consectetur commodi tempore quisquam esse aspernatur tenetur
        deserunt nulla suscipit? Dolore neque facilis ullam quasi animi.
        Assumenda quod, error libero iste nihil quasi quis minus tempore ut non
        temporibus expedita, accusamus officia quo obcaecati voluptas ea!
        Ratione autem veniam neque illo doloribus magni quo. Libero voluptate
        quasi excepturi beatae nesciunt dolorum provident id atque ea officia
        illo, enim ipsum modi architecto necessitatibus officiis. Cumque ab
        quasi laborum minima facere quae saepe eveniet explicabo, cupiditate
        molestiae blanditiis natus quos molestias repudiandae fugiat ullam nobis
        dignissimos delectus ducimus ipsum officia debitis. Quae molestiae
        voluptate incidunt mollitia corrupti, delectus ipsum quisquam.
        Repellendus, sunt harum magni debitis voluptas voluptates nesciunt
        accusantium aut facilis, qui distinctio illum nemo natus delectus
        mollitia recusandae! Non odit veritatis quod. Officiis fuga officia
        alias facilis! Similique temporibus voluptatum molestiae hic.
        Reprehenderit perspiciatis totam molestiae fuga ratione eligendi iste at
        nesciunt quasi beatae dolore rem magnam magni, hic vel doloremque esse
        alias pariatur odit! Tempora expedita sit nobis molestias voluptates ad
        dolorum eos! Deserunt repellat, dolore incidunt vitae molestias, omnis
        natus accusamus mollitia minima illum provident ratione eligendi, ea
        fugiat facere laborum quasi? Eligendi nulla unde temporibus perspiciatis
        ab. Error non voluptatum nemo fugit commodi ipsa ad deleniti mollitia,
        odit quam corrupti accusantium iste facere. Unde, eum! Dolorem, facere
        fugit! Quos ipsum unde consectetur quae? Placeat atque minima ratione
        ipsa, nulla expedita, amet quo unde corrupti voluptatem officiis quam
        voluptas et, maxime delectus molestias? Tempora repellat, dolores
        possimus ipsam hic inventore numquam ea facere tempore cum! Iure, nisi.
        Beatae ex aliquid nostrum aspernatur earum repellendus molestias natus
        minus, ea cumque praesentium tempora fugit qui soluta dolore facere
        deleniti nesciunt deserunt porro voluptatem voluptates aliquam, ut
        doloremque. Illum blanditiis non molestiae laudantium, dolor autem
        excepturi aperiam et nisi? Earum maxime eum harum alias? Nobis quisquam
        corporis illum itaque odio ullam alias labore adipisci id nesciunt
        incidunt nisi, quia hic laudantium veniam? Labore deserunt error neque
        eius fugit autem sapiente dignissimos officiis vitae, inventore
        veritatis earum voluptatibus praesentium, iusto illo a! Iure nisi enim
        obcaecati voluptatem officiis molestias corrupti odio ipsam quos illo,
        hic recusandae aspernatur velit eius atque repellat perferendis officia
        animi quas aliquam tempore saepe inventore nostrum. Libero aut fugiat
        tempore perspiciatis quaerat magni illo voluptates minus dolorem quas
        eius molestias, quo architecto expedita! Vel ipsam officiis perferendis
        distinctio, fuga possimus ducimus harum! Expedita culpa amet praesentium
        consequuntur architecto odio aliquam nisi. Nam, quibusdam voluptatum
        neque sequi voluptas, mollitia delectus, deserunt eos expedita
        asperiores ipsum qui dolor quos voluptatibus illum. Dicta, odit quam.
      </Text>
    </Animated.ScrollView>
  );
}

const styles = StyleSheet.create({
  banner: scroll => ({
    height: 510,
    width: '100%',
    transform: [
      {
        translateY: scroll.interpolate({
          inputRange: [-510, 0, 510, 510 + 1],
          outputRange: [-510 / 2, 0, 510 * 0.75, 510 * 0.75],
        }),
      },
      {
        scale: scroll.interpolate({
          inputRange: [-510, 0, 510],
          outputRange: [1, 1, 1.2],
        }),
      },
    ],
    opacity: scroll.interpolate({
      inputRange: [0, 510],
      outputRange: [1, 0.7],
    }),
  }),
  heroSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    marginTop: -75,
    padding: 15,
  },
  headerText: {
    fontSize: 35,
    color: '#000',
    fontWeight: '700',
  },
  actionButtons: {
    flexDirection: 'row',
    borderColor: '#109fd9',
    borderWidth: 2,
    borderStyle: 'solid',
    borderRadius: 50,
    overflow: 'hidden',
  },
  icon: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});
