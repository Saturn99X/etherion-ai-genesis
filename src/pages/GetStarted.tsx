
import { useState } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import MouseGlow from "../components/MouseGlow";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const GetStarted = () => {
  const [email, setEmail] = useState('');
  const [showBookCall, setShowBookCall] = useState(false);
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Here you would typically send the email to your backend
      console.log('Email submitted:', email);
      setEmailSubmitted(true);
    }
  };

  const handleBookCall = () => {
    setShowBookCall(true);
  };

  return (
    <div className="relative flex min-h-screen flex-col bg-etherion-dark overflow-x-hidden">
      <MouseGlow />
      <div className="layout-container flex h-full grow flex-col">
        <Header />
        <div className="px-4 md:px-10 lg:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[600px] flex-1">
            <div className="py-10">
              <div className="text-center mb-8">
                <h1 className="text-white text-4xl font-bold mb-4">
                  Ready to Automate Your Business?
                </h1>
                <p className="text-etherion-text text-lg">
                  Start your automation journey with our free resources or book a personalized consultation.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Card className="bg-slate-800/50 backdrop-blur-lg border border-slate-600/40">
                  <CardHeader className="text-center">
                    <BookOpen className="text-etherion-blue mx-auto mb-2" size={40} />
                    <CardTitle className="text-white">Free Automation Guide</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-etherion-text text-sm mb-4 text-center">
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
                          className="bg-slate-700/50 border-slate-600 text-white placeholder-slate-400"
                        />
                        <Button type="submit" className="w-full bg-etherion-blue hover:bg-blue-600">
                          Get Free Ebook
                        </Button>
                      </form>
                    )}
                  </CardContent>
                </Card>

                <Card className="bg-slate-800/50 backdrop-blur-lg border border-slate-600/40">
                  <CardHeader className="text-center">
                    <Calendar className="text-etherion-blue mx-auto mb-2" size={40} />
                    <CardTitle className="text-white">Book a Consultation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-etherion-text text-sm mb-4 text-center">
                      Schedule a free 30-minute call to discuss your specific automation needs.
                    </p>
                    {!showBookCall ? (
                      <Button 
                        onClick={handleBookCall}
                        className="w-full bg-green-600 hover:bg-green-700"
                      >
                        Book Free Call
                      </Button>
                    ) : (
                      <div className="space-y-4">
                        <div className="bg-slate-700/50 p-4 rounded-lg text-center">
                          <p className="text-white text-sm mb-3">
                            Great! We'll connect you with our booking system.
                          </p>
                          <p className="text-etherion-text text-xs mb-3">
                            In the meantime, would you like to provide more details about your business?
                          </p>
                          <Link to="/detailed-consultation">
                            <Button variant="outline" size="sm" className="border-etherion-blue text-etherion-blue hover:bg-etherion-blue hover:text-white">
                              Provide More Details
                              <ArrowRight size={16} className="ml-2" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>

              <div className="text-center">
                <p className="text-etherion-text text-sm">
                  Have questions? <a href="#footer" className="text-etherion-blue hover:underline">Contact us</a> directly.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default GetStarted;
