import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Component() {
  const upcomingBookings = [
    {
      id: 1,
      gymName: "Fitness Central",
      location: "123 Main St, Anytown USA",
      date: "June 15, 2023",
      amount: "$50.00",
      status: "upcoming",
    },
    {
      id: 2,
      gymName: "Wellness Gym",
      location: "456 Oak Rd, Somewhere City",
      date: "July 1, 2023",
      amount: "$75.00",
      status: "upcoming",
    },
    {
      id: 3,
      gymName: "Strength Studio",
      location: "789 Elm St, Othertown",
      date: "August 10, 2023",
      amount: "$60.00",
      status: "upcoming",
    },
  ]
  const pastBookings = [
    {
      id: 4,
      gymName: "Fitness Oasis",
      location: "321 Pine Ln, Anytown USA",
      date: "May 1, 2023",
      amount: "$45.00",
      status: "past",
    },
    {
      id: 5,
      gymName: "Wellness Center",
      location: "654 Oak Rd, Somewhere City",
      date: "April 15, 2023",
      amount: "$65.00",
      status: "past",
    },
    {
      id: 6,
      gymName: "Strength Emporium",
      location: "987 Elm St, Othertown",
      date: "March 20, 2023",
      amount: "$55.00",
      status: "past",
    },
  ]
  return (
    <div className="container mx-auto px-6 py-8 sm:px-8 lg:px-10">
      <h1 className="text-2xl font-bold mb-6">Booking History</h1>
      <div className="grid gap-8">
        <div>
          <h2 className="text-xl font-bold mb-4">Upcoming Bookings</h2>
          <div className="grid gap-6">
            {upcomingBookings.map((booking) => (
              <Card key={booking.id} className="grid grid-cols-[1fr_120px] gap-6 px-4 py-4">
                <div className="grid gap-2">
                  <h3 className="text-lg font-semibold">{booking.gymName}</h3>
                  <p className="text-muted-foreground">{booking.location}</p>
                  <p className="text-muted-foreground">{booking.date}</p>
                  <p className="font-medium">{booking.amount}</p>
                </div>
                <div className="flex items-center justify-end">
                  <Button variant="outline" size="sm">
                    Update
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4">Past Bookings</h2>
          <div className="grid gap-6">
            {pastBookings.map((booking) => (
              <Card key={booking.id} className="grid grid-cols-[1fr_120px] gap-6 px-4 py-4">
                <div className="grid gap-2">
                  <h3 className="text-lg font-semibold">{booking.gymName}</h3>
                  <p className="text-muted-foreground">{booking.location}</p>
                  <p className="text-muted-foreground">{booking.date}</p>
                  <p className="font-medium">{booking.amount}</p>
                </div>
                <div className="flex items-center justify-end">
                  <Button variant="outline" size="sm">
                    Rate
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}