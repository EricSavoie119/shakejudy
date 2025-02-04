import { Card } from "@/components/ui/card"

const bandMembers = [
  { name: "Emma", role: "Lead Vocals" },
  { name: "Ollie", role: "Bass, Backup Vocals" },
  { name: "Eric", role: "Guitar" },
  { name: "Josh", role: "Drums" },
]

export default function BandMembers() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {bandMembers.map((member) => (
        <Card key={member.name} className="p-6 text-center hover:bg-accent transition-colors">
          <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
          <p className="text-sm text-muted-foreground">{member.role}</p>
        </Card>
      ))}
    </div>
  )
}

