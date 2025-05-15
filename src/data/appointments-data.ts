export interface AppointmentType {
  id: string
  client: {
    name: string
    email: string
    phone: string
  }
  date: string
  time: string
  service: string
  stylist: {
    id: string
    name: string
  }
  status: "confirmed" | "pending" | "cancelled"
  notes?: string
}

// Generate appointments based on the availability data from calendar-booking.tsx
export const AppointmentsData: AppointmentType[] = [
  // Emma Johnson's appointments
  {
    id: "appt-1",
    client: {
      name: "Jessica Thompson",
      email: "jessica.t@example.com",
      phone: "(555) 987-6543",
    },
    date: "2025-05-14",
    time: "9:00 AM",
    service: "Full Highlights",
    stylist: {
      id: "1",
      name: "Emma Johnson",
    },
    status: "confirmed",
    notes: "Client prefers ashy tones",
  },
  {
    id: "appt-2",
    client: {
      name: "Sarah Miller",
      email: "sarah.m@example.com",
      phone: "(555) 876-5432",
    },
    date: "2025-05-14",
    time: "11:30 AM",
    service: "Women's Cut & Style",
    stylist: {
      id: "1",
      name: "Emma Johnson",
    },
    status: "confirmed",
  },
  {
    id: "appt-3",
    client: {
      name: "Amanda Lee",
      email: "amanda.l@example.com",
      phone: "(555) 765-4321",
    },
    date: "2025-05-14",
    time: "2:00 PM",
    service: "Balayage",
    stylist: {
      id: "1",
      name: "Emma Johnson",
    },
    status: "confirmed",
    notes: "First-time client, wants caramel highlights",
  },
  {
    id: "appt-4",
    client: {
      name: "Rachel Green",
      email: "rachel.g@example.com",
      phone: "(555) 654-3210",
    },
    date: "2025-05-14",
    time: "4:30 PM",
    service: "Root Touch-up",
    stylist: {
      id: "1",
      name: "Emma Johnson",
    },
    status: "confirmed",
  },
  {
    id: "appt-5",
    client: {
      name: "Emily Wilson",
      email: "emily.w@example.com",
      phone: "(555) 543-2109",
    },
    date: "2025-05-15",
    time: "9:00 AM",
    service: "Women's Cut & Style",
    stylist: {
      id: "1",
      name: "Emma Johnson",
    },
    status: "confirmed",
  },
  {
    id: "appt-6",
    client: {
      name: "Olivia Parker",
      email: "olivia.p@example.com",
      phone: "(555) 432-1098",
    },
    date: "2025-05-15",
    time: "10:00 AM",
    service: "Partial Highlights",
    stylist: {
      id: "1",
      name: "Emma Johnson",
    },
    status: "pending",
  },
  {
    id: "appt-7",
    client: {
      name: "Madison Clark",
      email: "madison.c@example.com",
      phone: "(555) 321-0987",
    },
    date: "2025-05-15",
    time: "4:00 PM",
    service: "Color Correction",
    stylist: {
      id: "1",
      name: "Emma Johnson",
    },
    status: "confirmed",
    notes: "Fixing home dye job, allow extra time",
  },
  {
    id: "appt-8",
    client: {
      name: "Sophia Martinez",
      email: "sophia.m@example.com",
      phone: "(555) 210-9876",
    },
    date: "2025-05-16",
    time: "9:00 AM",
    service: "Women's Cut & Style",
    stylist: {
      id: "1",
      name: "Emma Johnson",
    },
    status: "confirmed",
  },

  // Michael Chen's appointments
  {
    id: "appt-9",
    client: {
      name: "James Wilson",
      email: "james.w@example.com",
      phone: "(555) 109-8765",
    },
    date: "2025-05-13",
    time: "10:00 AM",
    service: "Men's Cut & Style",
    stylist: {
      id: "2",
      name: "Michael Chen",
    },
    status: "confirmed",
  },
  {
    id: "appt-10",
    client: {
      name: "William Taylor",
      email: "william.t@example.com",
      phone: "(555) 098-7654",
    },
    date: "2025-05-13",
    time: "11:30 AM",
    service: "Men's Cut & Beard Trim",
    stylist: {
      id: "2",
      name: "Michael Chen",
    },
    status: "confirmed",
  },
  {
    id: "appt-11",
    client: {
      name: "Benjamin Harris",
      email: "benjamin.h@example.com",
      phone: "(555) 987-6543",
    },
    date: "2025-05-13",
    time: "1:30 PM",
    service: "Men's Cut & Style",
    stylist: {
      id: "2",
      name: "Michael Chen",
    },
    status: "cancelled",
    notes: "Client called to cancel",
  },
  {
    id: "appt-12",
    client: {
      name: "Ethan Lewis",
      email: "ethan.l@example.com",
      phone: "(555) 876-5432",
    },
    date: "2025-05-14",
    time: "9:00 AM",
    service: "Men's Cut & Style",
    stylist: {
      id: "2",
      name: "Michael Chen",
    },
    status: "confirmed",
  },
  {
    id: "appt-13",
    client: {
      name: "Noah Walker",
      email: "noah.w@example.com",
      phone: "(555) 765-4321",
    },
    date: "2025-05-14",
    time: "4:00 PM",
    service: "Men's Cut & Beard Trim",
    stylist: {
      id: "2",
      name: "Michael Chen",
    },
    status: "pending",
  },

  // Sophia Rodriguez's appointments
  {
    id: "appt-14",
    client: {
      name: "Isabella Johnson",
      email: "isabella.j@example.com",
      phone: "(555) 654-3210",
    },
    date: "2025-05-15",
    time: "10:00 AM",
    service: "Special Occasion Style",
    stylist: {
      id: "3",
      name: "Sophia Rodriguez",
    },
    status: "confirmed",
    notes: "Wedding guest, bring inspiration photos",
  },
  {
    id: "appt-15",
    client: {
      name: "Mia Garcia",
      email: "mia.g@example.com",
      phone: "(555) 543-2109",
    },
    date: "2025-05-15",
    time: "1:00 PM",
    service: "Bridal Hair Trial",
    stylist: {
      id: "3",
      name: "Sophia Rodriguez",
    },
    status: "confirmed",
    notes: "Bride, wedding in August",
  },
  {
    id: "appt-16",
    client: {
      name: "Charlotte Brown",
      email: "charlotte.b@example.com",
      phone: "(555) 432-1098",
    },
    date: "2025-05-15",
    time: "4:00 PM",
    service: "Updo",
    stylist: {
      id: "3",
      name: "Sophia Rodriguez",
    },
    status: "confirmed",
  },
  {
    id: "appt-17",
    client: {
      name: "Amelia Davis",
      email: "amelia.d@example.com",
      phone: "(555) 321-0987",
    },
    date: "2025-05-17",
    time: "9:00 AM",
    service: "Blowout & Style",
    stylist: {
      id: "3",
      name: "Sophia Rodriguez",
    },
    status: "pending",
  },

  // David Kim's appointments
  {
    id: "appt-18",
    client: {
      name: "Harper Wilson",
      email: "harper.w@example.com",
      phone: "(555) 210-9876",
    },
    date: "2025-05-13",
    time: "11:00 AM",
    service: "Keratin Treatment",
    stylist: {
      id: "4",
      name: "David Kim",
    },
    status: "confirmed",
  },
  {
    id: "appt-19",
    client: {
      name: "Evelyn Moore",
      email: "evelyn.m@example.com",
      phone: "(555) 109-8765",
    },
    date: "2025-05-13",
    time: "1:00 PM",
    service: "Deep Conditioning",
    stylist: {
      id: "4",
      name: "David Kim",
    },
    status: "confirmed",
  },
  {
    id: "appt-20",
    client: {
      name: "Abigail Thomas",
      email: "abigail.t@example.com",
      phone: "(555) 098-7654",
    },
    date: "2025-05-18",
    time: "10:00 AM",
    service: "Brazilian Blowout",
    stylist: {
      id: "4",
      name: "David Kim",
    },
    status: "cancelled",
    notes: "Client rescheduled for next month",
  },
  {
    id: "appt-21",
    client: {
      name: "Elizabeth Jackson",
      email: "elizabeth.j@example.com",
      phone: "(555) 987-6543",
    },
    date: "2025-05-18",
    time: "2:00 PM",
    service: "Scalp Treatment",
    stylist: {
      id: "4",
      name: "David Kim",
    },
    status: "confirmed",
  },
  {
    id: "appt-22",
    client: {
      name: "Sofia White",
      email: "sofia.w@example.com",
      phone: "(555) 876-5432",
    },
    date: "2025-05-19",
    time: "11:00 AM",
    service: "Bond Repair Treatment",
    stylist: {
      id: "4",
      name: "David Kim",
    },
    status: "confirmed",
  },
  {
    id: "appt-23",
    client: {
      name: "Avery Harris",
      email: "avery.h@example.com",
      phone: "(555) 765-4321",
    },
    date: "2025-05-20",
    time: "3:00 PM",
    service: "Curl Defining Treatment",
    stylist: {
      id: "4",
      name: "David Kim",
    },
    status: "pending",
  },
]
