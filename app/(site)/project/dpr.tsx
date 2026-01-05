import { View, Text, ScrollView, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import Screen from "../../components/Screen";
import DPRForm from "../../components/site/DPRFrom";
import { styles } from "../../styles/Site/dpr.styles";
import { Image } from "react-native";


export default function DPRPage() {
  const router = useRouter();
  const waterproofingImages = [
  "https://i.pinimg.com/1200x/a2/3d/e1/a23de192035ea3445dc927876d685a3c.jpg",
  "https://i.pinimg.com/1200x/cc/08/fa/cc08fa4269f4a08e5f1a5b875a1e199a.jpg",
  "https://i.pinimg.com/736x/e9/ce/ce/e9cece43173b086e740dc5c071d6a40a.jpg",
];

  const plumbingImages = [
  "https://i.pinimg.com/736x/26/75/25/267525f8e8381a298d1d594f7d0ef70b.jpg",
  "https://i.pinimg.com/736x/03/bb/ec/03bbec6dbf085d116512f900b1e9df1f.jpg",
  "https://i.pinimg.com/736x/48/ca/5b/48ca5b3d5f25abfd9960483b71787a52.jpg",
];



  return (
    <Screen>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Pressable onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={22} />
          </Pressable>
          <Text style={styles.title}>Daily Progress Report</Text>
        </View>

        <Pressable style={styles.addNew}>
          <Ionicons name="add" size={18} />
          <Text>Add new</Text>
        </Pressable>

        {/* Reusable Form */}
        <DPRForm />

        {/* Completed Tasks */}
        <Text style={styles.section}>Completed Tasks</Text>

        <View style={styles.taskCard}>
            <Text style={styles.taskTitle}>Waterproofing</Text>
            <Text style={styles.taskDesc}>
               Sealed and treated B Wing surfaces to prevent seepage and long-term water damage.
                Preparatory checks completed; C Wing waterproofing scheduled next.
            </Text>
                        <View style={{ flexDirection: "row", marginTop: 10 }}>
                {waterproofingImages.map((uri, index) => (
                    <Image
                    key={index}
                    source={{ uri }}
                    style={{
                        width: 70,
                        height: 70,
                        borderRadius: 8,
                        marginRight: 8,
                        backgroundColor: "#eee",
                    }}
                    />
                ))}
         </View>
        </View>



         <View style={styles.taskCard}>
            <Text style={styles.taskTitle}>Plumbing</Text>
            <Text style={styles.taskDesc}>
                Installed and tested plumbing lines in B Wing ensuring proper flow and leakage control.
                C Wing plumbing work is planned to begin in the following phase.     </Text>
                        <View style={{ flexDirection: "row", marginTop: 10 }}>
                {plumbingImages.map((uri, index) => (
                    <Image
                    key={index}
                    source={{ uri }}
                    style={{
                        width: 70,
                        height: 70,
                        borderRadius: 8,
                        marginRight: 8,
                        backgroundColor: "#eee",
                    }}
                    />
                ))}
         </View>
        </View>




      </ScrollView>
    </Screen>
  );
}
