export type Client = {
  id: string;
  name: string;
  gstin: string;
  site: string;
};

export const CLIENTS: Client[] = [
  {
    id: "lotus",
    name: "Lotus Residency",
    gstin: "27G75348H547F002H",
    site: "Pune, Maharashtra",
  },
  {
    id: "metro",
    name: "Metro Tower",
    gstin: "29ABCD1234E1Z5",
    site: "Mumbai, Maharashtra",
  },
  {
    id: "smart",
    name: "Smart City",
    gstin: "07XYZP1234Q1Z9",
    site: "Delhi, NCR",
  },
];
