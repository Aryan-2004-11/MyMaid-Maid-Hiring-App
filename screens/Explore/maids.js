import React from "react";
import { StyleSheet, View, Image, Text, FlatList } from "react-native";

const maids = [
  {
    id: 1,
    name: "Asha",
    image: "https://www.bookmybai.com/files/Thumbs/CID_224471_638155980685866171-WhatsApp-Image-2023-03-28-at-10.56.43-AM.jpeg",
    description: "Experienced maid and have a good knowledge of cooking.Timing 6 Hours per day",
    status: "Available",
    price: "13000/Month",
  },
  {
    id: 2,
    name: "Swati",
    image: "https://www.bookmybai.com/files/BaiThumbs/638119962279543631-4a80047e-2ab9-415d-8d80-c6b072d95cdf.jpg",
    description: "Good cook,Good BabySitter,Good Maid",
    status: "Booked",
    price: "10000/Month",
  },
  {
    id: 3,
    name: "Payal",
    image: "https://www.bookmybai.com/files/BaiThumbs/638095550449603117-79faa1b1-f506-4afc-87e3-6588d8055918.jpeg",
    description: "Hard-working and trustworthy maid with excellent references.",
    status: "Available",
    price: "14000/Month",
  },
  {
    id: 4,
    name: "Shruti",
    image: "https://www.bookmybai.com/files/BaiThumbs/638120647600041607-c69661d8-9db9-4cf9-bc72-a5c939ce1468.jpg",
    description: "Experienced maid with a keen eye for detail.",
    status: "Available",
    price: "10000/Month",
  },
  {
    id: 5,
    name: "Kiran",
    image: "https://www.bookmybai.com/files/BaiThumbs/638149957446995705-ce66eeab-af96-4da8-8362-428d2d88753e.jpg",
    description: "Experienced maid and knows to cook food.",
    status: "Booked",
    price: "8000/Month",
  },
  {
    id: 6,
    name: "Rupa",
    image: "https://www.bookmybai.com/files/BaiThumbs/638149955941510104-7dd3de45-19c9-49dd-89ae-79267ada8f03.jpg",
    description: "Hard-working and trustworthy maid with excellent references.",
    status: "Available",
    price: "7000/Month",
  },
  {
    id: 7,
    name: "Swati",
    image: "https://www.bookmybai.com/files/Thumbs/CID_216659_638037618863468075-WhatsApp-Image-2022-11-11-at-10.43.54-AM.jpeg",
    description: "Experienced maid and a good cook also available for babysitting",
    status: "Available",
    price: "13000/Month",
  },
  // {
  //   id: 8,
  //   name: "John Smith",
  //   image: "https://randomuser.me/api/portraits/men/2.jpg",
  //   description: "Friendly and reliable maid who gets the job done.",
  //   status: "Booked",
  //   price: "$18/hour",
  // },
  // {
  //   id: 9,
  //   name: "Emily Johnson",
  //   image: "https://randomuser.me/api/portraits/women/3.jpg",
  //   description: "Hard-working and trustworthy maid with excellent references.",
  //   status: "Available",
  //   price: "$22/hour",
  // },
  // {
  //   id: 10,
  //   name: "Jane Doe",
  //   image: "https://randomuser.me/api/portraits/women/1.jpg",
  //   description: "Experienced maid with a keen eye for detail.",
  //   status: "Available",
  //   price: "$20/hour",
  // },
  // {
  //   id: 11,
  //   name: "John Smith",
  //   image: "https://randomuser.me/api/portraits/men/2.jpg",
  //   description: "Friendly and reliable maid who gets the job done.",
  //   status: "Booked",
  //   price: "$18/hour",
  // },
  // {
  //   id: 12,
  //   name: "Emily Johnson",
  //   image: "https://randomuser.me/api/portraits/women/3.jpg",
  //   description: "Hard-working and trustworthy maid with excellent references.",
  //   status: "Available",
  //   price: "$22/hour",
  // },
  // add more maids as needed
];

const MaidCard = ({ maid }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: maid.image }} style={styles.image} />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{maid.name}</Text>
        <Text style={styles.description}>{maid.description}</Text>
        <View style={styles.statusContainer}>
          <Text
            style={[
              styles.status,
              maid.status === "Available" ? styles.available : styles.booked,
            ]}
          >
            {maid.status}
          </Text>
          <Text style={styles.price}>{maid.price}</Text>
        </View>
      </View>
    </View>
  );
};

const MaidsList = () => {
  const renderItem = ({ item }) => <MaidCard maid={item} />;
  return (
    <FlatList
      data={maids}
      keyExtractor={(maid) => maid.id.toString()}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#F5B7B1",
    marginVertical: 10,
    marginHorizontal: 20,
    padding: 10,
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 100,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 10,
  },
  infoContainer: {
    flex: 2,
    paddingLeft: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
  },
  statusContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  status: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 5,
    marginRight: 10,
    fontWeight: "bold",
  },
  available: {
    backgroundColor: "#C7EA46",
    color: "#FFF",
  },
  booked: {
    backgroundColor: "#F08080",
    color: "#FFF",
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default MaidsList;
