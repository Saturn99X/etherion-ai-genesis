
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
          booking_date: selectedDate.toISOString().split('T')[0], // Format as YYYY-MM-DD
          booking_time: selectedTime,
        },
      });

      if (error) throw error;

      onSuccess();
    } catch (error: any) {
      console.error('Error booking call:', error);
      const errorMessage = error?.message || 'Failed to book call. Please try again.';
      alert(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const today = new Date();
  today.setHours(0, 0, 0, 0); // Set time to the beginning of the day

  const nextMonth = new Date();
  nextMonth.setMonth(nextMonth.getMonth() + 1);

  return (
    <Card className="bg-slate-800/50 backdrop-blur-lg border border-slate-600/40 w-full max-w-md mx-auto"> {/* Added w-full, max-w-md, mx-auto */}
      <CardHeader className="text-center px-4 pt-6 sm:px-6 sm:pt-8"> {/* Responsive padding */}
        <Clock className="text-etherion-blue mx-auto mb-2 sm:mb-3" size={36} /> {/* Responsive size/margin */}
        <CardTitle className="text-white text-xl sm:text-2xl font-bold">Book Your 15-Minute Call</CardTitle> {/* Responsive text */}
      </CardHeader>
      <CardContent className="space-y-4 px-4 pb-6 sm:px-6 sm:pb-8"> {/* Responsive padding */}
        <div>
          <Label htmlFor="name" className="text-white text-sm sm:text-base">Your Name</Label> {/* Responsive text */}
          <Input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="bg-slate-700/50 border-slate-600 text-white placeholder-slate-400 mt-1.5" // Added margin-top
          />
        </div>
        
        <div>
          <Label htmlFor="email" className="text-white text-sm sm:text-base">Your Email</Label> {/* Responsive text */}
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="bg-slate-700/50 border-slate-600 text-white placeholder-slate-400 mt-1.5" // Added margin-top
          />
        </div>

        <div>
          <Label className="text-white text-sm sm:text-base">Select Date</Label> {/* Responsive text */}
          <div className="bg-slate-700/30 rounded-lg p-2 sm:p-3 mt-1.5 overflow-x-auto"> {/* Added overflow-x-auto, adjusted padding and margin */}
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              disabled={(date) => date < today || date > nextMonth}
              className="rounded-md"
            />
          </div>
        </div>

        {selectedDate && (
          <div>
            <Label className="text-white text-sm sm:text-base">Select Time (Any Hour Available)</Label> {/* Responsive text */}
            <div className="mt-1.5 max-h-40 overflow-y-auto bg-slate-700/30 rounded-lg p-2 sm:p-3"> {/* Adjusted padding and margin */}
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-2"> {/* Default to 3 cols for slightly more space */}
                {timeSlots.map((time) => (
                  <Button
                    key={time}
                    variant={selectedTime === time ? "default" : "outline"}
                    size="sm" // size="sm" is already quite small
                    onClick={() => setSelectedTime(time)}
                    className={
                      selectedTime === time
                        ? "bg-etherion-blue text-white text-xs sm:text-sm py-2" // responsive text and padding
                        : "border-slate-600 text-slate-300 hover:bg-slate-700 text-xs sm:text-sm py-2" // responsive text and padding
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
          className="w-full bg-etherion-blue hover:bg-blue-700 text-white font-semibold py-3 rounded-lg text-sm sm:text-base" // Adjusted class for consistent button look
        >
          {isLoading ? 'Booking...' : 'Book Call'}
        </Button>
      </CardContent>
    </Card>
  );
};

export default CalendarBooking;
