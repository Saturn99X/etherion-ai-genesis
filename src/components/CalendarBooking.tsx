
import { useState } from 'react';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { supabase } from '@/integrations/supabase/client';
import { Clock } from 'lucide-react';

const generateTimeSlots = () => {
  const slots = [];
  for (let hour = 0; hour < 24; hour++) {
    for (let minute = 0; minute < 60; minute += 30) {
      const timeString = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
      slots.push(timeString);
    }
  }
  return slots;
};

const timeSlots = generateTimeSlots();

interface CalendarBookingProps {
  onSuccess: () => void;
}

const CalendarBooking = ({ onSuccess }: CalendarBookingProps) => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleBooking = async () => {
    if (!selectedDate || !selectedTime || !name || !email) {
      alert('Please fill in all fields and select a date and time.');
      return;
    }

    setIsLoading(true);
    try {
      const { error } = await supabase.functions.invoke('send-contact-email', {
        body: {
          type: 'booking',
          email,
          name,
          date: selectedDate.toLocaleDateString(),
          time: selectedTime,
        },
      });

      if (error) throw error;

      onSuccess();
    } catch (error) {
      console.error('Error booking call:', error);
      alert('Failed to book call. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  const nextMonth = new Date();
  nextMonth.setMonth(nextMonth.getMonth() + 1);

  return (
    <Card className="bg-slate-800/50 backdrop-blur-lg border border-slate-600/40">
      <CardHeader className="text-center">
        <Clock className="text-etherion-blue mx-auto mb-2" size={40} />
        <CardTitle className="text-white">Book Your 15-Minute Call</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label htmlFor="name" className="text-white">Your Name</Label>
          <Input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="bg-slate-700/50 border-slate-600 text-white placeholder-slate-400"
          />
        </div>
        
        <div>
          <Label htmlFor="email" className="text-white">Your Email</Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="bg-slate-700/50 border-slate-600 text-white placeholder-slate-400"
          />
        </div>

        <div>
          <Label className="text-white">Select Date</Label>
          <div className="bg-slate-700/30 rounded-lg p-3">
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              disabled={(date) => date < tomorrow || date > nextMonth}
              className="rounded-md"
            />
          </div>
        </div>

        {selectedDate && (
          <div>
            <Label className="text-white">Select Time (Any Hour Available)</Label>
            <div className="mt-2 max-h-40 overflow-y-auto bg-slate-700/30 rounded-lg p-3">
              <div className="grid grid-cols-4 gap-2">
                {timeSlots.map((time) => (
                  <Button
                    key={time}
                    variant={selectedTime === time ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedTime(time)}
                    className={
                      selectedTime === time
                        ? "bg-etherion-blue text-white text-xs"
                        : "border-slate-600 text-slate-300 hover:bg-slate-700 text-xs"
                    }
                  >
                    {time}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        )}

        <Button
          onClick={handleBooking}
          disabled={!selectedDate || !selectedTime || !name || !email || isLoading}
          className="w-full bg-etherion-blue hover:bg-blue-600"
        >
          {isLoading ? 'Booking...' : 'Book Call'}
        </Button>
      </CardContent>
    </Card>
  );
};

export default CalendarBooking;
