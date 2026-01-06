import { View, Text, ScrollView, Pressable, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import Screen from "../../components/Screen";
import { styles } from "../../styles/Manager/dprApproval.styles";

const PENDING_DPR = [
  {
    id: 1,
    title: "Waterproofing",
    date: "20-01-2026",
    submittedBy: "Amit",
    desc:
      "Completed waterproofing of B wing, will start C wing tomorrow.",
    photos: [
       "https://i.pinimg.com/1200x/a2/3d/e1/a23de192035ea3445dc927876d685a3c.jpg",
  "https://i.pinimg.com/1200x/cc/08/fa/cc08fa4269f4a08e5f1a5b875a1e199a.jpg",
  "https://i.pinimg.com/736x/e9/ce/ce/e9cece43173b086e740dc5c071d6a40a.jpg",
    ],
  },
  {
    id: 2,
    title: "Plumbing",
    date: "20-01-2026",
    submittedBy: "Amit",
    desc:
      "Completed Plumbing of B wing, will start C wing tomorrow.",
    photos: [
      "https://i.pinimg.com/736x/26/75/25/267525f8e8381a298d1d594f7d0ef70b.jpg",
  "https://i.pinimg.com/736x/03/bb/ec/03bbec6dbf085d116512f900b1e9df1f.jpg",
  "https://i.pinimg.com/736x/48/ca/5b/48ca5b3d5f25abfd9960483b71787a52.jpg",
    ],
  },
];

const APPROVED_DPR = [
  {
    id: 3,
    title: "Foundational Work",
    date: "20-05-2025",
    submittedBy: "Amit",
    desc:
      "The foundational work of Lotus Residency is completed.",
    photos: [
       "https://i.pinimg.com/1200x/a2/3d/e1/a23de192035ea3445dc927876d685a3c.jpg",
      "https://i.pinimg.com/736x/26/75/25/267525f8e8381a298d1d594f7d0ef70b.jpg",
      "https://i.pinimg.com/736x/e9/ce/ce/e9cece43173b086e740dc5c071d6a40a.jpg",
    ],
  },
];

export default function DPRApproval() {
  const router = useRouter();

  return (
    <Screen>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Pressable onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={22} />
          </Pressable>
          <Text style={styles.title}>DPR Approval</Text>
        </View>

        {/* Pending DPR */}
        <Text style={styles.section}>
          <Ionicons name="time-outline" size={16} /> Pending DPR
        </Text>

        {PENDING_DPR.map(dpr => (
          <View key={dpr.id} style={styles.card}>
            <View style={styles.row}>
              <Text style={styles.task}>{dpr.title}</Text>
              <Text style={styles.date}>{dpr.date}</Text>
            </View>

            <Text style={styles.meta}>Submitted by: {dpr.submittedBy}</Text>
            <Text style={styles.desc}>{dpr.desc}</Text>

            <Text style={styles.photoLabel}>Photos :</Text>
            <View style={styles.photoRow}>
              {dpr.photos.map((uri, i) => (
                <Image key={i} source={{ uri }} style={styles.photo} />
              ))}
            </View>

            <View style={styles.actionRow}>
              <Pressable style={styles.approve}>
                <Text style={styles.btnText}>Approve</Text>
              </Pressable>
              <Pressable style={styles.reject}>
                <Text style={styles.btnText}>Reject</Text>
              </Pressable>
            </View>
          </View>
        ))}

        {/* Approved DPR */}
        <Text style={styles.section}>Approved DPR</Text>

        {APPROVED_DPR.map(dpr => (
          <View key={dpr.id} style={styles.card}>
            <View style={styles.row}>
              <Text style={styles.task}>{dpr.title}</Text>
              <Text style={styles.date}>{dpr.date}</Text>
            </View>

            <Text style={styles.meta}>Submitted by: {dpr.submittedBy}</Text>
            <Text style={styles.desc}>{dpr.desc}</Text>

            <Text style={styles.photoLabel}>Photos :</Text>
            <View style={styles.photoRow}>
              {dpr.photos.map((uri, i) => (
                <Image key={i} source={{ uri }} style={styles.photo} />
              ))}
            </View>
          </View>
        ))}
      </ScrollView>
    </Screen>
  );
}
