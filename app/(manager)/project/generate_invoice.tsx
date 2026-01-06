import { View, Text, ScrollView, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import Screen from "../../components/Screen";
import { styles } from "../../styles/Manager/generateInvoice.styles";
import { Picker } from "@react-native-picker/picker";
import { CLIENTS } from "../../data/clients";
import { Modal, TextInput } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";






export default function GenerateInvoice() {

  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
const [clientId, setClientId] = useState<string>();
const selectedClient = CLIENTS.find(c => c.id === clientId);
const invoicePayload = {
  clientId,
  clientName: selectedClient?.name,
  gstin: selectedClient?.gstin,
  site: selectedClient?.site,
};


  const ITEMS = [
    { name: "Cement", qty: "100 bags", amount: 20000 },
    { name: "Steel", qty: "10 tonnes", amount: 40000 },
    { name: "Sand", qty: "1000 bags", amount: 30000 },
    { name: "Bricks", qty: "5000 pieces", amount: 25000 },
  ];


const [itemName, setItemName] = useState("");
const [qty, setQty] = useState("");
const [price, setPrice] = useState("");
  const [items, setItems] = useState<
  { name: string; qty: number; price: number }[]
>([]);

const [showModal, setShowModal] = useState(false);


  const total = ITEMS.reduce((sum, i) => sum + i.amount, 0);

  return (
    <Screen>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Pressable onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={22} />
          </Pressable>
          <Text style={styles.title}>Generate Invoice</Text>
        </View>

        <Text style={styles.company}>Quasar Construction</Text>

        {/* Client Card */}
        <View style={styles.formCard}>


            <Text style={styles.label}>Client Name</Text>
            <View style={styles.dropdown}>
            <Picker
                selectedValue={clientId}
                onValueChange={(value) => setClientId(value)}
            >
                <Picker.Item label="Select client" value={undefined} />
                {CLIENTS.map((client) => (
                <Picker.Item
                    key={client.id}
                    label={client.name}
                    value={client.id}
                />
                ))}
            </Picker>
            </View>



            <Text style={styles.label}>Client GSTIN</Text>
            <View style={styles.dropdown}>
            <Picker enabled={!!selectedClient}>
                {selectedClient ? (
                <Picker.Item
                    label={selectedClient.gstin}
                    value={selectedClient.gstin}
                />
                ) : (
                <Picker.Item label="Select client first" value="" />
                )}
            </Picker>
            </View>


            <Text style={styles.label}>Site Location</Text>
            <View style={styles.dropdown}>
            <Picker enabled={!!selectedClient}>
                {selectedClient ? (
                <Picker.Item
                    label={selectedClient.site}
                    value={selectedClient.site}
                />
                ) : (
                <Picker.Item label="Select client first" value="" />
                )}
            </Picker>
            </View>

        </View>

        {/* Items */}
        <View style={styles.itemsCard}>
          {ITEMS.map((item, i) => (
            <View key={i} style={styles.itemRow}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.qty}>{item.qty}</Text>
              <Text style={styles.amount}>
                {item.amount.toLocaleString()}
              </Text>
            </View>
          ))}



                <Pressable
                style={styles.addItem}
                onPress={() => setShowModal(true)}
                >
                <Ionicons name="add" size={16} />
                <Text>Add Item</Text>
                </Pressable>
                <Modal
                visible={showModal}
                transparent
                animationType="slide"
                >

                <View style={styles.modalOverlay}>
                    <View style={styles.modalCard}>
                    <Text style={styles.modalTitle}>Add Item</Text>

                    <TextInput
                        placeholder="Item name"
                        style={styles.input}
                        value={itemName}
                        onChangeText={setItemName}
                    />

                    <TextInput
                        placeholder="Quantity"
                        keyboardType="numeric"
                        style={styles.input}
                        value={qty}
                        onChangeText={setQty}
                    />

                    <TextInput
                        placeholder="Price"
                        keyboardType="numeric"
                        style={styles.input}
                        value={price}
                        onChangeText={setPrice}
                    />

                    <View style={styles.modalActions}>
                        <Pressable onPress={() => setShowModal(false)}>
                        <Text>Cancel</Text>
                        </Pressable>

                        <Pressable
                        style={styles.saveBtn}
                        onPress={() => {
                            setItems(prev => [
                            ...prev,
                            {
                                name: itemName,
                                qty: Number(qty),
                                price: Number(price),
                            },
                            ]);

                            setItemName("");
                            setQty("");
                            setPrice("");
                            setShowModal(false);
                        }}
                        >
                        <Text style={styles.saveText}>Add</Text>
                        </Pressable>
                    </View>
                    </View>
                </View>
                </Modal>

                {items.map((item, index) => (
                <View key={index} style={styles.itemRow}>
                    <Text>{item.name}</Text>
                    <Text>{item.qty}</Text>
                    <Text>₹{item.price}</Text>
                </View>
                ))}





          <View style={styles.totalRow}>
            <Text style={styles.totalText}>TOTAL</Text>
            <Text style={styles.totalAmount}>
              {total.toLocaleString()}
            </Text>
          </View>
        </View>

        {/* Generate */}
           <Pressable
                    style={styles.generateBtn}
                    onPress={() =>
                   router.push(`/project/invoice?id=${id}`)
                    }>
          <Text style={styles.generateText}>Generate Invoice</Text>
        </Pressable>
      </ScrollView>
    </Screen>
  );
}
