import React from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import blog1 from '../assets/blog1.png';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function BlogScreen({navigation, route}) {
  return (
    <View style={styles.container}>
      <Pressable style={styles.close} onPress={() => navigation.goBack()}>
        <Ionicons name="close" color="#000" size={25} />
      </Pressable>
      <Image source={route.params.img} style={styles.bannerImg} />
      <ScrollView style={{flex: 1}} contentContainerStyle={{paddingBottom: 20}}>
        <Text style={styles.heading}>{route.params.heading}</Text>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla eos
          expedita possimus voluptates provident voluptatum enim, ex ratione est
          dolorem eum perferendis non necessitatibus et inventore nihil quia.
          Harum totam quo sunt nihil laboriosam cum. Voluptates, temporibus.
          Illo ad nam assumenda in! Ea hic perspiciatis soluta aliquid rem
          quidem aperiam sunt saepe? Debitis, itaque ut asperiores nostrum et
          obcaecati laudantium dolorem fugit totam quidem provident perferendis
          exercitationem. Vero quas consectetur incidunt? Voluptatem possimus
          itaque eaque recusandae, incidunt repudiandae repellat dolorem
          corrupti suscipit temporibus assumenda quam obcaecati quibusdam ab
          illo iure repellendus natus sint totam? Id reiciendis ipsam iure,
          dolorem omnis laborum iusto harum provident deserunt architecto vero
          animi qui nisi ipsum necessitatibus enim! Iusto, voluptate! Tenetur
          natus fugiat, eos quae qui, quaerat debitis quam commodi nam, rem nemo
          unde repudiandae a possimus excepturi minus autem? Deserunt dolorum
          fugit labore itaque cumque. Magnam molestias animi maiores magni.
          Blanditiis, consequatur. Inventore ab placeat deleniti doloribus
          laudantium excepturi nisi iste repellat debitis, possimus dicta neque
          accusantium minima corrupti incidunt nesciunt aliquam velit maiores!
          Reiciendis architecto officiis voluptatum molestiae culpa, sed
          accusamus placeat iste, veniam molestias nihil quod eaque? Praesentium
          possimus dolorum, nesciunt quis doloremque cupiditate. Quisquam,
          provident. Minus ea facere voluptatem id eveniet ducimus vero itaque
          dolores, sequi est voluptatibus. Atque facere repellat alias soluta,
          quod sunt labore? Modi doloremque, rem maiores iure recusandae
          corrupti. voluptas expedita quia aut error debitis sapiente. Pariatur
          eos sint facere voluptatem sapiente quod nesciunt aut dicta expedita
          minima, eius ipsa libero adipisci deserunt ut accusantium aspernatur
          molestias nisi dolorem totam, ipsum nihil laudantium, natus maiores!
          Nostrum vero deserunt, nihil tempore id unde rerum asperiores aut
          minima distinctio recusandae mollitia? Eius vitae quisquam autem
          delectus voluptatibus debitis quos quis tempora architecto non quas
          ut, quia consequuntur voluptatem sed. Sunt autem tempora unde
          reprehenderit numquam, in ex consequuntur, suscipit id expedita dicta
          labore, at corporis. Nam animi pariatur quam a distinctio. Iusto
          fugiat qui a neque, tempore consequatur nostrum quos expedita itaque
          veniam rerum error dolores esse commodi sapiente quisquam iste
          voluptatem beatae doloribus ut sit impedit? Praesentium deleniti
          cupiditate asperiores laudantium recusandae sapiente, minima debitis
          distinctio sed eum maxime incidunt provident reiciendis doloribus.
          Temporibus qui consectetur laborum earum numquam eligendi quibusdam
          aspernatur debitis consequuntur quae a, tenetur unde modi! Officiis
          labore doloribus id? At deleniti quis est doloribus accusantium
          repudiandae iusto facilis mollitia nulla consequatur quod vitae magnam
          dicta nisi vel, doloremque error nesciunt atque nobis odit adipisci
          esse repellat? Ipsam dolores aperiam provident aliquid minima? Illo
          eaque reprehenderit nesciunt culpa. Quibusdam excepturi deserunt
          similique doloribus quas possimus culpa totam odit minus sint dolor,
          modi ipsa quae et unde! Saepe qui vitae nesciunt id explicabo
          voluptate pariatur, aspernatur rerum. Esse amet natus tempore sit
          eaque, accusamus asperiores, doloremque incidunt officiis dicta
          possimus at pariatur neque dignissimos impedit eos sequi quae modi.
          Dignissimos harum eligendi debitis inventore. Quidem delectus neque
          sit natus veniam odit quos sapiente eaque asperiores quaerat a,
          dolorum blanditiis consequuntur culpa saepe vel excepturi quibusdam
          debitis illo fugit laudantium iusto! Eos repellendus qui quae quia
          eaque enim eveniet, minima expedita possimus cumque itaque. Vitae illo
          facilis ad veritatis suscipit accusamus laudantium iste. Quia veniam
          aspernatur totam, non maxime maiores ratione tenetur hic impedit
          architecto vitae reprehenderit commodi facilis deserunt, sapiente
          adipisci? Labore eos possimus voluptatum consequatur temporibus sequi
          illum impedit hic nam quia veritatis tenetur minus molestias expedita,
          soluta saepe ab quaerat delectus tempore, sit ipsa! Rem, odio nobis!
          Sint sed sapiente harum ad vel sit quo eius libero, beatae alias,
          laudantium corrupti neque eum nisi dignissimos ex iste odit blanditiis
          provident animi nemo, delectus dolores numquam recusandae. Expedita
          nihil impedit assumenda ducimus quas cupiditate molestias debitis
          consequatur, voluptate nulla natus architecto fugiat vero, ratione
          asperiores dignissimos? Quod rem, nam nisi non, eveniet voluptatibus
          vero fuga delectus quibusdam unde quae exercitationem laudantium ad
          corrupti! Voluptate odit quibusdam animi commodi quos deleniti
          asperiores unde atque veritatis labore, vel officiis magnam nisi
          quidem impedit dolorum expedita. Nobis unde quam quibusdam inventore
          eligendi odio accusantium facere quidem? Nam unde libero, cupiditate
          aliquid iusto nulla vitae atque beatae distinctio doloribus alias
          corrupti natus? Tempore molestiae dolorum totam, vel pariatur
          voluptatum necessitatibus! Doloribus magnam delectus veritatis
          corporis deleniti eius ipsa. Sunt dignissimos temporibus corporis
          veniam? Nisi magni atque fugiat, quod exercitationem nam odio
          perspiciatis assumenda corrupti dolor sit praesentium tenetur
          accusamus commodi at quisquam ex! Voluptas officiis ipsa iste sunt
          quidem quae et nihil reiciendis? Suscipit deleniti dolorum consequatur
          dolorem, hic, modi ea corrupti sunt non, itaque illum animi repellat
          quam culpa fuga quasi nihil? Illo deleniti. quis nostrum voluptates
          officia impedit veritatis saepe earum harum delectus, quas alias,
          praesentium laborum provident consequatur reprehenderit hic.
          Distinctio cum aperiam quaerat hic, beatae quos voluptatum? Eius odio
          eligendi quia quam sequi enim ratione excepturi, natus quis nemo, sunt
          quae placeat autem facilis rem perferendis aliquam, reiciendis
          praesentium quaerat vero reprehenderit. Necessitatibus quia inventore
          veniam laudantium adipisci rem reiciendis cum deleniti non porro
          reprehenderit quam unde sit id, excepturi recusandae maxime ullam,
          magnam voluptatem asperiores exercitationem officiis. Quae maiores
          provident mollitia cumque reiciendis nihil nesciunt eos voluptatem
          ullam aliquid sapiente quasi harum voluptate odio sit, amet, dolor
          similique commodi suscipit maxime blanditiis facere explicabo? Facilis
          maiores dolores alias et aut mollitia fugit amet molestias reiciendis
          delectus, sint voluptatem laborum illum tempore minima vitae,
          quibusdam assumenda laudantium iure dolor laboriosam veniam harum?
          Commodi tempora molestias beatae facere cupiditate porro unde ipsum,
          quasi asperiores, nostrum necessitatibus soluta consectetur
          voluptatibus culpa cum sit perspiciatis ea quia iste vel dolores
          maiores odit ipsam? Nemo obcaecati quos aut eaque possimus excepturi
          et ab sapiente architecto libero veritatis ex vitae, id ipsa ullam
          quas esse saepe a, totam, hic magnam adipisci. Similique ipsa deleniti
          quidem soluta! Dolorem id recusandae distinctio saepe. Doloribus,
          maxime ullam error eum consectetur sed aliquid saepe ratione incidunt
          minima atque adipisci at beatae delectus tempore magni aperiam
          asperiores pariatur quia dolorum tenetur repudiandae. Fuga nulla
          voluptate animi accusantium nesciunt quos commodi esse. Quibusdam
          repudiandae neque maiores natus modi nostrum ea nam soluta adipisci
          reprehenderit temporibus repellendus, autem eaque mollitia hic rerum
          illo, pariatur earum laudantium animi.
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingHorizontal: 15,
    // paddingBottom: 20,
  },
  bannerImg: {
    height: 300,
    width: '100%',
    resizeMode: 'cover',
  },
  heading: {
    marginTop: 20,
    marginBottom: 20,
    fontSize: 20,
    fontWeight: '500',
    color: '#000',
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 16,
    paddingHorizontal: 20,
    color: '#333',
  },
  close: {
    position: 'absolute',
    top: 20,
    right: 20,
    padding: 7,
    backgroundColor: '#f2f5fb',
    borderRadius: 100,
    zIndex: 999,
  },
});
