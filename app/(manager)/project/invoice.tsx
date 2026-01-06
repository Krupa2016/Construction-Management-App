import { View, Text, ScrollView, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import Screen from "../../components/Screen";
import { PROJECTS } from "../../data/project";
import { styles } from "../../styles/Manager/invoice.styles";
import { generateInvoicePDF } from "../../utils/invoicePdf";

const ITEMS = [
  { name: "Cement", qty: "100 bags", rate: 20000 },
  { name: "Steel", qty: "10 tonnes", rate: 40000 },
  { name: "Sand", qty: "1000 bags", rate: 30000 },
  { name: "Bricks", qty: "5000 pieces", rate: 25000 },
];

export default function InvoicePage() {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();

  const project = PROJECTS.find(p => p.id === id);
  if (!project) return null;

  const subTotal = ITEMS.reduce((a, b) => a + b.rate, 0);
  const gst = Math.round(subTotal * 0.09);
  const total = subTotal + gst;

  return (
    <Screen>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Pressable onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={22} />
          </Pressable>
          <Text style={styles.title}>GST Invoice</Text>
        </View>

        {/* Invoice Card */}
        <View style={styles. invoiceCard}>
          <Text style={styles.invoiceNo}>Invoice No: 54967969</Text>

          {/* Seller */}
          <Text style={styles.title}>Quasar Construction</Text>
          <Text>GSTIN : 63590BYGHG69</Text>
          <Text>Mumbai, Maharashtra</Text>
          <Text>Date : 24 April 2026</Text>

          <View style={styles.divider} />

          {/* Client */}
          <Text style={styles.title}>{project.name}</Text>
          <Text>GSTIN : 27675348H547F002H</Text>
          <Text>{project.location}</Text>

          {/* Table */}
          <View style={styles.tableHeader}>
            <Text>Item</Text>
            <Text>Quantity</Text>
            <Text>Rate</Text>
          </View>

          {ITEMS.map((item, i) => (
            <View key={i} style={styles.tableRow}>
              <Text>{item.name}</Text>
              <Text>{item.qty}</Text>
              <Text>{item.rate.toLocaleString()}</Text>
            </View>
          ))}

          <View style={styles.divider} />

          <View style={styles.tableRow}>
            <Text>GST</Text>
            <Text>9%</Text>
            <Text>{gst.toLocaleString()}</Text>
          </View>

          <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>TOTAL</Text>
            <Text style={styles.totalLabel}>
              {total.toLocaleString()}
            </Text>
          </View>
        </View>

        {/* Actions */}
        <View style={styles.actionRow}>
          <Pressable
            style={styles.button}
            onPress={() => generateInvoicePDF(project, ITEMS)}
          >
            <Text>Download</Text>
          </Pressable>

          <Pressable style={styles.button}>
            <Text>Edit</Text>
          </Pressable>

          <Pressable style={styles.button}>
            <Text>Save</Text>
          </Pressable>
        </View>
      </ScrollView>
    </Screen>
  );
}
