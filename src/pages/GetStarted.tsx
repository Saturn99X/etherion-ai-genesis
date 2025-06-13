
import { useState } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import MouseGlow from "../components/MouseGlow";
import CalendarBooking from "../components/CalendarBooking";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { supabase } from '@/integrations/supabase/client';

const GetStarted = () => {
  const [email, setEmail] = useState('');
  const [showBookCall, setShowBookCall] = useState(false);
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [callBooked, setCallBooked] = useState(false);

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      try {
        const { error } = await supabase.functions.invoke('send-contact-email', {
          body: {
            type: 'ebook',
            email,
          },
        });

        if (error) throw error;
        
        console.log('Ebook request sent:', email);
        setEmailSubmitted(true);
      } catch (error) {
        console.error('Error sending ebook request:', error);
        alert('Failed to submit request. Please try again.');
      }
    }
  };

  const handleBookCall = () => {
    setShowBookCall(true);
  };

  const handleCallBooked = () => {
    setCallBooked(true);
    setShowBookCall(false);
  };

  return (
    <div className="relative flex min-h-screen flex-col bg-etherion-dark overflow-x-hidden">
      <MouseGlow />
      <div className="layout-container flex h-full grow flex-col">
        <Header />
        <div className="px-4 sm:px-6 md:px-10 lg:px-40 flex flex-1 justify-center py-5 sm:py-8">
          <div className="layout-content-container flex flex-col max-w-[800px] flex-1">
            <div className="py-6 sm:py-10">
              <div className="text-center mb-6 sm:mb-8">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4 px-4 sm:px-0">
                  Ready to Automate Your Business?
                </h1>
                <p className="text-sm sm:text-base md:text-lg text-etherion-text px-4 sm:px-0">
                  Get our free automation guide or book a quick 15-minute consultation.
                </p>
              </div>

              {!showBookCall ? (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                  <Card className="bg-slate-800/50 backdrop-blur-lg border border-slate-600/40">
                    <CardHeader className="text-center p-4 sm:p-6">
                      <BookOpen className="text-etherion-blue mx-auto mb-2" size={32} />
                      <CardTitle className="text-white text-lg sm:text-xl">Free Automation Guide</CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 sm:p-6 pt-0">
                      <p className="text-etherion-text text-sm sm:text-base mb-4 text-center">
                        Get our comprehensive ebook on business automation strategies delivered to your inbox.
                      </p>
                      {emailSubmitted ? (
                        <div className="text-center">
                          <div className="text-green-500 mb-2">✓</div>
                          <p className="text-green-500 text-sm">Check your email for the download link!</p>
                        </div>
                      ) : (
                        <form onSubmit={handleEmailSubmit} className="space-y-3">
                          <Input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="bg-slate-700/50 border-slate-600 text-white placeholder-slate-400 text-sm sm:text-base"
                          />
                          <Button type="submit" className="w-full bg-etherion-blue hover:bg-blue-600 text-sm sm:text-base">
                            Get Free Ebook
                          </Button>
                        </form>
                      )}
                    </CardContent>
                  </Card>

                  <Card className="bg-slate-800/50 backdrop-blur-lg border border-slate-600/40">
                    <CardHeader className="text-center p-4 sm:p-6">
                      <Calendar className="text-etherion-blue mx-auto mb-2" size={32} />
                      <CardTitle className="text-white text-lg sm:text-xl">Book a 15-Min Call</CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 sm:p-6 pt-0">
                      <p className="text-etherion-text text-sm sm:text-base mb-4 text-center">
                        Schedule a quick 15-minute call to discuss your specific automation needs.
                      </p>
                      {callBooked ? (
                        <div className="text-center">
                          <div className="text-green-500 mb-2">✓</div>
                          <p className="text-green-500 text-sm">Call booked successfully! We'll be in touch soon.</p>
                        </div>
                      ) : (
                        <Button 
                          onClick={handleBookCall}
                          className="w-full bg-green-600 hover:bg-green-700 text-sm sm:text-base"
                        >
                          Book Free Call
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                </div>
              ) : (
                <div className="mb-6 sm:mb-8">
                  <CalendarBooking onSuccess={handleCallBooked} />
                  <div className="text-center mt-4 sm:mt-6">
                    <Button 
                      variant="outline" 
                      onClick={() => setShowBookCall(false)}
                      className="border-slate-600 text-slate-300 hover:bg-slate-700 text-sm sm:text-base px-4 sm:px-6"
                    >
                      Back to Options
                    </Button>
                  </div>
                </div>
              )}

              {!showBookCall && (
                <div className="text-center px-4 sm:px-0">
                  <p className="text-etherion-text text-xs sm:text-sm mb-3 sm:mb-4">
                    Want to provide more details about your business first?
                  </p>
                  <Link to="/detailed-consultation">
                    <Button variant="outline" size="sm" className="border-etherion-blue text-etherion-blue hover:bg-etherion-blue hover:text-white text-sm">
                      Fill Detailed Form
                      <ArrowRight size={14} className="ml-2" />
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default GetStarted;
